import { ButtonType } from "./button.types";

export interface OutstandingType {
  imageUrl: string;
  title: string;
  content: string;
  imagePosition?: "right" | "left";
  background?: string;
  button?: ButtonType;
}
