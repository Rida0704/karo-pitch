"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe2, Users, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Globe2,
    title: "Beyond metro visibility",
    text: "Karo Pitch is designed to surface founders building real businesses outside the usual startup spotlight.",
  },
  {
    icon: Users,
    title: "Built for Bharat founders",
    text: "From Tier-2 and Tier-3 cities to manufacturing belts and emerging consumer markets, the platform is designed for Indian founder reality.",
  },
  {
    icon: TrendingUp,
    title: "From story to signal",
    text: "The goal is not just awareness. It is sharper positioning, stronger investor relevance, and better access to capital.",
  },
];

export function AboutStory() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-30 bg-[#0F0F11]" />
      <div className="hero-glow -z-20" />
      <div className="grid-noise -z-10" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[#A1A1AA]">
            <Sparkles className="h-4 w-4 text-[#FFB703]" />
            Why Karo Pitch exists
          </div>

          <h2 className="mt-6 text-[2.7rem] font-[800] leading-[0.96] tracking-[-0.05em] text-white sm:text-[3.7rem] lg:text-[4.8rem]">
            Built for founders creating real businesses across Bharat.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A1A1AA] sm:text-xl">
            Thousands of founders are building valuable businesses across India in D2C,
            manufacturing, SaaS, consumer brands, and MSMEs. But access to investors is still
            concentrated, fragmented, and often unfairly limited by geography.
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#A1A1AA] sm:text-xl">
            Karo Pitch is designed to change that. It creates a more structured path from discovery
            to shortlist to live pitch, helping promising founders become visible to capital,
            operators, and ecosystem leaders.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-[32px] p-7 sm:col-span-2"
          >
            <div className="text-sm uppercase tracking-[0.28em] text-[#A1A1AA]">
              The mission
            </div>
            <p className="mt-5 text-[1.45rem] font-semibold leading-9 text-white sm:text-[1.65rem]">
              Make investor discovery in India more accessible, more merit-driven, and more
              founder-friendly for startups built outside the usual networks.
            </p>
          </motion.div>

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="bento-card rounded-[30px] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#FFB703]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white">{pillar.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#A1A1AA]">{pillar.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}