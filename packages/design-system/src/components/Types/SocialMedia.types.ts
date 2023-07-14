export interface SocialMediaConfig {
    className?: string;
    svgClass?: string;
    socialMedia: Array<socialMediaItem>
}

export interface socialMediaItem {
    alt: string;
    link: string;
    socialName: string
}