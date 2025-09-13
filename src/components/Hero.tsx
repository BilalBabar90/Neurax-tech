import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Cpu, Brain } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
// import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-grid-enhanced">
      {/* Particle Background */}
      <ParticleBackground density="high" />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={""} 
          alt="AI Neural Networks and Technology" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/90"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-primary/20 animate-float">
        <Cpu className="h-12 w-12" />
      </div>
      <div className="absolute top-40 right-16 text-accent/20 animate-float" style={{ animationDelay: '-2s' }}>
        <Brain className="h-16 w-16" />
      </div>
      <div className="absolute bottom-32 left-20 text-primary/30 animate-float" style={{ animationDelay: '-4s' }}>
        <Sparkles className="h-8 w-8" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Leading AI Innovation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">Transforming</span>
            <br />
            <span className="glow-text hero-glow">Business with AI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unlock the power of <span className="text-primary font-semibold">Computer Vision</span>, 
            <span className="text-accent font-semibold"> Large Language Models</span>, and 
            <span className="text-primary font-semibold"> Robotics IoT</span> solutions. 
            Transform your business with cutting-edge AI technologies designed for enterprise success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
            >
              <a href="#contact">Start Your AI Journey</a>
              
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              
              <a href="#case_studies">View Our Work</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">AI Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">15+</div>
              <div className="text-sm text-muted-foreground">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">200%</div>
              <div className="text-sm text-muted-foreground">Avg ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">99%</div>
              <div className="text-sm text-muted-foreground">Client Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};