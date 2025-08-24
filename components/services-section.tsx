import { Card, CardContent } from "@/components/ui/card"
import { Globe, Smartphone, ShoppingCart, Search, Palette, Settings } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Development",
      description: "Tailored websites built from scratch to meet your unique business requirements and goals.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first designs that look perfect and function flawlessly on all devices and screen sizes.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Complete online stores with secure payment processing, inventory management, and user-friendly interfaces.",
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing website maintenance, updates, and technical support to keep your site running smoothly.",
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
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
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
