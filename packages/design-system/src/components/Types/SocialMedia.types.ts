export interface SocialMediaConfig {
  className?: string;
  socialMedia?: Array<socialMediaItem>;
}

export interface socialMediaItem {
  alt?: string;
  link: string;
  socialName?: string;
}
