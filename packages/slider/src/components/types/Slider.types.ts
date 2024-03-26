import { ButtonType } from "@lottuseducation/design_system/lib/esm/components/Types/button.types";

export interface SliderType {
  /**Array of slides data */
  slides: SlideType[];
}
export interface SlideType extends SliderContentType {
  /**Overlay */
  overlay?: "dark" | "light" | undefined;
  /**background image url */
  imageUrl: string;
}
export interface SliderContentType {
  /**Title of slide content */
  title: string;
  /**Text content of slide */
  content: string;
  /**CTA of slide */
  button: ButtonType;
  /**Position of the content in the slide */
  position:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom"
    | "center-top"
    | "center-middle"
    | "center-bottom";
  /**Tailwind classes */
  className: string;
}
