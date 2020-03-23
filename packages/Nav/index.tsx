import * as React from 'react';
import classNames from 'classnames';
import { IProps } from '../common/props';
import NavItem from './NavItem';

const Alignment = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
};

type Alignment = typeof Alignment[keyof typeof Alignment];

function alignmentClass(alignment: Alignment) {
  switch (alignment) {
    case Alignment.LEFT:
      return 'justify-start';
    case Alignment.RIGHT:
      return 'justify-end';
    case Alignment.CENTER:
      return 'justify-center';
    default:
      return undefined;
  }
}

export interface INavProps extends IProps {
  vertical?: boolean;
  align: Alignment;
}

class Nav extends React.PureComponent<INavProps, {}> {
  public static Item = NavItem;
  public static defaultProps: INavProps = {
    vertical: false,
    align: Alignment.LEFT,
  };

  public render() {
    const { children, align, vertical, className } = this.props;
    const isVertical = (vertical) ? 'flex-col' : null;
    const classes = classNames(
      'flex flex-wrap flex-1',
      className,
      isVertical,
      alignmentClass(align),
    );
    return (
      <nav className={classes}>
        {children}
      </nav>
    );
  }
}

export default Nav;
