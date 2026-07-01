import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container, Button } from '../ui';
import { fadeInUp } from '../../animations/variants';

export default function CTASection() {
  return (
    <section className="section-py bg-dark relative overflow-hidden" aria-label="Call to action">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-primary-light">
            Let&apos;s Build Together
          </span>
          <h2 className="text-white mb-6">
            Ready to Transform Your Business with Intelligent Software?
          </h2>
          <p className="text-lg text-gray-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you&apos;re a startup with a bold idea or an enterprise seeking digital 
            transformation — we&apos;re ready to bring your vision to life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" size="lg">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button to="/case-studies" variant="outline" size="lg" className="border-white/20 text-white hover:border-white/40 hover:text-white">
              View Case Studies
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
