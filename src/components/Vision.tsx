"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FlagShip } from "@/components/ui/FlagShip";

const sections = [
    {
        id: "synth-qc",
        title: "Synth-QC",
        content: (
            <div>
                <h2 className="text-2xl font-bold mb-4">Synth-QC</h2>
                <p className="text-muted-foreground">
                    AI-powered quality control system for synthetic data validation and
                    augmentation in ML workflows.
                </p>
            </div>
        ),
    },
    {
        id: "deep-rad",
        title: "Deep-Rad",
        content: (
            <div>
                <h2 className="text-2xl font-bold mb-4">Deep-Rad</h2>
                <p className="text-muted-foreground">
                    Advanced deep learning model for radiology image interpretation,
                    supporting early diagnosis and anomaly detection.
                </p>
            </div>
        ),
    },
    {
        id: "urban-flow",
        title: "Urban-Flow",
        content: (
            <div>
                <h2 className="text-2xl font-bold mb-4">Urban-Flow</h2>
                <p className="text-muted-foreground">
                    AI-driven urban planning simulation tool analyzing traffic,
                    sustainability, and infrastructure efficiency.
                </p>
            </div>
        ),
    },
    {
        id: "lfa-net",
        title: "LFA-Net",
        content: (
            <div>
                <h2 className="text-2xl font-bold mb-4">LFA-Net</h2>
                <p className="text-muted-foreground">
                    Lightweight Feature Attention Network optimized for real-time mobile
                    AI applications.
                </p>
            </div>
        ),
    },
    {
        id: "neuro-guard",
        title: "Neuro-Guard",
        content: (
            <div>
                <h2 className="text-2xl font-bold mb-4">Neuro-Guard</h2>
                <p className="text-muted-foreground">
                    Next-generation AI cybersecurity engine leveraging neural anomaly
                    detection.
                </p>
            </div>
        ),
    },
];

export default function VisionSections() {
    const [activeSection, setActiveSection] = useState("synth-qc");

    return (
        <section className="bg-gradient-to-b from-background to-muted/20">


            <div className="container mx-auto px-6"> <div className="text-center max-w-3xl mx-auto animate-fade-in-up"> <h2 className="text-4xl md:text-5xl font-bold mb-6"> <span className="glow-text">Vision 2025-2026</span> </h2> <p className="text-xl text-muted-foreground"> Real-world AI implementations that have transformed businesses and delivered measurable results </p> </div> </div> <FlagShip />

            <div className="container mx-auto px-6 ">
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
                    className="max-w-3xl mx-auto text-center"
                >
                    {sections.find((s) => s.id === activeSection)?.content}
                </motion.div>
            </div>
        </section>
    );
}
