import React from "react";

export default function RadioButtonActive({ className, size, fillColor }) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect width="32" height="32" rx="16" fill={fillColor || "#18181B"} />
            <g filter="url(#filter0_d_1252_448)">
                <circle cx="16" cy="16" r="3" fill="white" />
            </g>
            <defs>
                <filter id="filter0_d_1252_448" x="12" y="13" width="8" height="8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1252_448" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1252_448" result="shape" />
                </filter>
            </defs>
        </svg>

    );
}