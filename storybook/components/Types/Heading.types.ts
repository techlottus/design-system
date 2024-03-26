import { ReactElement } from "react";

export interface VariantsType {
  "h1": string;
  "h2": string;
  "h3": string;
  "h4": string;
  "h5": string;
  "h6": string;
}

export interface HeadingType {
  /** Title content */
  children?: ReactElement;
  /** Variant size/weight */
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Prop for extra tailwind classes */
  className?: string;
  /** For other tags as "p", "div", "span" */
  as?: string;
}
