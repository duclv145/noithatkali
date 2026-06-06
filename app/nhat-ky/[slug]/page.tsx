import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";
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

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const idx = articles.indexOf(article);
  const related = articles.filter((_, i) => i !== idx).slice(0, 2);

  return (
    <>
      <SmoothScroll />

      <div className="bg-[#f7f6f1] text-ink">
        {/* Back nav */}
        <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-5 md:px-10">
          <Link
            href="/#projects"
            className="text-xs uppercase tracking-[0.2em] text-ink/60 transition-opacity hover:opacity-100"
          >
            ← KALI
          </Link>
          <span className="text-xs uppercase tracking-[0.18em] text-ink/40">{article.category}</span>
        </div>

        {/* Hero */}
        <div className="relative h-[70svh] w-full overflow-hidden bg-umber">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-umber/90 via-umber/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-4 pb-10 md:px-10 md:pb-14">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-gold">{article.category} · {article.readTime}</p>
            <h1 className="max-w-3xl font-display text-3xl font-semibold uppercase leading-[1.1] text-cream md:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-xs text-cream/50 uppercase tracking-[0.18em]">{article.date}</p>
          </div>
        </div>

        {/* Article body */}
        <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
          {/* Excerpt lead */}
          <p className="mb-12 border-l-2 border-gold pl-5 font-display text-xl font-medium italic leading-relaxed text-ink/80 md:text-2xl">
            {article.excerpt}
          </p>

          {/* Sections */}
          <div className="prose-kali space-y-8">
            {article.sections.map((s, i) => {
              if (s.type === "h2")
                return (
                  <h2 key={i} className="mt-14 font-display text-2xl font-semibold uppercase leading-[1.15] text-ink md:text-3xl">
                    {s.text}
                  </h2>
                );
              if (s.type === "h3")
                return (
                  <h3 key={i} className="mt-8 font-sans text-base font-semibold uppercase tracking-[0.1em] text-ink md:text-lg">
                    {s.text}
                  </h3>
                );
              if (s.type === "p")
                return (
                  <p key={i} className="text-sm leading-[1.8] text-ink/80 md:text-base md:leading-[1.7]">
                    {s.text}
                  </p>
                );
              if (s.type === "ul")
                return (
                  <ul key={i} className="space-y-2 border-l border-ink/10 pl-5">
                    {s.items?.map((item, j) => (
                      <li key={j} className="text-sm leading-relaxed text-ink/75 before:mr-3 before:text-gold before:content-['—'] md:text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              if (s.type === "img")
                return (
                  <figure key={i} className="my-12 -mx-4 md:mx-0">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={s.src!}
                        alt={s.alt!}
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="object-cover"
                      />
                    </div>
                    {s.caption && (
                      <figcaption className="mt-3 px-4 text-center text-xs text-ink/40 md:px-0 md:text-[13px]">
                        {s.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              if (s.type === "cta")
                return (
                  <div key={i} className="mt-14 border-t border-ink/10 pt-10">
                    <a
                      href={s.href}
                      className="inline-flex items-center gap-3 bg-umber px-7 py-4 text-sm font-medium uppercase tracking-[0.14em] text-cream transition-opacity hover:opacity-80"
                    >
                      {s.text}
                    </a>
                  </div>
                );
              return null;
            })}
          </div>
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="border-t border-ink/10 px-4 py-16 md:px-6 md:py-24 lg:px-10">
            <h2 className="mb-10 text-xs uppercase tracking-[0.22em] text-ink/50">Bài viết liên quan</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((a) => (
                <Link key={a.slug} href={`/nhat-ky/${a.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={a.coverImage}
                      alt={a.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="text-base font-medium leading-snug text-ink group-hover:opacity-70 md:text-lg">
                      {a.title}
                    </h3>
                    <span className="shrink-0 text-[10px] uppercase tracking-widest text-ink/40">{a.category}</span>
                  </div>
                  <p className="mt-1 text-xs text-ink/40">{a.date}</p>
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
