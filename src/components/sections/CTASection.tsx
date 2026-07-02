import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-white/10 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Build Something Amazing?
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Let's turn your ideas into intelligent, scalable, and impactful solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2.5 bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl text-[15px] font-semibold hover:bg-white/90 transition-colors shadow-lg"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="mailto:zotusai@gmail.com"
                className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-[15px] font-semibold hover:bg-white/10 transition-colors"
              >
                Schedule Call
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
