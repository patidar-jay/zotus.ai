import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(135deg, #6C3CF4 0%, #7C3AED 25%, #A855F7 50%, #6C3CF4 100%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
      }} />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 60%)', filter: 'blur(40px)' }} />

      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to scale your data programs?
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Talk to our team about building custom data pipelines for your AI models.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="/contact"
              className="group inline-flex items-center gap-2.5 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full text-[15px] font-semibold hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl"
            >Talk to an expert <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></motion.a>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="/case-studies"
              className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-8 py-4 rounded-full text-[15px] font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
            >View case studies</motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
