import * as React from 'react';

// Icon Props
interface BetomiconProps {
  icon: string;
  size?: string;
  className?: string;
}

const Icon: React.SFC<BetomiconProps> = ({ size, icon, className }: BetomiconProps) => {
  return(
    <div>
      <i style={{fontSize: size}}>{icon}</i>
    </div>
  );
};

Icon.defaultProps = {
  icon: '😇',
  size: '12px',
};

export default Icon;
