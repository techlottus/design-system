import * as React from 'react';
import { IProps } from '../common/props';
import classNames from '../common/classnames';
import style from './container.module.pcss';

export interface IContainer extends IProps {
  fluid?: boolean;
}

class Container extends React.PureComponent<IContainer, {}> {
  public static defaultProps: IContainer = {
    fluid: false,
  };

  public render() {
    const { children, className, fluid } = this.props;
    const isFluid = !fluid ? style.containerCentered : null;
    const classes = classNames(className, isFluid);
    return (
    <div className={classes}>{children}</div>
    );
  }
}

export default Container;
