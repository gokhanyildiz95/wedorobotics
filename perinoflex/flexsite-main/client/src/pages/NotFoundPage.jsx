import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function NotFoundPage() {
  const { content } = useLanguage();

  useDocumentMeta('404 · Perino-Flex', content.notFound.description);

  return (
    <section className="not-found-page">
      <div className="site-container not-found-layout">
        <span>404</span>
        <h1>{content.notFound.title}</h1>
        <p>{content.notFound.description}</p>
        <Link className="button button-primary" to="/"><Home size={17} /> {content.notFound.button}</Link>
      </div>
    </section>
  );
}
