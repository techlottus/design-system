import React from "react";
import cn from "classnames";
import Heading from "../Heading";
import Button from "../Button";
import {
  getPositionContainerText,
  getClassBannerPositionButton,
} from "../helpers/classesHelper";
import { getTextCount } from "../helpers/textHelper";
import { BannerContentConfig } from "../Types/Banner.types";

const BannerContent: React.FC<BannerContentConfig> = (
  props: BannerContentConfig
) => {
  const {
    title,
    content,
    button,
    contentVariant = "dark",
    size = "lg",
    position = "left-top",
    className = "",
  } = props;
  const textColor = cn("pb-4 font-Poppins", {
    ["text-surface-100"]: contentVariant === "light",
    ["text-surface-800"]: !contentVariant || contentVariant === "dark",
  });
  return (
    <div className={className}>
      <div id="banner-content" className={getPositionContainerText(position)}>
        <div
          style={{
            maxWidth:
              size === "lg" ? "600px" : size === "md" ? "450px" : "410px",
          }}
        >
          {title ? (
            <div className={textColor}>
              <Heading
                title={getTextCount(title, 53)}
                variant="h-3"
                font="secondary"
              />
            </div>
          ) : (
            ""
          )}
          {content ? (
            <div className={textColor}>
              {/* <span>{getTextCount(text, 132)}</span> */}
              <span dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          ) : (
            ""
          )}
          {button ? (
            <div className={getClassBannerPositionButton(position)}>
              <Button
                label={button?.label}
                iconName={button?.iconName}
                variant={
                  contentVariant === "light" ? "outlined-negative" : "primary"
                }
                size={size === "lg" ? "md" : size === "md" ? "sm" : "xsm"}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        id="banner-content-mobile"
        className="w-full h-full flex flex-col w-t:hidden "
      >
        <div className="py-4 text-surface-800">
          <Heading title={title} variant="h-3" font="secondary" />
        </div>
        <div className="pb-4 text-surface-800 font-Poppins">
          <span dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        {button ? (
          <div className="pb-4 font-Poppins">
            <Button
              label={button?.label}
              variant="primary"
              size="xsm"
              iconName={button?.iconName}
              className="min-w-full flex justify-center"
              onClick={button?.onClick}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BannerContent;
