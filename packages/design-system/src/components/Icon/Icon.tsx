import cn from "classnames";

const Icon = (props: any) => {
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
