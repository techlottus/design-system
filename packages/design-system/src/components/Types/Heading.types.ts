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
  title?: string;
  variant?: "h-1" | "h-2" | "h-3" | "h-4" | "h-5" | "h-6";
  font?: "principal" | "secondary";
  className?: string;
}
