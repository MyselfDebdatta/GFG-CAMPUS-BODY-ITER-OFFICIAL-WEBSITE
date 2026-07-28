export const CLUB = {
  name: "GFG Campus Body",
  short: "GFG ITER",
  full: "Geeks for Geeks — ITER, SOA University",
  tagline: "Empowering the Next Generation of Tech Leaders at ITER.",
  description:
    "The official Geeks for Geeks student chapter at ITER, SOA University — where students learn, build, collaborate, and innovate together.",
  address: "ITER, Siksha 'O' Anusandhan (SOA) University, Jagamara, Bhubaneswar, Odisha 751030",
  email: "gfg.iter@soa.ac.in",
  phone: "+91 90000 00000",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    whatsapp: "https://chat.whatsapp.com/",
  },
};

export const STATS = [
  { value: 100, suffix: "+", label: "Active Members" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 10, suffix: "+", label: "Events Hosted" },
  { value: 10, suffix: "+", label: "Alumni at Top MNCs" },
];

export const MARQUEE = [
  "Software Engineering",
  "Web Development",
  "AI & Machine Learning",
  "UI / UX",
  "Open Source",
  "Competitive Programming",
  "Cloud Computing",
  "DevOps",
  "Cybersecurity",
  "Data Science",
  "Systems Design",
  "Product Engineering",
];

export const EVENTS = [
  {
    id: "hack-iter-26",
    title: "HackITER 2026",
    category: "Hackathon",
    date: "Mar 14 – 15, 2026",
    venue: "ITER Auditorium, SOA",
    status: "upcoming",
    speakers: [
      { name: "Ananya Rao", role: "Software Engineer", photo: "https://i.pravatar.cc/150?img=44" },
      { name: "Rohit Menon", role: "SDE II", photo: "https://i.pravatar.cc/150?img=11" }
    ],
    description:
      "A 30-hour flagship hackathon bringing together 300+ builders across AI, Web, and Systems tracks.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "dsa-bootcamp",
    title: "DSA Winter Bootcamp",
    category: "Bootcamp",
    date: "Feb 05 – 20, 2026",
    venue: "Online + Campus Labs",
    status: "ongoing",
    speakers: [
      { name: "Sanjay Kar", role: "MS CS", photo: "https://i.pravatar.cc/150?img=68" },
      { name: "Priya Mahapatra", role: "AI/ML Lead", photo: "https://i.pravatar.cc/150?img=32" }
    ],
    description:
      "A structured two-week deep dive into data structures, algorithms, and problem-solving patterns.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "cp-contest-9",
    title: "Code Sprint Vol. 9",
    category: "Contest",
    date: "Nov 22, 2025",
    venue: "ITER Lab Block C",
    status: "past",
    speakers: [
      { name: "GFG ITER Team", role: "Organizers", photo: "https://i.pravatar.cc/150?img=50" }
    ],
    description:
      "Our monthly competitive programming showdown. 180 participants, 6 problems, 3 hours.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "ui-ux-workshop",
    title: "Design Systems Workshop",
    category: "Workshop",
    date: "Oct 08, 2025",
    venue: "SOA Design Studio",
    status: "past",
    speakers: [
      { name: "Isha Nanda", role: "Design Lead", photo: "https://i.pravatar.cc/150?img=45" }
    ],
    description:
      "A hands-on session on building scalable, token-driven design systems in Figma and code.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "open-source-day",
    title: "Open Source Day",
    category: "Workshop",
    date: "Sep 30, 2025",
    venue: "ITER Central Lab",
    status: "past",
    speakers: [
      { name: "Kabir Sharma", role: "Tech Lead", photo: "https://i.pravatar.cc/150?img=15" },
      { name: "Ayaan Roy", role: "Events Lead", photo: "https://i.pravatar.cc/150?img=8" }
    ],
    description:
      "Your first pull request — an intro to Git, GitHub, and contributing to real open source projects.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=70",
  },
];

export const EVENT_CATEGORIES = [
  "All",
  "Hackathon",
  "Bootcamp",
  "Workshop",
  "Contest",
  "Seminar",
];

export const TEAM = [
  {
    name: "Aarav Patnaik",
    role: "President",
    group: "Executive Board",
    bio: "Final-year CSE. Full-stack engineer, ex-intern at a YC startup.",
    photo: "https://i.pravatar.cc/400?img=12",
  },
  {
    name: "Sneha Mohanty",
    role: "Vice President",
    group: "Executive Board",
    bio: "Systems and cloud enthusiast. Speaker at 3 regional tech summits.",
    photo: "https://i.pravatar.cc/400?img=47",
  },
  {
    name: "Kabir Sharma",
    role: "Tech Lead",
    group: "Technical Team",
    bio: "Open source maintainer. Loves TypeScript, Rust, and distributed systems.",
    photo: "https://i.pravatar.cc/400?img=15",
  },
  {
    name: "Priya Mahapatra",
    role: "AI/ML Lead",
    group: "Technical Team",
    bio: "Research assistant working on multimodal models and applied ML.",
    photo: "https://i.pravatar.cc/400?img=32",
  },
  {
    name: "Isha Nanda",
    role: "Design Lead",
    group: "Design Team",
    bio: "Product designer. Runs the club's design system and brand.",
    photo: "https://i.pravatar.cc/400?img=45",
  },
  {
    name: "Ayaan Roy",
    role: "Events Lead",
    group: "Event Management",
    bio: "Orchestrates hackathons, bootcamps, and campus-wide summits.",
    photo: "https://i.pravatar.cc/400?img=8",
  },
  {
    name: "Meera Iyer",
    role: "Marketing Lead",
    group: "Marketing",
    bio: "Brand storyteller. Grows the club community online and offline.",
    photo: "https://i.pravatar.cc/400?img=25",
  },
  {
    name: "Dr. Nikhil Sen",
    role: "Faculty Coordinator",
    group: "Faculty Coordinator",
    bio: "Associate Professor, Dept. of CSE. Mentor to the chapter since 2022.",
    photo: "https://i.pravatar.cc/400?img=52",
  },
];

export const TEAM_GROUPS = [
  "Executive Board",
  "Technical Team",
  "Design Team",
  "Event Management",
  "Marketing",
  "Faculty Coordinator",
];

export const ALUMNI = [
  {
    name: "Rohit Menon",
    role: "SDE II · Google",
    year: "'22",
    photo: "https://i.pravatar.cc/300?img=11",
    quote: "GFG ITER is where I first shipped code that other people actually used.",
  },
  {
    name: "Ananya Rao",
    role: "Software Engineer · Microsoft",
    year: "'23",
    photo: "https://i.pravatar.cc/300?img=44",
    quote: "The community pushed me to interview harder and think bigger.",
  },
  {
    name: "Sanjay Kar",
    role: "MS CS · CMU",
    year: "'23",
    photo: "https://i.pravatar.cc/300?img=68",
    quote: "From my first workshop to a Carnegie Mellon offer — this club was pivotal.",
  },
  {
    name: "Trisha Panda",
    role: "Software Engineer · Atlassian",
    year: "'24",
    photo: "https://i.pravatar.cc/300?img=49",
    quote: "I learned to lead, mentor, and ship — long before my first job.",
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
  { name: "BNY Mellon", domain: "bnymellon.com", slug: "bnymellon" },
  { name: "Optum", domain: "optum.com", slug: "optum" },
  { name: "Dell", domain: "dell.com", slug: "dell" },
  { name: "Adobe", domain: "adobe.com", slug: "adobe" },
  { name: "Oracle", domain: "oracle.com", slug: "oracle" },
  { name: "Atlassian", domain: "atlassian.com", slug: "atlassian" },
  { name: "IBM", domain: "ibm.com", slug: "ibm" },
  { name: "Cisco", domain: "cisco.com", slug: "cisco" },
  { name: "Intel", domain: "intel.com", slug: "intel" },
  { name: "AMD", domain: "amd.com", slug: "amd" },
  { name: "NVIDIA", domain: "nvidia.com", slug: "nvidia" },
  { name: "Samsung", domain: "samsung.com", slug: "samsung" },
  { name: "SAP", domain: "sap.com", slug: "sap" },
  { name: "Deloitte", domain: "deloitte.com", slug: "deloitte" },
  { name: "Accenture", domain: "accenture.com", slug: "accenture" },
  { name: "TCS", domain: "tcs.com", slug: "tata" },
  { name: "Infosys", domain: "infosys.com", slug: "infosys" },
  { name: "Wipro", domain: "wipro.com", slug: "wipro" }
];

export const TESTIMONIALS = [
  {
    quote:
      "Joining GFG ITER was the single best decision of my first year. I found mentors, teammates, and a place to build.",
    name: "Ritika S.",
    role: "3rd year, CSE",
  },
  {
    quote:
      "The bootcamps are ruthless in the best way. I went from tutorial hell to shipping real projects.",
    name: "Harsh V.",
    role: "2nd year, IT",
  },
  {
    quote:
      "It doesn't feel like a club. It feels like a small, ambitious engineering org inside the campus.",
    name: "Prerna D.",
    role: "4th year, ECE",
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
