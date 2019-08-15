import * as React from 'react';

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
    rounded
    focus:outline-none
    focus:shadow-primary-200
    focus:bg-primary-700
    inline-flex
    justify-center
    items-center
    text-white
    font-bold
    font-montserrat
  `,
  secondary: `
    bg-surface-500
    hover:bg-surface-800
    rounded
    focus:outline-none
    focus:shadow-secondary-200
    focus:bg-surface-800
    inline-flex
    justify-center
    items-center
    text-white
    font-bold
    font-montserrat
  `,
  terciary: `
    bg-transparent
    hover:bg-surface-400
    hover:text-white
    focus:outline-none
    focus:shadow-secondary-200
    focus:bg-surface-400
    focus:text-white
    border-2
    border-surface-400
    rounded
    inline-flex
    justify-center
    items-center
    font-bold
    font-montserrat
  `,
  disabled: `
    bg-surface-100
    focus:outline-none
    rounded
    inline-flex
    justify-center
    items-center
    text-surface-300
    font-bold
    font-montserrat
    cursor-not-allowed
  `,
};

interface IButton {
  size: 'xs'|'sm'|'md'|'lg';
  variant: 'primary'|'secondary'|'terciary'|'disabled';
  children: any;
  className?: string;
  onClick?: () => void;
}

const Button: React.SFC<IButton> = ({ size, variant, children, className, onClick }: IButton) => (
  <button
    onClick={onClick}
    className={`${className} ${sizes[size]} ${buttonVariant[variant]}`}>
    {children}
  </button>
);

Button.defaultProps = {
  size: 'md',
  variant: 'primary',
  className: '',
};

export default Button;
