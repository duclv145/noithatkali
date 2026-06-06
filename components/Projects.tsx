"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projects() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trackEl = track.current!;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const getShift = () => trackEl.scrollWidth - window.innerWidth;

        const tween = gsap.to(trackEl, {
          x: () => -getShift(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => "+=" + getShift(),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Parallax each cover image relative to horizontal motion
        gsap.utils.toArray<HTMLElement>(".proj-img").forEach((img) => {
          gsap.fromTo(
            img,
            { xPercent: -12 },
            {
              xPercent: 12,
              ease: "none",
              scrollTrigger: {
                trigger: img.closest(".proj-card"),
                containerAnimation: tween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        });
      });

      // Mobile: simple fade-up
      mm.add("(max-width: 767px)", () => {
        gsap.from(".proj-card", {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: track.current, start: "top 80%" },
        });
      });

      gsap.from(".proj-head", {
        yPercent: 130,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".proj-head-wrap", start: "top 95%" },
      });
    },
    { scope: root }
  );

  return (
    <section id="projects" ref={root} className="relative bg-cream">
      {/* Heading band */}
      <div className="proj-head-wrap flex items-end justify-between px-6 pb-10 pt-24 md:px-10 md:pt-28">
        <h2 className="proj-head py-[0.06em] text-[11vw] uppercase leading-[1.12] text-umber md:text-[6vw]">
          <span className="font-grotesk font-extrabold tracking-[-0.03em]">Dự án </span>
          <span className="font-display font-semibold italic tracking-normal">tiêu biểu</span>
        </h2>
        <span className="proj-head hidden text-xs uppercase tracking-[0.3em] text-umber/50 md:block">
          (Tuyển chọn) — 2022 / 2024
        </span>
      </div>

      {/* Horizontal track */}
      <div className="flex items-center overflow-hidden md:h-[100svh]">
        <div
          ref={track}
          className="flex flex-col gap-6 px-6 md:flex-row md:items-center md:gap-[6vw] md:px-[6vw]"
        >
          {projects.map((p) => (
            <article
              key={p.slug}
              className="proj-card group relative shrink-0 md:w-[44vw]"
            >
              <div
                data-cursor="Xem"
                className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[4/5.2]"
              >
                <div className="proj-img absolute inset-0 scale-125">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 44vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute left-5 top-5 font-display text-7xl text-cream mix-blend-difference">
                  {p.index}
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl font-medium text-umber md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-umber/60">{p.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-xl text-clay">{p.area}</p>
                  <p className="text-xs uppercase tracking-widest text-umber/50">
                    {p.material}
                  </p>
                </div>
              </div>
            </article>
          ))}

          {/* End card */}
          <article className="shrink-0 self-center md:w-[30vw]">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#contact");
                const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element) => void } }).lenis;
                if (el && lenis) lenis.scrollTo(el);
              }}
              data-cursor="Liên hệ"
              className="group flex flex-col items-start gap-6"
            >
              <span className="font-display text-4xl font-medium leading-tight text-umber md:text-5xl">
                Dự án của <br /> bạn là <span className="italic text-gold">tiếp theo</span>?
              </span>
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-umber/30 text-2xl transition-colors duration-500 group-hover:bg-umber group-hover:text-cream">
                →
              </span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
