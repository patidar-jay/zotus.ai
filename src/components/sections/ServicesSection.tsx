import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container, SectionHeading } from '../ui';
import { services } from '../../constants/services';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function ServicesSection() {
  return (
    <section id="services" className="section-py bg-white">
      <Container>
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="End-to-End Digital Solutions"
          description="We design, build, and deliver intelligent software solutions tailored to your business goals."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                variants={fadeInUp}
                className="group relative bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[var(--color-primary)]" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-bold text-[var(--color-text)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <a
                  href={`/#services`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-2.5 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
