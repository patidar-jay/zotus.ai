import { motion } from 'framer-motion';
import { Brain, Zap, Users, Rocket } from 'lucide-react';
import { Container } from '../ui';

const pillars = [
  { number: '01', icon: Brain, title: 'AI-First', description: 'Every solution powered by real AI.', color: '#6C3CF4' },
  { number: '02', icon: Zap, title: 'Real-Time', description: 'Instant detection and response.', color: '#10B981' },
  { number: '03', icon: Users, title: '24/7 Support', description: 'Round-the-clock operations team.', color: '#F59E0B' },
  { number: '04', icon: Rocket, title: 'Rapid Deployment', description: 'Go live in under 2 weeks.', color: '#EC4899' },
];

export default function WhyChooseUsSection() {
  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl p-8 md:p-10" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                <span className="absolute top-6 right-8 text-7xl md:text-8xl font-bold pointer-events-none select-none" style={{ color: `${p.color}08` }}>{p.number}</span>
                <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-0 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${p.color}33 0%, transparent 70%)`, filter: 'blur(30px)' }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl shrink-0" style={{ background: `${p.color}12`, color: p.color, border: `1px solid ${p.color}25` }}>
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{p.title}</h3>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed pl-16" style={{ color: 'var(--color-text-secondary)' }}>{p.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
