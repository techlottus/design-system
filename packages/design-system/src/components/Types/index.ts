import React, { ButtonHTMLAttributes, MouseEvent } from "react";

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  iconName?: string;
  label?: string;
  disabled?: boolean;
  size?: "xsm" | "sm" | "md" | "lg";
  variant?: "primary" | "outlined" | "text" | "outlined-negative";
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}
