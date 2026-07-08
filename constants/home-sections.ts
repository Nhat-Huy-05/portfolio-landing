export type HomeSection = {
  id: string;
  title: string;
  description: string;
  content: string;
};

export const homeSections: HomeSection[] = [
  {
    id: "about",
    title: "About",
    description: "Tìm hiểu sơ lược về dự án và phong cách thiết kế.",
    content:
      "Phần About trình bày tóm tắt về bản thân, kỹ năng và định hướng thiết kế. Thiết kế được xây dựng dựa trên hệ màu trong global.css và các thành phần có sẵn.",
  },
  {
    id: "introduce",
    title: "Introduce",
    description: "Giới thiệu bản thân và khả năng của bạn.",
    content:
      "Phần Introduce giải thích bạn làm gì, công nghệ bạn sử dụng và những gì bạn muốn mang đến cho khách hàng hoặc dự án.",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Thông tin liên hệ và cách kết nối.",
    content:
      "Phần Contact giúp khách hàng hoặc đối tác dễ dàng liên hệ với bạn qua email, mạng xã hội hoặc form liên hệ trên trang.",
  },
];
