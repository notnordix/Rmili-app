"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Send, Loader2, Upload, X, Check, FileText } from "lucide-react"

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    title: "M.",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  })

  const [files, setFiles] = useState<{
    cv: File | null
    coverLetter: File | null
  }>({
    cv: null,
    coverLetter: null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  const cvInputRef = useRef<HTMLInputElement>(null)
  const coverLetterInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: "cv" | "coverLetter") => {
    if (e.target.files && e.target.files[0]) {
      // Check file size (5MB max)
      const file = e.target.files[0]
      const maxSize = 5 * 1024 * 1024 // 5MB

      if (file.size > maxSize) {
        setSubmitStatus({
          success: false,
          message: `La taille du fichier ne doit pas dépasser 5MB.`,
        })

        // Reset the file input
        if (fileType === "cv" && cvInputRef.current) {
          cvInputRef.current.value = ""
        } else if (fileType === "coverLetter" && coverLetterInputRef.current) {
          coverLetterInputRef.current.value = ""
        }

        return
      }

      setFiles((prev) => ({
        ...prev,
        [fileType]: file,
      }))

      // Clear any previous error messages
      if (submitStatus && !submitStatus.success) {
        setSubmitStatus(null)
      }
    }
  }

  const removeFile = (fileType: "cv" | "coverLetter") => {
    setFiles((prev) => ({
      ...prev,
      [fileType]: null,
    }))

    // Reset the file input
    if (fileType === "cv" && cvInputRef.current) {
      cvInputRef.current.value = ""
    } else if (fileType === "coverLetter" && coverLetterInputRef.current) {
      coverLetterInputRef.current.value = ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required files
    if (!files.cv) {
      setSubmitStatus({
        success: false,
        message: "Veuillez télécharger votre CV.",
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Create FormData object to send files and form data
      const formDataToSend = new FormData()

      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })

      // Add files
      if (files.cv) formDataToSend.append("cv", files.cv)
      if (files.coverLetter) formDataToSend.append("coverLetter", files.coverLetter)

      // Send the form data to the API
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (response.ok) {
        // Success response
        setSubmitStatus({
          success: true,
          message:
            result.message ||
            "Votre candidature a été envoyée avec succès. Nous l'examinerons et vous contacterons bientôt.",
        })

        // Reset form
        setFormData({
          title: formData.title,
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          position: "",
          message: "",
        })

        setFiles({
          cv: null,
          coverLetter: null,
        })

        if (cvInputRef.current) cvInputRef.current.value = ""
        if (coverLetterInputRef.current) coverLetterInputRef.current.value = ""
      } else {
        // Error response
        setSubmitStatus({
          success: false,
          message:
            result.message || "Une erreur s'est produite lors de l'envoi de votre candidature. Veuillez réessayer.",
        })
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      // Error response
      setSubmitStatus({
        success: false,
        message: "Une erreur s'est produite lors de l'envoi de votre candidature. Veuillez réessayer.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Civilité
          </label>
          <select
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cca234] focus:border-transparent"
          >
            <option value="M.">M.</option>
            <option value="Mme.">Mme.</option>
            <option value="Mlle.">Mlle.</option>
          </select>
        </div>

        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cca234] focus:border-transparent"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cca234] focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
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

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Téléphone <span className="text-red-500">*</span>
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
      </div>

      {/* Position */}
      <div>
        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
          Poste souhaité <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cca234] focus:border-transparent"
          placeholder="Ex: Expert-Comptable, Collaborateur Comptable, etc."
        />
      </div>

      {/* CV Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          CV (PDF, DOC, DOCX) <span className="text-red-500">*</span>
        </label>
        <div className="mt-1 relative">
          {!files.cv ? (
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
              <Upload className="h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 mb-2">Cliquez pour télécharger votre CV</p>
              <p className="text-xs text-gray-400">Formats acceptés: PDF, DOC, DOCX (max 5MB)</p>
              <input
                ref={cvInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileChange(e, "cv")}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          ) : (
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-[#233b5d] mr-2" />
                <span className="text-sm font-medium text-gray-700 truncate max-w-xs">{files.cv.name}</span>
              </div>
              <button
                type="button"
                onClick={() => removeFile("cv")}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Cover Letter Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Lettre de motivation (PDF, DOC, DOCX) <span className="text-gray-500 text-xs font-normal">(optionnel)</span>
        </label>
        <div className="mt-1 relative">
          {!files.coverLetter ? (
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
              <Upload className="h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 mb-2">Cliquez pour télécharger votre lettre de motivation</p>
              <p className="text-xs text-gray-400">Formats acceptés: PDF, DOC, DOCX (max 5MB)</p>
              <input
                ref={coverLetterInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileChange(e, "coverLetter")}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          ) : (
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-[#233b5d] mr-2" />
                <span className="text-sm font-medium text-gray-700 truncate max-w-xs">{files.coverLetter.name}</span>
              </div>
              <button
                type="button"
                onClick={() => removeFile("coverLetter")}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message complémentaire <span className="text-gray-500 text-xs font-normal">(optionnel)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cca234] focus:border-transparent resize-none"
          placeholder="Informations complémentaires sur votre candidature..."
        ></textarea>
      </div>

      {/* Submit Button */}
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
                Envoyer ma candidature
                <Send className="ml-2 h-4 w-4" />
              </span>
              <span className="absolute inset-0 w-full h-full bg-[#cca234] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
            </>
          )}
        </Button>
      </div>

      {/* Status Message */}
      {submitStatus && (
        <div
          className={`p-4 rounded-md flex items-start ${
            submitStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
        >
          {submitStatus.success ? (
            <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          ) : (
            <X className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          )}
          <p>{submitStatus.message}</p>
        </div>
      )}
    </form>
  )
}

