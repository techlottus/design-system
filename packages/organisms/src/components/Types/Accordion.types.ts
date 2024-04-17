
export type AccordionType = {
  Button?: React.FC<ElementType>;
  Panel?: React.FC<ElementType>;
} & ElementType

export type ElementType = { children?: React.ReactNode, className?: string, open?:boolean}
export type ButtonType = { children?: React.ReactNode, className?: string, iconOpen?:React.ReactNode, iconClosed?:React.ReactNode, open?:boolean | null, variant?:"solid"|"outlined",auto?:boolean,onClick?:()=>{}}