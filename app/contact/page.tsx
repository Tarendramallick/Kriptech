"use client"

import type React from "react"

import Spline from "@splinetool/react-spline/next"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const router = useRouter()
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const handleSplineEvent = (event: any) => {
      if (event.detail?.name === "getInTouch" || event.detail?.type === "mouseDown") {
        router.push("/#contact")
      }
    }

    window.addEventListener("spline-event", handleSplineEvent)

    return () => {
      window.removeEventListener("spline-event", handleSplineEvent)
    }
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
    setIsFormOpen(false)
  }

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 w-full">
        <Spline scene="https://prod.spline.design/95Ie0dokMEzK2Z0v/scene.splinecode" />
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

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <Input type="text" required className="w-full" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <Input type="text" required className="w-full" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input type="email" required className="w-full" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <Input type="tel" className="w-full" placeholder="+1 (555) 123-4567" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Budget</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea required rows={4} className="w-full" placeholder="Tell us about your project..." />
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-purple-600" />
                    hello@webdevcompany.com
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
