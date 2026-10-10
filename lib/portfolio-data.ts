export interface LadderRow {
  year: string;
  title: string;
  text: string;
}
export type ProjectStatus =
  | "TESTNET EXPERIMENT"
  | "TOOLING PROJECT"
  | "PROTOTYPE"
  | "LAUNCHED"
  | "PRODUCTION"
  | "FREELANCE"
  | "INTERNAL";

export interface Project {
  number: string;
  name: string;
  tagline?: string;
  category: string;
  status: ProjectStatus | string;
  summary: string;
  contribution: string;
  problem?: string;
  solution?: string;
  metrics?: string;
  stack: string[];
  visual?: "bridge" | "wallet" | "bot" | "game" | "wall";
  image?: string;
  url?: string;
  urlLabel?: string;
  demoUrl?: string;
  demoLabel?: string;
  repository?: string;
  index?: string;
  tech?: string[];
  href?: string;
}
export interface Experience {
  number: string;
  company: string;
  role: string;
  period?: string;
  location?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  index?: string;
  org?: string;
  points?: string[];
  tech?: string[];
}
export interface SkillGroup {
  label: string;
  items: string[];
}
export interface Principle {
  title: string;
  text: string;
}

export const identity = {
  name: "AIMIUWU VICTOR",
  first: "AIMIUWU",
  last: "VICTOR",
  nickname: "ARCHANGEL",
  title: "FULL STACK SOFTWARE DEVELOPER",
  location: "LAGOS, NIGERIA",
  email: "aimiuwuvictor@gmail.com",
};

// Add only real URLs; nothing is rendered for missing destinations.
export const links: { label: string; href: string }[] = [
  { label: "X / Twitter", href: "https://x.com/AimiuwuVictor" },
  { label: "Email", href: `mailto:${identity.email}` },
];

export const education = {
  school: "Lagos State University",
  degree: "B.Sc. Computer Science",
  period: "2020 – 2024",
};

export const ladder: LadderRow[] = [
  {
    year: "2023",
    title: "ENTERING PRODUCTION DEVELOPMENT",
    text: "Joined Kingdomly as a remote Full Stack Developer in July, and took a frontend role at Palremit in October.",
  },
  {
    year: "2024",
    title: "BUILDING COMPLETE SYSTEMS",
    text: "Admin and auto-payout systems, cron-based data pipelines, and responsive interfaces built from Figma designs.",
  },
  {
    year: "2025",
    title: "FULL STACK + ON-CHAIN SYSTEMS",
    text: "Multi-chain analytics, Solidity contracts, a Safe multisig treasury system, and the Firebase to PostgreSQL migration. Kingdomly tenure ended September.",
  },
  {
    year: "2026",
    title: "INDEPENDENT PRODUCT BUILDING",
    text: "Freelance full-stack and bot development: multi-platform bots, Telegram automation, and client SaaS platforms.",
  },
];

export const projects: Project[] = [
  {
    number: "01",
    name: "Clyrbot",
    tagline: "Web3, without leaving WhatsApp.",
    category: "WHATSAPP & DISCORD BOT",
    status: "PRODUCTION",
    summary:
      "A WhatsApp and Discord bot that brings crypto charting, NFT analytics, and Twitter account tracking directly to communities that already live in chat, so people never have to open a mobile dashboard to check a token.",
    contribution:
      "Owned the complete product end-to-end: architecture, TypeScript & Node.js backend, PostgreSQL, Redis caching, REST and webhook integrations, and Dockerized 24/7 deployment.",
    problem:
      "Crypto communities in Nigeria and across Africa run on WhatsApp, but existing Web3 tools run on desktop dashboards nobody opens on a phone. That gap slows decisions and keeps Web3 out of reach for phone-first users.",
    solution:
      "Delivers live charting and price conversion, NFT analytics, automated token lookups from contract addresses, and Twitter account tracking directly inside chat. Live in 57 WhatsApp communities with over 6 months of real usage.",
    metrics: "57 Communities · 6+ Months in Production",
    stack: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "WhatsApp API",
      "Discord.js",
      "Docker",
    ],
    visual: "bot",
    image: "/images/projects/clyrbot.png",
    url: "https://api.whatsapp.com/send?phone=2348057416596&text=Hi",
    urlLabel: "TRY ON WHATSAPP",
    demoUrl: "https://x.com/AimiuwuVictor/status/2023321744480587950?s=20",
    demoLabel: "VIEW DEMO ON X",
    repository: "",
    index: "01",
    tech: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "WhatsApp API",
      "Discord.js",
      "Docker",
    ],
  },
  {
    number: "02",
    name: "Landmark Wall",
    tagline: "Live vibes and memories from Landmark Youth convention.",
    category: "COMMUNITY WEB APPLICATION",
    status: "PRODUCTION",
    summary:
      "A real-time vibe wall and interactive community board built for a church youth convention, allowing campers and attendees to post live thoughts, reactions, and memories throughout the program.",
    contribution:
      "Engineered the full-stack web application end-to-end: responsive mobile-first UI using Vite and React, MongoDB database for persisting vibes and posts, photo upload workflows, and cloud deployment.",
    problem:
      "During conventions and youth camps, attendees lack an easy, instant channel to share live reactions, celebrate camp moments, and engage collectively without tedious account registrations or fragmented chats.",
    solution:
      "Built a live social board where campers post messages, photos, and vibes in real time. Designed for fast mobile submissions and projected live on screens during camp sessions.",
    metrics: "Live in Production · Convention Camp Feed",
    stack: [
      "Vite",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    visual: "wall",
    url: "https://wall.landmarkcgm.xyz/",
    urlLabel: "VISIT LIVE WALL",
    repository: "",
    index: "02",
    tech: [
      "Vite",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
  {
    number: "03",
    name: "Wallet Discovery",
    category: "ON-CHAIN INVESTIGATION TOOL",
    status: "TOOLING PROJECT",
    summary:
      "A Telegram and web tool for discovering and tracking wallets associated with on-chain trading activity.",
    contribution:
      "Built around wallet research workflows so users can investigate activity and follow relevant addresses. No public demo or repository link is configured here.",
    stack: ["TypeScript", "Node.js", "Telegram API", "Web3 APIs"],
    visual: "wallet",
    index: "03",
    tech: ["TypeScript", "Node.js", "Telegram API", "Web3 APIs"],
  },
  {
    number: "04",
    name: "Web3 Community Bot",
    category: "COMMUNITY TOOLING",
    status: "PROTOTYPE",
    summary:
      "A messaging-based assistant concept for giving Web3 communities token context, social data, and alerts in one place.",
    contribution:
      "Explores a command-first experience with bot integrations, token lookups, and alert workflows. Scope and production status should be updated as the project evolves.",
    stack: ["Node.js", "TypeScript", "Telegram / WhatsApp APIs", "MongoDB"],
    visual: "bot",
    index: "04",
    tech: ["Node.js", "TypeScript", "Telegram / WhatsApp APIs", "MongoDB"],
  },
  {
    number: "05",
    name: "Poisoned Cookies",
    category: "INTERACTIVE GAME CONCEPT",
    status: "PROTOTYPE",
    summary:
      "A two-player strategy-game concept built around hidden choices, decision-making, and a playful 3D presentation.",
    contribution:
      "Product exploration focused on clear game-state feedback and lightweight interaction rather than requiring a wallet transaction for every move.",
    stack: ["React", "TypeScript", "Supabase", "Canvas / CSS"],
    visual: "game",
    index: "05",
    tech: ["React", "TypeScript", "Supabase", "Canvas / CSS"],
  },
];

export const experience: Experience[] = [
  {
    number: "01",
    company: "Kingdomly",
    role: "Full Stack Developer",
    period: "JUL 2023 — SEP 2025",
    location: "REMOTE · AUSTIN",
    summary:
      "Worked across admin products, employee workflows, backend services, and on-chain data experiences.",
    highlights: [
      "Built administrative, employee-tracking, and automated employee-payout systems.",
      "Worked on collecting on-chain data and transforming it into analytics, reports, and claim-page experiences across multiple projects.",
      "Built blockchain-data cron jobs using Node.js and Express.js on custom servers and AWS infrastructure.",
      "Worked across frontend interfaces, backend services, API integrations, and Web3-related features.",
    ],
    technologies: ["Next.js", "React", "Node.js", "Express.js", "AWS", "Web3"],
    index: "01",
    org: "Kingdomly",
    points: [
      "Built administrative, employee-tracking, and automated employee-payout systems.",
      "Worked on collecting on-chain data and transforming it into analytics, reports, and claim-page experiences across multiple projects.",
      "Built blockchain-data cron jobs using Node.js and Express.js on custom servers and AWS infrastructure.",
      "Worked across frontend interfaces, backend services, API integrations, and Web3-related features.",
    ],
    tech: ["Next.js", "React", "Node.js", "Express.js", "AWS", "Web3"],
  },
  {
    number: "02",
    company: "PALREMIT",
    role: "Frontend Developer",
    period: "OCT 2023 — FEB 2024",
    location: "REMOTE · NEWPORT BEACH",
    summary:
      "Frontend Developer role recorded in the supplied profile. More detailed deliverables can be added from the full résumé.",
    highlights: [],
    technologies: [],
    index: "02",
    org: "PALREMIT",
    points: [],
    tech: [],
  },
  {
    number: "03",
    company: "Beralabs",
    role: "Full Stack Developer · Freelance",
    location: "REMOTE",
    summary:
      "Freelance full-stack development work. Dates and project-specific outcomes are intentionally omitted until verified.",
    highlights: [],
    technologies: [],
    index: "03",
    org: "Beralabs",
    points: [],
    tech: [],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "LANGUAGES",
    items: ["JavaScript", "TypeScript", "Solidity", "HTML", "CSS"],
  },
  { label: "FRONTEND", items: ["React", "Next.js", "Tailwind CSS"] },
  {
    label: "BACKEND & DATA",
    items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    label: "WEB3",
    items: ["Ethers.js", "Wagmi", "Web3.js", "Smart Contracts"],
  },
  { label: "INFRASTRUCTURE", items: ["AWS", "Docker", "Cron Jobs"] },
  {
    label: "BOTS & AUTOMATION",
    items: [
      "Telegram Bot API",
      "Discord.js",
      "WhatsApp API",
      "OpenAI API",
      "Claude API",
    ],
  },
];

// Empty on purpose: the component shows "HOW I WORK" until real, authorized quotes exist.
export const testimonials: { quote: string; author: string; role: string }[] =
  [];

export const principles: Principle[] = [
  {
    title: "CLEAR COMMUNICATION",
    text: "Plain updates across time zones, with no surprises.",
  },
  {
    title: "PRACTICAL ENGINEERING",
    text: "The simplest system that solves the real problem.",
  },
  {
    title: "THOUGHTFUL IMPLEMENTATION",
    text: "Edge cases, failure states and data integrity handled up front.",
  },
  {
    title: "MAINTAINABLE SOLUTIONS",
    text: "Code another developer can pick up and extend.",
  },
];
