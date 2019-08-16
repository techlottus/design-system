import * as React from 'react';

export interface ICardFooter {
  children?: React.ReactNode;
  className?: string;
}

const CardFooter: React.SFC<ICardFooter> = ({ children, className }: ICardFooter) => (
  <div className={`${className}`}>{children}</div>
);

CardFooter.defaultProps = {
  className: 'px-5 py-5',
};

export default CardFooter;
