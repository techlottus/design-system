import { Heading } from "@lottuseducation/design_system";
import { Button } from "@lottuseducation/design_system";
import {
  getPositionSliderContainerText,
  getClassBannerPositionButton,
} from "@lottuseducation/design_system";
import { getTextCount } from "@lottuseducation/design_system";
import React from "react";
import { SliderContentType } from "../types/Slider.types";

const SliderContent: React.FC<SliderContentType> = (
  props: SliderContentType
) => {
  const {
    title,
    content,
    button,
    position = "left-top",
    className = "",
  } = props;

  return (
    <div className={className}>
      <div
        id="slider-content"
        className={getPositionSliderContainerText(position)}
      >
        <div className="w-3/5">
          {title && (
            <div>
              <Heading
                title={getTextCount(title, 53)}
                variant="h-3"
                font="secondary"
                className="font-semibold"
              />
            </div>
          )}
          {content && (
            <div className="py-4">
              <Heading
                title={getTextCount(content, 132)}
                variant="h-6"
                font="secondary"
              />
            </div>
          )}
          {button && (
            <div className={getClassBannerPositionButton(position)}>
              <Button {...button} />
            </div>
          )}
        </div>
      </div>
      <div
        id="slider-content-mobile"
        className="w-full h-full flex flex-col w-t:hidden "
      >
        <div className="py-4 text-surface-800">
          <Heading title={title} variant="h-3" font="secondary" />
        </div>
        <div className="pb-4 text-surface-800 font-Poppins">
          <Heading title={content} variant="h-6" font="secondary" />
        </div>
        {button && (
          <div className="pb-4 font-Poppins">
            <Button
              label={button?.label}
              variant="primary"
              size="sm"
              className="min-w-full flex justify-center"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderContent;
