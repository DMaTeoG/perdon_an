"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { LoveMessageConfig } from "@/lib/types";

interface ConfettiOrHeartsProps {
  enableConfetti: boolean;
  enableHearts: boolean;
  heartColor: string;
  trigger: number;
  prefersReducedMotion: boolean;
  loveMessage?: LoveMessageConfig;
  showLoveMessage: boolean;
}

type ParticleType = "confetti" | "heart";

type Particle = {
  kind: ParticleType;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
};

const CONFETTI_COUNT = 140;
const HEART_COUNT = 70;

function hexToRgba(hex: string, alpha: number) {
  const value = hex.replace("#", "");
  const expanded = value.length === 3
    ? value.split("").map((char) => char + char).join("")
    : value;

  const parsed = Number.parseInt(expanded, 16);
  // Fallback to a soft pink if parsing fails
  if (Number.isNaN(parsed)) {
    return `rgba(255, 105, 180, ${alpha})`;
  }

  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function ConfettiOrBubbles({
  enableConfetti,
  enableHearts,
  heartColor,
  trigger,
  prefersReducedMotion,
  loveMessage,
  showLoveMessage,
}: ConfettiOrHeartsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  const [messageKey, setMessageKey] = useState(0);

  useEffect(() => {
    setMessageKey((prev) => prev + 1);
  }, [trigger]);

  useEffect(() => {
    if (prefersReducedMotion || (!enableConfetti && !enableHearts)) {
      setReady(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createConfettiParticle = (): Particle => ({
      kind: "confetti",
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: 8 + Math.random() * 8,
      speedX: (Math.random() - 0.5) * 2.5,
      speedY: 2 + Math.random() * 3,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      opacity: 0.7 + Math.random() * 0.3,
      color: `hsl(${Math.random() * 360}, 85%, 70%)`,
    });

    const createHeartParticle = (): Particle => ({
      kind: "heart",
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: 16 + Math.random() * 18,
      speedX: (Math.random() - 0.5) * 1.2,
      speedY: 1.6 + Math.random() * 2.4,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.03,
      opacity: 0.45 + Math.random() * 0.4,
      color: hexToRgba(heartColor, 0.6 + Math.random() * 0.3),
    });

    const initParticles = () => {
      particles = [];
      if (enableConfetti) {
        for (let index = 0; index < CONFETTI_COUNT; index += 1) {
          particles.push(createConfettiParticle());
        }
      }
      if (enableHearts) {
        for (let index = 0; index < HEART_COUNT; index += 1) {
          particles.push(createHeartParticle());
        }
      }
    };

    const drawHeart = (ctx: CanvasRenderingContext2D, particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      const scale = particle.size / 16;
      ctx.scale(scale, scale);
      ctx.beginPath();
      ctx.moveTo(0, -4);
      ctx.bezierCurveTo(-6, -12, -16, -12, -16, -2);
      ctx.bezierCurveTo(-16, 6, -8, 12, 0, 18);
      ctx.bezierCurveTo(8, 12, 16, 6, 16, -2);
      ctx.bezierCurveTo(16, -12, 6, -12, 0, -4);
      ctx.closePath();
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.shadowBlur = 10;
      ctx.shadowColor = particle.color;
      ctx.fill();
      ctx.restore();
    };

    const drawConfetti = (ctx: CanvasRenderingContext2D, particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.fillRect(
        -particle.size / 2,
        -particle.size / 2,
        particle.size,
        particle.size * 0.6,
      );
      ctx.restore();
    };

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        if (particle.kind === "confetti") {
          drawConfetti(context, particle);
        } else {
          drawHeart(context, particle);
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        if (particle.kind === "heart") {
          particle.speedX += Math.sin(particle.rotation) * 0.002;
        }

        if (particle.y > canvas.height + 40) {
          particle.y = -20;
          particle.x = Math.random() * canvas.width;
        }

        if (particle.x > canvas.width + 40) {
          particle.x = -40;
        } else if (particle.x < -40) {
          particle.x = canvas.width + 40;
        }
      });

      animationFrame = requestAnimationFrame(render);
    };

    resize();
    initParticles();
    render();
    setReady(true);

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      setReady(false);
    };
  }, [enableConfetti, enableHearts, heartColor, prefersReducedMotion, trigger]);

  const loveMessageStyle = useMemo(() => {
    if (!loveMessage) return undefined;
    return {
      color: loveMessage.color,
      textShadow: [
        `0 0 12px ${loveMessage.color}`,
        `0 0 24px ${loveMessage.color}`,
        `0 0 48px ${loveMessage.color}`,
      ].join(", "),
    } as const;
  }, [loveMessage]);

  const showCanvas = !prefersReducedMotion && (enableConfetti || enableHearts);
  const shouldShowMessage = showLoveMessage && loveMessage;
  const animateMessage = shouldShowMessage && !prefersReducedMotion;

  return (
    <>
      {showCanvas && (
        <canvas
          ref={canvasRef}
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden="true"
          style={{ opacity: ready ? 1 : 0, transition: "opacity 400ms ease" }}
          data-trigger={trigger}
        />
      )}

      {shouldShowMessage && loveMessage && (
        <div className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center">
          <span
            key={messageKey}
            className={[
              "love-neon-base",
              animateMessage ? "love-neon-animate" : undefined,
            ]
              .filter(Boolean)
              .join(" ")}
            style={loveMessageStyle}
            aria-hidden="true"
          >
            {loveMessage.text}
          </span>
        </div>
      )}
    </>
  );
}

// Quick integration notes:
// 1. Configure heart color and message text in src/data/content.ts (effects.heartColor, loveMessage).
// 2. Toggle visibility via sections.effects (canvas) and sections.loveMessage (text).
