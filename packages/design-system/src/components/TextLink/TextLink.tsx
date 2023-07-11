import cn from "classnames";
import Icon from "../Icon";
import { useState } from "react";
import { IconPosition, TextLinkConfig } from "../Types/TextLink.types";


const iconPositions: IconPosition = {
  right: "flex",
  left: "flex flex-row-reverse",
};

const TextLink: React.FC<TextLinkConfig> = (props: TextLinkConfig) => {
  const {
    target = "_self",
    className = "",
    onClick = () => {},
    disabled = false,
    active = false,
    items = false,
    iconPosition = "right",
    href,
    text,
    iconName,
  } = props;
  //expand icon state
  let iconExpandMore = "expand_more";
  let iconExpandLess = "expand_less";
  const [icon, setIcon] = useState(iconExpandMore);
  return items ? (
    <div
      className="items-center whitespace-nowrap flex group "
      onMouseEnter={(_) => setIcon(iconExpandLess)}
      onMouseLeave={(_) => setIcon(iconExpandMore)}
    >
      <div
        className={cn("p-1  cursor-pointer ", className, {
          ["hover:underline"]: !disabled,
          ["underline"]: active,
        })}
      >
        <a
          className="font-principal group-hover:underline "
          href={href}
          target={target}
        >
          {text}
        </a>
      </div>
      <div className="flex align-middle text-2xl">
        <Icon iconName={icon} />
      </div>
    </div>
  ) : (
    <div className="items-center whitespace-nowrap flex ">
      <div className={cn([iconPositions[iconPosition]])}>
        <div
          className={cn("p-1  cursor-pointer  ", className, {
            ["hover:underline"]: !disabled,
            ["underline"]: active,
          })}
          onClick={onClick}
        >
          {href && !disabled ? (
            <a className="font-principal" href={href} target={target}>
              {text}
            </a>
          ) : disabled ? (
            <span className="font-principal">{text}</span>
          ) : (
            <span className="font-principal" onClick={onClick}>
              {text}
            </span>
          )}
        </div>
        {iconName ? (
          <div className="flex items-center">
            <Icon iconName={iconName} />{" "}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TextLink;
