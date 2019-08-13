import * as React from 'react';

interface LabelProps {
  htmlFor: string;
  label: string;
  required?: boolean;
}

const Label = ({htmlFor = 'labeldemo', label = 'Your label', required = false}: LabelProps) => {
  return(
    <label className='block font-rubik font-base text-surface-500' htmlFor={htmlFor}>
      {label} { required && <span className='text-primary-700'> *</span> }
    </label>
  );
};

export default Label;
