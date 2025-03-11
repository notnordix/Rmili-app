"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  image: string
  title: string
  subtitle: string
  emphasis?: string
}

const slides: Slide[] = [
  {
    image: "/placeholder.svg?height=850&width=1920",
    title: "Le Partenaire privilégié",
    subtitle: "Cabinet RMILI & Associés",
    emphasis: "de votre entreprise",
  },
  {
    image: "/placeholder.svg?height=850&width=1920",
    title: "Premier rendez-vous gratuit",
    subtitle: "avec un expert comptable pour l'état des lieux comptable, fiscal et social de votre société.",
    emphasis: "gratuit",
  },
  {
    image: "/placeholder.svg?height=850&width=1920",
    title: "14 ans d'expérience",
    subtitle: "6 ans auprés de cabinets internationaux",
    emphasis: "d'expérience",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 7000)
    return () => clearInterval(interval)
  }, [currentSlide, isAnimating])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="relative z-20 flex h-full items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <p className="mb-4 text-lg font-medium text-white md:text-xl lg:text-2xl">{slide.subtitle}</p>
                <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl xl:text-7xl">
                  {slide.title.split(slide.emphasis || "").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <span className="text-[#cca234]"> {slide.emphasis} </span>}
                    </span>
                  ))}
                </h1>
                <Button className="bg-[#cca234] hover:bg-[#b89230] text-white px-8 py-6 text-lg rounded-md">
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-6 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 text-white hover:bg-white/30 h-12 w-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-6 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 text-white hover:bg-white/30 h-12 w-12"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

