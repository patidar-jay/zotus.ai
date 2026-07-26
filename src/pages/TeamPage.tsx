import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  MapPin,
  Clock,
  Rocket,
  Eye,
  Cpu,
  Code2,
  Settings,
} from 'lucide-react';
import { Container, SectionHeading } from '../components/ui';
import { CTASection } from '../components/sections';

const teamMembers = [
  {
    name: 'Jay Patidar',
    role: 'Founder & CEO',
    expertise: 'AI Strategy · Product Vision · Business Development',
    bio: 'Driving the vision of intelligent monitoring solutions powered by cutting-edge AI technology.',
    color: '#6C3CF4',
    initials: 'JP',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'AI Engineering Lead',
    role: 'Head of AI/ML',
    expertise: 'Computer Vision · Deep Learning · Model Optimization',
    bio: 'Leading the development of real-time detection models with sub-200ms inference latency.',
    color: '#10B981',
    initials: 'AI',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Full-Stack Developer',
    role: 'Lead Developer',
    expertise: 'React · Node.js · Cloud Architecture · APIs',
    bio: 'Building the platform infrastructure that powers real-time dashboards and monitoring systems.',
    color: '#A855F7',
    initials: 'FD',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Computer Vision Engineer',
    role: 'CV Specialist',
    expertise: 'Object Detection · Face Recognition · Video Analytics',
    bio: 'Designing and training the detection pipelines that catch violations with 99%+ accuracy.',
    color: '#F59E0B',
    initials: 'CV',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'DevOps Engineer',
    role: 'Infrastructure Lead',
    expertise: 'AWS · Docker · CI/CD · Edge Deployment',
    bio: 'Ensuring 99.5% platform uptime and seamless deployment across hundreds of monitoring sites.',
    color: '#EC4899',
    initials: 'DO',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Operations Manager',
    role: 'Head of Deployments',
    expertise: 'Project Management · Client Success · Field Operations',
    bio: 'Managing end-to-end deployments from planning to go-live across exam centers and warehouses.',
    color: '#14B8A6',
    initials: 'OM',
    linkedin: '#',
    github: '#',
  },
];

const values = [
  {
    number: '01',
    icon: Brain,
    title: 'Deep AI Expertise',
    description: 'Our team brings specialized experience in computer vision, deep learning, and real-time video analytics — not generic AI consultants.',
    color: '#6C3CF4',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Built for India',
    description: 'Designed specifically for Indian exam systems, government compliance requirements, and local infrastructure realities.',
    color: '#10B981',
  },
  {
    number: '03',
    icon: Clock,
    title: '24/7 Monitoring Support',
    description: 'Round-the-clock operations team ensuring continuous monitoring, instant issue resolution, and zero downtime during critical exams.',
    color: '#F59E0B',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'From scoping to go-live in under 2 weeks. Our battle-tested deployment playbook gets you up and running fast.',
    color: '#EC4899',
  },
];

const expertise = [
  { icon: Eye, label: 'Computer Vision', color: '#A78BFA' },
  { icon: Brain, label: 'Deep Learning', color: '#10B981' },
  { icon: Cpu, label: 'Edge AI', color: '#F59E0B' },
  { icon: Code2, label: 'Full-Stack Dev', color: '#6C3CF4' },
  { icon: Settings, label: 'MLOps', color: '#EC4899' },
];

export default function TeamPage() {
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
          <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 65%)', filter: 'blur(60px)' }} />
          <div className="absolute -bottom-40 right-1/3 h-[500px] w-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        </div>

        <Container className="relative z-10 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-8 border"
              style={{ background: 'rgba(168,85,247,0.06)', borderColor: 'rgba(168,85,247,0.15)', color: '#A855F7' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: '#A855F7' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#A855F7' }} />
              </span>
              Our Team
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              The Minds Behind{' '}
              <span style={{
                background: 'linear-gradient(120deg, #A78BFA 0%, #6C3CF4 40%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Zotus AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto mb-10"
            >
              A focused team of AI engineers, developers, and operations experts building
              India's most reliable camera monitoring platform.
            </motion.p>

            {/* Expertise pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {expertise.map((e) => {
                const Icon = e.icon;
                return (
                  <span
                    key={e.label}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                    style={{ background: `${e.color}10`, border: `1px solid ${e.color}20`, color: 'var(--color-text-secondary)' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: e.color }} />
                    {e.label}
                  </span>
                );
              })}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Team Grid ── */}
      <section className="section-py bg-[var(--color-bg-subtle)]">
        <Container>
          <SectionHeading
            eyebrow="Core Team"
            title="Expert Builders, Not Generalists"
            description="Every team member brings deep, specialized expertise in AI, computer vision, and real-time systems."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl p-6 md:p-8"
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                {/* Hover glow */}
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-0 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${member.color}44 0%, transparent 70%)`, filter: 'blur(28px)' }}
                />

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-bold shrink-0"
                      style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}cc)` }}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: member.color }}>{member.role}</p>
                    </div>
                  </div>

                  {/* Expertise tags */}
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: 'var(--color-text-tertiary)' }}>
                    {member.expertise}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                    {member.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex items-center gap-2">
                    <a href={member.linkedin} className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent-light)] transition-all">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                      </svg>
                    </a>
                    <a href={member.github} className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent-light)] transition-all">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why Us ── */}
      <section className="section-py relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 90% 70% at 20% 30%, rgba(108,60,244,0.06) 0%, transparent 55%), radial-gradient(ellipse 80% 60% at 80% 70%, rgba(16,185,129,0.05) 0%, transparent 55%)',
        }} />

        <Container className="relative z-10">
          <SectionHeading
            eyebrow="Why Zotus AI"
            title="What Sets Us Apart"
            description="We don't just build AI — we build AI that works in the field, under pressure, at scale."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
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
                  {/* Number watermark */}
                  <span className="absolute top-6 right-8 text-6xl font-bold pointer-events-none" style={{ color: `${val.color}10` }}>
                    {val.number}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{ background: `${val.color}15`, color: val.color, border: `1px solid ${val.color}25` }}
                      >
                        <Icon className="w-6 h-6" />
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
                        {val.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed pl-16">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Join CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              style={{ background: 'linear-gradient(120deg, #6C3CF4 0%, #A78BFA 100%)', boxShadow: '0 10px 30px -10px rgba(108,60,244,0.6)' }}
            >
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
