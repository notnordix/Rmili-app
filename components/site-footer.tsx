import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Linkedin, ArrowRight } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-[#263e5c] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* First Section: Company Info, Social Media, and Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center">
          {/* Company Info and Social Media */}
          <div className="flex flex-col items-center">
            <div className="h-1 w-10 bg-[#cca234] mb-4"></div>
            <h3 className="text-base font-bold mb-3">Rmili & Associés</h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Notre cabinet est référencé à l'ANPME comme prestataire pour la réalisation des actions suivantes:
              Amélioration du système de management de la Réalisation d'un plan d'affaires.
            </p>

            <div className="flex space-x-3 mb-2">
              <Link
                href="https://www.facebook.com/cabinetrmili"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#cca234] transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/cabinet-rmili"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#cca234] transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Contact Marrakech */}
          <div className="flex flex-col items-center">
            <div className="h-1 w-10 bg-[#cca234] mb-4"></div>
            <h3 className="text-base font-bold mb-3">Contact Marrakech</h3>
            <address className="not-italic text-white/70 text-sm space-y-3">
              <div className="flex items-center justify-center">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0 text-[#cca234]" />
                <span className="text-center">
                  80, rue Yougoslavie Guéliz Rés. La Paix
                  <br />
                  Marrakech – Maroc
                </span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="mr-2 h-4 w-4 text-[#cca234]" />
                <a href="mailto:cabinetrmili@gmail.com" className="hover:text-white transition-colors duration-300">
                  cabinetrmili@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4 text-[#cca234]" />
                <a href="tel:+212524447702" className="hover:text-white transition-colors duration-300">
                  +212 (0) 524 44 77 02
                </a>
              </div>
            </address>
          </div>

          {/* Contact Casablanca */}
          <div className="flex flex-col items-center">
            <div className="h-1 w-10 bg-[#cca234] mb-4"></div>
            <h3 className="text-base font-bold mb-3">Contact Casablanca</h3>
            <address className="not-italic text-white/70 text-sm space-y-3">
              <div className="flex items-center justify-center">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0 text-[#cca234]" />
                <span className="text-center">
                  Angle Bd Ghandi et Bd Yacoub El Mansour,
                  <br />
                  Résidence du Palais, Entrée D, 5ème étage
                  <br />
                  Casablanca – Maroc
                </span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="mr-2 h-4 w-4 text-[#cca234]" />
                <a href="mailto:contact@cabinetrmili.ma" className="hover:text-white transition-colors duration-300">
                  contact@cabinetrmili.ma
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4 text-[#cca234]" />
                <a href="tel:+212522450846" className="hover:text-white transition-colors duration-300">
                  +212 (0) 522 45 08 46
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6"></div>

        {/* Second Section: Quick Links, Logo, and Copyright */}
        <div className="text-center">
          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-base font-bold mb-3">Liens rapides</h3>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
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
                    className="text-white/70 hover:text-white flex items-center transition-all duration-300"
                  >
                    <ArrowRight className="mr-1 h-3 w-3 text-[#cca234]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col items-center">
            <Image src="/rmililogo2.png" alt="Cabinet Rmili & Associés" width={150} height={45} className="mb-3" />
            <p className="text-white/60 text-xs">
              Rmili & Associés © {new Date().getFullYear()}. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

