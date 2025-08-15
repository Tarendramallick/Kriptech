"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight, Calendar, Users } from "lucide-react"
import Link from "next/link"
import Spline from "@splinetool/react-spline/next"

export default function PortfolioPage() {
  const projects = [
    {
      title: "TechStart Solutions",
      category: "Corporate Website",
      description:
        "Modern corporate website with custom CMS and lead generation system. Built with performance and SEO in mind.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Next.js", "Tailwind CSS", "Sanity CMS"],
      duration: "6 weeks",
      teamSize: "3 developers",
      results: "150% increase in lead generation",
      featured: true,
    },
    {
      title: "EcoShop Marketplace",
      category: "E-commerce Platform",
      description:
        "Full-featured online marketplace with multi-vendor support, payment integration, and advanced analytics dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      duration: "12 weeks",
      teamSize: "5 developers",
      results: "$2M+ in transactions processed",
      featured: true,
    },
    {
      title: "FitLife Wellness",
      category: "Health & Fitness",
      description:
        "Interactive wellness platform with booking system, member portal, and fitness tracking capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      duration: "8 weeks",
      teamSize: "4 developers",
      results: "5000+ active members",
      featured: false,
    },
    {
      title: "ArtSpace Gallery",
      category: "Creative Portfolio",
      description:
        "Stunning portfolio website for contemporary art gallery with virtual tours and immersive 3D experiences.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Vue.js", "Three.js", "Sanity CMS", "WebGL"],
      duration: "10 weeks",
      teamSize: "3 developers",
      results: "300% increase in virtual visits",
      featured: false,
    },
    {
      title: "LocalEats Restaurant",
      category: "Restaurant Website",
      description:
        "Restaurant website with online ordering, table reservations, and comprehensive menu management system.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Express", "Square API", "Twilio"],
      duration: "5 weeks",
      teamSize: "2 developers",
      results: "40% increase in online orders",
      featured: false,
    },
    {
      title: "EduLearn Platform",
      category: "Educational Technology",
      description:
        "Comprehensive online learning platform with course management, student progress tracking, and interactive assessments.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Prisma", "Vercel", "OpenAI API"],
      duration: "14 weeks",
      teamSize: "6 developers",
      results: "10,000+ students enrolled",
      featured: true,
    },
  ]

  const categories = [
    "All",
    "Corporate Website",
    "E-commerce Platform",
    "Health & Fitness",
    "Creative Portfolio",
    "Restaurant Website",
    "Educational Technology",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-screen overflow-hidden">
        <Spline
          scene="/scenes/portfolio.splinecode"
          className="absolute inset-0 w-full h-full"
        />

        <Button
          asChild
          size="lg"
          className="fixed bottom-4 right-4 z-20 bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold shadow-lg"
        >
          <Link href="/contact">
            Get Started <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </Button>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white z-10 pointer-events-auto">
            <h1 className="font-heading font-black text-6xl md:text-7xl mb-6">Our Portfolio</h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Explore our collection of successful projects and digital transformations
            </p>
            <Button
              onClick={() => document.getElementById("portfolio-content")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
            >
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <div id="portfolio-content">
        {/* Project Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-black text-white hover:bg-gray-800" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-black text-3xl mb-12 text-center">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <Badge className="absolute top-4 left-4 bg-black text-white">Featured</Badge>
                    </div>
                    <CardContent className="p-8">
                      <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                      <h3 className="font-heading font-bold text-2xl mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          {project.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          {project.teamSize}
                        </div>
                        <div className="font-semibold text-green-600">{project.results}</div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Button className="w-full bg-black text-white hover:bg-gray-800">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Case Study
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-black text-3xl mb-12 text-center">All Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                    <h3 className="font-heading font-bold text-xl mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-black text-4xl mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch to discuss your vision.
            </p>
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
