import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

// Bold neo-grotesque — the "ART DIRECTION" voice
const grotesk = Archivo({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-grotesk",
  display: "swap",
});

// Elegant high-contrast serif — the "& VISUAL STRATEGY" voice
const serif = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Body / UI text — best Vietnamese diacritic rendering
const body = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KALI Furniture — Thiết kế & Thi công Nội thất | Thanh Hóa",
  description:
    "KALI — đơn vị hàng đầu về thiết kế và thi công nội thất tại Thanh Hóa. Kiến tạo không gian mái ấm cho gia đình bạn.",
  keywords: [
    "nội thất Kali",
    "thiết kế nội thất Thanh Hóa",
    "thi công nội thất",
    "gỗ An Cường",
  ],
  openGraph: {
    title: "KALI Furniture — Kiến tạo không gian mái ấm",
    description:
      "Đơn vị hàng đầu về thiết kế và thi công nội thất tại Thanh Hóa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${grotesk.variable} ${serif.variable} ${body.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
