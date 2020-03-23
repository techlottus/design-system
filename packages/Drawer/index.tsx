import * as React from 'react';
import { IProps } from '../common/props';
import classNames from 'classnames';
import Icon from '../Icon/index';

const Positions = {
  left: 'inset-y-0 left-0',
  right: 'inset-y-0 right-0',
  bottom: 'inset-x-0 bottom-0 max-w-full h-78',
};

type Position = typeof Positions[keyof typeof Positions];

interface IDrawerProps extends IProps {
  isVisible?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  position?: Position;
}

const Drawer: React.SFC<IDrawerProps> = ({ isVisible, children, onClose, position, className }: IDrawerProps ) => {
  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  function keydownHandler({key}) {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  }

  const clasess = classNames (
    'bg-white w-full absolute max-w-md text-left flex flex-col overflow-hidden rounded p-6 max-h-full',
    Positions[position],
    className,
  );

  return !isVisible ? null : (
    <div className='fixed w-full inset-0 z-9999 flex items-center justify-center'
    onClick={onClose} style={{backgroundColor: 'rgba(0, 0, 0, 0.25)'}} >
      <div className={clasess} onClick={e => e.stopPropagation()}>
        <button className='top-0 right-0 cursor-pointer absolute mt-7 mr-7 focus:outline-none' onClick={onClose}>
          <Icon className='text-surface-700' icon='icon-close' />
        </button>
        {children}
      </div>
    </div>
  );
};

Drawer.defaultProps = {
  isVisible: false,
  children: <p>Your content here</p>,
  position: 'left',
};

export default Drawer;
