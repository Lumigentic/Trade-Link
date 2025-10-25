import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-[var(--primary-teal)] text-white hover:bg-[var(--primary-teal-dark)] focus:ring-[var(--primary-teal)] shadow-md hover:shadow-lg',
    secondary: 'bg-[var(--accent-orange)] text-white hover:bg-[var(--accent-orange-dark)] focus:ring-[var(--accent-orange)] shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-[var(--accent-orange)] text-[var(--accent-orange)] hover:bg-[var(--accent-orange)] hover:text-white focus:ring-[var(--accent-orange)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
