import { Card, CardContent } from "@/components/ui/card"
import { Globe, Smartphone, ShoppingCart, Search, Palette, Settings } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Development",
      description: "Tailored websites built from scratch to meet your unique business requirements and goals.",
      image: "/custom-web-development-coding-on-multiple-screens.jpg",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first designs that look perfect and function flawlessly on all devices and screen sizes.",
      image: "/responsive-web-design-on-phone-tablet-laptop.jpg",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Complete online stores with secure payment processing, inventory management, and user-friendly interfaces.",
      image: "/ecommerce-online-shopping-website-interface.jpg",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Search engine optimization to improve your visibility and drive more organic traffic to your website.",
      image: "/seo-analytics-dashboard-with-search-rankings.jpg",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces designed to enhance user experience and drive conversions.",
      image: "/ui-ux-design-wireframes-and-mockups-on-desk.jpg",
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing website maintenance, updates, and technical support to keep your site running smoothly.",
      image: "/website-maintenance-technical-support-dashboard.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-6 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
