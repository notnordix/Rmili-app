import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FloatingContact from "@/components/floating-contact"
import MobileHeightFix from "@/components/mobile-height-fix"
import Image from "next/image"
import SocialSection from "@/components/social-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, Calendar, FileText, ArrowRight, Mail, MapPin } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"

// Sample announcement data - in a real implementation, this would come from a CMS or API
const announcements = [
  {
    id: 1,
    type: "job",
    title: "Expert-Comptable Confirmé",
    location: "Marrakech",
    date: "15 Mars 2025",
    description:
      "Nous recherchons un(e) Expert-Comptable confirmé(e) pour rejoindre notre équipe à Marrakech. Vous serez responsable de la supervision des dossiers clients, de la révision des comptes et du conseil en matière fiscale et comptable.",
    requirements: [
      "Diplôme d'expertise comptable",
      "Minimum 5 ans d'expérience en cabinet",
      "Maîtrise des normes comptables marocaines et IFRS",
      "Excellentes capacités relationnelles et rédactionnelles",
    ],
  },
  {
    id: 2,
    type: "job",
    title: "Collaborateur Comptable",
    location: "Casablanca",
    date: "10 Mars 2025",
    description:
      "Dans le cadre de notre développement, nous recherchons un(e) Collaborateur(trice) Comptable pour notre bureau de Casablanca. Vous participerez à la tenue comptable, à l'établissement des déclarations fiscales et à la préparation des bilans.",
    requirements: [
      "Bac+3/5 en comptabilité ou finance",
      "2 à 3 ans d'expérience en cabinet d'expertise comptable",
      "Maîtrise des outils informatiques et des logiciels comptables",
      "Rigueur, autonomie et sens de l'organisation",
    ],
  },
  {
    id: 3,
    type: "news",
    title: "Séminaire sur les nouvelles dispositions fiscales 2025",
    location: "Hôtel Kenzi Tower, Casablanca",
    date: "25 Avril 2025",
    description:
      "Cabinet Rmili & Associés organise un séminaire sur les nouvelles dispositions fiscales introduites par la loi de finances 2025. Cet événement s'adresse aux dirigeants d'entreprise, directeurs financiers et responsables comptables souhaitant comprendre les impacts de ces changements sur leur activité.",
    link: "#inscription-seminaire",
  },
  {
    id: 4,
    type: "news",
    title: "Ouverture prochaine d'un nouveau bureau à Tanger",
    location: "Tanger",
    date: "1er Juin 2025",
    description:
      "Nous sommes heureux de vous annoncer l'ouverture prochaine de notre nouveau bureau à Tanger. Cette expansion nous permettra de mieux servir nos clients dans la région Nord du Maroc et de renforcer notre présence nationale.",
  },
]

export default function AnnouncementsPage() {
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
            alt="Annonces - Cabinet Rmili & Associés"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#233b5d]/80 to-[#233b5d]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Annonces</h1>
            <div className="h-1 w-24 bg-[#cca234] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Découvrez nos offres d'emploi, actualités et événements
            </p>
          </div>
        </div>

        <div className="h-16 bg-gradient-to-b from-[#233b5d] to-white"></div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <AnimatedBackground className="opacity-30" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#233b5d]/10 text-[#233b5d] mb-4">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#233b5d] mb-2">Offres d'emploi</h3>
              <p className="text-gray-600">
                Rejoignez notre équipe de professionnels et développez votre carrière dans un cabinet dynamique.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#233b5d]/10 text-[#233b5d] mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#233b5d] mb-2">Événements</h3>
              <p className="text-gray-600">
                Participez à nos séminaires et formations pour rester informé des dernières actualités.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#233b5d]/10 text-[#233b5d] mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#233b5d] mb-2">Actualités</h3>
              <p className="text-gray-600">
                Suivez les dernières nouvelles et développements de Cabinet Rmili & Associés.
              </p>
            </div>
          </div>

          {/* Job Announcements */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-1 w-12 bg-[#cca234] mr-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Offres d'emploi</h2>
            </div>

            <div className="space-y-8">
              {announcements
                .filter((announcement) => announcement.type === "job")
                .map((job) => (
                  <div key={job.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-[#233b5d]">{job.title}</h3>
                      <div className="flex items-center mt-2 md:mt-0">
                        <span className="text-sm bg-[#233b5d]/10 text-[#233b5d] px-3 py-1 rounded-full">
                          {job.location}
                        </span>
                        <span className="text-sm text-gray-500 ml-3">Publié le {job.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{job.description}</p>

                    {job.requirements && (
                      <div className="mb-6">
                        <h4 className="font-bold text-[#233b5d] mb-2">Profil recherché :</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex justify-end">
                      <Button
                        asChild
                        className="bg-[#233b5d] hover:bg-[#1a2d49] text-white transition-all duration-300 relative overflow-hidden group"
                      >
                        <Link href="/postuler">
                          <span className="relative z-10 flex items-center">
                            Postuler maintenant
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                          <span className="absolute inset-0 w-full h-full bg-[#cca234] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* News and Events */}
          <div>
            <div className="flex items-center mb-8">
              <div className="h-1 w-12 bg-[#cca234] mr-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Actualités et événements</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {announcements
                .filter((announcement) => announcement.type === "news")
                .map((news) => (
                  <div key={news.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">{news.date}</span>
                      <h3 className="text-xl font-bold text-[#233b5d] mt-1">{news.title}</h3>
                    </div>

                    {news.location && (
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="h-4 w-4 mr-2 text-[#cca234]" />
                        <span>{news.location}</span>
                      </div>
                    )}

                    <p className="text-gray-700 mb-4">{news.description}</p>

                    {news.link && (
                      <div className="flex justify-end">
                        <Button
                          asChild
                          variant="outline"
                          className="border-[#233b5d] text-[#233b5d] hover:bg-[#233b5d] hover:text-white transition-all duration-300"
                        >
                          <Link href={news.link}>
                            En savoir plus
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-[#233b5d] rounded-lg overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Vous ne trouvez pas ce que vous cherchez ?
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Nous sommes toujours à la recherche de talents. Envoyez-nous votre CV et lettre de motivation, nous
                  étudierons votre candidature avec attention.
                </p>
              </div>

              <div className="flex justify-center">
                <Button
                  asChild
                  className="bg-[#cca234] hover:bg-[#b89230] text-white px-8 py-6 text-base font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <Link href="/postuler">
                    <span className="relative z-10 flex items-center">
                      Envoyez votre candidature
                      <Mail className="ml-2 h-5 w-5" />
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                  </Link>
                </Button>
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

