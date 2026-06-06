"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Services() {
  const root = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.from(".svc-row", {
        yPercent: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: { trigger: ".svc-list", start: "top 80%" },
      });
      gsap.from(".svc-head", {
        yPercent: 130,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".svc-head-wrap", start: "top 90%" },
      });
    },
    { scope: root }
  );

  const xTo = useRef<gsap.QuickToFunc>();
  const yTo = useRef<gsap.QuickToFunc>();

  useGSAP(
    () => {
      xTo.current = gsap.quickTo(preview.current, "x", { duration: 0.6, ease: "power3" });
      yTo.current = gsap.quickTo(preview.current, "y", { duration: 0.6, ease: "power3" });
    },
    { scope: root }
  );

  const onMove = (e: React.MouseEvent) => {
    const rect = root.current!.getBoundingClientRect();
    xTo.current?.(e.clientX - rect.left);
    yTo.current?.(e.clientY - rect.top);
  };

  return (
    <section
      id="services"
      ref={root}
      onMouseMove={onMove}
      className="relative bg-umber px-6 py-28 text-cream md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="svc-head-wrap mb-16 flex items-end justify-between overflow-hidden">
          <h2 className="svc-head py-[0.06em] text-[10vw] uppercase leading-[1.12] md:text-[5.5vw]">
            <span className="font-grotesk font-extrabold tracking-[-0.03em]">Dịch </span>
            <span className="font-display font-semibold italic tracking-normal">vụ</span>
          </h2>
          <span className="svc-head hidden text-xs uppercase tracking-[0.3em] text-cream/50 md:block">
            (04) — Những gì chúng tôi làm
          </span>
        </div>

        <ul className="svc-list border-t border-cream/15">
          {services.map((s, i) => (
            <li key={s.index} className="svc-row">
              <button
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                data-cursor="Chi tiết"
                className="group flex w-full items-center justify-between gap-6 border-b border-cream/15 py-7 text-left transition-colors duration-500 md:py-9"
              >
                <span className="flex items-baseline gap-5 md:gap-10">
                  <span className="text-xs text-gold md:text-sm">{s.index}</span>
                  <span className="font-display text-3xl font-medium leading-tight tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:text-6xl">
                    {s.title}
                  </span>
                </span>
                <span className="hidden max-w-xs text-right text-sm leading-relaxed text-cream/50 md:block">
                  {s.desc}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cursor-following preview */}
      <div
        ref={preview}
        className="pointer-events-none absolute left-0 top-0 z-20 hidden h-64 w-48 -translate-x-1/2 -translate-y-1/2 overflow-hidden md:block"
        style={{ opacity: active !== null ? 1 : 0, transition: "opacity 0.4s" }}
      >
        {services.map((s, i) => (
          <Image
            key={s.index}
            src={s.image}
            alt={s.title}
            fill
            sizes="200px"
            className="object-cover transition-opacity duration-300"
            style={{ opacity: active === i ? 1 : 0 }}
          />
        ))}
      </div>
    </section>
  );
}
