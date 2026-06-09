import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { ImageSection } from "@/components/landing/image-section";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { Diagnosis } from "@/components/landing/diagnosis";
import { ScoreCard } from "@/components/landing/score-card";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export const metadata = {
  title: "Narron — The Internet Is Already Learning Who You Are",
  description: "Founder positioning intelligence. Discover the perception the market is forming about you — and whether it's helping your business.",
  openGraph: {
    title: "Narron — The Internet Is Already Learning Who You Are",
    description: "Founder positioning intelligence.",
  },
};

export default function Page() {
  return (
    <div className="bg-stage min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <ImageSection />
      <Problem />
      <Solution />
      <Diagnosis />
      <ScoreCard />
      <CTASection />
      <Footer />
    </div>
  );
}