import { Icon } from "@lottuseducation/design_system";
import { Heading } from "@lottuseducation/design_system";
import cn from "classnames";
import Counter from "../Counter/Counter";

const defaultValues: any = {
  className: "",
  theme: "dark",
  number: 0,
};
const variants: any = {
  shadow: "border rounded-lg shadow-lb p-4",
  stroke: "border rounded-lg p-4",
};
const themes: any = {
  dark: "text-neutral-800",
  light: "text-neutral-100",
};
const colors: any = {
  "neutral-100": "border-neutral-100 shadow-neutral-100",
  "neutral-200": "border-neutral-200 shadow-neutral-200",
  "neutral-300": "border-neutral-300 shadow-neutral-300",
  "neutral-400": "border-neutral-400 shadow-neutral-400",
  "neutral-500": "border-neutral-500 shadow-neutral-500",
  "neutral-600": "border-neutral-600 shadow-neutral-600",
  "neutral-700": "border-neutral-700 shadow-neutral-700",
  "neutral-800": "border-neutral-800 shadow-neutral-800",
  "neutral-900": "border-neutral-900 shadow-neutral-900",
  "primary-100": "border-primary-100 shadow-primary-100",
  "primary-200": "border-primary-200 shadow-primary-200",
  "primary-300": "border-primary-300 shadow-primary-300",
  "primary-400": "border-primary-400 shadow-primary-400",
  "primary-500": "border-primary-500 shadow-primary-500",
  "primary-600": "border-primary-600 shadow-primary-600",
  "primary-700": "border-primary-700 shadow-primary-700",
  "primary-800": "border-primary-800 shadow-primary-800",
  "primary-900": "border-primary-900 shadow-primary-900",
};
const Numbers = (props: any) => {
  const {
    number = defaultValues.number,
    title,
    iconName,
    description,
    variant,
    color,
    className = defaultValues.className,
    theme = defaultValues.theme,
  } = props;
  return (
    <div
      id="Numbers-Container"
      className={cn(className, "flex flex-col bg-transparent ", {
        [variants[variant]]: variant,
        [themes[theme]]: theme,
        [colors[color]]: color,
      })}
    >
      <div
        id="Number-Icon"
        className="flex align-center items-start space-x-1 pb-2"
      >
        {iconName ? (
          <span className="flex text-2xl lg:text-5xl md:text-3xl">
            <Icon
              iconName={iconName}
              type="outlined"
              className="text-2xl lg:text-5xl md:text-3xl max-[380px]:leading-[0] leading-[125%]"
            />
          </span>
        ) : (
          ""
        )}
        <span className="flex items-start ">
          <Counter maxNumber={number} />
        </span>
      </div>
      <div id="Numbers-title" className="pb-2 max-[380px]:py-2  flex">
        <Heading title={title} type="h-6" font="secondary" />
      </div>
      <div id="Numbers-description">
        <span className="text-sm font-secondary flex leading-[125%]">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Numbers;
