export interface RainbowColors {
    color1: string,
    color2: string,
    color3: string,
    color4: string,
}

export interface RainbowItems {
    title: string;
    description?: string;
    imageUrl?: string
}
export interface RainbowConfig {
    items?: Array<RainbowItems>,
    backgroundColor: 'color1' | 'color2' | 'color3' | 'color4';

}