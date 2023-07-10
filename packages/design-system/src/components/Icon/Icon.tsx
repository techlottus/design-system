import cn from "classnames";
import { IconType } from "../Types/Icon.types";

const Icon: React.FC<IconType> = (props: IconType) => {
  const { iconName, className = "", variant = "solid" } = props;
  return (
    <span
      className={cn(className, {
        ["font-icons-outlined"]: variant === "outlined",
        ["font-icons-solid"]: variant === "solid",
      })}
    >
      <i>{iconName}</i>
    </span>
  );
};

export default Icon;
