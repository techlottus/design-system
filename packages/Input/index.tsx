import * as React from 'react';
import Icon from '../Icon';

interface InputProps {
  htmlId: string;
  type: 'text'|'email'|'password';
  name: string;
  value?: string;
  placeholder: string;
  disabled: boolean;
  readOnly: boolean;
  required: boolean;
  error: string | boolean;
  success: boolean;
  callback?: () => {};
  className?: string;
  children: any;
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
  callback= (e) => {console.log(e.target.value); },
  className,
  children,
}) => {

  return(
    <div>
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
          text-surface-500
          font-rubik
          font-base
          focus:border-2
          focus:border-surface-200
          focus:bg-white
          h-10
          p-3
          rounded
          focus:outline-none ${className}`}
      />
      {children}
    </div>
  );
};

export default Input;
