"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Layers,
  Workflow,
  LineChart,
  ScanSearch,
  Cpu,
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Virtual Agents & Assistants",
      description:
        "Autonomous AI agents that streamline customer support, manage workflow, and enhance business operations.",
      tags: ["Chatbots", "Process Automation", "NLP Agents"],
    },
    {
      icon: Layers,
      title: "Generative AI Solutions",
      description:
        "Tailored GPT-like models that create high-quality text, images, and audio for diverse industries.",
      tags: ["GPT Models", "Content Generation", "Multimodal AI"],
    },
    {
      icon: Workflow,
      title: "AI Workflow Automation",
      description:
        "Intelligent systems that automate repetitive tasks like scheduling, reporting, and data processing.",
      tags: ["Automation", "Task Management", "AI Integration"],
    },
    {
      icon: LineChart,
      title: "Predictive Analytics & Decision Intelligence",
      description:
        "Data-driven forecasting models that evaluate trends, performance, and risks to support smart decisions.",
      tags: ["Forecasting", "Business Intelligence", "Risk Analysis"],
    },
    {
      icon: ScanSearch,
      title: "Medical Imaging & Diagnostics AI",
      description:
        "Deep learning tools that analyze MRIs, CT scans, and X-rays to detect diseases and assist doctors.",
      tags: ["Healthcare AI", "Diagnostics", "Imaging Analysis"],
    },
    {
      icon: Cpu,
      title: "AI Integration & Customization Services",
      description:
        "Custom AI implementations that embed intelligence into CRMs, ERPs, and cloud platforms.",
      tags: ["Enterprise AI", "Custom Solutions", "System Integration"],
    },
  ];

  return (
    <section id="services" className="bg-white py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer expert design, development, SEO, and AI integration services
            that help your brand grow, rank, and perform.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white p-8"
            >
              {/* Icon (on top) */}
              <div className="mb-4">
                <service.icon className="h-10 w-10 text-black" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm border border-gray-200 rounded-full text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
