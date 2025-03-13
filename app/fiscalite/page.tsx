import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FloatingContact from "@/components/floating-contact"
import MobileHeightFix from "@/components/mobile-height-fix"
import Image from "next/image"
import { Building, Globe, Home, FileText, AlertTriangle, Briefcase } from "lucide-react"
import SocialSection from "@/components/social-section"
import AnimatedBackground from "@/components/animated-background"

export default function FiscalitePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MobileHeightFix />

      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-24 relative bg-[#233b5d] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/bg-12.jpg?height=600&width=1920"
            alt="Fiscalité"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#233b5d]/80 to-[#233b5d]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Fiscalité</h1>
            <div className="h-1 w-24 bg-[#cca234] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed italic">
              « Nous proposons à nos clients des solutions opérationnelles pour optimiser leurs performances. Nous leurs
              fournissons une assistance opérationnelle au quotidien. »
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d] mb-6">Notre Expertise Fiscale</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Un contrôle fiscal peut s'avérer déstabilisant. Oui, mais pas de panique, nous sommes là ! Votre
                  statut pose problème ? Nous sommes toujours là pour vous conseiller.
                </p>
                <p>
                  Nous proposons toute la gamme de conseil en fiscalité, en tenant compte des évolutions nouvelles :
                  Nous accompagnons vos opérations d'acquisition, de cession, de rapprochement et de réorganisation dans
                  l'intégralité de leurs aspects fiscaux, en s'appuyant sur des spécialistes expérimentés. Nous
                  assistons nos clients lors de la conception, la structuration, et la mise en œuvre de solutions
                  innovantes et sécurisées pour leurs projets d'investissements et d'implantation à l'étranger.
                </p>
                <p>
                  Nous offrons aux opérateurs nationaux et internationaux les outils de décision et de gestion de leur
                  stratégie fiscale grâce à notre équipe, spécialisée en fiscalité immobilière.
                </p>
                <p>
                  Nos experts en TVA aident les entreprises à gérer leurs problématiques de fiscalité indirecte en
                  fournissant des conseils stratégiques en TVA, un support technique et un accompagnement dans la mise
                  en place des processus, tout en s'appuyant sur des outils technologiques efficaces.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/880x814_1.jpg?height=500&width=700"
                  alt="Fiscalité"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Building className="h-10 w-10 text-[#cca234]" />,
                title: "Fiscalité des sociétés",
                description:
                  "Optimisation fiscale, déclarations fiscales, crédit d'impôt recherche, intégration fiscale.",
              },
              {
                icon: <Globe className="h-10 w-10 text-[#cca234]" />,
                title: "Fiscalité internationale",
                description:
                  "En collaboration avec des cabinets d'avocats internationaux pour les opérations transfrontalières.",
              },
              {
                icon: <Home className="h-10 w-10 text-[#cca234]" />,
                title: "Fiscalité immobilière",
                description:
                  "Conseil en fiscalité pour les transactions immobilières, les investissements et la gestion patrimoniale.",
              },
              {
                icon: <FileText className="h-10 w-10 text-[#cca234]" />,
                title: "Études et consultations fiscales",
                description:
                  "Études, consultations et suivi des problèmes fiscaux pour anticiper et résoudre vos défis.",
              },
              {
                icon: <AlertTriangle className="h-10 w-10 text-[#cca234]" />,
                title: "Contrôles et contentieux fiscaux",
                description:
                  "Assistance lors des contrôles fiscaux et gestion des contentieux avec l'administration fiscale.",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-[#cca234]" />,
                title: "Montage juridique et fiscal",
                description:
                  "Conception et mise en œuvre de structures juridiques et fiscales optimisées pour vos projets.",
              },
            ].map((domain, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{domain.icon}</div>
                  <h3 className="text-xl font-bold text-[#233b5d] mb-3">{domain.title}</h3>
                  <p className="text-gray-600">{domain.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-[#233b5d] rounded-lg overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Pourquoi choisir notre expertise fiscale?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#cca234] mb-3">Une approche proactive</h3>
                  <p className="text-white/90">
                    Nous anticipons les évolutions fiscales et leurs impacts sur votre activité pour vous permettre
                    d'adapter votre stratégie en conséquence.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#cca234] mb-3">Une expertise reconnue</h3>
                  <p className="text-white/90">
                    Notre équipe de spécialistes en fiscalité possède une connaissance approfondie des réglementations
                    fiscales marocaines et internationales.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#cca234] mb-3">Des solutions sur mesure</h3>
                  <p className="text-white/90">
                    Nous développons des stratégies fiscales adaptées à votre situation spécifique et à vos objectifs
                    d'entreprise.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#cca234] mb-3">Un accompagnement continu</h3>
                  <p className="text-white/90">
                    Nous vous assistons tout au long de l'année pour répondre à vos questions fiscales et vous aider à
                    prendre les bonnes décisions.
                  </p>
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

