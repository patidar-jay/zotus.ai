import { motion } from 'framer-motion';
import {
  ArrowRight,
  Camera,
  Cpu,
  Bell,
  BarChart3,
  UserSearch,
  Users,
  Smartphone,
  MonitorX,
  Video,
  LayoutDashboard,
  Shield,
  Zap,
  Clock,
  Activity,
  ChevronRight,
} from 'lucide-react';
import { Container, SectionHeading } from '../components/ui';
import { CTASection } from '../components/sections';

const pipelineSteps = [
  {
    step: '01',
    icon: Camera,
    title: 'Camera Feed',
    description: 'HD video streams captured from examination halls, warehouses, and monitored zones via IP cameras.',
    color: '#6C3CF4',
  },
  {
    step: '02',
    icon: Cpu,
    title: 'AI Detection',
    description: 'Real-time computer vision processes every frame — face recognition, object detection, and anomaly analysis.',
    color: '#A855F7',
  },
  {
    step: '03',
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Instant notifications triggered when AI detects violations — unauthorized persons, phones, or suspicious activity.',
    color: '#10B981',
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'Dashboard & Reports',
    description: 'Centralized admin dashboard with live feeds, incident logs, analytics, and exportable audit reports.',
    color: '#F59E0B',
  },
];

const capabilities = [
  {
    icon: UserSearch,
    title: 'Face Recognition',
    subtitle: 'Identity verification',
    description: 'Real-time face detection and matching against registered candidate databases. Verifies identity throughout the entire session.',
    color: '#A78BFA',
  },
  {
    icon: Smartphone,
    title: 'Object Detection',
    subtitle: 'Unauthorized device detection',
    description: 'AI-powered detection of mobile phones, earpieces, smartwatches, and other prohibited devices in the camera frame.',
    color: '#10B981',
  },
  {
    icon: Users,
    title: 'Multi-Person Detection',
    subtitle: 'Crowd & proxy detection',
    description: 'Instantly flags when more than the expected number of persons appear in a monitored zone or exam seat.',
    color: '#F59E0B',
  },
  {
    icon: MonitorX,
    title: 'Behavior Analysis',
    subtitle: 'Anomaly & pattern detection',
    description: 'Detects suspicious movements, tab switching, screen sharing, and unusual behavioral patterns during exams.',
    color: '#6C3CF4',
  },
  {
    icon: Video,
    title: 'Session Recording',
    subtitle: 'Full audit trail',
    description: 'Complete video recording of every monitored session with timestamped incident markers for review and dispute resolution.',
    color: '#EC4899',
  },
  {
    icon: LayoutDashboard,
    title: 'Live Dashboard',
    subtitle: 'Real-time command center',
    description: 'Centralized control panel to view multiple live camera feeds, manage alerts, and oversee operations in real time.',
    color: '#14B8A6',
  },
];

const techChips = [
  'Computer Vision', 'Deep Learning', 'Face Recognition', 'Object Detection',
  'Real-Time Processing', 'Edge AI', 'Cloud Dashboard', 'Neural Networks',
  'Video Analytics', 'Anomaly Detection', 'TensorFlow', 'PyTorch',
  'YOLO', 'OpenCV', 'REST APIs', 'WebSocket Streaming',
];

const stats = [
  { value: '99.2%', label: 'Detection Accuracy', icon: Shield },
  { value: '<200ms', label: 'Response Time', icon: Zap },
  { value: '50K+', label: 'Hours Monitored', icon: Clock },
  { value: '15+', label: 'Active Deployments', icon: Activity },
];

export default function PlatformPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-[72px]">
        <style>{`
          @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .marquee-track { animation: marqueeScroll 40s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          }} />
          <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(109,40,217,0.10) 0%, transparent 65%)', filter: 'blur(60px)' }} />
          <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        </div>

        <Container className="relative z-10 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-8 border"
              style={{ background: 'rgba(109,40,217,0.06)', borderColor: 'rgba(109,40,217,0.12)', color: 'var(--color-primary)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              </span>
              Our Platform
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              The AI Engine Behind{' '}
              <span style={{
                background: 'linear-gradient(120deg, #A78BFA 0%, #6C3CF4 40%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Intelligent Monitoring
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto mb-10"
            >
              From camera feed to actionable intelligence — our AI platform processes video in real time,
              detects threats instantly, and delivers a complete monitoring command center.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                style={{ background: 'linear-gradient(120deg, #6C3CF4 0%, #A78BFA 100%)', boxShadow: '0 10px 30px -10px rgba(108,60,244,0.6)' }}
              >
                Request a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors"
                style={{ background: 'rgba(15,23,42,0.04)', border: '1px solid rgba(15,23,42,0.12)', color: 'var(--color-text)' }}
              >
                View Case Studies
              </a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Tech Marquee ── */}
      <section className="relative overflow-hidden py-10 md:py-14 border-y border-[var(--color-border-subtle)]">
        <div className="relative">
          <div className="flex gap-3 marquee-track" style={{ width: 'max-content' }}>
            {[...techChips, ...techChips].map((chip, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap backdrop-blur-lg"
                style={{
                  background: 'rgba(109,40,217,0.04)',
                  border: '1px solid rgba(109,40,217,0.10)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: ['#A78BFA', '#10B981', '#F59E0B'][i % 3] }} />
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(90deg, var(--color-bg) 0%, transparent 100%)' }} />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: 'linear-gradient(-90deg, var(--color-bg) 0%, transparent 100%)' }} />
      </section>

      {/* ── How It Works ── */}
      <section className="section-py relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-60" style={{
          backgroundImage: 'linear-gradient(rgba(109,40,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center top, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center top, black 30%, transparent 85%)',
        }} />

        <Container className="relative z-10">
          <SectionHeading
            eyebrow="How It Works"
            title="From Camera to Command Center"
            description="Our 4-step AI pipeline transforms raw video feeds into real-time intelligence with sub-200ms detection latency."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-6 md:p-8 rounded-3xl overflow-hidden h-full"
                    style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                  >
                    {/* Glow on hover */}
                    <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-0"
                      style={{ background: `radial-gradient(circle, ${step.color}33 0%, transparent 70%)`, filter: 'blur(28px)' }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl"
                          style={{ background: `${step.color}15`, color: step.color, border: `1px solid ${step.color}25` }}
                        >
                          <Icon className="w-6 h-6" />
                        </span>
                        <span className="text-3xl font-bold" style={{ color: `${step.color}20` }}>{step.step}</span>
                      </div>

                      <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow connector (hidden on last item and mobile) */}
                  {i < pipelineSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <ChevronRight className="w-6 h-6 text-[var(--color-primary)] opacity-40" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Core Capabilities ── */}
      <section className="section-py relative overflow-hidden bg-[var(--color-bg-subtle)]">
        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Six Pillars of Intelligent Monitoring"
            description="Each capability is purpose-built for high-stakes environments where accuracy, speed, and reliability are non-negotiable."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative block overflow-hidden rounded-3xl p-6 md:p-8 h-full"
                  style={{
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                >
                  {/* Hover glow */}
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-30 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${cap.color}44 0%, transparent 70%)`, filter: 'blur(28px)' }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ background: `${cap.color}18`, color: cap.color, border: `1px solid ${cap.color}30` }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 opacity-30 group-hover:opacity-60" style={{ color: 'var(--color-text-secondary)' }} />
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                      {cap.title}
                    </h3>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--color-text-secondary)' }}>
                      {cap.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 90% 70% at 20% 30%, rgba(108,60,244,0.06) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 80% 70%, rgba(16,185,129,0.05) 0%, transparent 55%)',
        }} />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="eyebrow mb-4 block">Performance Metrics</span>
            <h2 className="text-3xl md:text-5xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              Numbers that{' '}
              <span style={{
                background: 'linear-gradient(120deg, #A78BFA, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                speak
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{
                    fontFamily: 'var(--font-heading)',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)] font-medium">{stat.label}</div>
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
