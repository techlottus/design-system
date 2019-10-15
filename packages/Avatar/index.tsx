import * as React from 'react';
import { IProps } from '../common/props';
import classNames from 'classnames';
import style from './avatar.module.pcss';

const Sizes = {
  'xs': style.avatarExtraSmall,
  'sm': style.avatarSmall,
  'md': style.avatarMedium,
  'lg': style.avatarLarge,
  'xl': style.avatarExtraLarge,
  '2xl': style.avatarDoubleExtraLarge,
};

type Size = typeof Sizes[keyof typeof Sizes];

export interface IAvatar extends IProps {
  children?: React.ReactNode;
  size?: Size;
}

const Avatar: React.SFC<IAvatar> = ({ size, children, className }: IAvatar) => {
  const classes = classNames(
    style.avatar,
    className,
    Sizes[size],
  );

  return (
    <figure className={classes}>
      {children}
    </figure>
  );
};

Avatar.defaultProps = {
  size: 'md',
};

export default Avatar;
