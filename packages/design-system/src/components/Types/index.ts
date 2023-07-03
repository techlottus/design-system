import React, { ButtonHTMLAttributes, MouseEvent } from "react";

export interface buttonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  iconName?: string;
  label?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}
