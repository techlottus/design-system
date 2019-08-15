import * as React from 'react';

interface ProgressBarProps {
  value: number;
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

const ProgressBar: React.SFC<ProgressBarProps> = ({value, variant, variantAs}: ProgressBarProps) => {
  return (
    <div className='w-full h-2 bg-surface-100 rounded'>
      <div
        className={`h-full rounded bg-${variantName[variant]}-${variantIntensity[variantAs]}`}
        style={{width: `${value}%`, maxWidth: '100%'}}>
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  value: 0,
  variant: 'primary',
  variantAs: '200',
};

export default ProgressBar;
