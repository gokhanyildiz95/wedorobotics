import ScrollReveal from './ScrollReveal';

export default function SectionTitle({ eyebrow, title, description, light = false }) {
  return (
    <ScrollReveal className={`section-title ${light ? 'section-title-light' : ''}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </ScrollReveal>
  );
}
