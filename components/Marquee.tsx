"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Marquee({
  text = "KHÁCH HÀNG LÀ THƯỢNG ĐẾ",
  dark = false,
}: {
  text?: string;
  dark?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = root.current!.querySelector(".marquee-track")!;
      // base loop
      const loop = gsap.to(track, {
        xPercent: -50,
        duration: 22,
        ease: "none",
        repeat: -1,
      });
      // velocity skew from scroll
      gsap.to(loop, {
        timeScale: 1,
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const v = gsap.utils.clamp(-3, 3, self.getVelocity() / 220);
            gsap.to(loop, { timeScale: 1 + Math.abs(v), duration: 0.4, overwrite: true });
            loop.timeScale(v >= 0 ? Math.abs(loop.timeScale()) : -Math.abs(loop.timeScale()));
          },
        },
      });
    },
    { scope: root }
  );

  const items = Array.from({ length: 8 });

  return (
    <div
      ref={root}
      className={`relative overflow-hidden border-y py-6 ${
        dark
          ? "border-cream/15 bg-umber text-cream"
          : "border-umber/15 bg-cream text-umber"
      }`}
    >
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap will-change-transform">
        {items.map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-4xl font-medium uppercase tracking-tight md:text-6xl"
          >
            {text}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
