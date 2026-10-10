import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function SiteFooter() {
  const { content } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <img className="footer-logo" src="/assets/images/perino-flex-logo.png" alt="Perino-Flex" />
            <p className="footer-slogan">{content.home.heroSlogan}</p>
            <p>{content.footer.about}</p>
            <div className="footer-manufacturer">
              <img src="/assets/images/geotek-logo-footer.png" alt="GEOTEK Healthcare Products" />
              <div>
                <span>{content.footer.brand}</span>
                <a href="https://www.geotekmedical.com" target="_blank" rel="noreferrer">
                  {content.footer.visitGeotek}
                </a>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h2>{content.footer.pages}</h2>
            <Link to="/">{content.navigation.home}</Link>
            <Link to="/about">{content.navigation.about}</Link>
            <Link to="/perinoflex">{content.navigation.perinoFlex}</Link>
            <Link to="/contact">{content.navigation.contact}</Link>
          </div>

          <div className="footer-column">
            <h2>{content.footer.contact}</h2>
            <a href="tel:+903123959852">+90 (312) 395 98 52</a>
            <a href="tel:+903125146404">+90 (312) 514 64 04</a>
            <a href="mailto:info@perinoflex.com">info@perinoflex.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="certification-badges" aria-label="Certifications">
            <span>CE</span>
            <span>ISO 13485</span>
            <span>MDR</span>
          </div>
          <p>© {new Date().getFullYear()} GEOTEK Healthcare Products · Perino-Flex® {content.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
