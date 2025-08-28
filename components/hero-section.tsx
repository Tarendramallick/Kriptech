"use client"

import { useEffect, useState } from "react"
import Spline from "@splinetool/react-spline/next"

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile width (you can also use a media query hook if you prefer)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio")
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {isMobile ? (
        // ✅ Lightweight fallback for mobile
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>
      ) : (
        // ✅ Full spline scene for desktop
        <Spline
          scene="/scenes/hero.splinecode"
          className="absolute inset-0 w-full h-full"
        />
      )}

      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-4 right-4 z-10 bg-black text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
      >
        Explore Our Work
      </button>
    </section>
  )
}
