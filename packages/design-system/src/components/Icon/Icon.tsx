import cn from "classnames";

const Icon = (props: any) => {
  const { iconName, className = "", type = "solid" } = props;
  return (
    <span
      className={cn("select-none", className, {
        ["material-icons-outlined"]: type === "outlined",
        ["font-icons"]: type === "solid",
      })}
    >
      <i>{iconName}</i>
    </span>
  );
};

export default Icon;
