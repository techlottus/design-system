export interface ButtonType {
  /** Prop for extra tailwind classes */
  className?: string;
  /** To indicates if button is disabled */
  disabled?: boolean;
  /** Size of Button */
  size?: "xsm" | "sm" | "md" | "lg";
  /** Button variants */
  variant?: "solid" | "outlined" | "transparent" | "darkOutlined" | "custom";
  /** Onclick function */
  onClick?: () => void;
  /**childrens */
  children: React.ReactNode;
  /**Variant Color */
  color: "primary" | "secondary" | "surface" | "warning" | "error" | "success" | "info";
  // /**Variant intensity text */
  // intensity: "100" | "200" | "300" | "400" | "600" | "500" | "700" | "800" | "900" | "950";
}

export interface ButtonSize {
  xsm: string;
  sm: string;
  md: string;
  lg: string;
}

export interface ButtonVariant {
  solid: string | {"primary": string, "secondary": string, "surface": string , "warning": string , "error": string , "success": string , "info": string};
  outlined: string;
  darkOutlined: string;
  transparent: any;
  custom: string;
}
