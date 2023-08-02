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
          "lg:w-3/4 w-full overflow-visible flex h-full absolute",
          background
        )}
      ></div>
      <div className="z-10 w-full  h-full left-0 top-0 py-12 lg:space-y-6 md:space-y-12 space-y-6">
        {items?.map((item: RainbowItems, i: number) => (
          <section
            className="w-full flex flex-col lg:flex-row  lg:pl-24.75 pr-6 pl-6 lg:space-x-6 group"
            key={i}
          >
            <div className="lg:w-1/2 w-full flex flex-col lg:align-middle">
              <Heading
                title={item?.title}
                variant="h-3"
                font="secondary"
                className="leading-5 pb-6 text-neutral-100"
              />
              <span className="flex items-start leading-5 text-neutral-100 font-principal pb-6 lg:pb-0 text-sm md:text-base lg:text-lg">
                {item?.description}
              </span>
            </div>
            <div className="lg:w-1/2 w-full">
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
