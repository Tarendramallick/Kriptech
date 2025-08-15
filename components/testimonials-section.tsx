"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "CEO",
      content:
        "WebCraft Studios transformed our vision into a stunning website that perfectly represents our brand. Their attention to detail and professionalism exceeded our expectations.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      company: "EcoShop Marketplace",
      role: "Founder",
      content:
        "The e-commerce platform they built for us has been a game-changer. Sales increased by 300% in the first quarter after launch. Highly recommended!",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emily Rodriguez",
      company: "FitLife Wellness",
      role: "Marketing Director",
      content:
        "Working with WebCraft Studios was a pleasure from start to finish. They delivered on time, within budget, and the results speak for themselves.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David Thompson",
      company: "ArtSpace Gallery",
      role: "Gallery Owner",
      content:
        "They created a beautiful, artistic website that showcases our gallery perfectly. The virtual tour feature has brought in visitors from around the world.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-6 text-foreground">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the businesses we've helped succeed
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-heading font-bold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-primary font-semibold">{testimonials[currentIndex].role}</div>
                    <div className="text-muted-foreground">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button variant="outline" size="sm" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
