import { svgIcon } from "../types";

export default function CheckBoxDefault({ fillColor, size, className }: svgIcon) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || 16}
            height={size || 16}
            className={className}
            viewBox="0 0 16 16"
        >
            <path d="M12.6667 3.33333V12.6667H3.33333V3.33333H12.6667ZM12.6667 2H3.33333C2.6 2 2 2.6 2 3.33333V12.6667C2 13.4 2.6 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2Z" fill={fillColor} />
        </svg>
    );
}