import { mkdir } from "fs/promises"
import { join } from "path"

// This function ensures the uploads directory exists
export async function ensureUploadsDir() {
  const uploadsDir = join(process.cwd(), "uploads")
  try {
    await mkdir(uploadsDir, { recursive: true })
    return true
  } catch (error) {
    console.error("Error creating uploads directory:", error)
    return false
  }
}

