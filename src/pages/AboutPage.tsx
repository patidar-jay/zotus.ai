import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Users, Heart, Award } from 'lucide-react';
import { Container, SectionHeading, FadeIn } from '../components/ui';
import { CTASection } from '../components/sections';
import { fadeInUp, staggerContainer } from '../animations/variants';

const values = [
  { icon: Target, title: 'Innovation', desc: 'Pushing boundaries with emerging technologies to deliver cutting-edge solutions.' },
  { icon: Eye, title: 'Transparency', desc: 'Open communication and honest updates at every stage of your project.' },
  { icon: Lightbulb, title: 'Excellence', desc: 'Every line of code and design decision is held to the highest standard.' },
  { icon: Users, title: 'Collaboration', desc: 'Working as an extension of your team, not just an external vendor.' },
  { icon: Heart, title: 'Passion', desc: 'We genuinely care about your success and treat every project as our own.' },
  { icon: Award, title: 'Accountability', desc: 'We own our commitments and deliver on our promises, every time.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-[120px] pb-20 bg-[var(--color-bg-subtle)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <span className="eyebrow mb-4">About Us</span>
            <h1 className="mb-6">We Build Technology <span className="text-gradient">That Matters</span></h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Zotus AI is an Indian technology company specializing in artificial intelligence, software engineering, and digital transformation. We help organizations solve complex challenges with intelligent, scalable solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-py bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn className="p-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
              <span className="eyebrow block mb-3">Our Mission</span>
              <h3 className="mb-4">Democratize intelligent technology for businesses of every size.</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                We believe every organization deserves access to world-class technology. Our mission is to bridge the gap between cutting-edge AI research and practical business applications.
              </p>
            </FadeIn>
            <FadeIn className="p-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)]">
              <span className="eyebrow block mb-3">Our Vision</span>
              <h3 className="mb-4">Become India's most trusted AI-native technology partner.</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                We envision a future where every enterprise has the intelligent infrastructure to adapt, innovate, and lead in their industry.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="section-py bg-[var(--color-bg-subtle)]">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What Drives Us" description="The principles that guide every decision, every line of code, and every client relationship." />
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
