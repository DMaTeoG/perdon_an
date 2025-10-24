"use client";

import { useEffect, useMemo, useState } from "react";
import { birthdayContent } from "@/data/content";
import { themeClassNames } from "@/lib/theme";
import { BackgroundBokeh } from "@/components/background/BackgroundBokeh";
import { HeaderTitle } from "@/components/core/HeaderTitle";
import { PaperCard } from "@/components/core/PaperCard";
import { TypewriterLetter } from "@/components/core/TypewriterLetter";
import { PhotoRail } from "@/components/media/PhotoRail";
import { Timeline } from "@/components/experience/Timeline";
import { MemoriesGrid } from "@/components/memories/MemoriesGrid";
import { ShareButtons } from "@/components/actions/ShareButtons";
import { FooterNote } from "@/components/layout/FooterNote";
import { ConfettiOrBubbles } from "@/components/feedback/ConfettiOrBubbles";
import { AudioPlayer } from "@/components/media/AudioPlayer";
const GRID_COLS = "md:grid-cols-[240px_minmax(0,640px)_240px]";

function RailSlot({
  enabled,
  children,
}: {
  enabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="hidden md:block" aria-hidden={!enabled}>
      {enabled ? children : <div className="h-full w-full" />}
    </div>
  );
}

export default function Home() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [triggerCount, setTriggerCount] = useState(0);

  const paletteClasses = useMemo(
    () => themeClassNames(birthdayContent.theme.palette),
    []
  );

  useEffect(() => {
    if (!birthdayContent.accessibility.reducedMotionRespect) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.body.dataset.reducedMotion = String(prefersReducedMotion);
  }, [prefersReducedMotion]);

  const handleTypewriterFinished = () => {
    setTriggerCount((prev) => prev + 1);
  };

  const handleCakeClick = () => setTriggerCount((prev) => prev + 1);

  return (
    <div className="relative min-h-screen overflow-hidden pb-20">
      {birthdayContent.sections.background && (
        <BackgroundBokeh
          palette={birthdayContent.theme.palette}
          enableBokeh={birthdayContent.effects.bokeh}
          prefersReducedMotion={prefersReducedMotion}
        />
      )}

      {(birthdayContent.sections.effects ||
        birthdayContent.sections.loveMessage) && (
        <ConfettiOrBubbles
          enableConfetti={birthdayContent.effects.confetti}
          enableHearts={birthdayContent.effects.hearts}
          heartColor={birthdayContent.effects.heartColor}
          trigger={triggerCount}
          prefersReducedMotion={prefersReducedMotion}
          loveMessage={birthdayContent.loveMessage}
          showLoveMessage={birthdayContent.sections.loveMessage}
        />
      )}

      <main
        className={`relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-16 md:px-12 ${paletteClasses}`}
      >
        {birthdayContent.sections.hero && (
          <HeaderTitle
            title={birthdayContent.hero.title}
            palette={birthdayContent.theme.palette}
            emoji={birthdayContent.hero.emoji}
            emojiLabel={birthdayContent.hero.emojiLabel}
            prefersReducedMotion={prefersReducedMotion}
            onCakeClick={handleCakeClick}
          />
        )}

        {birthdayContent.sections.letter && (
          <button
            type="button"
            className="mx-auto rounded-full border border-white/70 bg-white/80 px-6 py-2 text-sm font-medium uppercase tracking-widest text-[#4e3f41] shadow transition hover:-translate-y-1 hover:shadow-lg focus-outline"
            onClick={() => {
              const anchor = document.getElementById("letter-section");
              anchor?.scrollIntoView({
                behavior: prefersReducedMotion ? "auto" : "smooth",
              });
            }}
            aria-label={birthdayContent.hero.scrollAriaLabel}
          >
            {birthdayContent.hero.scrollCta}
          </button>
        )}

        {(birthdayContent.sections.letter || birthdayContent.sections.photos) && (
          <section
            className={`grid gap-8 ${GRID_COLS} md:items-start`}
            role="region"
            aria-label="Carta y rieles"
          >
            <RailSlot enabled={birthdayContent.sections.photos}>
              <PhotoRail
                photos={birthdayContent.photos.left}
                floatPolaroids={birthdayContent.effects.polaroidsFloat}
                prefersReducedMotion={prefersReducedMotion}
                direction="left"
              />
            </RailSlot>

            {birthdayContent.sections.letter ? (
              <PaperCard withTornEdge className="mx-auto max-w-2xl">
                <div id="letter-section" />
                <TypewriterLetter
                  heading={birthdayContent.letter.heading}
                  body={birthdayContent.letter.body}
                  typewriterSpeed={birthdayContent.typewriter.speedMs}
                  startDelay={birthdayContent.typewriter.startDelayMs}
                  liveLabel={birthdayContent.typewriter.liveLabel}
                  finishedLabel={birthdayContent.typewriter.finishedLabel}
                  onFinished={handleTypewriterFinished}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </PaperCard>
            ) : (
              <div className="mx-auto max-w-2xl" aria-hidden />
            )}

            <RailSlot enabled={birthdayContent.sections.photos}>
              <PhotoRail
                photos={birthdayContent.photos.right}
                floatPolaroids={birthdayContent.effects.polaroidsFloat}
                prefersReducedMotion={prefersReducedMotion}
                direction="right"
              />
            </RailSlot>
          </section>
        )}

        {birthdayContent.sections.audio && birthdayContent.audio && (
          <AudioPlayer
            src={birthdayContent.audio.src}
            playLabel={birthdayContent.audio.playLabel}
            pauseLabel={birthdayContent.audio.pauseLabel}
            description={birthdayContent.audio.description}
          />
        )}

        {birthdayContent.sections.timeline && (
          <Timeline
            timeline={birthdayContent.timeline}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}

        {birthdayContent.sections.memories && (
          <MemoriesGrid
            memories={birthdayContent.memories}
            prefersReducedMotion={prefersReducedMotion}
          />
        )}

        {birthdayContent.sections.share && (
          <ShareButtons
            label={birthdayContent.cta.share}
            copyLabel={birthdayContent.cta.copyLabel}
            copiedFeedback={birthdayContent.cta.copiedFeedback}
            unavailable={birthdayContent.cta.unavailable}
          />
        )}

        {birthdayContent.sections.footer && (
          <FooterNote note={birthdayContent.footer.note} />
        )}
      </main>
    </div>
  );
}
