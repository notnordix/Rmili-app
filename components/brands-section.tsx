"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

const brands = [
  { name: "Université Al Akhawayn", image: "/akhawayn.png?height=80&width=150" },
  { name: "RICS", image: "/rics_logo.gif?height=80&width=150" },
  { name: "Groupe Tikida", image: "/tikida.gif?height=80&width=150" },
  { name: "Groupe Palmeraie", image: "/groupe-palmeraie.jpg?height=80&width=150" },
  { name: "Votre Chauffeur.ma", image: "/votrechauffeur.png?height=80&width=150" },
  { name: "Chabi Chic", image: "/chabichic.png?height=80&width=150" },
  { name: "Agence du Bassin Hydraulique Tensift", image: "/abht.png?height=80&width=150" },
  {
    name: "Chambre de commerce d'industrie et des services de Marrakech-Safi",
    image: "/ccism.png?height=80&width=150",
  },
  { name: "Ordre des Experts Comptable", image: "/oec.png?height=80&width=150" },
  { name: "Société CAP AGRO", image: "/capagro.png?height=80&width=150" },
  { name: "Hôtel Eden Andalou – Eden Park", image: "/edenandalou.png?height=80&width=150" },
]

export default function BrandsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const totalWidth = scrollContainer.scrollWidth

    const scroll = () => {
      if (!scrollContainer) return

      scrollPosition += 0.5
      if (scrollPosition >= totalWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Nos clients de confiance</h2>
        </div>

        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex space-x-10 overflow-x-hidden whitespace-nowrap py-6">
            {/* Double the brands for infinite scroll effect */}
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="inline-block flex-shrink-0 transition-transform duration-300 hover:scale-110">
                <div className="h-20 w-32 flex items-center justify-center">
                  <Image
                    src={brand.image || "/placeholder.svg"}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}

