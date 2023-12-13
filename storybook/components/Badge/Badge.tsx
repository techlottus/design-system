import React from "react";
import cn from "classnames";
import { IBadge } from "../Types/Badge.types";

const commonClasses = "inline-block px-2 py-1 text-surface-100 text-xs text-center font-texts leading-4";

const fullBadgeClasses = "inline-flex justify-center items-center rounded-full h-9 w-9";

const badgeDisabledClasses = "bg-surface-50 text-surface-300 cursor-not-allowed";

const IntentClasses = {
  error: "bg-error-500 text-error-800",
  warning: "bg-warning-100 text-warning-800",
  success: "bg-success-100 text-success-800",
  info: "bg-info-100 text-info-800"
}



const Badge: React.FC<IBadge> = (props: IBadge) => {

  const {
    className,
    content,
    disabled = false,
    intent,
    roundedFull = false,
    style
  } = props;

  const classes = cn(
    commonClasses,
    className,
    (intent && !disabled) &&
    IntentClasses[intent], {
    ["bg-primary-500"]: !disabled && !intent && !className,
    ["rounded"]: !roundedFull,
    [fullBadgeClasses]: roundedFull,
    [badgeDisabledClasses]: disabled,
  },
  );

  return (
    <span
      className={classes}
      style={style}
    >
      {content}
    </span>
  );
};

export default Badge;