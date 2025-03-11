import SiteHeader from "@/components/site-header"
import HeroCarousel from "@/components/hero-carousel"
import AboutSection from "@/components/about-section"
import PartnerSection from "@/components/partner-section"
import TestimonialsSection from "@/components/testimonials-section"
import BrandsSection from "@/components/brands-section"
import SocialSection from "@/components/social-section"
import SiteFooter from "@/components/site-footer"
import FloatingContact from "@/components/floating-contact"
import MobileHeightFix from "@/components/mobile-height-fix"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MobileHeightFix />
      <div className="relative">
        <SiteHeader />
        <HeroCarousel />
      </div>
      <main className="flex-1">
        <div className="space-y-8 md:space-y-12">
          <AboutSection />
          <PartnerSection />
          <TestimonialsSection />
          <BrandsSection />
          <SocialSection />
        </div>
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  )
}

