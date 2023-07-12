import cn from "classnames";
import TextLink from "../TextLink";
import Aspect from "../Aspect";
import { myhref } from "../helpers/myrefHelper";
import Heading from "../Heading";
import { CardType, DisplayType } from "../Types/Card.types";

const types: DisplayType = {
  horizontal: "w-3/5",
  vertical: "h-full",
};

const display: DisplayType = {
  horizontal: "flex-row",
  vertical: "flex-col",
};
const classesContent: string = cn(
  "flex flex-col",
  "relative",
  "justify-between",
  "p-4"
);
const classesSubTitle: string = cn(
  "flex",
  "pb-2",
  "font-bold font-principal text-neutral-500",
  " md:text-sm sm:text-xs"
);
const classesLink: string = cn(
  "flex",
  "font-bold font-principal",
  "justify-end items-center",
  "lg:text-base md:text-sm sm:text-xs"
);

const classesText: string = cn(
  "pb-2",
  "text-neutral-500",
  "font-nunito",
  " md:text-sm sm:text-xs"
);
const classesCard: string = cn(
  "flex flex-1",
  "relative",
  "rounded border border-neutral-300",
  "overflow-hidden h-full"
);

const Card: React.FC<CardType> = (props: CardType) => {
  const {
    imageUrl,
    content,
    subtitle,
    title,
    textLink,
    type = "horizontal",
    ImageAspectRatio = "2/1",
    className = "",
  } = props;
  const classText: string = cn(classesText, { ["hidden"]: !content });
  const classContent: string = cn(classesContent, { [types[type]]: type });
  const classSubTitle: string = cn(classesSubTitle, { ["hidden"]: !subtitle });
  const classLink: string = cn(classesLink, { ["hidden"]: !textLink });
  const classTitle: string = cn("text-neutral-800 pb-2", {
    ["hidden"]: !title,
  });
  const classCard: string = cn(classesCard, className, {
    [display?.[type]]: type,
    ["group hover:shadow-lg  cursor-pointer"]: textLink?.href,
  });

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
      {type === "horizontal" ? (
        <div id="image" className="w-2/5 h-auto ">
          <img
            className="w-full h-full"
            src={imageUrl}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ) : (
        <Aspect ratio={ImageAspectRatio}>
          <div id="image" className="w-full h-full ">
            <img
              className="w-full h-full object-cover object-center"
              src={imageUrl}
            />
          </div>
        </Aspect>
      )}
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
