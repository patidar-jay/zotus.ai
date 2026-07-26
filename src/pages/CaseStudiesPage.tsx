import { motion } from 'framer-motion';
import {
  ArrowRight,
  GraduationCap,
  Warehouse,
  Building,
  Shield,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Target,
} from 'lucide-react';
import { Container, SectionHeading } from '../components/ui';
import { CTASection } from '../components/sections';

const caseStudies = [
  {
    id: 'govt-exam',
    icon: GraduationCap,
    color: '#6C3CF4',
    badge: 'Government Exams',
    title: 'AI Proctoring for State-Level Competitive Exams',
    subtitle: 'UPPSC · BPSC · MPPSC',
    challenge: 'Government competitive exams like UPPSC, BPSC, and MPPSC face massive-scale integrity challenges — proxy candidates, unauthorized devices, and manual monitoring that fails across hundreds of exam centers simultaneously.',
    solution: 'Zotus AI deployed its full camera monitoring suite across examination halls with real-time face verification, multi-person detection, and mobile phone detection. Every candidate was verified against their registration photo, and AI flagged violations instantly to a centralized control room.',
    results: [
      { metric: '98.7%', label: 'Detection accuracy' },
      { metric: '< 150ms', label: 'Alert response time' },
      { metric: '40%', label: 'Reduction in exam fraud' },
      { metric: '500+', label: 'Centers monitored' },
    ],
    highlights: [
      'Real-time face matching against candidate database',
      'Automated phone and earpiece detection',
      'Full session recording with incident timestamps',
      'Centralized dashboard for multi-center oversight',
    ],
  },
  {
    id: 'entrance-exam',
    icon: Target,
    color: '#10B981',
    badge: 'Entrance Exams',
    title: 'Online & Offline Proctoring for National Entrance Exams',
    subtitle: 'NEET · JEE · GATE',
    challenge: 'National entrance exams like NEET and JEE require both online and offline exam integrity at unprecedented scale — millions of students across thousands of centers, with zero tolerance for malpractice.',
    solution: 'Zotus AI provided a hybrid proctoring solution combining on-site AI cameras with remote browser-based monitoring. Tab-switch detection, multi-face alerts, and behavioral analysis worked together to ensure exam integrity at scale.',
    results: [
      { metric: '99.1%', label: 'Face verification rate' },
      { metric: '2M+', label: 'Sessions monitored' },
      { metric: '60%', label: 'Fewer manual interventions' },
      { metric: '24/7', label: 'Live monitoring coverage' },
    ],
    highlights: [
      'Hybrid online + offline proctoring system',
      'Tab-switch and screen-share detection',
      'Behavioral pattern analysis for anomaly flagging',
      'Scalable to millions of concurrent sessions',
    ],
  },
  {
    id: 'warehouse',
    icon: Warehouse,
    color: '#F59E0B',
    badge: 'Warehouses',
    title: 'AI-Powered Surveillance for Private Warehouse Operations',
    subtitle: 'Inventory Security · Theft Prevention',
    challenge: 'Private warehouses face significant losses from internal theft, unauthorized access, and poor inventory tracking. Traditional CCTV systems require constant human monitoring and miss critical incidents.',
    solution: 'Zotus AI installed intelligent camera monitoring with zone-based access control, after-hours motion detection, and automated alerts for unauthorized personnel or suspicious movement patterns around high-value inventory.',
    results: [
      { metric: '75%', label: 'Reduction in theft incidents' },
      { metric: '< 3 sec', label: 'Intrusion alert time' },
      { metric: '30+', label: 'Warehouses secured' },
      { metric: '95%', label: 'Uptime reliability' },
    ],
    highlights: [
      'Zone-based access monitoring and alerts',
      'After-hours motion and intrusion detection',
      'Unauthorized personnel identification',
      'Inventory area movement heat-mapping',
    ],
  },
  {
    id: 'campus',
    icon: Building,
    color: '#EC4899',
    badge: 'Institutions',
    title: 'Smart Campus Security for Universities & Coaching Centers',
    subtitle: 'Campus Monitoring · Access Control',
    challenge: 'Large university campuses and coaching centers struggle with managing entry points, ensuring classroom attendance verification, and maintaining overall campus security across multiple buildings.',
    solution: 'Zotus AI deployed a campus-wide intelligent monitoring system with facial recognition at entry gates, classroom occupancy detection, and centralized security dashboards for campus administrators.',
    results: [
      { metric: '90%', label: 'Faster incident response' },
      { metric: '12', label: 'Campus sites deployed' },
      { metric: '50K+', label: 'Daily face verifications' },
      { metric: '99.5%', label: 'System uptime' },
    ],
    highlights: [
      'Facial recognition-based entry management',
      'Classroom occupancy and attendance tracking',
      'Multi-building centralized security dashboard',
      'Real-time alert system for security staff',
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center pt-[72px]">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          }} />
          <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 65%)', filter: 'blur(60px)' }} />
          <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        </div>

        <Container className="relative z-10 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-8 border"
              style={{ background: 'rgba(16,185,129,0.06)', borderColor: 'rgba(16,185,129,0.15)', color: '#10B981' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: '#10B981' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#10B981' }} />
              </span>
              Real Deployments
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Proven Results in{' '}
              <span style={{
                background: 'linear-gradient(120deg, #10B981 0%, #6C3CF4 50%, #F59E0B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                High-Stakes Environments
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto"
            >
              See how Zotus AI's camera monitoring platform is deployed across government exams,
              national entrance tests, private warehouses, and educational institutions.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* ── Case Studies ── */}
      <section className="section-py">
        <Container>
          <div className="space-y-20">
            {caseStudies.map((cs, i) => {
              const Icon = cs.icon;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={cs.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-3xl overflow-hidden"
                  style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}
                >
                  {/* Top gradient bar */}
                  <div className="h-1" style={{ background: `linear-gradient(90deg, ${cs.color}, ${cs.color}88)` }} />

                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>
                    {/* Content Side */}
                    <div className={`p-8 md:p-12 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      {/* Badge */}
                      <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-6"
                        style={{ background: `${cs.color}12`, color: cs.color, border: `1px solid ${cs.color}25` }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {cs.badge}
                      </span>

                      <h2 className="text-2xl md:text-3xl font-semibold mb-2 leading-tight" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                        {cs.title}
                      </h2>
                      <p className="text-sm font-medium mb-6" style={{ color: cs.color }}>{cs.subtitle}</p>

                      {/* Challenge */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
                          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">The Challenge</span>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{cs.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">Our Solution</span>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{cs.solution}</p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {cs.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: cs.color }} />
                            <span className="text-sm text-[var(--color-text-secondary)]">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results Side */}
                    <div className={`p-8 md:p-12 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                      style={{ background: 'var(--color-bg-subtle)' }}
                    >
                      <div className="flex items-center gap-2 mb-8">
                        <TrendingUp className="w-5 h-5" style={{ color: cs.color }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: cs.color }}>Results</span>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        {cs.results.map((r) => (
                          <div key={r.label}>
                            <div className="text-3xl md:text-4xl font-bold mb-1" style={{
                              fontFamily: 'var(--font-heading)',
                              background: `linear-gradient(135deg, ${cs.color}, ${cs.color}aa)`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                            }}>
                              {r.metric}
                            </div>
                            <div className="text-sm text-[var(--color-text-secondary)]">{r.label}</div>
                          </div>
                        ))}
                      </div>

                      <a
                        href="/contact"
                        className="group inline-flex items-center gap-2 mt-10 text-sm font-semibold transition-colors"
                        style={{ color: cs.color }}
                      >
                        Start your deployment
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Summary Stats ── */}
      <section className="py-16 md:py-20 border-y border-[var(--color-border-subtle)]" style={{ background: 'var(--color-bg-subtle)' }}>
        <Container>
          <SectionHeading
            eyebrow="Impact"
            title="Deployment at Scale"
            description="Across every deployment, Zotus AI delivers measurable improvements in security, efficiency, and cost savings."
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Exam Centers' },
              { value: '2M+', label: 'Sessions Monitored' },
              { value: '30+', label: 'Warehouses Secured' },
              { value: '99.2%', label: 'Avg. Accuracy' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{
                  fontFamily: 'var(--font-heading)',
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {s.value}
                </div>
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
