import { IconType } from "./Icon.types";
import { ButtonType } from "./button.types";

export interface LeaderboardType {
  imageUrl: string;
  title?: string;
  variant?: "dark" | "light";
  links?: ExtensionsType[];
  button?: ButtonType;
}

export interface LeaderboardTypeVariants {
  light?: string;
  dark?: string;
}

export interface ExtensionsType {
  variant?: string;
  href?: string;
  text?: string;
  icon?: IconType;
  target?: string;
  className?: string;
}
