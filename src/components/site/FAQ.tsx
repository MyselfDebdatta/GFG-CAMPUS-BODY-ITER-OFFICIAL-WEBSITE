import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { Reveal, SectionHeader } from "./Primitives";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "What is the official affiliation of the GFG ITER Student Chapter?",
    answer: "The GeeksforGeeks (GFG) Campus Body @ SOA is an officially recognized student chapter hosted under the Department of Computer Science and Engineering (CSE) at the Institute of Technical Education and Research (ITER), Siksha 'O' Anusandhan (Deemed to be University), Bhubaneswar."
  },
  {
    question: "What is the core motto and mission of the chapter?",
    answer: "Our official chapter motto is 'LEARN. BUILD. SHARE.' Guided by our annual theme ('Empowering Students Through Technology, Mentorship and Community'), we bridge the gap between classroom academic syllabi and fast-paced industry demands through practical hands-on workshops, peer mentorship, and real-world software engineering."
  },
  {
    question: "What technical domains and skills are covered throughout the year?",
    answer: "Through our multi-track Skills Exchange Workshop series and specialized tech tracks, we cover 10+ core CS domains including Data Structures & Algorithms (DSA), AI Automation (n8n/LLMs), Blockchain & Web3, Cloud Computing & Linux, DevOps & CI/CD, Computer Networking, Quantum Computing, Full-Stack Web Development, and Data Science."
  },
  {
    question: "What kind of activities and events does the chapter organize?",
    answer: "Our official annual calendar documents 14+ high-impact activities, including flagship launch summits (such as Code Unbound in the Bansuri Guru Auditorium), signature conversational roundtables (ChaiLinks), 8 hands-on skill exchange workshops, competitive Menti Quizzes, hackathon preparation sessions, and career/placement masterclasses."
  },
  {
    question: "What is 'ChaiLinks' and how does it work?",
    answer: "ChaiLinks ('A Cup that Connects, Conversations that Matter') is our signature informal tech dialogue series. It departs from rigid classroom lectures to foster open peer-to-peer conversations where students, senior core leads, and alumni discuss tech journeys, coding hurdles, project ideas, and interview preparation over tea."
  },
  {
    question: "Who is eligible to join, and is there any registration fee?",
    answer: "Participation is completely free and open to all undergraduate and postgraduate students across all disciplines and batches at ITER, Siksha 'O' Anusandhan. Whether you are a beginner writing your first lines of code or an experienced builder preparing for placements, you are warmly welcomed."
  },
  {
    question: "How can I get involved, join project squads, or apply for core team roles?",
    answer: "You can get involved by joining our official Discord community, attending our weekly workshops and ChaiLinks episodes, and participating in hackathon teams. Dedicated contributors and student volunteers are inducted into core team lead and coordinator roles during our annual chapter recruitment drives."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative z-10 container-page py-24">
      <Reveal>
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Got questions? <span className="text-[#00ff7f]">We've got answers.</span>
            </>
          }
          align="center"
          description="Everything you need to know about the GFG ITER Student Chapter."
        />
      </Reveal>

      <Reveal delay={0.15} className="mt-16 max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={cn(
                  "group relative overflow-hidden rounded-2xl border bg-[#060D09] transition-all duration-300",
                  isOpen ? "border-[#00ff7f]/40 shadow-[0_0_15px_rgba(0,255,127,0.15)]" : "border-white/10 hover:border-[#00ff7f]/20 hover:bg-white/5"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className={cn(
                    "text-lg font-semibold transition-all duration-300",
                    isOpen 
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] via-[#e2da24] to-[#32CD32]" 
                      : "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#32CD32] group-hover:via-[#e2da24] group-hover:to-[#32CD32]"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                    isOpen ? "bg-[#00ff7f]/20 text-[#00ff7f]" : "bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white"
                  )}>
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")} />
                  </div>
                </button>
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
