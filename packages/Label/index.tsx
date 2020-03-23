import * as React from 'react';

interface ILabelProps {
  htmlFor: string;
  label: string;
  required?: boolean;
  children?: React.ReactNode;
}

const Label = ({ htmlFor, label, required, children }: ILabelProps) => {
  return(
    <div className='flex mb-3'>
      <label className='flex items-center w-full font-rubik text-base text-surface-500' htmlFor={htmlFor}>
        {label} { required && <span className='ml-1 text-primary-400'> *</span> }
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
