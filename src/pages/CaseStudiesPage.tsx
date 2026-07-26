import { motion } from 'framer-motion';
import { GraduationCap, Target, Warehouse, Building, TrendingUp } from 'lucide-react';
import { Container } from '../components/ui';
import { CTASection } from '../components/sections';

const caseStudies = [
  {
    icon: GraduationCap, color: '#6C3CF4', badge: 'Government Exams', title: 'State-Level Exam Monitoring', subtitle: 'UPPSC · BPSC · MPPSC',
    results: [{ metric: '98.7%', label: 'Accuracy' }, { metric: '<150ms', label: 'Alert time' }, { metric: '40%', label: 'Fraud reduction' }, { metric: '500+', label: 'Centers' }],
  },
  {
    icon: Target, color: '#10B981', badge: 'Entrance Exams', title: 'National Entrance Exam Solutions', subtitle: 'NEET · JEE · GATE',
    results: [{ metric: '99.1%', label: 'Verification' }, { metric: '2M+', label: 'Sessions' }, { metric: '60%', label: 'Fewer interventions' }, { metric: '24/7', label: 'Coverage' }],
  },
  {
    icon: Warehouse, color: '#F59E0B', badge: 'Warehouses', title: 'Warehouse Surveillance', subtitle: 'Inventory · Security',
    results: [{ metric: '75%', label: 'Theft reduction' }, { metric: '<3s', label: 'Alert time' }, { metric: '30+', label: 'Warehouses' }, { metric: '95%', label: 'Uptime' }],
  },
  {
    icon: Building, color: '#EC4899', badge: 'Institutions', title: 'Campus Security', subtitle: 'Universities · Coaching',
    results: [{ metric: '90%', label: 'Faster response' }, { metric: '12', label: 'Sites' }, { metric: '50K+', label: 'Daily checks' }, { metric: '99.5%', label: 'Uptime' }],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center pt-[72px]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)' }} />
        </div>
        <Container className="relative z-10 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-8 border"
              style={{ background: 'rgba(16,185,129,0.06)', borderColor: 'rgba(16,185,129,0.15)', color: '#10B981' }}
            >
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: '#10B981' }} /><span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#10B981' }} /></span>
              Real Deployments
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]" style={{ fontFamily: 'var(--font-heading)' }}
            >
              Proven{' '}
              <span style={{ background: 'linear-gradient(120deg, #10B981 0%, #6C3CF4 50%, #F59E0B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Results.</span>
            </motion.h1>
          </div>
        </Container>
      </section>

      {/* Case Studies — name + metrics only */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="space-y-8">
            {caseStudies.map((cs, i) => {
              const Icon = cs.icon;
              return (
                <motion.div key={cs.badge} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
                  className="relative rounded-3xl overflow-hidden" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
                >
                  <div className="h-1" style={{ background: `linear-gradient(90deg, ${cs.color}, ${cs.color}88)` }} />
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <div className={`p-8 md:p-10 lg:col-span-2 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                      <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 w-fit" style={{ background: `${cs.color}12`, color: cs.color, border: `1px solid ${cs.color}25` }}>
                        <Icon className="w-3.5 h-3.5" />{cs.badge}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-semibold leading-tight" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{cs.title}</h2>
                      <p className="text-sm font-medium mt-2" style={{ color: cs.color }}>{cs.subtitle}</p>
                    </div>
                    <div className={`p-8 md:p-10 lg:col-span-3 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`} style={{ background: 'var(--color-bg-subtle)' }}>
                      <div className="flex items-center gap-2 mb-6"><TrendingUp className="w-5 h-5" style={{ color: cs.color }} /><span className="text-sm font-bold uppercase tracking-widest" style={{ color: cs.color }}>Results</span></div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {cs.results.map((r) => (
                          <div key={r.label}>
                            <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', background: `linear-gradient(135deg, ${cs.color}, ${cs.color}aa)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{r.metric}</div>
                            <div className="text-sm text-[var(--color-text-secondary)]">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Summary Stats */}
      <section className="py-16 md:py-20 border-y" style={{ borderColor: 'var(--color-border-subtle)', background: 'var(--color-bg-subtle)' }}>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ value: '500+', label: 'Centers' }, { value: '2M+', label: 'Sessions' }, { value: '30+', label: 'Warehouses' }, { value: '99.2%', label: 'Accuracy' }].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
                <div className="text-sm text-[var(--color-text-secondary)]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
