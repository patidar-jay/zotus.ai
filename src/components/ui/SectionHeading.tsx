import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-16 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      {label && (
        <span
          className={`inline-block mb-4 text-sm font-semibold tracking-widest uppercase ${
            dark ? 'text-primary-light' : 'text-primary'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-balance ${dark ? 'text-white' : 'text-dark'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            dark ? 'text-gray-light' : 'text-gray'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
