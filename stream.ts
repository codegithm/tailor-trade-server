import { Router } from "express";
import { StreamChat } from "stream-chat";
import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
interface AuthRequest extends Request {
  user?: { id: string; email: string; role: string };
}

const apiKey = process.env.STREAM_API_KEY || "";
const apiSecret = process.env.STREAM_API_SECRET || "";
const jwtSecret = process.env.JWT_SECRET || "changeme";
const serverClient = StreamChat.getInstance(apiKey, apiSecret);
const router = Router();

// JWT authentication middleware
function authenticateJWT(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, jwtSecret, (err: unknown, user: unknown) => {
      if (err) return res.sendStatus(403);
      req.user = user as { id: string; email: string; role: string };
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

// Endpoint to create a Stream user token
router.post("/token", authenticateJWT, (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  if (!userId)
    return res
      .status(400)
      .json({ error: "Missing userId", message: "Missing userId" });
  const token = serverClient.createToken(userId);
  res.json({ token });
});

// Secure endpoint to create or fetch a one-on-one channel
router.post(
  "/one-on-one-channel",
  authenticateJWT,
  async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;
    const { recipientId } = req.body;
    if (!userId || !recipientId)
      return res.status(400).json({
        error: "Missing userId or recipientId",
        message: "Missing userId or recipientId",
      });
    // Deterministic channel ID (alphabetical order)
    const members = [userId, recipientId].sort();
    const channelId = `dm-${members[0]}-${members[1]}`;
    try {
      // Create or get the channel
      const channel = serverClient.channel("messaging", channelId, {
        members,
      });
      await channel.create(); // idempotent: does nothing if exists
      res.json({ channelId });
    } catch (error) {
      res
        .status(500)
        .json({ error, message: "Failed to create or fetch channel" });
    }
  }
);

export default router;
