"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // Small delay to prevent flickering when moving between dropdown and menu
  }

  const toggleMobileExpanded = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name)
  }

  const navItems = [
    { name: "Accueil", href: "/" },
    {
      name: "Domaines d'expertise",
      href: "#",
      dropdown: true,
      items: [
        {
          name: "Audit legal/ contractuel",
          href: "/audit-legal",
          description: "Services d'audit légal et contractuel pour les entreprises",
        },
        {
          name: "Expertise comptable",
          href: "/expertise-comptable",
          description: "Services d'expertise comptable pour entreprises",
        },
        {
          name: "Fiscalité",
          href: "/fiscalite",
          description: "Conseil et services en fiscalité pour optimiser votre situation",
        },
        {
          name: "Juridique",
          href: "/juridique",
          description: "Services juridiques pour entreprises et professionnels",
        },
      ],
    },
    { name: "Qui Sommes-Nous", href: "/apropos" },
    { name: "Annonces", href: "/annonces" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Layout - True centered navigation with expanded width */}
        <div className="hidden lg:grid grid-cols-3 items-center">
          {/* Logo - Left */}
          <div className="flex justify-start">
            <Link href="/" className="relative z-10 transition-all duration-300 hover:opacity-90">
              <Image
                src={scrolled ? "/rmililogo1.png" : "/rmililogo2.png"}
                alt="Cabinet Rmili & Associés"
                width={200}
                height={60}
                className={cn("w-auto transition-all duration-300", scrolled ? "h-12" : "h-14")}
              />
            </Link>
          </div>

          {/* Navigation - Center */}
          <div className="flex justify-center">
            <nav className="flex items-center justify-center min-w-[600px]">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group mx-2"
                  onMouseEnter={item.dropdown ? () => handleMouseEnter(item.name) : undefined}
                  onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
                >
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className={cn(
                          "flex items-center px-6 py-2 text-sm font-medium transition-all duration-200 relative whitespace-nowrap",
                          !scrolled ? "text-white" : "text-gray-800",
                          activeDropdown === item.name && (!scrolled ? "text-[#cca234]" : "text-[#233b5d]"),
                        )}
                      >
                        <span className="relative">
                          {item.name}
                          <span
                            className={cn(
                              "absolute -bottom-0.5 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full",
                              activeDropdown === item.name && "w-full",
                            )}
                          ></span>
                        </span>
                        <ChevronDown
                          className={cn(
                            "ml-1 h-4 w-4 transition-transform duration-200",
                            activeDropdown === item.name && "rotate-180",
                          )}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-1 w-72 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50 overflow-hidden"
                            onMouseEnter={() => {
                              if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current)
                              }
                            }}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className="p-2 grid gap-1">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex flex-col p-3 rounded-md transition-colors relative group/item"
                                >
                                  <span className="font-medium text-gray-900 group-hover/item:text-[#233b5d] transition-colors">
                                    {subItem.name}
                                  </span>
                                  <span className="text-xs text-gray-500 mt-1 group-hover/item:text-gray-700 transition-colors">
                                    {subItem.description}
                                  </span>
                                  <span className="absolute left-0 top-0 w-1 h-0 bg-[#cca234] transition-all duration-200 group-hover/item:h-full"></span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-6 py-2 text-sm font-medium transition-all duration-200 relative whitespace-nowrap",
                        !scrolled ? "text-white" : "text-gray-800",
                      )}
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Button - Right */}
          <div className="flex justify-end">
            <Button
              asChild
              className={cn(
                "font-medium transition-all duration-300 relative overflow-hidden group shadow-md hover:shadow-lg",
                scrolled ? "bg-[#233b5d]" : "bg-[#cca234]",
              )}
            >
              <Link href="/devis">
                <span className="relative z-10 flex items-center">
                  Devis Gratuit
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
                <span
                  className={cn(
                    "absolute inset-0 w-full h-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500",
                    scrolled ? "bg-[#cca234]" : "bg-[#233b5d]",
                  )}
                ></span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 transition-all duration-300 hover:opacity-90">
              <Image
                src={scrolled ? "/rmililogo1.png" : "/rmililogo2.png"}
                alt="Cabinet Rmili & Associés"
                width={200}
                height={60}
                className={cn("w-auto transition-all duration-300", scrolled ? "h-12" : "h-14")}
              />
          </Link>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("transition-all duration-300", !scrolled && "text-white hover:text-[#cca234]")}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            {/* Mobile Menu Content */}
            <SheetContent side="right" className="w-full max-w-xs p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Image
                    src="/rmililogo1.png"
                    alt="Cabinet Rmili & Associés"
                    width={150}
                    height={45}
                    className="h-8 w-auto"
                  />
                </div>

                <div className="flex-1 overflow-auto py-4">
                  <nav className="flex flex-col space-y-1 px-2">
                    {navItems.map((item) => (
                      <div key={item.name}>
                        {item.dropdown ? (
                          <>
                            <button
                              onClick={() => toggleMobileExpanded(item.name)}
                              className="flex items-center justify-between w-full px-3 py-2 text-left text-sm font-medium rounded-md transition-colors hover:text-[#233b5d]"
                            >
                              {item.name}
                              <ChevronRight
                                className={cn(
                                  "h-4 w-4 transition-transform duration-200",
                                  mobileExpanded === item.name && "rotate-90",
                                )}
                              />
                            </button>

                            <AnimatePresence>
                              {mobileExpanded === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 pr-2 py-2 space-y-1">
                                    {item.items?.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="block px-3 py-2 text-sm rounded-md transition-colors hover:text-[#233b5d] relative pl-5"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#cca234]"></span>
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-[#233b5d]"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                <div className="p-4 border-t">
                  <Button
                    asChild
                    className="w-full bg-[#233b5d] text-white transition-all duration-300 relative overflow-hidden group shadow-md hover:shadow-lg"
                  >
                    <Link href="/devis" onClick={() => setIsOpen(false)}>
                      <span className="relative z-10 flex items-center justify-center">
                        Devis Gratuit
                        <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                      <span className="absolute inset-0 w-full h-full bg-[#cca234] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

