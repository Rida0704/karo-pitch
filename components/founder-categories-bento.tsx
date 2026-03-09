"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Factory,
  Landmark,
  MonitorSmartphone,
  Package2,
  BriefcaseBusiness,
} from "lucide-react";

const categories = [
  {
    title: "D2C Brands",
    text: "Consumer-first businesses building memorable products, strong repeat behavior, and modern Bharat distribution.",
    icon: ShoppingBag,
    className: "lg:col-span-2",
  },
  {
    title: "MSMEs",
    text: "Operationally strong businesses ready for sharper visibility, systems, and capital-led acceleration.",
    icon: BriefcaseBusiness,
    className: "",
  },
  {
    title: "Consumer Startups",
    text: "Modern Indian brands and product-led ventures shaped by category insight and community-led demand.",
    icon: Landmark,
    className: "",
  },
  {
    title: "SaaS Startups",
    text: "Software companies solving real workflow and operational problems for Indian and global markets.",
    icon: MonitorSmartphone,
    className: "",
  },
  {
    title: "Manufacturing",
    text: "Founders building in India’s real economy across textiles, industrial supply, packaging, and production infrastructure.",
    icon: Factory,
    className: "lg:row-span-2",
  },
  {
    title: "Bharat-focused Startups",
    text: "Businesses designed for regional markets, local language behavior, emerging demand, and underserved user segments.",
    icon: Package2,
    className: "lg:col-span-2",
  },
];

export function FounderCategoriesBento() {
  return (
    <section id="categories" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-30 bg-[#0F0F11]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="max-w-4xl"
        >
          <div className="glass inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">
            Who can apply
          </div>

          <h2 className="mt-6 text-[2.7rem] font-[800] leading-[0.96] tracking-[-0.05em] text-white sm:text-[3.7rem] lg:text-[4.8rem]">
            Built for the startups shaping India’s next growth wave.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A1A1AA] sm:text-xl">
            Karo Pitch is designed for ambitious founders building real businesses across sectors
            where Bharat demand, execution, and category insight create outsized opportunity.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                className={`group bento-card rounded-[32px] p-8 transition duration-300 hover:-translate-y-1 hover:border-white/15 ${item.className}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#FFB703] transition duration-300 group-hover:bg-[rgba(255,87,34,0.08)]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-[1.9rem] font-bold leading-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[34ch] text-base leading-8 text-[#A1A1AA]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}