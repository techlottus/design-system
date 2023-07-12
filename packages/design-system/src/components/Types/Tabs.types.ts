export interface TabConfig {
    label?: string;
    active?: boolean;
    className?: string;
    iconName?: string;
    isFirst?: boolean;
    onClick?: () => void;
}

export interface TabsConfig {
    tabs?: Array<TabsConfig>
    className?: string;
}