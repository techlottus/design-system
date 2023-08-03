import { NumbersType } from "./Numbers.types";

export interface BannerNumberType {
  /** Url of image */
  imageUrl: string;
  /** If overlay is needed add:*/
  overlay?: "dark" | "light" | undefined;
  /** Title of banner */
  title?: string;
  /** Text description  */
  content?: string;
  /**Numbers */
  numbers: NumbersType[];
}
