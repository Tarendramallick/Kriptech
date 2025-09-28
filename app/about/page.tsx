import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Users, Zap, Award, Target, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Tarendra Mallick",
      role: "Founder & CEO",
      image: "/tarendra-mallick.png",
      description:
        "Visionary leader with expertise in web development and business strategy. Passionate about creating innovative digital solutions.",
      skills: ["Leadership", "Strategy", "Full-Stack Development"],
    },
    {
      name: "Sneha Kushwaha",
      role: "Lead Developer",
      image: "/professional-woman-developer-portrait.jpg",
      description: "Expert in modern web technologies with a focus on creating scalable and efficient applications.",
      skills: ["React", "Node.js", "Database Design"],
    },
    {
      name: "Jay Mishra",
      role: "UI/UX Designer",
      image: "/professional-designer-portrait.png",
      description: "Creative designer who transforms ideas into beautiful, user-friendly interfaces and experiences.",
      skills: ["UI Design", "UX Research", "Prototyping"],
    },
    {
      name: "Himanshu Singh",
      role: "Backend Developer",
      image: "/professional-man-backend-developer-portrait.jpg",
      description: "Backend specialist focused on building robust server-side solutions and API integrations.",
      skills: ["API Development", "Cloud Services", "Security"],
    },
    {
      name: "Sudhanshu Mishra",
      role: "Frontend Developer",
      image: "/professional-man-frontend-developer-portrait.jpg",
      description: "Frontend expert who brings designs to life with clean, performant, and interactive web interfaces.",
      skills: ["JavaScript", "CSS", "Performance Optimization"],
    },
  ]

  return (
    <>
      <Header />

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="absolute inset-0 bg-[url('/modern-web-development-workspace-with-laptop-codin.jpg')] bg-cover bg-center opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-black text-5xl md:text-7xl text-foreground mb-8">About Kriptech</h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                Pioneering digital excellence through innovative web solutions and cutting-edge technology
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  Excellence Driven
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Target className="w-4 h-4 mr-2" />
                  Client Focused
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Passion Powered
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-black text-4xl md:text-5xl mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  Founded with a vision to transform the digital landscape, Kriptech emerged from a passion for creating
                  exceptional web experiences. We believe that every business deserves a powerful online presence that
                  not only looks stunning but drives real results.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our journey began with a simple mission: to bridge the gap between innovative technology and practical
                  business solutions. Today, we're proud to be a trusted partner for businesses looking to establish
                  their digital footprint and achieve sustainable growth online.
                </p>
                <p className="text-lg leading-relaxed">
                  At Kriptech, we combine technical expertise with creative vision to deliver websites and applications
                  that exceed expectations. Every project is an opportunity to push boundaries and create something
                  extraordinary.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Spotlight */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-black text-4xl md:text-5xl mb-16 text-center">Meet Our Founder</h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                    <div className="relative bg-background rounded-2xl p-8 shadow-2xl">
                      <Image
                        src="/tarendra-mallick.png"
                        alt="Tarendra Mallick - Founder & CEO"
                        width={400}
                        height={400}
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-black text-3xl md:text-4xl mb-2">Tarendra Mallick</h3>
                    <p className="text-xl text-primary font-semibold mb-4">Founder & CEO</p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      "Influencing with Heart, Connecting with Purpose" - Tarendra brings a unique blend of technical
                      expertise and business acumen to Kriptech. With a passion for innovation and a commitment to
                      excellence, he leads our team in creating digital solutions that make a real impact.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed mb-6">
                      His vision extends beyond just building websites - it's about crafting digital experiences that
                      connect businesses with their audiences in meaningful ways. Under his leadership, Kriptech has
                      grown into a trusted partner for businesses seeking to thrive in the digital age.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Leadership", "Strategy", "Full-Stack Development", "Innovation"].map((skill) => (
                        <Badge key={skill} variant="outline" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-4xl md:text-5xl mb-6">Our Amazing Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Meet the talented individuals who bring creativity, expertise, and passion to every project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.slice(1).map((member, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-colors"
                      />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.description}</p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs px-2 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-4xl md:text-5xl mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do at Kriptech
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">Innovation First</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We embrace cutting-edge technologies and creative solutions to deliver exceptional results that set
                    our clients apart from the competition.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">Client Partnership</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in building lasting relationships with our clients, working as true partners to achieve
                    their business goals and digital aspirations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-4">Excellence Delivered</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Quality is never an accident. We maintain the highest standards in every aspect of our work, from
                    initial concept to final delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-black text-4xl md:text-5xl mb-6">Ready to Work Together?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
              Let's discuss how Kriptech can help transform your digital presence and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
