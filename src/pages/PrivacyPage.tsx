import { motion } from 'framer-motion';
import { Container } from '../components/ui';
import { siteConfig } from '../config/site';

export default function PrivacyPage() {
  return (
    <section className="pt-[72px]">
      <Container className="section-py">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-primary">Legal</span>
          <h1 className="mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray mb-8">Last updated: January 2025</p>

          <div className="prose-custom space-y-8">
            <div>
              <h3>1. Information We Collect</h3>
              <p className="text-gray leading-relaxed mt-3">We collect information you provide directly, such as your name, email, phone number, and company details when you fill out forms or contact us. We also automatically collect certain technical information when you visit our website, including IP address, browser type, and usage data.</p>
            </div>
            <div>
              <h3>2. How We Use Your Information</h3>
              <p className="text-gray leading-relaxed mt-3">We use the information we collect to respond to your inquiries, provide our services, improve our website, send relevant communications, and comply with legal obligations. We do not sell your personal information to third parties.</p>
            </div>
            <div>
              <h3>3. Data Security</h3>
              <p className="text-gray leading-relaxed mt-3">We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
            </div>
            <div>
              <h3>4. Cookies</h3>
              <p className="text-gray leading-relaxed mt-3">Our website uses cookies and similar technologies to enhance your browsing experience, analyze traffic, and personalize content. You can control cookie preferences through your browser settings.</p>
            </div>
            <div>
              <h3>5. Third-Party Services</h3>
              <p className="text-gray leading-relaxed mt-3">We may use third-party services for analytics, hosting, and communication. These services have their own privacy policies and we encourage you to review them.</p>
            </div>
            <div>
              <h3>6. Your Rights</h3>
              <p className="text-gray leading-relaxed mt-3">You have the right to access, correct, or delete your personal data. You may also object to processing or request data portability. To exercise these rights, contact us at {siteConfig.email}.</p>
            </div>
            <div>
              <h3>7. Contact Us</h3>
              <p className="text-gray leading-relaxed mt-3">If you have questions about this Privacy Policy, please contact us at {siteConfig.email} or write to us at {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}.</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
