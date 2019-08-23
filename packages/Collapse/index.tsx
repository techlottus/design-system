import * as React from 'react';
import classNames from 'classnames';
import { IProps } from '../common/props';
import style from './collapse.module.pcss';

interface Icons {
  opened: React.ReactNode;
  closed: React.ReactNode;
}

export interface ICollapse extends IProps {
  children?: React.ReactNode;
  title?: string;
  icon?: Icons;
  isOpen?: boolean;
}

class Collapse extends React.PureComponent<ICollapse, {}> {
  public render() {
    const { isOpen, children, title, icon, className } = this.props;
    const classes = classNames(style.collapse, className);

    return (
      <div className={classes}>
        <div className={style.collapseHeading}>
          <div className={style.collapseTitle}>{title}</div>
          <div className={style.collapseIcon}>
            {icon && isOpen ? icon.opened : icon.closed}
          </div>
        </div>
        {isOpen && <div className={style.collapseContent}>
          {children}
        </div>}
      </div>
    );
  }
}

export default Collapse;
