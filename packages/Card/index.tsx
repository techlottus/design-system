import * as React from 'react';

interface CardProps {
  children: React.ReactNode;
  bordered?: boolean;
  variant?: string;
  variantAs?: string;
}

const variantName = {
  surface: 'surface',
  primary: 'primary',
  secondary: 'secondary',
  technology: 'technology',
  english: 'english',
  business: 'business',
  prepa: 'prepa',
};

const variantIntensity = {
  50: '50',
  100: '100',
  200: '200',
  300: '300',
  400: '400',
  500: '500',
  600: '600',
  700: '700',
  800: '800',
  900: '900',
  950: '950',
};

const CardMeta: React.SFC<CardProps> = ({ children, bordered, variant, variantAs }: CardProps) => (
  <div className={`max-w-sm rounded overflow-hidden shadow-up-box mx-auto`}>
    {bordered && <div className={`border-t-8 rounded-card border-${variantName[variant]}-${variantIntensity[variantAs]}`} />}
    {children}
  </div>
);

CardMeta.defaultProps = {
  bordered: false,
  variant: 'surface',
  variantAs: '500',
};

export default CardMeta;
