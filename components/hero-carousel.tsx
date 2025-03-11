"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Slide {
  image: string
  title: string
  titleEmphasis?: string
  info: string
}

const slides: Slide[] = [
  {
    image: "https://www.cabinetrmili.ma/assets/media/components/b-main-slider/bg-2.jpg?height=850&width=1920",
    title: "Le Partenaire privilégié",
    titleEmphasis: "de votre entreprise",
    info: "Cabinet RMILI & Associés",
  },
  {
    image: "https://www.cabinetrmili.ma/assets/media/components/b-main-slider/bg-12.jpg?height=850&width=1920",
    title: "Premier rendez-vous",
    titleEmphasis: "gratuit",
    info: "avec un expert comptable pour l'état des lieux comptable, fiscal et social de votre société.",
  },
  {
    image: "https://www.cabinetrmili.ma/assets/media/components/b-main-slider/bg-4442.jpg?height=850&width=1920",
    title: "14 ans",
    titleEmphasis: "d'expérience",
    info: "6 ans auprés de cabinets internationaux",
  },
]

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [displayedEmphasis, setDisplayedEmphasis] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [viewportHeight, setViewportHeight] = useState("100vh")
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Handle mobile viewport height
  useEffect(() => {
    const setHeight = () => {
      // Use window.innerHeight to get the actual visible viewport height
      setViewportHeight(`${window.innerHeight}px`)
    }

    // Set initial height
    setHeight()

    // Update height on resize and orientation change
    window.addEventListener('resize', setHeight)
    window.addEventListener('orientationchange', setHeight)

    return () => {
      window.removeEventListener('resize', setHeight)
      window.removeEventListener('orientationchange', setHeight)
    }
  }, [])

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  // Handle slide transitions
  useEffect(() => {
    resetTimeout()

    // Reset animation states when slide changes
    setIsLoaded(false)
    setDisplayedEmphasis("")
    setIsTyping(true)

    // Trigger entrance animation
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Auto-advance to next slide after 6 seconds
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }, 6000) // 6 seconds per slide

    return () => {
      resetTimeout()
    }
  }, [activeIndex])

  // Handle typing effect
  useEffect(() => {
    if (!isLoaded) return

    const currentEmphasis = slides[activeIndex].titleEmphasis || ""
    let typingTimer: NodeJS.Timeout

    if (isTyping) {
      // Type the current phrase
      if (displayedEmphasis.length < currentEmphasis.length) {
        typingTimer = setTimeout(() => {
          setDisplayedEmphasis(currentEmphasis.substring(0, displayedEmphasis.length + 1))
        }, 100)
      } else {
        // Keep the full text displayed
        typingTimer = setTimeout(() => {
          // We don't set isTyping to false here because we want to keep the text displayed
        }, 1500)
      }
    }

    return () => {
      if (typingTimer) clearTimeout(typingTimer)
    }
  }, [isLoaded, isTyping, displayedEmphasis, activeIndex])

  const goToSlide = (index: number) => {
    if (index === activeIndex) return
    resetTimeout()
    setActiveIndex(index)
  }

  return (
    <div 
      ref={heroRef}
      className="relative w-full overflow-hidden" 
      style={{ height: viewportHeight }}
    >
      <div
        className="h-full flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="h-full w-full flex-shrink-0">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-black/60 z-10" />
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="container mx-auto px-6 md:px-8">
                  <div className="max-w-4xl mx-auto text-center">
                    {index === activeIndex && (
                      <>
                        <div
                          className={`mb-6 md:mb-8 text-sm font-medium tracking-wider uppercase text-[#cca234]/70 md:text-base lg:text-lg transition-all duration-1000 transform ${
                            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                          }`}
                        >
                          {slide.info}
                        </div>
                        <h2
                          className={`text-3xl font-black leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl transition-all duration-1000 transform drop-shadow-md tracking-tight ${
                            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                          }`}
                        >
                          {slide.title}{" "}
                          <span className="text-[#cca234] inline-block relative">
                            {displayedEmphasis}
                            <span
                              className="animate-pulse absolute -right-2 top-0 h-full w-0.5 bg-[#cca234]"
                              style={{
                                opacity: displayedEmphasis.length === (slide.titleEmphasis || "").length ? 0 : 1,
                              }}
                            ></span>
                          </span>
                        </h2>
                        <div
                          className={`mt-8 md:mt-10 h-1 w-24 bg-[#cca234] transition-all duration-1500 transform mx-auto ${
                            isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                          }`}
                        />

                        <div
                          className={`mt-8 md:mt-10 transition-all duration-1500 transform ${
                            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                          }`}
                        >
                          <Button
                            asChild
                            className="bg-[#cca234] hover:bg-[#b89230] text-white px-8 py-6 text-base font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                          >
                            <Link href="/contact">
                              <span className="relative z-10 flex items-center">
                                Nous contacter
                                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                              </span>
                              <span className="absolute inset-0 w-full h-full bg-[#233b5d] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                            </Link>
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative h-3 w-16 overflow-hidden rounded-full ${
              index === activeIndex ? "bg-white/50" : "bg-white/20 hover:bg-white/30"
            }`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
            {index === activeIndex && (
              <span
                className="absolute inset-0 bg-white origin-left"
                style={{
                  animation: "progress 6s linear forwards",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
