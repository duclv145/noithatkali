"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Preloader({ onDone }: { onDone?: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);

  useGSAP(
    () => {
      const counter = { v: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          setHidden(true);
          onDone?.();
        },
      });

      tl.to(counter, {
        v: 100,
        duration: 2.4,
        ease: "power2.inOut",
        onUpdate: () => setCount(Math.round(counter.v)),
      })
        .from(
          ".pre-word",
          {
            yPercent: 120,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          0.3
        )
        .to(".pre-count", { opacity: 0, duration: 0.4 }, "-=0.3")
        .to(
          ".pre-word-inner",
          { yPercent: -120, duration: 0.9, stagger: 0.08, ease: "power4.in" },
          "+=0.15"
        )
        .to(
          ".pre-panel",
          {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1,
            stagger: 0.08,
            ease: "power4.inOut",
          },
          "-=0.5"
        );
    },
    { scope: root }
  );

  if (hidden) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[10001] flex items-center justify-center"
    >
      <div className="absolute inset-0 flex">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="pre-panel h-full flex-1 bg-umber" />
        ))}
      </div>

      <div className="relative z-10 px-6 text-center text-cream">
        <div className="overflow-hidden">
          <div className="pre-word">
            <span className="pre-word-inner block">
              <Image
                src="/images/brand/Logo-Kali.png"
                alt="KALI Furniture"
                width={360}
                height={138}
                priority
                className="mx-auto w-[52vw] max-w-[420px]"
              />
            </span>
          </div>
        </div>
        <div className="mt-5 overflow-hidden">
          <div className="pre-word">
            <span className="pre-word-inner block text-[11px] font-light uppercase tracking-[0.5em] text-gold">
              Thanh Hóa
            </span>
          </div>
        </div>
      </div>

      <div className="pre-count absolute bottom-8 right-8 font-display text-[9vw] leading-none text-cream/90 md:text-[5vw]">
        {count}
        <span className="align-top text-[2vw]">%</span>
      </div>
    </div>
  );
}
