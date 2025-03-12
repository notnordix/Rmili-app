"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    try {
      // In a real implementation, you would send the form data to your backend
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success response
      setSubmitStatus({
        success: true,
        message: "Votre message a été envoyé avec succès. Nous vous contacterons bientôt.",
      })

      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        message: "",
      })
    } catch (error) {
      // Error response
      setSubmitStatus({
        success: false,
        message: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Nom Complet
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cca234] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cca234] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cca234] focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cca234] focus:border-transparent resize-none"
          ></textarea>
        </div>

        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#233b5d] hover:bg-[#1a2d49] text-white py-3 rounded-md transition-all duration-300 relative overflow-hidden group"
          >
            {isSubmitting ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <span className="relative z-10 flex items-center justify-center">
                  Envoyer le message
                  <Send className="ml-2 h-4 w-4" />
                </span>
                <span className="absolute inset-0 w-full h-full bg-[#cca234] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              </>
            )}
          </Button>
        </div>

        {submitStatus && (
          <div
            className={`p-4 rounded-md ${submitStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  )
}

