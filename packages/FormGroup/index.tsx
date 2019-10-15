import * as React from 'react';

interface IFormGroupProps {
  children?: React.ReactNode;
  className?: string;
}

const FormGroup: React.SFC<IFormGroupProps> = ({ children, className }: IFormGroupProps) => (
  <div className={`${className}`}>{children}</div>
);

FormGroup.defaultProps = {
  className: 'p-5',
};

export default FormGroup;
