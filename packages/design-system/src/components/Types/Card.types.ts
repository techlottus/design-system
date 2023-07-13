import { TextLinkConfig } from "./TextLink.types";

export interface CardType {
  imageUrl: string;
  content: string;
  subtitle: string;
  title: string;
  textLink: TextLinkConfig;
  orientation: "horizontal" | "vertical";
  ImageAspectRatio: string;
  className: string;
}
