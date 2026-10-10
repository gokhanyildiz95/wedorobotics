import ScrollReveal from './ScrollReveal';

export default function PageIntro({ eyebrow, title, description, actions }) {
  return (
    <section className="page-intro">
      <div className="site-container">
        <ScrollReveal className="page-intro-content">
          <p className="section-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-intro-description">{description}</p>
          {actions ? <div className="page-intro-actions">{actions}</div> : null}
        </ScrollReveal>
      </div>
    </section>
  );
}
