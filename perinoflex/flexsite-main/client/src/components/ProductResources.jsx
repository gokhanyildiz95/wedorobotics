import { ArrowRight, BookOpen, ClipboardList, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function ProductResources() {
  const { content } = useLanguage();
  const resources = content.perinoFlex;

  return (
    <div className="resource-grid">
      <ScrollReveal className="resource-card">
        <div className="resource-icon"><FileText /></div>
        <h3>{resources.brochureTitle}</h3>
        <span className="resource-meta">{resources.brochureMeta}</span>
        <p>{resources.brochureText}</p>
        <span className="resource-status">{resources.documentPending}</span>
      </ScrollReveal>

      <ScrollReveal className="resource-card" delay={70}>
        <div className="resource-icon"><BookOpen /></div>
        <h3>{resources.papersTitle}</h3>
        <span className="resource-meta">{resources.papersMeta}</span>
        <p>{resources.papersText}</p>
        <span className="resource-status">{resources.documentPending}</span>
      </ScrollReveal>

      <ScrollReveal className="resource-card" delay={140}>
        <div className="resource-icon"><ClipboardList /></div>
        <h3>{resources.ifuTitle}</h3>
        <span className="resource-meta">{resources.ifuMeta}</span>
        <p>{resources.ifuText}</p>
        <Link className="resource-link" to="/contact?subject=IFU">
          {resources.requestIfu} <ArrowRight size={16} />
        </Link>
      </ScrollReveal>
    </div>
  );
}
