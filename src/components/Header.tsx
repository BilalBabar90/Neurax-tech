import { Button } from "@/components/ui/button";
import { Menu, X, Brain, Zap } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="relative p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
              <Brain className="h-6 w-6 text-primary animate-neural-pulse" />
              <Zap className="absolute -top-1 -right-1 h-3 w-3 text-accent animate-glow" />
            </div>
            <span className="text-xl font-bold glow-text">NeuraX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Services
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Contact
            </a>
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in-up">
            <div className="px-6 py-4 space-y-4">
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Services
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Contact
              </a>
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-2 rounded-full transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};