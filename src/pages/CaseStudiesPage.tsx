import { motion } from 'framer-motion';
import { Container } from '../components/ui';
import { CTASection } from '../components/sections';
import { caseStudies } from '../constants/caseStudies';
import { fadeInUp, staggerContainer } from '../animations/variants';

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-[120px] pb-20 bg-[var(--color-bg-subtle)]">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="eyebrow block mb-4">Case Studies</span>
            <h1 className="mb-6">Results That <span className="text-gradient">Speak for Themselves</span></h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Real projects, real outcomes. See how we've helped organizations across industries transform with technology.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-py bg-white border-t border-[var(--color-border-subtle)]">
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12 max-w-5xl mx-auto">
            {caseStudies.map((study) => (
              <motion.article key={study.slug} id={study.slug} variants={fadeInUp} className="group rounded-3xl border border-[var(--color-border)] overflow-hidden hover:shadow-xl hover:shadow-[var(--color-primary)]/5 hover:border-[var(--color-primary)] transition-all duration-300 bg-white">
                {/* Visual Header */}
                <div className="h-64 relative overflow-hidden bg-[var(--color-bg-dark)]">
                  <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700">
                     <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark)] via-[var(--color-bg-dark)]/50 to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                     <span className="inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[var(--color-primary)] text-white mb-4">{study.industry}</span>
                     <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl" style={{ fontFamily: 'var(--font-heading)' }}>{study.title}</h2>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div>
                      <h4 className="text-xs font-bold text-[var(--color-text-tertiary)] uppercase tracking-[0.15em] mb-4">The Challenge</h4>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[var(--color-text-tertiary)] uppercase tracking-[0.15em] mb-4">Our Solution</h4>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[var(--color-text-tertiary)] uppercase tracking-[0.15em] mb-4">Key Outcomes</h4>
                      <div className="p-5 rounded-2xl bg-[var(--color-success)]/10 border border-[var(--color-success)]/20">
                         <p className="text-sm font-semibold text-[var(--color-success)] leading-relaxed">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
