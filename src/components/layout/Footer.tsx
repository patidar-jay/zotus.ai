import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronDown, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { Container } from '../ui';
import { siteConfig } from '../../config/site';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/#about' },
    { label: 'Case Studies', href: '/#case-studies' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/#contact' },
  ],
  'Services': [
    { label: 'Artificial Intelligence', href: '/#services' },
    { label: 'Machine Learning', href: '/#services' },
    { label: 'Custom Software', href: '/#services' },
    { label: 'Mobile Apps', href: '/#services' },
    { label: 'Cloud & DevOps', href: '/#services' },
    { label: 'Data Analytics', href: '/#services' },
  ],
  'Industries': [
    { label: 'Healthcare', href: '/#industries' },
    { label: 'Finance', href: '/#industries' },
    { label: 'Manufacturing', href: '/#industries' },
    { label: 'Education', href: '/#industries' },
    { label: 'Retail', href: '/#industries' },
    { label: 'Logistics', href: '/#industries' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', url: siteConfig.social.linkedin, d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z' },
  { name: 'GitHub', url: siteConfig.social.github, d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
  { name: 'Instagram', url: siteConfig.social.instagram, d: 'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm4.5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.1-2.7a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z' },
  { name: 'X', url: siteConfig.social.twitter, d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname === '/') {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 150);
      }
    } else if (href === '/') {
      scrollToTop();
      navigate('/');
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-[var(--color-bg-dark)] text-white border-t border-white/10" role="contentinfo">
      <Container className="pt-16 lg:pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 pb-12 lg:pb-16 border-b border-white/10">
          
          {/* Brand - Desktop Only (moved to bottom on mobile) */}
          <div className="hidden lg:block lg:col-span-4">
            <Logo className="h-9" light />
            <p className="mt-5 text-sm text-[var(--color-text-tertiary)] leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="mt-8 space-y-3">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-[var(--color-text-tertiary)] hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-[var(--color-text-tertiary)] hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                {siteConfig.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-[var(--color-text-tertiary)]">
                <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.line1},<br />
                  {siteConfig.address.line2},<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Accordion Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="hidden lg:block text-xs font-bold text-white/80 uppercase tracking-[0.15em] mb-5">
                {title}
              </h4>
              <button 
                onClick={() => toggleSection(title)}
                className="lg:hidden w-full flex items-center justify-between py-4 text-left border-b border-white/10"
              >
                <span className="text-[15px] font-medium text-white/90">{title}</span>
                <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${openSection === title ? 'rotate-180' : ''}`} />
              </button>
              <ul className={`space-y-3 pt-4 lg:pt-0 pb-4 lg:pb-0 ${openSection === title ? 'block' : 'hidden lg:block'}`}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-sm text-[var(--color-text-tertiary)] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Registered Office (Accordion on Mobile) */}
          <div className="lg:col-span-2">
            <h4 className="hidden lg:block text-xs font-bold text-white/80 uppercase tracking-[0.15em] mb-5">
              Registered Office
            </h4>
            <button 
              onClick={() => toggleSection('Office')}
              className="lg:hidden w-full flex items-center justify-between py-4 text-left border-b border-white/10"
            >
              <span className="text-[15px] font-medium text-white/90">Registered Office</span>
              <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${openSection === 'Office' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pt-4 lg:pt-0 pb-4 lg:pb-0 ${openSection === 'Office' ? 'block' : 'hidden lg:block'}`}>
              <address className="not-italic text-sm text-[var(--color-text-tertiary)] leading-relaxed">
                {siteConfig.address.line1},<br />
                {siteConfig.address.line2},<br />
                {siteConfig.address.city},<br />
                {siteConfig.address.state}<br />
                {siteConfig.address.zip}
              </address>
            </div>
          </div>
        </div>

        {/* Mobile Brand Info (below accordion) */}
        <div className="lg:hidden mt-8 mb-8 space-y-4">
          <Logo className="h-8" light />
          <p className="text-sm text-[var(--color-text-tertiary)] max-w-xs">
            {siteConfig.description}
          </p>
        </div>

        {/* Location Dropdown (Mobile Like Screenshot) */}
        <div className="lg:hidden mt-8 w-full">
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </div>
            <ChevronDown className="w-4 h-4 text-white/50" />
          </div>
        </div>

        {/* Bottom bar matching the screenshot style */}
        <div className="pt-8 mt-4 lg:mt-0 flex flex-col items-start lg:flex-row lg:items-center justify-between gap-6">
          <p className="text-[13px] text-[var(--color-text-tertiary)]">
            Copyright © {year} {siteConfig.legalName}
          </p>
          
          <div className="w-full lg:w-auto flex items-center justify-between lg:justify-end gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Back to top button */}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary)] bg-[var(--color-primary)]/10 hover:bg-[var(--color-primary)]/20 transition-colors shrink-0"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Extra Legal Links */}
        <div className="mt-6 flex flex-wrap items-center gap-4 lg:justify-end">
          <Link to="/privacy-policy" className="text-[13px] text-[var(--color-text-tertiary)] hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-[13px] text-[var(--color-text-tertiary)] hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </Container>
    </footer>
  );
}
