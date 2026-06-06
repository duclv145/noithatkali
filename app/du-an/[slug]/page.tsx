import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Footer from "@/components/Footer";
import ArticleShell from "@/components/ArticleShell";
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
      <ArticleShell />

      <div className="bg-[#f7f6f1] text-ink">

        {/* ── Project header ── */}
        <div className="border-b border-ink/10 px-6 pb-10 pt-28 md:px-10 md:pb-14 md:pt-32">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ink/40">
            <Link href="/#projects" className="transition-opacity hover:text-ink">← Dự án</Link>
            <span>/</span>
            <span>{project.material}</span>
          </div>

          {/* Title */}
          <h1 className="mx-auto max-w-4xl text-center font-display text-3xl font-semibold uppercase leading-[1.08] tracking-normal text-ink md:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          {/* Meta strip */}
          <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-x-10 gap-y-3">
            <MetaItem label="Vị trí" value={project.location} />
            <MetaItem label="Diện tích" value={project.area} />
            <MetaItem label="Phong cách" value={project.material} />
            <MetaItem label="Năm" value={project.year} />
          </div>
        </div>

        {/* ── Full-width cover ── */}
        <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* ── Gallery: full-width stacked images ── */}
        <div className="space-y-1">
          {project.gallery.map((src, i) => (
            <div key={i} className="relative w-full overflow-hidden">
              <Image
                src={src}
                alt={`${project.title} — ảnh ${i + 1}`}
                width={1800}
                height={1200}
                sizes="100vw"
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* ── Next project ── */}
        <div className="border-t border-ink/10 px-6 py-14 md:px-10 md:py-20">
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
    <div className="text-center">
      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink/40">{label}</p>
      <p className="mt-0.5 font-medium text-ink">{value}</p>
    </div>
  );
}
