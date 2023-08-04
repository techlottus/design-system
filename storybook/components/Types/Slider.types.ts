export interface SliderType {
  slides: SlideType[];
}
export interface SlideType extends SliderContentType {
  overlay?: string;
  imageUrl: string;
}
export interface SliderContentType {
  title: string;
  content: string;
  button: { label: string };
  contentVariant: "dark" | "light" | undefined;
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
  className: string;
}
