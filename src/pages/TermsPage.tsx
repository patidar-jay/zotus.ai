import { motion } from 'framer-motion';
import { Container } from '../components/ui';
import { siteConfig } from '../config/site';

export default function TermsPage() {
  return (
    <section className="pt-[72px]">
      <Container className="section-py">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-primary">Legal</span>
          <h1 className="mb-8">Terms of Service</h1>
          <p className="text-sm text-gray mb-8">Last updated: January 2025</p>

          <div className="space-y-8">
            <div>
              <h3>1. Agreement to Terms</h3>
              <p className="text-gray leading-relaxed mt-3">By accessing or using the website of {siteConfig.legalName}, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </div>
            <div>
              <h3>2. Services</h3>
              <p className="text-gray leading-relaxed mt-3">{siteConfig.legalName} provides software development, AI solutions, cloud services, and technology consulting. Specific terms for individual projects are outlined in separate agreements.</p>
            </div>
            <div>
              <h3>3. Intellectual Property</h3>
              <p className="text-gray leading-relaxed mt-3">All content on this website, including text, graphics, logos, and software, is the property of {siteConfig.legalName} and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.</p>
            </div>
            <div>
              <h3>4. Limitation of Liability</h3>
              <p className="text-gray leading-relaxed mt-3">{siteConfig.legalName} shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or website. Our total liability shall not exceed the amount paid by you for the specific service.</p>
            </div>
            <div>
              <h3>5. Governing Law</h3>
              <p className="text-gray leading-relaxed mt-3">These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.</p>
            </div>
            <div>
              <h3>6. Changes to Terms</h3>
              <p className="text-gray leading-relaxed mt-3">We reserve the right to modify these terms at any time. Changes will be effective upon posting to this page. Continued use of our services constitutes acceptance of the updated terms.</p>
            </div>
            <div>
              <h3>7. Contact</h3>
              <p className="text-gray leading-relaxed mt-3">For questions about these Terms, contact us at {siteConfig.email}.</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
