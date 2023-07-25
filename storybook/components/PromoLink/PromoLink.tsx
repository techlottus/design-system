import Icon from "../Icon";
import cn from "classnames";
import { myhref } from "../helpers/myrefHelper";
import { getTextCount } from "../helpers/textHelper";
import Aspect from "../Aspect";
import Heading from "../Heading";
import { PromoLinkConfig } from "../Types/PromoLink.types";
import React from "react";
const PromoLink = (props: PromoLinkConfig) => {
  const {
    text,
    link,
    border = "border-outstanding-100 shadow-outstanding-100",
    overlay = "bg-outstanding-100 ",
    className = "",
    imageUrl,
    variant = "image",
  } = props;
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!link) {
      e.stopPropagation();
    } else if (link) {
      myhref(link);
    } else {
      link?.onClick();
    }
  };
  return (
    <div className={cn("flex flex-1", className)}>
      <div
        id="promo-link-shadow"
        className={cn(
          { ["hidden"]: variant === "image" },
          "h-full w-full rounded border p-4  shadow-lb bg-neutral-100 cursor-pointer",
          border
        )}
        onClick={handleOnClick}
      >
        <div className="font-principal font-bold">
          <span>{getTextCount(text, 52)}</span>
        </div>
        <div className=" w-full font-principal flex font-bold relative justify-end ">
          <span>
            <Icon iconName="arrow_forward" />
          </span>
        </div>
      </div>
      <div
        className={cn(
          { ["hidden"]: variant === "shadow" },
          "h-fit w-full rounded mix-blend-multiply bg-blend-multiply flex  ",
          overlay
        )}
      >
        <Aspect ratio="1/1">
          <img
            src={imageUrl}
            className="w-full h-full object-cover object-center mix-blend-multiply bg-blend-multiply "
          />
          <div
            className="w-full h-full absolute top-0 left-0 p-4 flex flex-col justify-between text-neutral-100 cursor-pointer group"
            onClick={handleOnClick}
          >
            <div className="flex font-principal font-bold">
              <Heading title={getTextCount(text, 52)} variant="h-5" />
            </div>
            <div className=" w-full font-principal flex font-bold  justify-end ">
              <span className="group-hover:animate-ping">
                <Icon iconName="arrow_forward" />
              </span>
            </div>
          </div>
        </Aspect>
      </div>
    </div>
  );
};

export default PromoLink;
