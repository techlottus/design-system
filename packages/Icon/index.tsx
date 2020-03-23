import * as React from 'react';
import { IProps } from '../common/props';
import classNames from 'classnames';

export interface IIconProps extends IProps {
  size?: number;
  gap?: number;
  icon?: string;
}

const Icon: React.SFC<IIconProps> = ({ size, gap, className, icon }) => {
  const iconWrapper = classNames('flex justify-center items-center', 'betomic-icon');
  const iconClasses = classNames(className, 'betomic', icon);
  return (<div className={iconWrapper} style={{
    width: size,
    height: size,
    padding: gap,
  }}>
    <i style={{
      fontSize: (size - gap),
    }} className={iconClasses}></i>
  </div>);
};

Icon.defaultProps = {
  size: 16,
  gap: 0,
};

export default Icon;
