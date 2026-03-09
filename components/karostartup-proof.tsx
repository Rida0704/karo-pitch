"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Newspaper, Users, Rocket } from "lucide-react";

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Years of founder storytelling",
    icon: Rocket,
  },
  {
    value: 5000,
    suffix: "+",
    label: "Startup stories and ecosystem narratives",
    icon: Newspaper,
  },
  {
    value: 1,
    suffix: "M+",
    label: "Community reach across founders and startup audiences",
    icon: Users,
  },
];

export function KaroStartupProof() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-30 bg-[#0F0F11]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="glass inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">
              About KaroStartup
            </div>

            <h2 className="mt-6 text-[2.7rem] font-[800] leading-[0.96] tracking-[-0.05em] text-white sm:text-[3.7rem] lg:text-[4.8rem]">
              Built on top of a platform that has already earned founder trust.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A1A1AA] sm:text-xl">
              KaroStartup has spent years building founder visibility through stories, startup
              media, ecosystem content, and a growing community around Indian entrepreneurship.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#A1A1AA] sm:text-xl">
              Karo Pitch extends that foundation into a sharper platform layer — one focused on
              startup discovery, curated selection, investor access, and founder momentum.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="glass-strong rounded-[30px] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#FFB703]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="mt-5 text-[2.9rem] font-[800] leading-none tracking-[-0.05em] text-white">
                    <CountUp end={stat.value} duration={2.2} enableScrollSpy scrollSpyOnce />
                    {stat.suffix}
                  </div>

                  <p className="mt-4 text-base leading-7 text-[#A1A1AA]">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}