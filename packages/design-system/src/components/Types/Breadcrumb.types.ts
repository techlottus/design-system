export interface BreadcrumbType {
  homeIcon?: { iconName: string; route: string };
  separatorIcon?: string;
  collapseIcon?: string;
  links: { text: string; route: string }[];
  className?: string;
  collapseMin?: number;
}
