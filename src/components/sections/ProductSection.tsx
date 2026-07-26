import { motion } from 'framer-motion';
import {
  UserSearch,
  Users,
  Smartphone,
  MonitorX,
  Radio,
  Bell,
  Video,
  BarChart3,
  LayoutDashboard,
  GraduationCap,
  Warehouse,
  Building,
  Shield,
} from 'lucide-react';
import { Container, SectionHeading } from '../ui';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../../animations/variants';

const features = [
  { icon: UserSearch, title: 'Face Tracking', description: 'Real-time face detection and tracking to verify candidate identity throughout the exam.' },
  { icon: Users, title: 'Multiple Face Detection', description: 'Instantly flags when more than one person appears in the camera frame.' },
  { icon: Smartphone, title: 'Phone Detection', description: 'AI-powered object detection identifies mobile phones and unauthorized devices.' },
  { icon: MonitorX, title: 'Tab Switch Detection', description: 'Detects when candidates navigate away from the exam window.' },
  { icon: Radio, title: 'Live Monitoring', description: 'Real-time video feeds with AI-powered alerts for suspicious activity.' },
  { icon: Bell, title: 'Smart Alerts', description: 'Automated notifications when AI detects potential violations or anomalies.' },
  { icon: Video, title: 'Session Recording', description: 'Full exam session recordings for review, audit, and dispute resolution.' },
  { icon: BarChart3, title: 'Reports & Analytics', description: 'Detailed reports on flagged incidents, candidate behavior patterns, and exam integrity.' },
  { icon: LayoutDashboard, title: 'Admin Dashboard', description: 'Centralized control panel to manage exams, view live feeds, and review alerts.' },
];

const useCases = [
  { icon: GraduationCap, label: 'Government Exams', examples: 'NEET, JEE, UPPSC, BPSC, MPPSC' },
  { icon: Warehouse, label: 'Private Warehouses', examples: 'Inventory monitoring, theft prevention' },
  { icon: Building, label: 'Institutions', examples: 'Universities, coaching centers, corporates' },
  { icon: Shield, label: 'Security', examples: 'Facility monitoring, access control' },
];

export default function ProductSection() {
  return (
    <section 
      id="product" 
      className="section-py relative border-t border-[var(--color-border-subtle)] overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 z-0 bg-[var(--color-bg-subtle)]">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
      </div>

      <Container className="relative z-10">
        
        {/* Section Header with Watermark */}
        <div className="relative mb-16 md:mb-24">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[100px] md:text-[180px] font-black tracking-tighter text-black/[0.03] select-none pointer-events-none whitespace-nowrap z-0">
            PRODUCT
          </div>
          <div className="relative z-10">
            <SectionHeading
              eyebrow="OUR PRODUCT"
              title="AI-Powered Camera Monitoring"
              description="Intelligent, real-time camera monitoring powered by computer vision, face recognition, and object detection — built for high-stakes environments."
            />
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            const indexNumber = String(i + 1).padStart(2, '0');
            return (
              <motion.div
                key={f.title}
                variants={fadeInUp}
                className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 hover:shadow-[0_8px_40px_rgba(109,40,217,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Number Watermark inside card */}
                <span className="absolute top-4 right-6 text-5xl font-bold text-black/[0.03] pointer-events-none transition-all duration-500 group-hover:text-[var(--color-primary)]/[0.05]">
                  {indexNumber}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[var(--color-accent-light)] group-hover:to-purple-100 transition-all duration-500">
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" strokeWidth={1.5} />
                  </div>
                  <h4
                    className="text-lg font-bold text-[var(--color-text)] mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {f.title}
                  </h4>
                  <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Gradient Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/30 to-transparent my-20" />

        {/* Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="eyebrow mb-4 block">WHERE IT'S USED</span>
            <h3 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-6 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Built for High-Stakes{' '}
              <span className="text-[var(--color-primary)]">Environments</span>
            </h3>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Our AI camera monitoring system is designed for environments where security, integrity, and real-time surveillance are critical — from government competitive exams to private warehouse operations.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <div
                  key={uc.label}
                  className="group relative p-6 rounded-2xl border border-[var(--color-border)] bg-white/60 backdrop-blur-sm transition-all duration-300 overflow-hidden hover:shadow-md"
                >
                  {/* Left Gradient border on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[var(--color-primary)] to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[var(--color-accent-light)] group-hover:to-purple-100 group-hover:scale-105">
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[15px] font-bold text-[var(--color-text)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {uc.label}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {uc.examples}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
