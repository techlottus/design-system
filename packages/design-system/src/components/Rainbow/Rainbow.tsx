import Aspect from "../Aspect";
import Heading from "../Heading";
import cn from "classnames";
import { RainbowItems, RainbowConfig } from "../Types/Rainbow.types";
import React from "react";
const Rainbow: React.FC<RainbowConfig> = (props: RainbowConfig) => {
  const { items, background } = props;
  return (
    <div className="flex w-full h-full relative ">
      <div
        className={cn(
          "desktop:w-3/4 w-full overflow-visible flex h-full absolute",
          background
        )}
      ></div>
      <div className="z-10 w-full  h-full left-0 top-0 py-12 desktop:space-y-6 tablet:space-y-12 space-y-6">
        {items?.map((item: RainbowItems, i: number) => (
          <section
            className="w-full flex flex-col desktop:flex-row  desktop:pl-24.75 pr-6 pl-6 desktop:space-x-6 group"
            key={i}
          >
            <div className="desktop:w-1/2 w-full flex flex-col desktop:align-middle">
              <Heading
                title={item?.title}
                variant="h-3"
                font="secondary"
                className="leading-5 pb-6 text-surface-100"
              />
              <span className="flex items-start leading-5 text-surface-100 font-headings pb-6 desktop:pb-0 text-sm tablet:text-base desktop:text-lg">
                {item?.description}
              </span>
            </div>
            <div className="desktop:w-1/2 w-full">
              <Aspect ratio="2/1">
                <img
                  src={item?.imageUrl}
                  className={cn(
                    "w-full h-full object-cover object-center group-hover:translate-y-3 duration-1000 ease-in-out"
                  )}
                />
              </Aspect>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
export default Rainbow;
