import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useScrolled } from '../../hooks/useScrolled';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(20);
  const location = useLocation();

  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-sm shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
          : 'bg-white'
      }`}
      role="banner"
    >
      {/* Top accent line */}
      <div className="h-[3px] bg-gradient-to-r from-primary via-accent to-primary-light" />

      <nav
        className="container-site flex items-center justify-between h-[68px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" aria-label="Zotus AI Home" onClick={closeMobile}>
          <Logo className="h-7 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10" role="menubar">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href} role="none">
                <Link
                  to={link.href}
                  role="menuitem"
                  className={`relative py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                    isActive
                      ? 'text-primary'
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="bg-primary text-white px-6 py-2.5 text-[13px] font-bold uppercase tracking-wider hover:bg-primary-dark transition-colors duration-200"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-dark"
          onClick={toggleMobile}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="px-6 py-8" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        onClick={closeMobile}
                        className={`block text-lg font-bold uppercase tracking-wider transition-colors ${
                          isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="block text-center bg-primary text-white px-5 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-primary-dark transition-colors"
                >
                  Let's Talk
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
