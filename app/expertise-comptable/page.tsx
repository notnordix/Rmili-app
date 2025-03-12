import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FloatingContact from "@/components/floating-contact"
import MobileHeightFix from "@/components/mobile-height-fix"
import Image from "next/image"
import { CheckCircle, Calculator, FileText, BarChart4, Users } from "lucide-react"
import SocialSection from "@/components/social-section"
import AnimatedBackground from "@/components/animated-background"

export default function ExpertiseComptablePage() {
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
            alt="Expertise Comptable"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#233b5d]/80 to-[#233b5d]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Expertise Comptable</h1>
            <div className="h-1 w-24 bg-[#cca234] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed italic">
              « Nous nous engageons à vos côtés afin de contribuer à faire de votre structure une entreprise dynamique
              et adaptée aux besoins de votre clientèle. »
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d] mb-6">Notre Expertise Comptable</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  L'expertise comptable reste au cœur de notre métier et nous menons nos missions avec la volonté de
                  clarifier vos chiffres pour vous aider à prendre des décisions éclairées et proactives.
                </p>
                <p>
                  Commerce, artisan, industrie, associations, grands comptes. Quel que soit le type de votre structure,
                  nous nous engageons à vous accompagner dans le développement de vos activités en vous assurant une
                  prestation fiable et rapide ainsi d'un conseil permanent dans les domaines cruciaux de la vie de votre
                  entreprise.
                </p>
                <p>
                  Nous sommes à vos côtés pour vous informer, échanger les sujets récurrents de l'entreprise et prévenir
                  les risques afin que votre développement s'inscrive dans la durée.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/880x814_1.jpg?height=500&width=700"
                  alt="Expertise Comptable"
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
                title: "Anticipation de vos problématiques",
                description:
                  "Nous identifions et anticipons les défis potentiels pour vous permettre de prendre des décisions éclairées.",
              },
              {
                title: "Efficacité dans le déploiement des ressources du cabinet",
                description: "Notre organisation optimisée nous permet de vous offrir un service rapide et de qualité.",
              },
              {
                title: "Suivi permanent par une équipe qui connait parfaitement votre dossier",
                description: "Une équipe dédiée assure un suivi continu et personnalisé de votre situation.",
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Calculator className="h-10 w-10 text-[#cca234]" />,
                title: "Gestion de la comptabilité",
                description:
                  "Tenue intégrale ou partagée des documents comptables, gestion de la fiscalité courante, assistance auprès des administrations et des organismes fiscaux...",
              },
              {
                icon: <FileText className="h-10 w-10 text-[#cca234]" />,
                title: "Élaboration des comptes annuels",
                description:
                  "Établissement des comptes annuels (bilan, compte de résultat, annexes), arrêté du résultat fiscal, gestion des déclarations fiscales",
              },
              {
                icon: <BarChart4 className="h-10 w-10 text-[#cca234]" />,
                title: "Expertise/Conseil",
                description:
                  "Assistance pour la détermination et le suivi de la stratégie financière (mise en place de dispositifs de reporting, tableaux de bord, comptabilité analytique, gestion de trésorerie...)",
              },
              {
                icon: <Users className="h-10 w-10 text-[#cca234]" />,
                title: "Gestion sociale",
                description:
                  "Réalisation des procédures d'embauche (lettre d'embauche, contrat de travail), gestion courante (établissement des bulletins de salaire et des différentes déclarations sociales)",
              },
            ].map((domain, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
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

      {/* Social Section */}
      <SocialSection />

      {/* Footer */}
      <SiteFooter />
      <FloatingContact />
    </div>
  )
}

