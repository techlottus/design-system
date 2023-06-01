import Aspect from "../Aspect";
import Heading from "../Heading";
import cn from "classnames";

const position: any = {
  ["right"]: "flex-col-reverse md:flex-row-reverse md:pt-6  pt-4",
  ["left"]: "flex-col-reverse md:flex-row md:pt-6  pt-4",
};
const paddings: any = {
  ["right"]: "md:pl-8 md:pr-0 px-0",
  ["left"]: "md:pr-8 md:pl-0 px-0",
};
const paddingContent: any = {
  ["right"]: "md:pr-8 md:pl-0 px-4 ",
  ["left"]: "md:pl-8 md:pr-0 px-4 ",
};
const defaultValues: any = {
  imgPosition: "right",
  backgroundColor: "color1",
};
const colors: any = {
  color1: "bg-outstanding-100",
  color2: "bg-outstanding-200",
  color3: "bg-outstanding-300",
  color4: "bg-outstanding-400",
  color5: "bg-neutral-500",
  color6: "bg-neutral-800",
  color7: "bg-neutral-900",
};

const Outstanding = (props: any) => {
  const {
    imageUrl,
    title,
    paragraph,
    imgPosition = defaultValues.imgPosition,
    backgroundColor = defaultValues.backgroundColor,
  } = props;
  return (
    <div
      className={cn("flex  md:px-6", {
        [position[imgPosition]]: true,
        [colors[backgroundColor]]: true,
      })}
    >
      <div className="md:w-1/2 w-full self-end">
        <Aspect ratio="2/1">
          <img
            src={imageUrl}
            className={cn("w-full h-full object-cover object-center", {
              [paddings[imgPosition]]: true,
            })}
          />
        </Aspect>
      </div>
      <div
        className={cn("flex flex-col text-neutral-100 md:w-1/2 w-full", {
          [paddingContent[imgPosition]]: true,
        })}
      >
        <Heading title={title} type="h-5" font="secondary" className="pb-4" />
        <div className="text-neutral-100 font-secondary align-center md:pb-6 pb-4 md:text-base text-sm">
          {paragraph}
        </div>
      </div>
    </div>
  );
};
export default Outstanding;
