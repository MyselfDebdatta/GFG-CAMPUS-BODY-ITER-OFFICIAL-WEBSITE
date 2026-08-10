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
    youtube: "https://youtube.com",
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
    id: "gfg-carnival",
    title: "GFG Annual Club Carnival",
    category: "Orientation",
    date: "Date to be announced",
    venue: "ITER Main Campus",
    status: "upcoming",
    speakers: [
      { name: "Vivek Ranjan Sahoo", role: "President", photo: "https://i.pravatar.cc/150?img=12" }
    ],
    description:
      "Welcome, freshmen! Join our grand orientation carnival to discover everything about GFG ITER—our vision, our projects, and how you can become part of the ultimate builder community on campus.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "gfg-skill-exchange",
    title: "GFG Skill Exchange Workshop",
    category: "Workshop",
    date: "July 01 – Aug 31, 2026",
    venue: "ITER Main Campus",
    status: "ongoing",
    speakers: [
      { name: "Kabir Sharma", role: "Tech Lead", photo: "https://i.pravatar.cc/150?img=15" },
      { name: "Isha Nanda", role: "Design Lead", photo: "https://i.pravatar.cc/150?img=45" }
    ],
    description:
      "A comprehensive two-month mentorship initiative where senior engineers lead hands-on sessions across diverse tech domains, accelerating your mastery of modern tech stacks.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "rachitva-event",
    title: "Rachitva: Design-Pitch Event",
    category: "Contest",
    date: "Apr 05, 2026",
    venue: "ITER Main Campus",
    status: "past",
    speakers: [
      { name: "GFG Design & Media Leads", role: "Judges & Facilitators", photo: "" }
    ],
    description:
      "A fast-paced Design-Pitch competition inspiring participants to transform abstract ideas into compelling product concepts through design thinking, branding, and persuasive pitching under tight time constraints.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "zerone-event",
    title: "Zer0ne: Capture the Flag",
    category: "Contest",
    date: "Apr 03, 2026",
    venue: "ITER Main Campus",
    status: "past",
    speakers: [
      { name: "GFG Tech & Design Leads", role: "Event Conductors", photo: "" }
    ],
    description:
      "A multidisciplinary Capture the Flag event blending technology, strategy, and virtual economy management. Teams showcased technical expertise, real-time decision making, and hackathon-style solution development.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "raw-and-ready",
    title: "Raw & Ready: Personality Development",
    category: "Workshop",
    date: "Feb 04, 2026",
    venue: "ITER Main Campus",
    status: "past",
    speakers: [
      { name: "GFG Mentors & Trainers", role: "Facilitators", photo: "" }
    ],
    description:
      "An interactive session on personal growth, self-esteem, and time management (Eisenhower 4-box method). Featured team activities including 'Lost in the Jungle', mini-ideathons, and basic financial literacy.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "founders-unplugged",
    title: "Founders' Unplugged: From Chaos to Creation",
    category: "Seminar",
    date: "Dec 23, 2025",
    venue: "ITER Main Campus",
    status: "past",
    speakers: [
      { name: "Zahid Akhtar", role: "Founder of OneLife", photo: "" }
    ],
    description:
      "An honest podcast-style conversation on personality development, career growth, and startup realities featuring Zahid Akhtar (Founder of OneLife). Highlights included a rapid-fire round debating 'Gut Feeling vs Market Research' and 'Perfect Plan vs Fast Execution'.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "chai-links-ep01",
    title: "ChaiLinks: Episode 01",
    category: "Workshop",
    date: "Dec 03, 2025",
    venue: "ITER Main Campus",
    status: "past",
    speakers: [
      { name: "Faculty Mentors & GFG Leads", role: "Domain Leads", photo: "" }
    ],
    description:
      "Elevating open, conversation-driven learning with a focus on TinyML and Agentic AI. Episode 01 brought frontier tech into casual discussion circles, enabling students to explore low-power edge machine learning and autonomous AI systems over tea with faculty mentors.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "code-unbound-launch",
    title: "Code Unbound: The GFG Launch",
    category: "Seminar",
    date: "Nov 07, 2025",
    venue: "Bansuri Guru Auditorium, ITER",
    status: "past",
    speakers: [
      { name: "GFG Lead Board", role: "Core Team", photo: "" }
    ],
    description:
      "The official inauguration of the GeeksforGeeks (GFG) Club – ITER Student Chapter in the grand auditorium hall of Bansuri Guru. Featuring vision roadmaps, domain lead introductions, and an interactive Menti Quiz with awards.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=70",
  },
  {
    id: "chai-links-ep00",
    title: "ChaiLinks: Episode 00",
    category: "Workshop",
    date: "Nov 06, 2025",
    venue: "ITER Main Campus",
    status: "past",
    speakers: [
      { name: "Faculty Mentors & GFG Leads", role: "Discussion Leads", photo: "" }
    ],
    description:
      "Cup that connects, conversation that matters. Episode 00 introduced a refreshing shift from conventional academic events — an informal 'Chai Pe Charcha' where students engaged directly with faculty members across IoT, AI/ML, Cloud Computing, and Networking in small circle discussions.",
    image:
      "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=1400&q=70",
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

const createTeamMembers = (groupName: string, prefix: string, count: number = 25) => {
  return Array.from({ length: count }).map((_, i) => ({
    name: `${prefix} Member ${i + 1}`,
    role: `${groupName.replace(" Team", "")} Core Member`,
    group: groupName,
    bio: `Active contributor to ${groupName} initiatives and events.`,
    photo: `https://ui-avatars.com/api/?name=${encodeURIComponent(prefix)}+${i + 1}&background=00ff7f&color=020b06&size=512`,
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }));
};

export const TEAM = [
  {
    name: "Anubhab Samantary",
    role: "Coordinator",
    group: "Coordinator",
    bio: "Associate Professor, Dept. of CSE. Mentor to the chapter.",
    photo: "https://i.pravatar.cc/400?img=52",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Akansha Ajay",
    role: "Coordinator",
    group: "Coordinator",
    bio: "Assistant Professor. Guiding students in research and open source.",
    photo: "https://i.pravatar.cc/400?img=40",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Ayush R. Pradhan",
    role: "Community Mentor",
    group: "Mentors",
    bio: "Alumni. Helping students transition from campus to industry.",
    photo: "https://i.pravatar.cc/400?img=33",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Vivek Ranjan Sahoo",
    role: "President",
    group: "Executive Board",
    bio: "Final-year CSE. Full-stack engineer, ex-intern at a YC startup.",
    photo: "https://i.pravatar.cc/400?img=12",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Snehansu Sekhar Das",
    role: "Vice President",
    group: "Executive Board",
    bio: "Systems and cloud enthusiast. Speaker at 3 regional tech summits.",
    photo: "https://i.pravatar.cc/400?img=47",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  // Technical Team: Lead + 25 members
  {
    name: "Abhijit Dash",
    role: "Tech Lead",
    group: "Technical Team",
    bio: "Open source maintainer. Loves TypeScript, Rust, and systems.",
    photo: "https://i.pravatar.cc/400?img=15",
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  ...createTeamMembers("Technical Team", "Tech", 25),
  
  // PR and Media Team: Lead + 25 members
  {
    name: "Aastha Singh",
    role: "PR & Media Lead",
    group: "PR and Media Team",
    bio: "Brand storyteller. Grows the club community online and offline.",
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
    bio: "Product designer. Runs the club's design system and brand.",
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
    bio: "Orchestrates hackathons, bootcamps, and campus-wide summits.",
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
    name: "Ankit Rajan",
    role: "Will be updated shortly",
    year: "'23",
    photo: "https://i.pravatar.cc/300?img=11",
    quote: "GFG ITER is where I first shipped code that other people actually used.",
  },
  {
    name: "Mukesh Kumar Padhi",
    role: "Will be updated shortly",
    year: "'23",
    photo: "https://i.pravatar.cc/300?img=44",
    quote: "The community pushed me to interview harder and think bigger.",
  },
  {
    name: "Rathikant Behera",
    role: "Will be updated shortly",
    year: "'23",
    photo: "https://i.pravatar.cc/300?img=68",
    quote: "From my first workshop to a Carnegie Mellon offer — this club was pivotal.",
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
    id: "lead-1",
    name: "Anubhab Samantary",
    role: "Coordinator",
    achievement: '"Bridging vision with execution to lead GFG ITER towards excellence."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "anubhab.samantary@soa.ac.in"
  },
  {
    id: "lead-2",
    name: "Akansha Ajay",
    role: "Coordinator",
    achievement: '"Fostering collaboration and driving impactful student tech initiatives."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "akansha.ajay@soa.ac.in"
  },
  {
    id: "lead-3",
    name: "Ayush R. Pradhan",
    role: "Community Mentor",
    achievement: '"Empowering developers to transition from campus learning to industry impact."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "ayush.pradhan@soa.ac.in"
  },
  {
    id: "lead-4",
    name: "Vivek Ranjan Sahoo",
    role: "President",
    achievement: '"Building a culture of relentless innovation, shipping, and peer learning."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "vivek.sahoo@iter.ac.in"
  },
  {
    id: "lead-5",
    name: "Snehansu Sekhar Das",
    role: "Vice President",
    achievement: '"Scaling our community reach and driving campus-wide technical summits."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "snehansu.das@iter.ac.in"
  },
  {
    id: "lead-6",
    name: "Abhijit Dash",
    role: "Tech Lead",
    achievement: '"Crafting robust architecture and leading hands-on technical sprints."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "abhijit.dash@iter.ac.in"
  },
  {
    id: "lead-7",
    name: "Aastha Singh",
    role: "PR & Media Lead",
    achievement: '"Amplifying our builders\' stories and scaling our brand presence."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "aastha.singh@iter.ac.in"
  },
  {
    id: "lead-8",
    name: "Sanyukt Kumar Rai",
    role: "Design Lead",
    achievement: '"Designing intuitive user experiences and crafting our visual identity."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "sanyukt.rai@iter.ac.in"
  },
  {
    id: "lead-9",
    name: "Subhakanta Das",
    role: "Operations Lead",
    achievement: '"Orchestrating seamless hackathons, bootcamps, and campus logistics."',
    photo: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "subhakanta.das@iter.ac.in"
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
