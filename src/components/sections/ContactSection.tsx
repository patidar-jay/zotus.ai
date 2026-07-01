import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Container, SectionHeading, Button } from '../ui';
import { siteConfig } from '../../config/site';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../animations/variants';

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
    'w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-dark placeholder-gray-light focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all';

  return (
    <section id="contact" className="section-py bg-white" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading
          label="Contact Us"
          title="Let's Start a Conversation"
          description="Tell us about your project. We'll get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-dark mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark">Email</p>
                    <p className="text-sm text-gray">{siteConfig.email}</p>
                  </div>
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark">Phone</p>
                    <p className="text-sm text-gray">{siteConfig.phone}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark">Registered Office</p>
                    <p className="text-sm text-gray leading-relaxed">
                      {siteConfig.address.street},<br />
                      {siteConfig.address.city}, {siteConfig.address.state}<br />
                      {siteConfig.address.zip}, {siteConfig.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-bg-subtle border border-border flex items-center justify-center">
              <p className="text-sm text-gray-light">Google Map</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl border border-border bg-bg-subtle">
                <CheckCircle2 className="w-16 h-16 text-success mb-6" />
                <h3 className="text-xl font-semibold text-dark mb-2">Message Sent!</h3>
                <p className="text-gray mb-6">We'll get back to you within 24 hours.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">Full Name *</label>
                    <input id="name" name="name" type="text" required placeholder="John Doe" className={inputClass} value={formData.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">Work Email *</label>
                    <input id="email" name="email" type="email" required placeholder="john@company.com" className={inputClass} value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-dark mb-2">Company</label>
                    <input id="company" name="company" type="text" placeholder="Your company" className={inputClass} value={formData.company} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 99999 99999" className={inputClass} value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-dark mb-2">Service Interested In</label>
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
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">Project Details *</label>
                  <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project, goals, and timeline..." className={inputClass} value={formData.message} onChange={handleChange} />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
