import * as React from 'react';
import classNames from '../common/classnames';
import { IProps, HTMLDivProps } from '../common/props';
import NavbarBrand from './NavbarBrand';
import style from './navbar.module.pcss';

export interface INavbarProps extends IProps, HTMLDivProps {
  fixedToTop?: boolean;
  transparent?: boolean;
}

class Navbar extends React.PureComponent<INavbarProps, {}> {
  public static Brand = NavbarBrand;

  public render() {
    const { children, className, fixedToTop, transparent, ...htmlProps } = this.props;
    const classes = classNames(style.navbar, className, {
      [style.navbarSticky]: fixedToTop,
      ['bg-transparent']: transparent,
    });

    return (
      <div className={classes} {...htmlProps}>
        {children}
      </div>
    );
  }
}

export default Navbar;
