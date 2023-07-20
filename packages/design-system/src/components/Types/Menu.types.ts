import { PromoLinkConfig } from "./PromoLink.types";
import { socialMediaItem } from "./SocialMedia.types";
import { ButtonType } from "./button.types";

export interface MenuMobileType {
  submenuM?: boolean;
  items: MenuItemType[];
  button?: ButtonType;
  className?: string;
  socialMedia?: socialMediaItem[];
  promolink1?: PromoLinkConfig;
  promolink2?: PromoLinkConfig;
}

export interface NavClassesType {
  transform: string;
  opacity: string;
}

export interface MenuItemType {
  children?: [];
  principal: boolean;
  active: boolean;
  route: string;
  label?: string;
  iconActive: boolean;
}

export interface SubMenuClassesType {
  msOverflowStyle: string;
  transform: string;
  transition: string;
}

export interface MenuType {
  data: DataType;
  languages: boolean;
  button: ButtonType;
}

export interface DataType {
  logotype: { src: string };
  menus: MenuElementType[];
  menuMobile: MenuItemType[];
  socialMedia: socialMediaItem[];
  promolink1?: PromoLinkConfig;
  promolink2?: PromoLinkConfig;
}

export interface MenuElementType {
  items?: MenuItemsTypes[];
  active: boolean;
  label: string;
  route: string;
}

export interface MenuItemsTypes {
  label: string;
  route: string;
  active: boolean;
}
