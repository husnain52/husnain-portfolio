// ─── Types ────────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  title: string
  subtitle: string
  role: string
  description: string
  highlights: string[]
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  achievements: string[]
}

export interface SkillCategory {
  categoryName: string
  skills: string[]
}

export interface HeroStat {
  value: string
  label: string
  context: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const heroStats: HeroStat[] = [
  { value: '4+', label: 'Years shipping products', context: 'Since 2020' },
  {
    value: '30%',
    label: 'API response time cut',
    context: 'At Smart Forum — Node.js + PostgreSQL query optimisation',
  },
  { value: '3', label: 'Core stacks mastered', context: 'UI · API · Cloud' },
]

export const projects: Project[] = [
  {
    id: 'outplacio',
    title: 'Outplacio',
    subtitle: 'Outplacement program dashboard',
    role: 'Full-stack product build',
    description:
      'A responsive multi-module dashboard serving HR teams and outplacement candidates — covering tasks, notifications, reports, contracts, feedback loops, and account settings.',
    highlights: [
      'Architected 6-module dashboard reducing HR admin onboarding time significantly',
      'Built CSV & PDF export pipelines handling 10k+ row datasets without UI blocking',
      'Extracted 20+ reusable components, cutting feature delivery time by ~40%',
    ],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 'nextask',
    title: 'NexTask',
    subtitle: 'Project management operations system',
    role: 'Frontend engineering',
    description:
      'A B2B operations platform for customer records, invoicing, project visibility, and reporting — used daily by operations teams across multiple clients.',
    highlights: [
      'Rebuilt customer management flow, reducing task completion steps from 7 to 3',
      'Implemented advanced filtering & export-ready reporting with real-time data sync',
      'Achieved consistent sub-200ms render times on data-heavy list views',
    ],
    techStack: ['Next.js', 'Material UI', 'Redux Toolkit', 'REST APIs'],
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 'commercehub',
    title: 'Commercehub',
    subtitle: 'Single-vendor commerce platform',
    role: 'Full-stack application',
    description:
      'A full-cycle commerce application with JWT authentication, cart state management, product catalogue, and cloud-delivered media assets.',
    highlights: [
      'Implemented JWT + refresh-token auth with secure httpOnly cookie storage',
      'Managed global cart & session state with Redux Toolkit, eliminating prop drilling',
      'Deployed assets via AWS S3 + CloudFront, cutting media load time by ~60%',
    ],
    techStack: ['Next.js', 'Express', 'MongoDB', 'AWS S3', 'CloudFront', 'Redux Toolkit'],
    liveUrl: '',
    githubUrl: '',
  },
]

export const experiences: Experience[] = [
  {
    company: 'Smart Forum (Qualcomm Projects)',
    role: 'Software Engineer',
    period: '07/2021 – Present',
    location: 'Islamabad, Pakistan',
    achievements: [
      'Optimised Node.js + Express services and rewrote critical PostgreSQL queries, reducing average API response time by 30% across high-traffic endpoints.',
      'Introduced Redux Toolkit for client-side state, eliminating redundant API calls and improving perceived performance on dashboard views.',
      'Integrated RESTful APIs with real-time WebSocket event tracking for live status updates.',
      'Mentored junior developers through structured code reviews; recognised with "Employee of the Month" award.',
    ],
  },
  {
    company: 'Techgater Web Solutions',
    role: 'Frontend Developer',
    period: '11/2020 – 06/2021',
    location: 'Islamabad, Pakistan',
    achievements: [
      'Delivered pixel-perfect React + Material UI interfaces across 4 client projects, working directly from Figma designs.',
      'Built a shared component library of 15+ custom hooks and UI primitives, reused across all active projects.',
      'Reduced average page bundle size by 22% through code-splitting and lazy loading non-critical routes.',
      'Collaborated in 2-week Agile sprints with daily standups and bi-weekly design reviews.',
    ],
  },
  {
    company: 'PHP Travels',
    role: 'Frontend Intern',
    period: '08/2020 – 11/2020',
    location: 'Islamabad, Pakistan',
    achievements: [
      'Implemented responsive HTML5/CSS3/JS UI features for a travel booking interface used by thousands of daily users.',
      'Resolved 30+ UI bugs reported via QA, improving cross-browser consistency across Chrome, Firefox, and Safari.',
      'Participated in daily standups and sprint retrospectives, gaining hands-on Agile workflow experience.',
      'Learned production deployment practices including staging environments and rollback procedures.',
    ],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    categoryName: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Material UI', 'Ant Design', 'Redux Toolkit', 'HTML5/CSS3', 'Responsive Design'],
  },
  {
    categoryName: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'WebSockets'],
  },
  {
    categoryName: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    categoryName: 'DevOps & Tools',
    skills: ['Git/GitHub', 'AWS (S3, CloudFront)', 'Nginx', 'PM2', 'GitHub Actions CI/CD', 'Jest/Enzyme', 'Cypress/Playwright', 'Postman', 'Agile/Scrum'],
  },
]

export const education = [
  { level: 'Diploma in Information Technology', school: 'CTTI, Islamabad', marks: '75%' },
  { level: 'Matriculation (Science)', school: 'Telecom Foundation School', marks: '78%' },
]

export const certificates = [
  'Agile Foundations', 'JavaScript Foundations', 'Next.js', 'React.js',
  'TypeScript', 'Azure AI Fundamentals', 'IELTS 6.5',
]

export const socialLinks = {
  github: 'https://github.com/husnain52',
  linkedin: 'https://linkedin.com/in/husnain-akhtar',
  email: 'husnainakhtar06@gmail.com',
  phone: '+923476293398',
  location: 'Islamabad, Pakistan',
}
