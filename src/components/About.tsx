import { Card, CardContent } from "@/components/ui/card";
import { ParticleBackground } from "./ParticleBackground";
import { 
  Award, 
  Users, 
  Lightbulb, 
  Target, 
  Zap, 
  Shield, 
  Clock, 
  TrendingUp 
} from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-muted/20 to-background">
      <ParticleBackground className="opacity-20" density="low" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="glow-text">NeuroTech AI</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We bridge the gap between cutting-edge AI research and real-world applications, 
            delivering solutions that transform businesses and empower the next generation of AI professionals.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="service-card text-center p-6 group">
            <CardContent className="pt-6">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">PhD-level AI researchers and industry veterans</p>
            </CardContent>
          </Card>

          <Card className="service-card text-center p-6 group">
            <CardContent className="pt-6">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">500+ successful projects across 15+ industries</p>
            </CardContent>
          </Card>

          <Card className="service-card text-center p-6 group">
            <CardContent className="pt-6">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Innovation Focus</h3>
              <p className="text-sm text-muted-foreground">Latest AI technologies and breakthrough solutions</p>
            </CardContent>
          </Card>

          <Card className="service-card text-center p-6 group">
            <CardContent className="pt-6">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Custom Solutions</h3>
              <p className="text-sm text-muted-foreground">Tailored AI strategies for your specific needs</p>
            </CardContent>
          </Card>
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rapid Implementation</h3>
                <p className="text-muted-foreground">From concept to deployment in weeks, not months. Our streamlined process gets your AI solutions running quickly.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-muted-foreground">Bank-grade security protocols and compliance with industry standards ensure your data stays protected.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Round-the-clock monitoring and support to ensure your AI systems perform optimally at all times.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
                <p className="text-muted-foreground">Future-proof solutions that grow with your business, handling increased load and complexity seamlessly.</p>
              </div>
            </div>

            {/* Stats Card */}
            <Card className="service-card p-6">
              <CardContent className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">200%</div>
                  <div className="text-sm text-muted-foreground">Avg ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">48hrs</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Client Retention</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};