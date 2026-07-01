import { motion } from 'framer-motion';
import { Container, SectionHeading } from '../components/ui';
import { CTASection } from '../components/sections';
import { industries } from '../constants/industries';
import { fadeInUp, staggerContainer } from '../animations/variants';

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-[72px] bg-gradient-to-b from-primary/3 to-white">
        <Container className="section-py">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-primary">Industries</span>
            <h1>Specialized Solutions for <span className="text-gradient">Every Sector</span></h1>
            <p className="mt-6 text-lg text-gray leading-relaxed">
              We bring deep domain expertise to deliver solutions tailored to the unique challenges and regulatory requirements of each industry.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="section-py bg-white">
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.slug} id={ind.slug} variants={fadeInUp} className="flex gap-5 p-6 rounded-2xl border border-border hover:border-primary/15 hover:shadow-sm transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-2">{ind.name}</h3>
                    <p className="text-sm text-gray leading-relaxed">{ind.description}</p>
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
