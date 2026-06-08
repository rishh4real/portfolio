export const CONTACT = {
  email: 'rishh4real@gmail.com',
  phone: '+91 7010293100',
  github: 'https://github.com/rishh4real',
  linkedin: 'https://www.linkedin.com/in/shaurya-sharma-72ab8b376/',
  nudgehq: 'https://nudgehq.app',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const MARQUEE_ROW_1 = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

export const MARQUEE_ROW_2 = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const SKILLS = [
  {
    number: '01',
    name: 'Frontend Development',
    description:
      'React.js, Tailwind CSS, HTML/CSS, and Vite — building responsive, polished interfaces with smooth animations and modern UX patterns.',
  },
  {
    number: '02',
    name: 'Backend & APIs',
    description:
      'Node.js, Express.js, FastAPI, REST APIs, JWT Auth, WebSockets, and Twilio integrations for real-time, secure applications.',
  },
  {
    number: '03',
    name: 'AI & LLM Integration',
    description:
      'Groq API, Claude AI, Gemini API, prompt engineering, and building 10+ AI features including burnout predictors, anomaly detectors, and smart nudges.',
  },
  {
    number: '04',
    name: 'Database & Cloud',
    description:
      'Supabase, PostgreSQL, MongoDB, Firebase Firestore, Google Cloud Platform — architecting scalable data layers for SaaS products.',
  },
  {
    number: '05',
    name: 'Product & Deployment',
    description:
      'Full SaaS onboarding, role-based dashboards, CSV imports, magic invite links, Vercel, Render, and Firebase Hosting deployments.',
  },
];

export const ACHIEVEMENTS = [
  'AI for Bharat 2024 — Top 250 out of 10,000+ teams',
  'Founder & CEO of NudgeHQ — live in beta',
  'B.Tech CS + AIML at Newton School of Technology, ADYPU (2025–2029)',
  '500+ LinkedIn connections',
  'NudgeHQ validated by South Asia HR head of a large company',
];

export interface Project {
  number: string;
  category: string;
  name: string;
  url: string;
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Startup',
    name: 'NudgeHQ',
    url: 'https://nudgehq.app',
    images: {
      col1Top:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=85&auto=format&fit=crop',
      col1Bottom:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85&auto=format&fit=crop',
      col2: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=85&auto=format&fit=crop',
    },
  },
  {
    number: '02',
    category: 'Legal Tech',
    name: 'Lex-Flow',
    url: 'https://lexflow-beta.vercel.app',
    images: {
      col1Top:
        'https://images.unsplash.com/photo-1589829545856-d10dca0f4f2f?w=800&q=85&auto=format&fit=crop',
      col1Bottom:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=85&auto=format&fit=crop',
      col2: 'https://images.unsplash.com/photo-1505664194772-6beb4f7f1a51?w=800&q=85&auto=format&fit=crop',
    },
  },
  {
    number: '03',
    category: 'Humanitarian',
    name: 'CrisisGrid',
    url: 'https://crisis-grid-ten.vercel.app',
    images: {
      col1Top:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85&auto=format&fit=crop',
      col1Bottom:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=85&auto=format&fit=crop',
      col2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&auto=format&fit=crop',
    },
  },
];

export const OTHER_PROJECTS = [
  { name: 'GridSense.ai', description: 'Real-time event intelligence with Claude AI', url: 'https://github.com/rishh4real/Gridsense.ai' },
  { name: 'Spotify Clone', description: 'Frontend music player UI clone', url: 'https://github.com/rishh4real/spotify-clone' },
  { name: 'ISSight', description: 'AI-powered insight platform for end-sem project', url: 'https://is-sight-foaiendsem.vercel.app' },
];

export const ABOUT_TEXT =
  "I'm a first-year CS + AIML student at Newton School of Technology, ADYPU, and the founder of NudgeHQ — an AI-powered workforce progress tracking SaaS. I've shipped live products across legal tech, crisis response, and event intelligence. Passionate about humanitarian tech and LLM integration, I love building products that solve real problems. Let's build something incredible together!";
