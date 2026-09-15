import Blob from "./Blob";

export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <div className="relative overflow-hidden bg-blue">
      {image ? (
        <>
          <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-blue/85" />
        </>
      ) : null}

      <Blob
        variant={0}
        color="rgba(255,255,255,0.08)"
        className="absolute -top-16 -left-16 w-72 h-72 animate-float-slow"
      />
      <Blob
        variant={1}
        color="rgba(255,201,60,0.18)"
        className="absolute -bottom-24 -right-10 w-80 h-80 animate-float-slower"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 text-center">
        {eyebrow ? (
          <span className="inline-block font-display font-bold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full bg-white/15 text-white mb-4">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white">{title}</h1>
        {subtitle ? <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">{subtitle}</p> : null}
      </div>
    </div>
  );
}
