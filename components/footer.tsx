import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-heading font-black text-2xl mb-4">Kriptech</div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Crafting exceptional web experiences that drive business growth and user engagement.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Web Development</li>
              <li>E-commerce Solutions</li>
              <li>Mobile Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <Facebook className="h-6 w-6 text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Kriptech@gmail.com
              <br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Kriptech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
