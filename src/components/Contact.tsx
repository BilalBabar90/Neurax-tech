import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Calendar,
  ArrowRight 
} from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build the <span className="glow-text">Future Together</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your business with AI? Get in touch for a free consultation 
            and discover how our enterprise solutions can drive your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="service-card p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                Get Started Today
              </CardTitle>
              <CardDescription className="text-lg">
                Tell us about your project requirements, and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input 
                    placeholder="Your full name" 
                    className="bg-muted/50 border-border focus:border-primary transition-colors duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-muted/50 border-border focus:border-primary transition-colors duration-200"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company (Optional)</label>
                <Input 
                  placeholder="Your company name" 
                  className="bg-muted/50 border-border focus:border-primary transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your project requirements and business goals..."
                  rows={4}
                  className="bg-muted/50 border-border focus:border-primary transition-colors duration-200"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-3 rounded-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="service-card p-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">hello@neura-x.co</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Phone className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-sm text-muted-foreground">+44 7459 625289</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="text-sm text-muted-foreground">London, UK</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Clock className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Business Hours</div>
                    <div className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM BST</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time Promise */}
            <Card className="service-card p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-6 text-center">
                <h3 className="font-bold text-lg mb-2">⚡ Fast Response Guarantee</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We respond to all inquiries within 24 hours, with most responses sent within 4 hours during business days.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">4hr</div>
                    <div className="text-xs text-muted-foreground">Avg Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">98%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};