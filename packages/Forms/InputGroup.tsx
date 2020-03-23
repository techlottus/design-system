import * as React from 'react';
import { IControlledProps, IProps } from '../common/props';
import classNames from 'classnames';
import './global.css';

interface IInputGroupProps extends IControlledProps, IProps {
  type?: string;
  placeholder?: string;
  inputRef?: (ref: HTMLInputElement | null) => any;
  children?: React.ReactNode;
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
  isValid?: boolean | null;
}

class InputGroup extends React.PureComponent<IInputGroupProps, {}> {
  static defaultProps: IInputGroupProps = {
    isValid: null,
  };

  public render() {
    const { className, leftElement, rightElement, isValid, inputRef, ...props } = this.props;
    const classes = classNames(
      'input-group',
      'relative',
    );
    const inputClasses = classNames(
      'relative w-full rounded p-3 h-10',
      'font-rubik text-base text-surface-700 bg-surface-100',
      'focus:border-2 focus:border-surface-200 focus:bg-white focus:outline-none',
      {
        ['pl-10']: (leftElement !== undefined),
        ['pr-9']: (rightElement !== undefined),
        ['border-success border-2 bg-white focus:border-success']: (isValid !== null && isValid),
        ['border-primary-500 border-2 bg-white shadow-none focus:border-primary-500']: (isValid !== null && !isValid),
      },
      className,
    );

    return (
      <div className={classes}>
        {this.maybeRenderLeftElement()}
        <input
          type='text'
          {...props}
          ref={inputRef}
          className={inputClasses} />
        {this.maybeRenderRightElement()}
      </div>
    );
  }

  private maybeRenderLeftElement() {
    const { leftElement } = this.props;
    const classesIcon = classNames(
      'left-element',
      'absolute top-0 z-1',
      'left-0',
    );
    if (leftElement == null) {
      return undefined;
    }

    return (
      <span className={classesIcon}>
        {leftElement}
      </span>
    );
  }

  private maybeRenderRightElement() {
    const { rightElement } = this.props;
    const classesIcon = classNames(
      'right-element',
      'absolute top-0 z-1',
      'right-0',
    );
    if (rightElement == null) {
      return undefined;
    }

    return (
      <span className={classesIcon}>
        {rightElement}
      </span>
    );
  }
}

export default InputGroup;
