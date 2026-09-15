import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { api } from "../lib/api";
import { branches } from "../data/branches";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  branch: branches[0].id,
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMessage("Lütfen ad soyad, telefon ve mesaj alanlarını doldurun.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await api.sendContactMessage(form);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-mint-light p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-mint-dark" strokeWidth={2} />
        <p className="mt-4 font-display font-bold text-xl text-ink">Mesajınız alındı!</p>
        <p className="mt-2 text-ink-soft">
          En kısa sürede ekibimiz sizinle iletişime geçecek. Bize ulaştığınız için teşekkür ederiz.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 font-display font-semibold text-blue hover:text-blue-dark"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink mb-1.5">
            Ad Soyad *
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update("name")}
            className="w-full rounded-xl border-2 border-blue-light px-4 py-2.5 focus:border-blue focus:outline-none transition-colors"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-1.5">
            Telefon *
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className="w-full rounded-xl border-2 border-blue-light px-4 py-2.5 focus:border-blue focus:outline-none transition-colors"
            placeholder="05XX XXX XX XX"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1.5">
            E-posta
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            className="w-full rounded-xl border-2 border-blue-light px-4 py-2.5 focus:border-blue focus:outline-none transition-colors"
            placeholder="ornek@eposta.com"
          />
        </div>
        <div>
          <label htmlFor="branch" className="block text-sm font-semibold text-ink mb-1.5">
            İlgilendiğiniz Merkez
          </label>
          <select
            id="branch"
            value={form.branch}
            onChange={update("branch")}
            className="w-full rounded-xl border-2 border-blue-light px-4 py-2.5 focus:border-blue focus:outline-none transition-colors bg-white"
          >
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name} · {b.city}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink mb-1.5">
          Mesajınız *
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={update("message")}
          className="w-full rounded-xl border-2 border-blue-light px-4 py-2.5 focus:border-blue focus:outline-none transition-colors resize-none"
          placeholder="Çocuğunuzun yaşı ve merak ettikleriniz hakkında bize kısaca bahsedin."
        />
      </div>

      {status === "error" ? (
        <div className="flex items-start gap-2 rounded-xl bg-coral-light px-4 py-3 text-sm text-coral-dark">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          {errorMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-coral text-white font-display font-semibold text-base px-6 py-3.5 shadow-pop hover:bg-coral-dark active:translate-y-1 active:shadow-none transition-all disabled:opacity-70"
      >
        {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
        {status === "loading" ? "Gönderiliyor..." : "Mesajı Gönder"}
      </button>
    </form>
  );
}
