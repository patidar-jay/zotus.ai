import { motion } from 'framer-motion';
import { Container } from '../components/ui';
import { CTASection } from '../components/sections';
import { industries } from '../constants/industries';
import { fadeInUp, staggerContainer } from '../animations/variants';

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-[120px] pb-20 bg-[var(--color-bg-subtle)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="eyebrow block mb-4">Industries</span>
            <h1 className="mb-6">Specialized Solutions for <span className="text-gradient">Every Sector</span></h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              We bring deep domain expertise to deliver solutions tailored to the unique challenges and regulatory requirements of each industry.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-py bg-white border-t border-[var(--color-border-subtle)]">
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.slug} id={ind.slug} variants={fadeInUp} className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-3xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] hover:shadow-xl hover:shadow-[var(--color-primary)]/5 transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-bg-subtle)] group-hover:bg-[var(--color-accent-light)] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>{ind.name}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{ind.name} specific solutions and transformations.</p>
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
