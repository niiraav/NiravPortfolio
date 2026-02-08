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
  avatar: "/lovable-uploads/ec518bb2-b216-49b6-b35c-fa7aefcef1b3.jpg",
  bio: "I'm a curious and enthusiastic product designer with a side passion for code and solving user problems. Whether it's optimising merchant dashboards or simplifying checkout flows, I blend creative problem-solving with rigorous logic.",
  links: [
    { label: "Portfolio", href: "/", external: false },
    { label: "X", href: "https://x.com/niiraav", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/niravarvinda", external: true },
    { label: "Email", href: "mailto:niravarvinda@gmail.com", external: true },
  ],
  work: [
    {
      title: "Senior Product Designer",
      company: "Worldpay",
      companyUrl: "https://worldpay.com",
      period: "March 2025 - Present",
      location: "London, UK",
      bullets: [
        "Led multiple strategic redesigns, reducing support call volumes by 30%",
        "Built a contract renewal system used by thousands.",
        "Translated technical requirements into detailed user flows and prototypes",
      ],
    },
    {
      title: "Senior UX/UI Designer",
      company: "Oak National Academy",
      companyUrl: "https://thenational.academy",
      period: "Nov 2023 - March 2025",
      location: "London, UK",
      bullets: [
        "Led the design of an accessible e-learning platform.",
        "Improved user experience by using data and user research.",
        "Delivered high-quality designs while working closely with developers",
      ],
    },
    {
      title: "Senior UX/Interaction Designer",
      company: "Microsoft Teams",
      companyUrl: "https://microsoft.com/teams",
      period: "Nov 2022 - Nov 2023",
      location: "London, UK",
      bullets: [
        "Boosted daily users by 200% by integrating 20+ major apps.",
        "Designed scalable enterprise tools from wireframes to final UI.",
        "Solved complex user problems with detailed flows and prototypes.",
      ],
    },
    {
      title: "Product Designer (UI Focused)",
      company: "Sage",
      companyUrl: "https://sage.com",
      period: "Nov 2021 - Sept 2022",
      location: "London, UK",
      bullets: [
        "Built a scalable Design System to speed up product development.",
        "Ensured consistency across all products by defining core visual styles.",
        "Improved accessibility by partnering directly with engineering teams.",
      ],
    },
    {
      title: "Senior Product Designer",
      company: "Gophr",
      companyUrl: "https://gophr.com",
      period: "Sept 2021 - May 2022",
      location: "London, UK",
      bullets: [
        "Redesigned the core platform to simplify complex delivery logistics.",
        "Created a new design system to modernise the product look and feel.",
        "Validated ideas quickly using functional prototypes and user scenarios.",
      ],
    },
    {
      title: "UX/UI Designer",
      company: "Buzz Bingo",
      companyUrl: "https://buzzbingo.com",
      period: "May 2019 - Sept 2022",
      location: "London, UK",
      bullets: [
        "Unified the experience across Web, iOS, and Android apps.",
        "Increased engagement by designing features based on user data.",
        "Iterated designs fast using rapid prototyping and user testing.",
      ],
    },
    {
      title: "Lead UX/UI Designer",
      company: "Wash Doctors",
      period: "Feb 2018 - May 2019",
      location: "London, UK",
      bullets: [
        "Owned the full app design for both customers and staff.",
        "Drove product growth by aligning design strategy with business goals.",
        "Optimised the booking flow, making it easier for users to convert.",
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
      items: ["End-to-end Product Design", "UX/UI Design", "User Research / Interviews", "Workshop Facilitation", "Wireframing & Prototyping", "Design Systems Management", "User Testing and Analytics"],
    },
    {
      category: "Soft Skills",
      items: ["Stakeholder Management", "Work Well Under Pressure"],
    },
    {
      category: "Code",
      items: ["HTML/CSS", "JavaScript", "React", "Tailwind", "Responsive Design", "Accessibility", "Git"],
    },
    {
      category: "Tools",
      items: ["Figma", "Miro", "Notion", "Adobe CC", "GitHub"],
    },
  ],
};
