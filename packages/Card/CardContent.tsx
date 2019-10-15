import * as React from 'react';

export interface ICardContent {
  children?: React.ReactNode;
  className?: string;
}

const CardContent: React.SFC<ICardContent> = ({ children, className }: ICardContent) => (
  <div className={`${className}`}>{children}</div>
);

CardContent.defaultProps = {
  className: 'px-5 py-5',
};

export default CardContent;
