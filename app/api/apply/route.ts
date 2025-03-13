import { type NextRequest, NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import { join } from "path"
import { mkdir } from "fs/promises"
import { ensureUploadsDir } from "@/middleware/ensure-uploads-dir"
import { query } from "@/lib/db"

// Set the maximum file size (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export async function POST(request: NextRequest) {
  try {
    // Ensure uploads directory exists
    await ensureUploadsDir()

    // Parse the multipart form data
    const formData = await request.formData()

    // Extract form fields
    const title = formData.get("title") as string
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const position = formData.get("position") as string
    const message = formData.get("message") as string

    // Extract files
    const cv = formData.get("cv") as File | null
    const coverLetter = formData.get("coverLetter") as File | null

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !position || !cv) {
      return NextResponse.json(
        { success: false, message: "Veuillez remplir tous les champs obligatoires et télécharger votre CV." },
        { status: 400 },
      )
    }

    // Validate file size for CV
    if (cv && cv.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, message: "La taille du CV ne doit pas dépasser 5MB." },
        { status: 400 },
      )
    }

    // Validate file size for cover letter if provided
    if (coverLetter && coverLetter.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, message: "La taille de la lettre de motivation ne doit pas dépasser 5MB." },
        { status: 400 },
      )
    }

    // Create a unique folder for this application based on timestamp and name
    const timestamp = Date.now()
    const applicantFolder = `${timestamp}-${lastName.toLowerCase()}-${firstName.toLowerCase()}`
    const uploadDir = join(process.cwd(), "uploads", applicantFolder)

    // Create the directory if it doesn't exist
    try {
      await mkdir(uploadDir, { recursive: true })
    } catch (error) {
      console.error("Error creating directory:", error)
      return NextResponse.json(
        { success: false, message: "Erreur lors de la création du répertoire de téléchargement." },
        { status: 500 },
      )
    }

    // Save the CV file
    let cvPath = ""
    if (cv) {
      const cvBytes = await cv.arrayBuffer()
      const cvBuffer = Buffer.from(cvBytes)
      cvPath = join(uploadDir, cv.name)
      await writeFile(cvPath, cvBuffer)
    }

    // Save the cover letter file if provided
    let coverLetterPath = ""
    if (coverLetter) {
      const coverLetterBytes = await coverLetter.arrayBuffer()
      const coverLetterBuffer = Buffer.from(coverLetterBytes)
      coverLetterPath = join(uploadDir, coverLetter.name)
      await writeFile(coverLetterPath, coverLetterBuffer)
    }

    // Insert application into database
    const result = await query<any>(
      `INSERT INTO applications 
       (title, first_name, last_name, email, phone, position, message, 
        cv_filename, cv_path, cover_letter_filename, cover_letter_path) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        firstName,
        lastName,
        email,
        phone,
        position,
        message || "",
        cv ? cv.name : "",
        cvPath,
        coverLetter ? coverLetter.name : null,
        coverLetterPath || null,
      ],
    )

    // Log activity
    if (result.insertId) {
      await query(
        `INSERT INTO activity_log (action_type, entity_type, entity_id, action_details) 
         VALUES (?, ?, ?, ?)`,
        ["create", "application", result.insertId, "New job application submitted"],
      )
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Votre candidature a été envoyée avec succès. Nous l'examinerons et vous contacterons bientôt.",
    })
  } catch (error) {
    console.error("Error processing application:", error)
    return NextResponse.json(
      { success: false, message: "Une erreur s'est produite lors du traitement de votre candidature." },
      { status: 500 },
    )
  }
}

