import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { fadeIn } from '../../animations/variants';

interface FadeInProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'span';
}

export default function FadeIn({
  children,
  variants: customVariants,
  className = '',
  delay = 0,
  as = 'div',
}: FadeInProps) {
  const Component = motion.create(as);
  
  return (
    <Component
      variants={customVariants || fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </Component>
  );
}
