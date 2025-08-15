"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, ShoppingCart, Search, Palette, Settings, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import Spline from "@splinetool/react-spline/next"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Development",
      description: "Tailored websites built from scratch to meet your unique business requirements and goals.",
      features: ["Custom Design", "Responsive Layout", "Performance Optimized", "SEO Ready"],
      price: "Starting at $2,500",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first designs that look perfect and function flawlessly on all devices and screen sizes.",
      features: ["Mobile-First Approach", "Cross-Browser Compatible", "Touch-Friendly Interface", "Fast Loading"],
      price: "Starting at $1,500",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Complete online stores with secure payment processing, inventory management, and user-friendly interfaces.",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Admin Dashboard"],
      price: "Starting at $4,000",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Search engine optimization to improve your visibility and drive more organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Performance Reports"],
      price: "Starting at $800/month",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces designed to enhance user experience and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design System"],
      price: "Starting at $2,000",
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing website maintenance, updates, and technical support to keep your site running smoothly.",
      features: ["24/7 Monitoring", "Security Updates", "Content Updates", "Technical Support"],
      price: "Starting at $300/month",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/BIoqoH9elfCn8oRl/scene.splinecode" />
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
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 text-white/90">
            Comprehensive web development services designed to elevate your digital presence and drive business growth
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="#services">
              Explore Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl mb-6 text-black">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional web development services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-200"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 text-black">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-black">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <p className="font-bold text-lg text-purple-600 mb-4">{service.price}</p>
                    <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-4xl mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
