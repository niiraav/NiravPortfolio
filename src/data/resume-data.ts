import avatarImage from "@/assets/avatar.jpg";

export interface ResumeData {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
  work: {
    title: string;
    company: string;
    companyUrl?: string;
    period: string;
    location: string;
    bullets: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    location: string;
    bullets: string[];
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
}

export const resumeData: ResumeData = {
  name: "Nirav Arvinda",
  title: "Senior Product Designer",
  avatar: avatarImage,
  bio: "I'm a curious and enthusiastic product designer with a side passion for code and solving user problems. Whether it's optimising merchant dashboards or simplifying checkout flows, I blend creative problem-solving with rigorous logic.",
  links: [
    { label: "Portfolio", href: "/", external: false },
    { label: "X", href: "https://x.com/niiraav", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/niiraav", external: true },
    { label: "Email", href: "mailto:hello@nirav.design", external: true },
  ],
  work: [
    {
      title: "Senior Product Designer",
      company: "Worldpay",
      companyUrl: "https://worldpay.com",
      period: "March 2024 to Present",
      location: "London, UK",
      bullets: [
        "Leading merchant experience initiatives across self-service platforms",
        "Designing contract renewal flows that increased digital adoption",
        "Collaborating with engineering on component library development",
      ],
    },
    {
      title: "Senior Product Designer",
      company: "Oak National Academy",
      companyUrl: "https://thenational.academy",
      period: "Nov 2023 to Present",
      location: "Remote, UK",
      bullets: [
        "Designing accessible learning experiences for teachers and students",
        "Leading UX strategy for curriculum and lesson planning tools",
        "Working with cross-functional teams to improve educational outcomes",
      ],
    },
    {
      title: "Senior UX/Interaction Designer",
      company: "Microsoft Teams",
      companyUrl: "https://microsoft.com/teams",
      period: "Nov 2022 to Nov 2023",
      location: "London, UK",
      bullets: [
        "Designed interaction patterns for Teams collaboration features",
        "Contributed to Teams design system and component guidelines",
        "Conducted user research to improve meeting experiences",
      ],
    },
    {
      title: "Product Designer (UI Focused)",
      company: "Sage",
      companyUrl: "https://sage.com",
      period: "Nov 2021 to Sept 2022",
      location: "London, UK",
      bullets: [
        "Created UI designs for accounting and business management tools",
        "Worked on design system components and pattern libraries",
        "Collaborated with product teams on feature development",
      ],
    },
    {
      title: "Senior Product Designer",
      company: "Gophr",
      companyUrl: "https://gophr.com",
      period: "Sept 2021 to May 2022",
      location: "London, UK",
      bullets: [
        "Led design for same-day delivery logistics platform",
        "Redesigned courier and merchant booking experiences",
        "Improved conversion rates through UX optimizations",
      ],
    },
    {
      title: "UX/UI Designer",
      company: "Buzz Bingo",
      companyUrl: "https://buzzbingo.com",
      period: "April 2019 to Sept 2022",
      location: "London, UK",
      bullets: [
        "Designed mobile app and web experiences for gaming platform",
        "Created club finder and promotional features",
        "Worked on wallet and voucher systems",
      ],
    },
    {
      title: "UX/UI Designer",
      company: "Wash Doctors",
      period: "March 2019 to May 2019",
      location: "London, UK",
      bullets: [
        "Designed service design for mobile car wash booking",
        "Created user flows for customer and provider apps",
      ],
    },
  ],
  education: [
    {
      degree: "BA Advertising",
      institution: "University of the Arts London (UAL)",
      period: "2015 to 2018",
      location: "London, UK",
      bullets: [
        "Focus: Brand strategy and visual communication",
        "Developed expertise in creative storytelling and design thinking",
      ],
    },
  ],
  skills: [
    {
      category: "Design",
      items: ["Product Design", "UX Research", "Interaction Design", "Design Systems", "Prototyping", "Visual Design"],
    },
    {
      category: "Tools",
      items: ["Figma", "Framer", "Principle", "Adobe Creative Suite", "Miro", "Notion"],
    },
    {
      category: "Development",
      items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Git"],
    },
  ],
};
