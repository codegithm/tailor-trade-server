import { Router } from "express";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();
const router = Router();

// Get designs for a user
router.get("/designs/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const designs = await prisma.design.findMany({
      where: { tailorId: userId },
    });
    res.json({ designs });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch designs" });
  }
});

// Get custom requests for a user
router.get("/requests/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const requests = await prisma.customRequest.findMany({
      where: { customerId: userId },
    });
    res.json({ requests });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch requests" });
  }
});

// Get all custom requests (for tailors)
router.get("/requests", async (req, res) => {
  try {
    const requests = await prisma.customRequest.findMany({
      orderBy: { created: "desc" },
      include: { customer: true, bids: true },
    });
    res.json({ requests });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch all requests" });
  }
});

// Create a new custom request (customer)
router.post("/requests", async (req, res) => {
  const { title, description, proposedPrice, deadline, customerId, imageUrl } =
    req.body;
  if (!title || !description || !proposedPrice || !customerId) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const data: any = {
      title,
      description,
      proposedPrice: Number(proposedPrice),
      status: "open",
      created: new Date(),
      customer: { connect: { id: customerId } },
      imageUrl,
    };
    if (deadline) {
      (data as any).deadline = new Date(deadline);
    }
    const request = await prisma.customRequest.create({ data });
    res.status(201).json({ request });
  } catch (error) {
    console.error(error); // Log the real error for debugging
    res.status(500).json({ error, message: "Failed to create request" });
  }
});

// Get bids for a user
router.get("/bids/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const bids = await prisma.bid.findMany({ where: { tailorId: userId } });
    res.json({ bids });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch bids" });
  }
});

// Get measurements for a user
router.get("/measurements/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const measurements = await prisma.measurement.findMany({
      where: { customerId: userId },
    });
    res.json({ measurements });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch measurements" });
  }
});

// Update or create measurements for a user
router.patch("/measurements/:userId", async (req, res) => {
  const { userId } = req.params;
  const data = req.body;
  try {
    // Check if measurement exists
    let measurement = await prisma.measurement.findFirst({
      where: { customerId: userId },
    });
    if (measurement) {
      measurement = await prisma.measurement.update({
        where: { id: measurement.id },
        data,
      });
    } else {
      measurement = await prisma.measurement.create({
        data: {
          ...data,
          customerId: userId,
          created: new Date(),
          updated: new Date(),
        },
      });
    }
    res.json({ measurement });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to update measurements" });
  }
});

// Get a single custom request by ID
router.get("/requests/request/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const request = await prisma.customRequest.findUnique({ where: { id } });
    if (!request) return res.status(404).json({ error: "Request not found" });
    res.json({ request });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch request" });
  }
});

// Update a custom request by ID
router.patch("/requests/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, proposedPrice, deadline, imageUrl } = req.body;
  try {
    const data: Record<string, any> = {
      title,
      description,
      proposedPrice: Number(proposedPrice),
      deadline: deadline ? new Date(deadline) : undefined,
      imageUrl,
    };
    // Remove undefined fields
    Object.keys(data).forEach(
      (key) => data[key] === undefined && delete data[key]
    );
    const updated = await prisma.customRequest.update({
      where: { id },
      data,
    });
    res.json({ request: updated });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to update request" });
  }
});

// Get open custom requests (for tailors)
router.get("/requests/open", async (req, res) => {
  try {
    const requests = await prisma.customRequest.findMany({
      where: {
        status: "open",
        acceptedTailorId: null,
      },
      include: { customer: true, bids: true },
      orderBy: { created: "desc" },
    });
    console.log(`Found ${requests.length} open requests`);
    res.json({ requests });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch open requests" });
  }
});

// Tailor expresses willingness to take a job (accepts request)
router.post("/requests/:id/accept", async (req, res) => {
  const { id } = req.params;
  const { tailorId } = req.body;
  if (!tailorId)
    return res
      .status(400)
      .json({ error: "Missing tailorId", message: "Missing tailorId" });
  try {
    // Optionally, add a Bid or Interest record here
    // Notify the customer
    const request = await prisma.customRequest.findUnique({ where: { id } });
    if (!request)
      return res
        .status(404)
        .json({ error: "Request not found", message: "Request not found" });
    await prisma.notification.create({
      data: {
        userId: request.customerId,
        message: `A tailor is interested in your request!`,
        requestId: id,
      },
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to accept request" });
  }
});

// Customer chooses a tailor (locks the request)
router.post("/requests/:id/choose-tailor", async (req, res) => {
  const { id } = req.params;
  const { tailorId } = req.body;
  if (!tailorId)
    return res
      .status(400)
      .json({ error: "Missing tailorId", message: "Missing tailorId" });
  try {
    const updated = await prisma.customRequest.update({
      where: { id },
      data: {
        acceptedTailorId: tailorId,
        status: "accepted",
      },
    });
    // Notify the tailor
    await prisma.notification.create({
      data: {
        userId: tailorId,
        message: `Your offer was accepted!`,
        requestId: id,
      },
    });
    res.json({ request: updated });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to choose tailor" });
  }
});

// Get notifications for a user
router.get("/notifications/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
    res.json({ notifications });
  } catch (error) {
    res.status(500).json({ error, message: "Failed to fetch notifications" });
  }
});

export default router;
