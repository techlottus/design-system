export interface SocialMediaConfig {
  /** tailwind classes */
  className?: string;
  /** Array for social media items */
  socialMedia?: Array<socialMediaItem>;
}

export interface socialMediaItem {
  alt?: string;
  link: string;
  socialName?: string;
}
