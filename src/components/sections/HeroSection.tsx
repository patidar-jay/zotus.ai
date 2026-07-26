import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { Container } from '../ui';

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden" style={{ minHeight: '100vh', color: 'var(--color-text)' }}>
      <style>{`
        @keyframes meshA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(6%,8%) scale(1.06); } }
        @keyframes meshB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-8%,-5%) scale(1.08); } }
        @keyframes meshC { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-4%,6%) scale(1.05); } }
        .mesh-a { animation: meshA 18s ease-in-out infinite; }
        .mesh-b { animation: meshB 22s ease-in-out infinite; }
        .mesh-c { animation: meshC 14s ease-in-out infinite; }
      `}</style>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="mesh-a absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-[0.07] blur-[80px]" style={{ background: 'var(--color-primary)' }} />
        <div className="mesh-b absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] rounded-full opacity-[0.09] blur-[100px]" style={{ background: 'var(--color-accent)' }} />
        <div className="mesh-c absolute bottom-[-30%] left-[25%] w-[55vw] h-[55vw] rounded-full opacity-[0.06] blur-[90px]" style={{ background: '#10B981' }} />
      </div>

      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(109,40,217,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.05) 1px, transparent 1px)',
        backgroundSize: '80px 80px', maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
      }} />

      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 70% at 20% 30%, rgba(108,60,244,0.10) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 80% 70%, rgba(16,185,129,0.08) 0%, transparent 55%)',
      }} />

      <Container className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium backdrop-blur-[10px]"
          style={{ background: 'rgba(109,40,217,0.06)', border: '1px solid rgba(109,40,217,0.12)' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
          </span>
          <span style={{ color: 'var(--color-text-secondary)' }}>Trusted by leading institutions</span>
          <Sparkles className="h-3 w-3" style={{ color: '#A78BFA' }} />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center font-semibold text-[44px] md:text-[72px] lg:text-[80px] leading-[1.05]"
          style={{ fontFamily: 'var(--font-heading)', maxWidth: 1100 }}
        >
          <span style={{ background: 'linear-gradient(120deg, #A78BFA 0%, #6C3CF4 40%, #10B981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Exam Monitoring
          </span>
          <span> Solutions.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl text-center text-lg md:text-xl leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          The intelligent monitoring platform behind exams,
          <br className="hidden md:block" />
          warehouses, and enterprise security programs.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm uppercase tracking-wider"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          {['Exam Proctoring', 'Warehouse Security', 'Live Monitoring', 'Smart Alerts', 'Analytics', 'Automation'].map((item, i, arr) => (
            <span key={item} className="flex items-center gap-6">
              <span>{item}</span>
              {i < arr.length - 1 && <span className="h-3 w-px" style={{ background: 'var(--color-border)' }} />}
            </span>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ background: 'linear-gradient(120deg, #6C3CF4 0%, #A78BFA 100%)', boxShadow: '0 10px 30px -10px rgba(108,60,244,0.6)' }} href="/contact"
          >Talk to an expert <ArrowRight className="h-4 w-4" /></a>
          <a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors backdrop-blur-[10px]"
            style={{ background: 'rgba(15,23,42,0.04)', border: '1px solid rgba(15,23,42,0.12)', color: 'var(--color-text)' }} href="/platform"
          >Explore our platform</a>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
          style={{ color: 'var(--color-text-tertiary)' }} animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Container>
    </section>
  );
}
