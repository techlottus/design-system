import * as React from 'react';

interface CardHeaderProps {
  children: any;
}

const CardHeader: React.SFC<CardHeaderProps> = ({ children }: CardHeaderProps) => (
  <React.Fragment>{children}</React.Fragment>
);

export default CardHeader;
