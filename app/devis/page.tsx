import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FloatingContact from "@/components/floating-contact"
import MobileHeightFix from "@/components/mobile-height-fix"
import Image from "next/image"
import SocialSection from "@/components/social-section"
import QuoteForm from "@/components/quote-form"
import AnimatedBackground from "@/components/animated-background"

export default function QuotePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MobileHeightFix />

      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-24 relative bg-[#233b5d] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/bg-2.jpg?height=600&width=1920"
            alt="Demandez un devis gratuit - Cabinet Rmili & Associés"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#233b5d]/80 to-[#233b5d]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Demandez Maintenant Votre DEVIS Gratuit</h1>
            <div className="h-1 w-24 bg-[#cca234] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Un premier rendez-vous gratuit avec un expert comptable pour l'état des lieux comptable, fiscal et social
              de votre société.
            </p>
          </div>
        </div>

        <div className="h-16 bg-gradient-to-b from-[#233b5d] to-white"></div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <AnimatedBackground className="opacity-30" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column - Benefits */}
            <div className="md:col-span-5">
              <div className="h-1 w-12 bg-[#cca234] mb-6"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d] mb-8">Pourquoi demander un devis?</h2>

              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-[#cca234]">
                  <h3 className="text-lg font-bold text-[#233b5d] mb-2">Évaluation personnalisée</h3>
                  <p className="text-gray-700">
                    Obtenez une évaluation précise de vos besoins comptables, fiscaux et sociaux adaptée à votre
                    entreprise.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-[#cca234]">
                  <h3 className="text-lg font-bold text-[#233b5d] mb-2">Transparence des tarifs</h3>
                  <p className="text-gray-700">
                    Recevez une proposition détaillée avec des tarifs clairs et sans surprise pour nos services.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-[#cca234]">
                  <h3 className="text-lg font-bold text-[#233b5d] mb-2">Conseil d'expert gratuit</h3>
                  <p className="text-gray-700">
                    Profitez d'un premier rendez-vous gratuit avec un expert-comptable pour faire le point sur votre
                    situation.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-[#cca234]">
                  <h3 className="text-lg font-bold text-[#233b5d] mb-2">Solution sur mesure</h3>
                  <p className="text-gray-700">
                    Nous élaborons une solution adaptée à vos besoins spécifiques et à la taille de votre entreprise.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="md:col-span-7">
              <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-[#233b5d] mb-6 text-center">
                  Remplissez le formulaire ci-dessous
                </h2>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Notre processus</h2>
          </div>

          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-[#cca234]/30 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "Demande",
                  description: "Vous remplissez le formulaire de demande de devis avec vos informations.",
                },
                {
                  step: "Contact",
                  description: "Notre équipe vous contacte sous 24h pour fixer un rendez-vous.",
                },
                {
                  step: "Consultation",
                  description: "Rendez-vous gratuit pour évaluer vos besoins spécifiques.",
                },
                {
                  step: "Proposition",
                  description: "Nous vous envoyons une proposition détaillée adaptée à votre situation.",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {/* Step number */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#233b5d] text-white flex items-center justify-center font-bold text-xl z-10 md:mt-24">
                    {index + 1}
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-8 md:mt-32 text-center h-full">
                    <h3 className="text-xl font-bold text-[#233b5d] mb-3">{item.step}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual divider */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="h-px w-full bg-gray-200 max-w-4xl mx-auto"></div>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Ce que disent nos clients</h2>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#233b5d] rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <p className="text-lg text-gray-700 italic mb-6">
                "Le Cabinet Rmili & Associés a parfaitement compris les besoins de notre entreprise. Leur devis était
                clair et détaillé, et leur accompagnement a été précieux pour optimiser notre gestion comptable et
                fiscale."
              </p>
              <h4 className="text-lg font-bold text-[#233b5d]">Ahmed Benali</h4>
              <p className="text-gray-500 text-sm">Directeur Général, Société XYZ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <SocialSection />

      {/* Footer */}
      <SiteFooter />
      <FloatingContact />
    </div>
  )
}

