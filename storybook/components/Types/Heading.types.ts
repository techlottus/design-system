export interface FontsType {
  principal: string;
  secondary: string;
}
export interface VariantsType {
  "h-1": string;
  "h-2": string;
  "h-3": string;
  "h-4": string;
  "h-5": string;
  "h-6": string;
}

export interface HeadingType {
  /** Title content */
  title?: string;
  /** Variant size/weight */
  variant?: "h-1" | "h-2" | "h-3" | "h-4" | "h-5" | "h-6";
  /** Font family token */
  font?: "principal" | "secondary";
  /** Prop for extra tailwind classes */
  className?: string;
}
