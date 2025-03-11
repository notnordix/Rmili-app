import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Linkedin, ArrowRight } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-[#233b5d] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="h-1 w-12 bg-[#cca234] mb-6"></div>
            <h3 className="text-xl font-bold mb-4">Rmili & Associés</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Notre cabinet est référencé à l'ANPME comme prestataire pour la réalisation des actions suivantes:
              Amélioration du système de management de la Réalisation d'un plan d'affaires.
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/cabinetrmili"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#cca234] transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/cabinet-rmili"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#cca234] transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <div className="h-1 w-12 bg-[#cca234] mb-6"></div>
            <h3 className="text-xl font-bold mb-4">Contact Marrakech</h3>
            <address className="not-italic text-white/80 space-y-4">
              <div className="flex items-start group">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5 text-[#cca234] group-hover:text-white transition-colors duration-300" />
                <span className="group-hover:text-white/90 transition-colors duration-300">
                  80, rue Yougoslavie Guéliz Rés. La Paix
                  <br />
                  Marrakech – Maroc
                </span>
              </div>
              <div className="flex items-center group">
                <Mail className="mr-3 h-5 w-5 text-[#cca234] group-hover:text-white transition-colors duration-300" />
                <a href="mailto:cabinetrmili@gmail.com" className="hover:text-white transition-colors duration-300">
                  cabinetrmili@gmail.com
                </a>
              </div>
              <div className="flex items-center group">
                <Phone className="mr-3 h-5 w-5 text-[#cca234] group-hover:text-white transition-colors duration-300" />
                <a href="tel:+212524447702" className="hover:text-white transition-colors duration-300">
                  +212 (0) 524 44 77 02
                </a>
              </div>
            </address>
          </div>

          <div>
            <div className="h-1 w-12 bg-[#cca234] mb-6"></div>
            <h3 className="text-xl font-bold mb-4">Contact Casablanca</h3>
            <address className="not-italic text-white/80 space-y-4">
              <div className="flex items-start group">
                <MapPin className="mr-3 h-5 w-5 flex-shrink-0 mt-0.5 text-[#cca234] group-hover:text-white transition-colors duration-300" />
                <span className="group-hover:text-white/90 transition-colors duration-300">
                  Angle Bd Ghandi et Bd Yacoub El Mansour,
                  <br />
                  Résidence du Palais, Entrée D, 5ème étage
                  <br />
                  Casablanca – Maroc
                </span>
              </div>
              <div className="flex items-center group">
                <Mail className="mr-3 h-5 w-5 text-[#cca234] group-hover:text-white transition-colors duration-300" />
                <a href="mailto:contact@cabinetrmili.ma" className="hover:text-white transition-colors duration-300">
                  contact@cabinetrmili.ma
                </a>
              </div>
              <div className="flex items-center group">
                <Phone className="mr-3 h-5 w-5 text-[#cca234] group-hover:text-white transition-colors duration-300" />
                <a href="tel:+212522450846" className="hover:text-white transition-colors duration-300">
                  +212 (0) 522 45 08 46
                </a>
              </div>
            </address>
          </div>

          <div>
            <div className="h-1 w-12 bg-[#cca234] mb-6"></div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "Audit legal/ contractuel", href: "/audit-legal" },
                { name: "Expertise comptable", href: "/expertise-comptable" },
                { name: "Fiscalité", href: "/fiscalite" },
                { name: "Juridique", href: "/juridique" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white group flex items-center transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-[#cca234] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                    <ArrowRight className="ml-2 h-0 w-0 opacity-0 group-hover:h-3 group-hover:w-3 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>Rmili & Associés © {new Date().getFullYear()}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

