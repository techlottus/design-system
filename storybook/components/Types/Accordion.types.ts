
export type AccordionType = {
    Button?: React.FC<ElementType>;
    Panel?: React.FC<ElementType>;
  } & ElementType

export type ElementType = { children?: React.ReactNode, className?: string, open?:boolean}
export type ButtonType = { children?: React.ReactNode, className?: string, iconOpen?:string, iconClosed?:string}
