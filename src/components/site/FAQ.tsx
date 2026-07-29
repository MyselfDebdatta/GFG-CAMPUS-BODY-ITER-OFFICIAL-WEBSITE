import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { Reveal, SectionHeader } from "./Primitives";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Who can join the GFG ITER Student Chapter?",
    answer: "Any student at SOA University who has a passion for technology, coding, or design is welcome to join our community. Whether you're a freshman or a senior, there's a place for you here."
  },
  {
    question: "Do I need to be a coding expert to participate?",
    answer: "Not at all! We believe in learning together. We host beginner-friendly bootcamps alongside advanced system design workshops, so you can start from scratch and grow with us."
  },
  {
    question: "What kind of events do you organize?",
    answer: "Our calendar is packed with hackathons, algorithmic coding contests, open-source contribution drives, expert tech talks, and casual community networking sessions."
  },
  {
    question: "Is there any membership fee?",
    answer: "No, joining the general community and attending most of our standard events is completely free. We believe education and networking should be accessible to everyone."
  },
  {
    question: "Can I contribute if I'm not from a CSE background?",
    answer: "Absolutely. Building great tech requires diverse skills. We have active pods for UI/UX design, marketing, content creation, and event management."
  },
  {
    question: "How can I stay updated on the latest drops?",
    answer: "The best way is to subscribe to our newsletter at the bottom of this page, and follow us on our social media handles (especially Instagram and LinkedIn) to never miss an update."
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
