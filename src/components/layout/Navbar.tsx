import { useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useScrolled } from '../../hooks/useScrolled';
import { Container } from '../ui';

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

  return (
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-[var(--color-border)] overflow-hidden"
          >
            <div className="px-6 py-8">
              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block text-[15px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-5 py-3 rounded-lg text-sm font-semibold"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
