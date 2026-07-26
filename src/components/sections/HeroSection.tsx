import { motion } from 'framer-motion';
import { ArrowRight, Brain, Eye, Settings, Globe, ChevronDown } from 'lucide-react';
import { Container } from '../ui';

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center pt-[72px]">
      <style>
        {`
          @keyframes gradientCycle {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-text {
            background-size: 200% auto;
            animation: gradientCycle 4s linear infinite;
          }
          @keyframes meshBlob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .mesh-blob-1 { animation: meshBlob 8s infinite alternate ease-in-out; }
          .mesh-blob-2 { animation: meshBlob 10s infinite alternate-reverse ease-in-out; }
          .mesh-blob-3 { animation: meshBlob 12s infinite alternate ease-in-out; }
          @keyframes glowPulse {
            0% { box-shadow: 0 0 0 0 rgba(109, 40, 217, 0.4); }
            70% { box-shadow: 0 0 0 20px rgba(109, 40, 217, 0); }
            100% { box-shadow: 0 0 0 0 rgba(109, 40, 217, 0); }
          }
          .glow-pulse { animation: glowPulse 2s infinite; }
          .dot-grid-bg {
            background-image: radial-gradient(circle, var(--color-border) 1px, transparent 1px);
            background-size: 24px 24px;
          }
        `}
      </style>

      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-transparent">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--color-primary)] rounded-full opacity-[0.08] blur-[100px] mesh-blob-1" />
        <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] bg-[var(--color-accent)] rounded-full opacity-[0.12] blur-[120px] mesh-blob-2" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-[var(--color-accent-light)] rounded-full opacity-[0.15] blur-[100px] mesh-blob-3" />
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[var(--color-primary)] opacity-20 pointer-events-none"
          style={{
            width: Math.random() * 6 + 4 + 'px',
            height: Math.random() * 6 + 4 + 'px',
            top: Math.random() * 80 + 10 + '%',
            left: Math.random() * 80 + 10 + '%',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      <Container className="relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-6"
            >
              AI-POWERED SOLUTIONS FOR REAL PROBLEMS
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="leading-[1.08] tracking-[-0.03em] mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
            >
              Smart AI Solutions{' '}
              <br className="hidden sm:block" />
              That Solve{' '}
              <br className="hidden sm:block" />
              <span 
                className="animate-gradient-text text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(to right, #6D28D9, #9333EA, #4F46E5, #6D28D9)'
                }}
              >Real Problems</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-lg mb-10"
            >
              From AI-powered camera monitoring for government exams to intelligent automation for warehouses — we build solutions that actually work.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/#product"
                className="group inline-flex items-center gap-2.5 bg-[var(--color-primary)] text-white px-7 py-3.5 rounded-xl text-[15px] font-semibold hover:bg-[var(--color-primary-dark)] hover:scale-[1.02] transition-all duration-200 shadow-[0_4px_14px_rgba(109,40,217,0.25)] hover:shadow-[0_8px_24px_rgba(109,40,217,0.45)]"
              >
                See What We're Building
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2.5 bg-white text-[var(--color-text)] border border-[var(--color-border)] px-7 py-3.5 rounded-xl text-[15px] font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:scale-[1.02] transition-all duration-200"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right — Illustration (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center relative mt-16 lg:mt-0"
            style={{ minHeight: 480 }}
          >
            {/* Background Dot Grid for Illustration area */}
            <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)', maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)' }}></div>

            {/* Central Logo */}
            <div
              className="relative z-20 w-32 h-32 rounded-[2rem] bg-white flex items-center justify-center shadow-[0_20px_60px_rgba(109,40,217,0.15)] border border-[var(--color-border-subtle)] glow-pulse"
              style={{ animation: 'float 4s ease-in-out infinite, glowPulse 2s infinite' }}
            >
              <img src="/logo-mark.png" alt="Zotus AI" className="w-16 h-16 object-contain" />
            </div>

            {/* Orbiting nodes */}
            <HeroNode icon={<Eye className="w-5 h-5" />} label="Vision" top="5%" left="15%" delay={0} />
            <HeroNode icon={<Brain className="w-5 h-5" />} label="AI" top="0%" right="20%" delay={0.8} />
            <HeroNode icon={<Settings className="w-5 h-5" />} label="Automation" top="40%" right="0%" delay={1.6} />
            <HeroNode icon={<Globe className="w-5 h-5" />} label="Monitoring" bottom="10%" right="15%" delay={2.4} />

            {/* Connecting rings */}
            <div className="absolute w-[320px] h-[320px] border border-[var(--color-border)] rounded-full opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animation: 'spin-slow 25s linear infinite' }} />
            <div className="absolute w-[220px] h-[220px] border border-[var(--color-primary)]/15 rounded-full opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animation: 'spin-slow 35s linear infinite reverse' }} />
          </motion.div>
        </div>
      </Container>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-secondary)] opacity-50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

function HeroNode({ icon, label, delay, ...pos }: { icon: React.ReactNode; label: string; delay: number; top?: string; left?: string; right?: string; bottom?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 + delay * 0.15 }}
      className="absolute z-10 flex flex-col items-center gap-1.5"
      style={{ ...pos, animation: `float ${3 + delay * 0.3}s ease-in-out ${delay * 0.2}s infinite` }}
    >
      <div className="w-12 h-12 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-primary)]">
        {icon}
      </div>
      <span className="text-[10px] font-semibold text-[var(--color-text-secondary)]">{label}</span>
    </motion.div>
  );
}
