import * as React from 'react';

// Icon Props
interface IconProps {
  size?: '12px'|'14px'|'16px'|'18px'|'24px'|'32px';
  state?: 'text-neutral'|'text-active'|'text-warning'|'text-alert'|'text-disabled';
  className?: string;
  icon: string;
}

const Icon: React.SFC<IconProps> = ({ size, state, className, icon }: IconProps) => {
  return (
    <div>
      <i style={{ fontSize: size }} className={`${className} ${state} ${icon}`}></i>
    </div>
  );
};

Icon.defaultProps = {
  size: '12px',
  className: '',
};

export default Icon;
