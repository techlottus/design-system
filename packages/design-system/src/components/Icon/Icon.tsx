import cn from "classnames";

const Icon = (props: any) => {
  const { iconName, className = "", type = "solid" } = props;
  return (
    <span
      className={cn("select-none leading-0", className, {
        ["font-iconsOutlined"]: type === "outlined",
        ["font-iconSolid"]: type === "solid",
      })}
    >
      <i>{iconName}</i>
    </span>
  );
};

export default Icon;
