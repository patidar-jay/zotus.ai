import { motion } from 'framer-motion';
import { Brain, Lightbulb, Users, Zap } from 'lucide-react';
import { Container } from '../ui';

const pillars = [
  {
    number: '01',
    icon: Brain,
    title: 'AI-First Approach',
    description: 'AI and machine learning are at the core of everything we build — not an afterthought. Every solution is powered by real computer vision and deep learning.',
    color: '#6C3CF4',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Real-Time Performance',
    description: 'Sub-200ms detection latency. Our AI processes live video feeds and triggers alerts instantly — critical for exam proctoring and security monitoring.',
    color: '#10B981',
  },
  {
    number: '03',
    icon: Users,
    title: 'Dedicated Operations Team',
    description: 'Passionate engineers who work alongside you, not just as vendors but as partners. 24/7 monitoring support during critical deployments.',
    color: '#F59E0B',
  },
  {
    number: '04',
    icon: Lightbulb,
    title: 'Rapid Deployment',
    description: 'From scoping to go-live in under 2 weeks. Our battle-tested deployment playbook gets you up and running fast with custom configurations.',
    color: '#EC4899',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 70% at 20% 30%, rgba(108,60,244,0.06) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 80% 70%, rgba(16,185,129,0.05) 0%, transparent 55%)',
      }} />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C3CF4' }}>
            Why Zotus AI
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold" style={{ fontFamily: 'var(--font-heading)', letterSpacing: 0 }}>
            Quality your team{' '}
            <span style={{
              background: 'linear-gradient(120deg, #A78BFA, #10B981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              can trust.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl p-8 md:p-10"
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                {/* Large number watermark */}
                <span
                  className="absolute top-6 right-8 text-7xl md:text-8xl font-bold pointer-events-none select-none"
                  style={{ color: `${pillar.color}08` }}
                >
                  {pillar.number}
                </span>

                {/* Hover glow */}
                <div
                  className="absolute -top-20 -right-20 h-44 w-44 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-0 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${pillar.color}33 0%, transparent 70%)`, filter: 'blur(30px)' }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl shrink-0"
                      style={{ background: `${pillar.color}12`, color: pillar.color, border: `1px solid ${pillar.color}25` }}
                    >
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: 0 }}>
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed pl-16" style={{ color: 'var(--color-text-secondary)' }}>
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
