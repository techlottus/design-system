export interface NumbersType {
  /**Maximum number */
  number: number;
  /** Title of number content */
  title?: string;
  /** Icon name of outlined icon */
  iconName?: string;
  /**Text content  */
  description?: string;
  /**Can have border and shadow or neither of them */
  variant?: "shadow" | "stroke";
  /** For color shadows and border classes. eg.border-surface-100 shadow-surface-100  */
  border?: string;
  /** For tailwind classes  */
  className?: string;
}
