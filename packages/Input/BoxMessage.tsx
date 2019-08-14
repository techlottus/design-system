import * as React from 'react';

interface BoxMessageProps {
  message: string;
  type: 'error' | 'success';
}

const messageType = {
  error: 'bg-primary-100 text-primary-700',
  success: 'bg-primary-500',
};

const BoxMessage = ({message = 'Your message alert', type= 'error'}: BoxMessageProps) => {
  return(
    <div className={`w-full flex items-center h-8 font-rubik p-2 rounded mt-2 ${messageType[type]}`} role='alert'>
        <span>{message}</span>
    </div>
  );
};

export default BoxMessage;
