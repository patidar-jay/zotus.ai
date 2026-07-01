import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Users } from 'lucide-react';
import { Container, SectionHeading } from '../ui';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description:
      'We push boundaries with emerging technologies to deliver solutions that keep you ahead of the curve.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'Open communication, clear timelines, and honest updates at every stage of your project.',
  },
  {
    icon: Lightbulb,
    title: 'Excellence',
    description:
      'Every line of code, every design decision, and every deployment is held to the highest standard.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We don\'t just build software — we build lasting relationships as your dedicated technology partner.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-py bg-bg-subtle" aria-labelledby="about-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <SectionHeading
              label="About Us"
              title="We Build Technology That Matters"
              description="Zotus AI is an Indian technology company specializing in AI, software engineering, and digital transformation. We help organizations — from startups to Fortune 500 companies — solve complex challenges with intelligent solutions."
              align="left"
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 -mt-4"
            >
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div key={value.title} variants={fadeInUp} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-1">{value.title}</h4>
                      <p className="text-sm text-gray leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border p-8 flex items-center justify-center">
              <svg viewBox="0 0 300 300" fill="none" className="w-full h-auto" aria-hidden="true">
                <defs>
                  <linearGradient id="aboutGrad" x1="0" y1="0" x2="300" y2="300">
                    <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <rect width="300" height="300" rx="24" fill="url(#aboutGrad)" />
                
                {/* Mission icon */}
                <rect x="40" y="40" width="100" height="80" rx="12" fill="white" stroke="#E5E7EB" />
                <rect x="56" y="56" width="68" height="6" rx="3" fill="#6D28D9" opacity="0.3" />
                <rect x="56" y="68" width="50" height="4" rx="2" fill="#CBD5E1" />
                <rect x="56" y="78" width="60" height="4" rx="2" fill="#E5E7EB" />
                <rect x="56" y="88" width="40" height="4" rx="2" fill="#E5E7EB" />
                
                {/* Vision icon */}
                <rect x="160" y="60" width="100" height="80" rx="12" fill="white" stroke="#E5E7EB" />
                <circle cx="186" cy="82" r="10" fill="#A855F7" opacity="0.15" />
                <circle cx="186" cy="82" r="5" fill="#A855F7" opacity="0.4" />
                <rect x="204" y="76" width="40" height="4" rx="2" fill="#CBD5E1" />
                <rect x="176" y="100" width="68" height="4" rx="2" fill="#E5E7EB" />
                <rect x="176" y="110" width="50" height="4" rx="2" fill="#E5E7EB" />
                
                {/* Values */}
                <rect x="60" y="150" width="180" height="100" rx="12" fill="white" stroke="#E5E7EB" />
                <rect x="76" y="166" width="8" height="8" rx="2" fill="#6D28D9" opacity="0.2" />
                <rect x="92" y="168" width="80" height="4" rx="2" fill="#CBD5E1" />
                <rect x="76" y="186" width="8" height="8" rx="2" fill="#A855F7" opacity="0.2" />
                <rect x="92" y="188" width="100" height="4" rx="2" fill="#E5E7EB" />
                <rect x="76" y="206" width="8" height="8" rx="2" fill="#10B981" opacity="0.2" />
                <rect x="92" y="208" width="70" height="4" rx="2" fill="#CBD5E1" />
                <rect x="76" y="226" width="8" height="8" rx="2" fill="#6D28D9" opacity="0.2" />
                <rect x="92" y="228" width="90" height="4" rx="2" fill="#E5E7EB" />
                
                {/* Decorative circles */}
                <circle cx="260" cy="200" r="20" fill="#6D28D9" opacity="0.05" />
                <circle cx="40" cy="260" r="15" fill="#A855F7" opacity="0.05" />
              </svg>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
