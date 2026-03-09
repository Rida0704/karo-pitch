"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";

const links = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#how-it-works" },
  { label: "Categories", href: "#who-can-apply" },
  { label: "Investors", href: "#featured-startups" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-shell pt-4">
        <div className="glass-blue flex items-center justify-between rounded-full px-4 py-3 shadow-soft md:px-6">
          <Link href="#top" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-indigo-400 to-rose-400 font-heading text-lg font-bold text-slate-950">
              K
            </div>
            <div>
              <div className="font-heading text-lg font-bold tracking-[-0.03em] text-white">Karo Pitch</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Built for Bharat founders</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton href="#final-cta" className="px-5 py-2.5 text-sm">
              Apply Now
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
