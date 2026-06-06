import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectsSlider from "@/components/ProjectsSlider";

const blogPosts = [
  {
    date: "27.04.2026",
    title: "Thi công nội thất gỗ An Cường tại Thanh Hóa – Đơn vị số 1",
    image: "/images/projects/minh/2.jpg",
    href: "/nhat-ky/thi-cong-noi-that-go-an-cuong-tai-thanh-hoa",
  },
  {
    date: "31.05.2026",
    title: "Thi công nội thất tại Thanh Hóa – Giải pháp hoàn thiện không gian",
    image: "/images/workshop/2.jpg",
    href: "/nhat-ky/thi-cong-noi-that-tai-thanh-hoa",
  },
  {
    date: "26.02.2026",
    title: "Thiết kế nội thất nhà phố – Giải pháp tối ưu không gian sống",
    image: "/images/projects/hoa/4.jpg",
    href: "/nhat-ky/thiet-ke-noi-that-nha-pho",
  },
];

const featured = [
  projects[0],
  projects[1],
  projects[2],
  projects[3],
].filter(Boolean);

export default function EditorialSections() {
  return (
    <div className="bg-[#f7f6f1] text-ink">
      <section
        id="intro"
        className="border-b border-ink/10 px-4 pb-20 pt-16 md:px-6 md:pb-28 md:pt-24 lg:px-10"
      >
        <h2 className="reveal-heading font-display text-4xl font-semibold uppercase leading-[1.12] tracking-normal text-ink md:text-4xl lg:text-5xl">
          Sự thấu cảm định hình mọi không gian,<br />
          từ ấn tượng đầu tiên đến chi tiết cuối cùng.
        </h2>

        {/* Editorial image — hidden on mobile, shown on desktop */}
        <div className="mt-24 hidden md:grid md:mt-28 md:grid-cols-12 md:gap-8">
          <div className="reveal-img relative mx-auto aspect-[3/2] w-48 overflow-hidden md:col-span-3 md:col-start-7 md:mx-0 md:w-56 lg:w-64">
            <Image
              src="/images/hero/hero-1.jpg"
              alt="Chi tiết nội thất Kali"
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
        </div>

        <div
          id="services"
          className="mt-8 grid gap-8 border-t border-ink/10 pt-7 md:grid-cols-12 md:gap-8 md:gap-y-10"
        >
          <p className="reveal-text text-sm font-semibold uppercase leading-[1.1] text-ink md:col-span-3 md:text-[15px]">
            Thiết kế nội thất
            <br />
            cho mái ấm Việt
          </p>

          <div className="reveal-text max-w-[480px] text-sm font-medium leading-[1.42] text-ink md:col-span-4 md:col-start-7 md:text-[16px] md:leading-[1.38]">
            <p>
              KALI bắt đầu mỗi dự án bằng cách lắng nghe nhịp sống của gia chủ:
              cách một gia đình nấu ăn, nghỉ ngơi, tiếp khách và lưu giữ ký ức.
              Từ đó, chúng tôi biến công năng, vật liệu và ánh sáng thành một
              tổng thể ấm áp, bền vững và có cá tính riêng.
            </p>
            <p className="mt-5">
              Mỗi không gian được phát triển từ concept, bản vẽ kỹ thuật đến
              thi công tại xưởng. Tất cả nhằm tạo ra một trải nghiệm liền mạch:
              rõ ràng khi làm việc, tinh tế khi bàn giao và đáng sống trong
              nhiều năm sau đó.
            </p>
          </div>

          <a
            href="#contact"
            className="reveal-text self-start justify-self-start text-sm font-semibold uppercase text-ink transition-opacity hover:opacity-60 md:col-span-2 md:col-start-11 md:justify-self-end md:text-[15px]"
          >
            Tiếp cận →
          </a>
        </div>
      </section>

      <ProjectsSlider />

      <section className="px-4 py-20 md:px-6 md:py-28 lg:px-10">
        {/* Editorial big statement */}
        <h2 className="reveal-heading max-w-6xl font-display text-4xl font-semibold uppercase leading-[1.1] tracking-normal text-ink md:text-4xl lg:text-5xl">
          Nhật ký KALI —<br />
          ý tưởng, vật liệu<br className="md:hidden" /> và câu chuyện<br />
          thi công mỗi ngày.
        </h2>

        <div className="mt-10 flex items-center justify-between border-b border-ink/10 pb-5 md:mt-14">
          <p className="reveal-text text-[11px] font-medium uppercase tracking-[0.18em] text-ink/50">
            Bài viết mới
          </p>
          <a
            href="#contact"
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-60"
          >
            Xem tất cả →
          </a>
        </div>

        <div className="mt-0 divide-y divide-ink/10 md:mt-8 md:grid md:gap-5 md:divide-y-0 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="py-6 md:py-0">
              <Link href={post.href} className="group block">
                <div className="reveal-img relative aspect-[16/10] overflow-hidden md:aspect-[1.06]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover reveal-img-inner transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="reveal-text mt-4 text-[11px] tracking-[0.12em] text-ink/40">{post.date}</p>
                <h3 className="reveal-text mt-2 max-w-sm text-lg font-medium leading-snug text-ink transition-opacity group-hover:opacity-60 md:text-xl">
                  {post.title}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        id="workshop"
        className="px-4 pb-28 pt-16 md:px-6 md:pb-36 lg:px-10"
      >
        <h2 className="reveal-heading font-display text-7xl font-semibold uppercase leading-[0.86] tracking-normal text-ink md:text-9xl lg:text-[10rem]">
          KALI
        </h2>

        <div className="mt-6 grid gap-8 md:grid-cols-12 md:gap-8">
          {/* Mobile: single full-width image */}
          <div className="reveal-img relative aspect-[16/10] overflow-hidden md:hidden">
            <Image
              src="/images/workshop/4.jpg"
              alt="Xưởng nội thất Kali"
              fill
              sizes="100vw"
              className="object-cover reveal-img-inner"
            />
          </div>

          {/* Desktop: 3-image bento grid */}
          <div
            className="hidden md:col-span-5 md:grid"
            style={{
              gridTemplateColumns: "3fr 2fr",
              gridTemplateRows: "1fr 1fr",
              gap: "0.75rem",
              height: "clamp(280px, 60vw, 560px)",
            }}
          >
            <div className="reveal-img relative overflow-hidden" style={{ gridRow: "1 / 3" }}>
              <Image
                src="/images/workshop/4.jpg"
                alt="Xưởng nội thất Kali"
                fill
                sizes="25vw"
                className="object-cover reveal-img-inner"
              />
            </div>
            <div className="reveal-img relative overflow-hidden" style={{ gridRow: 1 }}>
              <Image
                src="/images/workshop/1.jpg"
                alt="Gia công nội thất tại xưởng Kali"
                fill
                sizes="16vw"
                className="object-cover reveal-img-inner"
              />
            </div>
            <div className="reveal-img relative overflow-hidden" style={{ gridRow: 2 }}>
              <Image
                src="/images/workshop/5.jpg"
                alt="Hoàn thiện chi tiết nội thất tại xưởng Kali"
                fill
                sizes="16vw"
                className="object-cover reveal-img-inner"
              />
            </div>
          </div>

          <div className="text-sm leading-relaxed text-ink md:col-span-5 md:col-start-7">
            <p className="reveal-text">
              Là đội ngũ thiết kế và thi công nội thất tại Thanh Hóa, KALI làm
              việc cùng gia chủ để tạo nên những không gian có chiều sâu, đủ
              công năng và giàu cảm xúc.
            </p>
            <p className="reveal-text mt-5">
              Sự kết nối giữa thiết kế, xưởng sản xuất và đội ngũ lắp đặt giúp
              chúng tôi kiểm soát từng chi tiết: từ vân gỗ, tỉ lệ cánh tủ, ánh
              sáng cho tới cảm giác khi chạm vào bề mặt hoàn thiện.
            </p>
            <a
              href="#contact"
              className="reveal-text mt-8 inline-block font-medium uppercase transition-opacity hover:opacity-60"
            >
              Bắt đầu dự án với KALI +
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectMeta({ title, label }: { title: string; label: string }) {
  return (
    <div className="mt-4 flex items-start justify-between gap-5 text-sm leading-[1.12] text-ink md:text-base lg:text-[17px] xl:text-lg">
      <h3 className="max-w-[68%] font-medium">{title}</h3>
      <p className="max-w-[42%] text-right font-medium text-ink/40">{label}</p>
    </div>
  );
}
