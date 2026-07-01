import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../ui';
import { industries } from '../../constants/industries';
import { fadeInUp, staggerContainer } from '../../animations/variants';

export default function IndustriesSection() {
  const featured = industries.slice(0, 6);

  return (
    <section id="industries" className="section-py bg-white" aria-labelledby="industries-heading">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left column — heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
              Industries
            </span>
            <h2 className="text-dark mb-6">
              Deep domain expertise
            </h2>
            <p className="text-gray text-lg leading-relaxed mb-10">
              We bring specialized knowledge to every sector we serve, understanding the unique challenges and regulatory requirements of your industry.
            </p>
            <Link
              to="/industries"
              className="inline-flex items-center justify-center gap-3 bg-white text-dark border-2 border-border px-8 py-4 rounded-xl text-base font-bold hover:border-primary hover:text-primary transition-all duration-300"
            >
              View all industries
            </Link>
          </motion.div>

          {/* Right column — industry grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {featured.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.slug}
                  variants={fadeInUp}
                  className="group bg-bg-subtle rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:bg-primary shadow-sm hover:shadow-lg hover:-translate-y-1 text-center flex flex-col items-center justify-center aspect-square"
                >
                  <div className="mb-4 bg-white p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark group-hover:text-white transition-colors duration-200">
                    {industry.name}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
