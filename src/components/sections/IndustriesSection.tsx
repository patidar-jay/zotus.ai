import { motion } from 'framer-motion';
import { Container, SectionHeading } from '../ui';
import { industries } from '../../constants/industries';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-py bg-[var(--color-bg-subtle)]">
      <Container>
        <SectionHeading
          eyebrow="INDUSTRIES WE SERVE"
          title="Deep Domain Expertise"
          description="Specialized solutions for the unique challenges and regulatory requirements of your industry."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        >
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.slug}
                variants={fadeInUp}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[var(--color-accent-light)]">
                  <Icon className="w-7 h-7 text-[var(--color-primary)]" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {ind.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
