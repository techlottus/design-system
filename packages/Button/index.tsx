import * as React from 'react';
import { IProps, HTMLButtonProps } from '../common/props';
import classNames from 'classnames';
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
};

type Variant = typeof Variants[keyof typeof Variants];

export interface IButton extends IProps, HTMLButtonProps {
  size: Size;
  variant?: Variant;
  disabled?: boolean;
  block?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.SFC<IButton> = ({ children, onClick, size, variant, className, disabled = false, block = false, ...props }: IButton) => {

  const isDisabled = disabled === true ? style.btnDisabled : null;
  const isBlock = block === true ? style.btnBlock : null;

  const classes = classNames(
    className,
    isDisabled,
    isBlock,
    Sizes[size],
    Variants[variant],
  );
  return (
    <button
      onClick={onClick}
      className={classes}
      {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: 'md',
};

export default Button;
