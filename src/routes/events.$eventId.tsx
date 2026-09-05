import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft, Calendar, MapPin, Users, CheckCircle2,
  Clock, User, ChevronRight, GitBranch, Terminal,
  Zap, Target, Code2, Rocket,
} from "lucide-react";
import { useState } from "react";
import { EVENTS } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader,
  DialogTitle, DialogTrigger, DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/events/$eventId")({
  loader: ({ params }) => {
    const event = EVENTS.find((e) => e.id === params.eventId);
    if (!event) throw notFound();
    return event;
  },
  component: EventDetails,
});

/* ── Per-event unique copy (replaces the generic "join us for an immersive experience") ── */
const EVENT_COPY: Record<string, { brief: string; objectives: string[]; timeline: { label: string; desc: string }[] }> = {
  "gfg-carnival": {
    brief: "The GFG Annual Club Carnival & Orientation is where new builders meet the community that will define their engineering journey. This isn't just an orientation — it's your launchpad. From live coding demos to project showcases, this event gives you a front-row seat to what GFG ITER is building next.",
    objectives: [
      "Discover active technical domains and open contribution opportunities",
      "Meet the executive board, mentors, and domain leads face-to-face",
      "Get hands-on with live technical demos and interactive builder challenges",
      "Network with seniors placed at top-tier MNCs and high-growth startups",
    ],
    timeline: [
      { label: "Gates Open", desc: "Check-in, welcome kit collection, and team introductions" },
      { label: "Vision Keynote", desc: "The President presents this year's roadmap and club vision" },
      { label: "Live Demo Arena", desc: "Domain leads showcase flagship projects and tech stacks in action" },
      { label: "Builder's Challenge", desc: "An engaging sprint to explore problem solving and collaborative coding" },
      { label: "Open Networking", desc: "Meet your future teammates, mentors, and peers over refreshments" },
    ],
  },
  "gfg-skill-exchange": {
    brief: "The GFG ITER Skills Exchange Workshop ('Learn It. Build It. Share It.') is a comprehensive multi-week technical mentorship program conducted over Discord. Delivered by experienced senior core members, the workshop covers 8 cutting-edge Computer Science tracks—from Blockchain, Quantum Computing, and Networking to Cybersecurity, Linux, DevOps, AI Automation, and Data Science.",
    objectives: [
      "Master foundational concepts across 8 diverse high-demand tech specializations",
      "Bridge theoretical classroom learning with live code demos, terminal walkthroughs, and hardware sandboxes",
      "Receive direct peer mentorship, career roadmaps, and curated learning repositories",
      "Participate in live interactive quizzes, hands-on challenges, and project ideation sprints",
    ],
    timeline: [
      { label: "Day 1: Blockchain & Web3", desc: "Distributed ledgers, smart contracts, Solidity, and DApps by Anubhab Samantaray" },
      { label: "Day 2: Quantum Computing", desc: "Qubits, quantum gates, algorithms, Willow chip, and Menti quiz by Debajyoti Bhakta" },
      { label: "Day 3: Computer Networking", desc: "OSI/TCP-IP models, live DNS resolver, and router/switch hardware cabling by Ayush R. Pradhan" },
      { label: "Day 4: Cybersecurity & Hacking", desc: "CIA triad, social engineering, malware taxonomy, cryptography, and defense by Subhakanta Das" },
      { label: "Day 5: Linux, Cloud & OS", desc: "Kernel internals, live SSH to AWS EC2 instance, and terminal mastery by Vivek Ranjan Sahoo" },
      { label: "Day 6: DevOps & CI/CD", desc: "DevOps culture, Git time-travel, Docker containers, and Kubernetes by Raj S. Biswal" },
      { label: "Day 7: AI Automation (n8n)", desc: "Generative vs Agentic AI, RECIPE prompts, and live 4-node n8n workflow by Mrunmayee Mohanty" },
      { label: "Day 8: Data Science & ML", desc: "7-stage lifecycle, NumPy/Pandas/Matplotlib, ML paradigms, and career roadmap by Mukesh K. Padhi" },
    ],
  },
  "skills-exchange-day8": {
    brief: "Day 8 of the Skills Exchange Workshop gave the community a comprehensive tour of data science — from the conceptual relationship between AI, ML, and Deep Learning, through the full data science lifecycle, hands-on Python libraries, and machine learning fundamentals, to concrete project ideas and a career roadmap. Mukesh Kumar Padhi's mix of clear conceptual framing and live code demonstrations made data science both understandable and actionable.",
    objectives: [
      "Master the seven-stage Data Science Lifecycle from problem definition to deployment & monitoring",
      "Understand the structural differences between structured, semi-structured, and unstructured data",
      "Gain hands-on experience with NumPy (arrays), Pandas (dataframes), and Matplotlib (visualization)",
      "Explore the four machine learning paradigms: Supervised, Unsupervised, Semi-Supervised, and Reinforcement Learning",
      "Review 10 beginner-friendly project workflows and an 8-role industry career roadmap",
    ],
    timeline: [
      { label: "Welcome & Motivation", desc: "Everyday examples (Netflix, Amazon, Google Maps) and defining data science" },
      { label: "Conceptual Venn Diagram", desc: "AI vs ML vs Deep Learning vs Data Science and the 7-stage Lifecycle" },
      { label: "Live Code Demonstrations", desc: "Hands-on data manipulation with NumPy, Pandas, and Matplotlib plotting" },
      { label: "Data Sourcing & EDA", desc: "Data cleaning cycles (80% rule) and the Exploratory Data Analysis toolkit" },
      { label: "ML Taxonomy & Roadmap", desc: "Four learning paradigms, ten mini-projects, and an 8-role career roadmap" },
    ],
  },
  "skills-exchange-day7": {
    brief: "Day 7 of the Skills Exchange Workshop introduced members to AI-powered workflow automation and where AI fits into it. Mrunmayee Mohanty opened with 'What if AI could do your work instead of just answering your questions?' and delivered an end-to-end live build connecting Google Sheets, Edit Fields, Gmail, and Sheet updates inside n8n.",
    objectives: [
      "Distinguish between Generative AI, Workflow automation, and autonomous Agentic AI",
      "Apply the RECIPE prompt framework (Role, Examples, Context, Instruction, Parameters, Expected Output)",
      "Master core n8n automation primitives: Triggers, Nodes, Actions, Data payloads, and Credentials",
      "Live-build and execute a 4-node automated workflow: trigger -> process -> send -> update",
      "Understand how enterprise AI agents combine LLMs, RAG knowledge bases, tools, and business logic",
    ],
    timeline: [
      { label: "Automation Mindset", desc: "Contrasting manual repetitive workflows with automated execution" },
      { label: "AI Terminology", desc: "Demystifying GenAI vs Workflows vs Agentic AI" },
      { label: "RECIPE Framework", desc: "Structured prompt engineering for reliable AI agent behavior" },
      { label: "Live n8n Build", desc: "Building a working Google Sheets to Gmail AI automation from scratch" },
      { label: "Industry Agents & Roadmap", desc: "LLMs + Tools architecture, local AI toolchains, and agentic engineering roadmap" },
    ],
  },
  "skills-exchange-day6": {
    brief: "Day 6 of the Skills Exchange Workshop gave the community a grounded, memorable introduction to DevOps and CI/CD pipelines — tracing the journey from 'It Works on My Machine' to 'It Works Everywhere'. Raj Sahasransu Biswal paired clear conceptual explanations with relatable industry humor to make dense infrastructure topics approachable.",
    objectives: [
      "Internalize DevOps as Culture + Automation + Collaboration + Continuous Improvement",
      "Understand the complete DevOps infinity lifecycle: plan, code, build, test, release, deploy, operate, monitor",
      "Master Git as a collaborative version-control 'time machine' replacing manual file chaos",
      "Grasp automated CI/CD pipelines from test/build through staging to production deployment",
      "Understand Docker containerization, Kubernetes pod orchestration, and AWS cloud fundamentals",
    ],
    timeline: [
      { label: "DevOps & Blame Game", desc: "Moving from developer vs operations friction to shared pipeline ownership" },
      { label: "DevOps Lifecycle & Git", desc: "The infinity loop, feedback cycles, and Git version control fundamentals" },
      { label: "CI/CD Pipeline Walkthrough", desc: "Contrasting manual friction against automated build, test, and release" },
      { label: "Docker & Kubernetes", desc: "Containerizing environments and orchestrating container pods at scale" },
      { label: "AWS Cloud & Wrap-up", desc: "Cloud infrastructure fundamentals and next steps for student engineers" },
    ],
  },
  "skills-exchange-day5": {
    brief: "Day 5 of the Skills Exchange Workshop pulled back the curtain on the operating system quietly powering 96% of top web servers and 100% of top 500 supercomputers: Linux. Vivek Ranjan Sahoo combined systems theory with an exhilarating live SSH demonstration connecting to an active AWS EC2 Ubuntu instance.",
    objectives: [
      "Understand the foundational role of Linux across web servers, supercomputers, Android, and AI/cloud",
      "Demystify the terminal, shell (Bash), and OS kernel relationship through the journey of a command",
      "Gain hands-on familiarity with remote cloud servers via SSH and AWS EC2 instances",
      "Master essential command-line navigation, file viewing/editing, permissions (chmod, sudo), and processes",
      "Explore the Linux single-root filesystem (/home, /etc, /proc, /dev) and 'everything is a file' philosophy",
    ],
    timeline: [
      { label: "The Machine Behind the Web", desc: "Adoption scale of Linux in AI, cloud infrastructure, and cybersecurity" },
      { label: "Terminal, Shell & Kernel", desc: "Tracing how typed commands travel down to hardware and return output" },
      { label: "Live AWS EC2 Demo", desc: "Connecting live via SSH to an Ubuntu cloud instance and inspecting folders" },
      { label: "Commands & Filesystem", desc: "Navigation, file operations, permissions, and package management" },
      { label: "60-Second Challenge & Roadmap", desc: "Creating 100 files in one line, fun tricks, and a 3-stage learning roadmap" },
    ],
  },
  "skills-exchange-day4": {
    brief: "Day 4 of the Skills Exchange Workshop delivered a comprehensive tour of modern information security, from foundational threat vocabulary through applied cryptography, network attack models, and everyday defensive habits. Subhakanta Das engaged participants with real-world attack breakdowns and an interactive closing security quiz.",
    objectives: [
      "Master the core CIA Triad (Confidentiality, Integrity, Availability) and AAA Framework",
      "Recognize common social engineering vectors (phishing, spear phishing, vishing, pretexting)",
      "Navigate a field guide of 9 malware families (viruses, worms, trojans, ransomware, rootkits, keyloggers)",
      "Understand symmetric (AES) vs asymmetric (RSA, ECC) encryption, hashing, and digital signatures",
      "Implement a practical 10-item daily digital defense checklist (passwords, MFA, VPNs, Wi-Fi safety)",
    ],
    timeline: [
      { label: "Threat Landscape & CIA Triad", desc: "Core security definitions and distinguishing goals from mechanisms" },
      { label: "Social Engineering & Malware", desc: "Human manipulation tactics and classification of 9 malware categories" },
      { label: "Applied Cryptography", desc: "Encryption workflows, public-private key pairs, hashing digests, and MACs" },
      { label: "Network Attacks & Defense", desc: "Man-in-the-Middle attacks, Wi-Fi snooping, and TOR/VPN anonymization" },
      { label: "Career Paths & Live Quiz", desc: "Cybersecurity job roles and a 10-question interactive recap quiz" },
    ],
  },
  "skills-exchange-day3": {
    brief: "Day 3 of the Skills Exchange Workshop demystified the invisible backbone connecting billions of devices worldwide. Ayush Ranjan Pradhan combined a deep conceptual walkthrough of network protocols with an interactive live DNS sandbox and a real, on-camera hardware cabling demonstration on switches and patch panels.",
    objectives: [
      "Understand network tiers (PAN, LAN, MAN, WAN) and core devices (routers, switches, modems, APs)",
      "Master the 7-layer OSI Model and its direct mapping to the 4-layer TCP/IP Internet model",
      "Understand IP addressing (IPv4/IPv6), subnet masks, port conventions, and transport protocols",
      "Trace real-time DNS resolution from browser resolver to root, TLD, and authoritative servers",
      "Gain hands-on exposure to physical router architecture and server rack cabling in practice",
    ],
    timeline: [
      { label: "Network Foundations", desc: "Device categories, communication history, and LAN/WAN architectures" },
      { label: "OSI & TCP/IP Models", desc: "Layered communication, encapsulation, IP addressing, and port numbers" },
      { label: "DNS Sandbox Demo", desc: "Tracing live domain resolution queries across DNS servers in real time" },
      { label: "Hardware Deep-Dive", desc: "Exploded view of router electronics, PCB shielding, and server racks" },
      { label: "Live Cabling Demo", desc: "Physical patch-panel to switch cabling demonstration live on camera" },
    ],
  },
  "skills-exchange-day2": {
    brief: "Day 2 of the Skills Exchange Workshop introduced students to quantum computing, exploring how the field is entering an AI-style acceleration curve. Debajyoti Bhakta walked attendees from classical physics to qubits, superposition, quantum gates, Google's Willow chip, and India's National Quantum Mission.",
    objectives: [
      "Trace the paradigm shift from classical mechanics (Newton) to quantum mechanics (Planck, Einstein)",
      "Grasp the three quantum superpowers: superposition, entanglement, and quantum interference",
      "Explore landmark quantum algorithms: Deutsch–Jozsa, Shor's factoring, and Grover's search",
      "Understand physical quantum computer hardware: dilution refrigerators, Helium-3 cooling, and qubits",
      "Examine the convergence of Quantum + AI (Quantum Intelligence) and India's National Quantum Mission",
    ],
    timeline: [
      { label: "From Physics to Quantum", desc: "Historical foundations from classical laws to quantum hypotheses" },
      { label: "Quantum Superpowers", desc: "Bloch sphere, superposition, entanglement, and quantum logic gates" },
      { label: "Algorithms & Architecture", desc: "Shor's, Grover's algorithms and dilution refrigerator engineering" },
      { label: "Beyond AI & India's NQM", desc: "Quantum Machine Learning, Google Willow, and India's 4-pillar mission" },
      { label: "Interactive Menti Quiz", desc: "Live competitive quiz testing attendees on core quantum concepts" },
    ],
  },
  "skills-exchange-day1": {
    brief: "Day 1 of the Skills Exchange Workshop laid the groundwork for decentralized technologies. Anubhab Samantaray guided participants through the evolution from Web1 to Web3, breaking down distributed ledgers, blockchain consensus, smart contracts in Solidity, and real-world DApp architectures.",
    objectives: [
      "Trace the evolutionary arc from Web1 (Read) to Web2 (Read-Write) to Web3 (Read-Write-Own)",
      "Understand core blockchain properties: decentralization, distributed ledgers, and immutability",
      "Walk through the 7-step transaction lifecycle from mempool to consensus and final block settlement",
      "Explore Ethereum smart contracts written in Solidity and popular DApps (Uniswap, OpenSea, Aave)",
      "Analyze current challenges (gas fees, scaling, regulations) and emerging Web3 career opportunities",
    ],
    timeline: [
      { label: "Evolution of the Web", desc: "Moving from static pages to centralized platforms and user ownership" },
      { label: "Blockchain Architecture", desc: "Blocks, cryptographic hashes, distributed nodes, and immutability" },
      { label: "Transaction Lifecycle", desc: "Validation, mempool, Proof-of-Work vs Proof-of-Stake consensus" },
      { label: "Smart Contracts & DApps", desc: "Writing self-executing code in Solidity and interacting with Ethereum" },
      { label: "Web3 Careers & Roadmap", desc: "Industry landscape, security engineering, and future directions" },
    ],
  },
  "rachitva-event": {
    brief: "Rachitva – Design & Pitch Competition emerged as one of the highly engaging creative events of Chakravyuh Genesis 2026 (ITER's Annual Techno-Cultural Fest). Combining elements of design thinking and persuasive public speaking, ~120 students responded to a surprise theme, designed visual posters, and pitched their creative concepts before an expert judging panel.",
    objectives: [
      "Transforming abstract concepts into polished visual designs and impactful posters under tight time constraints",
      "Applying rapid design thinking, visual hierarchy, and strategic communication principles",
      "Delivering structured elevator pitches explaining design motivation, symbolism, and practical relevance",
      "Developing confidence in presenting original creative ideas before an authoritative judging panel",
    ],
    timeline: [
      { label: "8:00 AM – Briefing & Theme Reveal", desc: "Judging criteria explained and the surprise creative theme officially unveiled" },
      { label: "Design Sprint", desc: "Participants brainstorm layouts, visual concepts, and craft their poster submissions" },
      { label: "Pitch Presentations", desc: "Individual elevator pitches defending design choices and storytelling before judges" },
      { label: "Evaluation & Winner Felicitations", desc: "Judging on creativity, aesthetics, message clarity, and pitch effectiveness" },
    ],
  },
  "zerone-event": {
    brief: "Zer0ne – Capture The Flag (CTF) Competition proved to be one of the flagship technical highlights of Chakravyuh Genesis 2026. Designed as a beginner-friendly yet rigorous cybersecurity challenge, the competition was powered by an in-house custom CTF platform built entirely by the GFG ITER tech team, featuring real-time automated flag validation and dynamic leaderboards.",
    objectives: [
      "Introduce students to practical cybersecurity and ethical hacking through gamified CTF challenges",
      "Test foundational problem-solving across cryptography, web security, networking, and operating systems",
      "Encourage logical reasoning, vulnerability analysis, and methodical debugging under time constraints",
      "Experience a production-grade competitive arena powered by GFG ITER's custom platform",
    ],
    timeline: [
      { label: "9:00 AM – Rules & Platform Walkthrough", desc: "Briefing on CTF format, scoring mechanisms, and code of conduct in C Block" },
      { label: "Round 1: Foundational & Logic", desc: "Core computing concepts, logic puzzles, and platform familiarization" },
      { label: "Round 2: Technical Exploitation", desc: "Web security scenarios, cryptographic ciphers, and networking puzzles" },
      { label: "Round 3: Advanced CTF Challenges", desc: "Multi-layered security challenges testing speed, accuracy, and deep analysis" },
      { label: "Leaderboard Freeze & Top Performers", desc: "Announcement of top cybersecurity performers and closing ceremony" },
    ],
  },
  "raw-and-ready": {
    brief: "Raw & Ready was an intensive personality development workshop organized for GFG ITER core members at E-Block Room 114. Emphasizing that technical excellence must be matched with emotional intelligence and communication, the session blended self-awareness frameworks with interactive simulations.",
    objectives: [
      "Master structured self-assessment through SWOT Analysis for career and personal development",
      "Implement practical time management strategies using the Eisenhower 4-Box Matrix",
      "Enhance critical thinking and collective decision-making through the 'Lost in the Jungle' survival exercise",
      "Sharpen attention to detail, presentation skills in a Mini Ideathon, and foundational financial literacy",
    ],
    timeline: [
      { label: "3:00 PM – Introduction & Self-Esteem", desc: "Self-awareness foundations, distinguishing facts from opinions, and SWOT analysis" },
      { label: "Lost in the Jungle Simulation", desc: "Team resource prioritization exercise testing group dynamics and analytical logic" },
      { label: "Instructional Mindfulness & Ideathon", desc: "Disciplined execution exercises followed by rapid mini-ideathon team presentations" },
      { label: "Eisenhower Matrix & Financial Literacy", desc: "Time management frameworks, investment basics, risk vs returns, and closing roadmap" },
    ],
  },
  "founders-unplugged": {
    brief: "Founders Unplugged – From Chaos to Creation brought students face-to-face with Mr. Zahid Akhtar (Founder of OneLife, Life & Career Coach, Behavioral Trainer) at Bansuri Guru Auditorium. Rejecting superficial success tropes, the session explored the raw realities of startup building, overcoming failure, and emotional resilience.",
    objectives: [
      "Gain first-hand perspective on the psychological and operational challenges of building a startup",
      "Learn how to view failure as vital diagnostic feedback rather than a permanent setback",
      "Understand how to balance intuitive 'gut feel' with rigorous market validation and agile execution",
      "Receive tailored guidance during an extended, transparent student Q&A and idea critique",
    ],
    timeline: [
      { label: "4:00 PM – Welcome & Entrepreneurial Journey", desc: "Opening remarks and Zahid Akhtar's personal journey navigating startup uncertainties" },
      { label: "Rapid Fire Round", desc: "Provocative debates: 'Gut Feeling vs Market Research' and 'Perfect Plan vs Fast Execution'" },
      { label: "Mindset & Resilience", desc: "Building emotional fortitude, leadership under stress, and finding product-market fit" },
      { label: "Audience Q&A & Idea Pitching", desc: "Students pitch their early ventures and receive constructive, personalized critique" },
      { label: "Felicitation & Vote of Thanks", desc: "Speaker felicitation and concluding reflections on purposeful innovation" },
    ],
  },
  "chai-links-ep01": {
    brief: "ChainLinks Episode 01 at the AIC SOA Foundation Seminar Hall continued GFG ITER's signature Chai Pe Charcha initiative. This edition tackled the technological frontiers of TinyML (embedded machine learning on resource-constrained microcontrollers) and Agentic AI (autonomous reasoning systems) in an approachable, conversation-driven circle format.",
    objectives: [
      "Demystify TinyML: deploying optimized ML models on low-power edge microcontrollers",
      "Understand Agentic AI: autonomous systems that reason, plan, and execute multi-step goals",
      "Engage directly with faculty researchers across CSE domains without classroom hierarchy",
      "Receive personalized research advice, academic guidance, and emerging AI project pathways",
    ],
    timeline: [
      { label: "4:30 PM – Welcome & Theme Framing", desc: "Introduction to edge intelligence, tiny machine learning, and autonomous agents" },
      { label: "Faculty Research Intros", desc: "Mentors Rajesh Purkait, Farida A. Ali, Bharat K. Padhi, Ashis K. Pati, Ishan Ayush, and Dr. Bharat Jyoti Ranjan Sahu" },
      { label: "Interactive Discussion Circles", desc: "Intimate circles exploring TinyML hardware trade-offs and agent deployment over hot chai" },
      { label: "Open Networking & Reflection", desc: "Cross-batch collaboration, project ideas, and concluding informal discussions" },
    ],
  },
  "code-unbound-launch": {
    brief: "Code Unbound marked the historic inaugural ceremony of the GeeksforGeeks (GFG) Student Chapter at ITER, SOA University in the Bansuri Guru Auditorium. The event set the foundational charter for technical workshops, competitive programming leagues, open-source shipping, and campus-wide placements.",
    objectives: [
      "Celebrate the official launch and university charter of GFG ITER Student Chapter",
      "Introduce the executive board, technical leads, and multi-disciplinary domain teams",
      "Engage the audience through a live competitive technical Menti Quiz with awards",
      "Unveil the annual roadmap of hackathons, workshops, bootcamps, and industry collaborations",
    ],
    timeline: [
      { label: "Inaugural Ceremony", desc: "Lighting of the lamp and opening address in Bansuri Guru Auditorium" },
      { label: "Charter & Vision Address", desc: "President and executive leads present the technical and operational roadmap" },
      { label: "Domain Leads Showcase", desc: "Introduction of leads across Web, AI/ML, Cloud, Cyber, and CP domains" },
      { label: "Interactive Menti Quiz & Awards", desc: "Campus-wide tech quiz with live leaderboard and winner felicitation" },
    ],
  },
  "chai-links-ep00": {
    brief: "ChainLinks Episode 0 was the groundbreaking pilot that created a culture of conversation-driven learning at ITER. Organized around the concept of Chai Pe Charcha at the AIC SOA Foundation, it replaced conventional top-down lectures with informal, circle-based dialogue connecting curious students with faculty across emerging technologies.",
    objectives: [
      "Redefine faculty-student dialogue through approachable, informal discussion circles",
      "Gain direct exposure to technical research across AI/ML, IoT, Cloud, and Networking",
      "Discuss project ideas, career doubts, and higher education paths in a relaxed environment",
      "Establish strong peer-to-peer academic and collaborative networks across departments",
    ],
    timeline: [
      { label: "4:00 PM – Welcome & Orientation", desc: "Framing the Chai Pe Charcha model and faculty introductions" },
      { label: "Circle Formation", desc: "Participants join dedicated circles for AI/ML, IoT, Cloud, and Networking" },
      { label: "Open-Floor Conversations", desc: "Dynamic discussions on research, projects, and emerging tech over tea" },
      { label: "Informal Networking", desc: "Peer connections and closing thoughts on collaborative student learning" },
    ],
  },
};

const FALLBACK_COPY = {
  brief: "A flagship event by GFG ITER designed to push boundaries, build skills, and connect the brightest engineering minds on campus. Every session is crafted to deliver real, tangible outcomes — not just attendance certificates.",
  objectives: [
    "Hands-on learning with real-world engineering challenges",
    "Direct mentorship from industry professionals and seniors",
    "Networking with like-minded builders across disciplines",
    "Tangible outcomes — projects shipped, skills gained",
  ],
  timeline: [
    { label: "Check-In", desc: "Registration and team formation" },
    { label: "Main Event", desc: "Core sessions, workshops, or competition rounds" },
    { label: "Showcase", desc: "Presentations, demos, or results announcement" },
    { label: "Networking", desc: "Connect with peers, mentors, and speakers" },
  ],
};

function EventDetails() {
  const event = Route.useLoaderData();
  const [registered, setRegistered] = useState(false);
  const [open, setOpen] = useState(false);
  const copy = EVENT_COPY[event.id] || FALLBACK_COPY;

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
    setTimeout(() => setOpen(false), 1500);
  };

  const statusColor = event.status === "upcoming"
    ? "text-amber-400 border-amber-400/30 bg-amber-400/10"
    : event.status === "ongoing"
    ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
    : "text-slate-400 border-slate-500/30 bg-slate-500/10";

  const statusLabel = event.status === "upcoming"
    ? "UPCOMING"
    : event.status === "ongoing"
    ? "LIVE"
    : "ARCHIVED";

  return (
    <div className="pb-24 pt-10">
      <div className="container-page">

        {/* ── 1. COMMAND BREADCRUMB ──────────────────────────────────── */}
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
          <Link to="/events" search={{ tab: event.status }} className="hover:text-brand transition-colors flex items-center gap-1.5">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Events</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
          <span className="text-brand/70">{event.category}</span>
          <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
          <span className="text-foreground/80 truncate max-w-[200px]">{event.title}</span>
        </div>

        {/* ── 2. HERO BANNER ─────────────────────────────────────────── */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-hairline" style={{ height: "clamp(280px, 45vh, 480px)" }}>
          <img src={event.image} alt={event.title} className="absolute inset-0 h-full w-full object-cover" />
          {/* Diagonal gradient overlay */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(4,7,5,0.95) 0%, rgba(4,7,5,0.7) 40%, rgba(4,7,5,0.3) 70%, transparent 100%)",
          }} />
          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040705] via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            {/* Status badge */}
            <div className="flex items-center gap-3 mb-5">
              <span className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-[10px] font-bold tracking-[0.2em] font-mono ${statusColor}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${event.status === "ongoing" ? "bg-emerald-400 animate-pulse" : event.status === "upcoming" ? "bg-amber-400" : "bg-slate-400"}`} />
                {statusLabel}
              </span>
              <span className="rounded-md border border-hairline bg-white/5 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-white/70 font-mono">
                {event.category.toUpperCase()}
              </span>
            </div>

            {/* Title with terminal cursor */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              {event.title}
              <span className="inline-block w-[3px] h-[0.85em] bg-brand ml-2 animate-pulse rounded-sm align-baseline" />
            </h1>
          </div>
        </div>

        {/* ── 3. MISSION CONSOLE — Status Bar ────────────────────────── */}
        <div className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-2 rounded-xl border border-hairline bg-[#0a0f0c] px-5 py-3.5 font-mono text-xs">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-brand/70" />
            <span>{event.date}</span>
          </div>
          <span className="text-muted-foreground/30 mx-2">│</span>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-brand/70" />
            <span>4:00 PM – 6:00 PM IST</span>
          </div>
          <span className="text-muted-foreground/30 mx-2 hidden sm:inline">│</span>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-brand/70" />
            <span>{event.venue}</span>
          </div>
          <span className="text-muted-foreground/30 mx-2 hidden md:inline">│</span>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users className="h-3.5 w-3.5 text-brand/70" />
            <span>80+ Builders</span>
          </div>
        </div>

        {/* ── 4. TWO-COLUMN INTEL SECTION ─────────────────────────────── */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">

          {/* Left: Mission Brief */}
          <div className="space-y-6">
            {/* Brief */}
            <div className="rounded-2xl border border-hairline bg-surface-elevated p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center">
                  <Terminal className="h-4 w-4 text-brand" />
                </div>
                <h2 className="text-lg font-bold tracking-tight">Mission Brief</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {copy.brief}
              </p>
            </div>

            {/* Objectives */}
            <div className="rounded-2xl border border-hairline bg-surface-elevated p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center">
                  <Target className="h-4 w-4 text-brand" />
                </div>
                <h2 className="text-lg font-bold tracking-tight">Objectives</h2>
              </div>
              <ul className="space-y-2.5">
                {copy.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-brand/60 mt-0.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Crew & CTA */}
          <div className="space-y-6">
            {/* Crew Dossier */}
            <div className="rounded-2xl border border-hairline bg-surface-elevated overflow-hidden">
              <div className="border-b border-hairline px-6 py-4 flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-lg bg-brand/10 flex items-center justify-center">
                  <User className="h-3.5 w-3.5 text-brand" />
                </div>
                <h3 className="font-bold text-sm tracking-tight">Crew Dossier</h3>
              </div>
              <div className="p-6 space-y-4">
                {event.speakers.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl border border-hairline/50 bg-[#0a0f0c] p-4">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center overflow-hidden">
                        <User className="h-5 w-5 text-brand/50" />
                      </div>
                      {/* Online dot */}
                      <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0a0f0c] bg-brand" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm truncate">{s.name}</div>
                      <div className="text-[11px] font-mono text-brand/70 tracking-wide uppercase">{s.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            {event.status === "upcoming" ? (
              <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="h-4 w-4 text-brand" />
                  <h3 className="font-bold text-sm">Secure Your Spot</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-5">Limited seats. Registration closes 24 hours before the event.</p>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-brand text-brand-foreground hover:bg-brand/90 font-bold h-12 w-full text-sm shadow-[0_0_20px_rgba(0,230,118,0.15)]">
                      Register Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    {!registered ? (
                      <form onSubmit={handleRegister}>
                        <DialogHeader>
                          <DialogTitle>Register for {event.title}</DialogTitle>
                          <DialogDescription>
                            Complete the form below to lock in your spot.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-6">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" required placeholder="Your full name" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" required placeholder="you@iter.ac.in" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="branch">Branch & Year</Label>
                            <Input id="branch" required placeholder="CSE, 3rd Year" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="w-full bg-brand text-brand-foreground hover:bg-brand/90 font-semibold">
                            Confirm Registration
                          </Button>
                        </DialogFooter>
                      </form>
                    ) : (
                      <div className="py-12 text-center flex flex-col items-center">
                        <CheckCircle2 className="h-16 w-16 text-brand mb-4" />
                        <DialogTitle className="text-2xl">You're in!</DialogTitle>
                        <DialogDescription className="mt-2 text-base">
                          Registration confirmed. We'll send you a reminder before the event.
                        </DialogDescription>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            ) : (
              <div className="rounded-2xl border border-hairline bg-surface-elevated p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{event.status === "ongoing" ? "Event In Progress" : "Mission Complete"}</h3>
                    <p className="text-[11px] text-muted-foreground">
                      {event.status === "ongoing" ? "This event is currently running." : "This event has concluded successfully."}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-hairline">
                  <p className="text-xs text-muted-foreground">
                    Have questions? Reach us at{" "}
                    <a href="mailto:gfgiter@gmail.com" className="text-brand hover:underline">gfgiter@gmail.com</a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── 5. EVENT TIMELINE — Git Commit Style ────────────────────── */}
        <div className="mt-6 rounded-2xl border border-hairline bg-surface-elevated p-8 md:p-10">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center">
              <GitBranch className="h-4 w-4 text-brand" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Event Flow</h2>
          </div>

          <div className="relative ml-4">
            {copy.timeline.map((step, i) => {
              const isLast = i === copy.timeline.length - 1;
              return (
                <div key={i} className="relative flex gap-5 pb-8 last:pb-0">
                  {/* Vertical connector */}
                  {!isLast && (
                    <div className="absolute left-[7px] top-[18px] bottom-0 w-[2px] bg-gradient-to-b from-brand/30 to-brand/10" />
                  )}
                  {/* Node */}
                  <div className="relative z-10 mt-1 shrink-0">
                    <div className={`h-4 w-4 rounded-full border-2 ${i === 0 ? "border-brand bg-brand/30" : "border-brand/40 bg-[#0a0f0c]"}`} />
                  </div>
                  {/* Content */}
                  <div className="min-w-0 pt-0">
                    <div className="font-semibold text-sm text-foreground">{step.label}</div>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 6. GALLERY — Bento Grid ────────────────────────────────── */}
        <div className="mt-6 rounded-2xl border border-hairline bg-surface-elevated p-8 md:p-10">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center">
              <Code2 className="h-4 w-4 text-brand" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Event Gallery</h2>
          </div>
          {(() => {
            const galleryImages = (event as any).gallery && (event as any).gallery.length >= 5
              ? (event as any).gallery
              : [
                  event.image,
                  "/events/annual_p12_X42.jpg",
                  "/events/annual_p16_X60.png",
                  "/events/annual_p14_X54.png",
                  "/events/annual_p10_X34.png",
                ];
            const mainImg = galleryImages[0];
            const secondaryImgs = galleryImages.slice(1, 5);

            return (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[350px] md:h-[420px]">
                <div className="col-span-2 row-span-2 rounded-xl overflow-hidden border border-hairline relative group">
                  <img
                    src={mainImg}
                    alt={`${event.title} highlight`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 text-xs font-mono text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {event.id}_highlight.jpg
                  </div>
                </div>
                {secondaryImgs.map((src: string, i: number) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-hairline relative group">
                    <img
                      src={src}
                      alt={`${event.title} moment ${i + 2}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {event.id}_moment_{String(i + 2).padStart(2, "0")}.jpg
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
