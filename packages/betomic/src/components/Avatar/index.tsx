import React from "react";
import cn from "classnames";

type AvatarProps = {
  children?: React.ReactNode
  size?: Size;
}

const sizes = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
] as const;

type Size = (typeof sizes)[number];

const AvatarSizes: {
  [key: string]: string
} = {
  xs: "w-9 h-9",
  sm: "w-17 h-17",
  md: "w-30 h-30",
  lg: "w-49 h-49",
  xl: "w-65 h-65",
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    children,
    size = "md",
  } = props;
  // validate children
  const isValidChild = React.isValidElement(children);

  // validate size
  const validSize = sizes.includes(size) ? size : "md";
  const classes = cn(
    "relative",
    AvatarSizes[validSize]
  );

  return (
    <figure className={classes}>
      {
        isValidChild ? React.cloneElement(
          children, { className: "rounded" }
        ) : null
      }
    </figure>
  );
}

export default Avatar;
