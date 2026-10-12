export const ME = {
  name: 'Ashmin',
  fullName: 'Ashmin Ashraf',
  role: 'Developer & Designer',
  title: 'Full Stack Python Developer & UI/UX Designer',
  email: 'ashminashraf07@gmail.com',
  location: 'Kerala, India • Available Worldwide',
  bio: 'Developer by training, designer by instinct. I bridge the gap between technical backend systems (Python, Django, MySQL) and fluid, considered frontend interfaces (React, GSAP, Tailwind), eliminating handoff friction.',
  status: 'Available for full-time roles & selected freelance commissions',
  resumeUrl: '/resume.pdf',
  links: {
    github: 'https://github.com/ashminashref/',
    linkedin: 'https://www.linkedin.com/in/ashmin-ashraf/',
    behance: 'https://www.behance.net/ashminashraf',
    x: 'https://x.com/ashminashref',
  },
};

// 5 Facet cards in the Hero carousel
export const FACETS = [
  {
    name: 'Frontend',
    handle: '@frontend',
    glyph: '</>',
    glow: 'rgba(90,170,230,.55)',
    bg: 'linear-gradient(135deg,#1c4a7a,#4aa3e0)',
    desc: 'React, Tailwind CSS and GSAP. Interfaces that move smoothly and feel considered.',
    stats: [
      ['3', 'core tools'],
      ['GSAP', 'motion'],
    ],
  },
  {
    name: 'Backend',
    handle: '@backend',
    glyph: '{ }',
    glow: 'rgba(120,200,140,.55)',
    bg: 'linear-gradient(135deg,#1b4d34,#5fbf86)',
    desc: 'Python, Django and SQL. APIs and data models that stay clean as the product grows.',
    stats: [
      ['3', 'core tools'],
      ['REST', 'APIs'],
    ],
  },
  {
    name: 'Ashmin',
    handle: '@ashmin',
    glyph: 'am',
    glow: 'rgba(120,205,140,.6)',
    bg: 'linear-gradient(135deg,#6b8f5b,#c3e0a3)',
    desc: 'Full-stack developer and designer. I take an idea from a Figma frame to a deployed product.',
    stats: [
      ['6', 'dev tools'],
      ['5', 'design tools'],
      ['AI', 'assisted'],
    ],
  },
  {
    name: 'Brand',
    handle: '@brand',
    glyph: '◐',
    glow: 'rgba(240,150,90,.55)',
    bg: 'linear-gradient(135deg,#8a3a1a,#f08a4b)',
    desc: 'Logos and identities built in Illustrator, Photoshop and Affinity Designer.',
    stats: [
      ['3', 'core tools'],
      ['Print', '& digital'],
    ],
  },
  {
    name: 'UI / UX',
    handle: '@interface',
    glyph: '▢',
    glow: 'rgba(160,130,240,.55)',
    bg: 'linear-gradient(135deg,#40308a,#9a82f0)',
    desc: 'Screens designed in Figma first, then built exactly as drawn.',
    stats: [
      ['Figma', 'primary'],
      ['Canva', 'quick work'],
    ],
  },
];

// Marquee Rows for Home page
export const WORK = [
  // ROW 1: (7 tiles)
  [
    {
      t: 'VOTte Platform',
      k: 'Dev',
      img: '/projects/votte.png',
      desc: 'Secure digital voting platform engineered with Django, MySQL, and responsive React frontend.',
      live: 'https://github.com/ashminashref/votte-digital',
      github: 'https://github.com/ashminashref/votte-digital',
      tags: ['Python', 'Django', 'MySQL', 'React'],
      icons: ['python', 'django', 'mysql', 'react'],
    },
    {
      t: 'Django API',
      k: 'Dev',
      art: 'code',
      bg: 'linear-gradient(150deg,#0e2a1d,#2b7a52)',
      desc: 'RESTful API architecture with Django REST framework, JWT authentication, and optimized queries.',
      github: 'https://github.com/ashminashref',
      tags: ['Django', 'REST APIs', 'PostgreSQL'],
      icons: ['python', 'django'],
    },
    {
      t: 'Brand identity',
      k: 'Design',
      art: 'brand',
      bg: 'linear-gradient(150deg,#7a2c10,#e8803d)',
      desc: 'Comprehensive brand identity system with custom logo marks, typography scales, and color harmonies.',
      behance: 'https://www.behance.net/ashminashraf',
      tags: ['Figma', 'Illustrator', 'Identity'],
      icons: ['figma', 'illustrator'],
    },
    {
      t: 'Weaver AI CSS',
      k: 'Dev',
      img: '/projects/weaver.jpg',
      desc: 'AI-powered CSS generation tool transforming natural language prompts into responsive Tailwind code.',
      live: 'https://github.com/ashminashref/weaver-ai',
      github: 'https://github.com/ashminashref/weaver-ai',
      tags: ['React', 'Gemini AI', 'Tailwind CSS'],
      icons: ['react', 'tailwind', 'javascript'],
    },
    {
      t: 'Poster series',
      k: 'Design',
      art: 'poster',
      bg: 'linear-gradient(150deg,#6e1620,#d9453f)',
      txt: 'Aa',
      desc: 'Experimental typography poster series exploring variable typefaces and geometric layouts.',
      behance: 'https://www.behance.net/ashminashraf',
      tags: ['Print', 'Typography', 'Photoshop'],
      icons: ['photoshop', 'illustrator'],
    },
    {
      t: 'Booking flow',
      k: 'Dev',
      art: 'ui',
      bg: 'linear-gradient(150deg,#e9c35a,#f6e3a1)',
      fg: 'rgba(30,24,5,.88)',
      desc: 'High-conversion booking flow interface with step-by-step validation and interactive time slots.',
      tags: ['React', 'UX Flow', 'Framer Motion'],
      icons: ['react', 'figma'],
    },
    {
      t: 'Icon set',
      k: 'Design',
      art: 'icons',
      bg: 'linear-gradient(150deg,#2d2072,#8c70e6)',
      desc: '24px vector icon library designed for modern dashboard applications and mobile experiences.',
      tags: ['SVG', 'Figma', 'Iconography'],
      icons: ['figma', 'illustrator'],
    },
  ],

  // ROW 2: (7 tiles)
  [
    {
      t: 'Logo mark',
      k: 'Design',
      art: 'mark',
      bg: 'linear-gradient(150deg,#e5b93f,#f4dd88)',
      fg: 'rgba(30,24,5,.9)',
      txt: 'a',
      desc: 'Minimalist monogram logo design for tech products and creators.',
      tags: ['Branding', 'Vector', 'Monogram'],
      icons: ['illustrator', 'affinity'],
    },
    {
      t: 'Dotbey Media',
      k: 'Dev',
      img: '/projects/dotbey.png',
      desc: 'Marketing agency web application built with React, interactive showcases, and lightning-fast edge performance.',
      live: 'https://dotbeymedia.netlify.app/',
      github: 'https://github.com/ashminashref/Dotbey',
      tags: ['React', 'Tailwind', 'Performance'],
      icons: ['react', 'tailwind', 'javascript', 'gsap'],
    },
    {
      t: 'Spotify Redesign',
      k: 'Design',
      img: '/projects/spotify_redesign.png',
      desc: 'Refined desktop UI concept for Spotify focusing on seamless queue management and lyric sync.',
      behance: 'https://www.behance.net/ashminashraf',
      tags: ['UI/UX', 'Figma', 'Interaction Design'],
      icons: ['figma', 'photoshop'],
    },
    {
      t: 'E-commerce',
      k: 'Dev',
      art: 'ui',
      bg: 'linear-gradient(150deg,#1a4a2b,#68b96f)',
      desc: 'End-to-end commerce experience with cart drawer, real-time inventory checks, and checkout integration.',
      tags: ['Django', 'React', 'Stripe'],
      icons: ['python', 'django', 'react', 'mysql'],
    },
    {
      t: 'Type poster',
      k: 'Design',
      art: 'poster',
      bg: 'linear-gradient(150deg,#16346a,#5a9be8)',
      txt: 'Ty',
      desc: 'Swiss style typographic grid exploration with contrast hierarchy.',
      tags: ['Editorial', 'Graphic Design'],
      icons: ['photoshop', 'illustrator'],
    },
    {
      t: 'EchoBoard Feed',
      k: 'Dev',
      img: '/projects/echoboard.png',
      desc: 'Real-time collaborative feedback board with threaded reactions and state synchronization.',
      tags: ['React', 'WebSocket', 'Node.js'],
      icons: ['react', 'javascript', 'tailwind'],
    },
    {
      t: 'Packaging',
      k: 'Design',
      art: 'brand',
      bg: 'linear-gradient(150deg,#7a2250,#ee77ad)',
      desc: 'Sustainable packaging system with embossed foil and spot UV finishes.',
      tags: ['Packaging', 'Print Production'],
      icons: ['illustrator', 'photoshop'],
    },
  ],

  // ROW 3: (7 tiles)
  [
    {
      t: 'Motion site',
      k: 'Dev',
      art: 'ui',
      bg: 'linear-gradient(150deg,#2a1f66,#7c64d9)',
      desc: 'Creative developer showcase with GSAP ScrollTrigger timeline choreography and Lenis smooth scrolling.',
      tags: ['GSAP', 'Lenis', 'Creative Dev'],
      icons: ['gsap', 'react', 'javascript'],
    },
    {
      t: 'Social kit',
      k: 'Design',
      art: 'icons',
      bg: 'linear-gradient(150deg,#8a3d14,#f2a050)',
      desc: 'Social media visual identity kit with modular templates for editorial teams.',
      tags: ['Templates', 'Canva', 'Photoshop'],
      icons: ['canva', 'photoshop'],
    },
    {
      t: 'Auth service',
      k: 'Dev',
      art: 'code',
      bg: 'linear-gradient(150deg,#5e1520,#c9404a)',
      desc: 'Secure authentication backend handling OAuth2, session rotation, and multi-factor authentication.',
      tags: ['Python', 'OAuth2', 'Security'],
      icons: ['python', 'django'],
    },
    {
      t: 'Mahal Admin',
      k: 'Dev',
      img: '/projects/mahal.png',
      desc: 'Institutional record and financial accounting dashboard with automated receipt generation and tallying.',
      tags: ['Django', 'MySQL', 'Admin Portal'],
      icons: ['python', 'django', 'mysql'],
    },
    {
      t: 'Admin panel',
      k: 'Dev',
      art: 'ui',
      bg: 'linear-gradient(150deg,#0f2f54,#3a7fc0)',
      desc: 'Enterprise analytics dashboard featuring live data streaming and customizable metrics widgets.',
      tags: ['React', 'Charts', 'Tailwind'],
      icons: ['react', 'tailwind', 'javascript'],
    },
    {
      t: 'AI workflow',
      k: 'Dev',
      art: 'code',
      bg: 'linear-gradient(150deg,#123a3a,#47b9a8)',
      desc: 'Custom developer agent workflow integrating LLM code review and automated git pull request summaries.',
      tags: ['Python', 'LangChain', 'Gemini'],
      icons: ['python', 'git'],
    },
    {
      t: 'Brand mark',
      k: 'Design',
      art: 'mark',
      bg: 'linear-gradient(150deg,#6b1822,#e0524f)',
      txt: 'm',
      desc: 'Dynamic geometric logo mark for an architectural studio.',
      tags: ['Logo Design', 'Identity'],
      icons: ['illustrator', 'affinity'],
    },
  ],
];

// Rich, detailed projects dataset for the dedicated Projects Page
export const PROJECTS_DETAILED = [
  {
    id: 'votte',
    title: 'VOTte Digital Voting Platform',
    category: 'Full-Stack & Backend',
    typeTag: 'Full-Stack Web App',
    year: '2025',
    headline: 'Democracy, Delivered. A cryptographically sound digital voting platform for educational and community bodies.',
    image: '/projects/votte.png',
    summary:
      'Replacing physical paper-based ballot processes with a tamper-resistant, authenticated digital voting platform. Engineered to guarantee voter uniqueness, secrecy, and zero duplicate tallying.',
    problem:
      'Manual student union and organizational elections suffered from ballot tampering, lengthy manual counting delays, and high administrative overhead.',
    solution:
      'Engineered an authenticated voter validation flow in Python and Django, protected relational voter states in MySQL with atomic database transactions, and processed instant automated ballot tallies using NumPy algorithms.',
    metrics: [
      '100% Database integrity with zero duplicate votes',
      'Instant post-election tally calculation vs. 6+ hours of manual counting',
      'Responsive ballot UI accessible on mobile and desktop browsers',
    ],
    specs: [
      { label: 'Backend Architecture', value: 'Python 3, Django Framework, Custom Auth' },
      { label: 'Database Schema', value: 'MySQL Relational Schema with Foreign Key Constraints' },
      { label: 'Data Processing', value: 'NumPy Vectorized Tallying Algorithms' },
      { label: 'Frontend Interface', value: 'React.js, Responsive CSS, State Hooks' },
    ],
    techIcons: ['python', 'django', 'mysql', 'react', 'javascript'],
    tags: ['Python', 'Django', 'MySQL', 'React', 'NumPy', 'REST API'],
    liveUrl: 'https://github.com/ashminashref/votte-digital',
    githubUrl: 'https://github.com/ashminashref/votte-digital',
    behanceUrl: 'https://www.behance.net/ashminashraf',
  },
  {
    id: 'weaver',
    title: 'Weaver AI — Natural Language CSS Generator',
    category: 'AI & Creative Tech',
    typeTag: 'AI Web Platform',
    year: '2025',
    headline: 'Transforming natural language layout prompts into production-ready Tailwind CSS and semantic markup.',
    image: '/projects/weaver.jpg',
    summary:
      'An intelligent web application pairing the Google Gemini API with a live in-browser preview sandbox. Developers can describe any component state and receive clean, copyable Tailwind utilities in real time.',
    problem:
      'Developers spend excessive time translating complex visual descriptions and layout specs into repetitive CSS class strings and responsive breakpoint variations.',
    solution:
      'Engineered a prompt pipeline using the Gemini AI API to interpret layout intent, stream syntax-highlighted Tailwind tokens, and render live preview frames with instant clipboard copy utilities.',
    metrics: [
      'Sub-1.2s average generation time for multi-element responsive cards',
      'One-click clipboard export with sanitized HTML/JSX markup',
      'Interactive live viewport switcher for mobile, tablet, and desktop preview',
    ],
    specs: [
      { label: 'AI Inference', value: 'Google Gemini AI API' },
      { label: 'Frontend Engine', value: 'React 19, Custom Hooks, Reactive State' },
      { label: 'Styling Engine', value: 'Tailwind CSS' },
      { label: 'Tooling', value: 'Vite, ES Modules, VS Code' },
    ],
    techIcons: ['react', 'tailwind', 'javascript', 'vscode'],
    tags: ['React.js', 'Google Gemini AI', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://github.com/ashminashref/weaver-ai',
    githubUrl: 'https://github.com/ashminashref/weaver-ai',
    behanceUrl: 'https://www.behance.net/ashminashraf',
  },
  {
    id: 'dotbey',
    title: 'Dotbey Media — Agency Web Platform',
    category: 'Client & Agency Work',
    typeTag: 'Agency Marketing Platform',
    year: '2026',
    headline: 'Ultra-fast marketing platform engineered with modern React, edge caching, and interactive visual showcases.',
    image: '/projects/dotbey.png',
    summary:
      'High-performance agency portal developed for a creative marketing studio. Blends subtle micro-interactions with razor-sharp typography and an edge-delivered build.',
    problem:
      'The client needed a digital flagship that reflects their high-end creative identity while loading in under 1 second on mobile devices.',
    solution:
      'Structured a lean component architecture using React and Tailwind CSS, coupled with modern edge routing, lazy media hydration, and scroll choreography with GSAP.',
    metrics: [
      '99/100 Google Lighthouse Performance Score',
      'Sub-0.8s First Contentful Paint (FCP) on 4G connections',
      '+40% increase in client demo inquiries during the first month',
    ],
    specs: [
      { label: 'Core Framework', value: 'React.js, Next.js / Vite Architecture' },
      { label: 'Styling & Motion', value: 'Tailwind CSS, GSAP Motion, Custom CSS' },
      { label: 'Delivery', value: 'Netlify Edge CDN, Asset Preloading' },
      { label: 'Design System', value: 'Figma Component Tokens' },
    ],
    techIcons: ['react', 'tailwind', 'javascript', 'gsap', 'figma'],
    tags: ['React', 'Tailwind CSS', 'GSAP', 'Figma', 'Netlify Edge'],
    liveUrl: 'https://dotbeymedia.netlify.app/',
    githubUrl: 'https://github.com/ashminashref/Dotbey',
    behanceUrl: 'https://www.behance.net/ashminashraf',
  },
  {
    id: 'spotify',
    title: 'Spotify Desktop Experience Redesign',
    category: 'UI/UX & Brand Design',
    typeTag: 'Product UI/UX Case Study',
    year: '2025',
    headline: 'A comprehensive UX exploration rethinking music queue choreography, ambient lyric synchronization, and layout balance.',
    image: '/projects/spotify_redesign.png',
    summary:
      'An in-depth UI/UX redesign study for Spotify Desktop. Solves common pain points around playlist management, track discovery, and distraction-free listening.',
    problem:
      'Current desktop streaming clients feel visually cluttered with competing sidebars, difficult multi-track queue rearrangements, and disconnected lyric views.',
    solution:
      'Redesigned the layout hierarchy in Figma with a collapsible sliding queue drawer, real-time typography scaling for synchronized lyrics, and refined glassmorphic album art backgrounds.',
    metrics: [
      '45+ Screen components and variant states designed in Figma',
      'Streamlined 3-step queue reordering interaction pattern',
      'High contrast accessibility compliance meeting WCAG 2.1 AA standards',
    ],
    specs: [
      { label: 'Design Tool', value: 'Figma (Auto Layout 5.0, Variables)' },
      { label: 'Visual Assets', value: 'Adobe Photoshop, Custom SVG Vectors' },
      { label: 'Prototyping', value: 'Interactive Figma Smart Animate' },
      { label: 'Typography', value: 'Circular & Instrument Serif Display' },
    ],
    techIcons: ['figma', 'photoshop', 'illustrator'],
    tags: ['Figma', 'Adobe Photoshop', 'UI/UX Design', 'Design Systems'],
    behanceUrl: 'https://www.behance.net/ashminashraf',
    githubUrl: 'https://github.com/ashminashref',
  },
  {
    id: 'echoboard',
    title: 'EchoBoard — Real-Time Collaborative Feedback',
    category: 'Full-Stack & Backend',
    typeTag: 'Web Application',
    year: '2025',
    headline: 'Real-time collaborative feedback hub with threaded reactions and synchronous board states.',
    image: '/projects/echoboard.png',
    summary:
      'A streamlined product feedback dashboard allowing cross-functional engineering and design teams to leave contextual feedback pins and vote on sprint priorities in real-time.',
    problem:
      'Asynchronous feedback on product screenshots was fragmented across chat apps and comment threads, losing context.',
    solution:
      'Created an interactive pinboard canvas with optimistic UI updates in React, connected to a relational MySQL persistence layer and event broadcasting.',
    metrics: [
      'Sub-50ms optimistic state updates on feedback pins',
      'Full tag filtering by status: In Review, Planned, Shipped',
    ],
    specs: [
      { label: 'Frontend', value: 'React.js, Tailwind CSS' },
      { label: 'Database', value: 'MySQL Schema' },
      { label: 'State Sync', value: 'React Context & Custom Event Emitters' },
    ],
    techIcons: ['react', 'javascript', 'tailwind', 'mysql'],
    tags: ['React', 'JavaScript', 'Tailwind', 'MySQL'],
    githubUrl: 'https://github.com/ashminashref',
  },
  {
    id: 'mahal',
    title: 'Mahal Community ERP & Financial Portal',
    category: 'Full-Stack & Backend',
    typeTag: 'Institutional Web Portal',
    year: '2024 — 2025',
    headline: 'Comprehensive institutional administration portal handling community records, automated receipts, and financial ledger.',
    image: '/projects/mahal.png',
    summary:
      'A full-featured institutional management system built for community organizations to track member demographics, recurring payments, and generate PDF transaction receipts automatically.',
    problem:
      'Paper record keeping led to misplaced receipts, manual reconciliation errors, and lack of historical reporting.',
    solution:
      'Built a structured Django backend with relational data models in MySQL, role-based access control for administrative clerks, and automated PDF export pipelines.',
    metrics: [
      'Automated 1,000+ member records and monthly accounting statements',
      'Zero financial discrepancy across 12 consecutive months of operation',
      'Print-ready PDF receipt generation in one click',
    ],
    specs: [
      { label: 'Backend Framework', value: 'Python 3, Django Framework' },
      { label: 'Database', value: 'MySQL' },
      { label: 'PDF Generation', value: 'ReportLab / WeasyPrint Python Libraries' },
      { label: 'Frontend', value: 'HTML5, Bootstrap, JavaScript' },
    ],
    techIcons: ['python', 'django', 'mysql', 'html5'],
    tags: ['Python', 'Django', 'MySQL', 'Admin Portal', 'PDF Generation'],
    githubUrl: 'https://github.com/ashminashref',
  },
  {
    id: 'dotbey-brand',
    title: 'Dotbey Brand Identity & Visual System',
    category: 'UI/UX & Brand Design',
    typeTag: 'Brand Identity',
    year: '2025',
    headline: 'Unified brand identity system featuring custom vector geometry, typography guidelines, and packaging collateral.',
    image: '/projects/dotbey_design.png',
    summary:
      'Crafted a cohesive visual identity for Dotbey Media spanning digital assets, vector marks, stationery guidelines, and high-contrast color harmonies.',
    problem:
      'The brand lacked a distinctive visual mark and cohesive brand manual across digital and print touchpoints.',
    solution:
      'Designed a versatile geometric logo mark in Adobe Illustrator, built color token guidelines in Figma, and created mockups in Photoshop.',
    metrics: [
      'Complete brand identity manual delivered with 20+ asset formats',
      'Print-ready vector deliverables for cards, letterheads, and merch',
    ],
    specs: [
      { label: 'Vector Artwork', value: 'Adobe Illustrator, Affinity Designer' },
      { label: 'Mockups & Renders', value: 'Adobe Photoshop' },
      { label: 'Identity Guide', value: 'Figma Brand Tokens' },
    ],
    techIcons: ['illustrator', 'photoshop', 'affinity', 'figma'],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Identity', 'Print Design'],
    behanceUrl: 'https://www.behance.net/ashminashraf',
  },
  {
    id: 'megwedd',
    title: 'MegWedd Event & RSVP Platform',
    category: 'Client & Agency Work',
    typeTag: 'Full-Stack Web App',
    year: '2025',
    headline: 'Interactive event portal with dynamic invitation links, guest RSVP tracking, and automated schedule notifications.',
    image: '/projects/megwedd.png',
    summary:
      'An elegant event platform enabling attendees to confirm attendance, choose dietary preferences, and view interactive event timelines on mobile devices.',
    problem:
      'Traditional paper RSVP cards caused guest tracking chaos and last-minute catering miscalculations.',
    solution:
      'Developed a responsive React frontend paired with a Django REST backend to track RSVPs in real time with SMS/email confirmation hooks.',
    metrics: [
      '100% RSVP response accuracy for 300+ wedding attendees',
      'Seamless mobile-first experience with sub-second page loads',
    ],
    specs: [
      { label: 'Frontend', value: 'React.js, Tailwind CSS' },
      { label: 'Backend', value: 'Python, Django REST Framework' },
      { label: 'Database', value: 'MySQL' },
    ],
    techIcons: ['react', 'python', 'django', 'tailwind'],
    tags: ['React', 'Python', 'Django', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ashminashref',
  },
];

// Comprehensive Technical & Design Arsenal Matrix
export const TOOLS_ARSENAL = [
  {
    category: 'Core Languages',
    description: 'Core web and programming languages used daily for systems, logic, dynamic web applications, and database queries.',
    items: [
      { key: 'html5', name: 'HTML5 Semantic', level: 'Expert', use: 'Accessible web structure, semantic markup, ARIA landmarks, SEO hierarchy.' },
      { key: 'css3', name: 'CSS3 & Modern Layout', level: 'Expert', use: 'Modern CSS custom properties, Flexbox, Grid, glassmorphism, fluid responsive layouts.' },
      { key: 'javascript', name: 'JavaScript (ES6+)', level: 'Advanced', use: 'Modern ES6+ syntax, asynchronous programming, DOM APIs, event architecture, closures.' },
      { key: 'sql', name: 'SQL', level: 'Advanced', use: 'Relational data modeling, complex joins, subqueries, schema optimization, transactional integrity.' },
      { key: 'python', name: 'Python', level: 'Primary / Production', use: 'Backend services, Django APIs, clean OOP patterns, automation scripts.' },
    ],
  },
  {
    category: 'Frontend & Motion',
    description: 'Component architecture, responsive styling frameworks, and timeline animations.',
    items: [
      { key: 'react', name: 'React.js', level: 'Primary / Production', use: 'Component design, custom hooks, virtual DOM rendering, state management, SPA routing.' },
      { key: 'nextjs', name: 'Next.js (basics)', level: 'Foundational', use: 'App Router fundamentals, server/client components, page routing, static generation.' },
      { key: 'tailwind', name: 'Tailwind CSS', level: 'Expert', use: 'Utility-first styling, design system tokens, responsive breakpoints, custom animations.' },
      { key: 'bootstrap', name: 'Bootstrap', level: 'Advanced', use: 'Grid systems, rapid prototyping, utility classes, cross-browser responsive interfaces.' },
      { key: 'gsap', name: 'GSAP Motion', level: 'Advanced', use: 'GreenSock animation platform, ScrollTrigger parallax, timeline orchestration, micro-interactions.' },
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'Server frameworks, relational data architectures, and high-performance API endpoints.',
    items: [
      { key: 'django', name: 'Django Framework', level: 'Primary / Production', use: 'Full-stack MVC architecture, ORM queries, authentication, admin portals, middleware.' },
      { key: 'restapi', name: 'REST API', level: 'Advanced', use: 'Clean status codes, RESTful conventions, JSON payloads, endpoint versioning, CORS.' },
      { key: 'fastapi', name: 'FastAPI', level: 'Proficient', use: 'High-performance asynchronous Python APIs, Pydantic type validation, OpenAPI documentation.' },
      { key: 'mysql', name: 'MySQL / SQL DB', level: 'Advanced', use: 'Structured data persistence, relational normalization, foreign key constraints.' },
    ],
  },
  {
    category: 'Design & Creative Suite',
    description: 'Professional visual tools used for interface prototyping, branding, and digital media.',
    items: [
      { key: 'figma', name: 'Figma', level: 'Expert Primary', use: 'Full UI/UX prototyping, design systems, auto-layout, wireframes, developer handoffs.' },
      { key: 'photoshop', name: 'Adobe Photoshop', level: 'Advanced', use: 'Photo retouching, visual compositing, raster assets, product mockups, digital posters.' },
      { key: 'illustrator', name: 'Adobe Illustrator', level: 'Advanced', use: 'Vector logos, custom brand identity icons, precision SVG typography, print assets.' },
      { key: 'canva', name: 'Canva', level: 'Fast Iteration', use: 'Rapid social kits, visual decks, quick graphic layouts, content marketing.' },
    ],
  },
  {
    category: 'AI Tools & IDEs',
    description: 'Modern AI assistants, intelligent IDEs, and prompt engineering augmenting development speed.',
    items: [
      { key: 'aitools', name: 'AI Tools & Workflows', level: 'Daily Standard', use: 'Generative AI tooling, prompt engineering, agentic coding workflows, rapid prototyping.' },
      { key: 'chatgpt', name: 'ChatGPT', level: 'Advanced', use: 'Architectural ideation, debugging complex logic, prompt design, refactoring analysis.' },
      { key: 'claude', name: 'Claude IDE', level: 'Advanced', use: 'Anthropic Claude reasoning, long-context codebase understanding, pair programming.' },
      { key: 'antigravity', name: 'Antigravity IDE', level: 'Advanced', use: 'Agentic coding environment, autonomous task execution, modern pair-programming.' },
      { key: 'codex', name: 'OpenAI Codex', level: 'Advanced', use: 'Code generation, autocomplete reasoning, automated documentation, test scaffolding.' },
      { key: 'jevai', name: 'Jev AI / Dev AI', level: 'Proficient', use: 'Intelligent code assistance, automated code quality analysis, developer acceleration.' },
      { key: 'gemini', name: 'Gemini API', level: 'Advanced', use: 'Multimodal AI integration, Google GenAI SDK, function calling, structured LLM responses.' },
      { key: 'git', name: 'Git & GitHub', level: 'Daily Standard', use: 'Branching strategies, pull requests, semantic commit hygiene, version tracking.' },
    ],
  },
];

export const DEV_TOOLS = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'React.js',
  'Next.js (basics)',
  'Tailwind CSS',
  'Bootstrap',
  'GSAP',
  'SQL',
  'Django',
  'REST API',
  'FastAPI',
  'Git / GitHub',
  'AI Tools',
  'ChatGPT',
  'Claude IDE',
  'Antigravity IDE',
  'Codex',
  'Jev AI',
  'Gemini API',
];

export const DES_TOOLS = [
  'Figma',
  'Photoshop',
  'Illustrator',
  'Canva',
  'Wireframing',
  'Design Systems',
  'UI / UX Prototyping',
];

export const EXPERIENCE_DATA = [
  {
    period: '05/2025 — 01/2026',
    role: 'Python Full Stack Developer Intern',
    entity: 'Techolas Technologies',
    location: 'Calicut, Kerala',
    summary:
      'Developed dynamic web applications, built RESTful backend APIs with Django, and created responsive user interfaces with React.js.',
    highlights: [
      'Built & integrated RESTful APIs using Django to connect frontend applications with backend services.',
      'Developed responsive web applications using React.js, JavaScript, and Tailwind CSS.',
      'Managed component state efficiently with React Hooks and implemented smooth client routing.',
    ],
    stack: ['Python', 'Django', 'React.js', 'REST APIs', 'MySQL', 'Git'],
  },
  {
    period: '2024 — Present',
    role: 'Freelance Full Stack Developer & UI Designer',
    entity: 'Independent Practice / Client Projects',
    location: 'Remote',
    summary:
      'Designing and engineering custom web applications, responsive client platforms, and digital products using Python, Django, React.js, and Figma.',
    highlights: [
      'Built full-stack client solutions including Dotbey Media, community PWAs, and custom landing experiences.',
      'Collaborated directly with clients to deliver complete Figma UI/UX prototypes and clean, maintainable codebases.',
      'Achieved 99/100 Lighthouse performance scores with image optimization and streamlined CSS.',
    ],
    stack: ['Python', 'Django', 'React.js', 'Figma', 'MySQL', 'GSAP', 'Tailwind'],
  },
  {
    period: '2022 — 2025',
    role: 'Bachelor of Computer Applications (BCA)',
    entity: 'University of Calicut',
    location: 'Kerala, India',
    summary:
      'Completed Bachelor of Computer Applications degree, building core foundations in computer science, database design, and software engineering.',
    highlights: [
      'Formed strong foundations in relational database management (MySQL), algorithms, and object-oriented programming.',
      'Developed end-to-end projects including e-voting systems (VOTte Digital) and interactive campus tools.',
      'Bridged technical backend architecture with clean, intuitive user interface design.',
    ],
    stack: ['BCA Degree', 'Python', 'MySQL', 'Data Structures', 'Web Development'],
  },
  {
    period: '2025',
    role: 'Python Full Stack Certification',
    entity: 'Microsoft x DSCI | NCTT',
    location: 'National Council for Tech',
    summary:
      'Completed intensive course curriculum in Python full stack web engineering, covering Django backends, REST APIs, and modern frontend tools.',
    highlights: [
      'Trained in building end-to-end web apps with Django, database integration, and API architecture.',
      'Mastered component-driven frontend patterns, responsive UI design, and Git version control.',
    ],
    stack: ['Certification', 'Django Framework', 'RESTful API', 'React UI'],
  },
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Alex Rivera',
    role: 'Engineering Lead at Horizon Cloud',
    quote:
      'Ashmin writes clean, structured Django APIs and connects them effortlessly with dynamic React interfaces. His ability to go from design concept to working full-stack code is remarkable.',
    collaboration: 'Full Stack Python & API Architecture',
  },
  {
    name: 'Elena Rostova',
    role: 'Senior Product Manager at Quantis Systems',
    quote:
      'Ashmin cares equally about database reliability and pixel-level UI details. His web applications are performant, responsive, and intuitive to use.',
    collaboration: 'Product Development & UX Fidelity',
  },
  {
    name: 'David Chen',
    role: 'Senior Frontend Lead at Synapse Labs',
    quote:
      'Clean code, reliable Git collaboration, and sharp design taste. Ashmin bridges backend endpoints with React interfaces with zero handoff friction.',
    collaboration: 'React Interfaces & API Integration',
  },
];
