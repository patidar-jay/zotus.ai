import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Container, SectionHeading } from '../ui';
import { testimonials } from '../../constants/testimonials';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-py bg-[var(--color-bg-subtle)]">
      <Container>
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="What Our Clients Say"
          description="Don't take our word for it — hear from the leaders who've partnered with us."
        />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-10 md:p-14 border border-[var(--color-border)] relative"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-[var(--color-accent-light)] mb-6" strokeWidth={1.5} />

              <blockquote className="text-lg md:text-xl text-[var(--color-text)] leading-relaxed font-medium mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                "{t.content}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-accent-light)]"
                />
                <div>
                  <div className="text-sm font-bold text-[var(--color-text)]">{t.name}</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${idx === current ? 'bg-[var(--color-primary)] w-6' : 'bg-[var(--color-border)]'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
