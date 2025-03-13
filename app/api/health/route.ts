import { NextResponse } from "next/server"
import { getConnection } from "@/lib/db"

// Health check endpoint to verify database connection
export async function GET() {
  try {
    // Test database connection
    const connection = await getConnection()
    const [result] = await connection.query("SELECT 1 as test")

    return NextResponse.json({
      status: "ok",
      database: "connected",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Health check failed:", error)
    return NextResponse.json(
      {
        status: "error",
        message: "Database connection failed",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

