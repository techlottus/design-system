import cn from "classnames";

const Icon = (props: any) => {
  const { iconName, className = "", type = "solid" } = props;
  return (
    <span
      className={cn("select-none leading-0", className, {
        ["material-icons-outlined"]: type === "outlined",
        ["font-icons"]: type === "solid",
      })}
    >
      {iconName}
    </span>
  );
};

export default Icon;
