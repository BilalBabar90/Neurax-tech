import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Eye, 
  MessageSquare, 
  Cpu, 
  Database, 
  Wifi, 
  Shield 
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "Computer Vision Systems",
      description: "Quality control, surveillance, and automated inspection solutions",
    },
    {
      icon: MessageSquare,
      title: "Custom LLM Solutions",
      description: "Chatbots, document processing, and intelligent automation",
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description: "Smart factories, predictive maintenance, and connected systems",
    },
    {
      icon: Cpu,
      title: "AI Infrastructure",
      description: "Scalable AI platforms and cloud-native solutions",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced analytics and business intelligence solutions",
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Secure AI implementations and compliance solutions",
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Our Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Empowering businesses with cutting-edge AI solutions that drive innovation and transformation
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
            >
              <CardHeader className="flex flex-row items-center gap-3 p-0 mb-4">
                <service.icon className="h-8 w-8 text-purple-500 flex-shrink-0" />
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground p-0">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
