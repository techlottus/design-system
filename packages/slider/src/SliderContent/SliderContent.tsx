import cn from "classnames";
import { Heading } from "@lottuseducation/design_system";
import { Button } from "@lottuseducation/design_system";
import {
  getPositionSliderContainerText,
  getClassBannerPositionButton,
} from "@lottuseducation/design_system";
import { getTextCount } from "@lottuseducation/design_system";
import React from "react";

interface sliderContentVariations {
  contentVariant: string;
  position: "left-top" | "left-middle" | "left-bottom";
  className: string;
}

interface sliderContentProps extends sliderContentVariations {
  title: string;
  text: string;
  btn: {
    label: string;
  };
}
const defaultValues: sliderContentVariations = {
  contentVariant: "dark",
  position: "left-top",
  className: "",
};
const SliderContent: React.FC<sliderContentProps> = (
  props: sliderContentProps
) => {
  const {
    title,
    text,
    btn,
    contentVariant = defaultValues.contentVariant,
    position = defaultValues.position,
    className = defaultValues.className,
  } = props;
  const textColor = cn("pb-4 font-secondary", {
    ["text-neutral-100"]: contentVariant === "light",
    ["text-neutral-800"]: contentVariant === "dark",
  });
  return (
    <>
      <div className={className}>
        <div
          id="slider-content"
          className={getPositionSliderContainerText(position)}
        >
          <div className="w-3/5">
            {title ? (
              <div className={textColor}>
                <Heading
                  title={getTextCount(title, 53)}
                  type="h-3"
                  font="secondary"
                  className="font-semibold"
                />
              </div>
            ) : (
              ""
            )}
            {text ? (
              <div className={textColor}>
                <Heading
                  title={getTextCount(text, 132)}
                  type="h-6"
                  font="secondary"
                />
              </div>
            ) : (
              ""
            )}
            {btn ? (
              <div className={getClassBannerPositionButton(position)}>
                <Button
                  id="btn-slider-content"
                  variant={
                    contentVariant === "light" ? "outlined-negative" : "primary"
                  }
                  size="sm"
                  {...btn}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          id="slider-content-mobile"
          className="w-full h-full flex flex-col md:hidden "
        >
          <div className="py-4 text-neutral-800">
            <Heading title={title} type="h-3" font="secondary" />
          </div>
          <div className="pb-4 text-neutral-800 font-secondary">
            <Heading title={text} type="h-6" font="secondary" />
          </div>
          {btn ? (
            <div className="pb-4 font-secondary">
              <Button
                id="btn-slider-content-mobile"
                variant="primary"
                size="sm"
                className="min-w-full flex justify-center"
                {...btn}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default SliderContent;
