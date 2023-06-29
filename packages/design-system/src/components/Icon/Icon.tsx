import cn from "classnames";
type icontypes = {
  iconName?: string;
  className?: string;
  variant?: "solid" | "outlined";
};
const Icon = (props: icontypes) => {
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
