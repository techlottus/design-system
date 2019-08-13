import * as React from 'react';
import Input from '../Input';
import Label from '../Label';

const InputVariant = ({}) => {
  const [shown, setShown] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('daniela');
  const [error, setError] = React.useState({error:true, message: 'Something wrong!'});
  const message = error.error ? '': 'Something wrong';
  return(
    <React.Fragment>
      <h2>How to use an input?</h2>
      <button className='m-4' onClick={()=>setError({error:!error.error, message: message})}>Error?</button>

        <Label
          htmlFor='error-alert'
          label='Test error input'
          required
        />
        <Input
          value={inputValue}
          htmlId= 'error-alert'
          type= 'email'
          name= 'error'
          placeholder= 'Test error input...'
          disabled= {false}
          readOnly= {false}
          required= {false}
          callback= { event => setInputValue(event.target.value) }
          className= {`${error.error && 'border-primary-500 border-2 focus:border-primary-200'}`}
        >

          {error.error &&
            <div className='h-8 bg-primary-100 font-rubik text-primary-500 py-1 px-3 rounded mt-2' role='alert'>
              <span className='block sm:inline'>{error.message}</span>
            </div>
          }

        </Input>

    </React.Fragment>
      
  );
}

export default InputVariant