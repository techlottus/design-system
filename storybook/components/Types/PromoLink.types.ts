export interface PromoLinkConfig {
  /** Text title promolink (requiered) */
  text?: string;
  /** cta */
  link?: any;
  /** To add extra tailwind classes */
  className?: string;
  /** Border classes*/
  border?: string;
  /** Overlay color class */
  overlay?: string;
  /** Image src route */
  imageUrl?: string;
  /** variant promolink */
  variant?: "image" | "shadow";
}
