import { Aspect } from "@lottuseducation/design_system";
import React, { useState } from "react";
import cn from "classnames";
import { Card } from "@lottuseducation/design_system";

import { useKeenSlider } from "keen-slider/react";
import { CarouselType } from "../types/carousel.types";

const Carousel: React.FC<CarouselType> = (props: CarouselType) => {
  const { data, variant = "card" } = props;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const stylesBaseControls =
    "select-none absolute p-4 rounded-lg text-sm w-p:hidden";
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 24 },
      },
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
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
      <section className="w-d:w-11/12 w-t:w-11/12 w-p:w-full mx-auto">
        <div ref={sliderRef} className="keen-slider ">
          {data.map((card: any, i: number) => (
            <section key={`card-item-${i}`}>
              {variant === "card" ? (
                <div className="keen-slider__slide h-full">
                  <Card
                    imageUrl={card?.imageUrl}
                    title={card?.title}
                    content={card?.content}
                    subtitle={card?.subtitle}
                    orientation="vertical"
                    imageAspectRatio="2/1"
                    textLink={card?.textLink}
                  />
                </div>
              ) : (
                <div className="keen-slider__slide">
                  <Aspect ratio="1/1">
                    <img
                      className="w-full h-full object-cover object-center"
                      src={card?.imageUrl}
                      alt="card-img"
                    />
                  </Aspect>
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
      {loaded && instanceRef.current && (
        <>
          <div
            className={cn(
              "z-20 left-0 top-[35%]  w-t:block hidden cursor-pointer",
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
              "z-20 right-0  top-[35%] w-t:block hidden cursor-pointer",
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
          <div className={cn("w-full flex justify-center gap-2 mt-6 dots")}>
            {data.map((_: any, i: number) => (
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
export default Carousel;
