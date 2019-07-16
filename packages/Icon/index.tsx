import * as React from 'react';
// import '../css/fontawesome.temp.css';

// Icon Props
interface BetomiconProps {
  size?: string;
  className?: string;
}

const Icon: React.SFC<BetomiconProps> = ({ size, className }: BetomiconProps) => {
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
