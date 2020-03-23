import * as React from 'react';
import classNames from 'classnames';
import { IProps, HTMLDivProps } from '../common/props';

export interface INavbarBrand extends IProps, HTMLDivProps {}

class NavbarBrand extends React.PureComponent<INavbarBrand, {}> {
  public render() {
    const { children, className } = this.props;
    const classes = classNames('px-3', className);
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }
}

export default NavbarBrand;
