export type DropDownType = {
  Button?: React.FC<ElementType>;
  Item?: React.FC<ElementType>;
  Items?: React.FC<ElementType>;
} & ElementType
export type ElementType = { children?: React.ReactNode, className?: string }