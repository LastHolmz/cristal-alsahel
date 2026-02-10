import LandingHeader from "@/components/landing/header";
import HeroSection from "@/components/landing/hero";
import AboutSection from "@/components/landing/about";
import ServicesSection from "@/components/landing/services";
import ProductsSection from "@/components/landing/products";
import LegalSection from "@/components/landing/legal";
import ContactSection from "@/components/landing/contact";
import FooterSection from "@/components/landing/footer";
import { data } from "@/lib/data";

export default function Page() {
  const { footer } = data;
  return (
    <main className="relative">
      <LandingHeader />
      <HeroSection />
      <AboutSection />
      {/* <PartnersSection /> */}
      <ServicesSection />
      <ProductsSection />
      <LegalSection />
      <ContactSection />
      <FooterSection {...footer} />
    </main>
  );
}
