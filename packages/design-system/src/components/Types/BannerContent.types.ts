import { ButtonType } from "./button.types";

export interface BannerContentConfig {
    title: string;
    text: string;
    btn?: ButtonType;
    contentVariant?: string;
    size?: string;
    position?: string;
    className?: string;
    mobile?: boolean
}