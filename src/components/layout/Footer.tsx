import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
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
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

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
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-[var(--color-bg-dark)] text-white" role="contentinfo">
      <Container className="pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo className="h-9" light />
            <p className="mt-5 text-sm text-[var(--color-text-tertiary)] leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>

            {/* Contact */}
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

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-white hover:border-white/25 transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-xs font-bold text-white/80 uppercase tracking-[0.15em] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
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

          {/* Registered Office */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white/80 uppercase tracking-[0.15em] mb-5">
              Registered Office
            </h4>
            <address className="not-italic text-sm text-[var(--color-text-tertiary)] leading-relaxed">
              {siteConfig.address.line1},<br />
              {siteConfig.address.line2},<br />
              {siteConfig.address.city},<br />
              {siteConfig.address.state}<br />
              {siteConfig.address.zip}
            </address>
            <a
              href={siteConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-[var(--color-accent)] hover:text-white transition-colors"
            >
              {siteConfig.url.replace('https://', '')}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-tertiary)]">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-[var(--color-text-tertiary)] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-[var(--color-text-tertiary)] hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
