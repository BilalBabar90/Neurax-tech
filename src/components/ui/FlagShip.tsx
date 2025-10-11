"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image1 from "../../images/8.jpg";
import Image2 from "../../images/6.jpg";
import Image3 from "../../images/7.jpg";
import { Shield, ExternalLink, BrainCircuit, Eye } from "lucide-react";

export const FlagShip = () => {
  const caseStudies = [
    {
      title: "LFA-Net",
      subtitle: "LFA-Net: Proactive Retinal Health Monitoring",
      description:
        "A lightweight, AI-powered platform designed to bring advanced retinal screening to any clinical setting. LFA-Net enables early detection of disease by analyzing retinal vessels with the precision of advanced AI, all on affordable, low-power hardware.",
      category: "Medical Imaging AI",
      industry: "Healthcare",
      icon: Eye,
      color: "secondary",
      pdfPath: "/LFA-Net-Revisioned-Proposal.pdf",
      image: Image1,
      benefits: [
        "Early detection of retinal and systemic diseases",
        "Affordable AI solution for low-resource healthcare settings",
        "Real-time analysis capabilities for point-of-care diagnostics",
        "Secure and compliant with healthcare data regulations",
      ],
    },
    {
      title: "Eye-AD",
      subtitle:
        "A Trustworthy AI Platform for Early Dementia Detection Through Retinal Imaging",
      description:
        "Eye-AD is a groundbreaking AI-powered platform designed for early dementia detection through retinal imaging. It provides a rapid, non-invasive, and affordable diagnostic alternative to MRI and spinal tap procedures.",
      category: "Medical Imaging AI",
      industry: "Healthcare",
      icon: Eye,
      color: "secondary",
      pdfPath: "/Eye-AD-Dimensia-Proposal.pdf",
      image: Image2,
      benefits: [
        "Enables early and accessible dementia screening",
        "Reduces diagnostic costs significantly",
        "Provides interpretable results aligned with clinical biomarkers",
        "Supports rapid deployment in primary care settings",
      ],
    },
    {
      title: "Swin-UMamba",
      subtitle: "A Universal Foundation Model for Medical Image Analysis",
      description:
        "Swin-UMamba is a next-generation AI foundation model leveraging the Mamba architecture and self-supervised learning for precise, efficient, and adaptable medical image segmentation across diverse domains.",
      category: "Medical Imaging AI",
      industry: "Healthcare",
      icon: BrainCircuit,
      color: "primary",
      pdfPath: "/Swin-mamba-proposal.pdf",
      image: Image3,
      benefits: [
        "Accelerates AI deployment in medical imaging",
        "Reduces the need for large labeled datasets",
        "Delivers high accuracy on low-resource hardware",
        "Supports regulatory-ready AI pipelines",
      ],
    },
  ];

  const handlePreview = (pdfPath: string) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <section className="py-10 bg-gradient-to-b from-background to-muted/20">
      <div className="flex flex-col items-center gap-10">
        {caseStudies.map((study, index) => {
          const isReversed = index % 2 === 1;

          return (
            <Card
              key={index}
              className="group overflow-hidden border hover:shadow-xl transition-all duration-300 rounded-2xl w-full max-w-6xl"
            >
              <div
                className={`flex flex-col lg:flex-row items-stretch ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 w-full h-64 lg:h-auto relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 w-full flex flex-col justify-between p-6">
                  <CardHeader className="p-0">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {study.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`${
                          study.color === "primary"
                            ? "border-primary/50 text-primary"
                            : "border-accent/50 text-accent"
                        }`}
                      >
                        {study.industry}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold mb-1">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-muted-foreground mb-3">
                      {study.subtitle}
                    </CardDescription>
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                      {study.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 mt-4">
                    <b className="text-md font-bold text-foreground mb-2 block">
                      Key Benefits:
                    </b>
                    <div className="grid gap-1">
                      {study.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Shield className="h-3 w-3 text-accent flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardContent className="p-0">
                    <button
                      onClick={() => handlePreview(study.pdfPath)}
                      className={`mt-4 px-4 py-2 rounded-full font-semibold border transition-all duration-200 hover:opacity-90 ${
                        study.color === "primary"
                          ? "border-primary/50 text-primary hover:bg-primary/10"
                          : "border-accent/50 text-accent hover:bg-accent/10"
                      }`}
                    >
                      <ExternalLink className="inline mr-2 h-4 w-4" />
                      Preview Case Study
                    </button>
                  </CardContent>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
