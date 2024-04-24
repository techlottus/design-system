
export type AccordionType = {
  Button?: React.FC<ElementType>;
  Panel?: React.FC<ElementType>;
  as?: React.ElementType | undefined;
} & ElementType

export type ElementType = { children?: React.ReactNode, className?: string, open?:boolean}
export type ButtonType = { children?: React.ReactNode, className?: string, iconOpen?:React.ReactNode, iconClosed?:React.ReactNode, variant?:"solid"|"outlined",onClick?:()=>{}, open?:boolean}
export type ItemType = {className?:string,children?: React.ReactNode} & HTMLLIElement
export type AccordionListType = {
  Item?: React.FC<ItemType>;
  Button?: React.FC<ElementType>;
  Panel?: React.FC<ElementType>;
  children?:React.ReactNode;
  className?:string;
}