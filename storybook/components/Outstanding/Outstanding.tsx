import Aspect from "../Aspect";
import Button from "../Button/Button";
import Heading from "../Heading";
import cn from "classnames";
import { OutstandingType } from "../Types/Outstanding.types";
import React from "react";
const Outstanding: React.FC<OutstandingType> = (props: OutstandingType) => {
  const {
    imageUrl,
    title,
    content,
    imagePosition = "right",
    background = "bg-outstanding-100",
    button,
  } = props;
  return (
    <div
      className={cn(
        "flex flex-col-reverse  md:px-6 md:pt-6 pt-4",
        {
          [" md:flex-row-reverse"]: imagePosition === "right",
          [" md:flex-row"]: imagePosition === "left",
        },
        background
      )}
    >
      <div className="md:w-1/2 w-full self-end">
        <Aspect ratio="2/1">
          <img
            src={imageUrl}
            className={cn("w-full h-full object-cover object-center px-0", {
              ["md:pl-8 md:pr-0 "]: imagePosition === "right",
              ["md:pr-8 md:pl-0 "]: imagePosition === "left",
            })}
          />
        </Aspect>
      </div>
      <div
        className={cn("flex flex-col text-neutral-100 md:w-1/2 w-full px-4", {
          ["md:pr-8 md:pl-0"]: imagePosition === "right",
          ["md:pl-8 md:pr-0"]: imagePosition === "left",
        })}
      >
        <Heading
          title={title}
          variant="h-5"
          font="secondary"
          className="pb-4"
        />
        <div className="text-neutral-100 font-secondary align-center md:pb-4 pb-2 md:text-base text-sm">
          <span dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="pb-6">
          <Button size="xsm" variant="outlined-negative" {...button} />
        </div>
      </div>
    </div>
  );
};
export default Outstanding;
