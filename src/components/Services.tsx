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
      title: "UI/UX Design",
      description:
        "Our expert Webflow design team create stunning, user-centered websites that drive conversions through strategic UI/UX design, ensuring your brand stands out.",
      tags: ["Web Design", "UX Research", "Figma Design"],
    },
    {
      icon: MessageSquare,
      title: "Webflow Development",
      description:
        "Transform your vision into reality with our expert Webflow development services. Our certified developers create responsive, scalable websites that perform.",
      tags: ["Webflow Design", "Webflow Experts"],
    },
    {
      icon: Cpu,
      title: "Webflow SEO",
      description:
        "Boost your online visibility with our comprehensive Webflow SEO services, ensuring your website ranks and performs. Rank higher and grow faster with our expert SEO services.",
      tags: ["Webflow SEO", "Link Building", "Global SEO"],
    },
    {
      icon: Shield,
      title: "Growth Marketing",
      description:
        "Turn your Webflow website into a lead generating engine. We combine UX with data to boost conversions, maximize ROI, & grow your brand.",
      tags: [
        "A/B & Multivariate Testing",
        "Funnels",
        "Heatmaps",
        "Landing Page Optimization",
      ],
    },
    {
      icon: Wifi,
      title: "Webflow Migration",
      description:
        "Smooth transitions guaranteed. Migrations from WordPress to Webflow, Squarespace to Webflow, and Wix to Webflow are our specialties.",
      tags: [
        "Migrate to Webflow",
        "Wix to Webflow",
        "WordPress to Webflow",
        "Figma to Webflow",
      ],
    },
    {
      icon: Database,
      title: "Webflow Maintenance and Support",
      description:
        "We provide post launch updates, performance checks, and troubleshooting to keep your Webflow site secure and optimized.",
      tags: ["Webflow Maintenance", "Webflow Support", "24/7 Support", "Ongoing Support"],
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
