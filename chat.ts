import { Router } from "express";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();
const router = Router();

// Get all chat rooms for a user
router.get("/rooms/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const rooms = await prisma.chatRoom.findMany({
      where: {
        participants: {
          some: { id: userId },
        },
      },
      include: {
        participants: true,
      },
    });
    res.json({ rooms });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch chat rooms" });
  }
});

// Get messages for a chat room
router.get("/messages/:roomId", async (req, res) => {
  const { roomId } = req.params;
  try {
    const messages = await prisma.chatMessage.findMany({
      where: { chatRoomId: roomId },
      orderBy: { timestamp: "asc" },
    });
    res.json({ messages });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch messages" });
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch users" });
  }
});

export default router;
