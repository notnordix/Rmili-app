import Link from "next/link"
import { Facebook, Linkedin } from "lucide-react"

export default function SocialSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d] mb-10">
          Retrouvez-nous sur les réseaux sociaux !
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="https://www.facebook.com/cabinetRMILI/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex items-center gap-3 bg-[#3b5998] text-white px-6 py-3 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Facebook className="h-5 w-5" />
              <span className="font-medium">Facebook</span>
              <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300"></span>
            </div>
          </Link>

          <Link
            href="https://ma.linkedin.com/in/meriem-rmili-835a9928"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex items-center gap-3 bg-[#0077b5] text-white px-6 py-3 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
              <span className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300"></span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

