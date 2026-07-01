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
      {/* Hero */}
      <section className="pt-[72px] bg-gradient-to-b from-primary/3 to-white">
        <Container className="section-py">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-primary">About Us</span>
            <h1>We Build Technology <span className="text-gradient">That Matters</span></h1>
            <p className="mt-6 text-lg text-gray leading-relaxed">
              Zotus AI is an Indian technology company specializing in artificial intelligence, software engineering, and digital transformation. We help organizations solve complex challenges with intelligent, scalable solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-py bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn className="p-8 rounded-2xl border border-border bg-bg-subtle">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Mission</span>
              <h3 className="mt-3 text-dark">Democratize intelligent technology for businesses of every size.</h3>
              <p className="mt-4 text-sm text-gray leading-relaxed">
                We believe every organization deserves access to world-class technology. Our mission is to bridge the gap between cutting-edge AI research and practical business applications.
              </p>
            </FadeIn>
            <FadeIn className="p-8 rounded-2xl border border-border bg-bg-subtle">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Vision</span>
              <h3 className="mt-3 text-dark">Become India's most trusted AI-native technology partner.</h3>
              <p className="mt-4 text-sm text-gray leading-relaxed">
                We envision a future where every enterprise has the intelligent infrastructure to adapt, innovate, and lead in their industry.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-py bg-bg-subtle">
        <Container>
          <SectionHeading label="Our Values" title="What Drives Us" description="The principles that guide every decision, every line of code, and every client relationship." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} variants={fadeInUp} className="p-6 rounded-2xl bg-white border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-dark mb-2">{v.title}</h4>
                  <p className="text-sm text-gray leading-relaxed">{v.desc}</p>
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
