import { motion } from 'framer-motion';
import { Container } from '../components/ui';
import { siteConfig } from '../config/site';

export default function TermsPage() {
  return (
    <section className="pt-[120px] pb-20 bg-[var(--color-bg-subtle)] min-h-screen">
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto p-10 rounded-3xl bg-white border border-[var(--color-border)] shadow-sm">
          <span className="eyebrow block mb-4">Legal</span>
          <h1 className="mb-4">Terms of Service</h1>
          <p className="text-sm text-[var(--color-text-secondary)] mb-10 pb-10 border-b border-[var(--color-border)]">Last updated: January 2025</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg mb-3">1. Agreement to Terms</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">By accessing or using the website of {siteConfig.legalName}, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </div>
            <div>
              <h3 className="text-lg mb-3">2. Services</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{siteConfig.legalName} provides software development, AI solutions, cloud services, and technology consulting. Specific terms for individual projects are outlined in separate agreements.</p>
            </div>
            <div>
              <h3 className="text-lg mb-3">3. Intellectual Property</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">All content on this website, including text, graphics, logos, and software, is the property of {siteConfig.legalName} and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.</p>
            </div>
            <div>
              <h3 className="text-lg mb-3">4. Limitation of Liability</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{siteConfig.legalName} shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or website. Our total liability shall not exceed the amount paid by you for the specific service.</p>
            </div>
            <div>
              <h3 className="text-lg mb-3">5. Governing Law</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.</p>
            </div>
            <div>
              <h3 className="text-lg mb-3">6. Changes to Terms</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">We reserve the right to modify these terms at any time. Changes will be effective upon posting to this page. Continued use of our services constitutes acceptance of the updated terms.</p>
            </div>
            <div>
              <h3 className="text-lg mb-3">7. Contact</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">For questions about these Terms, contact us at {siteConfig.email}.</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
