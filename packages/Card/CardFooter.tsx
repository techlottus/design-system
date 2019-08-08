import * as React from 'react';

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.SFC<CardFooterProps> = ({ children, className }: CardFooterProps) => (
  <div className={`${className}`}>{children}</div>
);

CardFooter.defaultProps = {
  className: 'px-5 py-5',
};

export default CardFooter;
