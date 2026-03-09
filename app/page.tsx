import { AboutStory } from "@/components/about-story";
import { FeaturedStartupsCarousel } from "@/components/featured-startups-carousel";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { FounderCategoriesBento } from "@/components/founder-categories-bento";
import Hero from "@/components/hero";
import { HowItWorksHorizontal } from "@/components/how-it-works-horizontal";
import { InvestorMarquee } from "@/components/investor-marquee";
import { KaroStartupProof } from "@/components/karostartup-proof";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function Page() {
  return (
    <main className="relative overflow-x-clip bg-[#050816] text-white">
      <SmoothScroll />
      <Hero />
      <AboutStory />
      <HowItWorksHorizontal />
      <FounderCategoriesBento />
      <InvestorMarquee />
      <FeaturedStartupsCarousel />
      <KaroStartupProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}