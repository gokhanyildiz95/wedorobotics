import { Link } from "react-router-dom";

const VARIANTS = {
  coral: "bg-coral text-white shadow-pop hover:bg-coral-dark active:translate-y-1 active:shadow-none",
  blue: "bg-blue text-white shadow-pop hover:bg-blue-dark active:translate-y-1 active:shadow-none",
  outline: "bg-white text-blue border-2 border-blue hover:bg-blue-light active:translate-y-1",
  ghost: "bg-white/15 text-white border-2 border-white/60 hover:bg-white/25 active:translate-y-1",
};

export default function Button({ to, href, onClick, type = "button", variant = "coral", children, className = "", icon: Icon }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display font-semibold text-base transition-all duration-150 ${VARIANTS[variant]} ${className}`;

  const content = (
    <>
      {children}
      {Icon ? <Icon className="h-5 w-5" strokeWidth={2.5} /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
