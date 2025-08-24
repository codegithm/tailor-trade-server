import { Router } from "express";
import type { Request, Response } from "express";
import { PrismaClient, UserRole } from "./generated/prisma";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { z } from "zod";
import crypto from "crypto";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as TwitterStrategy } from "passport-twitter";

const prisma = new PrismaClient();
const router = Router();
const jwtSecret = process.env.JWT_SECRET || "changeme";

passport.serializeUser((user: any, done: (err: any, id?: any) => void) =>
  done(null, user)
);
passport.deserializeUser((obj: any, done: (err: any, user?: any) => void) =>
  done(null, obj)
);

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
  role: z.enum(["CUSTOMER", "TAILOR"]),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const handleError = (err: any, res: Response) => {
  if (err instanceof z.ZodError)
    return res
      .status(400)
      .json({ error: "Validation error", details: err.errors });
  return res
    .status(500)
    .json({
      error: "Internal server error",
      message: err?.message || String(err),
    });
};

async function sendEmail(to: string, subject: string, html: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject,
    html,
  });
}
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.BACKEND_URL}/auth/google/callback`,
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: any
      ) => {
        try {
          const email = profile?.emails?.[0]?.value;
          if (!email) return done(null, false);
          let user = await prisma.user.findUnique({ where: { email } });
          if (!user) {
            user = await prisma.user.create({
              data: {
                id: uuidv4(),
                email,
                name: profile.displayName || "Google User",
                role: "CUSTOMER",
                password: crypto.randomBytes(32).toString("hex"),
                avatarUrl: profile.photos?.[0]?.value,
                emailVerified: true,
              },
            });
          }
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
}

if (process.env.FACEBOOK_CLIENT_ID && process.env.FACEBOOK_CLIENT_SECRET) {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: `${process.env.BACKEND_URL}/auth/facebook/callback`,
        profileFields: ["id", "emails", "name", "displayName", "photos"],
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: any
      ) => {
        try {
          const email = profile?.emails?.[0]?.value;
          if (!email) return done(null, false);
          let user = await prisma.user.findUnique({ where: { email } });
          if (!user) {
            user = await prisma.user.create({
              data: {
                id: uuidv4(),
                email,
                name: profile.displayName || "Facebook User",
                role: "CUSTOMER",
                password: crypto.randomBytes(32).toString("hex"),
                avatarUrl: profile.photos?.[0]?.value,
                emailVerified: true,
              },
            });
          }
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
}

if (process.env.TWITTER_CLIENT_ID && process.env.TWITTER_CLIENT_SECRET) {
  passport.use(
    new TwitterStrategy(
      {
        consumerKey: process.env.TWITTER_CLIENT_ID,
        consumerSecret: process.env.TWITTER_CLIENT_SECRET,
        callbackURL: `${process.env.BACKEND_URL}/auth/x/callback`,
        includeEmail: true,
      },
      async (token: string, tokenSecret: string, profile: any, done: any) => {
        try {
          const email = profile?.emails?.[0]?.value;
          if (!email) return done(null, false);
          let user = await prisma.user.findUnique({ where: { email } });
          if (!user) {
            user = await prisma.user.create({
              data: {
                id: uuidv4(),
                email,
                name: profile.displayName || "X User",
                role: "CUSTOMER",
                password: crypto.randomBytes(32).toString("hex"),
                avatarUrl: profile.photos?.[0]?.value,
                emailVerified: true,
              },
            });
          }
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );
}

// OAuth endpoints
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  router.get(
    "/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      session: false,
    }) as any
  );
  router.get(
    "/google/callback",
    passport.authenticate("google", { session: false }) as any,
    async (req: Request & { user?: any }, res: Response) => {
      const user = req.user;
      if (!user)
        return res.redirect(
          `${process.env.FRONTEND_URL}/login?error=oauth_failed`
        );
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        jwtSecret,
        { expiresIn: "15m" }
      );
      const refreshToken = crypto.randomBytes(64).toString("hex");
      await prisma.user.update({
        where: { id: user.id },
        data: { refreshToken },
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.redirect(
        `${process.env.FRONTEND_URL}/oauth-success?token=${token}`
      );
    }
  );
}

if (process.env.FACEBOOK_CLIENT_ID && process.env.FACEBOOK_CLIENT_SECRET) {
  router.get(
    "/facebook",
    passport.authenticate("facebook", {
      scope: ["email"],
      session: false,
    }) as any
  );
  router.get(
    "/facebook/callback",
    passport.authenticate("facebook", { session: false }) as any,
    async (req: Request & { user?: any }, res: Response) => {
      const user = req.user;
      if (!user)
        return res.redirect(
          `${process.env.FRONTEND_URL}/login?error=oauth_failed`
        );
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        jwtSecret,
        { expiresIn: "15m" }
      );
      const refreshToken = crypto.randomBytes(64).toString("hex");
      await prisma.user.update({
        where: { id: user.id },
        data: { refreshToken },
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.redirect(
        `${process.env.FRONTEND_URL}/oauth-success?token=${token}`
      );
    }
  );
}

if (process.env.TWITTER_CLIENT_ID && process.env.TWITTER_CLIENT_SECRET) {
  router.get("/x", passport.authenticate("twitter", { session: false }) as any);
  router.get(
    "/x/callback",
    passport.authenticate("twitter", { session: false }) as any,
    async (req: Request & { user?: any }, res: Response) => {
      const user = req.user;
      if (!user)
        return res.redirect(
          `${process.env.FRONTEND_URL}/login?error=oauth_failed`
        );
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        jwtSecret,
        { expiresIn: "15m" }
      );
      const refreshToken = crypto.randomBytes(64).toString("hex");
      await prisma.user.update({
        where: { id: user.id },
        data: { refreshToken },
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.redirect(
        `${process.env.FRONTEND_URL}/oauth-success?token=${token}`
      );
    }
  );
}

// Register
router.post("/register", async (req: Request, res: Response) => {
  try {
    const validated = registerSchema.parse(req.body);
    const { email, password, name, role } = validated;
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing)
      return res.status(409).json({ error: "Email already registered" });
    const hash = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");
    await prisma.user.create({
      data: {
        id: uuidv4(),
        email,
        name,
        role: role as UserRole,
        password: hash,
        verificationToken,
      },
    });
    const verifyUrl = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;
    await sendEmail(
      email,
      "Verify your email",
      `<p>Click <a href='${verifyUrl}'>here</a> to verify.</p>`
    );
    return res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    return handleError(err, res);
  }
});

// Login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const validated = loginSchema.parse(req.body);
    const user = await prisma.user.findUnique({
      where: { email: validated.email },
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    if (!user.emailVerified)
      return res.status(403).json({ error: "Please verify your email" });
    const match = await bcrypt.compare(validated.password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid password" });
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      jwtSecret,
      { expiresIn: "15m" }
    );
    const refreshToken = crypto.randomBytes(64).toString("hex");
    await prisma.user.update({
      where: { id: user.id },
      data: { refreshToken },
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({ user: { ...user, password: undefined }, token });
  } catch (err) {
    return handleError(err, res);
  }
});

// Refresh
router.post("/refresh", async (req: Request, res: Response) => {
  try {
    const refreshToken = (req as any).cookies?.refreshToken;
    if (!refreshToken)
      return res.status(401).json({ error: "No refresh token" });
    const user = await prisma.user.findFirst({
      where: { refreshToken },
      select: { id: true, email: true, role: true },
    });
    if (!user) return res.status(403).json({ error: "Invalid refresh token" });
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      jwtSecret,
      { expiresIn: "15m" }
    );
    return res.json({ token });
  } catch (err) {
    return handleError(err, res);
  }
});

// Verify email
router.get("/verify-email", async (req: Request, res: Response) => {
  const token = String(req.query.token || "");
  if (!token) return res.status(400).json({ error: "Missing token" });
  const user = await prisma.user.findUnique({
    where: { verificationToken: token },
  });
  if (!user) return res.status(400).json({ error: "Invalid token" });
  await prisma.user.update({
    where: { id: user.id },
    data: { emailVerified: true, verificationToken: null },
  });
  return res.json({ message: "Email verified" });
});

// Password reset request
router.post("/request-password-reset", async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Missing email" });
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found" });
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetExpiry = new Date(Date.now() + 1000 * 60 * 60);
    await prisma.user.update({
      where: { id: user.id },
      data: { resetToken, resetTokenExpiry: resetExpiry },
    });
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    await sendEmail(
      email,
      "Reset your password",
      `<p>Click <a href='${resetUrl}'>here</a></p>`
    );
    return res.json({ message: "Password reset email sent" });
  } catch (err) {
    return handleError(err, res);
  }
});

// Reset password
router.post("/reset-password", async (req: Request, res: Response) => {
  try {
    const { token, password } = req.body;
    if (!token || !password)
      return res.status(400).json({ error: "Missing token or password" });
    const user = await prisma.user.findUnique({ where: { resetToken: token } });
    if (!user || !user.resetTokenExpiry || user.resetTokenExpiry < new Date())
      return res.status(400).json({ error: "Invalid or expired token" });
    const hash = await bcrypt.hash(password, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hash, resetToken: null, resetTokenExpiry: null },
    });
    return res.json({ message: "Password reset successful" });
  } catch (err) {
    return handleError(err, res);
  }
});

export default router;
