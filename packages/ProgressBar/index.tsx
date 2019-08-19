import * as React from 'react';
import classNames from '../common/classnames';
import { variantIntensity, variantName } from '../common/constants';
import style from './progressbar.module.pcss';

interface IProgressBarProps {
  value: number;
  variant?: string;
  variantAs?: string;
}

const ProgressBar: React.SFC<IProgressBarProps> = ({value, variant, variantAs}: IProgressBarProps) => {
  const classes = classNames(
    style.progressBar,
    `bg-${variantName[variant]}-${variantIntensity[variantAs]}`,
  );
  return (
    <div className={style.progress}>
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
