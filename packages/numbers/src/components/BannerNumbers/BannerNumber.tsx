import { Aspect } from "@lottuseducation/design_system";
import Numbers from "../Numbers";
import { Heading } from "@lottuseducation/design_system";
import cn from "classnames";
import { BannerNumberType } from "../types/BannerNumber.types";
import { NumbersType } from "../types/Numbers.types";
import React from "react";

const BannerNumber: React.FC<BannerNumberType> = (props: BannerNumberType) => {
  const { imageUrl, overlay = "", title, content, numbers, className } = props;
  return (
    <div className={cn("w-full", className)}>
      <div className={cn("hidden w-d:flex")}>
        <Aspect ratio="7/2">
          <img
            className={cn("w-full h-full object-cover object-center", {
              ["opacity-50"]: overlay === "light",
              ["brightness-50"]: overlay === "dark",
            })}
            src={imageUrl}
            alt="image Banner"
          />
          <div
            className={cn(
              "w-full h-full absolute top-0 left-0 flex flex-col p-10 ",
              className
            )}
          >
            <div className={cn("pb-2 w-1/2 leading-5", className)}>
              <Heading title={title} variant="h-3" font="secondary" />
            </div>
            <div className="w-1/2 font-texts leading-5">
              <span>{content}</span>
            </div>
            <ul className="grid grid-cols-4 gap-6 pt-6">
              {numbers.map((number: NumbersType, numberindex: number) => (
                <li key={numberindex}>
                  <Numbers {...number} />
                </li>
              ))}
            </ul>
          </div>
        </Aspect>
      </div>
      <div className="hidden w-t:flex w-d:hidden">
        <Aspect ratio="2/1">
          <img
            className={cn("w-full h-full object-cover object-center", {
              ["opacity-50"]: overlay === "light",
              ["brightness-50"]: overlay === "dark",
            })}
            src={imageUrl}
            alt="image Banner"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col p-10 ">
            <div className="pb-2 w-4/5 leading-5">
              <Heading title={title} variant="h-3" font="secondary" />
            </div>
            <div className="w-4/5 font-texts  w-t:text-base leading-5">
              <span>{content}</span>
            </div>
            <ul className="grid grid-cols-4 gap-6 pt-6">
              {numbers.map((number: NumbersType, numberindex: number) => (
                <li key={numberindex}>
                  <Numbers {...number} />
                </li>
              ))}
            </ul>
          </div>
        </Aspect>
      </div>
      <div className="flex w-t:hidden ">
        <Aspect ratio="1/2">
          <img
            className={cn("w-full h-full object-cover object-center", {
              ["opacity-50"]: overlay === "light",
              ["brightness-50"]: overlay === "dark",
            })}
            src={imageUrl}
            alt="image Banner"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col p-6 ">
            <div className="pb-2 leading-5">
              <Heading title={title} variant="h-3" font="secondary" />
            </div>
            <div className={cn("font-texts leading-5")}>
              <span>{content}</span>
            </div>
            <ul className={cn("flex flex-col pt-6 gap-4 w-t:gap-6")}>
              {numbers.map((number: NumbersType, numberindex: number) => (
                <li key={numberindex}>
                  <Numbers {...number} />
                </li>
              ))}
            </ul>
          </div>
        </Aspect>
      </div>
    </div>
  );
};
export default BannerNumber;
