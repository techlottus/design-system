import * as React from 'react';
import Input from '../Input';
import Label from '../Label';
import BoxMessage from './BoxMessage';
import Icon from '../Icon';
import FormGroup from '../FormGroup';

const InputVariant = () => {
  const [shown, setShown] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('daniela');
  const [success, setSuccess] = React.useState(true);
  const [error, setError] = React.useState({error: true, message: 'Something wrong!'});
  const message = error.error ? '' : 'Something wrong';

  return(
    <React.Fragment>
      <div className='flex justify-between'>
        <h2 className='text-lg font-montserrat font-bold'>Warning</h2>
        <button
          className='p-2 bg-prepa-500 rounded text-white font-montserrat text-xs hover:bg-prepa-300 focus:outline-none'
          onClick={() => setError({error: !error.error, message })}
        >
          Show Error
        </button>
      </div>

      <FormGroup className='w-1/2'>
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
          {error.error && <BoxMessage message={error.message} type='error' /> }
        </Input>

      </FormGroup>

      <div className='flex justify-between mt-8'>
        <h2 className='text-lg font-montserrat font-bold'>Success</h2>
        <button
          className='p-2 bg-prepa-500 rounded text-white font-montserrat text-xs hover:bg-prepa-300 focus:outline-none'
          onClick={() => setSuccess(!success)}
        >
          Show Success
        </button>
      </div>

      <FormGroup className='w-1/2'>
        <Label
          htmlFor='success-alert'
          label='Test success input'
          required
          />
        <div className='relative flex items-center'>
          <Input
            value={'daniela@test.com'}
            htmlId= 'success-alert'
            type= 'email'
            name= 'success'
            placeholder= 'Test success input...'
            disabled= {false}
            readOnly= {true}
            required= {false}
            className= {`${success && 'border-english-500 border-2 focus:border-english-200'}`}
            >
            {success && <div className='absolute right-0 mr-2'>
              <Icon icon={'fab fa-amazon'} size={'16px'} state={'text-active'} />
            </div>}
          </Input>
        </div>
      </FormGroup>

      <div className='flex flex-col justify-between mt-8'>
        <h2 className='text-lg font-montserrat font-bold'>Show/Hide password</h2>

        <FormGroup className='w-1/3 relative flex items-center'>
          <Input
            value={'You pass here...'}
            htmlId= 'password-input'
            type= {shown ? 'text' : 'password'}
            name= 'password-input'
            placeholder= 'Password...'
            disabled= {true}
            readOnly= {true}
            required= {false}
            className= {``}
            >
            <div className='absolute right-0 mr-2'>
              <button className='focus:outline-none' onClick={() => setShown(!shown)}>
                <Icon icon={'fab fa-amazon'} size={'16px'} state={'text-neutral'} />
              </button>
            </div>
          </Input>

        </FormGroup>
      </div>

    </React.Fragment>
  );
};

export default InputVariant;
