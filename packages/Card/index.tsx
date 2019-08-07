import * as React from 'react';

interface CardProps {
  children: any;
  border?: boolean;
  borderColor?: string;
}

const CardMeta: React.SFC<CardProps> = ({ children, border, borderColor }: CardProps) => (
  <div className={`max-w-sm rounded overflow-hidden shadow-lg mx-auto`}>
    {border && <div className={`border-t-8 rounded-card ${borderColor}`} />}
    {children}
  </div>
);

CardMeta.defaultProps = {
  border: false,
  borderColor: 'border-prepa-500',
};

export default CardMeta;
