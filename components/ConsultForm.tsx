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
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="consult"
      className="bg-umber px-4 py-20 text-cream md:px-6 md:py-28 lg:px-10"
    >
      {/* ── 2-col: info left / form right ── */}
      <div className="md:grid md:grid-cols-12 md:gap-16">

        {/* Left: heading + contact info */}
        <div className="mb-12 md:col-span-5 md:mb-0">
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
            Đăng ký tư vấn miễn phí
          </p>
          <h2 className="font-display text-4xl font-semibold uppercase leading-[1.05] text-cream md:text-5xl">
            Bắt đầu<br />dự án<br />của bạn.
          </h2>

          <div className="mt-10 space-y-6 border-t border-cream/10 pt-8 text-sm text-cream/50">
            <p className="leading-[1.75]">
              Điền thông tin — đội ngũ KALI sẽ liên hệ trong vòng
              24 giờ để trao đổi về không gian và ngân sách của bạn.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-lg">☎</span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-cream/30">Hotline</p>
                  <a href="tel:0848616688" className="mt-1 block text-cream transition-opacity hover:opacity-60">
                    0848 61 6688
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-cream/30">Showroom</p>
                  <p className="mt-1 text-cream/70">
                    08 Nguyễn Duy Hiệu, TP Thanh Hóa
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🕐</span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-cream/30">Giờ làm việc</p>
                  <p className="mt-1 text-cream/70">08:00 — 22:00 · Tất cả các ngày</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="md:col-span-7">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center md:py-0">
              <p className="font-display text-5xl font-semibold italic text-gold md:text-6xl">
                Cảm ơn!
              </p>
              <p className="mx-auto mt-6 max-w-xs text-sm leading-relaxed text-cream/50">
                Chúng tôi đã nhận được thông tin và sẽ liên hệ bạn trong 24 giờ.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name:"", phone:"", space:"", area:"", note:"" }); }}
                className="mt-10 text-[11px] uppercase tracking-[0.2em] text-cream/30 transition-opacity hover:text-cream/60"
              >
                ← Gửi yêu cầu mới
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <Field
                label="Họ và tên *"
                type="text"
                value={form.name}
                onChange={set("name")}
                required
                placeholder="Nguyễn Văn A"
              />

              {/* Phone */}
              <Field
                label="Số điện thoại *"
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                required
                placeholder="0912 345 678"
              />

              {/* Space type + area in a row */}
              <div className="grid grid-cols-2 gap-6">
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
                    <option value="" disabled>Chọn loại</option>
                    {spaceTypes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute bottom-3 right-0 text-cream/30 text-xs">↓</span>
                </div>

                <Field
                  label="Diện tích (m²)"
                  type="text"
                  value={form.area}
                  onChange={set("area")}
                  placeholder="VD: 120"
                />
              </div>

              {/* Note */}
              <div>
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
              <div className="flex items-center justify-between pt-2">
                <p className="text-[10px] text-cream/25 uppercase tracking-[0.15em]">* Bắt buộc</p>
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center gap-3 bg-gold px-7 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-umber transition-opacity hover:opacity-80 disabled:opacity-50"
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
