"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import Spline from "@splinetool/react-spline/next"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "CEO",
      content:
        "WebCraft Studios transformed our vision into a stunning website that perfectly represents our brand. Their attention to detail and professionalism exceeded our expectations. The team was responsive, creative, and delivered exactly what we needed.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      project: "Corporate Website Redesign",
      results: "150% increase in lead generation",
      featured: true,
    },
    {
      name: "Michael Chen",
      company: "EcoShop Marketplace",
      role: "Founder",
      content:
        "The e-commerce platform they built for us has been a game-changer. Sales increased by 300% in the first quarter after launch. The multi-vendor functionality works flawlessly, and our customers love the user experience.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      project: "E-commerce Platform Development",
      results: "$2M+ in transactions processed",
      featured: true,
    },
    {
      name: "Emily Rodriguez",
      company: "FitLife Wellness",
      role: "Marketing Director",
      content:
        "Working with WebCraft Studios was a pleasure from start to finish. They delivered on time, within budget, and the results speak for themselves. The booking system has streamlined our operations significantly.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      project: "Wellness Platform Development",
      results: "5000+ active members",
      featured: false,
    },
    {
      name: "David Thompson",
      company: "ArtSpace Gallery",
      role: "Gallery Owner",
      content:
        "They created a beautiful, artistic website that showcases our gallery perfectly. The virtual tour feature has brought in visitors from around the world. The 3D integration is absolutely stunning.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      project: "Creative Portfolio Website",
      results: "300% increase in virtual visits",
      featured: false,
    },
    {
      name: "Jennifer Park",
      company: "LocalEats Restaurant",
      role: "Owner",
      content:
        "Our online ordering system has revolutionized our business. The integration with our POS system is seamless, and customers love how easy it is to place orders. Revenue from online orders increased by 40%.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      project: "Restaurant Website & Ordering System",
      results: "40% increase in online orders",
      featured: false,
    },
    {
      name: "Dr. Robert Kim",
      company: "EduLearn Platform",
      role: "Educational Director",
      content:
        "The learning management system they built exceeded our expectations. The user interface is intuitive, and the progress tracking features help both students and instructors. We've enrolled over 10,000 students.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      project: "Educational Platform Development",
      results: "10,000+ students enrolled",
      featured: true,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section with Spline */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="/scenes/robo.splinecode" />
        </div>

        <Button
          asChild
          size="lg"
          className="fixed bottom-4 right-4 z-20 bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold shadow-lg"
        >
          <Link href="/contact">
            Get Started <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </Button>

        {/* Content overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">Client Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 text-white/90">
            Discover what our clients say about working with us and the results we've achieved together
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="#testimonials">
              View Testimonials <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-black text-3xl mb-12 text-center text-black">Featured Success Stories</h2>
          <div className="relative max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <Quote className="h-12 w-12 text-purple-600/20 mb-4" />
                    <div className="flex mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl text-black mb-6 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-heading font-bold text-lg text-black">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-purple-600 font-semibold">{testimonials[currentIndex].role}</div>
                        <div className="text-gray-600">{testimonials[currentIndex].company}</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Badge variant="outline" className="w-full justify-center py-2">
                      {testimonials[currentIndex].project}
                    </Badge>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Results Achieved</div>
                      <div className="font-bold text-green-600">{testimonials[currentIndex].results}</div>
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
                      index === currentIndex ? "bg-purple-600" : "bg-gray-300"
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

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-black text-3xl mb-12 text-center text-black">What All Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.content.slice(0, 150)}..."
                  </blockquote>
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-black">{testimonial.name}</div>
                      <div className="text-sm text-purple-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="text-xs text-green-600 font-semibold">{testimonial.results}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <div className="text-4xl font-black text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-4xl mb-6 text-white">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together and add your testimonial to our collection
          </p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
