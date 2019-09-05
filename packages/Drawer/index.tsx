import * as React from 'react';
import { IProps } from '../common/props';
import classNames from 'classnames';
import Icon from '../Icon/index';
import styles from './drawer.module.pcss';

const Positions = {
  left: styles.drawerDialogLeft,
  right: styles.drawerDialogRight,
  bottom: styles.drawerDialogBottom,
};

type Position = typeof Positions[keyof typeof Positions];

interface IDrawerProps extends IProps {
  isVisible?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  position?: Position;
}

const Drawer: React.SFC<IDrawerProps> = ({ isVisible, children, onClose, position }: IDrawerProps ) => {
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
    styles.drawerDialog,
    Positions[position],
  );

  return !isVisible ? null : (
    <div className={styles.drawer} onClick={onClose}>
      <div className={clasess} onClick={e => e.stopPropagation()}>
        <button className={styles.drawerClose} onClick={onClose}>
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
