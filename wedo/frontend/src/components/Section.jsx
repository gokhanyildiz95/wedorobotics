export function Eyebrow({ children, color = "coral" }) {
  const colorClasses = {
    coral: "bg-coral-light text-coral-dark",
    blue: "bg-blue-light text-blue",
    mint: "bg-mint-light text-mint-dark",
    sun: "bg-sun-light text-sun-dark",
    grape: "bg-grape-light text-grape",
  };
  return (
    <span
      className={`inline-block font-display font-bold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
}

export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
