import * as React from 'react';

export interface ICardHeader {
  children?: React.ReactNode;
}

const CardHeader: React.SFC<ICardHeader> = ({ children }: ICardHeader) => (
  <React.Fragment>{children}</React.Fragment>
);

export default CardHeader;
