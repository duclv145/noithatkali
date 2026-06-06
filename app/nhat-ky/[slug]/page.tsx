import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articles, ArticleSection } from "@/lib/articles";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — KALI Furniture`,
    description: article.excerpt,
  };
}

// Group sections: each h2 starts a new block { label, body[] }
type Block = { label: string | null; body: ArticleSection[] };

function groupSections(sections: ArticleSection[]): Block[] {
  const blocks: Block[] = [];
  let current: Block = { label: null, body: [] };

  for (const s of sections) {
    if (s.type === "h2") {
      if (current.label !== null || current.body.length > 0) {
        blocks.push(current);
      }
      current = { label: s.text ?? "", body: [] };
    } else {
      current.body.push(s);
    }
  }
  if (current.label !== null || current.body.length > 0) {
    blocks.push(current);
  }
  return blocks;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const idx = articles.indexOf(article);
  const related = articles.filter((_, i) => i !== idx).slice(0, 3);
  const blocks = groupSections(article.sections);

  return (
    <>
      <SmoothScroll />
      <div className="bg-[#f7f6f1] text-ink">

        {/* ── Top nav bar ── */}
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-4 md:px-10">
          <Link href="/" className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">
            KALI
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {[["Dự án", "/#projects"], ["Dịch vụ", "/#services"], ["Xưởng", "/#workshop"]].map(([label, href]) => (
              <Link key={href} href={href} className="text-xs uppercase tracking-[0.18em] text-ink/50 transition-opacity hover:text-ink">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <Link href="/nhat-ky" className="text-xs uppercase tracking-[0.18em] text-gold">
              Nhật ký
            </Link>
            <Link href="/#contact" className="hidden text-xs uppercase tracking-[0.18em] text-ink/50 transition-opacity hover:text-ink md:block">
              Liên hệ
            </Link>
          </div>
        </div>

        {/* ── Article header ── */}
        <div className="border-b border-ink/10 px-6 py-10 md:px-10 md:py-16">
          {/* Meta row */}
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ink/40">
            <Link href="/" className="transition-opacity hover:text-ink">← KALI</Link>
            <span>/</span>
            <span>{article.category}</span>
            <span>/</span>
            <span>{article.date}</span>
          </div>

          {/* Big centered title */}
          <h1 className="mx-auto max-w-4xl text-center font-display text-3xl font-semibold uppercase leading-[1.08] tracking-normal text-ink md:text-5xl lg:text-6xl">
            {article.title}
          </h1>
        </div>

        {/* ── Cover image ── */}
        <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* ── Article body ── */}
        <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-20">

          {/* Lead excerpt */}
          <p className="mb-16 border-l-2 border-gold pl-6 font-display text-lg font-medium italic leading-relaxed text-ink/70 md:text-xl">
            {article.excerpt}
          </p>

          {/* Editorial 2-col sections */}
          <div className="space-y-0">
            {blocks.map((block, bi) => (
              <div key={bi} className="border-t border-ink/10 py-10 md:grid md:grid-cols-12 md:gap-10">
                {/* Left: section label */}
                <div className="mb-6 md:col-span-4 md:mb-0">
                  {block.label && (
                    <p className="text-sm font-medium leading-snug text-ink md:sticky md:top-10">
                      {block.label}
                    </p>
                  )}
                </div>

                {/* Right: body content */}
                <div className="space-y-6 md:col-span-8">
                  {block.body.map((s, i) => {
                    if (s.type === "h3")
                      return (
                        <h3 key={i} className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                          {s.text}
                        </h3>
                      );
                    if (s.type === "p")
                      return (
                        <p key={i} className="text-sm leading-[1.82] text-ink/75 md:text-[15px] md:leading-[1.75]">
                          {s.text}
                        </p>
                      );
                    if (s.type === "ul")
                      return (
                        <ul key={i} className="space-y-2 border-l border-ink/10 pl-5">
                          {s.items?.map((item, j) => (
                            <li key={j} className="text-sm leading-relaxed text-ink/70 before:mr-3 before:text-gold before:content-['—'] md:text-[15px]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    if (s.type === "img")
                      return (
                        <figure key={i} className="my-4">
                          <div className="relative aspect-[16/10] w-full overflow-hidden">
                            <Image
                              src={s.src!}
                              alt={s.alt!}
                              fill
                              sizes="(max-width: 768px) 100vw, 640px"
                              className="object-cover"
                            />
                          </div>
                          {s.caption && (
                            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink/40">
                              {s.caption}
                            </figcaption>
                          )}
                        </figure>
                      );
                    if (s.type === "cta")
                      return (
                        <div key={i} className="pt-4">
                          <a
                            href={s.href}
                            className="inline-flex items-center gap-3 bg-umber px-7 py-4 text-[13px] font-medium uppercase tracking-[0.14em] text-cream transition-opacity hover:opacity-80"
                          >
                            {s.text}
                          </a>
                        </div>
                      );
                    return null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Related articles ── */}
        {related.length > 0 && (
          <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-24">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="font-display text-2xl font-semibold uppercase leading-[1.1] text-ink md:text-3xl lg:text-4xl">
                Khám phá thêm<br className="md:hidden" /> bài viết liên quan
              </h2>
              <Link href="/" className="hidden text-[11px] uppercase tracking-[0.18em] text-ink/40 transition-opacity hover:text-ink md:block">
                Tất cả bài viết →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {related.map((a) => (
                <Link key={a.slug} href={`/nhat-ky/${a.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={a.coverImage}
                      alt={a.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-ink/40">{a.date} · {a.category}</p>
                  <h3 className="mt-2 text-sm font-medium leading-snug text-ink transition-opacity group-hover:opacity-60 md:text-base">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
}
