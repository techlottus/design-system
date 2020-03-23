import * as React from 'react';
import classNames from 'classnames';
import { IProps } from '../common/props';
import Icon from '../Icon/index';

interface IModalProps extends IProps {
  isVisible?: boolean;
  noEscape?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Modal: React.SFC<IModalProps> = ({ isVisible, noEscape, children, onClose, className }: IModalProps) => {
  const classes = classNames(
    'md:items-center',
    className,
    'fixed w-full inset-0 z-9999 flex items-stretch justify-center', {
      ['hidden']: !isVisible,
    },
  );
  React.useEffect(() => {
    if (!noEscape) {
      document.addEventListener('keydown', keydownHandler);
      return () => document.removeEventListener('keydown', keydownHandler);
    }
  });

  function keydownHandler({key}) {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  }

  return (
    <div className={classes} style={{backgroundColor: 'rgba(0, 0, 0, 0.25)'}} onClick={!noEscape ? onClose : null}>
      <div className='bg-white w-full relative max-w-2xl text-left flex flex-col overflow-hidden rounded p-7 max-h-full'
      onClick={e => e.stopPropagation()}>
        {!noEscape ?
        <button className='top-0 right-0 cursor-pointer absolute mt-7 mr-7 focus:outline-none' onClick={onClose}>
          <Icon className='text-surface-700' icon='icon-close' />
        </button> : null}
        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  isVisible: false,
  children: <p>Insert some content</p>,
};

export default Modal;
