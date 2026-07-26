import { motion } from 'framer-motion';
import { Brain, Zap, Users, Rocket, ArrowRight, Shield, Clock, Activity, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui';

const pillars = [
  { number: '01', icon: Brain, title: 'AI-First', color: '#6C3CF4' },
  { number: '02', icon: Zap, title: 'Real-Time', color: '#10B981' },
  { number: '03', icon: Users, title: '24/7 Support', color: '#F59E0B' },
  { number: '04', icon: Rocket, title: 'Rapid Deployment', color: '#EC4899' },
];

const stats = [
  { value: '99.2%', label: 'Accuracy', icon: Shield },
  { value: '<200ms', label: 'Response Time', icon: Zap },
  { value: '50K+', label: 'Hours Monitored', icon: Clock },
  { value: '500+', label: 'Centers Deployed', icon: Activity },
];

const expertFeatures = [
  'Multi-zone coverage',
  'Instant incident alerts',
  'Centralized control room',
  'Detailed audit trail',
  'Custom alert rules',
  'Real-time analytics',
];

export default function WhyChooseUsSection() {
  return (
    <>
      {/* Why Us — numbered pillars */}
      <section id="about" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 90% 70% at 20% 30%, rgba(108,60,244,0.06) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 80% 70%, rgba(16,185,129,0.05) 0%, transparent 55%)',
        }} />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14 md:mb-20">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C3CF4' }}>Why Zotus AI</span>
            <h2 className="text-4xl md:text-6xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              Quality your team{' '}
              <span style={{ background: 'linear-gradient(120deg, #A78BFA, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>can trust.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl p-8 md:p-10 text-center" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                >
                  <span className="absolute top-4 right-5 text-6xl md:text-7xl font-bold pointer-events-none select-none" style={{ color: `${p.color}08` }}>{p.number}</span>
                  <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-0 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${p.color}33 0%, transparent 70%)`, filter: 'blur(30px)' }}
                  />
                  <div className="relative z-10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl mx-auto mb-5" style={{ background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}25` }}>
                      <Icon className="w-7 h-7" />
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{p.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Deep-Dive Section — like TBrain's Physical AI / Expert OS sections */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(109,40,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 80%)',
        }} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 border"
                style={{ background: 'rgba(109,40,217,0.06)', borderColor: 'rgba(109,40,217,0.12)', color: '#6C3CF4' }}
              >Exam AI Monitoring Solution</span>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                The monitoring platform{' '}
                <span style={{ background: 'linear-gradient(120deg, #A78BFA, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>your team needs.</span>
              </h2>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {expertFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#10B981' }} />
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                style={{ background: 'linear-gradient(120deg, #6C3CF4 0%, #A78BFA 100%)', boxShadow: '0 10px 30px -10px rgba(108,60,244,0.5)' }}
              >Get started <ArrowRight className="w-4 h-4" /></a>
            </motion.div>

            {/* Right — Animated illustration */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden p-8" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
            >
              <style>{`
                @keyframes pillarPulse { 0%,100% { opacity: 0.15; } 50% { opacity: 0.4; } }
                @keyframes pillarScan { 0% { transform: translateY(0); } 100% { transform: translateY(200px); } }
              `}</style>
              <div className="aspect-[4/3] relative">
                {/* Fake monitoring UI */}
                <div className="absolute inset-0 grid grid-cols-2 gap-3">
                  {[0, 1, 2, 3].map(i => (
                    <div key={i} className="rounded-xl relative overflow-hidden" style={{ background: `rgba(108,60,244,0.04)`, border: '1px solid rgba(108,60,244,0.08)' }}>
                      <div className="absolute top-2 left-2 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#10B981', animation: `pillarPulse ${1.5 + i * 0.3}s ease infinite` }} />
                        <span className="text-[9px] font-mono" style={{ color: 'var(--color-text-secondary)' }}>CAM-{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="absolute inset-x-0 h-px opacity-30" style={{
                        background: 'linear-gradient(90deg, transparent, #6C3CF4, transparent)',
                        animation: `pillarScan ${3 + i * 0.5}s linear infinite`,
                      }} />
                      <div className="absolute bottom-2 right-2">
                        <span className="text-[8px] px-1.5 py-0.5 rounded font-mono" style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}>LIVE</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 relative">
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C3CF4' }}>Performance</span>
            <h2 className="text-3xl md:text-5xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              Numbers that{' '}
              <span style={{ background: 'linear-gradient(120deg, #A78BFA, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>speak.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="text-center p-8 rounded-3xl" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(109,40,217,0.08)' }}>
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
