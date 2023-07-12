import Icon from "../Icon";
import cn from "classnames";
import { ExtensionsType } from "../Types/Leaderboard.types";

const Extensions: React.FC<ExtensionsType> = (props: ExtensionsType) => {
  const {
    variant = "",
    ext = "",
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
          <span className="md:hidden  cursor-pointer ">
            <a href={"tel:" + ext} target={target}>
              {text}
            </a>
          </span>
          <span className="hidden md:flex  ">{text}</span>
        </span>
      ) : variant === "mail" ? (
        <span className="hover:underline cursor-pointer ">
          <a href={"mailto:" + ext} target={target}>
            {text}
          </a>
        </span>
      ) : variant === "link" ? (
        <span className=" hover:underline cursor-pointer ">
          <a href={ext} target={target}>
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
