import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeading } from '../ui';
import { industries } from '../../constants/industries';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const scrollPosition = el.scrollLeft;
    // Estimated width of each card plus gap
    const itemWidth = el.scrollWidth / industries.length;
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < industries.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section id="industries" className="section-py bg-[var(--color-bg-subtle)]">
      <Container>
        <SectionHeading
          eyebrow="INDUSTRIES WE SERVE"
          title="Deep Domain Expertise"
          description="Specialized solutions for the unique challenges and regulatory requirements of your industry."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-6 px-6 hide-scrollbar md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible md:snap-none md:pb-0 md:-mx-0 md:px-0"
        >
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.slug}
                variants={fadeInUp}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300 cursor-pointer w-[60vw] sm:w-[200px] shrink-0 snap-center md:w-auto"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[var(--color-accent-light)]">
                  <Icon className="w-7 h-7 text-[var(--color-primary)]" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {ind.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center gap-1.5 mt-4 flex-wrap md:hidden px-4">
          {industries.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-5 bg-[var(--color-primary)]' : 'w-1.5 bg-[var(--color-border)]'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
