// Environment variable validation
export function validateEnv() {
  const requiredEnvVars = ["DB_HOST", "DB_USER", "DB_PASSWORD", "DB_NAME", "NEXTAUTH_SECRET", "NEXTAUTH_URL"]

  const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar])

  if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(", ")}`)
  }

  return true
}

