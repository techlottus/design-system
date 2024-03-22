import React from "react";
import cn from "classnames"
import { SvgIcon } from "../Types/Icon.types";

const sizes = {
    "sm": "16",
    "md": "24",
    "lg": "32"
};

const CheckBoxDefault: React.FC<SvgIcon> = (props: SvgIcon) => {

    const { className, size = "sm" } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={sizes[size] || 16}
            height={sizes[size] || 16}
            className={cn('', className)}
            viewBox="0 0 16 16"
        >
            <path d="M12.6667 3.33333V12.6667H3.33333V3.33333H12.6667ZM12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2Z" fill="" />
        </svg>
    );
};

export default CheckBoxDefault;