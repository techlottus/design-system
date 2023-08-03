export interface VariantNumberType{
  shadow:string;
  stroke:string;
}
export interface NumbersType{
  /**Maximum number */
  number:number;
  /** Title of number content */
  title?: string;
  /** Icon name of outlined icon */
  iconName?:string;
  /**Text content  */
  description?: string;
  /**Can have border and shadow or neither of them */
  variant: "shadow"|"stroke";
  /** For color shadows and border classes. eg.border-neutral-100 shadow-neutral-100  */
  color:string;
  /** For tailwind classes  */
  className:string;
}