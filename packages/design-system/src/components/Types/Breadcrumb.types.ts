export interface BreadcrumbType {
  /** Icon for home route */
  homeIcon?: { iconName: string; route: string };
  /** Icon for separate routes */
  separatorIcon?: string;
  /** Icon to collapse crumbs */
  collapseIcon?: string;
  /** Text and  routes */
  links: { text: string; route: string }[];
  /** Prop for extra tailwind classes */
  className?: string;
  /** Number of minimum crumbs to collapse */
  collapseMin?: number;
}
