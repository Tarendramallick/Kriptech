import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "TechStart Solutions",
      category: "Corporate Website",
      description: "Modern corporate website with custom CMS and lead generation system.",
      image: "/modern-corporate-website-design-on-laptop-screen.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "EcoShop Marketplace",
      category: "E-commerce Platform",
      description: "Full-featured online marketplace with multi-vendor support and payment integration.",
      image: "/ecommerce-marketplace-website-with-products-and-sh.jpg",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
    },
    {
      title: "FitLife Wellness",
      category: "Health & Fitness",
      description: "Interactive wellness platform with booking system and member portal.",
      image: "/fitness-wellness-website-with-booking-system-inter.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "ArtSpace Gallery",
      category: "Creative Portfolio",
      description: "Stunning portfolio website for contemporary art gallery with virtual tours.",
      image: "/art-gallery-portfolio-website-with-virtual-tour-in.jpg",
      technologies: ["Vue.js", "Three.js", "Sanity CMS"],
    },
    {
      title: "LocalEats Restaurant",
      category: "Restaurant Website",
      description: "Restaurant website with online ordering, reservations, and menu management.",
      image: "/restaurant-website-with-online-menu-and-ordering-s.jpg",
      technologies: ["React", "Express", "Square API"],
    },
    {
      title: "EduLearn Platform",
      category: "Educational Technology",
      description: "Online learning platform with course management and student progress tracking.",
      image: "/online-learning-platform.png",
      technologies: ["Next.js", "Prisma", "Vercel"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-6 text-foreground">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed ideas into stunning digital experiences
          </p>
        </div>

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
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
