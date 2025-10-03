"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { motion } from "framer-motion";

export const Hero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-grid-enhanced " style={{marginTop : "140px"}}>
      {/* Particle Background */}
      <ParticleBackground density="high" />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={""}
          // alt="AI Neural Networks and Technology"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/90"></div>
      </div>

      {/* Side Lines */}
      <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent z-10"></div>
      <div className="absolute right-8 md:right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-primary mr-2 animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Leading AI Innovation
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="text-foreground block">Transforming</span>
            <span className="glow-text hero-glow block">Business with AI</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Unlock the power of{" "}
            <span className="text-primary font-semibold">Computer Vision</span>,{" "}
            <span className="text-accent font-semibold">
              Large Language Models
            </span>
            , and{" "}
            <span className="text-primary font-semibold">Robotics IoT</span>{" "}
            solutions. Transform your business with cutting-edge AI technologies
            designed for enterprise success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
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
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-2xl mx-auto"
          >
            {[
              { value: "500+", label: "AI Projects", color: "text-primary" },
              { value: "15+", label: "Industries", color: "text-accent" },
              { value: "200%", label: "Avg ROI", color: "text-primary" },
              { value: "99%", label: "Client Success", color: "text-accent" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};