import { Aspect } from "@lottuseducation/design_system";
import React, { useState } from "react";
import cn from "classnames";
import SliderContent from "../SliderContent";

import { useKeenSlider } from "keen-slider/react";
import { SlideType, SliderType } from "../types/Slider.types";

const Slider: React.FC<SliderType> = (props: SliderType) => {
  const { slides } = props;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const stylesBaseControls =
    "select-none absolute  p-4 rounded-lg text-sm w-p:hidden";
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

  const activeBulletSlide = (position: number) => {
    instanceRef.current?.moveToIdx(position);
  };

  return (
    <section className="flex flex-col relative w-full my-6">
      <section className="w-full  mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide: SlideType, i: number) => (
            <section key={`slide-item-${i}`}>
              <div className="keen-slider__slide">
                <div className="flex w-full hidden w-t:flex ">
                  <Aspect ratio="2/1">
                    <img
                      className={cn(
                        "w-full h-full object-cover object-center",
                        {
                          ["opacity-50"]: slide?.overlay === "light",
                          ["brightness-50"]: slide?.overlay === "dark",
                        }
                      )}
                      src={slide?.imageUrl}
                      alt="slider-img"
                    />
                    <div className="absolute w-full h-full top-0 left-0 ">
                      <SliderContent {...slide} />
                    </div>
                  </Aspect>
                </div>
                <div className="w-t:hidden flex flex-col px-6 w-full ">
                  <Aspect ratio="1/1">
                    <img
                      className={cn(
                        "w-full h-full object-cover object-center",
                        {
                          ["opacity-50"]: slide?.overlay === "light",
                          ["brightness-50"]: slide?.overlay === "dark",
                        }
                      )}
                      src={slide?.imageUrl}
                      alt="slider-img"
                    />
                  </Aspect>
                  <SliderContent {...slide} />
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
              "z-20 left-8 top-[35%]  w-t:block hidden cursor-pointer w-14 h-14 rounded-lg bg-surface-200 opacity-50 flex items-center align-middle justify-center ",
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
              "z-20 right-8 top-[35%]  w-t:block hidden cursor-pointer  w-14 h-14 rounded-lg bg-surface-200 opacity-50 flex items-center align-middle justify-center",
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
            {slides.map((_: SlideType, i: number) => (
              <div
                key={`bullet-item-${i}`}
                onClick={() => activeBulletSlide(i)}
                className={cn(
                  "h-4 bg-surface-600 rounded-full cursor-pointer",
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
