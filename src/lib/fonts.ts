import {
  Architects_Daughter,
  DM_Serif_Display,
  Playfair_Display,
  Great_Vibes,
  Quicksand,
  Poppins,
} from "next/font/google";
import type { TitleFontOption } from "./types";

type LoadedFont = {
  variable?: string;
  className?: string;
};

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400"],
});

const fontDmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
  weight: ["400"],
});

const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
  weight: ["400", "600"],
});

const fontGreatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
  weight: ["400"],
});

const fontQuicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
  weight: ["400", "600"],
});

const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
  weight: ["400", "600"],
});

const titleFonts: Record<TitleFontOption, LoadedFont> = {
  "DM Serif Display": fontDmSerif,
  "Playfair Display": fontPlayfair,
  "Great Vibes": fontGreatVibes,
  Quicksand: fontQuicksand,
  Poppins: fontPoppins,
};

export function loadFonts(title: TitleFontOption) {
  const chosenTitle = titleFonts[title];
  return {
    bodyClass: architectsDaughter.variable,
    titleClass: chosenTitle.variable,
  };
}

export function getTitleFontClass(title: TitleFontOption) {
  return titleFonts[title].className ?? "";
}
