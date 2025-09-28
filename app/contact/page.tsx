"use client"

import type React from "react"

import Spline from "@splinetool/react-spline/next"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Mail, Phone, MapPin, Loader2 } from "lucide-react"

export default function ContactPage() {
  const router = useRouter()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleSplineEvent = (event: any) => {
      console.log("[v0] Spline event received:", event.detail)
      if (event.detail?.name === "getInTouch" || event.detail?.type === "mouseDown") {
        router.push("/#contact")
      }
    }

    window.addEventListener("spline-event", handleSplineEvent)

    return () => {
      window.removeEventListener("spline-event", handleSplineEvent)
    }
  }, [router, isMounted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    console.log("[v0] Contact form submission started:", formData)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log("[v0] Contact form response:", result)

      if (result.success) {
        setSubmitMessage(result.message)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
        })
        setTimeout(() => {
          setIsFormOpen(false)
          setSubmitMessage("")
        }, 3000)
      } else {
        setSubmitMessage(result.message)
      }
    } catch (error) {
      console.error("[v0] Contact form error:", error)
      setSubmitMessage("Sorry, there was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (!isMounted) {
    return (
      <div className="h-screen bg-black flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 w-full relative bg-black flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 w-full relative">
        {typeof window !== "undefined" && window.innerWidth >= 768 ? (
          <div className="w-full h-full">
            <Spline scene="/scenes/robo.splinecode" />
          </div>
        ) : (
          <div className="w-full h-full bg-white flex items-center justify-center">
            <div className="absolute inset-0">
              <img
                src="/modern-web-development-workspace-with-laptop-codin.jpg"
                alt="Contact us - Web development consultation"
                className="w-full h-full object-cover opacity-15"
              />
            </div>
            <div className="text-center text-gray-900 px-6 animate-fade-in relative z-10">
              <h1 className="font-heading font-black text-4xl sm:text-5xl mb-6 animate-slide-up">Get In Touch</h1>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-gray-700 mb-6 animate-slide-up-delay">
                Ready to start your project? Let's discuss your vision
              </p>
            </div>
          </div>
        )}
      </div>

      <Button
        onClick={() => setIsFormOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 transform hover:scale-105"
      >
        <Mail className="w-6 h-6 mr-3" />
        Get in Touch
      </Button>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {submitMessage && (
                <div
                  className={`mb-4 p-3 rounded-md ${submitMessage.includes("Thank you") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                >
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-purple-600" />
                    hello@kriptech.com
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-purple-600" />
                    +1 (555) 123-4567
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 text-purple-600" />
                    123 Web Street, Digital City, DC 12345
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
