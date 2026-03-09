"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, CheckCircle2, MapPin, BriefcaseBusiness } from "lucide-react";

const headline = ["Pitch", "Your", "Startup", "to", "India’s", "Top", "Investors."];

const categories = ["D2C", "MSME", "Manufacturing", "SaaS", "Consumer", "Bharat-first"];

const startups = [
  {
    name: "BlueWeave Labs",
    city: "Surat",
    category: "Manufacturing SaaS",
    note: "Digitizing textile supply chains for Indian clusters.",
  },
  {
    name: "AaharFlow",
    city: "Lucknow",
    category: "Consumer Supply Tech",
    note: "Streamlining food distribution operations across regional markets.",
  },
  {
    name: "VyapaarStack",
    city: "Indore",
    category: "MSME Software",
    note: "Helping small businesses run orders, collections, and supplier workflows.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-6 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-30 bg-[#0F0F11]" />
      <div className="hero-glow -z-20" />
      <div className="grid-noise -z-10" />

      <div className="mx-auto max-w-7xl">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass relative mb-10 flex items-center justify-between rounded-full px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FFB703] via-[#FF8A3D] to-[#FF5722] text-lg font-bold text-black">
              K
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight text-white">Karo Pitch</div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#A1A1AA]">
                Built for Bharat founders
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-10 md:flex">
            <a href="#about" className="text-lg text-[#A1A1AA] transition hover:text-white">
              About
            </a>
            <a href="#journey" className="text-lg text-[#A1A1AA] transition hover:text-white">
              Journey
            </a>
            <a href="#categories" className="text-lg text-[#A1A1AA] transition hover:text-white">
              Categories
            </a>
            <a href="#investors" className="text-lg text-[#A1A1AA] transition hover:text-white">
              Investors
            </a>
          </div>

          <a
            href="#apply"
            className="saffron-button hidden rounded-full px-7 py-4 text-lg font-semibold transition duration-300 hover:scale-[1.03] md:inline-flex"
          >
            Apply Now
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </motion.nav>

        <div className="grid min-h-[calc(100vh-120px)] items-center gap-14 pb-16 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[#A1A1AA]"
            >
              <Sparkles className="h-4 w-4 text-[#FFB703]" />
              Curated investor access for Bharat’s builders
            </motion.div>

            <h1 className="max-w-4xl text-[3.2rem] font-[800] leading-[0.95] tracking-[-0.06em] text-white sm:text-[4.8rem] lg:text-[6rem]">
              {headline.map((word, i) => (
                <motion.span
                  key={word + i}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                  className="mr-[0.18em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.65 }}
              className="mt-8 max-w-3xl text-xl leading-9 text-[#A1A1AA] sm:text-2xl"
            >
              Karo Pitch is a curated discovery and fundraising platform where ambitious founders
              from across India can apply, get shortlisted, and present their startups to
              investors, operators, and ecosystem leaders looking for the next breakout business
              from Bharat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.65 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#apply"
                className="saffron-button inline-flex items-center rounded-full px-8 py-4 text-lg font-semibold transition duration-300 hover:scale-[1.03]"
              >
                Apply to Pitch
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href="#startups"
                className="outline-button inline-flex items-center rounded-full px-8 py-4 text-lg font-semibold transition duration-300 hover:scale-[1.03]"
              >
                Explore Startups
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.65 }}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              <InfoCard
                title="Founder-first"
                text="Built to spotlight promising startups from Tier-2 and Tier-3 India."
              />
              <InfoCard
                title="Investor-grade"
                text="Structured discovery, sharper storytelling, and high-signal curation."
              />
              <InfoCard
                title="Built for scale"
                text="From pitch submission to investor room, every stage is designed for momentum."
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="relative"
          >
            <div className="glass-strong relative mx-auto max-w-[620px] overflow-hidden rounded-[36px] p-6">
              <motion.div
                animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.04, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[rgba(255,87,34,0.16)] blur-3xl"
              />
              <motion.div
                animate={{ opacity: [0.08, 0.18, 0.08], scale: [1, 1.05, 1] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[rgba(255,183,3,0.10)] blur-3xl"
              />

              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(28,28,30,0.72),rgba(18,18,20,0.86))] p-6">
                {/* subtle shimmer */}
                <motion.div
                  animate={{ x: ["-120%", "140%"] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  className="pointer-events-none absolute top-0 h-full w-24 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)] blur-md"
                />

                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="glass rounded-full px-4 py-2 text-sm text-white">
                    Investor Room Snapshot
                  </div>
                  <div className="glass rounded-full px-4 py-2 text-sm text-[#A1A1AA]">
                    Bharat-wide discovery
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <MetricCard value="1,200+" label="Applications received" />
                  <MetricCard value="Top 6%" label="Shortlisted for investor room" />
                  <MetricCard value="40+" label="Curated investor conversations" />
                  <MetricCard value="6" label="High-signal startup categories" />
                </div>

                <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">
                    Active categories
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {categories.map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/85 transition duration-300 hover:-translate-y-0.5 hover:border-white/15"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">
                    <BriefcaseBusiness className="h-4 w-4 text-[#FFB703]" />
                    Live founder queue
                  </div>

                  <div className="mt-4 space-y-3">
                    {startups.map((startup, i) => (
                      <motion.div
                        key={startup.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                        whileHover={{ y: -3 }}
                        className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-white/15"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-lg font-semibold text-white">{startup.name}</div>
                            <div className="mt-1 flex items-center gap-2 text-sm text-[#A1A1AA]">
                              <MapPin className="h-4 w-4 text-[#FFB703]" />
                              {startup.city}
                            </div>
                          </div>
                          <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80">
                            {startup.category}
                          </div>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[#A1A1AA]">{startup.note}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="mt-5 flex items-center justify-between rounded-[24px] border border-white/10 bg-[rgba(255,87,34,0.08)] px-5 py-4 transition duration-300 hover:border-white/15"
                >
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-[#A1A1AA]">
                      What Karo Pitch enables
                    </div>
                    <div className="mt-1 text-lg font-semibold text-white">
                      Discovery → Shortlist → Live Investor Access
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-[#FFB703]" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="glass rounded-[26px] p-6">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-lg leading-8 text-[#A1A1AA]">{text}</p>
    </div>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-white/15"
    >
      <motion.div
        animate={{ opacity: [1, 0.92, 1] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        className="text-[2.3rem] font-[800] leading-none tracking-[-0.04em] text-white"
      >
        {value}
      </motion.div>
      <div className="mt-3 text-sm leading-6 text-[#A1A1AA]">{label}</div>
    </motion.div>
  );
}