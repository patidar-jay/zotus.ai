import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '../ui';
import { siteConfig } from '../../config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white" role="contentinfo">
      {/* Top accent line */}
      <div className="h-[3px] bg-gradient-to-r from-primary via-accent to-primary-light" />

      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Ready to accelerate your <span className="text-gradient">digital journey</span>?
              </h2>
              <p className="text-gray-light text-sm leading-relaxed">
                Let's build something extraordinary together.
              </p>
            </div>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-accent transition-colors duration-300 flex-shrink-0 rounded-xl"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" aria-label="Zotus AI Home" className="flex items-center gap-2.5">
              <img src="/logo-mark.png" alt="Zotus AI" className="h-8 w-auto object-contain" />
              <span className="text-[20px] font-extrabold tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                <span className="text-white">Zotus</span>
                <span className="text-primary-light ml-0.5">AI</span>
              </span>
            </Link>
            <p className="mt-5 text-gray-light text-sm leading-relaxed max-w-xs">
              Engineering intelligent, scalable software solutions that power digital transformation for enterprises.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-gray-light hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary-light flex-shrink-0" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2.5 text-sm text-gray-light hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-light flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-light">
                <MapPin className="w-4 h-4 text-primary-light mt-0.5 flex-shrink-0" />
                <span>
                  {siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.country}
                </span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-gray-light hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'AI Development', href: '/services#ai-development' },
                { label: 'Machine Learning', href: '/services#machine-learning' },
                { label: 'Cloud Solutions', href: '/services#cloud-solutions' },
                { label: 'Custom Software', href: '/services#custom-software' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-gray-light hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-gray-light hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-light">
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {Object.entries(siteConfig.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-light hover:text-white transition-colors"
                aria-label={`Visit our ${platform}`}
              >
                <span className="text-xs font-semibold uppercase tracking-wider capitalize">
                  {platform}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
