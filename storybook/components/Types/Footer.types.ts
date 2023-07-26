import { AccordionItemType } from "./Accordion.types";
import { IconType } from "./Icon.types";
import { TextLinkConfig } from "./TextLink.types";
import { ButtonType } from "./button.types";

export interface FooterType {
  /** src route for logo image */
  logoUrl?: string;
  /** Newsletter data */
  newsletter?: {
    id?: string;
    placeholder: string;
    text: string;
    name: string;
    button: ButtonType;
  };
  /**Textlink component */
  textLink?: TextLinkConfig;
  /**  Options Links*/
  links?: { deskLinks?: LinkType[][]; mobileLinks?: AccordionItemType[] };
  /** Contact information */
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
  /** Certificates data */
  certificates?: { title: string; logos?: LogoType[] };
  /** Copy right and legal data */
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
