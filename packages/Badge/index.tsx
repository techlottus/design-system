import * as React from 'react';
import { IProps } from '../common/props';
import classNames from 'classnames';

export interface IBadge extends IProps {
  content?: string;
  roundedFull?: boolean;
}

const Badge: React.SFC<IBadge> = ({ className, content, roundedFull }: IBadge) => {
  const fullBadgeClasses = classNames('flex justify-center items-center rounded-full h-9 w-9');
  const classes = classNames(
    'inline-block px-2 py-1 rounded bg-primary-500 text-white text-xs font-rubik',
    className,
    { [fullBadgeClasses]: roundedFull },
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
