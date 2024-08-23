import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import Testimonials from "@/components/Testimonials";
import SpecialOffers from "@/components/SpecialOffers";
import NewsletterSignup from "@/components/NewsLetterSignUp";
import AboutUs from "@/components/AboutUs";
import ProductCategories from "@/components/ProductCategories";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductCategories />
      <SpecialOffers />
      <Testimonials />
      <NewsletterSignup />
      <AboutUs />
      <Footer />
    </div>
  );
}
