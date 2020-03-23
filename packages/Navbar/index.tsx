import * as React from 'react';
import classNames from 'classnames';
import { IProps, HTMLDivProps } from '../common/props';
import NavbarBrand from './NavbarBrand';

export interface INavbarProps extends IProps, HTMLDivProps {
  fixedToTop?: boolean;
  transparent?: boolean;
}

class Navbar extends React.PureComponent<INavbarProps, {}> {
  public static Brand = NavbarBrand;

  public render() {
    const { children, className, fixedToTop, transparent, ...htmlProps } = this.props;
    const classes = classNames(
      'bg-white py-7 flex items-center',
      className, {
      ['z-9999 inset-x-0 top-0 w-full fixed']: fixedToTop,
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
