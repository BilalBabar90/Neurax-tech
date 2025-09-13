"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { FlagShip } from "@/components/ui/FlagShip";

import Picture1 from "../images/Picture1.png";
import Picture2 from "../images/Picture2.png";
import Picture3 from "../images/Picture3.png";
import Picture4 from "../images/Picture4.png";
import Picture5 from "../images/Picture5.png";

const sections = [
  {
    id: "synth-qc",
    title: "Synth-QC",
    pdfPath: "/Synth-QC.pdf",
    image: Picture1,
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Synth-QC</h2>
        <p className="text-muted-foreground">
          AI-powered quality control system for synthetic data validation and
          augmentation in ML workflows.
        </p>
      </div>
    ),
    Problem:
      "High-precision manufacturing faces a critical challenge with AI visual inspection: a lack of high-quality, labeled data for rare but critical defects. This data scarcity limits AI scalability and reliability, leading to high error rates and increased operational costs.",
    Solution:
      "Synth-QC is a generative AI platform that solves this data bottleneck. We use a proprietary GAN to create vast, diverse libraries of synthetic defect images. This perfectly labeled data trains hyper-accurate computer vision models for real-time quality control, achieving near-perfect detection for a fraction of the cost.",
  },
  {
    id: "deep-rad",
    title: "Deep-Rad",
    pdfPath: "/Deep-Rad.pdf",
    image: Picture2,
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Deep-Rad</h2>
        <p className="text-muted-foreground">
          Advanced deep learning model for radiology image interpretation,
          supporting early diagnosis and anomaly detection.
        </p>
      </div>
    ),
    Problem:
      "Medical imaging faces challenges with early detection of rare conditions and accurate interpretation of complex scans, leading to delayed diagnoses and increased healthcare costs.",
    Solution:
      "Deep-Rad leverages state-of-the-art deep learning algorithms to analyze medical images with unprecedented accuracy, enabling early detection of anomalies and providing decision support to radiologists for improved patient outcomes.",
  },
  {
    id: "urban-flow",
    title: "Urban-Flow",
    pdfPath: "/Urban-Flow.pdf",
    image: Picture3,
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Urban-Flow</h2>
        <p className="text-muted-foreground">
          AI-driven urban planning simulation tool analyzing traffic,
          sustainability, and infrastructure efficiency.
        </p>
      </div>
    ),
    Problem:
      "Rapid urbanization creates complex challenges in traffic management, resource allocation, and infrastructure planning, leading to congestion, pollution, and inefficient city operations.",
    Solution:
      "Urban-Flow uses advanced simulation and predictive analytics to model urban environments, optimize traffic flow, and plan sustainable infrastructure development for smarter, more efficient cities.",
  },
  {
    id: "lfa-net",
    title: "LFA-Net",
    pdfPath: "/LFA-Net.pdf",
    image: Picture4,
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">LFA-Net</h2>
        <p className="text-muted-foreground">
          Lightweight Feature Attention Network optimized for real-time mobile
          AI applications.
        </p>
      </div>
    ),
    Problem:
      "Deploying AI models on mobile and edge devices is challenging due to computational constraints, latency issues, and battery life limitations, restricting the potential of on-device AI applications.",
    Solution:
      "LFA-Net is a novel neural architecture that combines lightweight design with attention mechanisms, enabling efficient AI inference on resource-constrained devices without compromising accuracy or performance.",
  },
  {
    id: "neuro-guard",
    title: "Neuro-Guard",
    pdfPath: "/Neuro-Guard.pdf",
    image: Picture5,
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Neuro-Guard</h2>
        <p className="text-muted-foreground">
          Next-generation AI cybersecurity engine leveraging neural anomaly
          detection.
        </p>
      </div>
    ),
    Problem:
      "Traditional cybersecurity solutions struggle to detect sophisticated, evolving threats and zero-day attacks, leaving organizations vulnerable to data breaches and system compromises.",
    Solution:
      "Neuro-Guard employs advanced neural networks for anomaly detection, continuously learning from network behavior to identify and respond to emerging threats in real-time, providing proactive defense against cyber attacks.",
  },
];

export default function VisionSections() {
  const [activeSection, setActiveSection] = useState("synth-qc");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const activeData = sections.find((s) => s.id === activeSection);

  const handleDownload = (pdfPath: string, title: string) => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `${title.replace(/\s+/g, "-").toLowerCase()}-case-study.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (pdfPath: string) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <section className="bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="glow-text">Vision 2025-2026</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-world AI implementations that have transformed businesses and
            delivered measurable results
          </p>
        </div>
      </div>

      <FlagShip />

      <div className="container mx-auto px-6">
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeSection === section.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-muted/20 hover:bg-primary/10"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Active Section Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          {activeData?.content}

          {/* Problem and Solution */}
          <div className="mt-8 text-left">
            <div className="mb-6 p-6 bg-muted/20 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-primary">Problem</h3>
              <p className="text-muted-foreground">{activeData?.Problem}</p>
            </div>

            <div className="p-6 bg-primary/5 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-primary">Solution</h3>
              <p className="text-muted-foreground">{activeData?.Solution}</p>
            </div>
          </div>

          {/* Image (click to expand) */}
          {activeData?.image && (
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src={activeData.image}
                alt={activeData.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform pt-6"
                onClick={() => setModalImage(activeData.image)}
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => handleDownload(activeData?.pdfPath!, activeData?.title!)}
              className="flex-1 px-4 py-2 rounded-full font-semibold text-white transition-all duration-200 hover:opacity-90 bg-gradient-to-r from-primary to-accent"
            >
              <Download className="inline mr-2 h-4 w-4" />
              Download Case Study
            </button>
            <button
              onClick={() => handlePreview(activeData?.pdfPath!)}
              className="px-4 py-2 rounded-full font-semibold border transition-all duration-200 hover:opacity-90 border-primary/50 text-primary hover:bg-primary/10"
            >
              <ExternalLink className="inline mr-2 h-4 w-4" />
              Preview
            </button>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Expanded"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
