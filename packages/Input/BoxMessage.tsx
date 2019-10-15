import * as React from 'react';
import styles from './input.module.pcss';

export interface IBoxMessageProps {
  message: string;
  type: 'error' | 'success';
}

const messageType = {
  error: 'bg-primary-100 text-primary-700',
  success: 'bg-success',
};

const BoxMessage: React.SFC<IBoxMessageProps> = ({ message, type }: IBoxMessageProps) => {
  return(
    <div className={`${styles.boxMessage} ${messageType[type]}`} role='alert'>
        <span>{message}</span>
    </div>
  );
};

BoxMessage.defaultProps = {
  message: 'Your message alert',
  type: 'error',
};

export default BoxMessage;
