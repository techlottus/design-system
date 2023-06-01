import React from "react";
import Icon from "../Icon";
import cn from "classnames";
const defaultValues = {
  type: "",
  value: "",
  text: "",
  className: "",
  target: "_self",
};

const Extensions = (props: any) => {
  const {
    type = "",
    value = "",
    text = "",
    icon,
    target = "_self",
    className = "",
  } = props;
  return (
    <div className={cn(className, "flex space-x-2 items-start group")}>
      <Icon {...icon} className="group-hover:animate-bounce" />
      {type === "phone" ? (
        <span>
          <span className="md:hidden  cursor-pointer ">
            <a href={"tel:" + value} target={target}>
              {text}
            </a>
          </span>
          <span className="hidden md:flex  ">{text}</span>
        </span>
      ) : type === "mail" ? (
        <span className="hover:underline cursor-pointer ">
          <a href={"mailto:" + value} target={target}>
            {text}
          </a>
        </span>
      ) : type === "link" ? (
        <span className=" hover:underline cursor-pointer ">
          <a href={value} target={target}>
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
