import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FloatingContact from "@/components/floating-contact"
import MobileHeightFix from "@/components/mobile-height-fix"
import Image from "next/image"
import Link from "next/link"
import { Award, Users, CheckCircle } from "lucide-react"
import SocialSection from "@/components/social-section"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MobileHeightFix />

      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-24 relative bg-[#233b5d] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/bg-4442.jpg?height=600&width=1920"
            alt="Cabinet Rmili & Associés"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#233b5d]/80 to-[#233b5d]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Qui Sommes-Nous</h1>
            <div className="h-1 w-24 bg-[#cca234] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Cabinet Rmili & Associés, l'Expert Comptable et le Conseiller privilégié des chefs d'entreprise depuis
              plus de 14 ans.
            </p>
          </div>
        </div>

        <div className="h-16 bg-gradient-to-b from-[#233b5d] to-white"></div>
      </section>

      {/* Our History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1 w-12 bg-[#cca234] mb-6"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d] mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nous sommes présents à Marrakech et à Casablanca à travers des structures à taille humaine depuis
                  2008.
                </p>
                <p>
                  Nos activités vont de la simple assistance comptable au commissariat aux comptes en passant par
                  l'évaluation d'entreprises, l'aide à la création d'entreprise, la gestion de la paie et l'assistance
                  en matière sociale et fiscale.
                </p>
                <p>
                  Avec une expérience de plus de 14 années, dont 6 ans auprès de cabinets internationaux comme
                  PriceWaterhouse et Ex-Arthur Andersen, notre cabinet a su développer une expertise pointue et une
                  approche personnalisée pour répondre aux besoins spécifiques de chaque client.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/DSC02242.jpg?height=500&width=700"
                  alt="Cabinet Rmili & Associés"
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

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Nos Valeurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-[#cca234]" />,
                title: "Excellence",
                description:
                  "Nous nous engageons à fournir des services de la plus haute qualité, en respectant les normes professionnelles les plus strictes.",
              },
              {
                icon: <Users className="h-10 w-10 text-[#cca234]" />,
                title: "Proximité",
                description:
                  "Nous privilégions une relation de confiance et de proximité avec nos clients, en étant à l'écoute de leurs besoins spécifiques.",
              },
              {
                icon: <Award className="h-10 w-10 text-[#cca234]" />,
                title: "Intégrité",
                description:
                  "Nous exerçons notre profession avec honnêteté, transparence et dans le respect de l'éthique professionnelle.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#233b5d] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Notre Équipe</h2>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Founder */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex justify-center">
                  <div className="relative">
                    <Image
                      src="/189892.png?height=300&width=300"
                      alt="Meriem RMILI"
                      width={200}
                      height={200}
                      className="rounded-full border-4 border-[#cca234] shadow-md object-cover"
                    />
                  </div>
                </div>

                <div className="md:col-span-8">
                  <h3 className="text-2xl font-bold text-[#233b5d] mb-2">Meriem RMILI</h3>
                  <p className="text-[#cca234] font-medium mb-4">Fondatrice & Expert-Comptable</p>

                  <div className="space-y-4 text-gray-700">
                    <p>
                      Diplômée d'expertise comptable et commissariat aux comptes en France, Meriem RMILI dispose de 14
                      années d'expériences dont la moitié auprès de PriceWaterhouse, Ex-Arthur Andersen et MRICS.
                    </p>

                    <div className="border-l-4 border-[#cca234] pl-4 py-2 bg-gray-50">
                      <h4 className="font-bold text-[#233b5d] mb-2">Cursus</h4>
                      <p>
                        Après deux années de classes préparatoires au Lycée Paul Vial à Nantes, Meriem RMILI a intégrée
                        l'ESC Toulouse. Elle a obtenu un Master en Audit et Révision comptable en 2003 et dispose du
                        diplôme Français d'Expert Comptable et commissaire aux comptes depuis 2007.
                      </p>
                      <p>
                        Meriem RMILI est membre de l'Ordre National des Experts Comptables Marocains depuis 2008 et
                        contrôleur qualité auprès de l'Ordre des Experts Comptables Régions Casablanca-Sud depuis 2014.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#233b5d]/10 text-[#233b5d]">
                      Expert-Comptable
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#233b5d]/10 text-[#233b5d]">
                      Commissaire aux Comptes
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#233b5d]/10 text-[#233b5d]">
                      MRICS
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#233b5d]/10 text-[#233b5d]">
                      Contrôleur Qualité OEC
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Description */}
            <div className="text-center">
              <p className="text-gray-700 max-w-3xl mx-auto">
                Notre équipe est composée de professionnels qualifiés et expérimentés dans les domaines de l'expertise
                comptable, de l'audit, de la fiscalité et du conseil juridique. Chaque membre de notre équipe partage
                les mêmes valeurs d'excellence, de proximité et d'intégrité, et s'engage à fournir un service
                personnalisé et de qualité à nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Notre Parcours</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#cca234]/30"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2008",
                  title: "Création du Cabinet",
                  description: "Fondation du Cabinet Rmili & Associés à Marrakech par Meriem RMILI.",
                },
                {
                  year: "2012",
                  title: "Expansion des Services",
                  description: "Élargissement de notre offre de services pour inclure l'audit légal et contractuel.",
                },
                {
                  year: "2015",
                  title: "Ouverture à Casablanca",
                  description:
                    "Ouverture de notre deuxième bureau à Casablanca pour mieux servir nos clients dans la région.",
                },
                {
                  year: "2020",
                  title: "Digitalisation",
                  description:
                    "Mise en place de solutions digitales pour optimiser nos processus et améliorer notre service client.",
                },
                {
                  year: "Aujourd'hui",
                  title: "Croissance Continue",
                  description:
                    "Poursuite de notre développement avec une équipe renforcée et une clientèle diversifiée.",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {/* Dot on timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#cca234] border-4 border-white"></div>

                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                  >
                    <div className="md:w-1/2 p-4 text-center md:text-right md:pr-12">
                      <span className="inline-block px-4 py-2 bg-[#233b5d] text-white rounded-lg font-bold mb-2">
                        {item.year}
                      </span>
                    </div>

                    <div className="md:w-1/2 p-4 md:pl-12">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-[#233b5d] mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Nos Accréditations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/oecmaroc.png"
                  alt="Ordre des Experts Comptables du Maroc"
                  width={150}
                  height={80}
                  className="mb-6"
                />
                <h3 className="text-xl font-bold text-[#233b5d] mb-3">Ordre des Experts Comptables du Maroc</h3>
                <p className="text-gray-600">
                  Notre cabinet est membre de l'Ordre des Experts Comptables du Maroc depuis 2008, garantissant notre
                  adhésion aux normes professionnelles les plus strictes. Meriem RMILI est également contrôleur qualité
                  auprès de l'Ordre des Experts Comptables Régions Casablanca-Sud depuis 2014.
                </p>
                <Link
                  href="http://www.jecherchemonexpertcomptable.oecmaroc.com/?keyword=RMILI&ville=MARRAKECH&type=pm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-[#cca234] hover:underline"
                >
                  Vérifier notre accréditation →
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <Image src="/rics_logo.gif" alt="RICS" width={150} height={80} className="mb-6" />
                <h3 className="text-xl font-bold text-[#233b5d] mb-3">
                  Royal Institution of Chartered Surveyors (RICS)
                </h3>
                <p className="text-gray-600">
                  Notre fondatrice est membre de la Royal Institution of Chartered Surveyors (RICS), une organisation
                  professionnelle mondiale qui accrédite les professionnels dans les secteurs de la construction, de
                  l'immobilier et de l'infrastructure.
                </p>
                <Link
                  href="https://www.rics.org/fr/find-a-member/?firstName=meriem&lastName=rmili&town=&countryCode=MA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-[#cca234] hover:underline"
                >
                  Vérifier notre accréditation →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-center text-gray-700">
              Notre cabinet est également référencé à l'ANPME comme prestataire pour la réalisation des actions
              suivantes: Amélioration du système de management et réalisation d'un plan d'affaires.
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

