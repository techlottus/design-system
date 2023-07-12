import { TextLinkConfig } from "./TextLink.types";

export interface CardType {
  imageUrl: string;
  content: string;
  subtitle: string;
  title: string;
  textLink: TextLinkConfig;
  type: "horizontal" | "vertical";
  ImageAspectRatio: string;
  className: string;
}
export type DisplayType = {
  horizontal: string;
  vertical: string;
};
