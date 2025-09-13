"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, CheckCircle2 } from "lucide-react";

const slides = [
  {
    icon: <Users className="h-8 w-8 text-red-500" />,
    title: "We understand your industry",
    description:
      "With AI projects completed in 15+ sectors, we design strategies that fit your rules, workflows, and edge cases from day one.",
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-red-500" />,
    title: "We meet global compliance and accessibility standards",
    description:
      "As an AI consulting company, we follow GDPR, CCPA, HIPAA, WCAG, OWASP, and X12 requirements. ISO 9001 certification proves we build with compliance in mind from the start.",
  },
  {
    icon: <Users className="h-8 w-8 text-red-500" />,
    title: "We scale with your business",
    description:
      "Our AI solutions are designed to grow with you—ensuring long-term value, adaptability, and performance.",
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-red-500" />,
    title: "Proven AI expertise",
    description:
      "Our expert team has delivered enterprise-grade AI implementations globally, with measurable business impact.",
  },
];

export default function WhyChooseUs() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why choose <span className="text-red-600">Aristek</span> for artificial intelligence consulting services
          </h2>
        </div>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-12 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Slides */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1"
          >
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 max-w-2xl mx-auto text-left">
              {slides[current].icon}
              <h3 className="text-lg md:text-xl font-bold mt-4 mb-2">
                {slides[current].title}
              </h3>
              <p className="text-muted-foreground">{slides[current].description}</p>
            </div>
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-12 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
