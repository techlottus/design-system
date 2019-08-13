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
}

const Input = ({
  htmlId= 'labeldemo',
  type= 'text',
  name= 'Input name',
  value= '',
  placeholder= 'Insert some text...',
  disabled= false,
  readOnly= false,
  required = false,
  error= false,
  success= false,
}: InputProps) => {
  const [shown, setShown] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);

  return(
    <div className='w-full relative flex flex-col justify-center'>
      <input
        id={htmlId}
        type={shown ? 'text' : type }
        name={name}
        value={inputValue}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={ event => setInputValue(event.target.value) }
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
          focus:outline-none
          ${inputValue && 'bg-white'}
          ${error &&
            'border-primary-500 border-2 focus:border-primary-200'}
          ${success &&
            'border-english-500 border-2 focus:border-english-200'}
          `
        }
      />
      {success && <div className='absolute right-0 mr-2'>
        <Icon icon={'fab fa-amazon'} size={'16px'} state={'text-active'} />
      </div>}

       {type === 'password' && <button className='absolute right-0 mr-2 focus:outline-none' onClick={() => setShown(!shown)}>
         <Icon icon={'fab fa-amazon'} size={'16px'} state={'text-neutral'} />
       </button>}

      {error &&
        <div className='h-8 bg-primary-100 font-rubik text-primary-500 py-1 px-3 rounded mt-2' role='alert'>
          <span className='block sm:inline'>{error}</span>
      </div>
      }

    </div>
  );
};

export default Input;
