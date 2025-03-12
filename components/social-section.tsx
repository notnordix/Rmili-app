"use client"

import Link from "next/link"
import { Facebook, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedBackground from "@/components/animated-background"

export default function SocialSection() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/cabinetRMILI/",
      color: "#3b5998",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://ma.linkedin.com/in/meriem-rmili-835a9928",
      color: "#0077b5",
    },
  ]

  return (
    <section className="py-14 bg-white relative overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-[#233b5d] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Retrouvez-nous sur les réseaux sociaux !
        </motion.h2>

        <div className="flex justify-center gap-8">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={social.url} target="_blank" rel="noopener noreferrer" className="group inline-block">
                <div className="relative">
                  {/* Outer ring with infinite pulse animation */}
                  <div
                    className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{ backgroundColor: social.color }}
                  ></div>

                  {/* Main button */}
                  <div
                    className="flex flex-col items-center relative z-10 py-5 px-16 rounded-full shadow-lg transition-all duration-500 group-hover:shadow-xl"
                    style={{ backgroundColor: social.color }}
                  >
                    <div className="text-white mb-1 transform transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </div>
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-8">
                      {social.name}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

