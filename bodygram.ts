import { Router } from "express";
import fetch from "node-fetch";

const router = Router();

router.post("/scan-token", async (req, res) => {
  const { userId } = req.body;
  try {
    const response = await fetch(
      `https://platform.bodygram.com/api/orgs/${process.env.BODYGRAM_ORG_ID}/scan-tokens`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.BODYGRAM_API_KEY!,
        },
        body: JSON.stringify({
          customScanId: userId,
          scope: [
            "api.platform.bodygram.com/scans:create",
            "api.platform.bodygram.com/scans:read",
          ],
        }),
      }
    );
    const data: any = await response.json();
    if (!response.ok)
      throw new Error(data.message || "Failed to get scan token");
    res.json({ token: data.token });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    res.status(500).json({ error: message });
  }
});

export default router;
