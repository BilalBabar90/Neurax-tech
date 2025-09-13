"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Eye,
  MessageSquare,
  Cpu,
  Database,
  Wifi,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "Computer Vision Systems",
      description:
        "AI-powered quality control, surveillance, and automated inspection solutions that detect anomalies, enhance safety, and improve operational efficiency across industries.",
    },
    {
      icon: MessageSquare,
      title: "Custom LLM Solutions",
      description:
        "Tailored large language model (LLM) applications such as chatbots, document processing, and intelligent automation designed to streamline workflows and boost customer engagement.",
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description:
        "Seamlessly connect devices and systems to enable smart factories, predictive maintenance, and real-time monitoring for improved decision-making and operational transparency.",
    },
    {
      icon: Cpu,
      title: "AI Infrastructure",
      description:
        "Robust, scalable AI platforms and cloud-native solutions built to handle complex data pipelines, ensuring high performance, reliability, and future-proof AI adoption.",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description:
        "Advanced data analytics and business intelligence services that transform raw data into actionable insights, helping businesses drive growth and informed decision-making.",
    },
    {
      icon: Shield,
      title: "AI Security",
      description:
        "Comprehensive security frameworks for AI implementations, ensuring compliance, data privacy, and protection against vulnerabilities in critical AI-driven systems.",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Our Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Empowering businesses with cutting-edge AI solutions that drive
            innovation and transformation
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardItem}>
              <Card className="p-6 border hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] cursor-pointer">
                <CardHeader className="flex flex-row items-center gap-3 p-0 mb-4">
                  <service.icon className="h-8 w-8 text-purple-500 flex-shrink-0 animate-pulse" />
                  <CardTitle className="text-xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground p-0">
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
