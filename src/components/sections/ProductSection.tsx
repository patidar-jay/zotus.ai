import { motion } from 'framer-motion';
import { Shield, Radio, Bell, Warehouse, LayoutDashboard, Settings } from 'lucide-react';
import { Container } from '../ui';

const chips1 = ['Exam Proctoring', 'Live Surveillance', 'Smart Alerts', 'Warehouse Security', 'Admin Dashboard', 'Custom Automation',
  'Incident Reports', 'Access Control', 'Audit Trail', 'AI Analytics', 'Quality Control', 'Performance Reports'];
const chips2 = ['Real-time Monitoring', 'Alert Engine', 'Dashboard Analytics', 'Compliance Reports', 'Automated Workflows', 'Security Zones',
  'Multi-camera Feed', 'Identity Verification', 'Incident Logging', 'Zone Management', 'Behavioral Analysis', 'Report Generation'];

/* Animated SVG illustrations for each card */
function CameraEyeSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-auto" style={{ color, filter: `drop-shadow(0 0 20px ${color}55)` }}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <ellipse cx="280" cy="150" rx="60" ry="45" opacity="0.3" />
        <ellipse cx="280" cy="150" rx="40" ry="30" opacity="0.5" />
        <circle cx="280" cy="150" r="12" fill="currentColor" opacity="0.6">
          <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
        </circle>
        <line x1="220" y1="150" x2="140" y2="100" opacity="0.3" strokeDasharray="4 4">
          <animate attributeName="strokeDashoffset" values="0;8" dur="1.5s" repeatCount="indefinite" />
        </line>
        <line x1="220" y1="150" x2="140" y2="200" opacity="0.3" strokeDasharray="4 4">
          <animate attributeName="strokeDashoffset" values="0;8" dur="1.5s" repeatCount="indefinite" />
        </line>
        <rect x="120" y="85" width="40" height="30" rx="4" opacity="0.25" />
        <rect x="120" y="185" width="40" height="30" rx="4" opacity="0.25" />
        <circle cx="340" cy="150" r="4" opacity="0.4"><animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" /></circle>
      </g>
    </svg>
  );
}

function MonitorSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-auto" style={{ color, filter: `drop-shadow(0 0 20px ${color}55)` }}>
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <rect x="200" y="60" width="160" height="110" rx="8" opacity="0.4" />
        <rect x="210" y="70" width="140" height="90" rx="4" opacity="0.15" fill="currentColor" />
        {[0, 1, 2, 3].map(i => (
          <line key={i} x1={220} y1={85 + i * 18} x2={340} y2={85 + i * 18} opacity="0.25" strokeDasharray="3 3">
            <animate attributeName="x2" values={`${300 + i * 10};${340};${300 + i * 10}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </line>
        ))}
        <circle cx="330" cy="82" r="5" fill="currentColor" opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <line x1="280" y1="170" x2="280" y2="190" opacity="0.3" />
        <line x1="260" y1="190" x2="300" y2="190" opacity="0.3" />
      </g>
    </svg>
  );
}

function AlertWaveSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-auto" style={{ color, filter: `drop-shadow(0 0 20px ${color}55)` }}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M270 130 A20 20 0 0 1 290 150 L270 170 Z" fill="currentColor" opacity="0.5" />
        <circle cx="280" cy="180" r="3" fill="currentColor" opacity="0.6" />
        {[30, 50, 70].map((r, i) => (
          <circle key={i} cx="280" cy="150" r={r} opacity="0.15" strokeDasharray="4 6">
            <animate attributeName="r" values={`${r};${r + 10};${r}`} dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0.3;0.15" dur={`${1.5 + i * 0.4}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>
    </svg>
  );
}

function WarehouseGridSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-auto" style={{ color, filter: `drop-shadow(0 0 20px ${color}55)` }}>
      <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        {[0, 1, 2].map(row =>
          [0, 1, 2, 3].map(col => (
            <rect key={`${row}-${col}`} x={210 + col * 35} y={80 + row * 50} width="28" height="40" rx="3" opacity="0.2" fill="currentColor">
              <animate attributeName="opacity" values="0.15;0.35;0.15" dur={`${2 + (row + col) * 0.3}s`} repeatCount="indefinite" />
            </rect>
          ))
        )}
        <path d="M205 70 L280 45 L355 70" opacity="0.3" />
        <line x1="205" y1="70" x2="205" y2="240" opacity="0.2" />
        <line x1="355" y1="70" x2="355" y2="240" opacity="0.2" />
      </g>
    </svg>
  );
}

function DashboardBarsSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-auto" style={{ color, filter: `drop-shadow(0 0 20px ${color}55)` }}>
      <g fill="currentColor" stroke="currentColor" strokeWidth="1.2">
        <rect x="200" y="55" width="165" height="120" rx="8" fill="none" opacity="0.3" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
          const h = 30 + Math.sin(i * 0.8) * 25 + i * 5;
          return (
            <rect key={i} x={215 + i * 18} y={165 - h} width="12" height={h} rx="2" opacity="0.4"
              style={{ filter: `drop-shadow(0 0 4px ${color}44)` }}
            >
              <animate attributeName="height" values={`${h};${h + 15};${h}`} dur={`${1.8 + i * 0.15}s`} repeatCount="indefinite" />
              <animate attributeName="y" values={`${165 - h};${150 - h};${165 - h}`} dur={`${1.8 + i * 0.15}s`} repeatCount="indefinite" />
            </rect>
          );
        })}
        <line x1="210" y1="168" x2="360" y2="168" stroke="currentColor" opacity="0.2" fill="none" />
      </g>
    </svg>
  );
}

function GearSvg({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-auto" style={{ color, filter: `drop-shadow(0 0 20px ${color}55)` }}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" style={{ transformOrigin: '280px 150px' }}>
        <animateTransform attributeName="transform" type="rotate" values="0 280 150;360 280 150" dur="20s" repeatCount="indefinite" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 280 + Math.cos(rad) * 35;
          const y1 = 150 + Math.sin(rad) * 35;
          const x2 = 280 + Math.cos(rad) * 50;
          const y2 = 150 + Math.sin(rad) * 50;
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.4" strokeWidth="6" strokeLinecap="round" />;
        })}
        <circle cx="280" cy="150" r="35" opacity="0.3" />
        <circle cx="280" cy="150" r="15" opacity="0.5" fill="currentColor" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.25" style={{ transformOrigin: '220px 200px' }}>
        <animateTransform attributeName="transform" type="rotate" values="360 220 200;0 220 200" dur="15s" repeatCount="indefinite" />
        {[0, 60, 120, 180, 240, 300].map(deg => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 220 + Math.cos(rad) * 18;
          const y1 = 200 + Math.sin(rad) * 18;
          const x2 = 220 + Math.cos(rad) * 28;
          const y2 = 200 + Math.sin(rad) * 28;
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="4" strokeLinecap="round" />;
        })}
        <circle cx="220" cy="200" r="18" />
        <circle cx="220" cy="200" r="7" fill="currentColor" />
      </g>
    </svg>
  );
}

const products = [
  { icon: Shield, title: 'Exam Monitoring', subtitle: 'Proctoring · Integrity · Compliance', desc: 'End-to-end AI-powered exam proctoring across government and entrance exams, not estimated from rules, for real-time fraud prevention and compliance assurance.', color: '#A78BFA', href: '/case-studies', Illustration: CameraEyeSvg },
  { icon: Radio, title: 'Live Surveillance', subtitle: 'Real-time · Multi-camera · Alerts', desc: 'Multi-zone, multi-camera live monitoring with instant anomaly detection and automated incident capture across all deployment sites.', color: '#10B981', href: '/platform', Illustration: MonitorSvg },
  { icon: Bell, title: 'Smart Alerts', subtitle: 'Instant · Automated · Accurate', desc: 'Configurable alert engine with sub-200ms notification delivery, severity classification, and escalation workflows built for mission-critical environments.', color: '#6C3CF4', href: '/platform', Illustration: AlertWaveSvg },
  { icon: Warehouse, title: 'Warehouse Security', subtitle: 'Inventory · Access · Prevention', desc: 'Intelligent perimeter and zone monitoring for warehouses and storage facilities with heat-mapping, intrusion detection, and after-hours coverage.', color: '#F59E0B', href: '/case-studies', Illustration: WarehouseGridSvg },
  { icon: LayoutDashboard, title: 'Admin Dashboard', subtitle: 'Control · Reports · Analytics', desc: 'Centralized command-and-control dashboard with real-time feeds, audit logs, performance analytics, and exportable compliance reports.', color: '#EC4899', href: '/platform', Illustration: DashboardBarsSvg },
  { icon: Settings, title: 'Custom Automation', subtitle: 'Workflows · Integration · Scale', desc: 'Tailored automation pipelines that integrate with your existing infrastructure — custom alert rules, API hooks, and deployment-specific workflows.', color: '#14B8A6', href: '/platform', Illustration: GearSvg },
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
              ><span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: ['#A78BFA', '#10B981', '#F59E0B'][i % 3] }} />{c}</span>
            ))}
          </div>
          <div className="relative mt-4">
            <div className="flex gap-3 mq-r" style={{ width: 'max-content' }}>
              {[...chips2, ...chips2].map((c, i) => (
                <span key={i} className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap backdrop-blur-lg"
                  style={{ background: 'rgba(109,40,217,0.04)', border: '1px solid rgba(109,40,217,0.08)', color: 'var(--color-text-secondary)' }}
                ><span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: ['#A78BFA', '#10B981', '#F59E0B'][i % 3] }} />{c}</span>
              ))}
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(90deg, var(--color-bg) 0%, transparent 100%)' }} />
        <div aria-hidden="true" className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(-90deg, var(--color-bg) 0%, transparent 100%)' }} />
      </section>

      {/* Product Cards */}
      <section id="products" className="relative overflow-hidden py-24 md:py-32">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-60" style={{
          backgroundImage: 'linear-gradient(rgba(109,40,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at center top, black 30%, transparent 85%)', WebkitMaskImage: 'radial-gradient(ellipse at center top, black 30%, transparent 85%)',
        }} />
        <div aria-hidden="true" className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(108,60,244,0.10) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        <div aria-hidden="true" className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)', filter: 'blur(60px)' }} />

        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center mb-14 md:mb-20">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C3CF4' }}>What we build</span>
              <h2 className="text-4xl md:text-6xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                Monitoring solutions,{' '}
                <span style={{ background: 'linear-gradient(120deg, #A78BFA, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>purpose-built</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Six capabilities. One intelligent monitoring layer. From exam halls to warehouses, we ship the gold-standard solution your team can&apos;t build in-house.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-[minmax(280px,auto)]">
            {products.map((p, i) => {
              const Icon = p.icon;
              const Illust = p.Illustration;
              return (
                <motion.div key={p.title} initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <div className="h-full" style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px)' }}>
                    <a className="group relative block h-full overflow-hidden rounded-3xl p-6 md:p-8"
                      style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }} href={p.href}
                    >
                      <div aria-hidden="true" className="absolute -top-16 -right-16 h-40 w-40 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-40 pointer-events-none"
                        style={{ background: `radial-gradient(circle, ${p.color}44 0%, transparent 70%)`, filter: 'blur(28px)' }}
                      />
                      <div aria-hidden="true" className="absolute inset-0 flex items-end justify-end pointer-events-none opacity-70">
                        <Illust color={p.color} />
                      </div>
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${p.color}22`, color: p.color, border: `1px solid ${p.color}33` }}>
                            <Icon className="h-5 w-5" />
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="transition-transform duration-500 group-hover:rotate-45 group-hover:translate-x-1" style={{ color: 'var(--color-text-secondary)', opacity: 0.4 }}
                          ><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{p.title}</h3>
                        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--color-text-secondary)' }}>{p.subtitle}</p>
                        <p className="mt-4 text-sm leading-relaxed max-w-md" style={{ color: 'var(--color-text-secondary)' }}>{p.desc}</p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
