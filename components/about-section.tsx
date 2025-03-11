"use client"

import Image from "next/image"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="py-14 bg-white relative overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-10">
          <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-[#233b5d]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Cabinet Rmili & Associés, l&apos;Expert Comptable privilégié des chefs d&apos;entreprise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div 
            className="lg:col-span-7 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/ac.jpg?height=500&width=700"
                  alt="Cabinet Rmili & Associés"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -left-3 -bottom-3 w-24 h-24 border-l-4 border-b-4 border-[#cca234] rounded-bl-xl z-0"></div>
              <div className="absolute -right-3 -top-3 w-24 h-24 border-r-4 border-t-4 border-[#233b5d] rounded-tr-xl z-0"></div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Avec son équipe expérimentée, le Cabinet Rmili & Associés est l&apos;
                <Link
                  href="/expertise-comptable"
                  className="font-bold text-[#233b5d] hover:text-[#cca234] transition-colors"
                >
                  Expert Comptable
                </Link>{" "}
                et le Conseiller privilégié des chefs d&apos;entreprise qui ont avant tout besoin de conseil, de
                réactivité et d&apos;outils de gestion simples et efficaces leur permettant de piloter leur société au
                quotidien (reporting, tableau de bord, suivi analytique, situation intermédiaire…) et d&apos;anticiper
                leur développement.
              </p>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <p className="text-gray-700 font-medium mb-4">
                  <strong>Cabinet Rmili est membre de:</strong>
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <Link
                    href="http://www.jecherchemonexpertcomptable.oecmaroc.com/?keyword=RMILI&ville=MARRAKECH&type=pm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:opacity-80 hover:scale-105"
                  >
                    <Image src="/oecmaroc.png" alt="OEC Maroc" width={110} height={60} className="h-auto" />
                  </Link>
                  <Link
                    href="https://www.rics.org/fr/find-a-member/?firstName=meriem&lastName=rmili&town=&countryCode=MA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:opacity-80 hover:scale-105"
                  >
                    <Image src="/rics_logo.gif" alt="RICS" width={200} height={60} className="h-auto" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
