import * as React from 'react';
import { IProps } from '../common/props';
import Icon from '../Icon/index';
import styles from './styles.module.pcss';

interface IModalProps extends IProps {
  isVisible?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Modal: React.SFC<IModalProps> = ({ isVisible, children, onClose }: IModalProps) => {
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

  return !isVisible ? null : (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>
          <Icon className='text-surface-700' icon='icon-close' />
        </button>
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
