import express from "express";
import cors from "cors";
import morgan from "morgan";
import blogRouter from "./routes/blog.js";
import testimonialsRouter from "./routes/testimonials.js";
import contactRouter from "./routes/contact.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js";

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim());

export function createApp() {
  const app = express();

  app.use(morgan("dev"));
  app.use(express.json({ limit: "50kb" }));
  app.use(
    cors({
      origin: allowedOrigins,
    }),
  );

  app.get("/health", (req, res) => res.json({ status: "ok" }));

  app.use("/api/blog", blogRouter);
  app.use("/api/testimonials", testimonialsRouter);
  app.use("/api/contact", contactRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
