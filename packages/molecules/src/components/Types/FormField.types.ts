
export type FormField={children?: React.ReactNode, className: string}
export type ElementType = { children?: React.ReactNode, className?: string }

export type FormFieldType = {
  TopLeft?: React.FC<ElementType>;
  TopRight?: React.FC<ElementType>;
  BottomLeft?: React.FC<ElementType>;
  BottomRight?: React.FC<ElementType>;
  children?: React.ReactNode;
  className?: string
}