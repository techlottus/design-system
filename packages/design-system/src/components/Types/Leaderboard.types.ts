import { IconType } from "./Icon.types";
import { ButtonType } from "./button.types";

export interface LeaderboardType {
  /** src route for brackground image (requiered) */
  imageUrl: string;
  /** Leaderboard Title */
  title?: string;
  /** Image overlay */
  variant?: "dark" | "light";
  /** Links and extensions eg. email, phone number, web site ... */
  links?: ExtensionsType[];
  /** CTA */
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
