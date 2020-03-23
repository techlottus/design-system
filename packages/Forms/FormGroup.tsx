import * as React from 'react';
import { IProps } from '../common/props';
import classNames from 'classnames';
import Message from './Message';

interface IFormGroupProps extends IProps {
  children?: React.ReactNode;
  helperText?: React.ReactNode;
  label?: React.ReactNode;
  labelFor?: string;
}

class FormGroup extends React.PureComponent<IFormGroupProps, {}> {
  public static Message = Message;
  render() {
    const { children, className, helperText, label, labelFor } = this.props;
    const classes = classNames(
      'form-group',
      className,
    );

    return (
      <div className={classes}>
        { label && <label className='text-base font-rubik' htmlFor={labelFor}>
          {label}
        </label>}
        <div className='mt-1'>
          {children}
          { helperText && <div className='pt-1 text-xs'>{helperText}</div>}
        </div>
      </div>
    );
  }
}

export default FormGroup;
