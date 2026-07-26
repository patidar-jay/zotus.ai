import { motion } from 'framer-motion';
import {
  Shield,
  Radio,
  Bell,
  Warehouse,
  LayoutDashboard,
  Settings,
} from 'lucide-react';
import { Container } from '../ui';

const chips1 = ['Smart Monitoring', 'Real-Time Alerts', 'Exam Solutions', 'Warehouse Security', 'Live Dashboard', 'Incident Reports',
  'Access Control', 'Smart Automation', 'Audit Trail', 'AI Analytics', 'Quality Control', 'Performance Reports'];
const chips2 = ['Monitoring', 'Alerts', 'Dashboard', 'Reports', 'Analytics', 'Automation', 'Security', 'Integration',
  'Exam Proctoring', 'Surveillance', 'Compliance', 'Data Insights'];

const products = [
  { icon: Shield, title: 'Exam Monitoring', subtitle: 'Proctoring · Integrity · Compliance', description: 'AI-powered exam proctoring solutions.', color: '#A78BFA', href: '/case-studies' },
  { icon: Radio, title: 'Live Surveillance', subtitle: 'Real-time · Multi-camera · Alerts', description: 'Real-time monitoring and alerting.', color: '#10B981', href: '/platform' },
  { icon: Bell, title: 'Smart Alerts', subtitle: 'Instant · Automated · Accurate', description: 'Instant notifications for every incident.', color: '#6C3CF4', href: '/platform' },
  { icon: Warehouse, title: 'Warehouse Security', subtitle: 'Inventory · Access · Prevention', description: 'Intelligent security for warehouses.', color: '#F59E0B', href: '/case-studies' },
  { icon: LayoutDashboard, title: 'Admin Dashboard', subtitle: 'Control · Reports · Analytics', description: 'Centralized control and reporting.', color: '#EC4899', href: '/platform' },
  { icon: Settings, title: 'Custom Automation', subtitle: 'Workflows · Integration · Scale', description: 'Tailored automation workflows.', color: '#14B8A6', href: '/platform' },
];

export default function ProductSection() {
  return (
    <>
      {/* Marquee */}
      <section className="relative overflow-hidden py-12 md:py-16 border-y" style={{ borderColor: 'var(--color-border-subtle)' }}>
        <style>{`
          @keyframes marqueeL { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes marqueeR { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          .mq-l { animation: marqueeL 45s linear infinite; }
          .mq-r { animation: marqueeR 50s linear infinite; }
          .mq-l:hover, .mq-r:hover { animation-play-state: paused; }
        `}</style>
        <div className="relative">
          <div className="flex gap-3 mq-l" style={{ width: 'max-content' }}>
            {[...chips1, ...chips1].map((c, i) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap backdrop-blur-lg"
                style={{ background: 'rgba(109,40,217,0.04)', border: '1px solid rgba(109,40,217,0.08)', color: 'var(--color-text-secondary)' }}
              >
                <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: ['#A78BFA', '#10B981', '#F59E0B'][i % 3] }} />
                {c}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-4 mq-r" style={{ width: 'max-content' }}>
            {[...chips2, ...chips2].map((c, i) => (
              <span key={i} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap backdrop-blur-lg"
                style={{ background: 'rgba(109,40,217,0.04)', border: '1px solid rgba(109,40,217,0.08)', color: 'var(--color-text-secondary)' }}
              >
                <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: ['#A78BFA', '#10B981', '#F59E0B'][i % 3] }} />
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(90deg, var(--color-bg) 0%, transparent 100%)' }} />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(-90deg, var(--color-bg) 0%, transparent 100%)' }} />
      </section>

      {/* Product Cards */}
      <section id="product" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none opacity-60" style={{
          backgroundImage: 'linear-gradient(rgba(109,40,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at center top, black 30%, transparent 85%)', WebkitMaskImage: 'radial-gradient(ellipse at center top, black 30%, transparent 85%)',
        }} />
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(108,60,244,0.10) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)', filter: 'blur(60px)' }} />

        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center mb-14 md:mb-20">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C3CF4' }}>What we build</span>
              <h2 className="text-4xl md:text-6xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                Solutions,{' '}
                <span style={{ background: 'linear-gradient(120deg, #A78BFA, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  purpose-built
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Six capabilities. One intelligent platform.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-[minmax(280px,auto)]">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <a className="group relative block h-full overflow-hidden rounded-3xl p-6 md:p-8"
                    style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }} href={p.href}
                  >
                    <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-30 pointer-events-none"
                      style={{ background: `radial-gradient(circle, ${p.color}44 0%, transparent 70%)`, filter: 'blur(28px)' }}
                    />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30` }}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="transition-transform duration-500 group-hover:rotate-45 group-hover:translate-x-1 opacity-30 group-hover:opacity-60" style={{ color: 'var(--color-text-secondary)' }}
                        >
                          <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{p.title}</h3>
                      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--color-text-secondary)' }}>{p.subtitle}</p>
                      <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{p.description}</p>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
