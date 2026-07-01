import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui';
import { industries } from '../../constants/industries';
import { fadeInUp, staggerContainer } from '../../animations/variants';

export default function IndustriesSection() {
  const featured = industries.slice(0, 6);

  return (
    <section id="industries" className="section-py bg-bg-subtle" aria-labelledby="industries-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left column — heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">
              Industries
            </span>
            <h2 className="text-dark mb-5">
              Deep domain expertise
            </h2>
            <p className="text-gray leading-relaxed mb-8">
              We bring specialized knowledge to every sector we serve, understanding the unique challenges and regulatory requirements of your industry.
            </p>
            <Link
              to="/industries"
              className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-primary hover:text-primary-dark transition-colors"
            >
              Explore all industries
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right column — industry grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
          >
            {featured.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.slug}
                  variants={fadeInUp}
                  className="group bg-white p-8 cursor-pointer transition-all duration-300 hover:bg-primary"
                >
                  <Icon className="w-7 h-7 text-primary mb-5 group-hover:text-white transition-colors duration-200" />
                  <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-white transition-colors duration-200">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray leading-relaxed group-hover:text-white/70 transition-colors duration-200">
                    {industry.description.length > 80
                      ? industry.description.slice(0, 80) + '...'
                      : industry.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
