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
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=70",
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
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=70",
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
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=70",
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
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=70",
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
    bio: "Club Coordinator. Coordinating student engagement, peer-learning programs, and chapter logistics.",
    photo: "https://i.pravatar.cc/400?img=40",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
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
    bio: "Vice President, GFG ITER. Systems, cloud, and infrastructure enthusiast driving student initiatives and competitions.",
    photo: "https://i.pravatar.cc/400?img=47",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  // Technical Team: Lead + 25 members
  {
    name: "Abhijit Dash",
    role: "Tech Lead",
    group: "Technical Team",
    bio: "Tech Lead. Leading development of in-house competition platforms (Zer0ne CTF), open-source projects, and technical workshops.",
    photo: "https://i.pravatar.cc/400?img=15",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  ...createTeamMembers("Technical Team", "Tech", 1, 1),
  {
    name: "Debdatta Panda",
    role: "Technical Core Member",
    group: "Technical Team",
    bio: "Full-stack developer and core technical builder architecting digital platforms, web systems, and engineering initiatives for GFG ITER.",
    photo: "/team/debdatta-panda.jpg",
    email: "pandadebdatta9@gmail.com",
    linkedin: "https://www.linkedin.com/in/debdatta-panda-dp11",
    github: "https://github.com/MyselfDebdatta"
  },
  ...createTeamMembers("Technical Team", "Tech", 23, 3),
  
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
  ...createTeamMembers("PR and Media Team", "Media", 25),
  
  // Design Team: Lead + 25 members
  {
    name: "Sanyukt Kumar Rai",
    role: "Design Lead",
    group: "Design Team",
    bio: "Design Lead. Architect of chapter visual identity, UI/UX design systems, and creative hackathon posters.",
    photo: "https://i.pravatar.cc/400?img=45",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  ...createTeamMembers("Design Team", "Design", 25),

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
  ...createTeamMembers("Operation Team", "Operations", 25),
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
    quote: "Joining GFG ITER was the single best decision of my first year. I found mentors, teammates, and a place to build.",
    name: "Ritika S.",
    role: "3rd year, CSE",
  },
  {
    quote: "The bootcamps are ruthless in the best way. I went from tutorial hell to shipping real projects.",
    name: "Harsh V.",
    role: "2nd year, IT",
  },
  {
    quote: "It doesn't feel like a club. It feels like a small, ambitious engineering org inside the campus.",
    name: "Prerna D.",
    role: "4th year, ECE",
  },
  {
    quote: "Before this, I was intimidated by open source. Now I'm actively maintaining two tools used by hundreds.",
    name: "Aman K.",
    role: "3rd year, CSIT",
  },
  {
    quote: "The weekly DSA sprints fundamentally changed how I approach technical interviews. Secured my dream internship here.",
    name: "Shruti P.",
    role: "4th year, CSE",
  },
  {
    quote: "I found my co-founders at a weekend hackathon hosted by GFG. The builder culture here is unmatched.",
    name: "Dev M.",
    role: "Alumni '24",
  },
  {
    quote: "We don't just learn theory; we build scalable applications. The hands-on system design workshops are gold.",
    name: "Kabir T.",
    role: "3rd year, CSE",
  },
  {
    quote: "The design systems sessions bridged the gap between UI concepts and code for me perfectly.",
    name: "Isha N.",
    role: "2nd year, CSIT",
  },
  {
    quote: "Winning HackITER gave me the confidence to compete at a national level. The competitive spirit is contagious.",
    name: "Ananya R.",
    role: "3rd year, CSE",
  },
  {
    quote: "From late-night debugging sessions to mock interviews, the community support is something I'll always cherish.",
    name: "Rohit M.",
    role: "Alumni '25",
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
  {
    id: "lead-fc-1",
    name: "Mr. Saurav Kumar",
    role: "Faculty Coordinator",
    achievement: '"Guiding students to build a solid foundation in emerging technologies, research, and collaborative problem solving."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "sauravkumar@soa.ac.in"
  },
  {
    id: "lead-fc-2",
    name: "Mr. Sujit Bebortta",
    role: "Faculty Coordinator",
    achievement: '"Fostering technical curiosity, research alignment, and institutional mentorship across the chapter."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "sujitbebortta@soa.ac.in"
  },
  {
    id: "lead-1",
    name: "Anubhab Samantaray",
    role: "Club Coordinator",
    achievement: '"Bridging vision with execution to lead GFG ITER towards technical excellence and Web3 innovation."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "anubhab.samantaray@soa.ac.in"
  },
  {
    id: "lead-2",
    name: "Akansha Ajay",
    role: "Club Coordinator",
    achievement: '"Fostering collaboration and driving impactful peer-learning student tech initiatives across batches."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "akansha.ajay@soa.ac.in"
  },
  {
    id: "lead-3",
    name: "Ayush R. Pradhan",
    role: "Community Mentor",
    achievement: '"Empowering developers to transition from campus learning to real-world infrastructure and networking impact."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "ayush.pradhan@soa.ac.in"
  },
  {
    id: "lead-4",
    name: "Vivek Ranjan Sahoo",
    role: "President",
    achievement: '"Building an authentic culture of relentless building, cloud exploration, and student leadership."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "vivek.sahoo@iter.ac.in"
  },
  {
    id: "lead-5",
    name: "Snehansu Sekhar Dash",
    role: "Vice President",
    achievement: '"Scaling our community reach and orchestrating campus-wide technical competitions and summits."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "snehansu.das@iter.ac.in"
  },
  {
    id: "lead-6",
    name: "Abhijit Dash",
    role: "Tech Lead",
    achievement: '"Crafting in-house platforms like Zer0ne CTF and leading hands-on technical development sprints."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "abhijit.dash@iter.ac.in"
  },
  {
    id: "lead-7",
    name: "Aastha Singh",
    role: "PR & Media Lead",
    achievement: '"Amplifying our builders\' journeys and scaling the chapter brand presence across ITER."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "aastha.singh@iter.ac.in"
  },
  {
    id: "lead-8",
    name: "Sanyukt Kumar Rai",
    role: "Design Lead",
    achievement: '"Designing intuitive user interfaces and crafting distinct brand systems for all initiatives."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "sanyukt.rai@iter.ac.in"
  },
  {
    id: "lead-9",
    name: "Subhakanta Das",
    role: "Operations Lead",
    achievement: '"Orchestrating seamless offline events, cybersecurity workshops, and Discord infrastructure."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "subhakanta.das@iter.ac.in"
  },
  {
    id: "lead-10",
    name: "Mukesh Kumar Padhi",
    role: "Founder & Ex-Operation Lead",
    achievement: '"Pioneered early chapter operations and delivered foundational Data Science masterclasses."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "mukesh.padhi@iter.ac.in"
  },
  {
    id: "lead-11",
    name: "Raj Sahasransu Biswal",
    role: "Ex-Tech Lead",
    achievement: '"Championed DevOps culture, CI/CD automation, and cloud containerization across the student body."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "raj.biswal@iter.ac.in"
  },
  {
    id: "lead-12",
    name: "Debdatta Panda",
    role: "Technical Core Member",
    achievement: '"Architecting and building the official web platforms, interactive portals, and digital systems for GFG ITER."',
    photo: "/team/debdatta-panda.jpg",
    linkedin: "https://www.linkedin.com/in/debdatta-panda-dp11",
    github: "https://github.com/MyselfDebdatta",
    email: "pandadebdatta9@gmail.com"
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
