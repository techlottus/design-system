import { ButtonType } from "./button.types";

export interface BannerContentConfig {
  title: string;
  content: string;
  button?: ButtonType;
  contentVariant?: string;
  size?: string;
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
  className?: string;
  mobile?: boolean;
}

export interface BannerType {
  imageUrl: string;
  desktopRatio?: string;
  mobileRatio?: string;
  tabletRatio?: string;
  overlay?: string;
  title: string;
  content: string;
  contentVariant?: string;
  button?: ButtonType;
  size?: string;
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
  className: string;
}
