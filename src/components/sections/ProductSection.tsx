import { motion } from 'framer-motion';
import {
  ArrowRight,
  UserSearch,
  Users,
  Smartphone,
  LayoutDashboard,
  GraduationCap,
  Warehouse,
  Building,
  Shield,
  Radio,
  Bell,
} from 'lucide-react';
import { Container, SectionHeading } from '../ui';

const products = [
  {
    icon: UserSearch,
    title: 'Face Recognition',
    subtitle: 'Identity verification · Real-time matching',
    description: 'Real-time face detection and matching against registered databases for continuous identity verification.',
    color: '#A78BFA',
    href: '/platform',
  },
  {
    icon: Smartphone,
    title: 'Object Detection',
    subtitle: 'Phone & device detection',
    description: 'AI-powered detection of mobile phones, earpieces, smartwatches, and unauthorized devices in camera frame.',
    color: '#10B981',
    href: '/platform',
  },
  {
    icon: Radio,
    title: 'Live Monitoring',
    subtitle: 'Real-time video feeds · AI alerts',
    description: 'Continuous live camera feeds with AI-powered analysis, flagging suspicious activity as it happens.',
    color: '#6C3CF4',
    href: '/platform',
  },
  {
    icon: Users,
    title: 'Multi-Person Detection',
    subtitle: 'Crowd & proxy detection',
    description: 'Instantly flags when more than the expected number of persons appear in a monitored zone.',
    color: '#F59E0B',
    href: '/platform',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    subtitle: 'Automated notifications',
    description: 'Automated instant notifications when AI detects potential violations, anomalies, or security threats.',
    color: '#EC4899',
    href: '/platform',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard',
    subtitle: 'Centralized command center',
    description: 'Centralized control panel to manage live feeds, review alerts, and generate audit reports.',
    color: '#14B8A6',
    href: '/platform',
  },
];

const useCases = [
  { icon: GraduationCap, label: 'Government Exams', desc: 'NEET, JEE, UPPSC, BPSC, MPPSC', color: '#6C3CF4' },
  { icon: Warehouse, label: 'Private Warehouses', desc: 'Inventory monitoring, theft prevention', color: '#10B981' },
  { icon: Building, label: 'Institutions', desc: 'Universities, coaching centers', color: '#F59E0B' },
  { icon: Shield, label: 'Security', desc: 'Facility monitoring, access control', color: '#EC4899' },
];

export default function ProductSection() {
  return (
    <>
      {/* ── Marquee Strip ── */}
      <section className="relative overflow-hidden py-10 md:py-14 border-y" style={{ borderColor: 'var(--color-border-subtle)' }}>
        <style>{`
          @keyframes marqueeLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes marqueeRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          .marquee-left { animation: marqueeLeft 45s linear infinite; }
          .marquee-right { animation: marqueeRight 50s linear infinite; }
          .marquee-left:hover, .marquee-right:hover { animation-play-state: paused; }
        `}</style>

        <div className="relative">
          {/* Row 1 */}
          <div className="flex gap-3 marquee-left" style={{ width: 'max-content' }}>
            {[...Array(2)].flatMap(() => [
              { label: 'Face Recognition', color: '#A78BFA' },
              { label: 'Object Detection', color: '#10B981' },
              { label: 'Live Monitoring', color: '#F59E0B' },
              { label: 'Smart Alerts', color: '#A78BFA' },
              { label: 'Session Recording', color: '#10B981' },
              { label: 'Exam Proctoring', color: '#F59E0B' },
              { label: 'Warehouse Security', color: '#A78BFA' },
              { label: 'Anomaly Detection', color: '#10B981' },
              { label: 'Access Control', color: '#F59E0B' },
              { label: 'Video Analytics', color: '#A78BFA' },
              { label: 'Admin Dashboard', color: '#10B981' },
              { label: 'Audit Reports', color: '#F59E0B' },
            ]).map((chip, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap backdrop-blur-lg"
                style={{ background: 'rgba(109,40,217,0.04)', border: '1px solid rgba(109,40,217,0.08)', color: 'var(--color-text-secondary)' }}
              >
                <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: chip.color }} />
                {chip.label}
              </span>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-3 mt-3 marquee-right" style={{ width: 'max-content' }}>
            {[...Array(2)].flatMap(() => [
              { label: 'Computer Vision', color: '#A78BFA' },
              { label: 'Deep Learning', color: '#10B981' },
              { label: 'Edge AI', color: '#F59E0B' },
              { label: 'Neural Networks', color: '#A78BFA' },
              { label: 'TensorFlow', color: '#10B981' },
              { label: 'Real-Time Processing', color: '#F59E0B' },
              { label: 'YOLO Detection', color: '#A78BFA' },
              { label: 'Cloud Platform', color: '#10B981' },
              { label: 'WebSocket Streaming', color: '#F59E0B' },
              { label: 'Multi-Camera Sync', color: '#A78BFA' },
              { label: 'Behavior Analysis', color: '#10B981' },
              { label: 'AI-Native QC', color: '#F59E0B' },
            ]).map((chip, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap backdrop-blur-lg"
                style={{ background: 'rgba(109,40,217,0.04)', border: '1px solid rgba(109,40,217,0.08)', color: 'var(--color-text-secondary)' }}
              >
                <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: chip.color }} />
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(90deg, var(--color-bg) 0%, transparent 100%)' }} />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(-90deg, var(--color-bg) 0%, transparent 100%)' }} />
      </section>

      {/* ── Product Cards ── */}
      <section id="product" className="relative overflow-hidden py-24 md:py-32">
        {/* Grid background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage: 'linear-gradient(rgba(109,40,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.03) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center top, black 30%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center top, black 30%, transparent 85%)',
          }}
        />
        {/* Radial glows */}
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(108,60,244,0.10) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)', filter: 'blur(60px)' }} />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-14 md:mb-20">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C3CF4' }}>What we build</span>
              <h2 className="text-4xl md:text-6xl font-semibold" style={{ fontFamily: 'var(--font-heading)', letterSpacing: 0 }}>
                AI capabilities,{' '}
                <span style={{ background: 'linear-gradient(120deg, #A78BFA, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  purpose-built
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Six core capabilities. One intelligent platform. From face recognition to real-time dashboards, we ship the monitoring system your team needs.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-[minmax(280px,auto)]">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="h-full" style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px)' }}>
                    <a
                      className="group relative block h-full overflow-hidden rounded-3xl p-6 md:p-8"
                      style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                      href={p.href}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute -top-16 -right-16 h-40 w-40 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-30 pointer-events-none"
                        style={{ background: `radial-gradient(circle, ${p.color}44 0%, transparent 70%)`, filter: 'blur(28px)' }}
                      />

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <span
                            className="flex h-11 w-11 items-center justify-center rounded-xl"
                            style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30` }}
                          >
                            <Icon className="h-5 w-5" />
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="transition-transform duration-500 group-hover:rotate-45 group-hover:translate-x-1 opacity-30 group-hover:opacity-60"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                          </svg>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: 0 }}>
                          {p.title}
                        </h3>
                        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--color-text-secondary)' }}>
                          {p.subtitle}
                        </p>
                        <p className="mt-4 text-sm leading-relaxed max-w-md" style={{ color: 'var(--color-text-secondary)' }}>
                          {p.description}
                        </p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--color-bg-subtle)' }}>
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Where It's Used"
            title="Built for High-Stakes Environments"
            description="Our AI camera monitoring system is deployed in environments where security, integrity, and real-time surveillance are critical."
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.a
                  key={uc.label}
                  href="/case-studies"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative block overflow-hidden rounded-3xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg"
                  style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(to bottom, ${uc.color}, ${uc.color}88)` }}
                  />

                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                    style={{ background: `${uc.color}12`, border: `1px solid ${uc.color}25` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: uc.color }} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                    {uc.label}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{uc.desc}</p>

                  <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: uc.color }}>
                    View case study <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
