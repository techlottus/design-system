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
        "flex flex-col-reverse  w-t:px-6 w-t:pt-6 pt-4",
        {
          [" w-t:flex-row-reverse"]: imagePosition === "right",
          [" w-t:flex-row"]: imagePosition === "left",
        },
        background
      )}
    >
      <div className="w-t:w-1/2 w-full self-end">
        <Aspect ratio="2/1">
          <img
            src={imageUrl}
            className={cn("w-full h-full object-cover object-center px-0", {
              ["w-t:pl-8 w-t:pr-0 "]: imagePosition === "right",
              ["w-t:pr-8 w-t:pl-0 "]: imagePosition === "left",
            })}
          />
        </Aspect>
      </div>
      <div
        className={cn("flex flex-col text-surface-100 w-t:w-1/2 w-full px-4", {
          ["w-t:pr-8 w-t:pl-0"]: imagePosition === "right",
          ["w-t:pl-8 w-t:pr-0"]: imagePosition === "left",
        })}
      >
        <Heading
          title={title}
          variant="h-5"
          font="secondary"
          className="pb-4"
        />
        <div className="text-surface-100 font-texts align-center w-t:pb-4 pb-2 w-t:text-base text-sm">
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
