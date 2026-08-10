You are a principal design engineer and luxury UI architect. Your task is to build a production-grade front-end interface that completely rejects generic SaaS design tropes (no heavy drop shadows, no standard sans-serif stacks like Inter/Roboto, no default purple gradients, no pill-shaped heavy buttons).

Your design philosophy for this project is "Editorial Minimalism meets Quiet Luxury"—reminiscent of high-end architectural lookbooks, luxury fashion house portfolios, and elite precision tools.

---

### 1. DESIGN MATRIX & TOKEN SYSTEMS

Implement a fully responsive design system utilizing the following exact token specifications. Provide a flawless toggle mechanism or dual-implementation strategy for both light and dark modes.

#### A. LIGHT THEME: "Warm Monochrome Gallery"

- Canvas Background: #FBFBFA (Bone / Matte Alabaster)
- Surface / Cards: #F5F5F3 (Soft Chalk)
- Text - Primary Headlines: #111110 (Deep Obsidian Black)
- Text - Body / Secondary: #555552 (Muted Charcoal)
- Borders / Rules: #E5E5E2 (Crisp Paper Cut 1px)
- Luxury Accent: #A3855F (Muted Antique Brass) — Use exclusively for active states, focal links, or rare micro-highlights.

#### B. DARK THEME: "The Obsidian Void"

- Canvas Background: #0B0B0A (Pitch Jet Black — absolute matte, no blue/gray tint)
- Surface / Cards: #141413 (Subtle Onyx Elevation)
- Text - Primary Headlines: #FAFAFA (Pure Platinum White)
- Text - Body / Secondary: #9E9E9B (Stealth Gray)
- Borders / Rules: #222221 (Faint Blade 1px)
- Luxury Accent: #D4AF37 (Liquid Metallic Gold) — Use with extreme restraint for precise focal points.

---

### 2. TYPOGRAPHY ARCHITECTURE

The typography must feel editorial, intentional, and expensive. Do not allow standard web fonts to dilute the aesthetic.

- Display & Headlines: Pair an elegant, high-contrast serif with tight tracking (e.g., "Cormorant Garamond", "Instrument Serif", or "Playfair Display" via Google Fonts). Use thin weights (300 or 400) at large scale. Letter-spacing: -0.02em to -0.04em.
- UI & Body Copy: Pair with a highly legible, razor-sharp geometric or humanist sans-serif (e.g., "Instrument Sans", "Plus Jakarta Sans", or "PP Neue Montreal"). Letter-spacing: -0.01em for body, +0.05em uppercase for tiny labels/metadata.
- Hierarchical Scale: Maintain an aggressive contrast between massive editorial headlines and tiny, perfectly spaced metadata text.

---

### 3. LAYOUT & STRUCTURE

- Structural Bones: Utilize asymmetric bento-grids, strict alignment, and expansive whitespace.
- Padding: Double your standard padding thresholds to give components "room to breathe" like a physical luxury catalog.
- Elevation: Reject traditional CSS box-shadows entirely. Create separation exclusively through crisp, high-contrast 1px borders, subtle tint changes on surfaces, or raw structural alignment.

---

### 4. ANIMATION & "QUIET MOTION" PRINCIPLES

Motion must feel physics-based, deliberate, and expensive. Absolutely no bouncy, elastic, or game-like transitions.

- Global Easing Curve: Use an ultra-smooth, premium ease-out cubic-bezier: `cubic-bezier(0.16, 1, 0.3, 1)`
- Timing Thresholds: Micro-interactions must sit between 150ms and 250ms. Page transitions must not exceed 400ms.
- Micro-interactions:
  - Button/Interactive Hover: Soft scale transform (`scale(1.015)`), a delicate opacity shift, or an elegant background luminance fade.
  - Text Links: If an underline is used, animate its track width from 0% to 100% using an elegant left-to-right wipe.
  - Page Loading: Stagger-fade structural elements sequentially from top to bottom, accompanied by a subtle upward translation (`translateY(12px)` to `0px`).

---

### 5. TECHNICAL EXECUTION

- Build this using clean, semantic HTML/CSS or modular React code structured with Tailwind CSS utility classes.
- Map the color tokens explicitly to CSS Custom Properties or a Tailwind config file (`theme.extend.colors`) to handle seamlessly switching between the light and dark themes.
- Ensure all interactive elements have highly polished, accessible `:focus-visible` outlines matching the luxury accent color tokens.


these are my information

HA
Husnain Akhtar
About
Work
Experience
Skills

Resume ↗
Available for product teams & full-stack builds
Full-stack developer
for polished web products.
I build responsive dashboards, reliable Node.js APIs, and cloud-ready interfaces with React, Next.js, TypeScript, and a product-minded approach to detail.

View selected work
Start a conversation
GitHub ↗
4+

Years shipping products

Since 2020

30%

API response time cut

At Smart Forum — Node.js + PostgreSQL query optimisation

3

Core stacks mastered

UI · API · Cloud

About

I turn complex product requirements into clear, usable software.
I'm a full-stack developer based in Islamabad with hands-on experience across React, Next.js, Node.js, Express, databases, and AWS deployment workflows. I care about structure, performance, accessibility, and the small interface details that make software feel trustworthy.

React
Next.js
Node.js
TypeScript
AWS
01
Design interfaces that feel calm under pressure.

02
Keep application state predictable and easy to extend.

03
Build APIs and data flows around real product workflows.

04
Ship responsive experiences that work beyond the happy path.

Selected work

Case-study style projects built for real product workflows.
Full-stack product build
·
Outplacement program dashboard
Outplacio
A responsive multi-module dashboard serving HR teams and outplacement candidates — covering tasks, notifications, reports, contracts, feedback loops, and account settings.

Architected 6-module dashboard reducing HR admin onboarding time significantly
Built CSV & PDF export pipelines handling 10k+ row datasets without UI blocking
Extracted 20+ reusable components, cutting feature delivery time by ~40%
React
Node.js
Express
PostgreSQL
Tailwind CSS
Demo unavailable
Private repo
Frontend engineering
·
Project management operations system
NexTask
A B2B operations platform for customer records, invoicing, project visibility, and reporting — used daily by operations teams across multiple clients.

Rebuilt customer management flow, reducing task completion steps from 7 to 3
Implemented advanced filtering & export-ready reporting with real-time data sync
Achieved consistent sub-200ms render times on data-heavy list views
Next.js
Material UI
Redux Toolkit
REST APIs
Demo unavailable
Private repo
Full-stack application
·
Single-vendor commerce platform
Commercehub
A full-cycle commerce application with JWT authentication, cart state management, product catalogue, and cloud-delivered media assets.

Implemented JWT + refresh-token auth with secure httpOnly cookie storage
Managed global cart & session state with Redux Toolkit, eliminating prop drilling
Deployed assets via AWS S3 + CloudFront, cutting media load time by ~60%
Next.js
Express
MongoDB
AWS S3
CloudFront
Redux Toolkit
Demo unavailable
Private repo
Professional Experience

Where I've built things.
07/2021 – Present

Islamabad, Pakistan

Smart Forum (Qualcomm Projects)
Software Engineer

Optimised Node.js + Express services and rewrote critical PostgreSQL queries, reducing average API response time by 30% across high-traffic endpoints.
Introduced Redux Toolkit for client-side state, eliminating redundant API calls and improving perceived performance on dashboard views.
Integrated RESTful APIs with real-time WebSocket event tracking for live status updates.
Mentored junior developers through structured code reviews; recognised with "Employee of the Month" award.
11/2020 – 06/2021

Islamabad, Pakistan

Techgater Web Solutions
Frontend Developer

Delivered pixel-perfect React + Material UI interfaces across 4 client projects, working directly from Figma designs.
Built a shared component library of 15+ custom hooks and UI primitives, reused across all active projects.
Reduced average page bundle size by 22% through code-splitting and lazy loading non-critical routes.
Collaborated in 2-week Agile sprints with daily standups and bi-weekly design reviews.
08/2020 – 11/2020

Islamabad, Pakistan

PHP Travels
Frontend Intern

Implemented responsive HTML5/CSS3/JS UI features for a travel booking interface used by thousands of daily users.
Resolved 30+ UI bugs reported via QA, improving cross-browser consistency across Chrome, Firefox, and Safari.
Participated in daily standups and sprint retrospectives, gaining hands-on Agile workflow experience.
Learned production deployment practices including staging environments and rollback procedures.
Skills & Credentials

Technologies I work with.
Frontend
React.js
Next.js
TypeScript
JavaScript (ES6+)
Material UI
Ant Design
Redux Toolkit
HTML5/CSS3
Responsive Design
Backend
Node.js
Express.js
REST APIs
JWT Authentication
WebSockets
Database
PostgreSQL
MongoDB
MySQL
DevOps & Tools
Git/GitHub
AWS (S3, CloudFront)
Nginx
PM2
GitHub Actions CI/CD
Jest/Enzyme
Cypress/Playwright
Postman
Agile/Scrum
Education
Diploma in Information Technology

CTTI, Islamabad

75%
Matriculation (Science)

Telecom Foundation School

78%
Certifications
Agile Foundations
JavaScript Foundations
Next.js
React.js
TypeScript
Azure AI Fundamentals
IELTS 6.5
Get in touch

Let's build something together.
Full-stack developer specializing in React, Node.js, and cloud-native applications. Open to new opportunities.

husnainakhtar06@gmail.com
+923476293398
Islamabad, Pakistan
GitHub
LinkedIn

© 2026 All rights reserved.

