import * as React from 'react';
import classNames from 'classnames';
import { variantIntensity, variantName } from '../common/constants';

interface IProgressBarProps {
  value: number;
  variant?: string;
  variantAs?: string;
}

const ProgressBar: React.SFC<IProgressBarProps> = ({value, variant, variantAs}: IProgressBarProps) => {
  const classes = classNames(
    'h-full rounded',
    `bg-${variantName[variant]}-${variantIntensity[variantAs]}`,
  );
  return (
    <div className='w-full h-2 bg-surface-100 rounded'>
      <div
        className={classes}
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
