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
        "flex flex-col-reverse  tablet:px-6 tablet:pt-6 pt-4",
        {
          [" tablet:flex-row-reverse"]: imagePosition === "right",
          [" tablet:flex-row"]: imagePosition === "left",
        },
        background
      )}
    >
      <div className="tablet:w-1/2 w-full self-end">
        <Aspect ratio="2/1">
          <img
            src={imageUrl}
            className={cn("w-full h-full object-cover object-center px-0", {
              ["tablet:pl-8 tablet:pr-0 "]: imagePosition === "right",
              ["tablet:pr-8 tablet:pl-0 "]: imagePosition === "left",
            })}
          />
        </Aspect>
      </div>
      <div
        className={cn("flex flex-col text-surface-100 tablet:w-1/2 w-full px-4", {
          ["tablet:pr-8 tablet:pl-0"]: imagePosition === "right",
          ["tablet:pl-8 tablet:pr-0"]: imagePosition === "left",
        })}
      >
        <Heading
          title={title}
          variant="h-5"
          font="secondary"
          className="pb-4"
        />
        <div className="text-surface-100 font-texts align-center tablet:pb-4 pb-2 tablet:text-base text-sm">
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
