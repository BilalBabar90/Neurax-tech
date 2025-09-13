"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { FlagShip } from "@/components/ui/FlagShip";
import { SectionCharts } from "@/components/ui/SectionCharts";

import Picture1 from "../images/Picture1.png";
import Picture2 from "../images/Picture2.png";
import Picture3 from "../images/Picture3.png";
import Picture4 from "../images/Picture4.png";
import Picture5 from "../images/Picture5.png";

const sections = [{ id: "synth-qc", title: "Synth-QC", pdfPath: "/Synth-QC_ AI-Powered Defect Detection.pdf", image: Picture1, content: (<div> <h2 className="text-2xl font-bold mb-4">Synth-QC</h2> <p className="text-muted-foreground"> AI-Powered Defect Detection Using Synthetic Data </p> </div>), Problem: "High-precision manufacturing faces a critical challenge with AI visual inspection: a lack of high-quality, labeled data for rare but critical defects. This data scarcity limits AI scalability and reliability, leading to high error rates and increased operational costs.", Solution: "Synth-QC is a generative AI platform that solves this data bottleneck. We use a proprietary GAN to create vast, diverse libraries of synthetic defect images. This perfectly labeled data trains hyper-accurate computer vision models for real-time quality control, achieving near-perfect detection for a fraction of the cost.", }, { id: "deep-rad", title: "Deep-Rad", pdfPath: "/Deep-Rad_ Privacy-Preserving Medical Diagnostics.pdf", image: Picture2, content: (<div> <h2 className="text-2xl font-bold mb-4">Deep-Rad</h2> <p className="text-muted-foreground"> Privacy-Preserving Medical Diagnostics via Federated Learning </p> </div>), Problem: "The healthcare industry's vast patient data is invaluable for training diagnostic AI, but its use is severely restricted by privacy regulations like HIPAA and GDPR. The inability to centralize this sensitive data is the biggest barrier to developing more accurate medical AI..", Solution: "Deep-Rad uses Federated Learning, a distributed approach where the AI model is sent to the data. Hospitals train the model on their local servers, sending only non-sensitive 'learnings' back. This builds a powerful global model without any patient data ever leaving its source, ensuring full privacy compliance.", }, { id: "urban-flow", title: "Urban-Flow", pdfPath: "/Urban-Flow_ Real-Time Traffic and Crowd Prediction.pdf", image: Picture3, content: (<div> <h2 className="text-2xl font-bold mb-4">Urban-Flow</h2> <p className="text-muted-foreground"> Real-Time Traffic and Crowd Prediction for Smart Cities </p> </div>), Problem: "City governments and public safety officials struggle to manage traffic congestion, public transit overload, and crowd control. Without accurate, real-time predictive data, decision-making is reactive, often leading to gridlock, delayed emergency services, and inefficient resource allocation.", Solution: "Urban-Flow uses a city's existing CCTV network to accurately predict traffic and crowd movement up to an hour in advance. Our platform provides an intuitive dashboard that allows city officials to take proactive measures to manage traffic, public transport, and emergency response, improving efficiency and public safety.", }, { id: "lfa-net", title: "Fin-Narrate", pdfPath: "/Fin-Narrate_ Explainable NLP for Market Intelligence.pdf", image: Picture4, content: (<div> <h2 className="text-2xl font-bold mb-4">Fin-Narrate</h2> <p className="text-muted-foreground"> Explainable NLP for Market Intelligence </p> </div>), Problem: "In financial markets, traditional sentiment analysis isn't enough. Investors need to know 'why' sentiment is changing, but existing tools are black boxes. Analysts waste time manually sifting through data to find the real narrative, an expensive and ineffective process.", Solution: "LFin-Narrate moves beyond sentiment analysis using advanced NLP and Explainable AI (XAI) to identify core narratives influencing markets. Our key XAI layer provides transparent, human-readable explanations, giving investors truly actionable intelligence for faster, more confident decisions.", }, { id: "neuro-guard", title: "Agri-Vision", pdfPath: "/Agri-Vision_ Autonomous Crop Health & Yield Forecasting.pdf", image: Picture5, content: (<div> <h2 className="text-2xl font-bold mb-4">Agri-Vision</h2> <p className="text-muted-foreground"> Autonomous Crop Health & Yield Forecasting </p> </div>), Problem: "The agricultural industry is pressured to increase food production sustainably. Up to 40% of global crop production is lost to pests and diseases, costing the economy over $220 billion annually. Traditional monitoring is manual and often detects problems too late to prevent significant loss.", Solution: "Agri-Vision is an AI platform using autonomous drones with multispectral cameras to survey fields. Our CV models detect early signs of plant stress, disease, and infestation. By fusing this with weather and soil data, our models provide accurate yield forecasts and actionable insights for farmers.", },];

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
    <section className="bg-gradient-to-b from-background to-muted/20" id="vision">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="glow-text">Vision 2025-2026</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-world AI implementations that have transformed businesses...
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-9">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-2xl font-bold mb-6">
            <span className="glow-text">Flagship Proposal (25-26 Vision)</span>
          </h2>
          <p className="text-l text-muted-foreground">
            A strategic initiative driving innovation...
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
              className={`px-6 py-2 rounded-full border transition-all ${activeSection === section.id
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
              <h3 className="text-xl font-bold mb-3 text-primary">The Problem</h3>
              <p className="text-muted-foreground">{activeData?.Problem}</p>
            </div>

            <div className="p-6 bg-primary/5 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-primary">The Solution</h3>
              <p className="text-muted-foreground">{activeData?.Solution}</p>
            </div>
          </div>

          {/* Image */}
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

          {/* Charts */}
          <SectionCharts sectionId={activeSection} />

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() =>
                handleDownload(activeData?.pdfPath!, activeData?.title!)
              }
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

      <div className="text-center max-w-3xl mx-auto my-12">
        <h2 className="text-4xl md:text-3xl font-bold mb-6 text-green-600">
          Let’s map your shortest route to AI success
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Our experts will map the fastest route...
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow-md hover:bg-purple-700 transition"
        >
          Let’s Talk
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
}
