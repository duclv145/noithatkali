"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { projects } from "@/lib/projects";

function ProjectThumb({
  project,
  className = "",
  imgSizes = "50vw",
  style,
}: {
  project: (typeof projects)[0];
  className?: string;
  imgSizes?: string;
  style?: React.CSSProperties;
}) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(imgRef.current, { scale: 1.06 });
  }, []);

  const onEnter = () => {
    gsap.to(imgRef.current, { scale: 1.0, duration: 1.0, ease: "power2.out" });
  };

  const onLeave = () => {
    gsap.to(imgRef.current, { scale: 1.06, duration: 1.4, ease: "power2.inOut" });
  };

  return (
    <Link href={`/du-an/${project.slug}`} className={`reveal-img group relative overflow-hidden ${className}`} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <Image src={project.cover} alt={project.title} fill sizes={imgSizes} className="object-cover" />
      </div>
    </Link>
  );
}

export default function ProjectsSlider() {
  const [featured, ...rest] = projects;
  const [p1, p2, p3] = rest;

  return (
    <section id="projects" className="px-4 py-16 md:px-6 md:py-24 lg:px-10">
      {/* Section header */}
      <div className="flex items-end justify-between gap-6 border-b border-ink/10 pb-8 mb-10">
        <h2 className="reveal-heading font-display text-5xl font-semibold uppercase leading-[1.1] tracking-normal text-ink md:text-6xl lg:text-7xl xl:text-8xl">
          Dự án<br />tiêu biểu
        </h2>
        <a
          href="#contact"
          className="mb-2 hidden whitespace-nowrap text-base font-medium leading-none text-ink transition-opacity hover:opacity-60 md:block lg:text-lg"
        >
          Tất cả dự án →
        </a>
      </div>

      {/* Bento grid — 3-col CSS Grid so bottom edges align */}
      <div
        className="grid gap-3 md:gap-4 lg:gap-5"
        style={{
          gridTemplateColumns: "57fr 21.5fr 21.5fr",
          gridTemplateRows: "1fr auto 1fr auto",
          height: "clamp(400px, 54vw, 780px)",
        }}
      >
        {/* Featured image — spans image rows 1 & 3 (+ middle label row) */}
        <ProjectThumb
          project={featured}
          imgSizes="57vw"
          style={{ gridColumn: 1, gridRow: "1 / 4" }}
        />
        {/* Featured label — bottom label row */}
        <div className="flex items-baseline justify-between gap-4" style={{ gridColumn: 1, gridRow: 4 }}>
          <h3 className="font-sans text-base font-medium leading-snug text-ink md:text-lg lg:text-xl">
            {featured.title}
          </h3>
          <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-ink/40 md:text-xs">
            Dự án tiêu biểu
          </p>
        </div>

        {/* p1 image — col 2, row 1 */}
        <ProjectThumb project={p1} imgSizes="22vw" style={{ gridColumn: 2, gridRow: 1 }} />
        {/* p1 label — col 2, row 2 */}
        <div className="flex items-baseline justify-between gap-2" style={{ gridColumn: 2, gridRow: 2 }}>
          <h3 className="font-sans text-base font-medium leading-snug text-ink md:text-lg lg:text-xl">
            {p1.title}
          </h3>
          <p className="shrink-0 text-[10px] font-medium uppercase tracking-widest text-ink/40 md:text-xs">
            {p1.material}
          </p>
        </div>

        {/* p2 image — col 3, row 1 */}
        <ProjectThumb project={p2} imgSizes="22vw" style={{ gridColumn: 3, gridRow: 1 }} />
        {/* p2 label — col 3, row 2 */}
        <div className="flex items-baseline justify-between gap-2" style={{ gridColumn: 3, gridRow: 2 }}>
          <h3 className="font-sans text-base font-medium leading-snug text-ink md:text-lg lg:text-xl">
            {p2.title}
          </h3>
          <p className="shrink-0 text-[10px] font-medium uppercase tracking-widest text-ink/40 md:text-xs">
            {p2.material}
          </p>
        </div>

        {/* p3 image — col 2-3, row 3 */}
        <ProjectThumb project={p3} imgSizes="43vw" style={{ gridColumn: "2 / 4", gridRow: 3 }} />
        {/* p3 label — col 2-3, row 4 */}
        <div className="flex items-baseline justify-between gap-4" style={{ gridColumn: "2 / 4", gridRow: 4 }}>
          <h3 className="font-sans text-base font-medium leading-snug text-ink md:text-lg lg:text-xl">
            {p3.title}
          </h3>
          <p className="shrink-0 text-[10px] font-medium uppercase tracking-widest text-ink/40 md:text-xs">
            {p3.material}
          </p>
        </div>
      </div>
    </section>
  );
}
