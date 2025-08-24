"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import Spline from "@splinetool/react-spline/next"

const testimonials = [
  {
    name: "Jay Mishra",
    company: "Asylic",
    role: "CEO",
    content:
      "Kriptech transformed our vision into a stunning website that perfectly represents our brand. Their attention to detail and professionalism exceeded our expectations.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    project: "Corporate Website Redesign",
    results: "150% increase in lead generation",
  },
  {
    name: "Tarun Dakalia",
    company: "Tiffany Watch Straps",
    role: "Owner",
    content:
      "The e-commerce platform they built for us has been a game-changer. Sales increased by 300% in the first quarter after launch.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    project: "E-commerce Platform Development",
    results: "$2M+ in transactions processed",
  },
  {
    name: "Emily Rodriguez",
    company: "FitLife Wellness",
    role: "Marketing Director",
    content:
      "Working with Kriptech was a pleasure from start to finish. They delivered on time, within budget, and the results speak for themselves.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    project: "Wellness Platform Development",
    results: "5000+ active members",
  },
  {
    name: "David Thompson",
    company: "ArtSpace Gallery",
    role: "Gallery Owner",
    content:
      "They created a beautiful, artistic website that showcases our gallery perfectly. The virtual tour feature has brought in visitors from around the world.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    project: "Creative Portfolio Website",
    results: "300% increase in virtual visits",
  },
  {
    name: "Jennifer Park",
    company: "LocalEats Restaurant",
    role: "Owner",
    content:
      "Our online ordering system has revolutionized our business. The integration with our POS system is seamless, and customers love how easy it is to place orders.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    project: "Restaurant Website & Ordering System",
    results: "40% increase in online orders",
  },
  {
    name: "Dr. Robert Kim",
    company: "EduLearn Platform",
    role: "Educational Director",
    content:
      "The learning management system they built exceeded our expectations. The user interface is intuitive, and the progress tracking features help both students and instructors.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    project: "Educational Platform Development",
    results: "10,000+ students enrolled",
  },
]

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

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
          <Spline scene="/scenes/space.splinecode" />
        </div>

        {/* Get Started Button */}
        <Button
          asChild
          size="lg"
          className="fixed bottom-4 right-4 z-20 bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Link href="/contact">
            Get Started <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </Button>

        {/* Content overlay with pointer events */}
        <div className="relative z-10 text-center text-white px-4 pointer-events-none">
          <div className="pointer-events-auto">
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
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-black text-4xl mb-12 text-center text-black">Featured Success Stories</h2>
          <div className="relative max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-0">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <Quote className="h-12 w-12 text-purple-600/20 mb-6" />
                    <div className="flex mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-purple-100"
                      />
                      <div>
                        <div className="font-heading font-bold text-xl text-black">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-purple-600 font-semibold text-lg">{testimonials[currentIndex].role}</div>
                        <div className="text-gray-600">{testimonials[currentIndex].company}</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <Badge variant="outline" className="w-full justify-center py-3 text-sm font-semibold">
                      {testimonials[currentIndex].project}
                    </Badge>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                      <div className="text-sm text-gray-600 mb-2 font-medium">Results Achieved</div>
                      <div className="font-bold text-green-600 text-lg">{testimonials[currentIndex].results}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center mt-8 space-x-6">
              <Button variant="outline" size="lg" onClick={prevTestimonial} className="rounded-full bg-transparent">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-purple-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
              <Button variant="outline" size="lg" onClick={nextTestimonial} className="rounded-full bg-transparent">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-black text-4xl mb-12 text-center text-black">What All Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed text-lg">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-100"
                    />
                    <div>
                      <div className="font-semibold text-black text-lg">{testimonial.name}</div>
                      <div className="text-purple-600 font-medium">{testimonial.role}</div>
                      <div className="text-gray-600 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 font-semibold bg-green-50 px-3 py-2 rounded-lg">
                    {testimonial.results}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-black text-purple-600 mb-3">50+</div>
              <div className="text-gray-600 text-lg font-medium">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-black text-purple-600 mb-3">100+</div>
              <div className="text-gray-600 text-lg font-medium">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-black text-purple-600 mb-3">4.9/5</div>
              <div className="text-gray-600 text-lg font-medium">Average Rating</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-black text-purple-600 mb-3">100%</div>
              <div className="text-gray-600 text-lg font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-5xl mb-6 text-white">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's create something amazing together and add your testimonial to our collection
          </p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg">
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
