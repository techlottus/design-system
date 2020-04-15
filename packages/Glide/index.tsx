import * as React from 'react';
import Glide from '@glidejs/glide';
import Html from '@glidejs/glide/src/components/html';
import GlideItem from './GlideItem';

interface IGlideContainerProps {
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
  dragThreshold?: number | boolean;
  perTouch?: number | boolean;
  touchRatio?: number;
  touchAngle?: number;
  animationDuration?: number;
  rewind?: boolean;
  rewindDuration?: number;
  direction?: 'ltr' | 'rtl';
  peek?: number | object;
  breakpoints?: object;
  dots?: boolean;
}

class GlideContainer extends React.Component<IGlideContainerProps , any> {
  static defaultProps: IGlideContainerProps = {
    element: 'custom',
    type: 'slider',
    startAt: 0,
    perView: 1,
    focusAt: 0,
    gap: 10,
    autoplay: false,
    hoverpause: true,
    keyboard: false,
    bound: false,
    swipeThreshold: 80,
    dragThreshold: 120,
    perTouch: false,
    touchRatio: 0.5,
    touchAngle: 45,
    animationDuration: 400,
    rewind: true,
    rewindDuration: 800,
    direction: 'ltr',
    peek: 0,
    breakpoints: {},
    dots: true,
  };

  constructor(props: IGlideContainerProps) {
    super(props);
    this.state = {
      slider: new Glide(`.${props.element}`, {
        type: props.type,
        startAt: props.startAt,
        perView: props.perView,
        focusAt: props.focusAt,
        gap: props.gap,
        autoplay: props.autoplay,
        hoverpause: props.hoverpause,
        keyboard: props.keyboard,
        bound: props.bound,
        swipeThreshold: props.swipeThreshold,
        dragThreshold: props.dragThreshold,
        perTouch: props.perTouch,
        touchRatio: props.touchRatio,
        touchAngle: props.touchAngle,
        animationDuration: props.animationDuration,
        rewind: props.rewind,
        rewindDuration: props.rewindDuration,
        direction: props.direction,
        peek: props.peek,
        breakpoints: props.breakpoints,
      }),
    };
  }

  componentDidMount() {
    const {slider} = this.state;
    slider.mount({
      Html: this.HtmlFix
    });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.children.length !== this.props.children.length) {
      this.state.slider.update({
        startAt: 0,
      });
    }
  }
  componentWillUnmount() {
    const {slider} = this.state;
    slider.destroy();
  }

  HtmlFix = (Glide, Components, Events) => {
    const HtmlFix = Html(Glide, Components, Events);
    Events.on('update', () => {
        HtmlFix.mount();
    });
    return HtmlFix;
  }

  goNext = () => {
    const { slider } = this.state;
    slider.go('>');
  }

  goPrev = () => {
    const { slider } = this.state;
    slider.go('<');
  }

  render() {
    const { dots, children, element } = this.props;
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
          <div className='glide__bullets mt-3' data-glide-el='controls[nav]'>
            {children.map((_, index) => {
              return <button key={index} className='glide__bullet ml-3 h-4 w-4' aria-label='Bullet' data-glide-dir={`=${index}`} />;
            })}
          </div> : false}
      </div>
    );
  }
}
export default GlideContainer;
