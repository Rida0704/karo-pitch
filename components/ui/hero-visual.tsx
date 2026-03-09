"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Building2, CircleDollarSign, MapPinned, Sparkles } from "lucide-react";

const cities = [
  { name: "Indore", x: "18%", y: "32%" },
  { name: "Surat", x: "28%", y: "58%" },
  { name: "Mysuru", x: "58%", y: "76%" },
  { name: "Kochi", x: "52%", y: "88%" },
  { name: "Lucknow", x: "66%", y: "30%" },
  { name: "Guwahati", x: "82%", y: "46%" },
];

export function HeroVisual() {
  return (
    <div className="relative hidden min-h-[680px] lg:block">
      <div className="absolute inset-0 rounded-[42px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(85,110,255,.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.02))] backdrop-blur-2xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute inset-8 overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,13,31,.92),rgba(11,18,42,.7))]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,.24),transparent_30%),radial-gradient(circle_at_25%_78%,rgba(226,29,72,.18),transparent_24%)]" />
        <div className="absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.22),rgba(91,111,255,.08)_35%,transparent_62%)] blur-[2px]" />
        <div className="absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-28 h-[300px] w-[300px] -translate-x-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-40 h-[180px] w-[180px] -translate-x-1/2 rounded-full border border-white/10" />
        <div className="absolute inset-x-16 top-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-y-16 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        {cities.map((city, index) => (
          <motion.div
            key={city.name}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.08, duration: 0.45 }}
            className="absolute"
            style={{ left: city.x, top: city.y }}
          >
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs text-slate-200 shadow-[0_0_30px_rgba(91,111,255,.18)] backdrop-blur-xl">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-rose-300" />
              </span>
              {city.name}
            </div>
          </motion.div>
        ))}

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-8 top-8 w-[250px] rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-slate-300">
            <span>Selection board</span>
            <BadgeCheck className="size-4 text-blue-300" />
          </div>
          <div className="mt-5 font-heading text-2xl font-bold tracking-[-0.05em] text-white">Investor-ready startups from Bharat.</div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <div className="text-slate-400">Applications</div>
              <div className="mt-2 text-2xl font-bold text-white">1,200+</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <div className="text-slate-400">Shortlist rate</div>
              <div className="mt-2 text-2xl font-bold text-white">Top 6%</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-8 w-[285px] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,24,48,.88),rgba(23,32,62,.66))] p-5 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-300">Founder spotlight</div>
              <div className="mt-3 font-heading text-2xl font-bold tracking-[-0.05em] text-white">BlueWeave Labs</div>
              <div className="mt-1 text-sm text-blue-300">Supply-chain software for regional manufacturers</div>
            </div>
            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-3 text-blue-200">
              <Building2 className="size-5" />
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Helping textile units across Surat, Tiruppur, and Jaipur digitize orders, inventory, and factory coordination.
          </p>
          <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-slate-300">
            <span>Live investor room</span>
            <ArrowUpRight className="size-4 text-white" />
          </div>
        </motion.div>

        <motion.div
          animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-10 top-10 flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-slate-200 backdrop-blur-xl"
        >
          <Sparkles className="size-4 text-rose-300" />
          Discovery beyond metro networks
        </motion.div>

        <motion.div
          animate={{ x: [0, -8, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-10 flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-slate-200 backdrop-blur-xl"
        >
          <MapPinned className="size-4 text-blue-300" />
          Tier-2 & Tier-3 India
        </motion.div>

        <motion.div
          animate={{ x: [0, 10, 0], y: [0, -6, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[42%] top-[58%] flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 text-sm text-slate-200 backdrop-blur-xl"
        >
          <CircleDollarSign className="size-4 text-emerald-300" />
          Curated capital access
        </motion.div>
      </motion.div>
    </div>
  );
}
