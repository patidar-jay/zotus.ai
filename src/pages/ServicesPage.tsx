import { motion } from 'framer-motion';
import { Container } from '../components/ui';
import { CTASection } from '../components/sections';
import { services } from '../constants/services';
import { fadeInUp, staggerContainer } from '../animations/variants';

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] bg-gradient-to-b from-primary/3 to-white">
        <Container className="section-py">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-primary">Our Services</span>
            <h1>Comprehensive <span className="text-gradient">Technology Solutions</span></h1>
            <p className="mt-6 text-lg text-gray leading-relaxed">
              From AI development to enterprise consulting, we deliver end-to-end solutions that drive measurable business outcomes.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* All Services */}
      <section className="section-py bg-white">
        <Container>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.slug} id={service.slug} variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-2xl border border-border hover:border-primary/15 hover:shadow-sm transition-all">
                  <div className="lg:col-span-1 flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
                    <p className="text-gray leading-relaxed">{service.description}</p>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-sm font-semibold text-dark mb-3">Key Capabilities</p>
                    <ul className="space-y-2">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-gray">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
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
