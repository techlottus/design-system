import * as React from 'react';
import { IProps } from '../common/props';
import classNames from 'classnames';
import style from './badge.module.pcss';

export interface IBadge extends IProps {
  content?: string;
  roundedFull?: boolean;
}

const Badge: React.SFC<IBadge> = ({ className, content, roundedFull }: IBadge) => {
  const classes = classNames(
    style.badge,
    className,
    { [style.badgeFull]: roundedFull },
  );
  return (
    <span
      className={classes}>
      {content}
    </span>
  );
};

Badge.defaultProps = {
  content: 'Nuevo curso',
  roundedFull: false,
};

export default Badge;
