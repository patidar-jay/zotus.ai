import { useState, useCallback, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useScrolled } from '../../hooks/useScrolled';

const navLinks = [
  { label: 'Home', href: '/#' },
  { label: 'Services', href: '/#services' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Case Studies', href: '/#insights' },
  { label: 'About Us', href: '/#about' },
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMobile();
    
    if (href.startsWith('/#')) {
      const targetId = href.substring(2);
      
      if (location.pathname === '/') {
        if (targetId === '') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          if (targetId === '') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
          }
          const element = document.getElementById(targetId);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
          : 'bg-white'
      }`}
      role="banner"
    >
      <nav
        className="container-site flex items-center justify-between h-[80px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" aria-label="Zotus AI Home" onClick={(e) => {
          e.preventDefault();
          closeMobile();
          if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            navigate('/');
          }
        }}>
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7 xl:gap-9" role="menubar">
          {navLinks.map((link) => {
            const isActive = location.pathname === '/' && (location.hash === link.href.substring(1) || (location.hash === '' && link.href === '/#'));
            return (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  role="menuitem"
                  className={`relative py-2 text-[13px] font-bold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-primary'
                      : 'text-dark hover:text-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-primary rounded-full"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="group flex items-center gap-2 bg-primary text-white px-6 py-2.5 text-[13px] font-bold rounded-lg shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:bg-primary-dark transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
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
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`block text-lg font-bold tracking-wide transition-colors text-dark hover:text-primary`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3.5 text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
