import cn from "classnames";
import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { useKeenSlider } from "keen-slider/react";
import type { SliderOptions } from "../types/options";

// ---
type SliderItemProps = {
  children?: React.ReactNode;
  className?: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ children, className })=> 
  <div className={cn("keen-slider__slide", className)}>{children}</div>

// ---
type SliderRef = {
  prev: () => void;
  next: () => void;
}

type SliderProps = {
  children?: React.ReactNode;
  dots?: boolean;
  options?: SliderOptions;
}

const SliderRoot = forwardRef(({
  children,
  options = {},
}: SliderProps, ref: ForwardedRef<SliderRef>) => {
  const [internalRef, slider] = useKeenSlider<HTMLDivElement>(options);

  useImperativeHandle(ref, () => {
    return {
      next: () => { slider?.next() },
      prev: () => { slider?.prev() },
    };
  });

  return (
    <div ref={internalRef} className="keen-slider">
      {children}
    </div>
  );
})

export const Slider = Object.assign(SliderRoot, { Item: SliderItem });
export type { SliderRef };