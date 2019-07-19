import * as React from 'react';
import Icon from '../Icon';

// Button Props
const sizes = {
  xs: '',
  sm: '',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-5 text-xl',
};

const buttonVariant = {
  primary: `
    bg-primary-400
    hover:bg-primary-700
    inline-flex
    items-center
    rounded
    text-white
    font-bold
    font-montserrat
  `,
  secondary: `
    bg-surface-500
    hover:bg-surface-800
    inline-flex
    items-center
    rounded
    text-white
    font-bold
    font-montserrat
  `,
  terciary: `
    bg-transparent
    hover:bg-surface-400
    hover:text-white
    border-2
    border-surface-400
    rounded
    inline-flex
    items-center
    font-bold
    font-montserrat
  `,
  disabled: `
    bg-surface-100
    rounded
    text-surface-300
    font-bold
    font-montserrat
    cursor-not-allowed
  `,
};

interface ButtonProps {
  size: 'xs'|'sm'|'md'|'lg';
  variant: 'primary'|'secondary'|'terciary'|'disabled';
  children: any;
  className?: string;
}

const Button: React.SFC<ButtonProps> = ({ size, variant, children, className }: ButtonProps) => (
  <button className={`${className} ${sizes[size]} ${buttonVariant[variant]}`}>{children}</button>
);

Button.defaultProps = {
  size: 'md',
  variant: 'primary',
  className: '',
};

export default Button;
