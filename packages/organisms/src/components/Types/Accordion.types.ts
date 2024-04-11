export type AccordionType = {
    Button?: React.FC<ElementType>;
    Panel?: React.FC<ElementType>;
  } & ElementType

export type ElementType = { children?: React.ReactNode, className?: string }
