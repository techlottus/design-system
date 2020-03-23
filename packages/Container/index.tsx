import * as React from 'react';
import { IProps } from '../common/props';
import classNames from 'classnames';

export interface IContainer extends IProps {
  fluid?: boolean;
}

class Container extends React.PureComponent<IContainer, {}> {
  public static defaultProps: IContainer = {
    fluid: false,
  };

  public render() {
    const { children, className, fluid } = this.props;
    const isFluid = !fluid ? 'mx-auto' : null;
    const classes = classNames('px-4 container', className, isFluid);
    return (
    <div className={classes}>{children}</div>
    );
  }
}

export default Container;
