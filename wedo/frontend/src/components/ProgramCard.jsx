import { Check } from "lucide-react";

const COLOR_MAP = {
  sun: {
    badge: "bg-sun text-ink",
    ring: "ring-sun/40",
    icon: "text-sun-dark",
    accent: "bg-sun-light",
  },
  mint: {
    badge: "bg-mint text-white",
    ring: "ring-mint/40",
    icon: "text-mint-dark",
    accent: "bg-mint-light",
  },
  grape: {
    badge: "bg-grape text-white",
    ring: "ring-grape/40",
    icon: "text-grape",
    accent: "bg-grape-light",
  },
};

export default function ProgramCard({ program }) {
  const c = COLOR_MAP[program.color];

  return (
    <div
      className={`relative flex flex-col rounded-3xl bg-white shadow-card ring-1 ${c.ring} transition-transform hover:-translate-y-1.5 overflow-hidden`}
    >
      {program.image ? (
        <div className="relative h-44 w-full overflow-hidden">
          <img
            src={program.image}
            alt={`${program.name} programında çocuklar`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-7">
      <div className={`self-start rounded-2xl px-4 py-1.5 font-display font-bold text-sm ${c.badge}`}>
        {program.ageLabel}
      </div>
      <p className="mt-4 text-xs font-display font-bold uppercase tracking-wide text-ink-soft">{program.stage}</p>
      <h3 className="mt-1 font-display font-extrabold text-2xl text-ink">{program.name}</h3>
      <p className="mt-1 font-semibold text-ink-soft">{program.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{program.description}</p>

      <ul className="mt-5 space-y-2.5 flex-1">
        {program.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-ink">
            <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${c.accent}`}>
              <Check className={`h-3.5 w-3.5 ${c.icon}`} strokeWidth={3} />
            </span>
            {h}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
