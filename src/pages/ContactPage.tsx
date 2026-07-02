import { motion } from 'framer-motion';
import { Container } from '../components/ui';
import { ContactSection } from '../components/sections';

export default function ContactPage() {
  return (
    <>
      <section className="pt-[120px] pb-10 bg-[var(--color-bg-subtle)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="eyebrow mb-4">Contact</span>
            <h1 className="mb-6">Let's Build <span className="text-gradient">Something Great</span></h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Ready to start your next project? Reach out and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </Container>
      </section>
      <ContactSection />
    </>
  );
}
