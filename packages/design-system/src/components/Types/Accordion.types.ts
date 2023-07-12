import { IconType } from "./Icon.types";

export interface AccordionType {
  itemsData: AccordionItemType[];
  expandAll?: boolean;
}

export interface AccordionItemType {
  icon?: IconType;
  title?: string;
  text?: string;
  content?: AccordionContentType[];
  className?: string;
  onToggle?: () => void;
  open?: boolean;
  expandAll?: boolean;
}

export type AccordionContentType = {
  text?: string;
  link?: string;
  iconHoriz?: boolean;
  onClick?: () => void;
};
