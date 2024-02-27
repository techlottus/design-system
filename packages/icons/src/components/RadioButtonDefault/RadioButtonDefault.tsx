import React from "react";
import cn from "classnames"
import { SvgIcon } from "../Types/Icon.types";

const sizes = {
    "sm": "16",
    "md": "24",
    "lg": "32"
};

const RadioButtonDefault: React.FC<SvgIcon> = (props: SvgIcon) => {

    const { className, size = "sm" } = props;

    return (
        <svg width={sizes[size] || 16} height={sizes[size] || 16} viewBox="0 0 32 32" fill="" xmlns="http://www.w3.org/2000/svg" className={cn("fill-surface-950", className)}>
            <circle cx="16" cy="16" r="15.5" fill="white" stroke="#A1A1AA" />
        </svg>

    );
};

export default RadioButtonDefault;