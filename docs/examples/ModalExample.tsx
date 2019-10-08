import React from 'react';
import Modal from '../../packages/Modal';
import Button from '../../packages/Button';
import Input from '../../packages/Input';

interface IModalExampleProps {
  noEscape?: boolean;
}

const ModalExample = ({noEscape}: IModalExampleProps) => {
  const [isModal, setModal] = React.useState(false);

  return (
    <React.Fragment>
      <Button size='md' variant='terciary' disabled={false} block={false} onClick={() => setModal(true)}>Show Modal</Button>
      <Modal
        isVisible={isModal}
        onClose={!noEscape ? () => setModal(false) : null}
        noEscape={noEscape ? noEscape : null}
      >
        <div className='flex flex-col items-start'>
          <h3 className='mt-4 font-montserrat font-bold text-xl md:text-3xl'>¡Descarga el temario completo!</h3>
          <h4 className='font-rubik text-surface-700 text-base'>Compártenos tus datos para agendar tu clase muestra.</h4>
        </div>
        <div className='overflow-auto'>
          <div className='pt-7'>
            <Input />
            <div className='flex flex-col md:flex-row pt-5 justify-between'>
              <Input />
              <Input className='ml-0 md:ml-4 mt-4 md:mt-0' />
            </div>
          </div>
        </div>
        <div className='pt-10 flex flex-col justify-end md:flex-row w-full md:w-auto'>
          <Button size='md' variant='terciary' disabled={false} block={false} onClick={() => setModal(false)} >Cancelar</Button>
          <Button size='md' variant='primary' className='ml-0 md:ml-4 mt-4 md:mt-0' disabled={false} block={false}>Descargar el temario</Button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ModalExample;
