import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    const requiredFields = ["fullName", "phone", "email", "message"]
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json({ success: false, message: `Le champ ${field} est requis.` }, { status: 400 })
      }
    }

    // In a production environment, you would store this in a database
    // For now, we'll just log it and return success
    console.log("Contact form submission:", formData)

    // Here you would typically send an email notification
    // and/or store the contact request in a database

    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès. Nous vous contacterons bientôt.",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { success: false, message: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer." },
      { status: 500 },
    )
  }
}

