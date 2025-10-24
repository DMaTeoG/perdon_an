import type { PaletteOption } from "./types";

export const paletteTokens: Record<
  PaletteOption,
  {
    background: string;
    backgroundAccent: string;
    text: string;
    ink: string;
    highlight: string;
    border: string;
    bokeh: string[];
  }
> = {
  dulcePastel: {
    background: "bg-gradient-to-br from-[#F9DDE2] via-[#FFF6E8] to-[#E8D7FF]",
    backgroundAccent: "bg-[#FFEFE9]/70",
    text: "text-[#3b2f2f]",
    ink: "text-[#514041]",
    highlight: "bg-[#FFD7BA]",
    border: "border-[#E8BFD1]",
    bokeh: ["rgba(249,221,226,0.5)", "rgba(255,215,186,0.45)", "rgba(232,215,255,0.4)"],
  },
  champanElegante: {
    background: "bg-gradient-to-br from-[#FAF6EF] via-[#EBD6A9] to-[#EEC9D2]",
    backgroundAccent: "bg-[#F5E7D0]/70",
    text: "text-[#2E2E2E]",
    ink: "text-[#3a3232]",
    highlight: "bg-[#EBD6A9]",
    border: "border-[#d7c1a0]",
    bokeh: ["rgba(250,246,239,0.55)", "rgba(235,214,169,0.45)", "rgba(238,201,210,0.35)"],
  },
  atardecerSuave: {
    background: "bg-gradient-to-br from-[#FF9A8B] via-[#FFD3B6] to-[#C9C6FF]",
    backgroundAccent: "bg-[#FDE2D8]/70",
    text: "text-[#313043]",
    ink: "text-[#2a2740]",
    highlight: "bg-[#B3E5FC]",
    border: "border-[#9FB8F0]",
    bokeh: ["rgba(255,154,139,0.5)", "rgba(201,198,255,0.4)", "rgba(179,229,252,0.35)"],
  },
  nocturnoElegante: {
    background: "bg-gradient-to-br from-[#0D0D0F] via-[#1A1A2E] to-[#16213E]",
    backgroundAccent: "bg-[#1F1F3A]/70",
    text: "text-[#EAEAEA]",
    ink: "text-[#C1C1C1]",
    highlight: "bg-[#0F3460]",
    border: "border-[#4E4E6A]",
    bokeh: ["rgba(15,52,96,0.45)", "rgba(22,33,62,0.4)", "rgba(74,85,162,0.35)"],
  },
};

export function themeClassNames(palette: PaletteOption) {
  const tokens = paletteTokens[palette];
  return {
    pageBackground: tokens.background,
    cardHighlight: tokens.highlight,
    text: tokens.text,
    ink: tokens.ink,
    border: tokens.border,
    overlay: tokens.backgroundAccent,
    bokehColors: tokens.bokeh,
  };
}
