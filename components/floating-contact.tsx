"use client"

import { Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false)

  const phoneNumbers = [
    { number: "+212522449842", label: "Casablanca" },
    { number: "+212524447702", label: "Marrakech" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {isExpanded && (
        <div className="flex flex-col space-y-2 mb-2">
          {phoneNumbers.map((phone, index) => (
            <Link
              key={index}
              href={`tel:${phone.number}`}
              className="flex items-center bg-white rounded-full shadow-lg px-4 py-2 text-[#233b5d] border border-[#cca234] transition-transform hover:scale-105"
            >
              <span className="mr-2 text-sm font-medium">{phone.label}</span>
              <Phone className="h-4 w-4" />
            </Link>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-700"
      >
        <Phone className="h-6 w-6" />
      </button>
    </div>
  )
}

