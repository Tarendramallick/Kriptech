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
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Spline
          scene="/scenes/hero.splinecode"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      <div className="md:hidden absolute inset-0 bg-white flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/modern-web-development-workspace-with-laptop-codin.jpg"
            alt="Modern web development workspace with laptop and coding"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="text-center text-gray-900 px-6 animate-fade-in relative z-10">
          <h1 className="font-heading font-black text-4xl sm:text-5xl mb-6 animate-slide-up">
            Professional Web Development
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-gray-700 mb-8 animate-slide-up-delay">
            Creating stunning, high-performance websites that drive results
          </p>
        </div>
      </div>

      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-4 right-4 z-10 bg-black text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
      >
        Explore Our Work
      </button>
    </section>
  )
}
