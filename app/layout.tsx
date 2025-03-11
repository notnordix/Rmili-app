import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleAnalytics from "@/components/google-analytics"

// Load Roboto font for the entire website
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Expertise Comptable - Commissariat aux Comptes - Fiscalité - Juridique | Cabinet Rmili & Associés",
  description:
    "Rmili & Associés est l'Expert Comptable et le Conseiller privilégié des chefs d'entreprise qui ont avant tout besoin de conseil de réactivité et d'outils de gestion simples et efficaces",
  keywords: "Expert Comptable, Expertise Comptable, Commissariat aux Comptes, Fiscalité, Juridique",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body className={`${roboto.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}



import './globals.css'