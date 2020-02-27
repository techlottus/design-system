import React from 'react';
import Drawer from '../../packages/Drawer';
import Button from '../../packages/Button';

const DrawerExample = () => {
  const [isDrawerRight, setDrawerRight] = React.useState(false);
  const [isDrawerLeft, setDrawerLeft] = React.useState(false);
  const [isDrawerBottom, setDrawerBottom] = React.useState(false);
  return (
    <div className='flex flex-col md:flex-row justify-between'>
      <Button size='md' variant='terciary' disabled={false} block={false} onClick={() => setDrawerRight(true)}>Show Drawer Right</Button>

      <Drawer
        isVisible={isDrawerRight}
        onClose={() => setDrawerRight(false)}
        position='right'
      >
        <p>Content</p>

      </Drawer>

      <Button size='md' variant='terciary' className='my-2 md:my-0' disabled={false} block={false} onClick={() => setDrawerLeft(true)}>
        Show Drawer Left
      </Button>

      <Drawer
        isVisible={isDrawerLeft}
        onClose={() => setDrawerLeft(false)}
        position='left'
      >
        <p>Content</p>

      </Drawer>

      <Button size='md' variant='terciary' disabled={false} block={false} onClick={() => setDrawerBottom(true)}>Show Drawer Bottom</Button>

      <Drawer
        isVisible={isDrawerBottom}
        onClose={() => setDrawerBottom(false)}
        position='bottom'
      >
        <p>Content</p>

      </Drawer>

    </div>
  );
};

export default DrawerExample;
