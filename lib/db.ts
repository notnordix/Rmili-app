import mysql from "mysql2/promise"

// Database connection pool
let pool: mysql.Pool | null = null

export async function getConnection() {
  try {
    if (!pool) {
      // Initialize the connection pool
      pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      })
    }

    // Get a connection from the pool
    return pool
  } catch (error) {
    console.error("Error getting database connection:", error)
    throw new Error("Failed to connect to database")
  }
}

// Execute a query with parameters
export async function query<T>(sql: string, params?: any[]): Promise<T> {
  try {
    const connection = await getConnection()
    const [results] = await connection.execute(sql, params)
    return results as T
  } catch (error) {
    console.error("Database query error:", error)
    throw new Error("Database query failed")
  }
}

// Close the connection pool (useful for tests or when shutting down)
export async function closeConnection() {
  if (pool) {
    await pool.end()
    pool = null
  }
}

