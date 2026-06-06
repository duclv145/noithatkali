"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Persist flag so hero intro doesn't replay on SPA return navigation
let heroHasAnimated = false;

const videos = ["/video/video1.mp4", "/video/video2.mp4", "/video/video3.mp4"];

export default function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const [videoIdx, setVideoIdx] = useState(0);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const activeSlot = useRef(0); // which of the 2 video els is currently showing

  const handleVideoEnd = useCallback(() => {
    const nextIdx = (videoIdx + 1) % videos.length;
    const nextSlot = activeSlot.current === 0 ? 1 : 0;
    const nextVid = videoRefs[nextSlot].current;
    const curVid = videoRefs[activeSlot.current].current;
    if (!nextVid || !curVid) return;

    nextVid.src = videos[nextIdx];
    nextVid.load();
    nextVid.play().then(() => {
      gsap.to(nextVid, { opacity: 1, duration: 1.2, ease: "power2.inOut" });
      gsap.to(curVid, { opacity: 0, duration: 1.2, ease: "power2.inOut",
        onComplete: () => { curVid.pause(); curVid.src = ""; }
      });
      activeSlot.current = nextSlot;
      setVideoIdx(nextIdx);
    }).catch(() => {});
  }, [videoIdx]);

  useGSAP(
    () => {
      if (!ready) return;

      // Always make content visible
      gsap.set([".hero-bg", ".hero-content"], { visibility: "visible" });

      // Skip intro animation on SPA return — show content immediately
      if (heroHasAnimated) return;
      heroHasAnimated = true;

      const tl = gsap.timeline({ delay: 0.1 });

      // Background reveal (clip + slow Ken-Burns zoom)
      tl.from(".hero-bg", {
        clipPath: "inset(18% 18% 18% 18%)",
        duration: 1.6,
        ease: "power4.out",
      })
        .from(
          ".hero-bg-img",
          { scale: 1.35, duration: 2, ease: "power3.out" },
          0
        )
        // Floating labels / statement
        .from(
          ".hero-fade",
          { y: 24, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out" },
          0.7
        )
        // Giant headline mask reveal
        .from(
          ".hero-word",
          {
            yPercent: 115,
            duration: 1.3,
            stagger: 0.15,
            ease: "power4.out",
          },
          0.6
        );

      // Parallax: image drifts up, headline drifts slower on scroll
      gsap.to(".hero-bg-img", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-headline", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root, dependencies: [ready] }
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative h-[100svh] w-full overflow-hidden bg-umber text-cream"
    >
      {/* Full-bleed background image */}
      <div className="hero-bg fouc-hide absolute inset-0">
        <div className="hero-bg-img relative h-full w-full">
          <video
            ref={videoRefs[0]}
            src={videos[0]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 1 }}
          />
          <video
            ref={videoRefs[1]}
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 0 }}
          />
        </div>
        {/* Legibility scrims */}
        <div className="absolute inset-0 bg-umber/25" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-umber/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-umber/80 via-umber/30 to-transparent" />
      </div>

      {/* Content layer */}
      <div className="hero-content fouc-hide relative z-10 flex h-full flex-col px-6 pb-5 pt-32 md:px-10 md:pb-7">
        {/* Floating middle row: left label · centre statement · right link */}
        <div className="mt-[10vh] flex flex-1 content-start items-start justify-between gap-4 md:grid md:grid-cols-3 md:gap-6">
          <span className="hero-fade text-xs uppercase leading-relaxed tracking-[0.18em] text-cream/80">
            Thiết kế &amp; thi công
            <br />
            nội thất cao cấp
          </span>

          <div className="hero-fade hidden items-start gap-4 md:flex">
            <span className="shrink-0 text-xs uppercase tracking-[0.25em] text-gold">
              Giới thiệu
            </span>
            <p className="pl-2 font-sans text-base font-light leading-snug text-cream md:text-lg">
              Chúng tôi kiến tạo những không gian giàu cảm xúc — nâng tầm trải
              nghiệm sống cho mỗi gia đình Việt.
            </p>
          </div>

          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#services");
              const lenis = (window as unknown as { lenis?: { scrollTo: (t: Element) => void } }).lenis;
              if (el && lenis) lenis.scrollTo(el);
            }}
            data-cursor="Xem"
            className="hero-fade text-right text-xs uppercase tracking-[0.18em] text-cream/90 md:justify-self-end"
          >
            Phương pháp →
          </a>
        </div>

        {/* Giant serif headline — overlaps the image at the bottom */}
        <h1 className="hero-headline font-display font-medium uppercase leading-[0.9] tracking-[0.01em] text-cream">
          <span className="hero-line block overflow-hidden pt-[0.65em] mt-[-0.65em]">
            <span className="hero-word flex items-baseline justify-between gap-4 pt-[0.32em]">
              <span className="block text-[14vw] md:text-[12.5vw]">Nơi</span>
              <span className="block text-[14vw] md:text-[12.5vw]">MÁI ẤM</span>
            </span>
          </span>
          <span className="hero-line -mt-[0.36em] block overflow-hidden">
            <span className="hero-word block pt-[0.14em] pb-[0.06em] text-[14vw] italic md:text-[12.5vw]">
              bắt đầu<span className="text-gold">.</span>
            </span>
          </span>
        </h1>
      </div>

      {/* Scroll hint */}
      <span className="hero-fade absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-cream/60 md:block">
        Cuộn xuống ↓
      </span>
    </section>
  );
}
