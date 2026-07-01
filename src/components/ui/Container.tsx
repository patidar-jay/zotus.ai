import { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer';
  id?: string;
}

export default function Container({
  children,
  className = '',
  as: Component = 'div',
  id,
}: ContainerProps) {
  return (
    <Component id={id} className={`container-site ${className}`}>
      {children}
    </Component>
  );
}
