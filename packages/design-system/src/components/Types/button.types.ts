export interface ButtonType {
  className?: string;
  iconName?: string;
  label?: string;
  disabled?: boolean;
  size?: "xsm" | "sm" | "md" | "lg";
  variant?: "primary" | "outlined" | "text" | "outlined-negative";
  onClick?: () => void;
}

export interface ButtonSize {
  xsm: string;
  sm: string;
  md: string;
  lg: string;
}

export interface ButtonVariant {
  primary: string;
  outlined: string;
  text: string;
  "outlined-negative": string;
}
