"use client"

import Spline from "@splinetool/react-spline/next"

export function HeroSection() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio")
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <Spline
        scene="https://prod.spline.design/eNjM4hxEtYFxNUdL/scene.splinecode"
        className="absolute inset-0 w-full h-full"
      />
      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-4 right-4 z-10 bg-black text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
      >
        Explore Our Work
      </button>
    </section>
  )
}
