export interface TabConfig {
  /** Label tab */
  label?: string;
  /** Indicates if tab is active */
  active?: boolean;
  /** Extra tailwind classes */
  className?: string;
  /** Icon name optional  */
  iconName?: string;
  /** Onclick function */
  onClick?: () => void;
}

export interface TabsConfig {
  /** Array of tabs */
  tabs?: Array<TabsConfig>;
  /** Extra tailwind classes */
  className?: string;
}
