import * as React from 'react';
import { HTMLInputProps, IProps } from '../common/props';
import BoxMessage from './BoxMessage';
import classNames from 'classnames';
import styles from './input.module.pcss';

interface IInputProps extends HTMLInputProps, IProps {
  htmlId: string;
  name: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error?: string | boolean;
  success?: boolean;
  callback?: (event: React.FormEvent<HTMLInputElement>) => void;
  children?: React.ReactNode | React.ReactNode[];
}

class Input extends React.Component<IInputProps> {
  static defaultProps: IInputProps = {
    htmlId: 'labeldemo',
    name: 'Input name',
    placeholder: 'Insert some text...',
    disabled: false,
    readOnly: false,
    required: false,
    error: false,
    success: false,
  };
  public static Message = BoxMessage;
  render() {
    const {
      htmlId,
      name,
      value,
      required,
      disabled,
      readOnly,
      placeholder,
      callback,
      children,
      error,
      success,
      className,
      ...htmlProps
    } = this.props;

    const classes = classNames(
      className,
      styles.standardInput, {
        [styles.standardInputError]: error,
        [styles.standardInputSucces]: success,
      },
    );
    return (
      <React.Fragment>
        <input
          id={htmlId}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={callback}
          className={classes}
          {...htmlProps}
        />
        {children}
      </React.Fragment>
    );
  }
}

export default Input;
