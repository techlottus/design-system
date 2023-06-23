import cn from "classnames";

const Icon = (props: any) => {
  const { iconName, className = "", type = "solid" } = props;
  return (
    <span
      className={cn(className, {
        ["font-icons-outlined"]: type === "outlined",
        ["font-icons-solid"]: type === "solid",
      })}
    >
      <i>{iconName}</i>
    </span>
  );
};

export default Icon;
