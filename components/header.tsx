"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleNavigation = (path: string, sectionId?: string) => {
    if (pathname === "/" && sectionId) {
      // If we're on homepage and there's a section ID, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else if (path === "/" && sectionId) {
      // If we need to go to homepage section, navigate then scroll
      window.location.href = `/#${sectionId}`
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/kriptech-logo.png"
              alt="Kriptech Logo"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <span className="font-heading font-black text-xl sm:text-2xl text-primary">Kriptech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/about" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href="/services"
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/testimonials"
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-accent transition-colors text-sm lg:text-base px-4 lg:px-6">
                Get Started
              </Button>
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-left text-base text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-left text-base text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-left text-base text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/testimonials"
                className="text-left text-base text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-accent transition-colors mt-2 py-3">Get Started</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
