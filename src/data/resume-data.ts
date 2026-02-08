export interface ResumeData {
  name: string;
  title: string;
  avatar: string;
  phone: string;
  email: string;
  website: string;
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
    type: string;
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
  phone: "(+44) 7837391747",
  email: "niravarvinda@gmail.com",
  website: "www.nirav.work",
  bio: "I'm a curious and enthusiastic product designer with a side passion for code and solving user problems. Whether it's optimising merchant dashboards or simplifying checkout flows, I blend creative problem-solving with rigorous logic.",
  links: [
    { label: "Portfolio", href: "/", external: false },
    { label: "X", href: "https://x.com/niiraav", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/niiraav", external: true },
    { label: "Email", href: "mailto:niravarvinda@gmail.com", external: true },
  ],
  work: [
    {
      title: "Senior Product Designer",
      company: "Oak National Academy",
      companyUrl: "https://thenational.academy",
      period: "Nov 2023 - Present",
      location: "London, UK",
      type: "Contract",
      bullets: [
        "Led design for an e-learning web platform, collaborating with a cross-functional team to create a highly accessible and enhanced user experience driven by data and user research.",
      ],
    },
    {
      title: "Senior UX/Interaction Designer",
      company: "Microsoft Teams",
      companyUrl: "https://microsoft.com/teams",
      period: "Nov 2022 - Nov 2023",
      location: "London, UK",
      type: "Contract",
      bullets: [
        "Led integration of 20+ high-profile apps, boosting DAU by 200%. Designed enterprise solutions with detailed user flows, wireframes, and high-fidelity designs.",
      ],
    },
    {
      title: "Product Designer (UI focused)",
      company: "Sage",
      companyUrl: "https://sage.com",
      period: "Nov 2021 - Sept 2022",
      location: "London, UK",
      type: "Contract",
      bullets: [
        "Led the creation of a Design System, developing core visuals, UI patterns, and components. Collaborated with cross-functional teams to maintain design integrity and accessibility standard.",
      ],
    },
    {
      title: "Senior Product Designer",
      company: "Gophr",
      companyUrl: "https://gophr.com",
      period: "Sept 2021 - May 2022",
      location: "London, UK",
      type: "Freelance",
      bullets: [
        "Led end-to-end redesign of Gophr's delivery solution, creating the web platform's design system, user flows, scenarios, and fully functional prototypes.",
      ],
    },
    {
      title: "UX/UI Designer",
      company: "Buzz Bingo",
      companyUrl: "https://buzzbingo.com",
      period: "May 2019 - Sept 2022",
      location: "London, UK",
      type: "Full time",
      bullets: [
        "Worked on cross-platform products spanning mobile (iOS, Android), and web. Conducted extensive user research, developed personas, and leveraged analytics to inform design decisions.",
      ],
    },
    {
      title: "Lead UX/UI Designer",
      company: "Wash Doctors",
      period: "Feb 2018 - May 2019",
      location: "London, UK",
      type: "Full time",
      bullets: [
        "Owned and designed customer and contractor-facing mobile apps (iOS and Android) alongside the CEO, using data and analytics to improve the experience for thousands of users.",
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
      items: [
        "End to End Product Design",
        "User Experience (UX)",
        "User Interface (UI)",
        "Design / User Research / Interview",
        "Workshop Facilitation",
        "Customer Journey Mapping",
        "Wire-framing & Rapid Prototyping",
        "Design Systems Management",
        "User Testing and Analytics",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Stakeholder Management",
        "Work Well Under Pressure",
        "Present & Discuss Design Decisions",
        "Estimate & Meet Deadlines",
        "Work Well Within a Team",
      ],
    },
    {
      category: "Code",
      items: ["HTML/CSS", "JavaScript", "Responsive/Mobile Design", "Accessibility", "GitHub"],
    },
    {
      category: "Tools",
      items: ["Figma", "Sketch", "Adobe CC", "InVision", "ProtoPie"],
    },
  ],
};
