import { ButtonType } from "./button.types";

export interface PositionType {
  right?: string;
  left?: string;
}
export interface OutstandingType {
  imageUrl: string;
  title: string;
  content: string;
  imagePosition?: "right" | "left";
  background?: string;
  button?: ButtonType;
}
