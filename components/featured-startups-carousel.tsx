"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Factory, ShoppingBag, Stethoscope, Sprout, Cpu, Package } from "lucide-react";

const startups = [
  {
    name: "BlueWeave Labs",
    category: "Manufacturing SaaS",
    description:
      "Digitizing textile production, inventory flow, and supplier coordination for industrial clusters across Surat and beyond.",
    icon: Factory,
    tag: "Cluster advantage",
  },
  {
    name: "PinkCircuit",
    category: "D2C Commerce",
    description:
      "A modern jewellery commerce brand built on regional demand, creator-led growth, and high repeat behavior.",
    icon: ShoppingBag,
    tag: "Consumer momentum",
  },
  {
    name: "MedAxis Grid",
    category: "HealthTech",
    description:
      "Workflow software helping clinics manage diagnostics coordination, scheduling, and patient operations at scale.",
    icon: Stethoscope,
    tag: "Ops efficiency",
  },
  {
    name: "KrishiLink AI",
    category: "Agri Intelligence",
    description:
      "AI-led demand and supply forecasting tools for agri businesses moving produce from farm clusters to market.",
    icon: Sprout,
    tag: "Bharat opportunity",
  },
  {
    name: "VyapaarStack",
    category: "MSME Software",
    description:
      "Helping small and mid-sized businesses run orders, ledgers, supplier workflows, and collections from one system.",
    icon: Cpu,
    tag: "Clear monetization",
  },
  {
    name: "AaharFlow",
    category: "Food Supply Tech",
    description:
      "Bringing better procurement visibility and inventory planning to regional food distribution networks.",
    icon: Package,
    tag: "Distribution depth",
  },
];

export function FeaturedStartupsCarousel() {
  return (
    <section id="startups" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-30 bg-[#0F0F11]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,87,34,0.08),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,183,3,0.07),transparent_20%),radial-gradient(circle_at_55%_80%,rgba(255,87,34,0.06),transparent_28%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="max-w-4xl"
        >
          <div className="glass inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">
            Featured startups
          </div>

          <h2 className="mt-6 text-[2.7rem] font-[800] leading-[0.96] tracking-[-0.05em] text-white sm:text-[3.7rem] lg:text-[4.8rem]">
            A glimpse into the kind of companies Karo Pitch is built to surface.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A1A1AA] sm:text-xl">
            These example profiles represent the kind of founder signal Karo Pitch is designed to
            discover: real market depth, real execution, and real potential across Bharat-first
            categories.
          </p>
        </motion.div>

        <div className="mt-14 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
            className="flex w-max gap-5"
          >
            {[...startups, ...startups].map((startup, index) => {
              const Icon = startup.icon;
              return (
                <div
                  key={`${startup.name}-${index}`}
                  className="bento-card w-[340px] shrink-0 rounded-[32px] p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#FFB703]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[#A1A1AA]">
                      {startup.tag}
                    </div>
                  </div>

                  <h3 className="mt-6 text-[1.75rem] font-bold leading-tight text-white">
                    {startup.name}
                  </h3>

                  <div className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-[#FFB703]">
                    {startup.category}
                  </div>

                  <p className="mt-5 text-base leading-7 text-[#A1A1AA]">
                    {startup.description}
                  </p>

                  <div className="mt-7 inline-flex items-center text-sm font-semibold text-white">
                    View startup
                    <ArrowUpRight className="ml-2 h-4 w-4 text-[#FFB703]" />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}