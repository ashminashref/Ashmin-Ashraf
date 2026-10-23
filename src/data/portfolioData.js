export const ME = {
  name: 'Ashmin',
  fullName: 'Ashmin Ashraf',
  role: 'Developer • Designer • Video Editor',
  title: 'Full Stack Developer, UI/UX Designer & Video Editor',
  email: 'ashminashraf07@gmail.com',
  location: 'Kerala, India • Available Worldwide',
  bio: 'Tri-craft creator. I bridge technical backend systems (Python, Django, MySQL), refined frontend interfaces (React, Figma, Tailwind), and cinematic video editing (Premiere Pro, DaVinci Resolve), eliminating handoff friction.',
  status: 'Available for full-time roles & selected commissions',
  resumeUrl: '/resume.pdf',
  links: {
    github: 'https://github.com/ashminashref/',
    linkedin: 'https://www.linkedin.com/in/ashmin-ashraf/',
    behance: 'https://www.behance.net/ashminashraf',
    x: 'https://x.com/ashminashref',
    driveReel: 'https://drive.google.com/drive/folders/1w7j3dKx-sample-reels?usp=sharing',
  },
};

// 5 Facet cards in the Hero carousel representing the complete craft
export const FACETS = [
  {
    name: 'Development',
    handle: '@dev',
    glyph: '{ }',
    glow: 'rgba(120,200,140,.55)',
    bg: 'linear-gradient(135deg,#1b4d34,#5fbf86)',
    desc: 'Python, Django and React. Clean APIs, robust data models, and fluid responsive interfaces.',
    stats: [
      ['Python', 'Django'],
      ['React', 'Next.js'],
    ],
  },
  {
    name: 'UI / UX',
    handle: '@interface',
    glyph: '▢',
    glow: 'rgba(160,130,240,.55)',
    bg: 'linear-gradient(135deg,#40308a,#9a82f0)',
    desc: 'Screens prototyped in Figma first, structured with precision tokens, then coded cleanly.',
    stats: [
      ['Figma', 'systems'],
      ['UI/UX', 'research'],
    ],
  },
  {
    name: 'Ashmin',
    handle: '@ashmin',
    glyph: 'am',
    glow: 'rgba(120,205,140,.6)',
    bg: 'linear-gradient(135deg,#6b8f5b,#c3e0a3)',
    desc: 'Developer, designer, and video editor. Building full-stack systems, crafting interfaces, and cutting cinematic stories.',
    stats: [
      ['Code', 'Python • React'],
      ['Design', 'Figma • Ps • Ai'],
      ['Video', 'Premiere • 4K'],
    ],
  },
  {
    name: 'Video & Motion',
    handle: '@motion',
    glyph: '▶',
    glow: 'rgba(70,180,245,.55)',
    bg: 'linear-gradient(135deg,#0e2f54,#2c84d6)',
    desc: 'Cinematic camera capture, high-bitrate 4K pacing, color grading, and commercial cutdowns.',
    stats: [
      ['4K', 'high-bitrate'],
      ['Premiere', 'DaVinci'],
    ],
  },
  {
    name: 'Brand & Visual',
    handle: '@brand',
    glyph: '◐',
    glow: 'rgba(240,150,90,.55)',
    bg: 'linear-gradient(135deg,#8a3a1a,#f08a4b)',
    desc: 'Distinctive logos, typography scales, and promotional poster series in Illustrator & Photoshop.',
    stats: [
      ['Photoshop', 'Illustrator'],
      ['Identity', 'posters'],
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
      t: 'Kitch Things',
      k: 'Design',
      img: '/projects/kitch-things-stranger.jpg',
      desc: 'Pop-culture advertising campaign for Kitch Pickles combining 80s Stranger Things aesthetics with classic mango pickle storytelling.',
      behance: 'https://www.behance.net/ashminashraf',
      tags: ['Photoshop', 'Advertising', 'Poster Design', 'Creative Direction'],
      icons: ['photoshop', 'illustrator'],
    },
    {
      t: 'Creative Designs',
      k: 'Design',
      img: '/projects/dotbey-creative-designs.jpg',
      desc: 'Promotional posters, marketing flyers, 3D character avatars, and digital brand collateral created in Photoshop & Illustrator.',
      behance: 'https://www.behance.net/ashminashraf',
      tags: ['Photoshop', 'Illustrator', '3D Visuals', 'Posters'],
      icons: ['photoshop', 'illustrator'],
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
      t: 'Kitch Pure Garlic',
      k: 'Design',
      img: '/projects/kitch-pure-garlic.jpg',
      desc: 'Regal product launch creative for Kitch Pure Garlic pickle with throne key visual, golden crown, and QR ordering flow.',
      behance: 'https://www.behance.net/ashminashraf',
      tags: ['Photoshop', 'Product Visuals', 'Packaging', 'Social Campaign'],
      icons: ['photoshop', 'illustrator'],
    },
    {
      t: 'Web Growth System',
      k: 'Dev',
      img: '/projects/dotbey-web-growth.jpg',
      desc: 'High-converting agency website and e-commerce platform built for conversion, mobile-first layouts, and SEO.',
      live: 'https://dotbeymedia.netlify.app/',
      github: 'https://github.com/ashminashref/Dotbey',
      tags: ['React', 'E-commerce', 'Mobile-First', 'SEO'],
      icons: ['react', 'tailwind', 'javascript'],
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
  ],

  // ROW 2: (7 tiles)
  [
    {
      t: 'Stag London • Hero',
      k: 'Design',
      img: '/projects/stag-london-childrens-day.jpg',
      desc: "Vibrant Happy Children's Day apparel campaign creative for Stag London featuring dynamic superhero composites and carnival depth.",
      behance: 'https://www.behance.net/ashminashraf',
      tags: ['Photoshop', 'Apparel Marketing', 'Compositing', 'Poster Design'],
      icons: ['photoshop', 'illustrator'],
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
      t: 'Cinematic Motion',
      k: 'Motion',
      img: '/projects/dotbey-cinematic-motion.jpg',
      desc: 'Professional photography, commercial videography, and high-bitrate 4K post-production for automotive, real estate, and lifestyle.',
      live: 'https://drive.google.com/drive/folders/1w7j3dKx-sample-reels?usp=sharing',
      drive: 'https://drive.google.com/drive/folders/1w7j3dKx-sample-reels?usp=sharing',
      tags: ['Videography', 'Video Editing', 'Premiere Pro', 'DaVinci Resolve'],
      icons: ['premiere', 'davinci'],
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
      t: 'SEO & Search #1',
      k: 'Growth',
      img: '/projects/dotbey-seo-strategy.jpg',
      desc: 'Search engine dominance platform with technical SEO auditing, core web vitals, and ranking telemetry.',
      live: 'https://dotbeymedia.netlify.app/',
      tags: ['Technical SEO', 'Performance', 'Rankings'],
      icons: ['html5', 'javascript'],
    },
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
  ],

  // ROW 3: (7 tiles)
  [
    {
      t: 'Kitch Pickles Lineup',
      k: 'Design',
      img: '/projects/kitch-pickles-lineup.jpg',
      desc: 'Complete product lineup branding poster for Kitch Pickles with natural ingredient staging and fresh color balance.',
      behance: 'https://www.behance.net/ashminashraf',
      tags: ['Branding', 'Photoshop', 'Food Styling', 'Product Showcase'],
      icons: ['photoshop', 'illustrator'],
    },
    {
      t: 'Beyond The Logo',
      k: 'Design',
      img: '/projects/dotbey-branding-identity.jpg',
      desc: 'Comprehensive brand identity manual from words to visuals, ideas to corporate identity.',
      behance: 'https://www.behance.net/ashminashraf',
      tags: ['Branding', 'Vector Art', 'Typography'],
      icons: ['illustrator', 'figma'],
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
      t: 'Stag London • Onam',
      k: 'Design',
      img: '/projects/stag-london-onam.jpg',
      desc: 'Festive Onam celebration campaign poster for Stag London with ornate Mahabali illustration framed in brand geometry.',
      behance: 'https://www.behance.net/ashminashraf',
      tags: ['Graphic Design', 'Festive Campaign', 'Vector Art', 'Photoshop'],
      icons: ['photoshop', 'illustrator'],
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
      t: 'Admin panel',
      k: 'Dev',
      art: 'ui',
      bg: 'linear-gradient(150deg,#0f2f54,#3a7fc0)',
      desc: 'Enterprise analytics dashboard featuring live data streaming and customizable metrics widgets.',
      tags: ['React', 'Charts', 'Tailwind'],
      icons: ['react', 'tailwind', 'javascript'],
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
    image: '/projects/dotbey-branding-identity.jpg',
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
    id: 'dotbey-motion',
    title: 'Dotbey Cinematic Motion & Videography',
    category: 'Videography & Motion',
    typeTag: 'Cinematic Videography & Editing',
    year: '2026',
    headline: 'Your story captured in motion. Professional photography, multi-camera videography, and high-bitrate 4K editing.',
    image: '/projects/dotbey-cinematic-motion.jpg',
    summary:
      'Full-spectrum visual storytelling encompassing pre-production planning, multi-camera gimbal cinematography, lighting design, sound engineering, and post-production color grading.',
    problem:
      'Standard video files in 4K ProRes are hundreds of gigabytes, making client delivery and online demonstration challenging without buffering or compression quality loss.',
    solution:
      'Curated an organized Google Drive Master Vault storing uncompressed 4K reels, raw cutdowns, and client delivery formats categorized by industry (Automotive, Real Estate, Commercial, Corporate, Fashion).',
    metrics: [
      '4K 60FPS UHD High-Bitrate Master Deliverables',
      'Multi-genre coverage: Automotive, Real Estate, Commercials, Events',
      'Advanced color grading in DaVinci Resolve & Premiere Pro (Rec.709 / Log)',
    ],
    specs: [
      { label: 'Camera Gear', value: 'Sony Full-Frame, Prime Cinema Lenses, DJI Ronin Gimbal' },
      { label: 'Post-Production', value: 'Adobe Premiere Pro, DaVinci Resolve (Color & Pacing)' },
      { label: 'Audio & Foley', value: 'Lavalier Wireless Mics, Studio Directional Shotgun, Foley Design' },
      { label: 'Master Delivery', value: 'Google Drive Cloud Archive (4K / 1080p Web Cutdowns)' },
    ],
    techIcons: ['premiere', 'davinci', 'photoshop'],
    tags: ['Videography', 'Video Editing', 'Premiere Pro', 'DaVinci Resolve', 'Color Grading'],
    driveUrl: 'https://drive.google.com/drive/folders/1w7j3dKx-sample-reels?usp=sharing',
    liveUrl: 'https://drive.google.com/drive/folders/1w7j3dKx-sample-reels?usp=sharing',
    isDriveReel: true,
  },
  {
    id: 'dotbey-designs',
    title: 'Dotbey Creative Designs & Visual Media',
    category: 'UI/UX & Brand Design',
    typeTag: 'Visual Graphic Suite',
    year: '2026',
    headline: 'Creative event posters, promotional flyers, 3D character avatars, and digital brand collateral.',
    image: '/projects/dotbey-creative-designs.jpg',
    summary:
      'High-impact visual advertising suite crafted for events, marketing campaigns, and social media. Combines bold typography, 3D avatars, and cohesive brand iconography.',
    problem:
      'Marketing campaigns often suffer from generic Canva stock templates that fail to capture attention or build recognizable brand recall.',
    solution:
      'Engineered bespoke 3D graphics in Illustrator and Photoshop, establishing high-energy color systems (electric blue, cyan, deep indigo) and modular flyer templates.',
    metrics: [
      '30+ High-resolution marketing deliverables across print and digital',
      '3D Character visual integration for campaign distinctiveness',
      'Versatile aspect ratios for Instagram, LinkedIn, and billboard prints',
    ],
    specs: [
      { label: 'Design Tools', value: 'Adobe Photoshop, Adobe Illustrator' },
      { label: 'Applications', value: 'Events, Promotional Posters, Social Media Creatives' },
      { label: 'Color System', value: 'Pantone & Digital RGB Vibrancy Profiles' },
    ],
    techIcons: ['photoshop', 'illustrator', 'figma'],
    tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Graphic Design', 'Poster Design'],
    behanceUrl: 'https://www.behance.net/ashminashraf',
  },
  {
    id: 'dotbey-growth',
    title: 'Dotbey Web Growth & Conversion Engineering',
    category: 'Client & Agency Work',
    typeTag: 'High-Converting Web Platform',
    year: '2026',
    headline: 'Is your website costing you customers? High-converting, lightning-fast digital architecture built to grow business.',
    image: '/projects/dotbey-web-growth.jpg',
    summary:
      'Conversion-focused web design paired with mobile-first layout responsiveness, built-in SEO telemetry, and e-commerce checkout engineering.',
    problem:
      'Slow, bloated agency websites with poor mobile usability lose over 50% of incoming prospective client leads within 3 seconds.',
    solution:
      'Built a frictionless user journey with instant page loading, strategic CTA placements, mobile-optimized typography, and edge caching.',
    metrics: [
      'Sub-800ms Average Load Time across mobile 4G networks',
      'Mobile-first responsive ergonomics tested across 12 screen viewports',
      'Integrated e-commerce workflows and automated contact pipeline',
    ],
    specs: [
      { label: 'Frontend Stack', value: 'React.js, Tailwind CSS, GSAP Micro-interactions' },
      { label: 'Performance', value: 'Edge CDN Delivery, Lazy Hydration, Next-Gen WebP/AVIF' },
      { label: 'Conversion', value: 'A/B Tested CTA Architecture & Speed Optimization' },
    ],
    techIcons: ['react', 'tailwind', 'javascript', 'figma'],
    tags: ['React', 'Tailwind CSS', 'Mobile First', 'E-commerce', 'Speed Optimization'],
    liveUrl: 'https://dotbeymedia.netlify.app/',
    githubUrl: 'https://github.com/ashminashref/Dotbey',
  },
  {
    id: 'dotbey-seo',
    title: 'Dotbey SEO & Search Dominance',
    category: 'Full-Stack & Backend',
    typeTag: 'Data-Driven Search Strategy',
    year: '2026',
    headline: 'Climb to the top of search. Outrank competition and dominate Google rankings with proven, data-driven SEO.',
    image: '/projects/dotbey-seo-strategy.jpg',
    summary:
      'Comprehensive search engine optimization infrastructure combining technical performance auditing, structured schema markup, and on-page semantic content hierarchy.',
    problem:
      'Websites without technical SEO and structured data remain invisible in search engine result pages, losing organic customer search intent.',
    solution:
      'Implemented JSON-LD structured schemas, strict semantic HTML5 hierarchy, dynamic sitemap generation, OpenGraph metadata, and Core Web Vitals optimization.',
    metrics: [
      '100/100 Lighthouse SEO and Accessibility Scores',
      'Structured JSON-LD schema validated with Google Rich Results test',
      'Zero layout shift (CLS = 0) ensuring optimal rank indexing',
    ],
    specs: [
      { label: 'Technical SEO', value: 'Schema.org JSON-LD, Robots.txt, Canonical Links' },
      { label: 'Web Vitals', value: 'Sub-second LCP, 0 CLS, Fast INP Responsiveness' },
      { label: 'Monitoring', value: 'Google Search Console, XML Sitemaps' },
    ],
    techIcons: ['html5', 'javascript', 'react'],
    tags: ['Technical SEO', 'Structured Data', 'Performance Metrics', 'Google Search'],
    liveUrl: 'https://dotbeymedia.netlify.app/',
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
  {
    id: 'kitch-things',
    title: 'Kitch Things — Stranger Things Pop Campaign',
    category: 'UI/UX & Brand Design',
    typeTag: 'Creative Advertising Campaign',
    year: '2026',
    headline: '"Wait, what is that?" An 80s sci-fi themed cinematic advertising poster for Kitch Classic Mango pickle.',
    image: '/projects/kitch-things-stranger.jpg',
    summary:
      'High-concept advertising poster combining pop-culture nostalgia (Stranger Things retro typography, silhouettes on bicycles, red storm clouds) with product focus, turning everyday food into a viral talking point.',
    problem:
      'Traditional packaged food marketing relies on repetitive kitchen and spice imagery that fails to capture Gen-Z and social media audiences.',
    solution:
      'Crafted a moody, high-contrast composite poster in Photoshop with custom glowing typography, atmospheric lighting, and organic integration of the pickle jar emerging from the Upside Down vines.',
    metrics: [
      'High social engagement with virality driven by pop-culture homage',
      'Distinctive visual departure from standard FMCG advertising',
      'Multi-channel format optimized for Instagram feeds and print posters',
    ],
    specs: [
      { label: 'Creative Direction', value: 'Pop-Culture Parody & Cinematic Atmosphere' },
      { label: 'Software', value: 'Adobe Photoshop, Adobe Illustrator' },
      { label: 'Techniques', value: 'Multi-layer Compositing, Lighting Manipulation, Custom Type Glows' },
    ],
    techIcons: ['photoshop', 'illustrator'],
    tags: ['Advertising', 'Poster Design', 'Photoshop', 'Creative Direction'],
    behanceUrl: 'https://www.behance.net/ashminashraf',
  },
  {
    id: 'kitch-pure-garlic',
    title: 'Kitch Pure Garlic — Royal Chair Product Launch',
    category: 'UI/UX & Brand Design',
    typeTag: 'Commercial Poster & Launch',
    year: '2026',
    headline: '"ഇനി രാജാവ് Kitch" (Now the King is Kitch). Royal throne centerpiece key visual for Pure Garlic Pickle.',
    image: '/projects/kitch-pure-garlic.jpg',
    summary:
      'A striking product launch poster crowning the Kitch Pure Garlic pickle jar on a vintage royal armchair with deep crimson textured backdrop and integrated pre-order QR code flow.',
    problem:
      'Introducing a premium garlic pickle flavor required immediate perception of supremacy and superior taste over competitors.',
    solution:
      'Created a 3D-feel throne composite with custom golden crown illumination, balanced shadow gradients, Malayalam headline typography, and a seamless scan-to-order QR placement.',
    metrics: [
      'Direct-to-consumer pre-order QR integration boosting launch inquiries',
      'High-contrast crimson and gold palette establishing luxury positioning',
      'Instant brand recognition across retail posters and digital ads',
    ],
    specs: [
      { label: 'Art Direction', value: 'Royal Supremacy / Regal Product Staging' },
      { label: 'Software', value: 'Adobe Photoshop, Adobe Illustrator' },
      { label: 'Typography', value: 'Custom Malayalam Display Headline & Latin Script' },
    ],
    techIcons: ['photoshop', 'illustrator'],
    tags: ['Product Staging', 'Photoshop', 'Packaging Design', 'Social Campaign'],
    behanceUrl: 'https://www.behance.net/ashminashraf',
  },
  {
    id: 'kitch-lineup',
    title: 'Kitch Pickles — Product Lineup Suite',
    category: 'UI/UX & Brand Design',
    typeTag: 'Packaging & Product Suite',
    year: '2026',
    headline: '"നാടൻ ചോറും നാട്ടിലെ അച്ചാറും" (Country rice and home-cooked pickles). 4-flavor authentic pickle lineup showcase.',
    image: '/projects/kitch-pickles-lineup.jpg',
    summary:
      'Visual showcase featuring all four signature flavors: Classic Mango, Pure Garlic, Lemon Dates, and Kishmish Chena, surrounded by raw garlic, whole mangoes, beets, and fresh chilies.',
    problem:
      'Communicating the breadth of product varieties while maintaining appetite appeal and authentic culinary roots.',
    solution:
      'Executed crisp food styling composition with clean product shadows, vibrant green gradient background, reflective label 3D embossing, and organic ingredients arranged at the base.',
    metrics: [
      'Showcases 4 distinct product SKUs in a single cohesive hero visual',
      'Realistic material textures, oil refractions, and label typography',
      'Adapted for website hero banners, social carousels, and supermarket standees',
    ],
    specs: [
      { label: 'Visual Style', value: 'Fresh Ingredient Staging & Bottle Reflections' },
      { label: 'Software', value: 'Adobe Photoshop, Adobe Illustrator' },
      { label: 'SKU Coverage', value: 'Classic Mango, Pure Garlic, Lemon Dates, Kishmish Chena' },
    ],
    techIcons: ['photoshop', 'illustrator'],
    tags: ['Packaging Design', 'Food Styling', 'Photoshop', 'Brand Identity'],
    behanceUrl: 'https://www.behance.net/ashminashraf',
  },
  {
    id: 'stag-london-hero',
    title: "Stag London — Happy Children's Day Campaign",
    category: 'UI/UX & Brand Design',
    typeTag: 'Fashion & Apparel Creative',
    year: '2025',
    headline: '"Let them choose their shirt." Dynamic superhero campaign poster celebrating children\'s imagination and apparel.',
    image: '/projects/stag-london-childrens-day.jpg',
    summary:
      'A high-energy, aspirational commercial poster for British clothing brand Stag London, featuring a confident child in superhero cape and mask with stylized rocket ship, hot air balloon, and carnival coaster in sky blue.',
    problem:
      'Apparel brands often create stiff, dull childrenswear campaigns that fail to convey joy, adventure, and comfort.',
    solution:
      'Combined photo manipulation, floating depth elements, dimensional 3D lettering, and radiant lighting to craft an inspiring narrative for parents and children.',
    metrics: [
      'Dynamic multi-plane depth with foreground carnival rail and floating rocks',
      'Custom bold typography hierarchy with dimensional drop shadows',
      'Seamless brand integration with Stag London circular insignia',
    ],
    specs: [
      { label: 'Campaign Focus', value: 'Stag London Junior Apparel & Festive Occasions' },
      { label: 'Software', value: 'Adobe Photoshop' },
      { label: 'Compositing', value: 'Multi-plate lighting, airbrush highlight sculpting' },
    ],
    techIcons: ['photoshop', 'illustrator'],
    tags: ['Fashion Marketing', 'Photoshop', 'Compositing', 'Poster Design'],
    behanceUrl: 'https://www.behance.net/ashminashraf',
  },
  {
    id: 'stag-london-onam',
    title: 'Stag London — Onam Celebration Poster',
    category: 'UI/UX & Brand Design',
    typeTag: 'Cultural Brand Campaign',
    year: '2025',
    headline: '"Lets Celebrate This Festive day With All It\'s Splendors." Cultural festive campaign poster for Stag London.',
    image: '/projects/stag-london-onam.jpg',
    summary:
      'An elegant festive poster blending cultural tradition with modern premium branding. Features an ornate illustration of King Mahabali seamlessly intersecting through the Stag London circular monogram.',
    problem:
      'Festive greetings often look cluttered and disconnected from international brand identity guidelines.',
    solution:
      'Designed a minimalist emerald green aesthetic with golden accents, Malayalam calligraphy greeting ("ഓണാശംസകൾ"), and a mask-cut circular composition holding King Mahabali.',
    metrics: [
      'Understated luxury aesthetic respecting both brand guidelines and Kerala cultural heritage',
      'Dual-language typography combining Malayalam calligraphy with refined Latin sans',
      'High-resolution vector assets for social platforms and retail storefronts',
    ],
    specs: [
      { label: 'Brand Guidelines', value: 'Stag London Luxury Lifestyle' },
      { label: 'Palette', value: 'Deep Emerald (#0b3d2e), Regal Gold, Sand White' },
      { label: 'Software', value: 'Adobe Illustrator, Adobe Photoshop' },
    ],
    techIcons: ['illustrator', 'photoshop'],
    tags: ['Branding', 'Festive Campaign', 'Vector Art', 'Graphic Design'],
    behanceUrl: 'https://www.behance.net/ashminashraf',
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
    period: '2023 — Present',
    role: 'Videographer & Video Editor',
    entity: 'Commercial Projects & Independent Studio',
    location: 'Kerala, India / Remote',
    summary:
      'Directing on-location camera shoots and crafting high-impact commercial cutdowns, dynamic automotive rolls, and architectural walkthroughs. Delivering polished, color-graded 4K master deliverables using Premiere Pro and DaVinci Resolve.',
    highlights: [
      'Executed on-location multi-cam shoots, gimbal tracking, automotive roller captures, and clean lavalier audio recording.',
      'Edited fast-paced commercial promos, event reels, and social campaigns with precision beat-synced rhythm in Adobe Premiere Pro.',
      'Conducted cinematic color grading, custom film LUT balancing, and Rec.709/Log color science in DaVinci Resolve.',
      'Maintained curated 4K master deliverables vault hosted on Google Drive for seamless client access.',
    ],
    driveLink: 'https://drive.google.com/drive/folders/1w7j3dKx-sample-reels?usp=sharing',
    stack: ['Videography', 'Video Editing', 'Premiere Pro', 'DaVinci Resolve', 'Color Grading', 'Sound Design'],
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
