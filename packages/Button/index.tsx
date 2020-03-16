import * as React from 'react';
import { IProps, HTMLButtonProps } from '../common/props';
import classNames from 'classnames';

// Button Props
const Sizes = {
  md: classNames('px-8 py-4'),
  lg: classNames('px-10 py-5 text-xl'),
};

type Size = typeof Sizes[keyof typeof Sizes];

// The button's common classes
const commonClasses = classNames('rounded', 'flex', 'justify-center', 'items-center', 'font-bold', 'font-montserrat', 'focus:outline-none');

const Variants = {
  primary: classNames('bg-primary-400', 'text-white', 'hover:bg-primary-700', 'focus:shadow-primary-200', commonClasses),
  secondary: classNames('bg-surface-500', 'text-white', 'hover:bg-surface-800', 'focus:shadow-secondary-200', 'focus:bg-surface-800', commonClasses),
  terciary: classNames('bg-transparent border-2 border-surface-400', 'hover:bg-surface-400', 'hover:text-white', 'focus:shadow-secondary-200', 'focus:bg-surface-400', 'focus:tet-white'),
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

  const btnDisabledClasses = classNames('bg-surface-100', 'text-surface-300', 'cursor-not-allowed', 'hover:bg-surface-100', commonClasses);

  const classes = classNames(
    className,
    Sizes[size],
    Variants[variant], {
      [btnDisabledClasses]: disabled,
      ['w-full']: block,
    }
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
