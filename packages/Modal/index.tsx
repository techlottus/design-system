import * as React from 'react';
import { IProps } from '../common/props';
import Icon from '../Icon/index';
import styles from './styles.pcss';

interface IModalProps extends IProps {
  isVisible?: boolean;
  title?: string;
  subtitle?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
}

const Modal: React.SFC<IModalProps> = ({ isVisible, title, subtitle, content, footer, onClose }: IModalProps) => {
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
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{title}</h3>
          {subtitle && <h4 className={styles.modalSubtitle}>{subtitle}</h4> }
          <button className={styles.modalClose} onClick={onClose}>
            <Icon className='text-surfcae-700' size={16} icon='icon-close' />
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalContent}>{content}</div>
        </div>
        {footer && <div className={styles.modalFooter}>{footer}</div>}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  isVisible: false,
  title: 'Insert your title here',
  subtitle: 'Insert your subtitle here',
  content: <p>Insert some content</p>,
  footer: <button>Cancel</button>,
};

export default Modal;
