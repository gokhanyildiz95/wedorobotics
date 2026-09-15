import { Router } from "express";
import { readJson } from "../lib/store.js";

const router = Router();

router.get("/", async (req, res) => {
  const testimonials = await readJson("testimonials.json");
  res.json(testimonials);
});

export default router;
