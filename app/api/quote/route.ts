import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Validate required fields
    const requiredFields = ["title", "lastName", "firstName", "phone", "email", "company", "activity"]
    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json({ success: false, message: `Le champ ${field} est requis.` }, { status: 400 })
      }
    }

    // Insert into database
    const result = await query<any>(
      `INSERT INTO quote_requests 
       (title, last_name, first_name, phone, email, company, activity, message) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        formData.title,
        formData.lastName,
        formData.firstName,
        formData.phone,
        formData.email,
        formData.company,
        formData.activity,
        formData.message || "",
      ],
    )

    // Log activity
    if (result.insertId) {
      await query(
        `INSERT INTO activity_log (action_type, entity_type, entity_id, action_details) 
         VALUES (?, ?, ?, ?)`,
        ["create", "quote", result.insertId, "New quote request submitted"],
      )
    }

    return NextResponse.json({
      success: true,
      message:
        "Votre demande de devis a été envoyée avec succès. Notre équipe vous contactera dans les plus brefs délais.",
    })
  } catch (error) {
    console.error("Error processing quote request:", error)
    return NextResponse.json(
      { success: false, message: "Une erreur s'est produite lors de l'envoi de votre demande. Veuillez réessayer." },
      { status: 500 },
    )
  }
}

