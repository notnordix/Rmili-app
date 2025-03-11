import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="h-1 w-12 bg-[#cca234] mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#233b5d]">Témoignage client</h2>
          </div>

          <div className="relative bg-gray-50/50 rounded-lg p-8 md:p-10">
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
          </div>
        </div>
      </div>
    </section>
  )
}

