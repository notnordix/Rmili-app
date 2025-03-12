import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import FloatingContact from "@/components/floating-contact"
import MobileHeightFix from "@/components/mobile-height-fix"
import Image from "next/image"
import SocialSection from "@/components/social-section"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
            alt="Contactez Cabinet Rmili & Associés"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#233b5d]/80 to-[#233b5d]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <div className="h-1 w-24 bg-[#cca234] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              N'hésitez pas à nous contacter pour toute question ou demande d'information.
            </p>
          </div>
        </div>

        <div className="h-16 bg-gradient-to-b from-[#233b5d] to-white"></div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="h-1 w-12 bg-[#cca234] mb-6"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d] mb-8">Nos coordonnées</h2>

              <div className="space-y-8">
                {/* Marrakech Office */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#233b5d] mb-4">Bureau de Marrakech</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-[#cca234] mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        80, rue Yougoslavie Guéliz
                        <br />
                        Rés. La Paix
                        <br />
                        Marrakech – Maroc
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-[#cca234] mr-3 flex-shrink-0" />
                      <Link href="tel:+212524447702" className="text-gray-700 hover:text-[#233b5d] transition-colors">
                        +212 (0) 524 44 77 02
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-[#cca234] mr-3 flex-shrink-0" />
                      <Link
                        href="mailto:cabinetrmili@gmail.com"
                        className="text-gray-700 hover:text-[#233b5d] transition-colors"
                      >
                        cabinetrmili@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Casablanca Office */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#233b5d] mb-4">Bureau de Casablanca</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-[#cca234] mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">
                        Angle Bd Ghandi et Bd Yacoub El Mansour,
                        <br />
                        Résidence du Palais, Entrée D, 5ème étage
                        <br />
                        Casablanca – Maroc
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-[#cca234] mr-3 flex-shrink-0" />
                      <Link href="tel:+212522450846" className="text-gray-700 hover:text-[#233b5d] transition-colors">
                        +212 (0) 522 45 08 46
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-[#cca234] mr-3 flex-shrink-0" />
                      <Link
                        href="mailto:contact@cabinetrmili.ma"
                        className="text-gray-700 hover:text-[#233b5d] transition-colors"
                      >
                        contact@cabinetrmili.ma
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#233b5d] mb-4">Horaires d'ouverture</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Lundi - Vendredi</span>
                      <span className="text-gray-700">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Samedi</span>
                      <span className="text-gray-700">Sur rendez-vous</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Dimanche</span>
                      <span className="text-gray-700">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="h-1 w-12 bg-[#cca234] mb-6"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d] mb-8">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Nos emplacements</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Marrakech Map */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#233b5d] mb-4 text-center">Marrakech</h3>
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0374531113!2d-8.013389!3d31.633333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee9465ae0bf7%3A0x27332ef8bf9b5add!2s80%20Rue%20Yougoslavie%2C%20Marrakech!5e0!3m2!1sfr!2sma!4v1710235768123!5m2!1sfr!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Casablanca Map */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#233b5d] mb-4 text-center">Casablanca</h3>
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.9861665444366!2d-7.6463689!3d33.5923339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2f6e0a9f8c3%3A0x3a7e5960bc3db90e!2sAngle%20Bd%20Ghandi%20et%20Bd%20Yacoub%20El%20Mansour%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1710235868123!5m2!1sfr!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
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

