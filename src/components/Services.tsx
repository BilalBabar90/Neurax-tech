"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Eye,
  MessageSquare,
  Cpu,
  Database,
  Wifi,
  Shield,
  BrainCircuit,
  Workflow,
  LineChart,
  ScanSearch,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
const services = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Virtual Agents & Assistants",
    description:
      "Autonomous AI agents that streamline customer support, manage workflow..",
    tags: ["Chatbots", "Process Automation", "NLP Agents"],
  },
  {
    icon: Layers,
    title: "Generative AI Solutions",
    description:
      "Tailored GPT-like models that create high-quality text, images, videos, or audio for industries such as marketing.",
    tags: ["GPT Models", "Content Generation", "Multimodal AI"],
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "Intelligent systems that automate repetitive tasks like scheduling, reporting, and data processing across business operations.",
    tags: ["Automation", "Task Management", "AI Integration"],
  },
  {
    icon: LineChart,
    title: "Predictive Analytics & Decision Intelligence",
    description:
      "Data-driven forecasting models that evaluate trends, performance, and risks to improve strategic decision-making.",
    tags: ["Forecasting", "Business Intelligence", "Risk Analysis"],
  },
  {
    icon: ScanSearch,
    title: "Medical Imaging & Diagnostics AI",
    description:
      "Deep learning tools that analyze MRIs, CT scans, and X-rays to detect tumors, fractures, and support clinical diagnosis.",
    tags: ["Healthcare AI", "Diagnostics", "Imaging Analysis"],
  },
  {
    icon: Cpu,
    title: "AI Integration & Customization Services",
    description:
      "Custom AI implementations that embed intelligence into CRMs, ERPs, and cloud systems to enhance productivity and scalability.",
    tags: ["Enterprise AI", "Custom Solutions", "System Integration"],
  },
];

  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-b from-background to-muted/20"
    >
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Our Services</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            We offer expert Webflow design, development, SEO, and support services—
            tailored to boost your website’s performance, user experience, and growth.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border hover:shadow-xl transition-all duration-300 cursor-pointer rounded-2xl">
                <CardHeader className="flex flex-row items-center gap-3 p-0 mb-4">
                  <service.icon style={{color : "#F97316"}} className="h-8 w-8 flex-shrink-0" />
                  <CardTitle className="text-xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground p-0">
                  <p className="mb-4">{service.description}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
