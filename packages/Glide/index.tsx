import * as React from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import GlideItem from './GlideItem';
import './styles.css';

interface GlideContainerProps {
  children?: any;
  element: string;
  type: 'carousel' | 'slider';
  startAt?: number;
  perView?: number;
  focusAt?: number | 'center';
  gap?: number;
  autoplay?: number | boolean;
  hoverpause?: boolean;
  keyboard?: boolean;
  bound?: boolean;
  swipeThreshold?: number | boolean;
  animationDuration?: number;
  rewind?: boolean;
  rewindDuration?: number;
  dots?: boolean;
  breakpoints?: object;
}

class GlideContainer extends React.Component<GlideContainerProps> {
  static defaultProps: GlideContainerProps;
  constructor(props: GlideContainerProps) {
    super(props);
  }

  state = {
    slider: null,
  };

  componentDidMount() {
    const {
      element,
      type,
      startAt,
      perView,
      focusAt,
      gap,
      autoplay,
      hoverpause,
      keyboard,
      bound,
      swipeThreshold,
      animationDuration,
      rewind,
      rewindDuration,
      breakpoints,
    } = this.props;

    const glide = new Glide(`.${element}`, {
      type,
      startAt,
      perView,
      focusAt,
      gap,
      autoplay,
      hoverpause,
      keyboard,
      bound,
      swipeThreshold,
      animationDuration,
      rewind,
      rewindDuration,
      breakpoints,
    }).mount();

    this.setState({
      slider: glide,
    });
  }

  goNext = () => {
    const { slider } = this.state;
    slider.go('>');
  }

  goPrev = () => {
    const { slider } = this.state;
    slider.go('<');
  }

  componentWillUnmount() {
    this.state.slider.destroy();
  }

  render() {
    const { children, dots, element } = this.props;
    return (
      <div className={element}>
        <div className='glide__track' data-glide-el='track'>
          <div className='glide__slides'>
            {children ? React.Children.map(children, child => (
              <GlideItem>{React.cloneElement(child)}</GlideItem>
            )) : <div className='glide__slide' />}
          </div>
        </div>

        {children && children.length > 0 && dots ?
          <div className='glide__bullets' data-glide-el='controls[nav]'>
            {children.map((_, index) => {
              return <button key={index} className='glide__bullet' data-glide-dir={`=${index}`} />;
            })}
          </div> : false}
      </div>
    );
  }
}

GlideContainer.defaultProps = {
  element: 'custom',
  type: 'carousel',
  startAt: 0,
  perView: 1,
  focusAt: 0,
  gap: 10,
  autoplay: false,
  hoverpause: true,
  keyboard: true,
  bound: true,
  swipeThreshold: 80,
  animationDuration: 400,
  rewind: true,
  rewindDuration: 800,
  dots: true,
  breakpoints: {},
};

export default GlideContainer;
