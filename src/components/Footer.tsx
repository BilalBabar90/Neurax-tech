import { Brain, Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group">
              <div className="relative p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                <Brain className="h-6 w-6 text-primary animate-neural-pulse" />
                <Zap className="absolute -top-1 -right-1 h-3 w-3 text-accent animate-glow" />
              </div>
              <span className="text-xl font-bold glow-text">NeuroTech AI</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transforming businesses with cutting-edge AI solutions that drive 
              innovation, efficiency, and competitive advantage.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-muted/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Computer Vision Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  LLM Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Robotics & IoT Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  AI Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Enterprise AI Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Blog & Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                hello@neurotechai.com
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Silicon Valley, CA
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © 2024 NeuroTech AI. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};