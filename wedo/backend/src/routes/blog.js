import { Router } from "express";
import { readJson } from "../lib/store.js";

const router = Router();

router.get("/", async (req, res) => {
  const posts = await readJson("blog.json");
  const list = posts
    .map(({ content, ...summary }) => summary)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  res.json(list);
});

router.get("/:slug", async (req, res) => {
  const posts = await readJson("blog.json");
  const post = posts.find((p) => p.slug === req.params.slug);

  if (!post) {
    return res.status(404).json({ message: "Yazı bulunamadı." });
  }

  res.json(post);
});

export default router;
