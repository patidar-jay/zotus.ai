import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container, SectionHeading } from '../ui';
import { faqs } from '../../constants/faq';
import { fadeInUp, staggerContainer } from '../../animations/variants';

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="border border-border rounded-2xl overflow-hidden transition-colors hover:border-primary/15"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="text-base font-semibold text-dark pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6">
              <p className="text-sm text-gray leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="section-py bg-white" aria-labelledby="faq-heading">
      <Container>
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with Zotus AI. Can't find an answer? Contact us directly."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
