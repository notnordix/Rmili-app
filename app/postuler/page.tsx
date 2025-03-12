import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FloatingContact from "@/components/floating-contact"
import MobileHeightFix from "@/components/mobile-height-fix"
import Image from "next/image"
import SocialSection from "@/components/social-section"
import ApplicationForm from "@/components/application-form"
import { CheckCircle } from "lucide-react"

export default function ApplicationPage() {
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
            alt="Postuler - Cabinet Rmili & Associés"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#233b5d]/80 to-[#233b5d]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Postuler</h1>
            <div className="h-1 w-24 bg-[#cca234] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Rejoignez notre équipe de professionnels et développez votre carrière dans un cabinet dynamique.
            </p>
          </div>
        </div>

        <div className="h-16 bg-gradient-to-b from-[#233b5d] to-white"></div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Form */}
            <div className="lg:col-span-8">
              <div className="h-1 w-12 bg-[#cca234] mb-6"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d] mb-8">Formulaire de candidature</h2>
              <ApplicationForm />
            </div>

            {/* Right Column - Benefits */}
            <div className="lg:col-span-4">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-bold text-[#233b5d] mb-6">Pourquoi nous rejoindre ?</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#cca234] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#233b5d]">Développement professionnel</h4>
                      <p className="text-gray-600 text-sm">
                        Nous offrons des opportunités de formation continue et de développement de carrière.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#cca234] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#233b5d]">Environnement stimulant</h4>
                      <p className="text-gray-600 text-sm">
                        Travaillez sur des projets variés et relevez des défis intellectuels enrichissants.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#cca234] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#233b5d]">Équipe dynamique</h4>
                      <p className="text-gray-600 text-sm">
                        Rejoignez une équipe de professionnels passionnés et collaboratifs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#cca234] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#233b5d]">Équilibre vie professionnelle/personnelle</h4>
                      <p className="text-gray-600 text-sm">
                        Nous valorisons le bien-être de nos collaborateurs et favorisons un équilibre sain.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-[#233b5d] mb-2">Processus de recrutement</h4>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-600 text-sm">
                    <li>Réception et analyse de votre candidature</li>
                    <li>Premier entretien téléphonique</li>
                    <li>Entretien en personne avec l'équipe</li>
                    <li>Décision finale et proposition</li>
                  </ol>
                </div>
              </div>
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

