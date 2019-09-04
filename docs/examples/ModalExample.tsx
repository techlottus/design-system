import React from 'react';
import Modal from '../../packages/Modal';
import Button from '../../packages/Button';
import Input from '../../packages/Input';

const ModalExample = () => {
  const [isModal, setModal] = React.useState(false);

  const FooterContent = (<div className='pt-10 flex flex-col md:flex-row w-full md:w-auto'>
    <Button size='md' variant='terciary' disabled={false} block={false} onClick={() => setModal(false)} >Cancelar</Button>
    <Button size='md' variant='primary' className='ml-0 md:ml-4 mt-4 md:mt-0' disabled={false} block={false}>Descargar el temario</Button>
  </div>);

  const ModalContent = (
    <div className='pt-7'>
      <Input />

      <div className='flex flex-col md:flex-row pt-5 justify-between'>
        <Input />
        <Input className='ml-0 md:ml-4 mt-4 md:mt-0' />
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Button size='md' variant='terciary' disabled={false} block={false} onClick={() => setModal(true)}>Show Modal</Button>
      <Modal
        isVisible={isModal}
        title='¡Descarga el temario completo!'
        subtitle='Compártenos tus datos para agendar tu clase muestra.'
        content={ModalContent}
        footer={FooterContent}
        onClose={() => setModal(false)}
      />
    </React.Fragment>
  );
};

export default ModalExample;
