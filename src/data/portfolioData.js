import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  DatabaseZap,
  Figma,
  Github,
  LayoutDashboard,
  Linkedin,
  Mail,
  Rocket,
  ScanSearch,
  Settings2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import profilePhoto from "../assets/IMG_4301.JPG";
import verseAiPreview from "../assets/verseai.png";
import edemyPreview from "../assets/edemy.png";

const certificateFile = (filename) => new URL(`../../Certificate/${filename}`, import.meta.url).href;

export const portfolioData = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ],
  profile: {
    name: "Falgun Patel",
    role: "Web Developer",
    headline: "Building polished web experiences that feel sharp, scalable, and production ready.",
    intro:
      "Web developer currently pursuing an M.Sc. in Computer Science, with hands-on experience creating responsive dashboards, e-commerce websites, and full-stack products using React, JavaScript, Tailwind CSS, and REST APIs.",
    location: "Pune, India",
    email: "falgunpatel071@gmail.com",
    phone: "+91 9461573282",
    availability: "Open to web development roles, internships, and freelance collaborations.",
    resumeUrl: "/resume/Falgun-Patel-Resume.pdf",
    profileImage: profilePhoto,
    socialLinks: [
      { label: "GitHub", href: "https://github.com/Falgunp07", icon: Github },
      { label: "LinkedIn", href: "https://linkedin.com/in/falgun-patel-7386701b0", icon: Linkedin },
      { label: "Email", href: "mailto:falgunpatel071@gmail.com", icon: Mail },
    ],
    stats: [
      { value: "15+", label: "Reusable UI components" },
      { value: "2", label: "Deployed flagship products" },
      { value: "React", label: "Current internship focus" },
    ],
  },
  about: {
    title: "Crafting modern web experiences with clean structure and strong UI instincts.",
    paragraphs: [
      "My core strength is turning product requirements into web interfaces that feel clear, responsive, and trustworthy. I enjoy working on component systems, data-heavy dashboards, and user flows that need both visual polish and practical engineering.",
      "Alongside UI work, I have experience integrating REST APIs, handling authentication with Clerk and React Context, managing deployments on Vercel, and supporting production websites from build to launch.",
    ],
    highlights: [
      {
        icon: LayoutDashboard,
        title: "UI Systems",
        description: "Reusable React components, responsive layouts, and clean visual hierarchy for real products.",
      },
      {
        icon: Settings2,
        title: "Product Thinking",
        description: "Focus on practical UX, reliable edge states, and web flows that support business operations.",
      },
      {
        icon: Rocket,
        title: "Shipping Mindset",
        description: "Comfortable moving from design polish to API integration, deployment, and post-launch refinement.",
      },
    ],
  },
  skills: [
    {
      title: "Web Engineering",
      icon: Code2,
      items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Application UX",
      icon: Smartphone,
      items: ["Dashboard UI", "Component Reuse", "Form Flows", "Accessibility Basics", "Micro-interactions"],
    },
    {
      title: "Backend Support",
      icon: DatabaseZap,
      items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "Postman"],
    },
    {
      title: "Delivery Stack",
      icon: ScanSearch,
      items: ["GitHub", "CI/CD", "Vercel", "Clerk Auth", "SEO Optimization", "WooCommerce"],
    },
  ],
  experiences: [
    {
      title: "Frontend Developer Intern (React)",
      company: "Patrixel",
      period: "Jan 2026 - Present",
      location: "Pune, India",
      tags: ["React", "Vite", "Tailwind CSS", "REST APIs"],
      bullets: [
        "Developed responsive React dashboards using hooks, Context API, and Tailwind CSS with 15+ reusable UI components for admin and merchant portals.",
        "Integrated RESTful APIs for authentication and user management with focused error handling and data transformation.",
        "Built searchable data tables with multi-column sorting, pagination, and role-based filtering for admin workflows.",
        "Implemented client-side authentication state management with React Context, localStorage persistence, and protected route navigation.",
      ],
    },
    {
      title: "Website Developer",
      company: "caliz.online (Freelance)",
      period: "Jun 2025 - Oct 2025",
      location: "Remote",
      tags: ["WordPress", "WooCommerce", "SEO", "Deployment"],
      bullets: [
        "Developed and deployed a complete WordPress and WooCommerce e-commerce website, including store setup, product configuration, and payment integration.",
        "Customized themes and improved UI and UX for responsive browsing and smoother navigation across devices.",
        "Applied performance optimization, SEO best practices, and security configurations to improve production readiness.",
        "Managed hosting, domain configuration, email integration, and post-deployment maintenance for stable day-to-day operations.",
      ],
    },
  ],
  projects: [
    {
      title: "Authentication System",
      subtitle: "Secure backend authentication API",
      period: "Mar 2026 - Apr 2026",
      repoUrl: "https://github.com/Falgunp07/Authentication-Backend",
      stack: ["Node.js", "Express.js", "MongoDB", "JWT", "SHA-256", "Email OTP"],
      description:
        "A robust backend authentication service focused on secure identity management, persistent sessions, token lifecycle control, and hardened account protection.",
      highlights: [
        "Built secure registration, identity, and authorization APIs using Node.js, Express.js, and MongoDB.",
        "Engineered dual-token JWT architecture with 15-minute access tokens and 7-day HTTP-only refresh tokens.",
        "Implemented automated email verification using time-sensitive OTP flows and custom HTML email templates.",
        "Added device session tracking for remote logout and applied SHA-256 hashing for password and token safety.",
      ],
      accent: "linear-gradient(135deg, rgba(67, 196, 143, 0.2), rgba(58, 231, 255, 0.1))",
    },
    {
      title: "Verse AI",
      subtitle: "Multi-service AI utility platform",
      period: "Aug 2025 - Oct 2025",
      image: verseAiPreview,
      liveUrl: "https://verseaiuser.vercel.app/",
      stack: ["React", "Node.js", "Express", "PostgreSQL", "Clerk"],
      description:
        "A full-stack PERN product designed to route requests across multiple third-party AI services through a centralized API gateway.",
      highlights: [
        "Built the frontend experience around utility workflows and subscription-aware user access.",
        "Implemented authentication, usage limits, and subscription handling with Clerk.",
        "Validated and tested API behavior with Postman to keep request and response flows dependable.",
      ],
      accent: "linear-gradient(135deg, rgba(58, 231, 255, 0.2), rgba(58, 102, 255, 0.12))",
    },
    {
      title: "Edemy LMS",
      subtitle: "Responsive learning platform",
      period: "Jun 2025 - Aug 2025",
      image: edemyPreview,
      liveUrl: "https://mern-frontend-blue-one.vercel.app/",
      stack: ["React", "MongoDB", "Express", "Node.js", "CI/CD"],
      description:
        "A MERN-based learning management experience with responsive layouts, authentication flow support, and production deployment on Vercel.",
      highlights: [
        "Developed the responsive LMS frontend with clear course and learning flows.",
        "Integrated authentication and coordinated deployment through CI/CD on Vercel.",
        "Tested endpoints, auth flow, and error handling using Postman during integration.",
      ],
      accent: "linear-gradient(135deg, rgba(255, 122, 89, 0.22), rgba(255, 199, 89, 0.12))",
    },
  ],
  certificates: [
    {
      title: "AI Tech Summit",
      issuer: "AI Tech Summit",
      year: "2026",
      icon: Rocket,
      fileUrl: certificateFile("AI Tech Summit .pdf"),
    },
    {
      title: "Learn JavaScript",
      issuer: "CodeChef",
      year: "2024",
      icon: BadgeCheck,
      fileUrl: certificateFile("CodeChef - Learn Javascript.pdf"),
    },
    {
      title: "DevOps Internship Training",
      issuer: "Training Program",
      year: "2024",
      icon: BriefcaseBusiness,
      fileUrl: certificateFile("Falgun Patel - DevOps Internship - Training.pdf"),
    },
    {
      title: "Participation Certificate",
      issuer: "Professional Program",
      year: "2024",
      icon: Award,
      fileUrl: certificateFile("Falgun Patel - Participation Certificate.pdf"),
    },
    {
      title: "Introduction to AI",
      issuer: "IBM x Coursera",
      year: "2026",
      icon: ScanSearch,
      fileUrl: certificateFile("IBM Coursera - Intro to AI.pdf"),
    },
    {
      title: "Introduction to Frontend",
      issuer: "Meta x Coursera",
      year: "2026",
      icon: Figma,
      fileUrl: certificateFile("Meta Coursera - Intro to Frontend.pdf"),
    },
    {
      title: "Web Development Workshop",
      issuer: "Microsoft",
      year: "2025",
      icon: ArrowUpRight,
      fileUrl: certificateFile("Microsoft - Web Development Workshop.pdf"),
    },
    {
      title: "Participation Certificate",
      issuer: "Naukri Campus",
      year: "2026",
      icon: ShieldCheck,
      fileUrl: certificateFile("NaukriCampus_Certificate_Participation.pdf"),
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "MIT World Peace University, Pune",
      period: "Jul 2025 - Present",
      score: "CGPA 7.32",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "NVPAS, Anand",
      period: "Jun 2022 - May 2025",
      score: "CGPA 9.12",
    },
    {
      degree: "Higher Secondary Certificate (PCM)",
      institution: "Parth School, Vadodara",
      period: "Mar 2022",
      score: "48.92%",
    },
    {
      degree: "Secondary School Certificate",
      institution: "My Shannen School, Vadodara",
      period: "Mar 2020",
      score: "77.66%",
    },
  ],
  contact: {
    title: "Let's build something that looks sharp and works hard.",
    description:
      "I'm open to web development opportunities, internships, and freelance work where strong UI execution and dependable implementation matter.",
    chips: ["React UI", "Dashboard Websites", "API Integration", "Freelance Projects"],
  },
};
