import * as React from 'react';

interface InputProps {
  htmlId: string;
  type: 'text'|'email'|'password';
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

const Input = ({
  htmlId= 'labeldemo',
  type= 'text',
  name= 'Input name',
  value,
  placeholder= 'Insert some text...',
  disabled= false,
  readOnly= false,
  required = false,
  callback= (e: any) => {console.log(e.target.value); },
  className,
  children,
}: InputProps) => {

  return(
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
        className={`
          relative
          w-full
          bg-surface-100
          rounded
          p-3
          font-rubik
          text-surface-500
          text-base
          h-10
          focus:border-2
          focus:border-surface-200
          focus:bg-white
          focus:outline-none
          ${className}`}
      />
      {children}
    </React.Fragment>
  );
};

export default Input;
