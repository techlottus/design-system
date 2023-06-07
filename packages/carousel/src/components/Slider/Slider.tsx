import { Aspect } from "@lottuseducation/design_system";
import { useState } from "react";
import cn from "classnames";
import { Card } from "@lottuseducation/design_system";

import { useKeenSlider } from "keen-slider/react";
<<<<<<<< HEAD:packages/carousel/src/components/Slider/Slider.tsx
const sliderImageStyles: any = {
  dark: { filter: "brightness(0.5)" },
  light: { opacity: "0.5" },
};
const Slider = (props: any) => {
  const { slides } = props;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
========

const Carousel = (props: any) => {
  const { data, variant } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
>>>>>>>> develop:packages/carousel/src/components/Carousel/Carousel.tsx
  const stylesBaseControls =
    "material-icons select-none absolute top-[35%] p-1 rounded-lg text-[12px] w-p:hidden";
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
<<<<<<<< HEAD:packages/carousel/src/components/Slider/Slider.tsx
========
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
>>>>>>>> develop:packages/carousel/src/components/Carousel/Carousel.tsx
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
      console.log(slider);
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
      <section className="lg:w-[90%] md:w-[95%] sm:w-[90%] mx-auto">
        <div ref={sliderRef} className="keen-slider ">
          {data.map((card: any, i: any) => (
            <section key={`card-item-${i}`}>
              {variant === "card" ? (
                <div className="keen-slider__slide h-full">
                  <Card
                    imageUrl={card?.imageUrl}
                    title={card?.title}
                    text={card?.text}
                    subtitle={card?.subtitle}
                    type="vertical"
                    aspectRatio="2/1"
                    link={card?.link}
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
              "z-20 left-0 w-p:invisible w-t:invisible cursor-pointer",
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
              "z-20 right-0 w-p:invisible w-t:invisible cursor-pointer",
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
            {data.map((_: any, i: any) => (
              <div
                key={`bullet-item-${i}`}
                onClick={() => activeBulletSlide(i)}
                className={cn("h-4 bg-[#686868] rounded-full cursor-pointer", {
                  "w-4": i !== currentSlide,
                  "w-8": i === currentSlide,
                })}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
export default Carousel;