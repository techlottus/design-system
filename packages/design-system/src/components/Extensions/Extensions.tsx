import Icon from "../Icon";
import cn from "classnames";
import { ExtensionsType } from "../Types/Leaderboard.types";
import React from "react";
const Extensions: React.FC<ExtensionsType> = (props: ExtensionsType) => {
  const {
    variant = "",
    href = "",
    text = "",
    icon,
    target = "_self",
    className = "",
  } = props;
  return (
    <div className={cn(className, "flex space-x-2 items-start group")}>
      <Icon className="group-hover:animate-bounce" {...icon} />
      {variant === "phone" ? (
        <span>
          <span className="tablet:hidden  cursor-pointer ">
            <a href={"tel:" + href} target={target}>
              {text}
            </a>
          </span>
          <span className="hidden tablet:flex  ">{text}</span>
        </span>
      ) : variant === "mail" ? (
        <span className="hover:underline cursor-pointer ">
          <a href={"mailto:" + href} target={target}>
            {text}
          </a>
        </span>
      ) : variant === "link" ? (
        <span className=" hover:underline cursor-pointer ">
          <a href={href} target={target}>
            {text}
          </a>
        </span>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};
export default Extensions;
