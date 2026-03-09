import { MagneticButton } from "@/components/ui/magnetic-button";

export function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden pb-24 pt-10">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,.20),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(225,29,72,.14),transparent_25%),linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03))] px-6 py-14 shadow-glow backdrop-blur-2xl md:px-12 md:py-20">
          <div className="absolute inset-0 bg-noise opacity-40" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-blue-200">
              Final call to action
            </div>
            <h2 className="mt-6 font-heading text-4xl font-bold tracking-[-0.05em] text-white md:text-7xl">
              Ready to Pitch Your Startup?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              If you are building a high-conviction company with real market insight, Karo Pitch can be the room where your startup gets discovered, understood, and taken seriously by the right investors.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <div className="relative overflow-hidden rounded-full">
                <span className="pointer-events-none absolute inset-0 -translate-x-[120%] animate-sheen bg-[linear-gradient(100deg,transparent,rgba(255,255,255,.35),transparent)]" />
                <MagneticButton href="mailto:business@karostartup.com">Apply Now</MagneticButton>
              </div>
              <div className="relative overflow-hidden rounded-full">
                <span className="pointer-events-none absolute inset-0 -translate-x-[120%] animate-sheen bg-[linear-gradient(100deg,transparent,rgba(255,255,255,.22),transparent)] [animation-delay:1.2s]" />
                <MagneticButton href="mailto:business@karostartup.com?subject=Karo%20Pitch%20Partnership" variant="secondary">
                  Partner With Us
                </MagneticButton>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["Founders", "Apply with your company story, traction, and pitch deck."],
                ["Investors", "Discover a curated set of startups from across Bharat."],
                ["Partners", "Support a platform built to widen startup access in India."],
              ].map(([title, desc]) => (
                <div key={title} className="glass-blue rounded-[24px] p-5 text-left shadow-soft">
                  <div className="text-sm uppercase tracking-[0.2em] text-blue-200">{title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
