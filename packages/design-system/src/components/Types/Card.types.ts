import { TextLinkConfig } from "./TextLink.types";

export interface CardType {
  /** Src route for image (requiered) */
  imageUrl: string;
  /** Text content of card */
  content?: string;
  /** Subtitle content */
  subtitle?: string;
  /** Title of card */
  title?: string;
  /** See TextLink component */
  textLink?: TextLinkConfig;
  /** Card content Orientation */
  orientation?: "horizontal" | "vertical";
  /** Aspect ratio for vartical card */
  imageAspectRatio?: string;
  /** Prop for extra tailwind classes */
  className: string;
}
