export type AccordionListType = {
  Button?: React.FC<AccordionButtonType>;
  Item?: React.FC<ElementType>;
  Panel?: React.FC<ElementType>;
  expandAll?: boolean;
} & ElementType

export type AccordionType = {
  Button?: React.FC<AccordionButtonType>;
  Panel?: React.FC<ElementType>;
} & ElementType

export type ElementType = { children?: React.ReactNode, className?: string, open?: boolean }
export type AccordionButtonType = { onClick: Function } & ElementType