import { motion } from 'framer-motion';
import { Container, SectionHeading } from '../ui';
import { processSteps } from '../../constants/process';

export default function ProcessSection() {
  return (
    <section className="section-py bg-white overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="HOW WE WORK"
          title="Our Development Process"
          description="A proven methodology that delivers high-quality results on time and within budget."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-[2px] bg-[var(--color-border)]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Node */}
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-[var(--color-border)] flex items-center justify-center mb-5 shadow-sm group-hover:border-[var(--color-primary)] transition-colors">
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-[10px] font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                    <Icon className="w-7 h-7 text-[var(--color-primary)]" strokeWidth={1.5} />
                  </div>

                  <h4 className="text-sm font-bold text-[var(--color-text)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {step.title}
                  </h4>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed max-w-[160px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
