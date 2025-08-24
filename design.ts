import { Router } from "express";
import { PrismaClient, Prisma } from "./generated/prisma";
import crypto from "crypto";

const prisma = new PrismaClient();
const router = Router();

// Get all designs
router.get("/", async (req, res) => {
  try {
    const designs = await prisma.design.findMany();
    res.json({ designs });
  } catch (error) {
    console.log(`Message: ${error}`);
    res.status(500).json({ error, message: "Failed to fetch designs" });
  }
});

// Get a design by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const design = await prisma.design.findUnique({ where: { id } });
    if (!design) return res.status(404).json({ error: "Design not found" });
    res.json({ design });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch design" });
  }
});

// Get related designs (excluding current)
router.get("/:id/related", async (req, res) => {
  const { id } = req.params;
  try {
    const designs = await prisma.design.findMany({
      where: { NOT: { id } },
      take: 4,
    });
    res.json({ designs });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch related designs" });
  }
});

// export default moved to bottom

// Create a new design
router.post("/", async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      price,
      fabricType,
      tailorId,
      tags,
      images,
    } = req.body;

    // Normalize category to Prisma enum keys: FORMAL, BUSINESS, CASUAL, SEMI_FORMAL
    const allowed = ["FORMAL", "BUSINESS", "CASUAL", "SEMI_FORMAL"];
    const normalizedCategoryKey =
      typeof category === "string"
        ? String(category)
            .toUpperCase()
            .replace(/[^A-Z0-9]+/g, "_")
            .replace(/__+/g, "_")
            .replace(/^_|_$/g, "")
        : "CASUAL";

    const finalCategory = allowed.includes(normalizedCategoryKey)
      ? normalizedCategoryKey
      : "CASUAL";

    const design = await prisma.design.create({
      data: {
        id: crypto.randomUUID(),
        title,
        description,
        // Cast to any because generated Prisma enum types are exported differently
        // at runtime; this avoids compile errors while ensuring the DB gets a valid value.
        category: finalCategory as any,
        price,
        fabricType,
        tailor: { connect: { id: tailorId } },
        tags,
        imageUrls: images,
        created: new Date(),
      },
    });
    console.log(`Design created: ${design.id}`);
    res.json({ design });
  } catch (error) {
    console.log(`Message: ${error}`);
    res.status(500).json({ error, message: "Failed to create design" });
  }
});

export default router;
