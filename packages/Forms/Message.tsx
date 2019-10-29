import * as React from 'react';
import { IProps } from '../common/props';
import classNames from 'classnames';

export interface IMessageProps extends IProps {
  children?: React.ReactNode;
  show?: boolean;
  type: 'default'| 'error' | 'success' | 'warning' | 'info';
}

const defaultClasses = classNames('px-2', 'py-1', 'rounded');
const messageColorTypes = {
  error: classNames('bg-primary-100', 'text-primary-alert', defaultClasses),
  warning: classNames('bg-warning', defaultClasses),
  success: classNames('bg-success', defaultClasses),
  default: classNames('bg-surface-100', defaultClasses),
};

class Message extends React.PureComponent<IMessageProps, {}> {
  public static defaultProps: IMessageProps = {
    show: true,
    type: 'default',
  };

  render() {
    const { type, show, children, className } = this.props;
    const classes = classNames(
      'box__message',
      className,
      messageColorTypes[type],
    );
    return show ?
      <div className={classes}>
        {children}
      </div> : null;
  }
}

export default Message;
