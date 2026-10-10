import { useSearchParams } from 'react-router-dom';
import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';
import PageIntro from '../components/PageIntro';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export default function ContactPage() {
  const { content } = useLanguage();
  const [searchParameters] = useSearchParams();
  const initialUltrasoundSystem = searchParameters.get('system') || '';
  const initialMessage = searchParameters.get('subject') === 'IFU' ? content.perinoFlex.requestIfu : '';

  useDocumentMeta(`${content.navigation.contact} · Perino-Flex`, content.contact.description);

  return (
    <>
      <PageIntro eyebrow={content.contact.eyebrow} title={content.contact.title} description={content.contact.description} />
      <section className="section-block section-soft">
        <div className="site-container contact-layout">
          <ScrollReveal><ContactDetails /></ScrollReveal>
          <ScrollReveal delay={80}>
            <ContactForm initialUltrasoundSystem={initialUltrasoundSystem} initialMessage={initialMessage} />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
