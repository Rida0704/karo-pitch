"use client";

import { motion } from "framer-motion";

const investorTypes = [
  "Early-stage VC",
  "Angel Network",
  "Operator Investors",
  "Sector Specialists",
  "Consumer Funds",
  "Bharat-focused Capital",
  "Strategic Angels",
  "Growth Advisors",
];

export function InvestorMarquee() {
  const items = [...investorTypes, ...investorTypes];

  return (
    <section id="investors" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-30 bg-[#0F0F11]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          <div className="glass inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">
            Investor access
          </div>
          <h2 className="mx-auto mt-6 max-w-4xl text-[2.6rem] font-[800] leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.6rem] lg:text-[4.6rem]">
            Meet investors looking for the next breakout startup from Bharat.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#A1A1AA] sm:text-xl">
            Karo Pitch is built to create high-signal discovery between promising founders and the
            investors, operators, and ecosystem leaders who are actively looking for real market
            depth, execution quality, and emerging category winners.
          </p>
        </motion.div>

        <div className="mt-14 space-y-5">
          <div className="glass overflow-hidden rounded-[28px] py-5">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="flex w-max gap-4 px-4"
            >
              {items.map((item, i) => (
                <div
                  key={`${item}-${i}`}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="bento-card rounded-[30px] p-7">
              <div className="text-sm uppercase tracking-[0.28em] text-[#A1A1AA]">
                What they look for
              </div>
              <p className="mt-4 text-lg leading-8 text-white">
                Clear market understanding, founder conviction, investor relevance, and execution
                depth.
              </p>
            </div>

            <div className="bento-card rounded-[30px] p-7">
              <div className="text-sm uppercase tracking-[0.28em] text-[#A1A1AA]">
                Why Karo Pitch matters
              </div>
              <p className="mt-4 text-lg leading-8 text-white">
                It expands investor visibility beyond the same over-networked startup circles.
              </p>
            </div>

            <div className="bento-card rounded-[30px] p-7">
              <div className="text-sm uppercase tracking-[0.28em] text-[#A1A1AA]">
                The outcome
              </div>
              <p className="mt-4 text-lg leading-8 text-white">
                Better discovery, better fit, and more meaningful founder-investor conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}