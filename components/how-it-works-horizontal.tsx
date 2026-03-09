"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FileText,
  BadgeCheck,
  Presentation,
  TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Apply with your pitch deck",
    description:
      "Submit your startup story, founder background, category, traction snapshot, and pitch deck through a streamlined application flow.",
    bullets: ["Pitch deck upload", "Founder profile", "Category", "Traction snapshot"],
    icon: FileText,
  },
  {
    number: "02",
    title: "Get shortlisted by KaroStartup",
    description:
      "Applications are reviewed for clarity, investor relevance, market understanding, storytelling strength, and growth potential.",
    bullets: ["High-signal screening", "Narrative review", "Curated filtering", "Investor relevance"],
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "Pitch live to investors",
    description:
      "Selected founders enter a curated investor room where they present their business, answer questions, and build visibility.",
    bullets: ["Live presentation", "Investor Q&A", "Visibility", "Founder exposure"],
    icon: Presentation,
  },
  {
    number: "04",
    title: "Raise funding and scale",
    description:
      "The strongest startups unlock follow-up conversations, ecosystem access, investor introductions, and growth momentum.",
    bullets: ["Follow-up meetings", "Capital access", "Introductions", "Scale support"],
    icon: TrendingUp,
  },
];

export function HowItWorksHorizontal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getMaxX = () => track.scrollWidth - window.innerWidth + 64;

      gsap.to(track, {
        x: () => -getMaxX(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getMaxX() + 900}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#050816]"
    >
      <div className="absolute inset-0 -z-20 bg-[#050816]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(244,63,94,0.12),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.12),transparent_35%)]" />

      <div
        ref={trackRef}
        className="flex min-h-screen w-max items-center gap-8 px-6 py-20 sm:px-10 lg:px-16"
      >
        {/* intro panel */}
        <div className="flex w-[88vw] max-w-[760px] shrink-0 flex-col justify-center pr-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/55"
          >
            How it works
          </motion.div>

          <h2 className="mt-6 text-[2.8rem] font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[5.1rem]">
            From application to investor room — in four clear steps.
          </h2>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-white/65">
            Karo Pitch is designed as an actual founder journey. As you scroll,
            each stage reveals how startups move from application to investor visibility.
          </p>
        </div>

        {/* cards */}
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="group relative flex h-[610px] w-[360px] shrink-0 flex-col overflow-hidden rounded-[30px] ..."
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />
              <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-pink-500/10 blur-3xl transition duration-500 group-hover:bg-pink-500/20" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[4.2rem] font-bold leading-none tracking-[-0.06em] text-white/15">
                    {step.number}
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4 text-white/80">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="mt-5 text-[2rem] font-bold leading-tight tracking-[-0.04em] text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-white/68">
                  {step.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {step.bullets.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/75"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="rounded-[20px] border border-white/10 bg-[#081021]/70 px-4 py-4 text-sm leading-6 text-white/60">
                    {index === 0 && "Step 1 begins the discovery process and sets the narrative foundation."}
                    {index === 1 && "Step 2 filters for investor-readiness, clarity, and founder signal."}
                    {index === 2 && "Step 3 creates live visibility and direct interaction with investors."}
                    {index === 3 && "Step 4 turns the strongest pitch moments into real growth opportunities."}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* ending spacer */}
        <div className="w-[18vw] shrink-0" />
      </div>
    </section>
  );
}