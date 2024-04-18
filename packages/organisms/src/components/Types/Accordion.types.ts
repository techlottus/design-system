
export type AccordionType = {
  Button?: React.FC<ElementType>;
  Panel?: React.FC<ElementType>;
} & ElementType

export type ElementType = { children?: React.ReactNode, className?: string, open?:boolean}
export type ButtonType = { children?: React.ReactNode, className?: string, iconOpen?:React.ReactNode, iconClosed?:React.ReactNode, variant?:"solid"|"outlined",onClick?:()=>{}, open?:boolean,index?:number,clicked?:number}
export type ItemType = {className?:string, index:number,children?: React.ReactNode} 
export type AccordionListType = {
  expandAll?:boolean
  Item?: React.FC<ItemType>;
  Button?: React.FC<ElementType>;
  Panel?: React.FC<ElementType>;
  children?:React.ReactNode
}