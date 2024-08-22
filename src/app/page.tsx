import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import CompanyOverview from "@/components/CompanyOverview";
import Offerings from "@/components/Offerings";
import TargetAudience from "@/components/TargetAudience";
import Competitors from "@/components/Competitors";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CompanyOverview />
      <Offerings />
      <TargetAudience />
      <Competitors />
      <Footer />
    </div>
  );
}
