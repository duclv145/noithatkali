"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const xTo = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });
    const xDot = gsap.quickTo(dot.current, "x", { duration: 0.12, ease: "power3" });
    const yDot = gsap.quickTo(dot.current, "y", { duration: 0.12, ease: "power3" });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xDot(e.clientX);
      yDot(e.clientY);
    };

    const enterInteractive = (e: Event) => {
      const t = e.currentTarget as HTMLElement;
      const text = t.getAttribute("data-cursor");
      gsap.to(ring.current, {
        scale: text ? 3.4 : 2.2,
        backgroundColor: text ? "white" : "rgba(255,255,255,0.15)",
        borderColor: "transparent",
        duration: 0.4,
        ease: "power3",
      });
      if (text && label.current) {
        label.current.textContent = text;
        gsap.to(label.current, { opacity: 1, duration: 0.3, delay: 0.05 });
      }
    };
    const leaveInteractive = () => {
      gsap.to(ring.current, {
        scale: 1,
        backgroundColor: "rgba(255,255,255,0)",
        borderColor: "rgba(255,255,255,0.7)",
        duration: 0.4,
        ease: "power3",
      });
      if (label.current) gsap.to(label.current, { opacity: 0, duration: 0.2 });
    };

    window.addEventListener("mousemove", move);

    const bind = () => {
      const els = document.querySelectorAll(
        "a, button, [data-cursor], .cursor-target"
      );
      els.forEach((el) => {
        el.addEventListener("mouseenter", enterInteractive);
        el.addEventListener("mouseleave", leaveInteractive);
      });
      return els;
    };
    // Defer to allow DOM (incl. preloader-released content) to settle
    const id = window.setTimeout(bind, 1200);

    return () => {
      window.removeEventListener("mousemove", move);
      window.clearTimeout(id);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] hidden md:block" style={{ mixBlendMode: "difference" }}>
      <div
        ref={ring}
        className="absolute left-0 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70"
      >
        <span
          ref={label}
          className="select-none text-[7px] font-medium uppercase tracking-widest text-white opacity-0"
        />
      </div>
      <div
        ref={dot}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </div>
  );
}
