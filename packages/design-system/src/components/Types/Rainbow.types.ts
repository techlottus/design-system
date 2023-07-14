export interface RainbowItems {
  title: string;
  description?: string;
  imageUrl?: string;
}
export interface RainbowConfig {
  items?: Array<RainbowItems>;
  background: string;
}
