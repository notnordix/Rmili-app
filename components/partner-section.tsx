"use client"

import Image from "next/image"
import AnimatedBackground from "@/components/animated-background"
import { motion } from "framer-motion"

export default function PartnerSection() {
  return (
    <section className="py-14 bg-white relative overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-10">
          <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-[#233b5d]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Mot Du Partner Manager
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            className="md:col-span-4 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/189892.png?height=300&width=300"
                  alt="Meriem RMILI"
                  width={240}
                  height={240}
                  className="rounded-full border-4 border-[#cca234] shadow-md w-48 h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-md">
              <p className="text-gray-700 leading-relaxed">
                Meriem RMILI, diplômée d&apos;<strong>expertise comptable</strong> et{" "}
                <strong>commissariat aux comptes</strong> en France, et disposant de 14 années d&apos;expériences dont
                la moitié auprès de PriceWaterhouse, Ex- Arthur Andersen et MRICS.
              </p>
              <div className="mt-4 text-right">
                <span className="inline-block h-0.5 w-12 bg-[#cca234]"></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

