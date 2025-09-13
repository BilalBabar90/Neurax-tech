"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ParticleBackground } from "./ParticleBackground";
import {
  Award,
  Users,
  Lightbulb,
  Target,
  TrendingUp,
  Clock,
  Filter,
  Map,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-muted/20 to-background"
    >
      <ParticleBackground className="opacity-20" density="low" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="glow-text">NeuraX</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We bridge the gap between cutting-edge AI research and real-world
            applications, delivering solutions that transform businesses and
            empower the next generation of AI professionals.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Award,
              title: "Expert Team",
              desc: "PhD-level AI researchers and industry veterans delivering world-class expertise in every project.",
              color: "primary",
            },
            {
              icon: Users,
              title: "Proven Results",
              desc: "Over 500+ successful AI projects across 15+ industries with measurable business impact.",
              color: "accent",
            },
            {
              icon: Lightbulb,
              title: "Innovation Focus",
              desc: "Leveraging the latest AI breakthroughs to deliver forward-thinking solutions tailored to your needs.",
              color: "primary",
            },
            {
              icon: Target,
              title: "Custom Solutions",
              desc: "Tailored AI strategies designed specifically around your business goals and challenges.",
              color: "accent",
            },
          ].map((cap, i) => (
            <motion.div key={i} variants={item}>
              <Card className="service-card p-6 group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="flex items-start gap-4 pt-2">
                  <div
                    className={`p-3 rounded-xl bg-${cap.color}/10 flex-shrink-0 group-hover:bg-${cap.color}/20 transition-all duration-300`}
                  >
                    <cap.icon
                      className={`h-6 w-6 text-${cap.color} animate-pulse`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{cap.title}</h3>
                    <p className="text-sm text-muted-foreground">{cap.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Propositions */}
        <motion.div
          className="grid md:grid-cols-1 gap-12 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div variants={item}>
            <Card className="service-card p-6 hover:shadow-xl transition-all duration-300">
              <CardContent className="grid grid-cols-2 gap-6 pt-6">
                {[
                  {
                    icon: Award,
                    value: "5+",
                    label: "Years Experience",
                    color: "primary",
                  },
                  {
                    icon: TrendingUp,
                    value: "200%",
                    label: "Avg ROI Increase",
                    color: "accent",
                  },
                  {
                    icon: Clock,
                    value: "48hrs",
                    label: "Response Time",
                    color: "primary",
                  },
                  {
                    icon: Users,
                    value: "100%",
                    label: "Client Retention",
                    color: "accent",
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="text-center"
                  >
                    <stat.icon
                      className={`mx-auto h-8 w-8 text-${stat.color} mb-2`}
                    />
                    <div
                      className={`text-3xl font-bold text-${stat.color} mb-1`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Benefits Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16 pt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-5xl font-bold mb-6">
          Benefits of starting an AI project with consulting{" "}
          <span className="glow-text"></span>
        </h2>
      </motion.div>

      {/* Benefits Grid */}
      <motion.div
        className="container mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            {
              icon: Filter,
              title: "Targeted Investment",
              desc: "Spend on what works, not what looks good in theory. Consulting filters out low-value ideas before they drain resources.",
              color: "primary",
            },
            {
              icon: Map,
              title: "Optimized Project Planning",
              desc: "Get a roadmap shaped by clear technical and business priorities and real-world experience, not guesswork.",
              color: "accent",
            },
            {
              icon: Rocket,
              title: "Faster Deployment",
              desc: "Clear strategy and validated prototypes shorten the gap between idea and live AI solution.",
              color: "primary",
            },
          ].map((benefit, i) => (
            <motion.div key={i} variants={item}>
              <Card className="service-card p-6 group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="flex flex-col items-center text-center pt-2">
                  <div
                    className={`p-3 rounded-xl bg-${benefit.color}/10 flex-shrink-0 group-hover:bg-${benefit.color}/20 transition-all duration-300 mb-4`}
                  >
                    <benefit.icon
                      className={`h-6 w-6 text-${benefit.color} animate-pulse`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
