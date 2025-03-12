import { type NextRequest, NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import { join } from "path"
import { mkdir } from "fs/promises"
import { ensureUploadsDir } from "@/middleware/ensure-uploads-dir"

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
    if (cv) {
      const cvBytes = await cv.arrayBuffer()
      const cvBuffer = Buffer.from(cvBytes)
      const cvPath = join(uploadDir, cv.name)
      await writeFile(cvPath, cvBuffer)
    }

    // Save the cover letter file if provided
    if (coverLetter) {
      const coverLetterBytes = await coverLetter.arrayBuffer()
      const coverLetterBuffer = Buffer.from(coverLetterBytes)
      const coverLetterPath = join(uploadDir, coverLetter.name)
      await writeFile(coverLetterPath, coverLetterBuffer)
    }

    // Save application data (in a real app, you would store this in a database)
    const applicationData = {
      title,
      firstName,
      lastName,
      email,
      phone,
      position,
      message,
      cvFilename: cv ? cv.name : null,
      coverLetterFilename: coverLetter ? coverLetter.name : null,
      submittedAt: new Date().toISOString(),
    }

    // Write application data to a JSON file
    await writeFile(join(uploadDir, "application-data.json"), JSON.stringify(applicationData, null, 2))

    // In a real application, you would:
    // 1. Store the files in a cloud storage service like AWS S3
    // 2. Save the application data in a database
    // 3. Send notification emails to the HR team and a confirmation email to the applicant

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

