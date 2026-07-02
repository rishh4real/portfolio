export const CONTACT = {
  email: 'rishh4work@gmail.com',
  github: 'https://github.com/rishh4real',
  linkedin: 'https://www.linkedin.com/in/shaurya-sharma-72ab8b376/',
  nudgehqLinkedin: 'https://www.linkedin.com/company/nudgehq-web/',
  nudgehqInstagram: 'https://www.instagram.com/hello.nudgehq/?__pwa=1',
  instagram: 'https://www.instagram.com/shauryaa.sh/?__pwa=1',
  nudgehq: 'https://nudgehq.app',
};

export const NAV_LINKS = [
  { label: 'About', href: '/' },
  { label: 'Skills', href: '/skills' },
  { label: 'Feedback', href: '/feedback' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const MARQUEE_ROW_1 = [
  '/images/showcase/github-profile.png',
  '/images/showcase/linkedin-activity.png',
  '/images/showcase/nudgehq-home.png',
  '/images/showcase/crisisgrid-hero.png',
];

export const MARQUEE_ROW_2 = [
  '/images/showcase/linkedin-experience.png',
  '/images/showcase/crisisgrid-map.png',
  '/images/showcase/content-writer-hero.png',
  '/images/showcase/content-writer-feed.png',
];

export const SKILLS = [
  {
    number: '01',
    name: 'Frontend Development',
    description:
      'Building responsive interfaces with modern structure and clean UI.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    number: '02',
    name: 'Backend & APIs',
    description:
      'Wiring up the logic that makes a product actually work.',
    tags: ['Node.js', 'Express', 'REST APIs', 'Integrations'],
  },
  {
    number: '03',
    name: 'Python & DSA',
    description:
      'Python problem solving, data structures, and algorithms.',
    tags: ['Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
  },
  {
    number: '04',
    name: 'AI, LLMs & Automation',
    description:
      'Practical AI systems and chatbots with workflow automation.',
    tags: ['Claude', 'LLMs', 'RAG', 'n8n', 'Chatbots'],
  },
  {
    number: '05',
    name: 'Databases & Deployment',
    description:
      'Shipping and hosting projects reliably.',
    tags: ['Supabase', 'PostgreSQL', 'Firebase', 'Vercel', 'Render'],
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
  status?: string;
  blurb?: string;
  gallery?: string[];
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client Paid Project',
    name: 'Ikehu',
    url: '',
    status: 'Deploying Mode',
    blurb:
      'A paid client project for Ikehu, currently in deploying mode. Built as a sharp talent/search website with a strong yellow-black editorial identity, team story, service flow, FAQ, and contact-ready sections.',
    gallery: [
      '/images/showcase/ikehu-home.png',
      '/images/showcase/ikehu-work.png',
      '/images/showcase/ikehu-ambition.png',
      '/images/showcase/ikehu-faq.png',
    ],
    images: {
      col1Top: '/images/showcase/ikehu-home.png',
      col1Bottom: '/images/showcase/ikehu-work.png',
      col2: '/images/showcase/ikehu-ambition.png',
    },
  },
  {
    number: '02',
    category: 'Startup',
    name: 'NudgeHQ',
    url: '',
    status: 'Developing',
    blurb: 'Founder-led AI product currently in development — kept intentionally private until launch.',
    gallery: [
      '/images/showcase/nudgehq-hero.png',
      '/images/showcase/nudgehq-dashboard.png',
      '/images/showcase/nudgehq-coming-soon.png',
      '/images/showcase/nudgehq-ai.png',
    ],
    images: {
      col1Top:
        '/images/showcase/nudgehq-hero.png',
      col1Bottom:
        '/images/showcase/nudgehq-dashboard.png',
      col2: '/images/showcase/nudgehq-coming-soon.png',
    },
  },
  {
    number: '03',
    category: 'Freelance Portfolio',
    name: 'A Square Design',
    url: 'https://www.asquaredesign.com/',
    status: 'Delivered',
    blurb:
      'A pink, editorial-style freelance portfolio built for a visual storyteller — warm, polished, and structured for brand presentation.',
    gallery: [
      '/images/showcase/asquaredesign-hero.png',
      '/images/showcase/asquaredesign-projects.png',
      '/images/showcase/asquaredesign-more.png',
    ],
    images: {
      col1Top: '/images/showcase/asquaredesign-hero.png',
      col1Bottom: '/images/showcase/asquaredesign-projects.png',
      col2: '/images/showcase/asquaredesign-more.png',
    },
  },
  {
    number: '04',
    category: 'AI for Bharat',
    name: 'LexFlow',
    url: 'https://lexflow-beta.vercel.app',
    blurb:
      'LexFlow is an AI-powered court judgment intelligence system built for the AI for Bharat Hackathon — Theme 11. It automatically reads High Court judgment PDFs from CCMS, extracts critical directives, generates structured action plans, verifies them through a blind human-in-the-loop mechanism, and presents only trusted data to government officials on a clean dashboard.',
    gallery: [
      '/images/showcase/lexflow-assistant.jpeg',
      '/images/showcase/lexflow-admin.jpeg',
      '/images/showcase/lexflow-dashboard.jpeg',
      '/images/showcase/lexflow-student.jpeg',
      '/images/showcase/lexflow-login.jpeg',
      '/images/showcase/lexflow-workstation.jpeg',
    ],
    images: {
      col1Top: '/images/showcase/lexflow-assistant.jpeg',
      col1Bottom: '/images/showcase/lexflow-admin.jpeg',
      col2: '/images/showcase/lexflow-dashboard.jpeg',
    },
  },
  {
    number: '05',
    category: 'Emergency Response',
    name: 'CrisisGrid',
    url: 'https://crisis-grid-ten.vercel.app',
    blurb:
      'Ground truth, delivered to those who act. CrisisGrid is an AI-powered humanitarian crisis reporting and dispatch system built as a minimal government-use interface. Field workers submit voice notes or text reports from disaster zones, AI extracts structured data, and real-time color-coded hotspots appear on a live map for NGO coordinators and emergency response teams.',
    gallery: [
      '/images/showcase/crisisgrid-hero-clean.png',
      '/images/showcase/crisisgrid-map-clean.png',
      '/images/showcase/crisisgrid-form-clean.png',
      '/images/showcase/crisisgrid-detail.png',
    ],
    images: {
      col1Top: '/images/showcase/crisisgrid-hero-clean.png',
      col1Bottom: '/images/showcase/crisisgrid-map-clean.png',
      col2: '/images/showcase/crisisgrid-form-clean.png',
    },
  },
  {
    number: '06',
    category: 'Event Intelligence',
    name: 'GridSense.ai',
    url: 'https://rishh4real.github.io/Gridsense.ai/',
    blurb:
      'GridSense is an AI-powered real-time event intelligence platform designed to transform physical events into smart, safe, and seamless attendee experiences. Powered by Claude AI, it combines crowd safety analysis, smart queue management, an event assistant, and a gamified prompt battle arena to keep every event responsive and engaging.',
    gallery: [
      '/images/showcase/gridsense-hero.png',
      '/images/showcase/gridsense-pipeline.png',
      '/images/showcase/gridsense-queue.png',
      '/images/showcase/gridsense-prompt-arena.png',
    ],
    images: {
      col1Top: '/images/showcase/gridsense-hero.png',
      col1Bottom: '/images/showcase/gridsense-pipeline.png',
      col2: '/images/showcase/gridsense-queue.png',
    },
  },
  {
    number: '07',
    category: 'Personal Brand',
    name: 'Content Writer Portfolio',
    url: 'https://rishh4real.github.io/content-writer-portfolio/',
    blurb:
      'A fully custom, cinematic 3D-styled content writer portfolio with glowing section transitions, a polished hero, and a clean showcase of writing services, about details, and work samples.',
    gallery: [
      '/images/showcase/content-writer-hero.png',
      '/images/showcase/content-writer-offer.png',
      '/images/showcase/content-writer-about.png',
      '/images/showcase/content-writer-portfolio.png',
    ],
    images: {
      col1Top: '/images/showcase/content-writer-hero.png',
      col1Bottom: '/images/showcase/content-writer-offer.png',
      col2: '/images/showcase/content-writer-about.png',
    },
  },
];

export const OTHER_PROJECTS = [
  { name: 'Spotify Clone', description: 'Frontend music player UI clone', url: 'https://github.com/rishh4real/spotify-clone' },
  { name: 'ISSight', description: 'AI-powered insight platform for end-sem project', url: 'https://is-sight-foaiendsem.vercel.app' },
];

export const ABOUT_TEXT =
  "I'm a second-year CS + AIML student at Newton School of Technology, ADYPU, and the founder of NudgeHQ — an AI-powered workforce progress tracking SaaS. I've shipped live products across legal tech, crisis response, and event intelligence. Passionate about humanitarian tech and LLM integration, I love building products that solve real problems. Let's build something incredible together!";
