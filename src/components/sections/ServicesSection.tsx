import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui';
import { services } from '../../constants/services';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function ServicesSection() {
  const featured = services.slice(0, 3);

  return (
    <section id="services" className="section-py bg-bg-subtle relative" aria-labelledby="services-heading">
      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
            Our Expertise
          </span>
          <h2 className="text-dark mb-6">
            Solutions built for scale
          </h2>
          <p className="text-gray text-xl leading-relaxed">
            From cutting-edge AI development to robust cloud infrastructure, we deliver technology that creates measurable business impact.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featured.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                variants={fadeInUp}
                className="group bg-white rounded-3xl p-10 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-dark mb-4">
                  {service.title}
                </h3>

                <p className="text-gray text-base leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <Link
                  to={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-200"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 bg-dark text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-primary transition-colors duration-300"
          >
            Explore all services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
