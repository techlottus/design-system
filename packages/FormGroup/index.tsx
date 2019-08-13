import * as React from 'react';

interface FormGroupProps {
  children: any;
  className: string;
}

const FormGroup: React.SFC<FormGroupProps> = ({ children, className= 'px-5 py-5' }: FormGroupProps) => (
  <div className={`${className}`}>{children}</div>
);

export default FormGroup;
