"use client";

import { Instagram, Linkedin, Youtube, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#journey" },
    { label: "Categories", href: "#categories" },
    { label: "Startups", href: "#startups" },
  ],
  Company: [
    { label: "KaroStartup", href: "#" },
    { label: "Investors", href: "#investors" },
    { label: "Apply", href: "#apply" },
    { label: "Partner", href: "#" },
  ],
  Social: [
    { label: "Instagram", href: "https://www.instagram.com/karo_startup_/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/karo-startup/" },
    { label: "YouTube", href: "https://www.youtube.com/@karostartup/videos" },
    { label: "Website", href: "https://www.karostartup.com/" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/karo_startup_/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/karo-startup/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@karostartup/videos", label: "YouTube" },
  { icon: Twitter, href: "https://x.com/karo_startup", label: "X" },
  { icon: Facebook, href: "https://www.facebook.com/karostartup", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-4 pb-10 pt-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-30 bg-[#0F0F11]" />

      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-white/10 bg-[rgba(28,28,30,0.62)] px-6 py-8 backdrop-blur-xl sm:px-8 lg:px-10">
          <div className="grid gap-10 border-b border-white/10 pb-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FFB703] via-[#FF8A3D] to-[#FF5722] text-lg font-bold text-black">
                  K
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Karo Pitch</div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#A1A1AA]">
                    Built for Bharat founders
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#A1A1AA]">
                A curated startup discovery and investor access platform designed to help promising
                founders from across Bharat move from visibility gaps to meaningful capital
                conversations.
              </p>
            </div>

            {/* Right */}
            <div className="grid gap-8 sm:grid-cols-3">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <div className="text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">
                    {title}
                  </div>

                  <div className="mt-4 space-y-3">
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="block text-base text-white/90 transition hover:text-[#FFB703]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-[#A1A1AA]">
              © 2026 Karo Pitch. Demo concept website for founder-investor discovery.
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-white/15 hover:text-[#FFB703]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}