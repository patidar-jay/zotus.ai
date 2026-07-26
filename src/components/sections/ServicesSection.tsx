import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui';
import { services } from '../../constants/services';

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
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: 'linear-gradient(rgba(109,40,217,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center top, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center top, black 30%, transparent 85%)',
        }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6C3CF4' }}>
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold" style={{ fontFamily: 'var(--font-heading)', letterSpacing: 0 }}>
            Core{' '}
            <span style={{ background: 'linear-gradient(120deg, #A78BFA, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              capabilities
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            AI, machine learning, computer vision, and automation — the technologies we specialize in.
          </p>
        </motion.div>

        <div
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 -mx-6 px-6 hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none md:pb-0 md:-mx-0 md:px-0"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = ['#A78BFA', '#10B981', '#F59E0B', '#6C3CF4', '#EC4899'];
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl p-6 md:p-8 flex flex-col w-[85vw] sm:w-[320px] shrink-0 snap-center md:w-auto"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                {/* Hover glow */}
                <div
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-0 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${color}44 0%, transparent 70%)`, filter: 'blur(28px)' }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="text-3xl font-bold pointer-events-none select-none" style={{ color: `${color}15` }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', letterSpacing: 0 }}>
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed flex-grow" style={{ color: 'var(--color-text-secondary)' }}>
                    {service.description}
                  </p>

                  <a
                    href="/platform"
                    className="inline-flex items-center gap-2 text-sm font-semibold mt-6 transition-all duration-300 w-fit"
                    style={{ color }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

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
