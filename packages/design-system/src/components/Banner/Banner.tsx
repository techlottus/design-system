import Aspect from "../Aspect";
import BannerContent from "../BannerContent";
import { BannerType } from "../Types/Banner.types";
import cn from "classnames";
import React from "react";

const Banner: React.FC<BannerType> = (props: BannerType) => {
  const {
    imageUrl,
    desktopRatio = "7/2",
    mobileRatio = "4/3",
    tabletRatio = "7/2",
    overlay = "normal",
    title,
    content,
    contentVariant = "dark",
    button,
    size = "md",
    position = "left-top",
    className = "",
  } = props;
  return (
    <div className={className}>
      <div className="hidden xl:block lg:block ">
        <Aspect ratio={desktopRatio}>
          <img
            className={cn("w-full h-full object-cover object-center", {
              ["opacity-50"]: overlay === "light",
              ["brightness-50"]: overlay === "dark",
            })}
            src={imageUrl}
            alt="image Banner"
          />
          <BannerContent
            title={title}
            content={content}
            button={{
              label: button?.label,
              variant: contentVariant ? "outlined" : "primary",
              iconName: button?.iconName,
            }}
            contentVariant={contentVariant}
            size={size}
            position={position}
            mobile={false}
          />
        </Aspect>
      </div>
      <div className="hidden xl:hidden lg:hidden md:block  ">
        <Aspect ratio={tabletRatio}>
          <img
            className={cn("w-full h-full object-cover object-center", {
              ["opacity-50"]: overlay === "light",
              ["brightness-50"]: overlay === "dark",
            })}
            src={imageUrl}
            alt="image Banner"
          />
          <BannerContent
            title={title}
            content={content}
            button={{
              label: button?.label,
              variant: contentVariant ? "outlined" : "primary",
              iconName: button?.iconName,
            }}
            contentVariant={contentVariant}
            size={size}
            position={position}
            mobile={false}
          />
        </Aspect>
      </div>
      <div className="lg:hidden md:hidden flex flex-col space-x-1 ">
        <div className="w-full h-full flex relative ">
          <Aspect ratio={mobileRatio}>
            <img
              src={imageUrl}
              className="w-full h-full object-cover object-center"
              alt="img-banner-mobile"
            />
          </Aspect>
        </div>
        <div>
          <BannerContent
            title={title}
            content={content}
            contentVariant="dark"
            button={{
              label: button?.label,
              variant: "primary",
              iconName: button?.iconName,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
