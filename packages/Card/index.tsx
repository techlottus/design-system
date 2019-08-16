import * as React from 'react';
import classNames from '../common/classnames';
import { variantIntensity, variantName } from '../common/constants';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import styles from './card.module.pcss';

export interface ICardProps {
  children?: React.ReactNode;
  bordered?: boolean;
  variant?: string;
  variantAs?: string;
}

class Card extends React.Component<ICardProps> {
  public static Header = CardHeader;
  public static Content = CardContent;
  public static Footer = CardFooter;
  static defaultProps: ICardProps = { bordered: false, variant: 'surface', variantAs: '500' };

  public render() {
    const { children, bordered, variant, variantAs } = this.props;
    const classes = classNames(
      styles.cardBordered,
      `border-${variantName[variant]}-${variantIntensity[variantAs]}`,
    );

    return(
      <div className={styles.card}>
        {bordered && <div className={classes} />}
        {children}
      </div>
    );
  }
}

export default Card;
