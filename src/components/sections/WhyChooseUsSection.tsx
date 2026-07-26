import { motion } from 'framer-motion';
import { ArrowRight, Brain, Lightbulb, Users, Zap } from 'lucide-react';
import { Container } from '../ui';
import { staggerContainer, fadeInUp } from '../../animations/variants';

const features = [
  { icon: Brain, title: 'AI-First Approach', description: 'AI and machine learning are at the core of everything we build — not an afterthought.' },
  { icon: Users, title: 'Dedicated Team', description: 'Passionate engineers who work alongside you, not just as vendors but as partners.' },
  { icon: Zap, title: 'Fast Delivery', description: 'Agile, iterative development with transparent progress and quick turnarounds.' },
  { icon: Lightbulb, title: 'Innovation-Driven', description: 'We use cutting-edge technologies and research-backed approaches to solve real problems.' },
];

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="section-py bg-[var(--color-bg-dark)] relative overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 80%)' }}
      />

      {/* Floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
          className="absolute w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/40 pointer-events-none"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + (i % 2) * 70 + i * 5}%`,
          }}
        />
      ))}

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 relative pl-6"
          >
            {/* Vertical gradient line accent */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[var(--color-primary)] to-transparent rounded-full" />
            
            <span className="eyebrow text-[var(--color-accent)] mb-5 block">
              WHY ZOTUS AI
            </span>
            <h2 className="text-white mb-6 leading-tight">
              Smart Solutions Built With Real AI
            </h2>
            <p className="text-[var(--color-text-tertiary)] leading-relaxed mb-10">
              We don't just talk about AI — we build with it. From intelligent monitoring systems to custom automation, every solution we deliver is powered by real machine learning.
            </p>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2.5 bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[var(--color-accent)] transition-colors duration-200"
            >
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right — Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="group flex gap-4 p-6 rounded-xl border border-white/[0.06] border-l-2 border-l-transparent hover:border-white/[0.12] hover:border-l-[var(--color-accent)] bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[var(--color-primary)]/20">
                    <Icon className="w-5 h-5 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{f.title}</h4>
                    <p className="text-[var(--color-text-tertiary)] text-xs leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
