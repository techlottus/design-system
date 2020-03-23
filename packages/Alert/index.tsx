import * as React from 'react';
import classNames from 'classnames';
import { IProps } from '../common/props';
import Icon from '../Icon';

interface IAlertProps extends IProps {
  children?: React.ReactNode;
  closable?: boolean;
  show?: boolean;
  onClose?: () => void;
  bordered?: boolean;
  type: 'default'| 'error' | 'success' | 'warning' | 'info';
}

interface IAlertState {
  closed: boolean;
}

const messageColorTypes = {
  error: classNames('bg-primary-500', 'text-white'),
  warning: classNames('bg-warning'),
  success: classNames('bg-success'),
  default: classNames('bg-surface-100'),
};

class Alert extends React.PureComponent<IAlertProps, IAlertState> {
  static defaultProps: IAlertProps = {
    bordered: true,
    type: 'default',
    closable: false,
  };

  state: IAlertState = {
    closed: false,
  };

  onCloseHandler = () => {
    this.setState({
      closed: !this.state.closed,
    });
  }

  render() {
    const { className, type, children, closable, style } = this.props;
    const alertClasses = classNames(
      'flex', 'px-4', 'py-2', 'rounded', 'items-center',
      className,
      messageColorTypes[type],
      {
        'justify-between': closable,
      },
    );

    return (
      !this.state.closed ? <div className={alertClasses} style={style}>
        {children}
        { closable ? <button onClick={this.onCloseHandler}>
          <Icon className='opacity-90' size={20} icon='icon-close' />
        </button> : null }
      </div> : null
    );
  }
}

export default Alert;
