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
    bg-primary-500
    hover:bg-primary-700
    font-bold
    text-white
    rounded
    inline-flex
    items-center
    font-montserrat
  `,
  secondary: `
    bg-surface-500
    hover:bg-surface-800
    font-bold
    text-white
    rounded
    inline-flex
    items-center
    font-montserrat
  `,
  terciary: `
    font-bold
    bg-transparent
    border-2
    border-surface-400
    hover:bg-surface-400
    hover:text-white
    rounded
    inline-flex
    items-center
    font-montserrat
  `,
};

interface ButtonProps {
  size: 'xs'|'sm'|'md'|'lg';
  variant: 'primary'|'secondary'|'terciary';
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
