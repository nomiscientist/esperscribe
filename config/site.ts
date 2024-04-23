import { NavItem } from "@/types/nav";

interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavItem[];
  links: {
    twitter: string;
    github: string;
    video: string;
    youtube: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "esperscribe",
  description: "Transcribe any video for free with OpenAI's whisper API",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/nomiscientist",
    github: "https://github.com/nomiscientist/esperscribe",
    video: "/video",
    youtube: "/youtube",
  },
};
