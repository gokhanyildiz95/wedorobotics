import { Router } from "express";
import rateLimit from "express-rate-limit";
import { randomUUID } from "crypto";
import { readJson, writeJson } from "../lib/store.js";

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Çok fazla deneme yaptınız. Lütfen biraz sonra tekrar deneyin." },
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body) {
  const errors = [];
  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const branch = String(body.branch || "").trim();

  if (name.length < 2 || name.length > 100) errors.push("Geçerli bir ad soyad girin.");
  if (phone.length < 7 || phone.length > 20) errors.push("Geçerli bir telefon numarası girin.");
  if (email && !EMAIL_RE.test(email)) errors.push("Geçerli bir e-posta adresi girin.");
  if (message.length < 5 || message.length > 2000) errors.push("Mesajınızı biraz daha detaylandırır mısınız?");

  return { errors, clean: { name, phone, email, message, branch } };
}

router.post("/", contactLimiter, async (req, res) => {
  const { errors, clean } = validate(req.body || {});

  if (errors.length > 0) {
    return res.status(400).json({ message: errors[0] });
  }

  const messages = await readJson("messages.json");
  const entry = {
    id: randomUUID(),
    ...clean,
    createdAt: new Date().toISOString(),
  };
  messages.push(entry);
  await writeJson("messages.json", messages);

  res.status(201).json({ message: "Mesajınız alındı." });
});

export default router;
