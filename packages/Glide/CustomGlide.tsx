import * as React from 'react';
import GlideContainer from './index';
import Card from '../Card';
import CardHeader from '../Card/CardHeader';
import CardContent from '../Card/CardContent';
import CardFooter from '../Card/CardFooter';
import Button from '../Button';

class CustomGlide extends React.Component {
  myRef: any;
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  next = () => {
    this.myRef.current.goNext();
  }
  prev = () => {
    this.myRef.current.goPrev();
  }
  render() {
    return (
      <React.Fragment>
        <button className='bg-english-500 py-2 px-4 rounded mr-2' onClick={this.prev}>Prev</button>
        <button className='bg-english-500 py-2 px-4 rounded' onClick={this.next}>Next</button>
        <GlideContainer ref={this.myRef}>
          <Card>
            <CardHeader>
              <img
                className='rounded-lg shadow-xl h-56 w-full object-fit object-center'
                src='https://bedu.org/wp-content/uploads/Bedu07_ux_frontend.png' />
            </CardHeader>
            <CardContent className='px-5 py-5'>
              <div className='text-xl font-montserrat font-bold text-surface-900 mb-2'>
                Fullstack JavaScript
              </div>
              <p className='font-base text-surface-700'>
                Aprende a desarrollar web apps de forma fluida y autónoma con el ecosistema tecnológico más popular.
              </p>
            </CardContent>
            <CardFooter>
              <Button size='md' variant='primary'>Ver más</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <img
                className='rounded-lg shadow-xl h-56 w-full object-fit object-center'
                src='https://bedu.org/wp-content/uploads/Bedu07_ux_frontend.png' />
            </CardHeader>
            <CardContent className='px-5 py-5'>
              <div className='text-xl font-montserrat font-bold text-surface-900 mb-2'>
                Fullstack JavaScript
              </div>
              <p className='font-base text-surface-700'>
                Aprende a desarrollar web apps de forma fluida y autónoma con el ecosistema tecnológico más popular.
              </p>
            </CardContent>
            <CardFooter>
              <Button size='md' variant='primary'>Ver más</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <img
                className='rounded-lg shadow-xl h-56 w-full object-fit object-center'
                src='https://bedu.org/wp-content/uploads/Bedu07_ux_frontend.png' />
            </CardHeader>
            <CardContent className='px-5 py-5'>
              <div className='text-xl font-montserrat font-bold text-surface-900 mb-2'>
                Fullstack JavaScript
              </div>
              <p className='font-base text-surface-700'>
                Aprende a desarrollar web apps de forma fluida y autónoma con el ecosistema tecnológico más popular.
              </p>
            </CardContent>
            <CardFooter>
              <Button size='md' variant='primary'>Ver más</Button>
            </CardFooter>
          </Card>
        </GlideContainer>
      </React.Fragment>
    );
  }
}

export default CustomGlide;
