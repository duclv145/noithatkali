"use client";

import { useState } from "react";

const spaceTypes = [
  "Nhà phố",
  "Căn hộ chung cư",
  "Biệt thự",
  "Văn phòng",
  "Loại khác",
];

export default function ConsultForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    space: "",
    area: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async (replace with real endpoint / Formspree / etc.)
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="consult"
      className="relative bg-umber px-6 pb-24 pt-20 text-cream md:px-10 md:pb-32 md:pt-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 md:grid md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
              Đăng ký tư vấn
            </p>
            <h2 className="font-display text-4xl font-semibold uppercase leading-[1.08] text-cream md:text-5xl lg:text-6xl">
              Bắt đầu<br />dự án<br />của bạn.
            </h2>
          </div>
          <div className="mt-8 text-sm leading-[1.8] text-cream/50 md:col-span-5 md:col-start-8 md:mt-0 md:self-end">
            <p>
              Điền thông tin bên dưới — đội ngũ KALI sẽ liên hệ trong vòng
              24 giờ để trao đổi về không gian và ngân sách của bạn.
            </p>
            <p className="mt-4">
              Hoặc gọi trực tiếp:{" "}
              <a href="tel:0848616688" className="text-cream transition-opacity hover:opacity-60">
                0848 61 6688
              </a>
            </p>
          </div>
        </div>

        {submitted ? (
          /* Success state */
          <div className="border-t border-cream/15 pt-16 text-center md:pt-20">
            <p className="font-display text-5xl font-semibold italic text-gold md:text-7xl">
              Cảm ơn!
            </p>
            <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
              Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ trong vòng 24 giờ.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name:"", phone:"", space:"", area:"", note:"" }); }}
              className="mt-10 text-xs uppercase tracking-[0.2em] text-cream/40 transition-opacity hover:text-cream/70"
            >
              ← Gửi yêu cầu mới
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="border-t border-cream/15 pt-12">
            {/* Row 1: name + phone */}
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <Field
                label="Họ và tên *"
                type="text"
                value={form.name}
                onChange={set("name")}
                required
                placeholder="Nguyễn Văn A"
              />
              <Field
                label="Số điện thoại *"
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                required
                placeholder="0912 345 678"
              />
            </div>

            {/* Row 2: space type + area */}
            <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
              <div className="relative">
                <label className="mb-3 block text-[10px] uppercase tracking-[0.22em] text-cream/40">
                  Loại không gian *
                </label>
                <select
                  required
                  value={form.space}
                  onChange={set("space")}
                  className="w-full appearance-none border-b border-cream/20 bg-transparent pb-3 text-sm text-cream outline-none transition-colors focus:border-gold [&>option]:bg-umber [&>option]:text-cream"
                >
                  <option value="" disabled>Chọn loại không gian</option>
                  {spaceTypes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <span className="pointer-events-none absolute bottom-3 right-0 text-cream/40">↓</span>
              </div>

              <Field
                label="Diện tích (m²)"
                type="text"
                value={form.area}
                onChange={set("area")}
                placeholder="VD: 120 m²"
              />
            </div>

            {/* Row 3: note */}
            <div className="mt-10">
              <label className="mb-3 block text-[10px] uppercase tracking-[0.22em] text-cream/40">
                Ghi chú thêm
              </label>
              <textarea
                rows={3}
                value={form.note}
                onChange={set("note")}
                placeholder="Phong cách mong muốn, ngân sách dự kiến..."
                className="w-full resize-none border-b border-cream/20 bg-transparent pb-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/20 focus:border-gold"
              />
            </div>

            {/* Submit */}
            <div className="mt-14 flex items-center justify-between gap-6">
              <p className="text-[11px] text-cream/30">
                * Thông tin bắt buộc
              </p>
              <button
                type="submit"
                disabled={loading}
                className="group flex items-center gap-4 bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-umber transition-opacity hover:opacity-80 disabled:opacity-50"
              >
                {loading ? "Đang gửi..." : "Đăng ký tư vấn"}
                {!loading && (
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label, type, value, onChange, required, placeholder,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-3 block text-[10px] uppercase tracking-[0.22em] text-cream/40">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-b border-cream/20 bg-transparent pb-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/20 focus:border-gold"
      />
    </div>
  );
}
