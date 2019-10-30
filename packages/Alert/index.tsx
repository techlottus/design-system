import * as React from 'react';
import classNames from 'classnames';
import { IProps } from '../common/props';
import style from './alert.module.pcss';
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
    const { className, type, children, closable } = this.props;
    const classes = classNames(
      style.alert,
      className,
      messageColorTypes[type],
      {
        [style.alertWithIcon]: closable,
      },
    );

    return (
      !this.state.closed ? <div className={classes}>
        {children}
        { closable ? <button onClick={this.onCloseHandler}>
          <Icon className={style.alertIcon} size={20} icon='icon-close' />
        </button> : null }
      </div> : null
    );
  }
}

export default Alert;
