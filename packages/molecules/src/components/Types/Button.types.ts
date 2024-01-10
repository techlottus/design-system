export interface ButtonType {
  /** Prop for extra tailwind classes */
  className?: string;
  /** Name of icon */
  iconName?: string;
  /** Button label */
  label?: string;
  /** To indicates if button is disabled */
  disabled?: boolean;
  /** Size of Button */
  size?: "xsm" | "sm" | "md" | "lg";
  /** Button variants */
  variant?: "primary" | "outlined" | "text" | "outlined-negative";
  /** Onclick function */
  onClick?: () => void;
  /**childrens */
  children: React.ReactNode;
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
