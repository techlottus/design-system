import { svgIcon } from "../types";

export default function RadioButtonDefault({ className, size, fillColor }: svgIcon) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill={fillColor} xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="16" cy="16" r="15.5" fill="white" stroke="#A1A1AA" />
        </svg>

    );
}