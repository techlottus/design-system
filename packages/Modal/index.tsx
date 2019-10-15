import * as React from 'react';
import classNames from 'classnames';
import { IProps } from '../common/props';
import Icon from '../Icon/index';
import styles from './styles.module.pcss';

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
    styles.modal, {
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
    <div className={classes} onClick={!noEscape ? onClose : null}>
      <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
        {!noEscape ?
        <button className={styles.modalClose} onClick={onClose}>
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
