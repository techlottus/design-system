import * as React from 'react';

interface FormGroupProps {
  children?: React.ReactNode;
  className?: string;
}

const FormGroup: React.SFC<FormGroupProps> = ({ children, className= 'p-5' }: FormGroupProps) => (
  <div className={`${className}`}>{children}</div>
);

export default FormGroup;
