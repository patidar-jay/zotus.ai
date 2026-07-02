import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container, SectionHeading } from '../ui';
import { caseStudies } from '../../constants/caseStudies';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const scrollPosition = el.scrollLeft;
    const itemWidth = el.scrollWidth / caseStudies.length;
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < caseStudies.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section id="case-studies" className="section-py bg-white">
      <Container>
        <SectionHeading
          eyebrow="CASE STUDIES"
          title="Real Solutions, Real Impact"
          description="See how we've helped enterprises solve complex challenges and achieve measurable results."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-6 px-6 hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none md:pb-0 md:-mx-0 md:px-0"
        >
          {caseStudies.map((study) => (
            <motion.article
              key={study.slug}
              variants={fadeInUp}
              className="group rounded-2xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col w-[85vw] sm:w-[320px] shrink-0 snap-center md:w-auto"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[var(--color-primary)] text-white text-[11px] font-semibold rounded-md uppercase tracking-wider">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-3 line-clamp-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {study.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="hidden md:block">
                    <span className="text-[10px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider">Problem</span>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2 mt-1">{study.problem}</p>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-[10px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-wider">Solution</span>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2 mt-1">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[var(--color-success)] uppercase tracking-wider">Result</span>
                    <p className="text-sm text-[var(--color-text)] font-semibold mt-1">{study.result}</p>
                  </div>
                </div>

                <a
                  href={`/#case-studies`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-2.5 transition-all duration-200"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {caseStudies.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-6 bg-[var(--color-primary)]' : 'w-1.5 bg-[var(--color-border)]'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
