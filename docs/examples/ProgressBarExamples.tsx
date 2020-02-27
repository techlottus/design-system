import * as React from 'react';
import ProgressBar from '../../packages/ProgressBar';

const ProgressBarExample = () => {
  let [value, setValue] = React.useState(0);

  const initInterval = () => {
    if (value >= 100) {
      setValue(0);
    } else {
      const progressInterval = setInterval(() => {
        if (value <= 100) {
          setValue(value += 1);
        } else {
          clearInterval(progressInterval);
        }
      }, 30);
    }
  };

  const classes = `
    mt-4
    py-2
    px-6
    bg-secondary-300
    text-white
    font-bold
    rounded
  `;
  const label = value >= 100 ? 'Reiniciar' : 'Iniciar';

  return (
    <React.Fragment>
      <ProgressBar value={value}/>
      <button className={classes} onClick={initInterval}>{label}</button>
    </React.Fragment>
  );

};

export default ProgressBarExample;
