export type Project = {
  slug: string;
  index: string;
  name: string;
  title: string;
  location: string;
  area: string;
  material: string;
  year: string;
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "mr-minh",
    index: "01",
    name: "Mr. Minh",
    title: "Nhà phố Mr Minh",
    location: "Đông Hải — Thanh Hóa",
    area: "180 m²",
    material: "Nhà phố",
    year: "2024",
    cover: "/images/projects/minh/1.jpg",
    gallery: [1,2,3,4,5,6,7,8,9,10,11,12].map(n => `/images/projects/minh/${n}.jpg`),
  },
  {
    slug: "mr-hoa",
    index: "02",
    name: "Mr. Hòa",
    title: "Biệt thự Mr Hòa",
    location: "Triệu Sơn — Thanh Hóa",
    area: "150 m²",
    material: "Biệt thự",
    year: "2023",
    cover: "/images/projects/hoa/1.jpg",
    gallery: [1,2,3,4,5,6,7].map(n => `/images/projects/hoa/${n}.jpg`),
  },
  {
    slug: "mr-thi",
    index: "03",
    name: "Anh Thi",
    title: "Nhà ở Mr Thi",
    location: "Quảng Thịnh — TP Thanh Hóa",
    area: "220 m²",
    material: "Nhà phố",
    year: "2023",
    cover: "/images/projects/thi/4.jpg",
    gallery: [1,2,3,4,5,6,7,8,9].map(n => `/images/projects/thi/${n}.jpg`),
  },
  {
    slug: "mr-tu",
    index: "04",
    name: "Mr. Tú",
    title: "Căn hộ Vinhome Star City",
    location: "Vinhome Star City — TP Thanh Hóa",
    area: "220 m²",
    material: "Biệt thự",
    year: "2022",
    cover: "/images/projects/tu/3.jpg",
    gallery: [1,2,3,4,5,6,7,8].map(n => `/images/projects/tu/${n}.jpg`),
  },
];

export type Service = {
  index: string;
  title: string;
  desc: string;
  image: string;
};

export const services: Service[] = [
  {
    index: "01",
    title: "Thiết kế nội thất nhà phố",
    desc: "Concept không gian sống tinh tế, tối ưu công năng cho từng mét vuông nhà phố hiện đại.",
    image: "/images/hero/hero-1.jpg",
  },
  {
    index: "02",
    title: "Thi công nội thất trọn gói",
    desc: "Đồng hành từ bản vẽ đến bàn giao — một đầu mối, một tiêu chuẩn, không phát sinh.",
    image: "/images/hero/hero-3.jpg",
  },
  {
    index: "03",
    title: "Nội thất gỗ An Cường",
    desc: "Vật liệu chính hãng, bền màu theo thời gian, gia công chuẩn xác tại xưởng riêng.",
    image: "/images/hero/hero-4.jpg",
  },
  {
    index: "04",
    title: "Thiết kế biệt thự cao cấp",
    desc: "Ngôn ngữ thẩm mỹ riêng cho từng gia chủ — sang trọng, ấm cúng và bền vững.",
    image: "/images/hero/hero-5.jpg",
  },
];
