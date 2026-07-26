import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container, SectionHeading } from '../ui';
import { services } from '../../constants/services';
import { staggerContainer, fadeInUp } from '../../animations/variants';

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const scrollPosition = el.scrollLeft;
    const itemWidth = el.scrollWidth / services.length;
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < services.length) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <section id="services" className="section-py bg-white relative overflow-hidden">
      {/* Subtle large blurred circle decoration in bottom-right */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-primary)] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="OUR EXPERTISE"
          title="Core Capabilities"
          description="AI, machine learning, computer vision, and automation — the technologies we specialize in."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-6 px-6 hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none md:pb-0 md:-mx-0 md:px-0"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const number = String(index + 1).padStart(2, '0');
            
            return (
              <motion.div
                key={service.slug}
                variants={fadeInUp}
                className="group relative bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-500 hover:-translate-y-1 flex flex-col w-[85vw] sm:w-[320px] shrink-0 snap-center md:w-auto overflow-hidden hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)] hover:bg-[#fafaff]"
              >
                {/* Gradient top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Numbered badge */}
                <div className="absolute top-8 right-8 text-2xl font-black text-[var(--color-border)] pointer-events-none select-none transition-all duration-500">
                  {number}
                </div>

                {/* Icon container with subtle glow on hover */}
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] transition-all duration-500">
                  <Icon className="w-6 h-6 text-[var(--color-primary)]" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-bold text-[var(--color-text)] mb-3 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-grow relative z-10">
                  {service.description}
                </p>

                <a
                  href={`/#services`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 mt-auto w-fit"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4 md:hidden relative z-10">
          {services.map((_, i) => (
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
