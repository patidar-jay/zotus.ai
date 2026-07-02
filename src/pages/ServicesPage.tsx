import { motion } from 'framer-motion';
import { Container } from '../components/ui';
import { CTASection } from '../components/sections';
import { services } from '../constants/services';
import { fadeInUp, staggerContainer } from '../animations/variants';

export default function ServicesPage() {
  return (
    <>
      <section className="pt-[120px] pb-20 bg-[var(--color-bg-subtle)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <span className="eyebrow block mb-4">Our Services</span>
            <h1 className="mb-6">Comprehensive <span className="text-gradient">Technology Solutions</span></h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              From AI development to enterprise consulting, we deliver end-to-end solutions that drive measurable business outcomes.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-py bg-white border-t border-[var(--color-border-subtle)]">
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8 max-w-5xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.slug} id={service.slug} variants={fadeInUp} className="group grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-10 rounded-3xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all duration-300">
                  <div className="md:col-span-1 flex items-start">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg-subtle)] group-hover:bg-[var(--color-accent-light)] flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[var(--color-primary)]" />
                    </div>
                  </div>
                  <div className="md:col-span-11">
                    <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                    <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">{service.description}</p>
                  </div>
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
