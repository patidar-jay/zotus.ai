import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui';
import { services } from '../../constants/services';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function ServicesSection() {
  const featured = services.slice(0, 6);

  return (
    <section id="services" className="section-py bg-white" aria-labelledby="services-heading">
      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
            What We Do
          </span>
          <h2 className="text-dark mb-5">
            Enterprise solutions <br />
            <span className="text-gradient">built for scale</span>
          </h2>
          <p className="text-gray text-lg leading-relaxed">
            From AI development to cloud infrastructure — we deliver technology that creates measurable business impact.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {featured.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                variants={fadeInUp}
                className="group relative bg-white p-10 flex flex-col cursor-pointer transition-all duration-300 hover:bg-bg-subtle"
              >
                {/* Left accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <Icon className="w-8 h-8 text-primary mb-6" />

                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>

                <p className="text-gray text-sm leading-relaxed mb-8 flex-grow">
                  {service.description.length > 100
                    ? service.description.slice(0, 100) + '...'
                    : service.description}
                </p>

                <Link
                  to={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary group-hover:gap-3 transition-all duration-200"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
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
          className="mt-12 flex justify-center"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 bg-dark text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary transition-colors duration-300"
          >
            Explore all services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
