import cn from "classnames";
import TextLink from "../TextLink";
import Aspect from "../Aspect";
import { myhref } from "../helpers/myrefHelper";
import Heading from "../Heading";
import { CardType } from "../Types/Card.types";
import React from "react";
const Card: React.FC<CardType> = (props: CardType) => {
  const {
    imageUrl,
    content,
    subtitle,
    title,
    textLink,
    orientation = "horizontal",
    imageAspectRatio = "2/1",
    className = "",
  } = props;
  /** classes for text in textlink */
  const classText: string = cn(
    "pb-2 text-neutral-500 font-nunito md:text-sm sm:text-xs",
    { ["hidden"]: !content }
  );
  const classContent: string = cn(
    "flex flex-col relative justify-between p-4",
    {
      ["w-3/5"]: orientation === "horizontal",
      ["h-full"]: orientation === "vertical",
    }
  );
  const classSubTitle: string = cn(
    "flex pb-2 font-bold font-principal text-neutral-500 md:text-sm sm:text-xs",
    { ["hidden"]: !subtitle }
  );
  const classLink: string = cn(
    "flex font-bold font-principal justify-end items-center lg:text-base md:text-sm sm:text-xs",
    { ["hidden"]: !textLink }
  );
  const classTitle: string = cn("text-neutral-800 pb-2", {
    ["hidden"]: !title,
  });
  const classCard: string = cn(
    "flex flex-1 relative rounded border border-neutral-300 overflow-hidden h-full",
    className,
    {
      ["flex-row"]: orientation === "horizontal",
      ["flex-col"]: orientation === "vertical",
      ["group hover:shadow-lg  cursor-pointer"]: textLink?.href,
    }
  );

  const handleOnClick = (e: Event) => {
    if (textLink?.disabled) {
      e.stopPropagation();
    } else if (textLink?.href) {
      myhref(textLink?.href);
    } else if (textLink?.onClick) {
      textLink?.onClick();
    }
  };

  return (
    <div
      className={classCard}
      onClick={(e: any) => {
        handleOnClick(e);
      }}
    >
      {
        /** when horizontal image grows with content */ orientation ===
        "horizontal" ? (
          <div id="image" className="w-2/5 h-auto ">
            <img
              className="w-full h-full object-cover object-center"
              src={imageUrl}
            />
          </div>
        ) : (
          /** when is vertical, image receive an aspect ratio */ <Aspect
            ratio={imageAspectRatio}
          >
            <div id="image" className="w-full h-full ">
              <img
                className="w-full h-full object-cover object-center"
                src={imageUrl}
              />
            </div>
          </Aspect>
        )
      }
      <div className={classContent}>
        <div>
          <div id="subtitle" className={classSubTitle}>
            <span>{subtitle}</span>
          </div>
          <div id="title" className={classTitle}>
            <Heading title={title} variant="h-6" font="secondary" />
          </div>
          <div id="content" className={classText}>
            <span dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
        <div className={classLink}>
          <TextLink
            className="group-hover:underline text-sm"
            iconName="arrow_forward_ios"
            {...textLink}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
