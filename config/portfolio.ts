export interface SocialLink {
  name: string
  href: string
  icon: "github" | "linkedin" | "twitter" | "mail" | "telegram"
  ariaLabel: string
}

export interface NavItem {
  label: string
  href: string
}

export interface SkillItem {
  name: string
  highlight?: boolean
}

export interface SkillCategory {
  category: string
  description: string
  skills: SkillItem[]
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  category: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  highlights: string[]
  featured: boolean
}

export interface StatItem {
  value: string
  label: string
  description: string
}

export interface PortfolioConfig {
  personal: {
    name: string
    title: string
    tagline: string
    status: string
    shortBio: string
    about: {
      paragraphs: string[]
      stats: StatItem[]
      corePrinciples: {
        title: string
        description: string
      }[]
    }
    location: string
    email: string
    phone: string
    resumeUrl: string
  }
  navItems: NavItem[]
  socialLinks: SocialLink[]
  skillCategories: SkillCategory[]
  projects: ProjectItem[]
  contact: {
    title: string
    subtitle: string
    email: string
    phone: string
    location: string
    workingHours: string
    responseTime: string
  }
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Nguyễn Huy",
    title: "Senior Full-stack Engineer",
    tagline: "Xây dựng ứng dụng web hiện đại, tối ưu hiệu năng và kiến trúc chuẩn mực.",
    status: "Sẵn sàng đón nhận cơ hội & dự án mới",
    shortBio:
      "Kỹ sư phần mềm đam mê công nghệ với chuyên môn sâu về Next.js, TypeScript, Tailwind CSS, hệ sinh thái Node.js và Cloud Native. Tập trung vào việc tạo ra sản phẩm tinh tế, giao diện mượt mà và mã nguồn dễ mở rộng.",
    about: {
      paragraphs: [
        "Với hơn 4 năm kinh nghiệm thực chiến trong phát triển sản phẩm web từ giai đoạn ý tưởng (0-to-1) cho đến quy mô mở rộng hàng triệu người dùng, tôi luôn ưu tiên trải nghiệm người dùng cuối cùng song song với tính ổn định kỹ thuật.",
        "Tôi tin rằng một sản phẩm xuất sắc không chỉ nằm ở giao diện bắt mắt mà còn đến từ cấu trúc thư mục rành mạch, tính năng tái sử dụng component cao, type-safety tuyệt đối và quy trình CI/CD mượt mà.",
        "Ngoài thời gian lập trình, tôi thường xuyên đóng góp cho các dự án nguồn mở, viết chia sẻ kỹ thuật và tìm tòi các kỹ thuật tối ưu hóa hiệu năng web mới nhất."
      ],
      stats: [
        {
          value: "4+ Năm",
          label: "Kinh nghiệm thực chiến",
          description: "Phát triển frontend & backend toàn diện"
        },
        {
          value: "25+",
          label: "Dự án đã bàn giao",
          description: "Từ SaaS, E-commerce đến Web3 & AI tooling"
        },
        {
          value: "99.9%",
          label: "Uptime & Performance",
          description: "Chuẩn Lighthouse SEO & Core Web Vitals"
        }
      ],
      corePrinciples: [
        {
          title: "Clean Architecture & DRY",
          description: "Mã nguồn rõ ràng, phân tách trách nhiệm cụ thể và dễ dàng kiểm thử, bảo trì dài hạn."
        },
        {
          title: "Design System Driven",
          description: "Nhất quán 100% về token màu sắc, typography và spacing thông qua CSS Variables."
        },
        {
          title: "Hiệu năng là cốt lõi",
          description: "Tối ưu hóa thời gian tải trang, First Contentful Paint (FCP) và Largest Contentful Paint (LCP)."
        }
      ]
    },
    location: "TP. Hồ Chí Minh, Việt Nam",
    email: "contact@huydev.me",
    phone: "+84 (0) 90 123 4567",
    resumeUrl: "#contact"
  },
  navItems: [
    { label: "Giới thiệu", href: "#about" },
    { label: "Kỹ năng", href: "#skills" },
    { label: "Dự án", href: "#projects" },
    { label: "Liên hệ", href: "#contact" }
  ],
  socialLinks: [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: "github",
      ariaLabel: "Xem trang GitHub cá nhân"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "linkedin",
      ariaLabel: "Kết nối qua LinkedIn"
    },
    {
      name: "Twitter / X",
      href: "https://twitter.com",
      icon: "twitter",
      ariaLabel: "Theo dõi trên Twitter/X"
    },
    {
      name: "Email",
      href: "mailto:contact@huydev.me",
      icon: "mail",
      ariaLabel: "Gửi thư điện tử liên hệ"
    },
    {
      name: "Telegram",
      href: "https://t.me",
      icon: "telegram",
      ariaLabel: "Nhắn tin qua Telegram"
    }
  ],
  skillCategories: [
    {
      category: "Frontend Architecture",
      description: "Xây dựng giao diện phản hồi nhanh, mượt mà và tương thích mọi thiết bị",
      skills: [
        { name: "React 19", highlight: true },
        { name: "Next.js (App Router)", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "shadcn/ui", highlight: true },
        { name: "Zustand" },
        { name: "TanStack Query" },
        { name: "Framer Motion" },
        { name: "Web Vitals & SEO" }
      ]
    },
    {
      category: "Backend & Systems",
      description: "Thiết kế API chuẩn RESTful, GraphQL và xử lý logic nghiệp vụ an toàn",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "NestJS", highlight: true },
        { name: "PostgreSQL", highlight: true },
        { name: "Redis", highlight: true },
        { name: "Prisma ORM" },
        { name: "GraphQL" },
        { name: "RESTful APIs" },
        { name: "Microservices" }
      ]
    },
    {
      category: "DevOps & Cloud Infrastructure",
      description: "Triển khai hệ thống tự động hóa, giám sát và bảo đảm độ sẵn sàng cao",
      skills: [
        { name: "Vercel", highlight: true },
        { name: "Docker", highlight: true },
        { name: "AWS (S3, EC2, CloudFront)" },
        { name: "GitHub Actions CI/CD", highlight: true },
        { name: "Cloudflare" },
        { name: "Nginx" },
        { name: "Linux Server" }
      ]
    },
    {
      category: "Tools & Methodologies",
      description: "Quy trình làm việc chuyên nghiệp, kiểm thử và quản lý chất lượng phần mềm",
      skills: [
        { name: "Git & GitHub Workflow", highlight: true },
        { name: "Figma to Code" },
        { name: "Vitest / Jest" },
        { name: "Playwright E2E" },
        { name: "Turborepo" },
        { name: "Agile / Scrum" }
      ]
    }
  ],
  projects: [
    {
      id: "saas-analytics",
      title: "PulseMetrics - Nền tảng SaaS Phân tích Dữ liệu",
      description:
        "Bảng điều khiển phân tích thời gian thực xử lý hơn 10 triệu sự kiện mỗi ngày. Tích hợp biểu đồ trực quan, phân quyền đa người dùng và hệ thống cảnh báo tự động.",
      category: "SaaS & Dashboard",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com/demo/pulse-metrics",
      githubUrl: "https://github.com/example/pulse-metrics",
      highlights: [
        "Xử lý dữ liệu real-time với WebSockets và Redis pub/sub",
        "Tối ưu SSR giúp giảm 45% thời gian phản hồi trang",
        "Đồng bộ theme sáng/tối toàn diện"
      ],
      featured: true
    },
    {
      id: "ai-content-studio",
      title: "OmniAI - Bộ công cụ Trợ lý Sáng tạo Nội dung",
      description:
        "Ứng dụng AI đa tính năng hỗ trợ tạo kịch bản, tóm tắt tài liệu và trích xuất dữ liệu thông minh qua API OpenAI và Claude, kèm theo quản lý phiên bản tài liệu.",
      category: "AI & Productivity",
      techStack: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Vercel AI SDK"],
      liveUrl: "https://example.com/demo/omni-ai",
      githubUrl: "https://github.com/example/omni-ai",
      highlights: [
        "Giao diện streaming phản hồi trực tiếp không có độ trễ",
        "Kiến trúc modular dễ dàng bổ sung mô hình LLM mới",
        "Hỗ trợ xuất file đa định dạng Markdown, PDF, DOCX"
      ],
      featured: true
    },
    {
      id: "ecommerce-storefront",
      title: "Aura Commerce - Nền tảng Thương mại Điện tử",
      description:
        "Hệ thống bán hàng trực tuyến hiệu năng cao với trải nghiệm checkout 1 bước, giỏ hàng tức thời và tích hợp cổng thanh toán bảo mật.",
      category: "E-Commerce",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe API", "Vercel"],
      liveUrl: "https://example.com/demo/aura-commerce",
      githubUrl: "https://github.com/example/aura-commerce",
      highlights: [
        "Điểm số Google Lighthouse 100/100 tuyệt đối",
        "Tối ưu hình ảnh tự động qua next/image",
        "Bảo mật thanh toán chuẩn PCI-DSS qua Stripe Webhook"
      ],
      featured: true
    },
    {
      id: "dev-toolkit",
      title: "DevForge - Bộ công cụ Tiện ích dành cho Lập trình viên",
      description:
        "Tập hợp các tiện ích mã nguồn mở chạy hoàn toàn trên trình duyệt: JSON formatter, regex tester, code diff, token inspector và mã hóa dữ liệu.",
      category: "Developer Tooling",
      techStack: ["Next.js", "TypeScript", "Web Workers", "Tailwind CSS", "shadcn/ui"],
      liveUrl: "https://example.com/demo/dev-forge",
      githubUrl: "https://github.com/example/dev-forge",
      highlights: [
        "Chạy offline 100% không gửi dữ liệu người dùng lên server",
        "Sử dụng Web Workers để xử lý dữ liệu lớn trên client",
        "Hơn 1.200 lượt stars trên GitHub"
      ],
      featured: false
    }
  ],
  contact: {
    title: "Hãy cùng kết nối & tạo dựng giá trị",
    subtitle:
      "Tôi luôn hào hứng với các ý tưởng mới, dự án tiềm năng hoặc đơn giản là chia sẻ góc nhìn kỹ thuật.",
    email: "contact@huydev.me",
    phone: "+84 (0) 90 123 4567",
    location: "TP. Hồ Chí Minh, Việt Nam",
    workingHours: "Thứ 2 - Thứ 6: 09:00 - 18:00 (GMT+7)",
    responseTime: "Phản hồi trong vòng 24 giờ làm việc"
  }
}

export default portfolioConfig
