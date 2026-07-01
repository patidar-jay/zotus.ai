import { motion } from 'framer-motion';
import { Zap, Layers, Shield, Users, Sparkles, HeartHandshake } from 'lucide-react';
import { Container, SectionHeading } from '../ui';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description:
      'Agile methodology with 2-week sprint cycles ensures rapid, iterative delivery without compromising quality.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description:
      'We design systems built to scale from day one — handling growth from 100 to 100 million users seamlessly.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Security-first development with encrypted data handling, regular audits, and compliance with industry standards.',
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description:
      'Senior engineers and architects assigned exclusively to your project — not shared across multiple clients.',
  },
  {
    icon: Sparkles,
    title: 'AI-Native Approach',
    description:
      'We integrate AI and automation into every solution, giving you a competitive edge that traditional development can\'t match.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-term Partnership',
    description:
      'Beyond project delivery, we provide ongoing support, maintenance, and strategic technology guidance.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="section-py bg-bg-subtle" aria-labelledby="why-heading">
      <Container>
        <SectionHeading
          label="Why Zotus AI"
          title="Why Companies Choose Us"
          description="We combine deep technical expertise with business acumen to deliver solutions that create real, measurable impact."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-white border border-border hover:border-primary/15 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-3">{reason.title}</h3>
                <p className="text-sm text-gray leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
