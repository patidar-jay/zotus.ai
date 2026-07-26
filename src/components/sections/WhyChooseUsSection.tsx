import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Rocket, ArrowRight, Award, Globe, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui';

const pillars = [
  { number: '01', icon: ShieldCheck, title: 'Quality at Scale', desc: 'Every data point passes through multi-stage quality gates — consensus scoring, inter-annotator agreement checks, and model-in-the-loop verification before delivery.', color: '#6D28D9' },
  { number: '02', icon: Zap, title: 'Speed to Production', desc: 'From kickoff to first delivery in under two weeks. Pre-built annotation pipelines, managed expert teams, and rapid iteration cycles that match your model training cadence.', color: '#8B5CF6' },
  { number: '03', icon: Users, title: 'Expert-Led Workforce', desc: 'Vetted domain specialists — software engineers, PhDs, linguists, and researchers — not crowdsourced generalists. Every annotator is background-checked and NDA-bound.', color: '#7C3AED' },
  { number: '04', icon: Rocket, title: 'Enterprise Security', desc: 'SOC 2 Type II compliant infrastructure. Data residency controls, end-to-end encryption, role-based access, and complete audit trails for every annotation session.', color: '#5B21B6' },
];

const stats = [
  { value: '10M+', label: 'Annotations Delivered', icon: Award },
  { value: '99.4%', label: 'Quality Score', icon: ShieldCheck },
  { value: '2,500+', label: 'Domain Experts', icon: Users },
  { value: '40+', label: 'Enterprise Clients', icon: Globe },
];

const platformFeatures = [
  'Custom annotation interfaces',
  'Model-in-the-loop QC',
  'Real-time project dashboards',
  'Automated consensus scoring',
  'Multi-format data support',
  'API-first delivery pipeline',
];

export default function WhyChooseUsSection() {
  return (
    <>
      {/* Why Us — 4 pillars */}
      <section id="about" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 90% 70% at 20% 30%, rgba(108,60,244,0.06) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 80% 70%, rgba(16,185,129,0.05) 0%, transparent 55%)',
        }} />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14 md:mb-20">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6D28D9' }}>Why choose us</span>
            <h2 className="text-4xl md:text-6xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              Human infrastructure{' '}
              <span style={{ background: 'linear-gradient(120deg, #A855F7, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>your team can trust.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              Four pillars. One commitment. We handle the data complexity so your team can focus on building frontier models.
            </p>
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
                    <p className="text-sm md:text-base leading-relaxed pl-16" style={{ color: 'var(--color-text-secondary)' }}>{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Platform deep-dive */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(109,40,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 80%)',
        }} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 border"
                style={{ background: 'rgba(109,40,217,0.06)', borderColor: 'rgba(109,40,217,0.12)', color: '#6D28D9' }}
              >Our Platform</span>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                The data factory{' '}
                <span style={{ background: 'linear-gradient(120deg, #A855F7, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>built for AI teams.</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                Purpose-built infrastructure for teams that need high-quality training data at scale — without building annotation tooling themselves.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {platformFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: '#8B5CF6' }} />
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                style={{ background: 'linear-gradient(120deg, #6D28D9 0%, #A855F7 100%)', boxShadow: '0 10px 30px -10px rgba(108,60,244,0.5)' }}
              >Get started <ArrowRight className="w-4 h-4" /></a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden p-8" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
            >
              <style>{`@keyframes scanLine { 0% { transform: translateY(0); } 100% { transform: translateY(100%); } }`}</style>
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 rounded-xl overflow-hidden" style={{ background: '#0D1117', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="p-4 border-b border-white/5 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                    <span className="text-[10px] font-mono ml-2" style={{ color: 'rgba(255,255,255,0.3)' }}>annotation-platform.ai</span>
                  </div>
                  <div className="p-4 space-y-3">
                    {['$ pipeline run --project vision-v3', '→ Loading 12,847 samples...', '→ Assigning to 24 annotators...', '→ QC gate: consensus ≥ 0.92', '✓ Batch 1/8 complete (1,606 samples)', '✓ Quality score: 99.1%'].map((line, i) => (
                      <div key={i} className="text-[11px] font-mono" style={{ color: i === 0 ? 'rgba(148,163,184,0.7)' : i >= 4 ? '#8B5CF6' : 'rgba(167,139,250,0.6)' }}>
                        {line}
                        {i === 5 && <span className="inline-block w-1.5 h-3 ml-1 align-middle" style={{ background: '#8B5CF6', animation: 'pulse 1s ease infinite' }} />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>


    </>
  );
}
