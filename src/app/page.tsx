import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import Testimonials from "@/components/Testimonials";
import SpecialOffers from "@/components/SpecialOffers";
import NewsletterSignup from "@/components/NewsLetterSignUp";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Testimonials />
      <SpecialOffers />
      <NewsletterSignup />
      <AboutUs />
      <Footer />
    </div>
  );
}
