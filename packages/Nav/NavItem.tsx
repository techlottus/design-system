import * as React from 'react';
import classNames from 'classnames';
import { IProps } from '../common/props';

// tslint:disable-next-line: no-empty-interface
export interface INavItem extends IProps {}

const NavItem: React.SFC<INavItem> = ({ className, children }) => {
  const classes = classNames('p-3 list-none', className);
  return <li className={classes}>{children}</li>;
};

export default NavItem;
