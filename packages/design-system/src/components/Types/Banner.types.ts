import { ButtonType } from "./button.types";

export interface BannerContentConfig {
  /** Banner title */
  title: string;
  /** Banner text content */
  content: string;
  /** See Button component */
  button?: ButtonType;
  /** Text color in Banner content  */
  contentVariant?: string;
  /** Width of Banner content and paddings */
  size?: "sm" | "md" | "lg";
  /** Content Position in Banner */
  position?:
    | "center-top"
    | "center-middle"
    | "center-bottom"
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  /** For extra tailwind classes  */
  className?: string;
  /** To indicates mobile mode */
  mobile?: boolean;
}

export interface BannerType {
  /** Src for background image  */
  imageUrl: string;
  /** Aspect ratio to desktop screen */
  desktopRatio?: string;
  /** Aspect ratio to mobile screen */
  mobileRatio?: string;
  /** Aspect ratio to tablet screen */
  tabletRatio?: string;
  /** Overlay in background image */
  overlay?: "dark" | "light" | "";
  /** Banner title */
  title: string;
  /** Banner text content */
  content: string;
  /** Text color in Banner content  */
  contentVariant?: "dark" | "light";
  /** See Button component */
  button?: ButtonType;
  /** Width of Banner content and paddings */
  size?: "sm" | "md" | "lg";
  /** Content Position in Banner */
  position?:
    | "center-top"
    | "center-middle"
    | "center-bottom"
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  /** For extra tailwind classes  */
  className?: string;
}
