import { ButtonType } from "./button.types";

export interface MenuMobileType {
  submenuM: boolean;
  items: MenuItemType[];
  button: ButtonType;
  className: string;
  socialMedia: { socialName: String; alt: string; link: string }[];
}

export interface NavClassesType {
  transform: string;
  opacity: string;
}

export interface MenuItemType {
  children?: [];
  principal?: boolean;
  active?: boolean;
  route?: string;
  label?: string;
  iconActive?: string;
}
