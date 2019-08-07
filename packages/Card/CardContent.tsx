import * as React from 'react';

interface CardContentProps {
  children: any;
  className: string;
}

const CardContent: React.SFC<CardContentProps> = ({ children, className }: CardContentProps) => (
  <div className={`${className}`}>{children}</div>
);

CardContent.defaultProps = {
  className: 'px-5 py-5',
};

export default CardContent;
