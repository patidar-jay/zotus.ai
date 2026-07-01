import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../ui';
import { caseStudies } from '../../constants/caseStudies';
import { fadeInUp, staggerContainer } from '../../animations/variants';

export default function CaseStudiesSection() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section id="insights" className="section-py bg-dark relative overflow-hidden" aria-labelledby="insights-heading">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary-light/10 text-primary-light text-sm font-semibold tracking-wide mb-6">
            Insights & Impact
          </span>
          <h2 className="text-white mb-6">
            Real transformations, <br />measurable outcomes
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featured.map((study) => (
            <motion.article
              key={study.slug}
              variants={fadeInUp}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Tag */}
              <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-[12px] font-bold text-white mb-6 w-fit">
                {study.industry}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors duration-200">
                {study.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-light leading-relaxed mb-10 flex-grow">
                {study.problem.length > 120
                  ? study.problem.slice(0, 120) + '...'
                  : study.problem}
              </p>

              {/* Key outcome */}
              <div className="mb-10 pt-6 border-t border-white/10">
                <span className="block text-sm text-gray-light mb-2">Key Result</span>
                <span className="text-3xl font-extrabold text-white">{study.outcome[0]}</span>
              </div>

              {/* Link */}
              <Link
                to={`/case-studies#${study.slug}`}
                className="group/link inline-flex items-center gap-2 text-sm font-bold text-primary-light transition-colors"
              >
                Read full case study
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
