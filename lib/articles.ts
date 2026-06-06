export type ArticleSection = {
  type: "h2" | "h3" | "p" | "ul" | "img" | "cta";
  text?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  href?: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  category: string;
  readTime: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "thi-cong-noi-that-go-an-cuong-tai-thanh-hoa",
    title: "Thi công nội thất gỗ An Cường tại Thanh Hóa – Đơn vị thi công số 1",
    excerpt:
      "Nội Thất Kali chuyên thi công nội thất gỗ An Cường tại Thanh Hóa với đội ngũ thợ tay nghề cao, cam kết tiến độ và bảo hành dài hạn. Khám phá lý do hàng trăm gia đình tin tưởng chọn Kali.",
    date: "27.04.2026",
    coverImage: "/images/projects/minh/2.jpg",
    category: "Thi công",
    readTime: "7 phút đọc",
    sections: [
      {
        type: "p",
        text: "Trong những năm gần đây, thi công nội thất gỗ An Cường tại Thanh Hóa đang trở thành lựa chọn phổ biến của nhiều gia đình và chủ đầu tư nhờ vào khả năng kết hợp hoàn hảo giữa tính thẩm mỹ hiện đại và độ bền vượt trội. Tuy nhiên, không phải đơn vị nào cũng đảm bảo được chất lượng lắp đặt theo đúng tiêu chuẩn của nhà sản xuất An Cường.",
      },
      {
        type: "h2",
        text: "Xu hướng thi công nội thất gỗ An Cường tại Thanh Hóa hiện nay",
      },
      {
        type: "p",
        text: "Nhu cầu thiết kế không gian sống ngày càng tăng khiến thi công nội thất gỗ An Cường tại Thanh Hóa thu hút sự chú ý lớn. Xu hướng tối giản, tông màu trung tính và chất liệu gỗ công nghiệp cao cấp đang lên ngôi tại các công trình nhà phố, biệt thự và căn hộ.",
      },
      {
        type: "img",
        src: "/images/projects/minh/3.jpg",
        alt: "Thi công nội thất gỗ An Cường phòng bếp tại Thanh Hóa",
        caption: "Phòng bếp hoàn thiện với gỗ An Cường tại công trình nhà phố Thanh Hóa",
      },
      {
        type: "h2",
        text: "Ưu điểm khi thi công nội thất gỗ An Cường tại Thanh Hóa",
      },
      {
        type: "p",
        text: "Việc lựa chọn thi công nội thất gỗ An Cường tại Thanh Hóa mang lại nhiều lợi ích thiết thực:",
      },
      {
        type: "ul",
        items: [
          "Độ bền cao, chống ẩm và mối mọt vượt trội so với gỗ tự nhiên thông thường",
          "Bề mặt phủ Melamine hoặc Acrylic đa dạng màu sắc, dễ lau chùi",
          "Phù hợp khí hậu nhiệt đới ẩm của Thanh Hóa, ít biến dạng theo thời gian",
          "Giá thành hợp lý, tối ưu chi phí cho gia đình",
          "Thi công nhanh, đảm bảo tiến độ bàn giao",
        ],
      },
      {
        type: "h2",
        text: "Các hạng mục thi công nội thất gỗ An Cường phổ biến",
      },
      {
        type: "h3",
        text: "Nội thất phòng bếp",
      },
      {
        type: "p",
        text: "Tủ bếp gỗ An Cường là hạng mục được lựa chọn nhiều nhất, gồm tủ bếp trên, tủ bếp dưới, đảo bếp và kệ trang trí. Cánh tủ phủ Acrylic bóng gương hoặc Melamine nhám tạo nên vẻ đẹp hiện đại, sang trọng.",
      },
      {
        type: "h3",
        text: "Nội thất phòng ngủ",
      },
      {
        type: "p",
        text: "Giường ngủ, tủ quần áo âm tường và kệ trang trí sử dụng gỗ An Cường giúp phòng ngủ gọn gàng, tận dụng tối đa diện tích và tạo cảm giác ấm cúng.",
      },
      {
        type: "h3",
        text: "Nội thất phòng khách và phòng ngủ",
      },
      {
        type: "p",
        text: "Kệ tivi, tủ âm tường, vách ốp trang trí bằng gỗ An Cường là điểm nhấn quan trọng nâng cao tính thẩm mỹ cho toàn bộ không gian sống.",
      },
      {
        type: "img",
        src: "/images/projects/hoa/2.jpg",
        alt: "Thi công nội thất gỗ An Cường phòng ngủ Thanh Hóa",
        caption: "Phòng ngủ master với tủ âm tường gỗ An Cường",
      },
      {
        type: "h2",
        text: "Quy trình thi công nội thất gỗ An Cường tại Thanh Hóa từ Nội Thất Kali",
      },
      {
        type: "ul",
        items: [
          "Khảo sát thực tế và tư vấn giải pháp phù hợp với ngân sách",
          "Thiết kế 3D chi tiết, trình bày phương án và điều chỉnh theo yêu cầu",
          "Sản xuất tại xưởng với máy CNC hiện đại, kiểm tra chất lượng từng chi tiết",
          "Thi công lắp đặt tại công trình với đội thợ chuyên nghiệp",
          "Nghiệm thu và bảo hành 24 tháng",
        ],
      },
      {
        type: "h2",
        text: "Vì sao nên chọn Nội Thất Kali thi công nội thất gỗ An Cường tại Thanh Hóa?",
      },
      {
        type: "p",
        text: "Nội Thất Kali là đơn vị chuyên thi công nội thất gỗ An Cường tại Thanh Hóa với xưởng sản xuất hiện đại tại trung tâm thành phố. Chúng tôi sở hữu đội ngũ thiết kế dày dặn kinh nghiệm và thợ thi công lành nghề, đảm bảo mỗi công trình được hoàn thiện đúng tiến độ, đúng bản vẽ và có chế độ bảo hành rõ ràng.",
      },
      {
        type: "cta",
        text: "Nhận tư vấn miễn phí từ Nội Thất Kali →",
        href: "/#contact",
      },
    ],
  },
  {
    slug: "thi-cong-noi-that-tai-thanh-hoa",
    title: "Thi công nội thất tại Thanh Hóa – Giải pháp số 1 hoàn thiện không gian sống",
    excerpt:
      "Tìm đơn vị thi công nội thất tại Thanh Hóa uy tín? Nội Thất Kali cung cấp dịch vụ thiết kế và thi công trọn gói — từ tư vấn, sản xuất đến lắp đặt, bảo hành chính hãng.",
    date: "31.05.2026",
    coverImage: "/images/workshop/2.jpg",
    category: "Thi công",
    readTime: "8 phút đọc",
    sections: [
      {
        type: "p",
        text: "Thị trường thi công nội thất tại Thanh Hóa ngày càng phát triển mạnh, song không phải đơn vị nào cũng đảm bảo chất lượng thi công và dịch vụ hậu mãi bài bản. Bài viết này giúp bạn hiểu rõ quy trình, các hạng mục phổ biến và tiêu chí chọn đơn vị thi công uy tín.",
      },
      {
        type: "h2",
        text: "Tại sao cần lựa chọn đơn vị thi công nội thất uy tín?",
      },
      {
        type: "p",
        text: "Thi công nội thất là bước quan trọng quyết định đến chất lượng, thẩm mỹ và độ bền của không gian sống. Chọn sai đơn vị dẫn đến tình trạng chênh màu, cong vênh, không khớp bản vẽ và phát sinh chi phí sửa chữa.",
      },
      {
        type: "ul",
        items: [
          "Thợ tay nghề cao, qua đào tạo bài bản",
          "Vật liệu chính hãng, có chứng nhận xuất xứ",
          "Tiến độ thi công rõ ràng, cam kết bàn giao đúng hẹn",
          "Bảo hành sau bàn giao tối thiểu 24 tháng",
          "Xưởng sản xuất nội địa, dễ kiểm tra chất lượng",
        ],
      },
      {
        type: "h2",
        text: "Các hạng mục thi công nội thất tại Thanh Hóa phổ biến hiện nay",
      },
      {
        type: "ul",
        items: [
          "Thi công nội thất phòng khách — kệ tivi, vách ốp, trần thạch cao",
          "Thi công nội thất phòng bếp — tủ bếp, đảo bếp, kệ gia vị",
          "Thi công nội thất phòng ngủ — giường, tủ quần áo âm tường",
          "Phòng tắm — tủ lavabo, gương đèn, vách kính",
          "Phòng làm việc — bàn làm việc, giá sách, tủ tài liệu",
          "Thi công không gian thương mại — showroom, văn phòng, cafe",
        ],
      },
      {
        type: "img",
        src: "/images/projects/thi/2.jpg",
        alt: "Thi công nội thất tại Thanh Hóa - phòng khách",
        caption: "Không gian phòng khách hiện đại do Nội Thất Kali thi công tại Thanh Hóa",
      },
      {
        type: "h2",
        text: "Vật liệu sử dụng trong thi công nội thất tại Thanh Hóa",
      },
      {
        type: "h3",
        text: "Gỗ công nghiệp An Cường — vật liệu chủ đạo",
      },
      {
        type: "p",
        text: "Gỗ công nghiệp An Cường là lựa chọn hàng đầu trong thi công nội thất tại Thanh Hóa nhờ độ bền cao, chống ẩm tốt và đa dạng màu sắc. Với khí hậu nhiệt đới ẩm của Thanh Hóa, đây là vật liệu lý tưởng cho mọi hạng mục nội thất.",
      },
      {
        type: "h3",
        text: "Kết hợp đa vật liệu",
      },
      {
        type: "p",
        text: "Bên cạnh gỗ công nghiệp, Nội Thất Kali còn sử dụng kính cường lực, inox, đá marble nhân tạo và đèn LED để tạo điểm nhấn thẩm mỹ cho từng hạng mục.",
      },
      {
        type: "img",
        src: "/images/workshop/4.jpg",
        alt: "Xưởng sản xuất nội thất Kali Thanh Hóa",
        caption: "Xưởng sản xuất nội thất hiện đại của Nội Thất Kali tại Thanh Hóa",
      },
      {
        type: "h2",
        text: "Quy trình thi công nội thất tại Thanh Hóa của Nội Thất Kali",
      },
      {
        type: "ul",
        items: [
          "Khảo sát thực tế và tư vấn giải pháp",
          "Báo giá minh bạch theo từng hạng mục",
          "Sản xuất nội thất tại xưởng với máy CNC hiện đại",
          "Thi công lắp đặt và kiểm tra chất lượng tại công trình",
          "Bàn giao và bảo hành 24 tháng",
        ],
      },
      {
        type: "cta",
        text: "Nhận báo giá thi công nội thất miễn phí →",
        href: "/#contact",
      },
    ],
  },
  {
    slug: "thiet-ke-noi-that-nha-pho",
    title: "Thiết kế nội thất nhà phố – Giải pháp tối ưu không gian sống hiện đại",
    excerpt:
      "Thiết kế nội thất nhà phố đòi hỏi sự kết hợp hài hòa giữa tính công năng và thẩm mỹ. Nội Thất Kali chia sẻ kinh nghiệm thiết kế và thi công nhà phố tại Thanh Hóa.",
    date: "26.02.2026",
    coverImage: "/images/projects/hoa/4.jpg",
    category: "Thiết kế",
    readTime: "9 phút đọc",
    sections: [
      {
        type: "p",
        text: "Không gian nhà phố tại Thanh Hóa thường có chiều ngang hạn chế nhưng chiều sâu lớn, tạo ra nhiều thách thức trong thiết kế nội thất. Việc chọn phong cách, vật liệu và cách bố trí hợp lý sẽ biến một căn nhà nhỏ hẹp thành không gian sống lý tưởng.",
      },
      {
        type: "h2",
        text: "Thiết kế nội thất nhà phố là gì và vì sao cần làm sớm?",
      },
      {
        type: "p",
        text: "Thiết kế nội thất nhà phố là quá trình hoạch định và triển khai toàn bộ không gian bên trong căn nhà — từ bố trí mặt bằng, lựa chọn màu sắc, vật liệu đến từng chi tiết trang trí. Việc lập kế hoạch sớm giúp tối ưu chi phí và tránh phát sinh sửa đổi tốn kém.",
      },
      {
        type: "img",
        src: "/images/projects/minh/4.jpg",
        alt: "Thiết kế nội thất nhà phố hiện đại tại Thanh Hóa",
        caption: "Không gian phòng khách nhà phố hiện đại do Nội Thất Kali thiết kế",
      },
      {
        type: "h2",
        text: "Đặc thù không gian cần lưu ý khi thiết kế nội thất nhà phố",
      },
      {
        type: "ul",
        items: [
          "Mặt tiền hẹp (4–6m), chiều sâu lớn — cần giải pháp lấy sáng tự nhiên",
          "Tầng 1 thường kết hợp garage và phòng khách — bố trí linh hoạt",
          "Cầu thang chiếm nhiều diện tích — tận dụng gầm thang làm tủ lưu trữ",
          "Phòng ngủ các tầng cần bố trí độc lập, đảm bảo riêng tư",
          "Mái tôn hoặc sân thượng cần xử lý cách nhiệt, chống ồn",
        ],
      },
      {
        type: "h2",
        text: "Các phong cách thiết kế nội thất nhà phố được ưa chuộng",
      },
      {
        type: "p",
        text: "Tại Thanh Hóa hiện nay, các phong cách được ưa chuộng nhất bao gồm:",
      },
      {
        type: "ul",
        items: [
          "Hiện đại tối giản — đường nét sạch, màu trung tính, ít trang trí rườm rà",
          "Indochine — kết hợp gỗ tự nhiên, màu trầm ấm và chi tiết Đông Dương",
          "Scandinavian — trắng, gỗ sáng, ánh sáng tự nhiên làm chủ đạo",
          "Tân cổ điển — đường nét tinh tế, màu đất, phù hợp biệt thự và nhà phố rộng",
        ],
      },
      {
        type: "img",
        src: "/images/projects/hoa/3.jpg",
        alt: "Phòng ngủ nhà phố phong cách hiện đại Thanh Hóa",
        caption: "Phòng ngủ nhà phố phong cách hiện đại tối giản",
      },
      {
        type: "h2",
        text: "Bộ trio công năng khoa học trong thiết kế nội thất nhà phố",
      },
      {
        type: "p",
        text: "Một thiết kế nhà phố thành công luôn cân bằng ba yếu tố: lưu trữ thông minh, ánh sáng đa lớp và luồng di chuyển hợp lý. Ba yếu tố này quyết định đến cảm giác rộng rãi hay chật hẹp dù diện tích thực tế như nhau.",
      },
      {
        type: "h2",
        text: "Vai trò của vật liệu trong thiết kế nội thất nhà phố",
      },
      {
        type: "p",
        text: "Vật liệu không chỉ ảnh hưởng đến thẩm mỹ mà còn quyết định độ bền và chi phí bảo trì. Nội Thất Kali tư vấn sử dụng gỗ công nghiệp An Cường cho nội thất phòng bếp và phòng ngủ, kết hợp đá nhân tạo cho mặt bàn bếp và kính cường lực cho vách ngăn.",
      },
      {
        type: "h2",
        text: "Nội Thất Kali – Đơn vị thiết kế nội thất nhà phố gần với thực tế",
      },
      {
        type: "p",
        text: "Với kinh nghiệm thiết kế và thi công hàng trăm công trình nhà phố tại Thanh Hóa, Nội Thất Kali hiểu rõ đặc điểm khí hậu, thói quen sinh hoạt và ngân sách thực tế của từng gia đình. Chúng tôi không đề xuất những giải pháp xa rời thực tế mà luôn tìm ra thiết kế tối ưu trong khung ngân sách của gia chủ.",
      },
      {
        type: "cta",
        text: "Tư vấn thiết kế nội thất nhà phố miễn phí →",
        href: "/#contact",
      },
    ],
  },
];
