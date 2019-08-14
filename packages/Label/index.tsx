import * as React from 'react';

interface LabelProps {
  htmlFor: string;
  label: string;
  required?: boolean;
  className?: string;
}

const Label = ({htmlFor = 'labeldemo', label = 'Your label', required = false, className= ''}: LabelProps) => {
  return(
    <label className={`block font-rubik font-base text-surface-500 mb-3 ${className}`} htmlFor={htmlFor}>
      {label} { required && <span className='text-primary-400'> *</span> }
    </label>
  );
};

export default Label;
