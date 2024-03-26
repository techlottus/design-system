export interface RainbowItems {
  /** Rainbow title  (requiered)*/
  title: string;
  /** Rainbow description */
  description?: string;
  /** Image src route */
  imageUrl?: string;
}
export interface RainbowConfig {
  /** Array of rainbow objects */
  items?: Array<RainbowItems>;
  /** Background classes */
  background: string;
}
