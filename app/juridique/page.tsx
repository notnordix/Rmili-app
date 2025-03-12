import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FloatingContact from "@/components/floating-contact"
import MobileHeightFix from "@/components/mobile-height-fix"
import Image from "next/image"
import { Scale, Building2, FileText, Handshake } from "lucide-react"
import SocialSection from "@/components/social-section"
import AnimatedBackground from "@/components/animated-background"

export default function JuridiquePage() {
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
            alt="Juridique"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#233b5d]/80 to-[#233b5d]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Juridique</h1>
            <div className="h-1 w-24 bg-[#cca234] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed italic">
              « Nous accompagnons chaque étape de la vie de votre entreprise »
            </p>
          </div>
        </div>

        <div className="h-16 bg-gradient-to-b from-[#233b5d] to-white"></div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1 w-12 bg-[#cca234] mb-6"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d] mb-6">Notre Expertise Juridique</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nous vous proposons la forme juridique la plus appropriée lors de la création ou de la reprise de
                  votre entreprise. Nous vous assistons dans les évènements les plus courants et les plus exceptionnels.
                  Pour des dossiers de haute technicité, nous intervenons en étroite collaboration avec des
                  professionnels du droits (avocats, notaires).
                </p>
                <p>
                  Nous vous conseillons dans la restructuration de votre entreprise ou pour sa transformation. Nous
                  sommes à vos côtés lors de sa transmission ou au cours de son développement.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/juridique.jpg?height=500&width=700"
                  alt="Juridique"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -left-3 -bottom-3 w-24 h-24 border-l-4 border-b-4 border-[#cca234] rounded-bl-xl z-0"></div>
              <div className="absolute -right-3 -top-3 w-24 h-24 border-r-4 border-t-4 border-[#233b5d] rounded-tr-xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <AnimatedBackground className="opacity-50" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Domaines de compétence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Scale className="h-10 w-10 text-[#cca234]" />,
                title: "Assistance juridique courante",
                description:
                  "Conseil et accompagnement juridique de la vie de l'entreprise (création, transformation, procès-verbal, dépôt des comptes annuels, mise à jour des livres légaux...).",
              },
              {
                icon: <Building2 className="h-10 w-10 text-[#cca234]" />,
                title: "Constitution de société et droit des affaires",
                description:
                  "Accompagnement pour la constitution de votre société et conseil en droit des affaires et des sociétés.",
              },
              {
                icon: <FileText className="h-10 w-10 text-[#cca234]" />,
                title: "Mise en harmonie des statuts",
                description:
                  "Mise en harmonie des statuts avec les nouvelles lois (SA et SARL) pour assurer la conformité de votre entreprise.",
              },
              {
                icon: <Handshake className="h-10 w-10 text-[#cca234]" />,
                title: "Pactes d'associés ou actionnaires",
                description:
                  "Etablissement de pactes d'associés ou actionnaires pour sécuriser les relations entre les différentes parties prenantes.",
              },
            ].map((domain, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{domain.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#233b5d] mb-3">{domain.title}</h3>
                    <p className="text-gray-600">{domain.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Services Lifecycle Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">
              Accompagnement tout au long du cycle de vie de votre entreprise
            </h2>
          </div>

          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#cca234]/30 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  stage: "Création",
                  description: "Choix de la forme juridique, rédaction des statuts, formalités de constitution",
                },
                {
                  stage: "Développement",
                  description: "Modification des statuts, augmentation de capital, pactes d'associés",
                },
                {
                  stage: "Restructuration",
                  description: "Fusion, scission, transformation, transfert de siège social",
                },
                {
                  stage: "Transmission",
                  description: "Cession de parts ou d'actions, transmission familiale, préparation à la succession",
                },
              ].map((stage, index) => (
                <div key={index} className="relative">
                  {/* Dot on timeline */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#cca234] border-4 border-white z-10"></div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-8 text-center">
                    <h3 className="text-xl font-bold text-[#233b5d] mb-3">{stage.stage}</h3>
                    <p className="text-gray-600">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <AnimatedBackground className="opacity-50" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#cca234]">
            <h2 className="text-xl md:text-2xl font-bold text-[#233b5d] mb-4">
              Notre réseau de professionnels du droit
            </h2>
            <p className="text-gray-700">
              Pour les dossiers juridiques complexes nécessitant une expertise spécifique, nous travaillons en étroite
              collaboration avec un réseau de professionnels du droit (avocats, notaires, huissiers) afin de vous offrir
              un service complet et de qualité. Cette approche collaborative nous permet de traiter efficacement tous
              vos besoins juridiques, des plus simples aux plus complexes.
            </p>
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

