import { Icon } from "@lottuseducation/design_system";
import { Heading } from "@lottuseducation/design_system";
import cn from "classnames";
import Counter from "../Counter/Counter";
import { NumbersType } from "../types/Numbers.types";
import React from "react";

const Numbers: React.FC<NumbersType> = (props: NumbersType) => {
  const {
    number = 0,
    title,
    iconName,
    description,
    variant,
    border,
    className = "",
  } = props;
  return (
    <div
      id="Numbers-Container"
      className={cn(
        "flex flex-col bg-transparent ",
        {
          ["border rounded-lg shadow-lb p-4"]: variant === "shadow",
          ["border rounded-lg p-4"]: variant === "stroke",
        },
        border,
        className
      )}
    >
      <div
        id="Number-Icon"
        className="flex align-center items-start space-x-1 pb-2"
      >
        {iconName && (
          <span className="flex text-2xl w-d:text-5xl w-t:text-3xl">
            <Icon
              iconName={iconName}
              variant="outlined"
              className="text-2xl w-d:text-5xl w-t:text-3xl leading-4 w-p:leading-5"
            />
          </span>
        )}
        <span className="flex items-start ">
          <Counter maxNumber={number} />
        </span>
      </div>
      <div id="Numbers-title" className="pb-2 py-2 w-p:py-1 flex">
        <Heading title={title} variant="h-6" font="secondary" />
      </div>
      <div id="Numbers-description">
        <span className="text-sm font-texts flex leading-5">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Numbers;
