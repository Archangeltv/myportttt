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
  contribution?: string;
  problem?: string;
  solution?: string;
  metrics?: string;
  stack: string[];
  visual?: "bridge" | "wallet" | "bot" | "game" | "wall";
  image?: string;
  imageTheme?: "light" | "dark";
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
  email: "hello@archxngel.cv",
};

// Add only real URLs; nothing is rendered for missing destinations.
export const links: { label: string; href: string; download?: boolean }[] = [
  { label: "GitHub", href: "https://github.com/Archangeltv" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thearchangel/" },
  { label: "X / Twitter", href: "https://x.com/AimiuwuVictor" },
  { label: "Email", href: `mailto:${identity.email}` },
  { label: "Download CV", href: "/Aimiuwu Victor.pdf", download: true },
  {
    label: "Recommendation Letter",
    href: "/Kingdomly_Recommendation_Letter.pdf",
  },
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
    name: "Archangel Portfolio",
    tagline:
      "Interactive Developer Portfolio · Creative Development · Web Engineering",
    category: "CREATIVE ENGINEERING & PORTFOLIO",
    status: "PRODUCTION",
    summary:
      "My personal portfolio built with bold typography, animated scan lines, scroll-based transitions, and interactive project showcases. Designed to showcase my work, technical skills, and approach to building software.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "GSAP",
      "Tailwind CSS",
      "Canvas API",
    ],
    visual: "wall",
    image: "/images/projects/portfolio.png",
    imageTheme: "dark",
    url: "#top",
    urlLabel: "CURRENT SITE",
    index: "01",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "GSAP ScrollTrigger",
      "Tailwind CSS",
      "Canvas API",
    ],
  },
  {
    number: "02",
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
    index: "02",
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
    number: "03",
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
    image: "/images/projects/landmark-wall.png",
    imageTheme: "dark",
    url: "https://wall.landmarkcgm.xyz/",
    urlLabel: "VISIT LIVE WALL",
    repository: "",
    index: "03",
    tech: ["Vite", "React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    number: "04",
    name: "FOMO Scouter",
    tagline: "Find FOMO traders' on-chain wallets and copytrade their moves.",
    category: "WEB APP & TELEGRAM BOT",
    status: "PRODUCTION",
    summary:
      "Available on both web and Telegram, FOMO Scouter helps degens find FOMO traders' on-chain wallets so they can copytrade them, track their live holdings, and monitor their trades across Solana and EVM.",
    contribution:
      "Built both the web app and Telegram bot, handling FOMO handle lookup, on-chain wallet discovery across Solana and EVM, balance scanning, and 1-tap copytrade shortcuts.",
    stack: [
      "Next.js",
      "Grammy",
      "TypeScript",
      "Solana",
      "EVM",
      "Node.js",
      "Blockscout API",
    ],
    visual: "wallet",
    image: "/images/projects/fomo-scout.png",
    imageTheme: "dark",
    url: "https://fomoscouter.vercel.app/",
    urlLabel: "OPEN WEB APP",
    demoUrl: "https://t.me/fomoscouterbot",
    demoLabel: "TRY ON TELEGRAM",
    repository: "",
    index: "04",
    tech: [
      "Next.js",
      "Grammy",
      "TypeScript",
      "Solana",
      "EVM",
      "Node.js",
      "Blockscout API",
    ],
  },
  // {
  //   number: "05",
  //   name: "Web3 Community Bot",
  //   category: "COMMUNITY TOOLING",
  //   status: "PROTOTYPE",
  //   summary:
  //     "A messaging-based assistant concept for giving Web3 communities token context, social data, and alerts in one place.",
  //   contribution:
  //     "Explores a command-first experience with bot integrations, token lookups, and alert workflows. Scope and production status should be updated as the project evolves.",
  //   stack: ["Node.js", "TypeScript", "Telegram / WhatsApp APIs", "MongoDB"],
  //   visual: "bot",
  //   index: "05",
  //   tech: ["Node.js", "TypeScript", "Telegram / WhatsApp APIs", "MongoDB"],
  // },
  // {
  //   number: "06",
  //   name: "Poisoned Cookies",
  //   category: "INTERACTIVE GAME CONCEPT",
  //   status: "PROTOTYPE",
  //   summary:
  //     "A two-player strategy-game concept built around hidden choices, decision-making, and a playful 3D presentation.",
  //   contribution:
  //     "Product exploration focused on clear game-state feedback and lightweight interaction rather than requiring a wallet transaction for every move.",
  //   stack: ["React", "TypeScript", "Supabase", "Canvas / CSS"],
  //   visual: "game",
  //   index: "06",
  //   tech: ["React", "TypeScript", "Supabase", "Canvas / CSS"],
  // },
];

export const experience: Experience[] = [
  {
    number: "01",
    company: "Clyrbot",
    role: "Freelance Full-Stack Developer",
    period: "OCT 2025 — PRESENT",
    location: "REMOTE",
    summary:
      "Built and run a WhatsApp and Discord bot bringing crypto charting, NFT analytics, token lookups, and Twitter account tracking into chat.",
    highlights: [
      "Designed the product, backend, and integrations end-to-end in Node.js, TypeScript, and PostgreSQL.",
      "Deployed with Docker and CI/CD for continuous reliability and 24/7 uptime.",
      "Live across 57 WhatsApp communities with six-plus months of continuous usage, sponsored by The Hunters' Guild.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "WhatsApp API",
      "Discord.js",
    ],
    index: "01",
    org: "Clyrbot",
    points: [
      "Designed the product, backend, and integrations end-to-end in Node.js, TypeScript, and PostgreSQL.",
      "Deployed with Docker and CI/CD for continuous reliability and 24/7 uptime.",
      "Live across 57 WhatsApp communities with six-plus months of continuous usage, sponsored by The Hunters' Guild.",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "CI/CD",
      "WhatsApp API",
      "Discord.js",
    ],
  },
  {
    number: "02",
    company: "Kingdomly",
    role: "Full-Stack Engineer",
    period: "JUL 2023 — SEP 2025",
    location: "REMOTE · AUSTIN, TEXAS",
    summary:
      "Built blockchain data pipelines across Ethereum, Base, Berachain, Megaeth and Arbitrum, and migrated the data layer from Firebase to PostgreSQL for performance at scale.",
    highlights: [
      "Wrote and shipped Solidity contracts for NFT minting, staking, and rental.",
      "Integrated the Safe Wallet SDK for multi-signature treasury management.",
      "Owned deployment on AWS with CI/CD, and mentored junior developers.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Solidity",
      "PostgreSQL",
      "Safe Wallet SDK",
      "AWS",
    ],
    index: "02",
    org: "Kingdomly",
    points: [
      "Wrote and shipped Solidity contracts for NFT minting, staking, and rental.",
      "Integrated the Safe Wallet SDK for multi-signature treasury management.",
      "Owned deployment on AWS with CI/CD, and mentored junior developers.",
    ],
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Solidity",
      "PostgreSQL",
      "Safe Wallet SDK",
      "AWS",
    ],
  },
  {
    number: "03",
    company: "Palremit",
    role: "Frontend Engineer",
    period: "OCT 2023 — FEB 2024",
    location: "REMOTE",
    summary:
      "Built the frontend for a cross-border payments platform serving users in 150+ countries.",
    highlights: [
      "Integrated payment APIs, FX conversion, and virtual card flows.",
      "Worked alongside product and backend to keep money movement reliable on the client side.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    index: "03",
    org: "Palremit",
    points: [
      "Integrated payment APIs, FX conversion, and virtual card flows.",
      "Worked alongside product and backend to keep money movement reliable on the client side.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
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
