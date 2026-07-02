import { motion } from 'framer-motion';
import { ArrowRight, Cloud, Brain, BarChart3, Settings, Smartphone, Globe, Database } from 'lucide-react';
import { Container } from '../ui';

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center pt-[72px]">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[var(--color-accent-light)] rounded-full opacity-30 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-[var(--color-accent)] rounded-full opacity-10 blur-[100px]" />
      </div>

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
              INTELLIGENT SOFTWARE FOR ENTERPRISES
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="leading-[1.08] tracking-[-0.03em] mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 800 }}
            >
              Building Intelligent{' '}
              <br className="hidden sm:block" />
              Software That Powers{' '}
              <br className="hidden sm:block" />
              <span className="text-[var(--color-primary)]">Smarter Businesses</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-lg mb-10"
            >
              We engineer AI-powered software solutions, automation platforms, and cloud infrastructure that help enterprises innovate, scale, and lead.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="/#services"
                className="group inline-flex items-center gap-2.5 bg-[var(--color-primary)] text-white px-7 py-3.5 rounded-xl text-[15px] font-semibold hover:bg-[var(--color-primary-dark)] transition-all duration-200 shadow-[0_4px_14px_rgba(109,40,217,0.25)] hover:shadow-[0_6px_20px_rgba(109,40,217,0.35)]"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2.5 bg-white text-[var(--color-text)] border border-[var(--color-border)] px-7 py-3.5 rounded-xl text-[15px] font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-200"
              >
                Schedule Consultation
              </a>
            </motion.div>

            {/* Trust indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/80?img=${i + 10}`}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] font-medium">
                Trusted by <span className="text-[var(--color-text)] font-semibold">100+</span> startups and enterprises worldwide
              </p>
            </motion.div>
          </div>

          {/* Right — 3D Illustration (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center relative mt-16 lg:mt-0"
            style={{ minHeight: 480 }}
          >
            {/* Central Logo */}
            <div
              className="relative z-20 w-32 h-32 rounded-[2rem] bg-white flex items-center justify-center shadow-[0_20px_60px_rgba(109,40,217,0.15)] border border-[var(--color-border-subtle)]"
              style={{
                animation: 'float 4s ease-in-out infinite',
              }}
            >
              <img src="/logo-mark.png" alt="Zotus AI" className="w-16 h-16 object-contain" />
            </div>

            {/* Orbiting nodes */}
            <HeroNode icon={<Cloud className="w-5 h-5" />} label="Cloud" top="5%" left="15%" delay={0} />
            <HeroNode icon={<Brain className="w-5 h-5" />} label="AI" top="0%" right="20%" delay={0.8} />
            <HeroNode icon={<BarChart3 className="w-5 h-5" />} label="Analytics" top="35%" right="0%" delay={1.6} />
            <HeroNode icon={<Settings className="w-5 h-5" />} label="Automation" bottom="10%" right="15%" delay={2.4} />
            <HeroNode icon={<Smartphone className="w-5 h-5" />} label="Mobile" bottom="5%" left="20%" delay={1.2} />
            <HeroNode icon={<Globe className="w-5 h-5" />} label="Web" top="40%" left="0%" delay={2} />
            <HeroNode icon={<Database className="w-5 h-5" />} label="Data" bottom="30%" left="5%" delay={0.4} />

            {/* Connecting rings */}
            <div className="absolute w-[320px] h-[320px] border border-[var(--color-border)] rounded-full opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animation: 'spin-slow 25s linear infinite' }} />
            <div className="absolute w-[220px] h-[220px] border border-[var(--color-primary)]/15 rounded-full opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animation: 'spin-slow 35s linear infinite reverse' }} />
          </motion.div>
        </div>
      </Container>
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
