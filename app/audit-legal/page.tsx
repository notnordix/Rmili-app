import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FloatingContact from "@/components/floating-contact"
import MobileHeightFix from "@/components/mobile-height-fix"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import SocialSection from "@/components/social-section"
import AnimatedBackground from "@/components/animated-background"

export default function AuditLegalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MobileHeightFix />

      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-24 relative bg-[#233b5d]/60 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/bg-1.jpg?height=600&width=1920"
            alt="Audit Legal et Contractuel"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Audit Legal & Contractuel</h1>
            <div className="h-1 w-24 bg-[#cca234] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed italic">
              « Notre signature nous engage car nous confirmons que nos clients tiennent leurs comptes en transparence.
              »
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d] mb-6">Commissariat aux comptes</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  L'audit légal et l'audit contractuel constituent nos métiers de base. Nous intervenons pour certifier
                  les comptes des entreprises. Cela revient à émettre une opinion motivée sur leur sincérité, régularité
                  et image fidèle en communiquant une information financière fiable et transparente.
                </p>
                <p>
                  Notre compréhension de l'environnement des entreprises, portée par notre connaissance des métiers et
                  spécificités de chaque domaine est fondamentale. Nous mettons en œuvre nos savoirs techniques et
                  théoriques des processus de contrôle interne qui permettent de fiabiliser les informations transmises.
                </p>
                <p>
                  Cette expertise et ce savoir-faire sont uniques car l'information financière doit prendre en compte
                  tous les aspects à savoir: légaux, fiscaux, réglementaires, environnementaux, souverains et
                  économiques.
                </p>
                <p>
                  Nous mettons en œuvre une approche d'audit et des méthodes de travail adaptées aux risques spécifiques
                  et au degré de complexité de chaque organisation en mobilisant nos compétences pluridisciplinaires.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/880x814_1.jpg?height=500&width=700"
                  alt="Audit Legal et Contractuel"
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

      {/* Value Added Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <AnimatedBackground className="opacity-50" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Nos valeurs ajoutées</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Garantie d'une image fidèle et sincère de vos comptes",
                description:
                  "Nous assurons que vos états financiers reflètent fidèlement la réalité économique de votre entreprise.",
              },
              {
                title: "Confiance et transparence",
                description:
                  "Notre approche favorise la confiance de vos partenaires et la transparence de vos informations financières.",
              },
              {
                title: "Moyens humains et techniques d'un groupe qualifié",
                description:
                  "Notre équipe d'experts utilise des outils et méthodes de pointe pour garantir la qualité de nos audits.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <CheckCircle className="h-10 w-10 text-[#cca234]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#233b5d] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Domaines de compétence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Commissariat aux comptes",
              "Commissariat aux apports et à la fusion",
              "Audit de fraudes et management des risques",
              "Audit du contrôle interne",
              "Audit fiscal et social",
              "Attestation de conformité",
              "Audit d'évaluation et d'acquisition",
            ].map((domain, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 rounded-lg border-l-4 border-[#cca234] hover:shadow-md transition-shadow duration-300"
              >
                <p className="font-medium text-[#233b5d]">{domain}</p>
              </div>
            ))}
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

