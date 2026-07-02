import { motion } from 'framer-motion';
import { ArrowRight, Users, Shield, RefreshCw, Maximize, Cloud, Brain, Trophy, Lightbulb } from 'lucide-react';
import { Container } from '../ui';
import { staggerContainer, fadeInUp } from '../../animations/variants';
import type { WhyUsFeature } from '../../types';

const features: WhyUsFeature[] = [
  { icon: Users, title: 'Expert Engineers', description: 'Senior engineers with deep domain expertise across industries.' },
  { icon: Shield, title: 'Enterprise Security', description: 'SOC 2 compliant, OWASP adherent, zero-trust architecture.' },
  { icon: RefreshCw, title: 'Agile Delivery', description: 'Two-week sprints with transparent progress and continuous delivery.' },
  { icon: Maximize, title: 'Scalable Architecture', description: 'Systems designed to handle 10x growth from day one.' },
  { icon: Cloud, title: 'Cloud Native', description: 'Built for AWS, Azure, and GCP with containerized deployments.' },
  { icon: Brain, title: 'AI First', description: 'Machine learning integrated into every solution where it adds value.' },
  { icon: Trophy, title: 'Customer Success', description: 'Dedicated support and long-term partnership beyond deployment.' },
  { icon: Lightbulb, title: 'Innovation', description: 'R&D-driven approach using latest frameworks and methodologies.' },
];

export default function WhyChooseUsSection() {
  return (
    <section id="about" className="section-py bg-[var(--color-bg-dark)] relative overflow-hidden">
      {/* Subtle purple glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--color-primary)] rounded-full opacity-[0.04] blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-4"
          >
            <span className="eyebrow text-[var(--color-accent)] mb-5 block">
              WHY CHOOSE ZOTUS AI
            </span>
            <h2 className="text-white mb-6 leading-tight">
              Your Trusted Technology Partner for Digital Transformation
            </h2>
            <p className="text-[var(--color-text-tertiary)] leading-relaxed mb-10">
              We combine deep technical expertise with a customer-first approach to deliver solutions that create measurable business impact.
            </p>
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2.5 bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[var(--color-accent)] transition-colors duration-200"
            >
              Know More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Right — Features grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-8 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-6 px-6 hide-scrollbar md:grid md:grid-cols-2 md:overflow-visible md:snap-none md:pb-0 md:-mx-0 md:px-0"
          >
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={fadeInUp}
                  className="flex gap-4 p-5 rounded-xl border border-white/[0.06] hover:border-white/[0.12] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 w-[85vw] sm:w-[300px] shrink-0 snap-center md:w-auto"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{f.title}</h4>
                    <p className="text-[var(--color-text-tertiary)] text-xs leading-relaxed">{f.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
