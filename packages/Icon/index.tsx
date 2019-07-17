import * as React from 'react';

// Icon Props
interface IconProps {
  size?: string;
  className?: string;
}

const Icon: React.SFC<IconProps> = ({ size, className }: IconProps) => {
  return(
    <div>
      <i style={{ fontSize: size }} className={className}></i>
    </div>
  );
};

Icon.defaultProps = {
  size: '12px',
};

export default Icon;
