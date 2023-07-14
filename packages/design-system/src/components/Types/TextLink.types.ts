export interface TextLinkConfig {
  target?: string;
  className?: string;
  disabled?: boolean;
  active?: boolean;
  items?: boolean;
  iconPosition?: "right" | "left";
  href?: string;
  text?: string;
  iconName?: string;
  onClick?: () => void;
}
export interface IconPosition {
  right?: string;
  left?: string;
}
