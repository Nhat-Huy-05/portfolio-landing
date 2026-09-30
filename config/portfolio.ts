export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    title: string;
    tagline: string;
    status: string;
    shortBio: string;
    about: {
      paragraphs: string[];
      corePrinciples: {
        title: string;
        description: string;
      }[];
    };
    location: string;
    email: string;
  };
  navItems: NavItem[];
  skillCategories: SkillCategory[];
  contact: {
    title: string;
    subtitle: string;
    email: string;
    location: string;
  };
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Nguyễn Huy",
    title: "Full-stack Engineer",
    tagline:
      "Làm web chỉn chu, từ cảm giác khi dùng đến cách mọi thứ vận hành bên dưới.",
    status: "Đang mở với cơ hội phù hợp",
    shortBio:
      "Tôi xây dựng sản phẩm web từ giao diện đến backend, quan tâm đồng thời đến trải nghiệm người dùng, hiệu năng và mã nguồn có thể tiếp tục phát triển.",
    about: {
      paragraphs: [
        "Tôi thích phần giao nhau giữa giao diện và kỹ thuật: một sản phẩm cần dễ hiểu khi sử dụng, nhưng cũng cần có cấu trúc đủ rõ để tiếp tục thay đổi.",
        "Khi xây dựng tính năng, tôi chú ý đến những điều nhỏ người dùng cảm nhận được và những quyết định trong codebase sẽ giúp người tiếp theo làm việc dễ dàng hơn.",
      ],
      corePrinciples: [
        {
          title: "Rõ ràng trước, phức tạp sau",
          description:
            "Chọn cấu trúc vừa đủ để người khác có thể đọc, kiểm thử và tiếp tục phát triển.",
        },
        {
          title: "Chi tiết nhỏ cũng là trải nghiệm",
          description:
            "Nhịp điệu, trạng thái và phản hồi của giao diện đều góp phần làm sản phẩm dễ dùng hơn.",
        },
        {
          title: "Đo rồi mới tối ưu",
          description:
            "Ưu tiên cải thiện có thể quan sát và kiểm chứng, thay vì tối ưu chỉ để có con số đẹp.",
        },
      ],
    },
    location: "TP. Hồ Chí Minh, Việt Nam",
    email: "contact@huydev.me",
  },
  navItems: [
    { label: "Góc nhìn", href: "#about" },
    { label: "Công cụ", href: "#skills" },
    { label: "Liên hệ", href: "#contact" },
  ],
  skillCategories: [
    {
      category: "Giao diện",
      description:
        "Từ component đến trải nghiệm hoàn chỉnh trên nhiều kích thước màn hình.",
      skills: [
        { name: "React 19", highlight: true },
        { name: "Next.js", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "Web accessibility" },
      ],
    },
    {
      category: "Backend & dữ liệu",
      description: "Xây dựng API và các phần nền tảng phía sau sản phẩm.",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "NestJS", highlight: true },
        { name: "PostgreSQL", highlight: true },
        { name: "Redis" },
        { name: "REST APIs" },
      ],
    },
    {
      category: "Triển khai",
      description: "Tự động hóa quy trình và đưa ứng dụng lên môi trường thật.",
      skills: [
        { name: "Docker", highlight: true },
        { name: "GitHub Actions", highlight: true },
        { name: "AWS" },
        { name: "Linux" },
        { name: "Vercel" },
      ],
    },
  ],
  contact: {
    title: "Có điều gì hay ho?",
    subtitle:
      "Tôi sẵn sàng trò chuyện về công việc, ý tưởng web hoặc một cơ hội phù hợp.",
    email: "contact@huydev.me",
    location: "TP. Hồ Chí Minh, Việt Nam",
  },
};

export default portfolioConfig;
