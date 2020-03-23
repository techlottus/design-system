import * as React from 'react';
import classNames from 'classnames';
import { variantIntensity, variantName } from '../common/constants';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

export interface ICardProps {
  children?: React.ReactNode;
  bordered?: boolean;
  variant?: string;
  variantAs?: string;
  className?: string;
}

class Card extends React.Component<ICardProps> {
  public static Header = CardHeader;
  public static Content = CardContent;
  public static Footer = CardFooter;
  static defaultProps: ICardProps = { bordered: false, variant: 'surface', variantAs: '500', className: 'max-w-sm' };

  public render() {
    const { children, bordered, variant, variantAs, className } = this.props;
    const classes = classNames(
      'border-t-8 rounded-card',
      `border-${variantName[variant]}-${variantIntensity[variantAs]}`,
    );

    return(
      <div className={`bg-white rounded overflow-hidden shadow-up-box ${className}`}>
        {bordered && <div className={classes} />}
        {children}
      </div>
    );
  }
}

export default Card;
