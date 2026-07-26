import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
}

const baseStyles =
  'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary whitespace-nowrap';

const variants = {
  primary:
    'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-sm hover:shadow-md active:scale-[0.98]',
  secondary:
    'bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 active:scale-[0.98]',
  outline:
    'border-2 border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] active:scale-[0.98]',
  ghost:
    'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)] active:scale-[0.98]',
  white:
    'bg-white text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)] shadow-sm hover:shadow-md active:scale-[0.98]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  type = 'button',
  disabled = false,
  className = '',
  onClick,
  ...rest
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
