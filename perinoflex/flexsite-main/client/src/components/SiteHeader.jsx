import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function SiteHeader() {
  const { language, content, changeLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', isMobileMenuOpen);
    return () => document.body.classList.remove('mobile-menu-open');
  }, [isMobileMenuOpen]);

  useEffect(() => {
    function closeMenuWithEscape(event) {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    }

    window.addEventListener('keydown', closeMenuWithEscape);
    return () => window.removeEventListener('keydown', closeMenuWithEscape);
  }, []);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia('(min-width: 901px)');

    function closeMobileMenuOnDesktop(event) {
      if (event.matches) setIsMobileMenuOpen(false);
    }

    desktopBreakpoint.addEventListener?.('change', closeMobileMenuOnDesktop);
    return () => desktopBreakpoint.removeEventListener?.('change', closeMobileMenuOnDesktop);
  }, []);

  function getNavigationClass({ isActive }) {
    return isActive ? 'navigation-link is-active' : 'navigation-link';
  }

  return (
    <header className="site-header">
      <div className="site-container header-layout">
        <Link to="/" className="brand-link" aria-label="Perino-Flex">
          <img src="/assets/images/perino-flex-logo.png" alt="Perino-Flex" className="brand-logo" />
          <span className="registered-mark">®</span>
        </Link>

        <nav
          className={`primary-navigation ${isMobileMenuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <NavLink to="/" end className={getNavigationClass}>
            {content.navigation.home}
          </NavLink>
          <NavLink to="/about" className={getNavigationClass}>
            {content.navigation.about}
          </NavLink>
          <NavLink to="/perinoflex" className={getNavigationClass}>
            {content.navigation.perinoFlex}
          </NavLink>
          <NavLink to="/contact" className={getNavigationClass}>
            {content.navigation.contact}
          </NavLink>
        </nav>

        <div className="header-actions">
          <div className="language-switcher" role="group" aria-label={content.navigation.languageSelector}>
            <button
              type="button"
              className={language === 'en' ? 'is-selected' : ''}
              onClick={() => changeLanguage('en')}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={language === 'tr' ? 'is-selected' : ''}
              onClick={() => changeLanguage('tr')}
              aria-pressed={language === 'tr'}
            >
              TR
            </button>
          </div>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen((currentState) => !currentState)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? content.navigation.closeMenu : content.navigation.openMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
