import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — KALI Furniture`,
    description: `${project.material} · ${project.area} · ${project.location}`,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.indexOf(project);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <SmoothScroll />
      <Cursor />
    <div className="bg-[#f7f6f1] text-ink">
      {/* Hero */}
      <div className="relative h-[70svh] w-full overflow-hidden bg-umber">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-umber/60 via-transparent to-umber/20" />

        {/* Back */}
        <Link
          href="/#projects"
          className="absolute left-6 top-8 z-10 flex items-center gap-2 bg-black/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur-sm transition-opacity hover:opacity-70 md:left-10 md:top-10"
        >
          ← Tất cả dự án
        </Link>

        {/* Title overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 md:px-10 md:pb-12">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-cream/60">
            {project.index} — {project.material}
          </p>
          <h1 className="font-display text-4xl font-semibold uppercase leading-[1.0] text-cream md:text-6xl lg:text-7xl">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Meta strip */}
      <div className="border-b border-ink/10 px-6 py-6 md:px-10">
        <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <MetaItem label="Vị trí" value={project.location} />
          <MetaItem label="Diện tích" value={project.area} />
          <MetaItem label="Loại" value={project.material} />
          <MetaItem label="Năm" value={project.year} />
        </div>
      </div>

      {/* Gallery */}
      <div className="px-4 py-14 md:px-6 md:py-20 lg:px-10">
        <div className="columns-2 gap-4">
          {project.gallery.map((src, i) => (
            <div key={i} className="mb-4 overflow-hidden break-inside-avoid">
              <div className="relative w-full">
                <Image
                  src={src}
                  alt={`${project.title} — ảnh ${i + 1}`}
                  width={900}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next project */}
      <div className="border-t border-ink/10 px-6 py-12 md:px-10 md:py-16">
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-ink/40">
          Dự án tiếp theo
        </p>
        <Link
          href={`/du-an/${next.slug}`}
          className="group flex items-end justify-between gap-6"
        >
          <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-ink transition-opacity group-hover:opacity-60 md:text-5xl lg:text-6xl">
            {next.title}
          </h2>
          <span className="shrink-0 text-2xl text-ink/30 transition-opacity group-hover:opacity-60">→</span>
        </Link>
      </div>

      <Footer />
    </div>
    </>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink/40">{label}</p>
      <p className="mt-0.5 font-medium text-ink">{value}</p>
    </div>
  );
}
