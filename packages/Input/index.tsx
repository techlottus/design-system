import * as React from 'react';
import BoxMessage from './BoxMessage';
import classNames from '../common/classnames';
import styles from './input.module.pcss';

interface IInputProps {
  htmlId: string;
  type: 'text' | 'email' | 'password';
  name: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error?: string | boolean;
  success?: boolean;
  callback?: (event: any) => any;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

class Input extends React.Component<IInputProps> {
  static defaultProps: IInputProps = {
    htmlId: 'labeldemo',
    type: 'text',
    name: 'Input name',
    placeholder: 'Insert some text...',
    disabled: false,
    readOnly: false,
    required: false,
    callback: (e: any) => { console.log(e.target.value); },
    error: false,
    success: false,
  };
  public static Message = BoxMessage;
  render() {
    const {
      htmlId,
      type,
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
    } = this.props;

    const classes = classNames(
      styles.standardInput, {
        [styles.standardInputError]: error,
        [styles.standardInputSucces]: success,
      },
    );
    return (
      <React.Fragment>
        <input
          id={htmlId}
          type={type}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={callback}
          className={classes}
        />
        {children}
      </React.Fragment>
    );
  }
}

export default Input;
