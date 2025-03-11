"use client"

import { useEffect } from "react"

export default function MobileHeightFix() {
  useEffect(() => {
    // Function to set the viewport height custom property
    const setViewportHeight = () => {
      // First we get the viewport height and multiply it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    // Set the height initially
    setViewportHeight()

    // Add event listeners to update on resize and orientation change
    window.addEventListener("resize", setViewportHeight)
    window.addEventListener("orientationchange", setViewportHeight)

    // Clean up event listeners
    return () => {
      window.removeEventListener("resize", setViewportHeight)
      window.removeEventListener("orientationchange", setViewportHeight)
    }
  }, [])

  return null // This component doesn't render anything
}

