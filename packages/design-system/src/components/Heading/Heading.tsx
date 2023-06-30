import cn from "classnames";

const fonts: any = {
  principal: cn("font-principal"),
  secondary: cn("font-secondary"),
};

const variants: any = {
  "h-1": cn("text-4xl md:text-6xl lg:text-7xl font-extrabold"),
  "h-2": cn("text-2xl md:text-4xl lg:text-6xl font-extrabold"),
  "h-3": cn("text-2xl lg:text-5xl md:text-3xl md:font-extrabold font-bold"),
  "h-4": cn("text-2xl md:text-3xl font-bold"),
  "h-5": cn("text-base lg:text-xl font-bold"),
  "h-6": cn("text-base lg:text-lg font-semibold"),
};

const Heading = (props: any) => {
  const { title, variant = "h-1", font = "principal", className = "" } = props;
  const headingClasses: any = cn(className, {
    [fonts[font]]: true,
    [variants[variant]]: true,
  });
  return <span className={headingClasses}>{title}</span>;
};

export default Heading;
