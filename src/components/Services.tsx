import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "./ParticleBackground";
import { 
  Building2, 
  Eye, 
  MessageSquare, 
  Bot, 
  Wifi, 
  ArrowRight,
  Briefcase,
  Cpu,
  Database,
  Shield
} from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-background to-muted/20">
      <ParticleBackground className="opacity-30" density="low" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="glow-text">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Empowering businesses with cutting-edge AI solutions that drive innovation and transformation
          </p>
        </div>

        {/* Main Service Categories */}
        <div className="max-w-4xl mx-auto">
          {/* Enterprise AI Solutions */}
          <Card className="service-card group p-8 h-full">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                <Building2 className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Enterprise AI Solutions
              </CardTitle>
              <CardDescription className="text-lg">
                Custom AI implementations that drive business transformation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors duration-200">
                  <Eye className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Computer Vision Systems</h4>
                    <p className="text-sm text-muted-foreground">Quality control, surveillance, and automated inspection solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors duration-200">
                  <MessageSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Custom LLM Solutions</h4>
                    <p className="text-sm text-muted-foreground">Chatbots, document processing, and intelligent automation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors duration-200">
                  <Wifi className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">IoT Integration</h4>
                    <p className="text-sm text-muted-foreground">Smart factories, predictive maintenance, and connected systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors duration-200">
                  <Cpu className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">AI Infrastructure</h4>
                    <p className="text-sm text-muted-foreground">Scalable AI platforms and cloud-native solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors duration-200">
                  <Database className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Data Analytics</h4>
                    <p className="text-sm text-muted-foreground">Advanced analytics and business intelligence solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors duration-200">
                  <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">AI Security</h4>
                    <p className="text-sm text-muted-foreground">Secure AI implementations and compliance solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-accent-foreground font-semibold rounded-full group">
                  Request Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>

              {/* Enterprise Features */}
              <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                <div className="p-3 rounded-lg bg-accent/5">
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
                <div className="p-3 rounded-lg bg-primary/5">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime SLA</div>
                </div>
                <div className="p-3 rounded-lg bg-accent/5">
                  <div className="text-2xl font-bold text-accent">48hr</div>
                  <div className="text-xs text-muted-foreground">Response</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};