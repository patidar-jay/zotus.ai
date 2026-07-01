import { motion } from 'framer-motion';
import { Container, SectionHeading } from '../ui';
import { processSteps } from '../../constants/process';
import { fadeInUp, staggerContainer } from '../../animations/variants';

export default function ProcessSection() {
  return (
    <section id="process" className="section-py bg-white" aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          label="Our Process"
          title="How We Deliver Results"
          description="A structured, transparent approach that ensures quality, predictability, and measurable outcomes at every stage."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative"
        >
          {/* Connecting line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-6 md:space-y-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  className="relative flex gap-6 md:gap-8 pb-8 md:pb-12 last:pb-0"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-border flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                        Step {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-dark mb-2">{step.title}</h3>
                    <p className="text-sm text-gray leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
