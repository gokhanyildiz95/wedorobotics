import { GraduationCap, Building2, ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Section, { Eyebrow } from "../components/Section";
import Button from "../components/Button";
import { contact } from "../data/branches";

const SOLUTIONS = [
  {
    id: "ogretmen-egitimleri",
    icon: GraduationCap,
    color: "bg-blue-light text-blue",
    title: "Öğretmen Eğitimleri",
    image: "/assets/photos/corporate-training.webp",
    description:
      "Okulunuzdaki öğretmenlere yönelik LEGO Education sertifikalı eğitim programları ile robotik ve kodlamayı sınıf içi müfredata entegre etmelerini sağlıyoruz.",
    points: [
      "LEGO Education setlerinin etkin kullanımı",
      "Ders planı ve müfredat entegrasyonu desteği",
      "Uygulamalı atölye ile sertifikalı eğitim",
    ],
  },
  {
    id: "lego-innovation-studio",
    icon: Building2,
    color: "bg-mint-light text-mint-dark",
    title: "LEGO Innovation Studio Kurulumu",
    image: "/assets/photos/corporate-studio.webp",
    description:
      "Okulunuz bünyesinde uçtan uca bir robotik ve tasarım stüdyosu kuruyoruz: mekan planlaması, ekipman temini ve müfredat desteği bir arada.",
    points: [
      "Mekan ve ekipman planlaması",
      "Yaş gruplarına özel içerik ve müfredat",
      "Kurulum sonrası sürdürülebilir destek",
    ],
  },
];

export default function Corporate() {
  return (
    <>
      <Seo
        title="Kurumsal Çözümler"
        description="Okullar için LEGO Education öğretmen eğitimleri ve LEGO Innovation Studio kurulum çözümleri."
      />
      <PageHero
        eyebrow="Kurumsal Çözümler"
        title="Okulunuz için STEM Altyapısı"
        subtitle="Öğretmen eğitimlerinden stüdyo kurulumuna, okullara özel uçtan uca robotik eğitim çözümleri sunuyoruz."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          {SOLUTIONS.map((s) => (
            <div key={s.id} className="rounded-3xl bg-white shadow-card overflow-hidden">
              <img src={s.image} alt="" aria-hidden="true" className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-8">
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${s.color}`}>
                  <s.icon className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <h2 className="mt-5 font-display font-extrabold text-2xl text-ink">{s.title}</h2>
                <p className="mt-3 text-ink-soft leading-relaxed">{s.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-coral flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="rounded-3xl bg-coral p-8 sm:p-12 text-center">
          <Eyebrow color="sun">Okullar için</Eyebrow>
          <h2 className="mt-3 font-display font-extrabold text-2xl sm:text-3xl text-white">
            Okulunuza özel teklif için bizimle görüşün
          </h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">
            İhtiyaçlarınızı dinleyip okulunuza özel bir STEM eğitim planı hazırlayalım.
          </p>
          <div className="mt-6">
            <Button href={contact.whatsappHref} variant="ghost" icon={ArrowRight}>
              Kurumsal Görüşme Talep Et
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
