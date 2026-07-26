import { motion } from 'framer-motion';
import { ArrowRight, Database, Cpu, ShieldCheck, BarChart3, Layers, GitBranch, Users, Globe, Award, ChevronRight } from 'lucide-react';
import { Container } from '../components/ui';
import { CTASection } from '../components/sections';

const steps = [
  { step: '01', icon: Database, title: 'Ingest', color: '#6C3CF4' },
  { step: '02', icon: Layers, title: 'Annotate', color: '#A855F7' },
  { step: '03', icon: ShieldCheck, title: 'QC', color: '#10B981' },
  { step: '04', icon: GitBranch, title: 'Deliver', color: '#F59E0B' },
];

const capabilities = [
  { icon: Cpu, title: 'Custom Pipelines', color: '#6C3CF4' },
  { icon: ShieldCheck, title: 'Quality Gates', color: '#10B981' },
  { icon: Users, title: 'Expert Routing', color: '#A78BFA' },
  { icon: BarChart3, title: 'Live Analytics', color: '#F59E0B' },
  { icon: Layers, title: 'Multi-format', color: '#EC4899' },
  { icon: GitBranch, title: 'API Delivery', color: '#14B8A6' },
];

const stats = [
  { value: '10M+', label: 'Annotations', icon: Award },
  { value: '99.4%', label: 'Quality Score', icon: ShieldCheck },
  { value: '2,500+', label: 'Domain Experts', icon: Users },
  { value: '40+', label: 'Clients', icon: Globe },
];

const chips = ['Data Labeling', 'RLHF', 'Segmentation', 'Agent Evals', 'Reward Modeling', 'Code Review', 'QC', 'Fine-tuning'];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-[72px]">
        <style>{`@keyframes mq { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .mq-scroll { animation: mq 40s linear infinite; } .mq-scroll:hover { animation-play-state: paused; }`}</style>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)' }} />
          <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.10) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        </div>
        <Container className="relative z-10 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-8 border"
              style={{ background: 'rgba(109,40,217,0.06)', borderColor: 'rgba(109,40,217,0.12)', color: 'var(--color-primary)' }}
            >
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" /></span>
              Our Platform
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6" style={{ fontFamily: 'var(--font-heading)' }}
            >
              The{' '}
              <span style={{ background: 'linear-gradient(120deg, #A78BFA 0%, #6C3CF4 40%, #10B981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Data Factory
              </span>
              {' '}for AI.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl mx-auto mb-10"
            >From raw data to production-ready training sets — one platform for annotation, quality, and delivery.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                style={{ background: 'linear-gradient(120deg, #6C3CF4 0%, #A78BFA 100%)', boxShadow: '0 10px 30px -10px rgba(108,60,244,0.6)' }}
              >Request a Demo <ArrowRight className="w-4 h-4" /></a>
              <a href="/case-studies" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
                style={{ background: 'rgba(15,23,42,0.04)', border: '1px solid rgba(15,23,42,0.12)', color: 'var(--color-text)' }}
              >View Case Studies</a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Marquee */}
      <section className="relative overflow-hidden py-10 md:py-14 border-y border-[var(--color-border-subtle)]">
        <div className="relative">
          <div className="flex gap-3 mq-scroll" style={{ width: 'max-content' }}>
            {[...chips, ...chips].map((c, i) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap"
                style={{ background: 'rgba(109,40,217,0.04)', border: '1px solid rgba(109,40,217,0.10)', color: 'var(--color-text-secondary)' }}
              ><span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: ['#A78BFA', '#10B981', '#F59E0B'][i % 3] }} />{c}</span>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(90deg, var(--color-bg) 0%, transparent 100%)' }} />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(-90deg, var(--color-bg) 0%, transparent 100%)' }} />
      </section>

      {/* Pipeline */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14 md:mb-20">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C3CF4' }}>How It Works</span>
            <h2 className="text-4xl md:text-5xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              Four steps.{' '}
              <span style={{ background: 'linear-gradient(120deg, #A78BFA, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>One pipeline.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative">
                  <div className="relative p-6 md:p-8 rounded-3xl h-full text-center" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                    <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-0" style={{ background: `radial-gradient(circle, ${s.color}33 0%, transparent 70%)`, filter: 'blur(28px)' }} />
                    <div className="relative z-10">
                      <span className="text-3xl font-bold block mb-4" style={{ color: `${s.color}25` }}>{s.step}</span>
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl mx-auto mb-5" style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}25` }}><Icon className="w-7 h-7" /></span>
                      <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{s.title}</h3>
                    </div>
                  </div>
                  {i < steps.length - 1 && <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20"><ChevronRight className="w-6 h-6 text-[var(--color-primary)] opacity-40" /></div>}
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28 relative" style={{ background: 'var(--color-bg-subtle)' }}>
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C3CF4' }}>Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              Everything you{' '}
              <span style={{ background: 'linear-gradient(120deg, #A78BFA, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>need.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {capabilities.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="group text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-md" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all group-hover:scale-110" style={{ background: `${f.color}12`, border: `1px solid ${f.color}20` }}>
                    <Icon className="w-5 h-5" style={{ color: f.color }} />
                  </div>
                  <h4 className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{f.title}</h4>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 relative">
        <Container className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="text-center p-8 rounded-3xl" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(109,40,217,0.08)' }}><Icon className="w-6 h-6 text-[var(--color-primary)]" /></div>
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                  <div className="text-sm text-[var(--color-text-secondary)]">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
