import * as React from 'react';
import { IControlledProps, IProps } from '../common/props';
import classNames from 'classnames';
import styles from './input-group.module.pcss';
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
      styles.inputGroup,
    );
    const inputClasses = classNames(
      styles.inputControl,
      {
        [styles.inputControlLeftIcon]: (leftElement !== undefined),
        [styles.inputControlRightIcon]: (rightElement !== undefined),
        [styles.inputControlIsValid]: (isValid !== null && isValid),
        [styles.inputControlNotValid]: (isValid !== null && !isValid),
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
      styles.inputGroupAction,
      styles.inputGroupActionLeft,
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
      styles.inputGroupAction,
      styles.inputGroupActionRight,
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
