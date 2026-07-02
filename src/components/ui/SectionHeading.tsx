import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-16 lg:mb-20 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'}`}
    >
      {eyebrow && (
        <span className={`eyebrow block mb-4 ${light ? 'text-[var(--color-accent)]' : ''}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={light ? 'text-white' : 'text-[var(--color-text)]'}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-[var(--color-text-tertiary)]' : 'text-[var(--color-text-secondary)]'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
