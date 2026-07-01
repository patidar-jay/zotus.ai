import { motion } from 'framer-motion';
import { Container } from '../components/ui';
import { CTASection } from '../components/sections';
import { caseStudies } from '../constants/caseStudies';
import { fadeInUp, staggerContainer } from '../animations/variants';

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-[72px] bg-gradient-to-b from-primary/3 to-white">
        <Container className="section-py">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-primary">Case Studies</span>
            <h1>Results That <span className="text-gradient">Speak for Themselves</span></h1>
            <p className="mt-6 text-lg text-gray leading-relaxed">
              Real projects, real outcomes. See how we've helped organizations across industries transform with technology.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-py bg-white">
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12 max-w-5xl mx-auto">
            {caseStudies.map((study) => (
              <motion.article key={study.slug} id={study.slug} variants={fadeInUp} className="rounded-2xl border border-border overflow-hidden hover:shadow-sm transition-all">
                <div className="h-2 bg-gradient-primary" />
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary">{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-semibold text-dark mb-2">{study.title}</h2>
                  <p className="text-sm font-medium text-gray uppercase tracking-wider mb-6">{study.client} · {study.industry}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-3">The Challenge</h4>
                      <p className="text-sm text-gray leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-3">Our Solution</h4>
                      <p className="text-sm text-gray leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-dark uppercase tracking-wider mb-3">Key Outcomes</h4>
                      <ul className="space-y-2">
                        {study.outcome.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-dark font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
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
