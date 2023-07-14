import { AccordionItemType } from "./Accordion.types";
import { IconType } from "./Icon.types";
import { TextLinkConfig } from "./TextLink.types";
import { ButtonType } from "./button.types";

export interface FooterType {
  logoUrl?: string;
  newsletter?: {
    id?: string;
    placeholder: string;
    text: string;
    name: string;
    button: ButtonType;
  };
  textLink?: TextLinkConfig;
  links?: { deskLinks?: LinkType[][]; mobileLinks?: AccordionItemType[] };
  contact?: {
    text?: string;
    phoneText?: string;
    icon: IconType;
    phoneNumber: string;
    socialMedia?: {
      alt: string;
      link: string[];
      socialName: string;
    };
  };
  certificates?: { title: string; logos?: LogoType[] };
  legal?: { title?: string; text?: string; textLink?: TextLinkConfig };
}
export interface LinkType {
  titleSection: string;
  linktext: TextLinkConfig[];
}
export interface LogoType {
  src: string;
  alt?: string;
  link?: string;
}
