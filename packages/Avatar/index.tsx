import * as React from 'react';
import { IProps } from '../common/props';
import classNames from 'classnames';

const Sizes = {
  'xs': classNames('w-4 h-4'),
  'sm': classNames('w-6 h-6'),
  'md': classNames('w-8 h-8'),
  'lg': classNames('w-10 h-10'),
  'xl': classNames('w-12 h-12'),
  '2xl': classNames('w-14 h-14'),
};

type Size = typeof Sizes[keyof typeof Sizes];

export interface IAvatar extends IProps {
  children?: React.ReactElement;
  size?: Size;
}

const Avatar: React.SFC<IAvatar> = ({ size, children, className }: IAvatar) => {
  const classes = classNames('relative', className, Sizes[size]);

  return (
    <figure className={classes}>
      {React.cloneElement(
        children,
        {
          className:'rounded',
        },
        null
      )}
    </figure>
  );
};

Avatar.defaultProps = {
  size: 'md',
};

export default Avatar;
