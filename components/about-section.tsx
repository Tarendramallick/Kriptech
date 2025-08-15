import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-6 text-foreground">About WebCraft Studios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of web developers dedicated to transforming your ideas into stunning digital
            experiences. With years of expertise and a commitment to excellence, we deliver websites that not only look
            amazing but perform flawlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">Expert Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cutting-edge technologies and best practices to build robust, scalable websites that grow with your
                business.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">Client-Focused</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work closely with you throughout the entire process, ensuring your vision is perfectly realized.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">Fast Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Efficient workflows and agile methodologies ensure your project is delivered on time, every time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
