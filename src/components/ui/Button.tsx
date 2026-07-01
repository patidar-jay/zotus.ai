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
    'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md active:scale-[0.98]',
  secondary:
    'bg-primary/10 text-primary hover:bg-primary/20 active:scale-[0.98]',
  outline:
    'border-2 border-border text-dark hover:border-primary hover:text-primary active:scale-[0.98]',
  ghost:
    'text-gray hover:text-dark hover:bg-bg-subtle active:scale-[0.98]',
  white:
    'bg-white text-dark hover:bg-bg-subtle shadow-sm hover:shadow-md active:scale-[0.98]',
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
