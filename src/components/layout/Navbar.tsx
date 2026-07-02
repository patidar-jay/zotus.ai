import { useState, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useScrolled } from '../../hooks/useScrolled';
import { Container } from '../ui';
import { siteConfig } from '../../config/site';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/#services' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'About', href: '/#about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

const mobileGroups = [
  {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Solutions', href: '/#services' },
      { label: 'Industries', href: '/#industries' },
      { label: 'Case Studies', href: '/#case-studies' },
      { label: 'About', href: '/#about' },
    ]
  },
  {
    links: [
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/#contact' },
    ]
  }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(20);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMobile();

    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname === '/') {
        scrollToSection(id);
      } else {
        navigate('/');
        setTimeout(() => scrollToSection(id), 150);
      }
      return;
    }

    navigate(href);
  };

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <Container>
        <nav className="flex items-center justify-between h-[72px]" aria-label="Main navigation">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex-shrink-0"
            aria-label="Zotus AI Home"
          >
            <Logo className="h-9" />
          </a>

          {/* Desktop Nav — Center */}
          <ul className="hidden lg:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  role="menuitem"
                  className="text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA — Right */}
          <div className="hidden lg:block">
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="group inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold hover:bg-[var(--color-primary-dark)] transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[var(--color-text)]"
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </Container>
    </header>

    {/* Mobile Sidebar (Rendered outside header to escape backdrop-filter stacking context) */}
    <AnimatePresence>
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobile}
            className="lg:hidden fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
          />
          
          {/* Sidebar Panel */}
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed top-0 left-0 bottom-0 w-[85vw] max-w-[320px] z-[100] bg-[var(--color-bg-subtle)] overflow-y-auto flex flex-col shadow-2xl"
          >
            {/* Top Close Button */}
            <div className="p-6">
              <button
                onClick={closeMobile}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-[var(--color-border)] text-[var(--color-text)] hover:bg-gray-50 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Dynamic Link Groups */}
            <div className="flex-1 px-8 py-4 flex flex-col gap-8">
              {mobileGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="flex flex-col gap-5">
                  {group.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-lg text-[var(--color-text)] font-medium hover:text-[var(--color-primary)] transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom Social Icons */}
            <div className="p-8 mt-auto">
              <div className="pt-6 border-t border-[var(--color-border)] flex items-center gap-6">
                {[
                  { name: 'LinkedIn', url: siteConfig.social.linkedin, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { name: 'X', url: siteConfig.social.twitter, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg> },
                  { name: 'Instagram', url: siteConfig.social.instagram, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                  { name: 'GitHub', url: siteConfig.social.github, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> }
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>
);
}
