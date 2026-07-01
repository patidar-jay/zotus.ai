import { motion } from 'framer-motion';
import { Container } from '../components/ui';
import { ContactSection } from '../components/sections';

export default function ContactPage() {
  return (
    <>
      <section className="pt-[72px] bg-gradient-to-b from-primary/3 to-white">
        <Container className="section-py">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-primary">Contact</span>
            <h1>Let's Build <span className="text-gradient">Something Great</span></h1>
            <p className="mt-6 text-lg text-gray leading-relaxed">
              Ready to start your next project? Reach out and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </Container>
      </section>
      <ContactSection />
    </>
  );
}
