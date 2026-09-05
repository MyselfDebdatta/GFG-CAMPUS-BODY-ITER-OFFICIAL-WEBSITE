export const CLUB = {
  name: "GFG Campus Body",
  short: "GFG ITER",
  full: "GeeksforGeeks (GFG) Campus Body @ SOA – Student Chapter (CSE, ITER)",
  institution: "Siksha 'O' Anusandhan (Deemed to be University)",
  hostUnit: "Department of Computer Science and Engineering, ITER",
  motto: "LEARN. BUILD. SHARE.",
  tagline: "Empowering Students Through Technology, Mentorship and Community",
  description:
    "The official GeeksforGeeks student chapter at the Department of Computer Science and Engineering, ITER, Siksha 'O' Anusandhan (Deemed to be University) — empowering students through technology, mentorship, and community.",
  address: "Department of CSE, ITER, Siksha 'O' Anusandhan (SOA) University, Jagamara, Bhubaneswar, Odisha 751030",
  email: "gfgiter@gmail.com",
  phone: "+91 82609 61948",
  reportingPeriod: "November 2025 – August 2026",
  facultyCoordinators: [
    { name: "Mr. Saurav Kumar", role: "Faculty Coordinator", department: "Department of CSE, ITER" },
    { name: "Mr. Sujit Bebortta", role: "Faculty Coordinator", department: "Department of CSE, ITER" },
  ],
  president: {
    name: "Vivek Ranjan Sahoo",
    role: "President",
    phone: "+91 82609 61948",
  },
  clubCoordinators: [
    { name: "Anubhab Samantaray", role: "Club Coordinator" },
    { name: "Akansha Ajay", role: "Club Coordinator" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/gfgiter/",
    instagram: "https://www.instagram.com/gfg_iter/",
    whatsapp: "https://chat.whatsapp.com/Hr0puwutetlK6dc1MTXXJZ?mode=wwt",
    discord: "https://discord.gg/PQu6RPxZy",
    github: "https://github.com",
    youtube: "https://youtube.com",
  },
};

export const STATS = [
  { value: 14, suffix: "", label: "Activities Documented" },
  { value: 8, suffix: "", label: "Skills Exchange Tracks" },
  { value: 10, suffix: "+", label: "Tech Domains Covered" },
  { value: 100, suffix: "+", label: "Active Student Builders" },
];

export const MARQUEE = [
  "Artificial Intelligence & Machine Learning",
  "TinyML & Agentic AI",
  "Blockchain & Web3",
  "Quantum Computing",
  "Computer Networking & Hardware Systems",
  "Cybersecurity & Ethical Hacking",
  "Linux, Cloud & OS Internals",
  "DevOps & CI/CD Pipelines",
  "AI Automation with n8n",
  "Data Science & Visualization",
  "Software Engineering",
  "Competitive Programming",
];

export const EVENTS = [
  {
    id: "gfg-carnival",
    title: "GFG Annual Club Carnival & Orientation 2026",
    category: "Orientation",
    date: "Date to be announced",
    venue: "ITER Main Campus, Bhubaneswar",
    status: "upcoming",
    speakers: [
      { name: "Vivek Ranjan Sahoo", role: "President", photo: "https://i.pravatar.cc/150?img=12" },
      { name: "Anubhab Samantaray", role: "Club Coordinator", photo: "https://i.pravatar.cc/150?img=11" }
    ],
    description:
      "Welcome, freshmen and engineering minds! Join our grand orientation carnival to discover everything about GFG ITER—our vision, active technical domains, upcoming hackathons, and how to become part of the premier builder community on campus.",
    image:
      "/about-chapter-cohort.jpg",
    gallery: [
      "/about-chapter-cohort.jpg",
      "/events/annual_p8_X28.png",
      "/events/annual_p12_X42.jpg",
      "/events/annual_p29_X108.png",
      "/events/annual_p8_X29.png"
    ],
  },
  {
    id: "gfg-skill-exchange",
    title: "GFG ITER Skills Exchange Workshop: Multi-Track Series",
    category: "Workshop",
    date: "10th July – 15th August 2026",
    venue: "Discord (Online) · #Skill-exchange-program",
    status: "ongoing",
    speakers: [
      { name: "GFG Senior Core Team", role: "Domain Mentors", photo: "" },
      { name: "Vivek Ranjan Sahoo", role: "President", photo: "" },
      { name: "Anubhab Samantaray", role: "Coordinator", photo: "" }
    ],
    description:
      "Theme: Learn It. Build It. Share It. A comprehensive peer-led technical learning initiative introducing undergraduate students to 8 high-demand CS domains: Blockchain & Web3, Quantum Computing, Computer Networking, Cybersecurity, Linux & Cloud, DevOps & CI/CD, AI Automation with n8n, and Data Science.",
    image: "/events/page_61_img_1__X17.jpg",
    gallery: [
      "/events/page_61_img_1__X17.jpg",
      "/events/page_70_img_1__X17.jpg",
      "/events/page_34_img_3__X22.jpg",
      "/events/page_39_img_2__X18.jpg",
      "/events/page_44_img_3__X19.jpg"
    ],
  },
  {
    id: "skills-exchange-day8",
    title: "Skills Exchange Workshop – Day 8: Data Science & Visualization",
    category: "Workshop",
    date: "03 Aug 2026",
    time: "8:00 PM – 9:00 PM IST",
    venue: "Discord (Online) · #Skill-exchange-program",
    status: "past",
    speakers: [
      { name: "Mukesh Kumar Padhi", role: "Founder, Ex-Operation Lead, GFG ITER", photo: "" }
    ],
    description:
      "Data Science & Visualization: Discovering Insights Through Data. Covered the complete 7-stage Data Science Lifecycle, live code demonstrations of NumPy, Pandas, Matplotlib, EDA toolkits, 4 machine learning paradigms, 10 beginner projects, and an 8-role career roadmap.",
    image: "/events/page_34_img_3__X22.jpg",
    gallery: [
      "/events/page_34_img_3__X22.jpg",
      "/events/page_34_img_2__X21.jpg",
      "/events/page_34_img_4__X23.jpg",
      "/events/page_34_img_1__X19.jpg",
      "/events/annual_p27_X101.jpg"
    ],
  },
  {
    id: "skills-exchange-day7",
    title: "Skills Exchange Workshop – Day 7: AI Automation with n8n",
    category: "Workshop",
    date: "27 Jul 2026",
    time: "8:00 PM – 9:20 PM IST",
    venue: "Discord (Online) · #Skill-exchange-program",
    status: "past",
    speakers: [
      { name: "Mrunmayee Mohanty", role: "Core Team, GFG ITER", photo: "" }
    ],
    description:
      "Introduction to Workflow Automation: Contrasting Generative AI, Workflows, and Agentic AI, applying the RECIPE prompt framework, and building a live 4-node automated workflow connecting Google Sheets, Edit Fields, Gmail, and Sheet updates inside n8n.",
    image: "/events/page_39_img_2__X18.jpg",
    gallery: [
      "/events/page_39_img_2__X18.jpg",
      "/events/page_39_img_4__X20.jpg",
      "/events/page_39_img_1__X16.jpg",
      "/events/page_39_img_3__X19.jpg",
      "/events/annual_p26_X97.jpg"
    ],
  },
  {
    id: "skills-exchange-day6",
    title: "Skills Exchange Workshop – Day 6: DevOps & CI/CD Pipelines",
    category: "Workshop",
    date: "22 Jul 2026",
    time: "8:00 PM – 9:00 PM IST",
    venue: "Discord (Online) · #Skill-exchange-program",
    status: "past",
    speakers: [
      { name: "Raj Sahasransu Biswal", role: "Ex-Tech Lead, GFG ITER", photo: "" }
    ],
    description:
      "DevOps & CI/CD Pipelines: Automating Trust, Securing the Future. From 'It Works on My Machine' to 'It Works Everywhere' — explored DevOps culture, Git as a time machine, automated CI/CD pipelines, Docker containerization, Kubernetes orchestration, and AWS fundamentals.",
    image: "/events/page_44_img_3__X19.jpg",
    gallery: [
      "/events/page_44_img_3__X19.jpg",
      "/events/page_44_img_4__X20.jpg",
      "/events/page_44_img_2__X18.jpg",
      "/events/page_44_img_1__X16.jpg",
      "/events/annual_p25_X94.jpg"
    ],
  },
  {
    id: "skills-exchange-day5",
    title: "Skills Exchange Workshop – Day 5: Linux, Cloud & OS Internals",
    category: "Workshop",
    date: "20 Jul 2026",
    time: "8:00 PM – 9:00 PM IST",
    venue: "Discord (Online) · #Skill-exchange-program",
    status: "past",
    speakers: [
      { name: "Vivek Ranjan Sahoo", role: "President, GFG ITER", photo: "" }
    ],
    description:
      "Understanding the Operating System That Runs the Internet: A deep dive into the Linux kernel, shell, and filesystem architecture, accompanied by a live SSH demonstration on an AWS EC2 instance, core terminal commands, and a 60-second file challenge.",
    image: "/events/page_50_img_2__X20.jpg",
    gallery: [
      "/events/page_50_img_2__X20.jpg",
      "/events/page_50_img_3__X21.jpg",
      "/events/page_50_img_1__X18.jpg",
      "/events/annual_p24_X89.jpg",
      "/events/annual_p16_X60.png"
    ],
  },
  {
    id: "skills-exchange-day4",
    title: "Skills Exchange Workshop – Day 4: Cybersecurity & Ethical Hacking",
    category: "Workshop",
    date: "17 Jul 2026",
    time: "8:00 PM – 9:00 PM IST",
    venue: "Discord (Online) · #Skill-exchange-program",
    status: "past",
    speakers: [
      { name: "Subhakanta Das", role: "Operations Lead, GFG ITER", photo: "" }
    ],
    description:
      "Building a Secure, Resilient, and Threat-Aware Digital Future: Understanding the CIA Triad & AAA Framework, social engineering tactics, malware field guides, symmetric & asymmetric cryptography, Man-in-the-Middle defenses, and a 10-item daily defense checklist.",
    image: "/events/page_56_img_2__X18.jpg",
    gallery: [
      "/events/page_56_img_2__X18.jpg",
      "/events/page_56_img_1__X16.jpg",
      "/events/annual_p23_X86.jpg",
      "/events/annual_p16_X59.png",
      "/events/annual_p16_X61.png"
    ],
  },
  {
    id: "skills-exchange-day3",
    title: "Skills Exchange Workshop – Day 3: Computer Networking & Hardware",
    category: "Workshop",
    date: "15 Jul 2026",
    time: "8:00 PM – 9:00 PM IST",
    venue: "Discord (Online) · #Skill-exchange-program",
    status: "past",
    speakers: [
      { name: "Ayush Ranjan Pradhan", role: "Community Mentor, GFG ITER", photo: "" }
    ],
    description:
      "Connecting Devices to Communicate and Share Information Efficiently: Traced network evolution, demystified the OSI 7-layer and TCP/IP models, live DNS resolver sandbox demo, and a hands-on hardware demonstration with router internals and patch-panel switch cabling.",
    image: "/events/page_61_img_1__X17.jpg",
    gallery: [
      "/events/page_61_img_1__X17.jpg",
      "/events/page_65_img_1__X34.jpg",
      "/events/page_64_img_2__X31.jpg",
      "/events/page_64_img_1__X30.jpg",
      "/events/page_63_img_2__X27.jpg"
    ],
  },
  {
    id: "skills-exchange-day2",
    title: "Skills Exchange Workshop – Day 2: Quantum Computing",
    category: "Workshop",
    date: "13 Jul 2026",
    time: "8:00 PM – 9:00 PM IST",
    venue: "Discord (Online) · #Skill-exchange-program",
    status: "past",
    speakers: [
      { name: "Debajyoti Bhakta", role: "Tech Team, GFG ITER", photo: "" }
    ],
    description:
      "Where Physics Meets Computing to Transform the Future: An exploration of qubits, superposition, quantum entanglement, Deutsch–Jozsa and Shor's algorithms, dilution refrigerators, Google's Willow chip, India's National Quantum Mission, and a live Menti quiz.",
    image: "/events/page_27_img_2__X25.jpg",
    gallery: [
      "/events/page_27_img_2__X25.jpg",
      "/events/page_27_img_1__X24.jpg",
      "/events/page_26_img_3__X21.jpg",
      "/events/page_26_img_1__X18.jpg",
      "/events/annual_p21_X78.jpg"
    ],
  },
  {
    id: "skills-exchange-day1",
    title: "Skills Exchange Workshop – Day 1: Blockchain & Web3 Fundamentals",
    category: "Workshop",
    date: "10 Jul 2026",
    time: "8:00 PM – 9:00 PM IST",
    venue: "Discord (Online) · #Skill-exchange-program",
    status: "past",
    speakers: [
      { name: "Anubhab Samantaray", role: "Club Coordinator, Batch 2027", photo: "" }
    ],
    description:
      "Building a Secure, Transparent, and Decentralized Future: The evolution from Web1 to Web3, distributed ledgers, transaction lifecycles, cryptographic hashing, Ethereum smart contracts with Solidity, DApps, and emerging blockchain careers.",
    image: "/events/page_70_img_1__X17.jpg",
    gallery: [
      "/events/page_70_img_1__X17.jpg",
      "/events/page_70_img_2__X19.jpg",
      "/events/annual_p20_X74.jpg",
      "/events/annual_p20_X73.jpg",
      "/events/page_56_img_2__X18.jpg"
    ],
  },
  {
    id: "rachitva-event",
    title: "Rachitva – Design & Pitch Competition",
    category: "Contest",
    date: "05 Apr 2026",
    time: "8:00 AM – 11:00 AM",
    venue: "E Block, Room 514, ITER",
    status: "past",
    speakers: [
      { name: "GFG Lead Board & Design Mentors", role: "Judges & Organizers", photo: "" }
    ],
    description:
      "Chakravyuh Genesis 2026 Flagship Creative Event: An on-the-spot design and pitch competition where ~120 students tackled a surprise theme, conceptualized impactful posters, and delivered persuasive elevator pitches before an expert judging panel.",
    image:
      "/events/annual_p18_X67.png",
    gallery: [
      "/events/annual_p18_X67.png",
      "/events/annual_p18_X66.png",
      "/events/annual_p18_X68.png",
      "/events/annual_p16_X60.png",
      "/events/annual_p16_X59.png"
    ],
  },
  {
    id: "zerone-event",
    title: "Zer0ne – Capture The Flag (CTF) Competition",
    category: "Contest",
    date: "03 Apr 2026",
    time: "9:00 AM – 11:00 AM",
    venue: "C Block, Room 004 & 005, ITER",
    status: "past",
    speakers: [
      { name: "GFG Technical Team", role: "Platform Architects & Judges", photo: "" }
    ],
    description:
      "Chakravyuh Genesis 2026 Flagship Technical Event: A beginner-friendly cybersecurity CTF competition conducted over three progressively challenging rounds (cryptography, web security, networking). Powered by an in-house custom CTF platform built by GFG ITER with live leaderboard tracking.",
    image:
      "/events/annual_p16_X61.png",
    gallery: [
      "/events/annual_p16_X61.png",
      "/events/annual_p16_X60.png",
      "/events/annual_p16_X59.png",
      "/events/annual_p18_X68.png",
      "/events/annual_p18_X66.png"
    ],
  },
  {
    id: "raw-and-ready",
    title: "Raw & Ready – Personality Development Session",
    category: "Workshop",
    date: "04 Feb 2026",
    time: "3:00 PM – 5:00 PM",
    venue: "E-Block, Room 114, ITER",
    status: "past",
    speakers: [
      { name: "GFG Executive Board", role: "Facilitators", photo: "" }
    ],
    description:
      "A comprehensive personality development workshop for GFG ITER core members focusing on self-awareness, SWOT Analysis, Eisenhower Matrix time management, the 'Lost in the Jungle' survival teamwork challenge, a mini-ideathon, and financial literacy.",
    image: "/events/page_12_img_3__X14.jpg",
    gallery: [
      "/events/annual_p14_X54.png",
      "/events/annual_p14_X53.png",
      "/events/annual_p14_X52.png",
      "/events/page_12_img_2__X13.jpg",
      "/events/page_12_img_1__X11.jpg"
    ],
  },
  {
    id: "founders-unplugged",
    title: "Founders Unplugged – From Chaos to Creation",
    category: "Seminar",
    date: "23 Dec 2025",
    time: "4:00 PM – 6:00 PM",
    venue: "Seminar Hall 2, Bansuri Guru Auditorium, ITER",
    status: "past",
    speakers: [
      { name: "Mr. Zahid Akhtar", role: "Founder of OneLife, Life & Career Coach", photo: "" }
    ],
    description:
      "An authentic, conversation-driven session with Zahid Akhtar on navigating the realities of startups, leadership, and resilience. Features included an engaging Rapid Fire Round debating 'Gut Feeling vs Market Research' and 'Perfect Plan vs Fast Execution' followed by interactive Q&A.",
    image: "/events/page_9_img_4__X17.jpg",
    gallery: [
      "/events/annual_p12_X45.png",
      "/events/annual_p12_X42.jpg",
      "/events/annual_p12_X43.png",
      "/events/annual_p12_X41.jpg",
      "/events/annual_p12_X44.png"
    ],
  },
  {
    id: "chai-links-ep01",
    title: "ChainLinks Episode 01 – TinyML & Agentic AI",
    category: "Workshop",
    date: "03 Dec 2025",
    time: "4:30 PM – 6:00 PM",
    venue: "Seminar Hall, AIC SOA Foundation",
    status: "past",
    speakers: [
      { name: "Faculty Mentors & Researchers", role: "Discussion Leads", photo: "" }
    ],
    description:
      "Cup That Connects, Conversations That Matter: Centered around Chai Pe Charcha, Episode 01 brought 50 selected students into intimate discussion circles with faculty researchers exploring edge machine learning (TinyML) and autonomous AI agents (Agentic AI) over tea.",
    image: "/events/page_6_img_1__X15.jpg",
    gallery: [
      "/events/annual_p10_X34.png",
      "/events/annual_p10_X35.png",
      "/events/annual_p10_X36.png",
      "/events/page_6_img_2__X17.jpg",
      "/events/page_6_img_3__X18.jpg"
    ],
  },
  {
    id: "code-unbound-launch",
    title: "Code Unbound – The GFG Launch",
    category: "Seminar",
    date: "07 Nov 2025",
    venue: "Bansuri Guru Auditorium, ITER",
    status: "past",
    speakers: [
      { name: "GFG Lead Board & Domain Leads", role: "Founding Team", photo: "" }
    ],
    description:
      "The official inauguration of the GeeksforGeeks (GFG) Student Chapter at ITER, SOA University in Bansuri Guru Auditorium. Featuring chapter vision roadmaps, domain lead introductions, and an interactive Menti Quiz with prizes for top performers.",
    image:
      "/events/annual_p8_X28.png",
    gallery: [
      "/events/annual_p8_X28.png",
      "/events/annual_p8_X29.png",
      "/about-chapter-cohort.jpg",
      "/events/annual_p12_X42.jpg",
      "/events/annual_p10_X34.png"
    ],
  },
  {
    id: "chai-links-ep00",
    title: "ChainLinks Episode 0 – Cup That Connects, Conversations That Matter",
    category: "Workshop",
    date: "06 Nov 2025",
    time: "4:00 PM – 6:00 PM",
    venue: "AIC SOA Foundation",
    status: "past",
    speakers: [
      { name: "Faculty Mentors & GFG Leads", role: "Discussion Leads", photo: "" }
    ],
    description:
      "The inaugural edition of ChainLinks designed around the concept of Chai Pe Charcha. Replaced traditional lectures with informal domain discussion circles across AI/ML, IoT, Cloud Computing, and Networking, fostering open faculty-student mentorship over tea.",
    image: "/events/page_3_img_1__X15.jpg",
    gallery: [
      "/events/annual_p8_X29.png",
      "/events/page_3_img_1__X15.jpg",
      "/events/page_3_img_2__X17.jpg",
      "/events/annual_p10_X36.png",
      "/events/annual_p10_X35.png"
    ],
  },
];

export const EVENT_CATEGORIES = [
  "All",
  "Workshop",
  "Contest",
  "Seminar",
  "Orientation",
  "Bootcamp",
  "Hackathon",
];

const createTeamMembers = (groupName: string, prefix: string, count: number = 25, startIdx: number = 1) => {
  return Array.from({ length: count }).map((_, i) => ({
    name: `${prefix} Member ${i + startIdx}`,
    role: `${groupName.replace(" Team", "")} Core Member`,
    group: groupName,
    bio: `Active contributor to ${groupName} initiatives and events.`,
    photo: `https://ui-avatars.com/api/?name=${encodeURIComponent(prefix)}+${i + startIdx}&background=00ff7f&color=020b06&size=512`,
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }));
};

export const TEAM = [
  // Club Coordinators
  {
    name: "Anubhab Samantaray",
    role: "Club Coordinator",
    group: "Coordinator",
    bio: "Club Coordinator (Batch 2027). Leading chapter operations, Web3 tracks, and technical workshop initiatives.",
    photo: "https://i.pravatar.cc/400?img=52",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Akansha Ajay",
    role: "Club Coordinator",
    group: "Coordinator",
    bio: "Club Coordinator (Batch 2027). Coordinating student engagement, peer-learning programs, and chapter logistics.",
    photo: "/team/akansha-ajay.jpg",
    email: "akankshaajay05@gmail.com",
    linkedin: "https://www.linkedin.com/in/akansha-ajay-685622302",
    github: "https://github.com/AkanshaAjay5"
  },
  // Mentors
  {
    name: "Ayush R. Pradhan",
    role: "Community Mentor",
    group: "Mentors",
    bio: "Community Mentor. Guiding students in computer networking, systems hardware, and transitioning to industry.",
    photo: "https://i.pravatar.cc/400?img=33",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  // Executive Board
  {
    name: "Vivek Ranjan Sahoo",
    role: "President",
    group: "Executive Board",
    bio: "President, GFG ITER. Full-stack & systems practitioner leading chapter vision, cloud infrastructure, and technical sessions.",
    photo: "https://i.pravatar.cc/400?img=12",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Snehansu Sekhar Dash",
    role: "Vice President",
    group: "Executive Board",
    bio: "Vice President, GFG ITER (Batch 2029). Systems, cloud, and infrastructure enthusiast driving student initiatives and competitions.",
    photo: "/team/snehansu-sekhar-dash.jpg",
    email: "snehansu.sekhar.dash818@gmail.com",
    linkedin: "https://www.linkedin.com/in/snehansu-sekhar-dash-8892a9347",
    github: "https://github.com/snehansusekhardash818-cloud"
  },

  // Technical Team: Lead + 25 members
  {
    name: "Abhijit Dash",
    role: "Tech Lead",
    group: "Technical Team",
    bio: "Tech Lead (Batch 2028). Leading development of in-house competition platforms (Zer0ne CTF), open-source projects, and technical workshops.",
    photo: "/team/abhijit-dash.jpg",
    email: "atd5370@gmail.com",
    linkedin: "https://www.linkedin.com/in/dashabhijit",
    github: "https://github.com/Abhijit-byte"
  },
  {
    name: "Siddhant Jena",
    role: "Technical Core Member",
    group: "Technical Team",
    bio: "Full-stack developer and technical builder contributing to web applications, systems development, and engineering initiatives for GFG ITER.",
    photo: "/team/siddhant-jena.jpg",
    email: "Worksiddhant18@gmail.com",
    linkedin: "https://www.linkedin.com/in/siddhant-jena-457350389",
    github: "https://github.com/FOX-KNIGHT"
  },
  {
    name: "Debdatta Panda",
    role: "Technical Core Member",
    group: "Technical Team",
    bio: "Full-stack developer and core technical builder architecting digital platforms, web systems, and engineering initiatives for GFG ITER.",
    photo: "/team/debdatta-panda.jpg",
    email: "pandadebdatta9@gmail.com",
    linkedin: "https://www.linkedin.com/in/debdatta-panda-dp11",
    github: "https://github.com/MyselfDebdatta",
    portfolio: "https://debdatta-panda.vercel.app/"
  },
  {
    name: "Arman Khan",
    role: "Technical Core Member",
    group: "Technical Team",
    bio: "Full-stack developer and technical builder contributing to core chapter development, web applications, and collaborative coding initiatives.",
    photo: "/team/arman-khan.jpg",
    email: "arman001992khan@gmail.com",
    linkedin: "https://www.linkedin.com/in/arman-khan-3a6059180",
    github: "https://github.com/arman001992khan-pixel"
  },
  {
    name: "Sushobhan Ghosh",
    role: "Technical Core Member",
    group: "Technical Team",
    bio: "Technical Core Member (Batch 2027). Full-stack builder focused on algorithms, systems design, and student engineering initiatives.",
    photo: "/team/sushobhan-ghosh.png",
    email: "sushobhan.3760@gmail.com",
    linkedin: "https://www.linkedin.com/in/sushobhan16/",
    github: "https://github.com/sushobhan16"
  },
  {
    name: "Apurva Sahay",
    role: "Technical Core Member",
    group: "Technical Team",
    bio: "Technical Core Member (Batch 2027). Passionate software developer contributing to coding bootcamps, workshops, and chapter platforms.",
    photo: "/team/apurva-sahay.jpg",
    email: "apurvasahay19@gmail.com",
    linkedin: "https://www.linkedin.com/in/apurva-sahay-28a793324",
    github: "https://github.com/ApurvaSahayy"
  },
  {
    name: "Debajyoti Bhakta",
    role: "Technical Core Member",
    group: "Technical Team",
    bio: "Technical Core Member (Batch 2027). Gen AI and Quantum Computing enthusiast, hackathon winner, and core technical developer.",
    photo: "/team/debajyoti-bhakta.jpeg",
    email: "debajyotitech04@gmail.com",
    linkedin: "https://www.linkedin.com/in/debajyoti-bhakta/",
    github: "https://github.com/ItsYash40"
  },
  ...createTeamMembers("Technical Team", "Tech", 19, 7),
  
  // PR and Media Team: Lead + 25 members
  {
    name: "Aastha Singh",
    role: "PR & Media Lead",
    group: "PR and Media Team",
    bio: "PR & Media Lead. Managing digital communication, visual storytelling, and brand presence across campus.",
    photo: "https://i.pravatar.cc/400?img=25",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Srusti Satarupa Biswal",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR and Media Core Member (Batch 2028). Contributing to digital outreach, content creation, and vibrant campus engagement.",
    photo: "/team/srusti-satarupa-biswal.jpg",
    email: "srustibiswal6@gmail.com",
    linkedin: "https://www.linkedin.com/in/srusti-satarupa-biswal-a9132333b",
    github: "https://github.com/srustibiswal6-sketch"
  },
  {
    name: "Ayush Kumar",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR and Media Core Member (Batch 2029). Video creator and digital storyteller turning creative ideas into impactful chapter promotions.",
    photo: "/team/ayush-kumar.jpg",
    email: "ayushkumar12728@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-b1298924b",
    github: "https://github.com/ayushkumar12728-oss"
  },
  {
    name: "Ritisha Sahoo",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR & Media core contributor driving digital outreach, visual storytelling, and community engagement for GFG ITER.",
    photo: "/team/ritisha-sahoo.png",
    email: "ritishasahoo727@gmail.com",
    linkedin: "https://www.linkedin.com/in/ritisha-sahoo-67a046364",
    github: "https://github.com/ritisha34"
  },
  {
    name: "Chandradipta Parida",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR and Media Core Member (Batch 2027). Photographer and videographer documenting chapter hackathons, speaker sessions, and tech community life.",
    photo: "/team/chandradipta-parida.png",
    email: "laughy12cdp@gmail.com",
    linkedin: "https://www.linkedin.com/in/chandradipta-parida-877a11272",
    github: "https://github.com/chandradipta"
  },
  {
    name: "Devpriyo Ghosh",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR and Media Core Member (Batch 2028). Public speaker and event anchor managing promotions and communication for flagship chapter events.",
    photo: "/team/devpriyo-ghosh.png",
    email: "devpriyostudent@gmail.com",
    linkedin: "https://www.linkedin.com/in/devpriyo-ghosh-70218234a",
    github: "https://github.com/dev1404-sudo"
  },
  {
    name: "Priyadarshani Patra",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR and Media Core Member (Batch 2027). Managing social outreach, member support, and interactive digital communications.",
    photo: "/team/priyadarshani-patra.jpg",
    email: "priyapatrar15@gmail.com",
    linkedin: "https://www.linkedin.com/in/priyadarshanipatra",
    github: "https://github.com/Priyadarshanipatra-p"
  },
  {
    name: "Subhajit Dandapat",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR and Media Core Member (Batch 2028). Content strategist and tech enthusiast bridging developer discussions with campus-wide reach.",
    photo: "/team/subhajit-dandapat.png",
    email: "subhajitdandapat0101@gmail.com",
    linkedin: "https://www.linkedin.com/in/subhajit-dandapat-682583310",
    github: "https://github.com/subhajitdandapat"
  },
  {
    name: "Rashi Swarnim",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR and Media Core Member (Batch 2029). Creative media strategist handling social media narratives, reels, and chapter visibility.",
    photo: "/team/rashi-swarnim.jpeg",
    email: "rashiswarnim@gmail.com",
    linkedin: "https://www.linkedin.com/in/rashi-swarnim-486a60251",
    github: "https://github.com/swarnimnim"
  },
  {
    name: "Vidisha Jena",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR and Media Core Member (Batch 2027). Core communicator fostering community warmth, welcoming new members, and anchoring events.",
    photo: "/team/vidisha-jena.jpg",
    email: "vidishajena24@gmail.com",
    linkedin: "https://www.linkedin.com/in/vidishajena",
    github: "https://github.com/VidishaJena"
  },
  {
    name: "Depesh Singh",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR and Media Core Member (Batch 2028). Web builder and digital creator managing online engagement, video assets, and community reach.",
    photo: "/team/depesh-singh.jpg",
    email: "singhdepesh912@gmail.com",
    linkedin: "https://www.linkedin.com/in/depesh-singh-b6261437a",
    github: "https://github.com/Depesh-singh",
    portfolio: "https://depeshsingh.space"
  },
  {
    name: "Tushar Das",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR and Media Core Member (Batch 2027). Video editor and media creator driving student engagement, creative reels, and event buzz.",
    photo: "/team/tushar-das.jpg",
    email: "tushardas0522@gmail.com",
    linkedin: "https://www.linkedin.com/in/tushar-das-1663a3302/",
    github: "https://github.com/tushardas22-dev"
  },
  {
    name: "Pratikshya Tripathy",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR and Media Core Member (Batch 2027). Video editor and multimedia specialist designing engaging video content for club events.",
    photo: "/team/pratikshya-tripathy.jpeg",
    email: "pratikshya.tripathy05@gmail.com",
    linkedin: "https://www.linkedin.com/in/pratikshya-tripathy05/",
    github: "https://github.com/Pratikshyatri"
  },
  {
    name: "Anisha Kumari",
    role: "PR and Media Core Member",
    group: "PR and Media Team",
    bio: "PR and Media Core Member (Batch 2028). Public relations enthusiast connecting student communities, promoting tech initiatives, and growing our audience.",
    photo: "/team/anisha-kumari.jpg",
    email: "anishak121103@gmail.com",
    linkedin: "https://www.linkedin.com/in/anisha-kumari-860a00301/",
    github: "https://github.com/AnishaK07"
  },
  ...createTeamMembers("PR and Media Team", "Media", 12, 14),
  
  // Design Team: Lead + 25 members
  {
    name: "Sanyukt Kumar Rai",
    role: "Design Lead",
    group: "Design Team",
    bio: "Design Lead (Batch 2028). Architect of chapter visual identity, UI/UX design systems, and creative hackathon posters.",
    photo: "/team/sanyukt-kumar-rai.png",
    email: "sanyuktkumarrai2@gmail.com",
    linkedin: "https://www.linkedin.com/in/sanyuktkumarrai",
    github: "https://github.com/sanyukt63"
  },
  {
    name: "Rishabh Chaturvedi",
    role: "Design Core Member",
    group: "Design Team",
    bio: "Design Core Member (Batch 2029). Creative designer crafting visually compelling UI components, assets, and branding for chapter events.",
    photo: "/team/rishabh-chaturvedi.jpeg",
    email: "rishabhchaturvedi324@gmail.com",
    linkedin: "https://www.linkedin.com/in/rishabh-chaturvedi-44b00a391/",
    github: "https://github.com/rishabhchaturvedi324"
  },
  {
    name: "Swayam Ritiraj Dash",
    role: "Design Core Member",
    group: "Design Team",
    bio: "Design Core Member (Batch 2028). UI/UX designer and web creator focused on clean interfaces, modern interactions, and chapter media.",
    photo: "/team/swayam-ritiraj-dash.jpeg",
    email: "swayamritiraj@gmail.com",
    linkedin: "https://www.linkedin.com/in/swayam-ritiraj-dash/",
    github: "https://github.com/SwayamRitirajDash",
    portfolio: "https://swayamritirajdash.github.io/PORTFOLIO-Vr.2/"
  },
  {
    name: "Kushagra Abhishek",
    role: "Design Core Member",
    group: "Design Team",
    bio: "Design Core Member (Batch 2029). Visual designer turning creative concepts into engaging graphics and UI layouts for technical events.",
    photo: "/team/kushagra-abhishek.jpeg",
    email: "kushagra.abhishek4349@gmail.com",
    linkedin: "https://www.linkedin.com/in/kushagra-abhishek-2ba52239b",
    github: "https://github.com/kushagraabhishek"
  },
  {
    name: "Tanmaya Sahoo",
    role: "Design Core Member",
    group: "Design Team",
    bio: "Design Core Member (Batch 2028). Graphic & UI designer collaborating on chapter branding, visual assets, and event promotions.",
    photo: "/team/tanmaya-sahoo.png",
    email: "tanmayasahoo021205@gmail.com",
    linkedin: "https://www.linkedin.com/in/tanmaya-sahoo-b664631ba/",
    github: "https://github.com/tanmaya-sahoo"
  },
  {
    name: "Swastik Mohapatra",
    role: "Design Core Member",
    group: "Design Team",
    bio: "Design Core Member (Batch 2028). Creative visual designer dedicated to making technical hackathons and workshops engaging and memorable.",
    photo: "/team/swastik-mohapatra.jpg",
    email: "swastikmohapatra2005@gmail.com",
    linkedin: "https://www.linkedin.com/in/swastik-mohapatra-975165377",
    github: "https://github.com/swastik018"
  },
  ...createTeamMembers("Design Team", "Design", 20, 6),

  // Operation Team: Lead + 25 members
  {
    name: "Subhakanta Das",
    role: "Operations Lead",
    group: "Operation Team",
    bio: "Operations Lead. Managing offline venue logistics, Discord server operations, cybersecurity workshops, and event flow.",
    photo: "https://i.pravatar.cc/400?img=8",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Piyush Tiwari",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2028). Logistics coordinator ensuring seamless execution of campus meetups and workshops.",
    photo: "/team/piyush-tiwari.jpg",
    email: "piyush89101@gmail.com",
    linkedin: "https://www.linkedin.com/in/piyush-tiwari-3098a4338",
    github: "https://github.com/infinitepush"
  },
  {
    name: "Ronit Rajib Pattnaik",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2027). Dedicated team coordinator managing event logistics, crowd control, and student experiences.",
    photo: "/team/ronit-rajib-pattnaik.jpg",
    email: "ronit.r.pattnaik3000@gmail.com",
    linkedin: "https://www.linkedin.com/in/ronit-rajib-pattnaik-222674236/",
    github: "https://github.com/Ronit-R-P"
  },
  {
    name: "Ayush Animesh Barik",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2028). Operations and community strategist bringing structure and energy to campus events.",
    photo: "/team/ayush-animesh-barik.png",
    email: "ayushanimeshbarik@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayushanimeshbarik/",
    github: "https://github.com/Ayushanibarik",
    portfolio: "https://ayushanimeshbarik.co.in"
  },
  {
    name: "Debasmit Roy",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2029). Operations lead contributor handling venue logistics, attendee coordination, and on-ground execution.",
    photo: "/team/debasmit-roy.jpg",
    email: "debasmit.roy07@gmail.com",
    linkedin: "https://www.linkedin.com/in/debasmit-roy-842366373",
    github: "https://github.com/Sacred2609"
  },
  {
    name: "Ansh Gupta",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2027). Event facilitator coordinating 'Chai Pe Charcha' sessions and faculty-student community meetups.",
    photo: "/team/ansh-gupta.jpg",
    email: "anshgupta3221@gmail.com",
    linkedin: "https://www.linkedin.com/in/ansh-gupta-857099296",
    github: "https://github.com/anshguptasince2004"
  },
  {
    name: "Sahil Kumar Sahoo",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2029). Active on-ground organizer supporting hackathon execution and chapter logistics.",
    photo: "/team/sahil-kumar-sahoo.jpg",
    email: "sahilsahoo396@gmail.com",
    linkedin: "https://www.linkedin.com/in/sahil-k-sahoo/",
    github: "https://github.com/Sahil-k-Sahoo"
  },
  {
    name: "Archi Kumari",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2028). Operations manager passionate about tech event management, team coordination, and student engagement.",
    photo: "/team/archi-kumari.jpeg",
    email: "archikumarisah@gmail.com",
    linkedin: "https://www.linkedin.com/in/archi-kumari-bbb809318/",
    github: "https://github.com/archikumari02"
  },
  {
    name: "Abinash Das",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2028). Driving operational excellence, event scheduling, and team coordination across all club initiatives.",
    photo: "/team/abinash-das.jpg",
    email: "dasabinash.omm@gmail.com",
    linkedin: "https://www.linkedin.com/in/abinash-das-ba1908324",
    github: "https://github.com/Abinash-08",
    portfolio: "https://abinash-08.github.io/Portfolio/"
  },
  {
    name: "Aahana Das",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2028). Team coordinator supporting member onboarding, venue management, and inclusive community sessions.",
    photo: "/team/aahana-das.png",
    email: "aahanaiter@gmail.com",
    linkedin: "https://www.linkedin.com/in/aahana-das-1a9275422"
  },
  {
    name: "P Divyansh",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2029). On-ground operations specialist assisting in workshop setup, attendee check-ins, and logistics.",
    photo: "/team/p-divyansh.jpg",
    email: "pdivyansh087@gmail.com",
    linkedin: "https://www.linkedin.com/in/p-divyansh-732760374",
    github: "https://github.com/pdivyansh37-debug"
  },
  {
    name: "Mrunmayee Mohanty",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2028). Operations organizer managing event flow, attendee experiences, and community building.",
    photo: "/team/mrunmayee-mohanty.jpeg",
    email: "mrunmayee717@gmail.com",
    linkedin: "https://www.linkedin.com/in/mrunmayee-mohanty-318279381",
    github: "https://github.com/mrunmayeemohanty2006"
  },
  {
    name: "Naincy Priya",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2028). Logistics and coordination specialist supporting hands-on technical sessions and club meetups.",
    photo: "/team/naincy-priya.jpg",
    email: "nancypriya0203@gmail.com",
    linkedin: "https://www.linkedin.com/in/naincy-priya-257113300",
    github: "https://github.com/Naincy0203"
  },
  {
    name: "Yashvi Lodhi",
    role: "Operations Core Member",
    group: "Operation Team",
    bio: "Operations Core Member (Batch 2029). Community operations organizer driving team spirit, event logistics, and student participation.",
    photo: "/team/yashvi-lodhi.jpg",
    email: "lodhiyashvi@gmail.com",
    linkedin: "https://www.linkedin.com/in/yashvi-lodhi-085669372/",
    github: "https://github.com/YashviLodhi"
  },
  ...createTeamMembers("Operation Team", "Operations", 12, 14),
];

export const TEAM_GROUPS = [
  "Coordinator",
  "Mentors",
  "Executive Board",
  "Technical Team",
  "PR and Media Team",
  "Design Team",
  "Operation Team",
];

export const ALUMNI = [
  {
    name: "Mukesh Kumar Padhi",
    role: "Founder & Ex-Operation Lead",
    year: "'26",
    photo: "https://i.pravatar.cc/300?img=44",
    quote: "The community pushed me to think bigger, mentor juniors, and dive deep into data science.",
  },
  {
    name: "Raj Sahasransu Biswal",
    role: "Ex-Tech Lead & DevOps Engineer",
    year: "'26",
    photo: "https://i.pravatar.cc/300?img=11",
    quote: "From 'it works on my machine' to 'it works everywhere' — GFG ITER made engineering real.",
  },
  {
    name: "Rathikant Behera",
    role: "Systems & Software Researcher",
    year: "'25",
    photo: "https://i.pravatar.cc/300?img=68",
    quote: "From my first workshop to top research opportunities — this club was pivotal.",
  },
];

export const RECRUITERS = [
  { name: "Google", domain: "google.com", slug: "google" },
  { name: "Microsoft", domain: "microsoft.com", slug: "microsoft" },
  { name: "Amazon", domain: "amazon.com", slug: "amazon" },
  { name: "Apple", domain: "apple.com", slug: "apple" },
  { name: "Meta", domain: "meta.com", slug: "meta" },
  { name: "Netflix", domain: "netflix.com", slug: "netflix" },
  { name: "JP Morgan Chase", domain: "jpmorganchase.com", slug: "jpmorganchase" },
  { name: "Goldman Sachs", domain: "goldmansachs.com", slug: "goldmansachs" },
  { name: "Morgan Stanley", domain: "morganstanley.com", slug: "morganstanley" },
  { name: "Dell", domain: "dell.com", slug: "dell" },
  { name: "Adobe", domain: "adobe.com", slug: "adobe" },
  { name: "Oracle", domain: "oracle.com", slug: "oracle" },
  { name: "Atlassian", domain: "atlassian.com", slug: "atlassian" },
  { name: "IBM", domain: "ibm.com", slug: "ibm", logoOverride: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Cisco", domain: "cisco.com", slug: "cisco", logoOverride: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
  { name: "Intel", domain: "intel.com", slug: "intel" },
  { name: "AMD", domain: "amd.com", slug: "amd", logoOverride: "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg" },
  { name: "NVIDIA", domain: "nvidia.com", slug: "nvidia", logoOverride: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
  { name: "Samsung", domain: "samsung.com", slug: "samsung" },
  { name: "SAP", domain: "sap.com", slug: "sap", logoOverride: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "Deloitte", domain: "deloitte.com", slug: "deloitte" },
  { name: "Accenture", domain: "accenture.com", slug: "accenture" },
  { name: "TCS", domain: "tcs.com", slug: "tata", logoOverride: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { name: "Infosys", domain: "infosys.com", slug: "infosys", logoOverride: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Wipro", domain: "wipro.com", slug: "wipro" }
];

export const TESTIMONIALS = [
  {
    quote: "GFG has been the most inspiring and rewarding club to be involved with. You get to learn so much from all the young minds here. Everybody is so comforting and feels like family—working with each other, for each other. That camaraderie brought to life amazing events like Chai Links and Agentic & Gen AI talks. It's the best place to work and grow.",
    name: "Vidisha Jena",
    role: "PR & Media Core Member · '27",
  },
  {
    quote: "Being a founding member of GFG ITER, I've grown from an eager member to Design Lead, learning that college is truly about taking initiative, creating meaningful impact, and growing together as a team.",
    name: "Sanyukt Kumar Rai",
    role: "Design Lead · '28",
  },
  {
    quote: "Being part of GFG ITER has been an immensely enriching and transformative experience. It honed my leadership, strategic coordination, and organisational finesse while navigating diverse responsibilities. Collaborating with an exceptionally driven team fostered adaptability, precision, and collaborative excellence.",
    name: "Sushobhan Ghosh",
    role: "Technical Core Member · '27",
  },
  {
    quote: "Behind the lens, every frame captured the energy of GFG ITER—from intense hackathons to dynamic speaker sessions. Handling photography and videography for the Media team let me document our community's story and keep us connected across every milestone.",
    name: "Chandradipta Parida",
    role: "PR & Media Core Member · '27",
  },
  {
    quote: "The time when we had those 'Chai Pe Charcha' sessions, where faculty and students connected over a cup of tea, was truly a great vibe and a wonderful example of meaningful networking and teamwork.",
    name: "Ansh Gupta",
    role: "Operations Core Member · '27",
  },
  {
    quote: "GFG Club goes beyond coding by creating an open space to connect, converse, collaborate, and lead. From Chai Pe Charcha to student-led tech events, every single voice gets an opportunity to shine.",
    name: "Apurva Sahay",
    role: "Technical Core Member · '27",
  },
  {
    quote: "GFG gave me more than just technical exposure—it gave me my first taste of being part of a passionate tech community, where learning, teamwork, and stepping outside my comfort zone felt genuinely exciting.",
    name: "Yashvi Lodhi",
    role: "Operations Core Member · '29",
  },
  {
    quote: "My experience with the GeeksforGeeks Club has been really great so far. Everyone is very friendly, supportive, and always ready to help. There's never a 'no' when you need help. The group discussions, meetings, and interactions have made joining this club a wonderful experience.",
    name: "Swayam Ritiraj Dash",
    role: "Design Core Member · '28",
  },
  {
    quote: "Somewhere between the club meetings, the creative chaos, new experiences, and the incredible people I met here, I found a completely different side of myself—and honestly, I'm really glad I did.",
    name: "Mrunmayee Mohanty",
    role: "Operations Core Member · '28",
  },
  {
    quote: "As a PR and Media member of GFG ITER, I managed communication and promotions while anchoring our club launching program, gaining confidence in public speaking, coordination, and large-scale event management.",
    name: "Devpriyo Ghosh",
    role: "PR & Media Core Member · '28",
  },
  {
    quote: "Be it tech or beyond, GFG ITER has its own way of doing things. It's this unique culture, infectious energy, and tight-knit sense of community that makes the experience truly special.",
    name: "Ayush Animesh Barik",
    role: "Operations Core Member · '28",
  },
  {
    quote: "Being part of the GFG ITER Design Team gave me the opportunity to turn abstract ideas into engaging visuals, collaborate with talented designers, and grow creatively every single day.",
    name: "Kushagra Abhishek",
    role: "Design Core Member · '29",
  },
  {
    quote: "The experience in the club has been wonderful. I love how friendly and supportive the seniors are. Volunteering in our flagship tech events and hackathons has been unforgettable.",
    name: "Sahil Kumar Sahoo",
    role: "Operations Core Member · '29",
  },
  {
    quote: "Proud to be part of the GeeksforGeeks Club Design Team, where I transform ideas into creative visuals and contribute to making technical events more engaging, accessible, and impactful.",
    name: "Swastik Mohapatra",
    role: "Design Core Member · '28",
  },
  {
    quote: "The vibrant culture, relentless drive, and shared vision make the experience on the GFG ITER Operations team truly unmatched. Every single moment has provided me with invaluable memories and leadership skills.",
    name: "Abinash Das",
    role: "Operations Core Member · '28",
  },
];

export const FAQS = [
  {
    q: "Who can join GFG ITER?",
    a: "Any student enrolled at ITER, SOA University — across all branches and years. Passion matters more than prior experience.",
  },
  {
    q: "Is there a membership fee?",
    a: "No. The chapter is free to join. We're an official student body supported by the university.",
  },
  {
    q: "How do I contribute if I'm a beginner?",
    a: "Start by attending a workshop or bootcamp. From there, join a project pod or help organize an event.",
  },
  {
    q: "Do you help with placements and internships?",
    a: "Yes — through mock interviews, alumni referrals, resume reviews, and our WhatsApp opportunities channel.",
  },
];

export const CONTRIBUTORS = [
  // 1. Club Coordinator
  {
    id: "lead-1",
    name: "Anubhab Samantaray",
    role: "Club Coordinator",
    achievement: '"Bridging vision with execution to lead GFG ITER towards technical excellence and Web3 innovation."',
    photo: "",
    linkedin: "https://www.linkedin.com/company/gfgiter/",
    github: "https://github.com",
    email: "anubhab.samantaray@soa.ac.in"
  },
  // 2. Club Coordinator
  {
    id: "lead-2",
    name: "Akansha Ajay",
    role: "Club Coordinator",
    achievement: '"Fostering collaboration and driving impactful peer-learning student tech initiatives across batches."',
    photo: "/team/akansha-ajay.jpg",
    linkedin: "https://www.linkedin.com/in/akansha-ajay-685622302",
    github: "https://github.com/AkanshaAjay5",
    email: "akankshaajay05@gmail.com"
  },
  // 3. President
  {
    id: "lead-3",
    name: "Vivek Ranjan Sahoo",
    role: "President",
    achievement: '"Building an authentic culture of relentless building, cloud exploration, and student leadership."',
    photo: "",
    linkedin: "https://www.linkedin.com/company/gfgiter/",
    github: "https://github.com",
    email: "vivek.sahoo@iter.ac.in"
  },
  // 4. Vice President
  {
    id: "lead-4",
    name: "Snehansu Sekhar Dash",
    role: "Vice President",
    achievement: '"Scaling our community reach and orchestrating campus-wide technical competitions and summits."',
    photo: "/team/snehansu-sekhar-dash.jpg",
    linkedin: "https://www.linkedin.com/in/snehansu-sekhar-dash-8892a9347",
    github: "https://github.com/snehansusekhardash818-cloud",
    email: "snehansu.sekhar.dash818@gmail.com"
  },
  // 5. Community Mentor
  {
    id: "lead-5",
    name: "Ayush R. Pradhan",
    role: "Community Mentor",
    achievement: '"Empowering developers to transition from campus learning to real-world infrastructure and networking impact."',
    photo: "",
    linkedin: "https://www.linkedin.com/company/gfgiter/",
    github: "https://github.com",
    email: "ayush.pradhan@soa.ac.in"
  },
  // 6. Tech Lead
  {
    id: "lead-6",
    name: "Abhijit Dash",
    role: "Tech Lead",
    achievement: '"Crafting in-house platforms like Zer0ne CTF and leading hands-on technical development sprints."',
    photo: "/team/abhijit-dash.jpg",
    linkedin: "https://www.linkedin.com/in/dashabhijit",
    github: "https://github.com/Abhijit-byte",
    email: "atd5370@gmail.com"
  },
  // 7. Operations Lead
  {
    id: "lead-7",
    name: "Subhakanta Das",
    role: "Operations Lead",
    achievement: '"Orchestrating seamless offline events, cybersecurity workshops, and Discord infrastructure."',
    photo: "",
    linkedin: "https://www.linkedin.com/company/gfgiter/",
    github: "https://github.com",
    email: "subhakanta.das@iter.ac.in"
  },
  // 8. PR & Media Lead
  {
    id: "lead-8",
    name: "Aastha Singh",
    role: "PR & Media Lead",
    achievement: '"Amplifying our builders\' journeys and scaling the chapter brand presence across ITER."',
    photo: "",
    linkedin: "https://www.linkedin.com/company/gfgiter/",
    github: "https://github.com",
    email: "aastha.singh@iter.ac.in"
  },
  // 9. Design Lead
  {
    id: "lead-9",
    name: "Sanyukt Kumar Rai",
    role: "Design Lead",
    achievement: '"Designing intuitive user interfaces and crafting distinct brand systems for all initiatives."',
    photo: "/team/sanyukt-kumar-rai.png",
    linkedin: "https://www.linkedin.com/in/sanyuktkumarrai",
    github: "https://github.com/sanyukt63",
    email: "sanyuktkumarrai2@gmail.com"
  }
];

export const ACHIEVEMENTS = [
  { 
    id: '1', 
    title: '24-Hour Hackathon, XIM University', 
    award: '1st Prize Secured',
    category: 'Hackathon', 
    year: '2026', 
    description: 'Team Hex Syndicate — Sanyukt Kumar Rai, Aman Murari Singh, Pratham Gupta, Abhishek Raj, and Sujal Kumar — secured 1st Prize at XIM University Hackathon with their outstanding innovation.', 
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=70',
    rotation: -3, 
    x: -15, 
    y: 10 
  },
  { 
    id: '2', 
    title: 'HackFest, Advaita, IIIT Bhubaneswar', 
    award: 'Champions Title Secured',
    category: 'Hackathon', 
    year: '2026', 
    description: 'Team MindMesh — Shubham Parida, Ankita Mohapatra, Shlok Katiyar, and Shreya Patel — secured the Champions title at HackFest, Advaita, IIIT Bhubaneswar.', 
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=70',
    rotation: 3, 
    x: 10, 
    y: -10 
  },
  { 
    id: '3', 
    title: 'Smart India Hackathon Internals, 2025', 
    award: '1st in Hardware & 4th Overall',
    category: 'National Hackathon', 
    year: '2025', 
    description: 'Team Bhumicare — Vivek Ranjan Sahoo, Ayush Ranjan Pradhan, Subasis Mishra, Depesh Singh, Anjali Rout, Subhashree Sahoo — secured 1st in Hardware and 4th overall at SIH Internal 2025.', 
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=70',
    rotation: -2, 
    x: 0, 
    y: 15 
  }
];

export type BroadcastCategory = "recruitment" | "event" | "news" | "announcement";
export type BroadcastStatus = "live" | "upcoming" | "archived";

export interface BroadcastDomain {
  name: string;
  badge: string;
  description: string;
  skills: string[];
}

export interface BroadcastItem {
  id: string;
  title: string;
  headline: string;
  category: BroadcastCategory;
  categoryLabel: string;
  badge: string;
  status: BroadcastStatus;
  isLive: boolean;
  isPinned?: boolean;
  date: string;
  timestamp: string;
  summary: string;
  highlights: string[];
  eligibility?: string;
  deadline?: string;
  mode?: string;
  venue?: string;
  domains?: BroadcastDomain[];
  selectionProcess?: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  perks?: string[];
  registrationUrl?: string;
  actionLabel?: string;
  contactEmail?: string;
}

export const BROADCASTS: BroadcastItem[] = [
  {
    id: "recruitment-2026-2027",
    title: "GFG ITER Member Recruitment (Session 2026–2027)",
    headline: "Registration for GFG Members Recruitment for 2026–2027 Session is Live Now!",
    category: "recruitment",
    categoryLabel: "Recruitment Drive",
    badge: "🔴 LIVE RECRUITMENT",
    status: "live",
    isLive: true,
    isPinned: true,
    date: "September 2026",
    timestamp: "Live Transmission · Applications Reviewing on Rolling Basis",
    summary: "Step up to lead, engineer, and build with ITER's official GeeksforGeeks student community. We are actively recruiting passionate coders, designers, organizers, communicators, and editors for the 2026–2027 academic session.",
    highlights: [
      "Open to 1st, 2nd, and 3rd Year B.Tech students across all engineering branches at SOA.",
      "Hands-on opportunities to organize hackathons, summits, and multi-track technical workshops.",
      "Direct technical mentorship from senior core team members and placed alumni at top tech firms.",
      "Official Chapter Leadership Credentials and certificates from GeeksforGeeks & Dept. of CSE, ITER."
    ],
    eligibility: "1st, 2nd & 3rd Year B.Tech Students (All Branches)",
    deadline: "Rolling Shortlists — Apply Early for Priority Interview Slots",
    mode: "Hybrid (ITER Campus 1 & Online Workspace)",
    venue: "ITER, Siksha 'O' Anusandhan University, Bhubaneswar",
    domains: [
      {
        name: "Technical & Development",
        badge: "Tech Core",
        description: "Develop chapter web applications, build automated tooling, manage CTF infrastructure, and mentor students in Web, AI, DevOps, and CP.",
        skills: ["React / TypeScript", "Python / ML", "DSA & Algorithms", "Docker / Cloud"]
      },
      {
        name: "Operations & Logistics",
        badge: "Ops Core",
        description: "Coordinate large-scale offline events, hackathon arenas, venue staging, audio-visual setups, participant registrations, and university relations.",
        skills: ["Event Execution", "Crisis Management", "Budgeting", "Team Coordination"]
      },
      {
        name: "Creative & UI/UX Design",
        badge: "Design Core",
        description: "Craft high-fidelity UI prototypes, chapter branding assets, event posters, badges, motion graphics, and 3D visual concepts.",
        skills: ["Figma", "Adobe Suite", "Motion Graphics", "Brand Identity"]
      },
      {
        name: "PR & Media Outreach",
        badge: "PR Core",
        description: "Drive public relations, anchor flagship sessions, curate social media narratives, establish corporate partnerships, and lead community outreach.",
        skills: ["Public Speaking", "Campus Outreach", "Social Campaigns", "Community Growth"]
      },
      {
        name: "Content & Editorial",
        badge: "Editorial Core",
        description: "Author technical documentation, workshop curricula, project case studies, event reports, and press releases for university publications.",
        skills: ["Technical Writing", "Curriculum Design", "Documentation", "Storytelling"]
      }
    ],
    selectionProcess: [
      {
        step: "01",
        title: "Online Application Submission",
        description: "Fill out the official recruitment form with your details, domain preferences, and relevant work/GitHub/portfolio links."
      },
      {
        step: "02",
        title: "Domain-Specific Practical Task",
        description: "Showcase your practical problem-solving skills through a tailored domain task (coding challenge, design brief, or operations scenario)."
      },
      {
        step: "03",
        title: "Personal Technical & Fit Interview",
        description: "Engage in an offline interactive conversation with the Chapter Coordinators and Domain Leads on campus."
      },
      {
        step: "04",
        title: "Official Induction & Team Briefing",
        description: "Selected candidates receive their induction letters, domain assignments, and onboarding kit for the 2026–2027 cohort."
      }
    ],
    perks: [
      "Official GeeksforGeeks Chapter Leadership Certificate & Credential",
      "Exclusive GFG Branded Swag Kits, T-Shirts, and Tech Goodies",
      "Priority seats & team sponsorship for national hackathons and collegiate summits",
      "Direct guidance, mock interviews, and referral opportunities for top product companies",
      "Access to internal study pods, paid courses, and exclusive dev compute resources"
    ],
    registrationUrl: "https://forms.gle/gfg-iter-recruitment-2026-2027",
    actionLabel: "Apply for Recruitment 2026–2027",
    contactEmail: "gfgiter@soa.ac.in"
  },
  {
    id: "zerone-ctf-2026",
    title: "Zer0ne CTF 2026: National Collegiate Edition",
    headline: "Pre-Registrations Opening Soon for SOA's Flagship Hacking Arena",
    category: "event",
    categoryLabel: "Event Registration",
    badge: "🎟️ REGISTRATION SOON",
    status: "upcoming",
    isLive: false,
    date: "October 2026",
    timestamp: "Announced · Official Platform Deploying",
    summary: "SOA's premier 24-hour capture-the-flag tournament returns with harder challenges across Web Exploitation, Reverse Engineering, Cryptography, Forensics, and Binary Exploitation.",
    highlights: [
      "National open participation category for teams of up to 3 collegiate hackers.",
      "Live dynamic scoreboard, custom challenge badges, and industry-sponsored problem sets.",
      "Exciting cash rewards, official trophies, and security internship opportunities."
    ],
    eligibility: "Engineering & Science Undergraduates Nationwide",
    deadline: "Opening Mid-October 2026",
    mode: "Hybrid (Online Qualifiers + On-Campus Finals)",
    venue: "Central Computing Facility, ITER SOA University",
    actionLabel: "View CTF Archive & Guidelines",
    registrationUrl: "/events/zerone-event"
  },
  {
    id: "chai-links-ep02",
    title: "Chai & Links: Episode 02 — 'Unfiltered Tech Roadmaps'",
    headline: "RSVP Open for Candid Round-Table Tech Conversations",
    category: "event",
    categoryLabel: "Event Registration",
    badge: "☕ RSVP OPEN",
    status: "live",
    isLive: true,
    date: "September 2026",
    timestamp: "Limited to 40 Seats · First-Come Basis",
    summary: "Join senior engineers, domain leads, and recent alumni over warm cups of chai for an unscripted, deep-dive discussion on off-campus internships, GSoC, and systems engineering.",
    highlights: [
      "No slides, no boring lectures — 100% candid peer-to-peer dialogues.",
      "Live resume teardowns, cold email frameworks, and GitHub profile audits.",
      "Strict capacity limit of 40 students to ensure intimate, high-impact interactions."
    ],
    eligibility: "All ITER SOA Students (1st to 4th Year)",
    deadline: "Closes once 40 RSVPs are filled",
    mode: "Offline (Campus Lounge)",
    venue: "AIC SOA Seminar Lounge, ITER Campus 1",
    actionLabel: "Reserve Your Seat",
    registrationUrl: "/events/chai-links-ep01"
  },
  {
    id: "annual-report-release",
    title: "Official GFG ITER Annual Activity Report 2025–2026 Released",
    headline: "Comprehensive 2025–2026 Chapter Activity Dossier Published",
    category: "news",
    categoryLabel: "Chapter News",
    badge: "📢 OFFICIAL RELEASE",
    status: "live",
    isLive: false,
    date: "August 2026",
    timestamp: "Published · Available in Interactive Flipbook & PDF",
    summary: "The Department of Computer Science & Engineering officially released the Annual Activity Report 2025–2026, chronicling 28+ technical events, 1,800+ student participants, and national podium finishes.",
    highlights: [
      "Commendation notes from SOA University Leadership & Faculty Coordinators.",
      "Complete photographic archives and attendee statistics across all domains.",
      "Interactive 3D page-turn flipbook available directly on the chapter portal."
    ],
    actionLabel: "Read Annual Report",
    registrationUrl: "/reports/GFG_ITER_Annual_Activity_Report_2025-2026.pdf"
  },
  {
    id: "skill-exchange-cohort-2",
    title: "GFG Skill Exchange 2.0: 10-Day Deep Dive Cohort",
    headline: "Curriculum Announced for Intensive Multi-Track Masterclasses",
    category: "announcement",
    categoryLabel: "Masterclass Series",
    badge: "⚡ ANNOUNCED",
    status: "upcoming",
    isLive: false,
    date: "November 2026",
    timestamp: "Curriculum Approved · Instructor Briefings Underway",
    summary: "Following the historic participation in Season 1, Skill Exchange 2.0 returns with upgraded hands-on modules in Generative AI Agents, Rust Systems Programming, Docker & Kubernetes, and Web3 Smart Contracts.",
    highlights: [
      "Deploy production-grade capstone projects in every single domain.",
      "Live terminal setups, cloud compute credits, and hardware networking labs.",
      "Demo Day evaluation by invited tech leads and corporate alumni."
    ],
    actionLabel: "Explore Previous Tracks",
    registrationUrl: "/events/gfg-skill-exchange"
  }
];

