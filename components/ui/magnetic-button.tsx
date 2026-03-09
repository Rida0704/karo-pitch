"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/components/ui/cn";
import { MouseEvent } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function MagneticButton({ href, children, variant = "primary", className }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 });
  const rotateX = useTransform(sy, [-8, 8], [6, -6]);
  const rotateY = useTransform(sx, [-8, 8], [-6, 6]);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px * 0.15);
    y.set(py * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: sx, y: sy, rotateX, rotateY, transformPerspective: 900 }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={cn(
          "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-medium transition-transform",
          variant === "primary"
            ? "border border-accent/40 bg-gradient-to-r from-accent to-accent2 text-white shadow-glow"
            : "glass text-text shadow-soft",
          className,
        )}
      >
        <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative z-10">{children}</span>
        <ArrowUpRight className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  );
}
