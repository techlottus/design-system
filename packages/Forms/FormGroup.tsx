import * as React from 'react';
import { IProps } from '../common/props';
import classNames from 'classnames';
import styles from './form-group.module.pcss';

interface IFormGroupProps extends IProps {
  children?: React.ReactNode;
  helperText?: React.ReactNode;
  label?: React.ReactNode;
  labelFor?: string;
}

const FormGroup: React.FunctionComponent<IFormGroupProps> = ({ children, className, helperText, label, labelFor }: IFormGroupProps) => {
  const classes = classNames(
    'form-group',
    styles.formGroup,
    className,
  );

  return (
    <div className={classes}>
      { label && <label className={styles.formGroupLabel} htmlFor={labelFor}>
        {label}
      </label>}
      <div className={styles.formGroupContent}>
        {children}
        { helperText && <div className={styles.formGroupHelperText}>{helperText}</div>}
      </div>
    </div>
  );
};

export default FormGroup;
