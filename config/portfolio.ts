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
      id: "project-1",
      title: "Dự án 1",
      description: "Mô tả ngắn về dự án sẽ được cập nhật sau.",
      category: "Web App",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      highlights: [],
      featured: true
    },
    {
      id: "project-2",
      title: "Dự án 2",
      description: "Mô tả ngắn về dự án sẽ được cập nhật sau.",
      category: "SaaS",
      techStack: ["React", "Node.js", "PostgreSQL"],
      highlights: [],
      featured: true
    },
    {
      id: "project-3",
      title: "Dự án 3",
      description: "Mô tả ngắn về dự án sẽ được cập nhật sau.",
      category: "Mobile / Web",
      techStack: ["Next.js", "Prisma", "Vercel"],
      highlights: [],
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
