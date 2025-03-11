"use client"

import { Quote } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import { motion } from "framer-motion"

export default function TestimonialsSection() {
  return (
    <section className="py-14 bg-white relative overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-[#233b5d]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Témoignage client
            </motion.h2>
          </div>

          <motion.div
            className="relative bg-white/80 backdrop-blur-sm rounded-lg p-8 md:p-10 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Quote className="absolute top-6 left-6 text-[#cca234]/10 h-12 w-12" />

            <div className="text-center relative z-10">
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                "Cordiale, directe, professionnelle, pertinente et de bon conseil... Une chance et une belle opportunité
                de travailler ensemble."
              </p>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[#233b5d] rounded-full mb-3 flex items-center justify-center text-white font-bold">
                  B
                </div>
                <h4 className="text-lg font-bold text-[#233b5d]">Bernard Sautereau</h4>
                <p className="text-gray-500 text-sm">Chef d'entreprise, AGROBERRY</p>
                <p className="text-gray-400 text-xs mt-1">15 juin 2015</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

