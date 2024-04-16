import { IconType } from "./Icon.types";

export interface AccordionType {
  /**   Array of data items  */
  items?: AccordionItemType[];
  /** If true, Accordion will be able to open all items */
  expandAll?: boolean;
}

export interface AccordionItemType {
  /** See Icon component */
  icon?: IconType;
  /** Name of accordion item */
  title?: string;
  /** A subtitle on left side */
  text?: string;
  /** Array with options data for accordion item
   ** {text?: string;
   ** link: string;
   ** icon: IconType;
   ** onClick?: () => void;
   * }; */
  content?: AccordionContentType[];
  /** For extra Tailwind classes */
  className?: string;
  /** On toggle function  */
  onToggle?: () => void;
  /** Set initial state of accordion item */
  open?: boolean;
  /** If true, Accordion will be able to open all items */
  expandAll?: boolean;
}

export type AccordionContentType = {
  text?: string;
  link: string;
  icon: IconType;
  onClick?: () => void;
};
