import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { api } from "../lib/api";
import Section, { Eyebrow } from "./Section";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    let active = true;
    api
      .getTestimonials()
      .then((data) => {
        if (active) setTestimonials(data);
      })
      .catch(() => {
        if (active) setTestimonials([]);
      });
    return () => {
      active = false;
    };
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <Section className="bg-blue-light/40">
      <div className="text-center mb-12">
        <Eyebrow color="blue">Veliler Ne Diyor?</Eyebrow>
        <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-ink">Ailelerimizden Notlar</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="rounded-3xl bg-white p-6 shadow-card">
            <Quote className="h-7 w-7 text-sun" strokeWidth={2.5} />
            <p className="mt-3 text-ink-soft leading-relaxed">{t.quote}</p>
            <p className="mt-4 font-display font-bold text-ink text-sm">{t.name}</p>
            {t.role ? <p className="text-xs text-ink-soft">{t.role}</p> : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
