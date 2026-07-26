import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Users, Heart, Award } from 'lucide-react';
import { Container, SectionHeading, FadeIn } from '../components/ui';
import { CTASection } from '../components/sections';
import { fadeInUp, staggerContainer } from '../animations/variants';

const values = [
  { icon: Target, title: 'Problem-First', desc: 'We start with the real problem, not the technology. AI is a tool — impact is the goal.' },
  { icon: Eye, title: 'Transparency', desc: 'Open communication and honest updates at every stage of your project.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We stay at the cutting edge of AI, computer vision, and machine learning research.' },
  { icon: Users, title: 'Collaboration', desc: 'Working as an extension of your team, not just an external vendor.' },
  { icon: Heart, title: 'Passion', desc: 'We genuinely care about building things that work and make a difference.' },
  { icon: Award, title: 'Accountability', desc: 'We own our commitments and deliver on our promises, every time.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-[120px] pb-20 bg-[var(--color-bg-subtle)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <span className="eyebrow mb-4">About Us</span>
            <h1 className="mb-6">Smart AI Solutions for <span className="text-gradient">Real Problems</span></h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Zotus AI is an Indian technology company that builds AI-powered solutions for real-world challenges — from intelligent exam monitoring to smart automation for businesses.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-py bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn className="p-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
              <span className="eyebrow block mb-3">Our Mission</span>
              <h3 className="mb-4">Build smart AI solutions that solve real problems.</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                We believe technology should solve actual problems, not create complexity. Every solution we build starts with a real challenge and ends with measurable impact.
              </p>
            </FadeIn>
            <FadeIn className="p-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
              <span className="eyebrow block mb-3">Our Focus</span>
              <h3 className="mb-4">AI-powered monitoring and intelligent automation.</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Our current focus is building AI camera monitoring systems for high-stakes environments — government exams, warehouses, and institutions — powered by computer vision and machine learning.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="section-py bg-[var(--color-bg-subtle)]">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What Drives Us" description="The principles that guide every decision, every line of code, and every solution we build." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} variants={fadeInUp} className="p-8 rounded-2xl bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <h4 className="font-semibold text-[var(--color-text)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{v.title}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
