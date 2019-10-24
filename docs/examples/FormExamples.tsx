import * as React from 'react';
import FormGroup from '../../packages/Forms/FormGroup';
import InputGroup from '../../packages/Forms/InputGroup';
import Icon from '../../packages/Icon';

const InputGroupHandlerExample = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <>
      <FormGroup
        className='pt-4'
        label={<div>Password <span className='text-primary-500'>*</span></div>}>
        <InputGroup
          type={showPassword ? 'text' : 'password'}
          rightElement={
            <button className='m-2 p-1 w-6 h-6' onClick={() => setShowPassword(!showPassword)}>
              <Icon
                size={14}
                gap={1}
                icon='icon-eye' />
            </button>
          } />
      </FormGroup>
    </>
  );
};

export default InputGroupHandlerExample;
