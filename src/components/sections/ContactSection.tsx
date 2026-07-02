import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';
import { siteConfig } from '../../config/site';
import { fadeInLeft, fadeInRight } from '../../animations/variants';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', service: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-5 py-4 rounded-xl border border-[var(--color-border)] bg-white text-sm text-[var(--color-text)] placeholder-[var(--color-text-tertiary)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 outline-none transition-all';

  return (
    <section id="contact" className="section-py bg-white border-t border-[var(--color-border-subtle)]" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Start a Conversation"
          description="Tell us about your project. We'll get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Get in Touch</h3>
              <div className="space-y-6">
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-subtle)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-accent-light)] transition-colors">
                    <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-bold text-[var(--color-text)] mb-1">Email</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">{siteConfig.email}</p>
                  </div>
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-subtle)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-accent-light)] transition-colors">
                    <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-bold text-[var(--color-text)] mb-1">Phone</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">{siteConfig.phone}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-subtle)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-accent-light)] transition-colors">
                    <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-bold text-[var(--color-text)] mb-1">Registered Office</p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {siteConfig.address.line1},<br />
                      {siteConfig.address.line2},<br />
                      {siteConfig.address.city}, {siteConfig.address.state}<br />
                      {siteConfig.address.zip}, {siteConfig.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
                <CheckCircle2 className="w-20 h-20 text-[var(--color-success)] mb-6" />
                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">Message Sent!</h3>
                <p className="text-[var(--color-text-secondary)] mb-8">We'll get back to you within 24 hours.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10 rounded-3xl border border-[var(--color-border)] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)]" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-text)] mb-2">Full Name *</label>
                    <input id="name" name="name" type="text" required placeholder="John Doe" className={inputClass} value={formData.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-text)] mb-2">Work Email *</label>
                    <input id="email" name="email" type="email" required placeholder="john@company.com" className={inputClass} value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-[var(--color-text)] mb-2">Company</label>
                    <input id="company" name="company" type="text" placeholder="Your company" className={inputClass} value={formData.company} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-text)] mb-2">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 99999 99999" className={inputClass} value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[var(--color-text)] mb-2">Service Interested In</label>
                  <select id="service" name="service" className={inputClass} value={formData.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option value="ai">AI Development</option>
                    <option value="ml">Machine Learning</option>
                    <option value="software">Custom Software</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-text)] mb-2">Project Details *</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project, goals, and timeline..." className={inputClass} value={formData.message} onChange={handleChange} />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
