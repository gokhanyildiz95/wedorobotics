import { Mail, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactForm({ initialUltrasoundSystem = '', initialMessage = '' }) {
  const { language, content } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [country, setCountry] = useState('');
  const [ultrasoundSystem, setUltrasoundSystem] = useState(initialUltrasoundSystem);
  const [message, setMessage] = useState(initialMessage);
  const [submissionStatus, setSubmissionStatus] = useState('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const emailFallbackUrl = useMemo(() => {
    const subjectPrefix = language === 'tr' ? 'Perino-Flex Teklif Talebi' : 'Perino-Flex Quote Request';
    const subject = `${subjectPrefix}: ${organization || fullName}`;
    const body = language === 'tr'
      ? `Ad soyad: ${fullName}\nFirma: ${organization}\nE-posta: ${emailAddress}\nÜlke: ${country}\nUltrason/Prob: ${ultrasoundSystem}\n\nMesaj:\n${message}`
      : `Name: ${fullName}\nOrganisation: ${organization}\nEmail: ${emailAddress}\nCountry: ${country}\nUltrasound/Probe: ${ultrasoundSystem}\n\nMessage:\n${message}`;

    return `mailto:info@perinoflex.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [country, emailAddress, fullName, language, message, organization, ultrasoundSystem]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmissionStatus('sending');
    setSubmissionMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          organization,
          email: emailAddress,
          country,
          system: ultrasoundSystem,
          message,
          lang: language
        })
      });

      const responseData = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(responseData.message || content.contact.error);

      setSubmissionStatus('success');
      setSubmissionMessage(responseData.message || content.contact.success);
      setFullName('');
      setOrganization('');
      setEmailAddress('');
      setCountry('');
      setMessage('');
    } catch (error) {
      setSubmissionStatus('error');
      setSubmissionMessage(error.message || content.contact.error);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={submissionStatus === 'sending'}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="fullName">{content.contact.fullName} *</label>
          <input id="fullName" name="fullName" autoComplete="name" maxLength={120} required value={fullName} onChange={(event) => setFullName(event.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="organization">{content.contact.organization}</label>
          <input id="organization" name="organization" autoComplete="organization" maxLength={160} value={organization} onChange={(event) => setOrganization(event.target.value)} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="emailAddress">{content.contact.email} *</label>
          <input id="emailAddress" name="emailAddress" type="email" autoComplete="email" inputMode="email" maxLength={180} required value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="country">{content.contact.country}</label>
          <input id="country" name="country" autoComplete="country-name" maxLength={100} value={country} onChange={(event) => setCountry(event.target.value)} />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="ultrasoundSystem">{content.contact.ultrasoundSystem} *</label>
        <input id="ultrasoundSystem" name="ultrasoundSystem" maxLength={240} required value={ultrasoundSystem} onChange={(event) => setUltrasoundSystem(event.target.value)} placeholder="BK 8848" />
      </div>

      <div className="form-field">
        <label htmlFor="message">{content.contact.message}</label>
        <textarea id="message" name="message" maxLength={4000} value={message} onChange={(event) => setMessage(event.target.value)} />
      </div>

      <button className="button button-primary contact-submit-button" type="submit" disabled={submissionStatus === 'sending'}>
        <Send size={17} /> {submissionStatus === 'sending' ? content.contact.sending : content.contact.submit}
      </button>

      <p className="form-note">{content.contact.requiredNote}</p>

      {submissionStatus === 'success' ? (
        <div className="form-message form-message-success" role="status">{submissionMessage}</div>
      ) : null}

      {submissionStatus === 'error' ? (
        <div className="form-message form-message-error" role="alert">
          <span>{submissionMessage}</span>
          <a href={emailFallbackUrl}><Mail size={15} /> {content.contact.emailFallback}</a>
        </div>
      ) : null}
    </form>
  );
}
