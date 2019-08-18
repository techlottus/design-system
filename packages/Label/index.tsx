import * as React from 'react';
import styles from './label.module.pcss';

interface ILabelProps {
  htmlFor: string;
  label: string;
  required?: boolean;
  children?: React.ReactNode;
}

const Label = ({ htmlFor, label, required, children }: ILabelProps) => {
  return(
    <div className={styles.label}>
      <label className={styles.labelText} htmlFor={htmlFor}>
        {label} { required && <span className={styles.labelRequired}> *</span> }
      </label>
      {children}
    </div>
  );
};

Label.defaultProps = {
  htmlFor: 'labeldemo',
  label: 'Your label',
  required: false,
};

export default Label;
