import React from 'react';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import GlideContainer from '../../packages/Glide';
import Card from '../../packages/Card';
import Button from '../../packages/Button';
import Icon from '../../packages/Icon';

const data = {
  mx: [
    {
      img: 'https://ucarecdn.com/6db0d613-ea78-4417-9aa8-22075bb08f99/-/scale_crop/320x210/smart/-/format/webp/',
      title: 'UX & Front end',
      description: 'Comienza tu camino en la programación y aprende los pilares del desarrollo web para construir web apps desde cero.',
      button: true,
      difficulty: 'Básico',
      months: '6',
      newCourse: true,
    },
    {
      img: 'https://ucarecdn.com/6db0d613-ea78-4417-9aa8-22075bb08f99/-/scale_crop/320x210/smart/-/format/webp/',
      title: 'Back-end Python',
      description: 'Comienza tu camino en la programación y aprende los pilares del desarrollo web para construir web apps desde cero.',
      button: true,
      difficulty: 'Medio',
      months: '6',
      newCourse: false,
    },
    {
      img: 'https://ucarecdn.com/6db0d613-ea78-4417-9aa8-22075bb08f99/-/scale_crop/320x210/smart/-/format/webp/',
      title: 'Fullstack',
      description: 'Comienza tu camino en la programación y aprende los pilares del desarrollo web para construir web apps desde cero.',
      button: true,
      difficulty: 'Avanzado',
      months: '6',
      newCourse: false,
    },
    {
      img: 'https://ucarecdn.com/6db0d613-ea78-4417-9aa8-22075bb08f99/-/scale_crop/320x210/smart/-/format/webp/',
      title: 'Escala',
      description: 'Comienza tu camino en la programación y aprende los pilares del desarrollo web para construir web apps desde cero.',
      button: true,
      difficulty: 'Medio',
      months: '6',
      newCourse: false,
    },
    {
      img: 'https://ucarecdn.com/6db0d613-ea78-4417-9aa8-22075bb08f99/-/scale_crop/320x210/smart/-/format/webp/',
      title: 'Emprende',
      description: 'Comienza tu camino en la programación y aprende los pilares del desarrollo web para construir web apps desde cero.',
      button: true,
      difficulty: 'Avanzado',
      months: '6',
      newCourse: false,
    },
    {
      img: 'https://ucarecdn.com/6db0d613-ea78-4417-9aa8-22075bb08f99/-/scale_crop/320x210/smart/-/format/webp/',
      title: 'Emprende',
      description: 'Comienza tu camino en la programación y aprende los pilares del desarrollo web para construir web apps desde cero.',
      button: true,
      difficulty: 'Avanzado',
      months: '6',
      newCourse: false,
    },
    {
      img: 'https://ucarecdn.com/6db0d613-ea78-4417-9aa8-22075bb08f99/-/scale_crop/320x210/smart/-/format/webp/',
      title: 'Emprende',
      description: 'Comienza tu camino en la programación y aprende los pilares del desarrollo web para construir web apps desde cero.',
      button: true,
      difficulty: 'Avanzado',
      months: '6',
      newCourse: false,
    },
    {
      img: 'https://ucarecdn.com/6db0d613-ea78-4417-9aa8-22075bb08f99/-/scale_crop/320x210/smart/-/format/webp/',
      title: 'Emprende',
      description: 'Comienza tu camino en la programación y aprende los pilares del desarrollo web para construir web apps desde cero.',
      button: true,
      difficulty: 'Avanzado',
      months: '6',
      newCourse: false,
    },
  ],
  mty: [
    {
      img: 'https://ucarecdn.com/6db0d613-ea78-4417-9aa8-22075bb08f99/-/scale_crop/320x210/smart/-/format/webp/',
      title: 'MONTERREY',
      description: 'Comienza tu camino en la programación y aprende los pilares del desarrollo web para construir web apps desde cero.',
      button: true,
      difficulty: 'Básico',
      months: '6',
      newCourse: true,
    },
  ]
};

class CustomGlide extends React.Component<any, { city: string }> {
  myRef: any;
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      city: 'mx',
    }
  }
  next = () => {
    this.myRef.current.goNext();
  }
  prev = () => {
    this.myRef.current.goPrev();
  }

  handleChange = (event: any) => {
    this.setState({ city: event.target.value });
  }

  render() {

    return (
      <React.Fragment >
        <div className='mb-2'>
          <button className='bg-english-500 py-2 px-4 rounded mr-2' onClick={this.prev}>Prev</button>
          <button className='bg-english-500 py-2 px-4 rounded' onClick={this.next}>Next</button>
          <select value={this.state.city} onChange={this.handleChange} className='ml-3'>
            <option value='mx'>Ciudad de México</option>
            <option value='mty'>Monterrey</option>
          </select>
        </div>
        <GlideContainer ref={this.myRef}
          element='super-glide'
          dots={false}
          startAt={0}
          perView={3}
          gap={32}
          breakpoints={
            {
              550: {
                perView: 1,
                peek: {
                  before: 20,
                  after: 60
                },
              },
              700: {
                perView: 1,
                peek: {
                  before: 20,
                  after: 80
                },
              },
              1024: {
                perView: 2,
                peek: {
                  before: 20,
                  after: 80
                },
              },
            }
          }
        >
          {data[`${this.state.city}`].map(({ img, title, description, button, difficulty, months, newCourse }, index) => {
            return (
              <Card key={index} bordered variant='english' variantAs='800'>
                <Card.Header>
                  <img
                    className='relative rounded-lg h-32 w-full object-fit object-center'
                    src={img} />
                  {newCourse &&
                    <span className='absolute top-0 mt-6 ml-5 inline-block bg-primary-500 text-white text-xs px-2 py-1 rounded font-rubik'>
                      Nuevo Curso
                          </span>
                  }
                </Card.Header>
                <Card.Content className='flex flex-col px-6 py-3 h-74'>
                  <div className='flex justify-between leading-none items-center'>
                    <h2 className='flex w-full text-xl font-bold font-montserrat'>{title}</h2>
                    <div
                      className='flex flex-col text-white p-1 justify-center items-center bg-surface-500 w-12 h-12 rounded -mt-16 relative'>
                      <span>06</span>Ago</div></div>
                  <div className='flex items-center mt-1 text-base font-rubik leading-tight'>
                    <div>
                      <span>{difficulty}</span>
                    </div>
                    <div className='flex items-center justify-center ml-4'>
                      <Icon size={14} icon='icon-clock' className='text-secondary-500' />
                      <span className='ml-1'>{months} meses</span>
                    </div>
                  </div>
                  <p className='flex flex-grow leading-tight mt-2'>
                    {description}
                  </p>
                  {button &&
                    <Card.Footer className='mt-5 w-full'>
                      <Button size='md' variant='primary' className='w-full flex justify-center'>Ver más</Button>
                    </Card.Footer>}
                </Card.Content>
              </Card>
            );
          })}
        </GlideContainer>
      </React.Fragment>
    );
  }
}

export default CustomGlide;
