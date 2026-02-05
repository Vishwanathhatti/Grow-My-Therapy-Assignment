import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { SpecialtiesSection } from "@/components/sections/specialties-section";
import { SymptomsSection } from "@/components/sections/symptoms-section";
import { FaqSection } from "@/components/sections/faq-section";
import { EducationSection } from "@/components/sections/education-section";
import { AboutSection } from "@/components/sections/about-section";
import { CtaSection } from "@/components/sections/cta-section";
import { OfficeSection } from "@/components/sections/office-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <div className="pt-20"> {/* Padding for fixed header */}
        <HeroSection />
        <IntroSection />
        <SpecialtiesSection />
        <SymptomsSection />
        <FaqSection />
        <EducationSection />
        <AboutSection />
        <OfficeSection />
        <CtaSection />
      </div>
      <Footer />
    </main>
  );
}
