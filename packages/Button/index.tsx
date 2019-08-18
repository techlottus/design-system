import * as React from 'react';
import { IProps } from '../common/props';
import style from './button.module.pcss';

// Button Props
const Sizes = {
  md: style.btnMedium,
  lg: style.btnLarge,
};

type Size = typeof Sizes[keyof typeof Sizes];

const Variants = {
  primary: style.btnPrimary,
  secondary: style.btnSecondary,
  terciary: style.btnTerciary,
  disabled: style.btnDisabled,
};

type Variant = typeof Variants[keyof typeof Variants];

export interface IButton extends IProps {
  size: Size;
  variant: Variant;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.SFC<IButton> = ({ children, onClick, size, variant, className }: IButton) => (
  <button
    onClick={onClick}
    className={`${Sizes[size]} ${Variants[variant]} ${className}`}>
    {children}
  </button>
);

Button.defaultProps = {
  size: 'md',
  variant: 'primary',
};

export default Button;
