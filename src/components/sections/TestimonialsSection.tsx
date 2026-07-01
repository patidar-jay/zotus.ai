import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, SectionHeading } from '../ui';
import { testimonials } from '../../constants/testimonials';
import { fadeInUp } from '../../animations/variants';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="section-py bg-bg-subtle" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Real feedback from the teams and leaders we've had the privilege to work with."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl border border-border p-8 md:p-12 shadow-sm">
            <Quote className="w-10 h-10 text-primary/10 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <blockquote className="text-lg md:text-xl text-dark leading-relaxed mb-8 font-medium">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark">{testimonial.name}</p>
                    <p className="text-sm text-gray">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current ? 'bg-primary w-6' : 'bg-gray-lighter hover:bg-gray-light'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-gray hover:text-dark hover:border-primary/20 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-gray hover:text-dark hover:border-primary/20 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
