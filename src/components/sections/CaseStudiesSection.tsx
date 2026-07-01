import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui';
import { caseStudies } from '../../constants/caseStudies';
import { fadeInUp, staggerContainer } from '../../animations/variants';

export default function CaseStudiesSection() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section id="insights" className="section-py bg-dark" aria-labelledby="insights-heading">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light mb-4 block">
            Insights
          </span>
          <h2 className="text-white mb-5">
            Real transformations, <br />measurable outcomes
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
        >
          {featured.map((study) => (
            <motion.article
              key={study.slug}
              variants={fadeInUp}
              className="group bg-dark-secondary p-10 flex flex-col hover:bg-[#222240] transition-colors duration-300"
            >
              {/* Tag */}
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-light mb-6">
                {study.industry}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors duration-200">
                {study.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-light leading-relaxed mb-8 flex-grow">
                {study.problem.length > 120
                  ? study.problem.slice(0, 120) + '...'
                  : study.problem}
              </p>

              {/* Key outcome */}
              <div className="mb-8 py-4 border-t border-white/10">
                <span className="text-2xl font-extrabold text-white">{study.outcome[0]}</span>
              </div>

              {/* Link */}
              <Link
                to={`/case-studies#${study.slug}`}
                className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white hover:text-primary-light transition-colors"
              >
                Read case study
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
