import * as React from 'react';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.SFC<ProgressBarProps> = ({percentage}: ProgressBarProps) => {
  return (
    <div className='w-full bg-surface-100 rounded'>
      <span className='h-full bg-surface-500' style={{width: '25%'}}></span>
    </div>
  );
};

export default ProgressBar;
