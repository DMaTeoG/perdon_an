export type PaletteOption =
  | "dulcePastel"
  | "champanElegante"
  | "atardecerSuave"
  | "nocturnoElegante";

export type TitleFontOption =
  | "DM Serif Display"
  | "Playfair Display"
  | "Great Vibes"
  | "Quicksand"
  | "Poppins";

export interface ThemeConfig {
  palette: PaletteOption;
}

export interface TypographyConfig {
  title: TitleFontOption;
  body: "Architects Daughter";
}

export interface EffectsConfig {
  confetti: boolean;
  hearts: boolean;
  heartColor: string;
  bokeh: boolean;
  polaroidsFloat: boolean;
}

export interface TypewriterConfig {
  speedMs: number;
  startDelayMs: number;
  soundClicks: boolean;
  endChime: boolean;
  liveLabel: string;
  finishedLabel: string;
}

export interface TimelineMedia {
  url: string;
  alt: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  text: string;
  image?: TimelineMedia;
  video?: TimelineMedia;
}

export type TimelineVariant = "vertical" | "carousel" | "scrapbook";

export interface TimelineConfig {
  variant: TimelineVariant;
  items: TimelineItem[];
  ariaLabel: string;
}

export interface HeroConfig {
  title: string;
  emoji?: string;
  emojiLabel?: string;
  scrollCta: string;
  scrollAriaLabel: string;
}

export interface LetterConfig {
  heading: string;
  body: string;
  ariaLabel: string;
}

export interface PhotoItem {
  url: string;
  alt: string;
}

export interface PhotosConfig {
  left: PhotoItem[];
  right: PhotoItem[];
}

export interface MemoriesConfig {
  heading: string;
  ariaLabel: string;
  photos: PhotoItem[];
}

export interface ShareConfig {
  share: string;
  copyLabel: string;
  copiedFeedback: string;
  unavailable: string;
}

export interface FooterConfig {
  note: string;
}

export interface AudioConfig {
  src: string;
  playLabel: string;
  pauseLabel: string;
  description: string;
}

export interface AccessibilityConfig {
  reducedMotionRespect: boolean;
}

export interface SectionsConfig {
  background: boolean;
  effects: boolean;
  hero: boolean;
  letter: boolean;
  photos: boolean;
  timeline: boolean;
  memories: boolean;
  audio: boolean;
  share: boolean;
  footer: boolean;
  loveMessage: boolean;
}

export interface LoveMessageConfig {
  text: string;
  color: string;
  repeatCount?: number;
}

export interface BirthdayContent {
  theme: ThemeConfig;
  typography: TypographyConfig;
  effects: EffectsConfig;
  typewriter: TypewriterConfig;
  timeline: TimelineConfig;
  hero: HeroConfig;
  letter: LetterConfig;
  photos: PhotosConfig;
  memories: MemoriesConfig;
  cta: ShareConfig;
  footer: FooterConfig;
  audio?: AudioConfig;
  accessibility: AccessibilityConfig;
  sections: SectionsConfig;
  loveMessage?: LoveMessageConfig;
}
