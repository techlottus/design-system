import { Aspect } from "@lottuseducation/design_system";
import { useState } from "react";
import cn from "classnames";
import SliderContent from "../SliderContent";

import { useKeenSlider } from "keen-slider/react";

const sliderImageStyles: any = {
  dark: { filter: "brightness(0.5)" },
  light: { opacity: "0.5" },
};

const Slider = (props: any) => {
  const { slides } = props;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const stylesBaseControls =
    "select-none absolute top-1.5 p-4 rounded-lg text-sm sm:hidden";
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 0 },
      },
      "(min-width: 600px)": {
        slides: { perView: 1, spacing: 0 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 1, spacing: 0 },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const activeBulletSlide = (position: any) => {
    instanceRef.current?.moveToIdx(position);
  };

  return (
    <section className="flex flex-col relative w-full my-6">
      <section className="w-full  mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide: any, i: any) => (
            <section key={`slide-item-${i}`}>
              <div className="keen-slider__slide">
                <div className="flex w-full hidden md:flex ">
                  <Aspect ratio="2/1">
                    <img
                      style={sliderImageStyles[slide?.overlay]}
                      className="w-full h-full object-cover object-center"
                      src={slide?.url}
                      alt="slider-img"
                    />
                    <div className="absolute w-full h-full top-0 left-0 ">
                      <SliderContent
                        title={slide?.title}
                        text={slide?.text}
                        btn={slide?.btn}
                        contentVariant={slide?.contentVariant}
                        position={slide?.position}
                        className={slide?.className}
                      />
                    </div>
                  </Aspect>
                </div>
                <div className="md:hidden flex flex-col px-6 w-full ">
                  <Aspect ratio="1/1">
                    <img
                      style={sliderImageStyles[slide?.overlay]}
                      className="w-full h-full object-cover object-center"
                      src={slide?.url}
                      alt="slider-img"
                    />
                  </Aspect>
                  <SliderContent
                    title={slide?.title}
                    text={slide?.text}
                    btn={slide?.btn}
                    contentVariant={slide?.contentVariant}
                    position={slide?.position}
                    className={slide?.className}
                  />
                </div>
              </div>
            </section>
          ))}{" "}
        </div>
      </section>

      {loaded && instanceRef.current && (
        <>
          <div
            className={cn(
              "z-20 left-8  md:block hidden cursor-pointer w-14 h-14 rounded-lg bg-neutral-200 opacity-50 flex items-center align-middle justify-center ",
              stylesBaseControls
            )}
          >
            <span
              className="material-icons"
              onClick={() => {
                instanceRef.current?.prev();
              }}
            >
              arrow_back_ios
            </span>
          </div>
          <div
            className={cn(
              "z-20 right-8  md:block hidden cursor-pointer  w-14 h-14 rounded-lg bg-neutral-200 opacity-50 flex items-center align-middle justify-center",
              stylesBaseControls
            )}
          >
            <span
              className="material-icons"
              onClick={() => instanceRef.current?.next()}
            >
              arrow_forward_ios
            </span>
          </div>
          <div
            className={cn(
              "w-full flex justify-center gap-2 pt-6  absolute bottom-0 "
            )}
          >
            {slides.map((_: any, i: any) => (
              <div
                key={`bullet-item-${i}`}
                onClick={() => activeBulletSlide(i)}
                className={cn(
                  "h-4 bg-neutral-600 rounded-full cursor-pointer",
                  {
                    "w-4": i !== currentSlide,
                    "w-8": i === currentSlide,
                  }
                )}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
export default Slider;
