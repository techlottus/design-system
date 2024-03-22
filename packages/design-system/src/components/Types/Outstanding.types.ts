import { ButtonType } from "./button.types";

export interface OutstandingType {
  /** src route for image (requiered)  */
  imageUrl: string;
  /** Ouststanding title (requiered) */
  title: string;
  /** Text content (requiered) */
  content: string;
  /** Image position */
  imagePosition?: "right" | "left";
  /** Background tailwind class */
  background?: string;
  /** CTA */
  button?: ButtonType;
}
