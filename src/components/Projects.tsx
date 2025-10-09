import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Shield } from "lucide-react";
import Image2 from "../images/5.jpg";
import Image3 from "../images/1.jpg";
import Image4 from "../images/9.png";

export const Projects = () => {
  const caseStudies = [
    {
      title: "Intellect Chat",
      subtitle:
        "Enterprise RAG Platform for Intelligent Multi-Agent Conversations",
      description:
        "A sophisticated, self-hosted RAG platform engineered to power intelligent, context-aware, and secure conversational AI applications.",
      category: "RAG Platform",
      industry: "Enterprise Technology",
      tech: [
        "Python",
        "gRPC",
        "Llama.cpp",
        "Qdrant",
        "MongoDB",
        "Docker",
        "FastAPI",
      ],
      color: "primary",
      pdfPath: "/intellect-chat-case-study.pdf",
      image: Image2,
      benefits: [
        "Full data sovereignty and privacy",
        "Unified platform for customer support and knowledge retrieval",
        "Automated complex query resolution",
        "Custom agent-based workflows",
      ],
    },
    {
      title: "ZazuAI",
      subtitle: "On-Premise AI Meeting Assistant for Automated Minutes",
      description:
        "An advanced, self-hosted meeting intelligence platform that automatically records, transcribes, and summarizes discussions into actionable minutes.",
      category: "Meeting Intelligence",
      industry: "Enterprise Technology",
      tech: [
        "Python",
        "Whisper.cpp",
        "WhisperX",
        "PyAnnote.audio",
        "DIART",
        "Llama.cpp",
        "Docker",
      ],
      color: "accent",
      pdfPath: "/zazu-ai-case-study.pdf",
      image: Image3,
      benefits: [
        "Eliminates manual note-taking",
        "Ensures complete data privacy",
        "Tracks every action item automatically",
        "Significantly enhances meeting productivity",
      ],
    },
    {
      title: "SandIQ",
      subtitle: "AI-Powered Thermal Imaging for Proactive Sand Monitoring",
      description:
        "An innovative AI-driven system designed to revolutionize sand management in oil and gas separators using deep learning and thermal imaging.",
      category: "Industrial AI",
      industry: "Oil & Gas, Energy",
      tech: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "ViT",
        "CNN",
        "ST-GNN",
        "OpenCV",
        "AWS",
        "Docker",
      ],
      color: "success",
      pdfPath: "/SandIQ.pdf",
      image: Image4,
      benefits: [
        "Shift from reactive to proactive dump scheduling",
        "Reduced equipment wear and operational costs",
        "Lower environmental footprint",
        "Explainable AI with real-time analytics for operators",
        "Enhanced flowback management and operational efficiency",
      ],
    },
  ];

  const handlePreview = (pdfPath: string) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <section
      id="case_studies"
      className="pt-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="glow-text">Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-world AI implementations that have transformed businesses and
            delivered measurable results
          </p>
        </div>

        {/* Case Studies */}
        <div className="flex flex-col items-center gap-10">
          {caseStudies.map((study, index) => {
            // Alternate layout direction based on index
            const isReversed = index % 2 === 1; // for 2nd, 4th, etc.

            return (
              <Card
                key={index}
                className="group overflow-hidden border hover:shadow-xl transition-all duration-300 rounded-2xl w-full max-w-6xl"
              >
                <div
                  className={`flex flex-col lg:flex-row items-stretch ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`} // <-- toggles layout direction
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
                              : study.color === "accent"
                              ? "border-accent/50 text-accent"
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
                      <div>
                        <b className="text-md font-bold text-foreground mb-2 block">
                          Key Benefits:
                        </b>
                        <div className="grid gap-1">
                          {study.benefits.map((benefit, benefitIndex) => (
                            <div
                              key={benefitIndex}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <Shield className="h-3 w-3 text-accent flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>

                    <CardContent className="p-0">
                      <button
                        onClick={() => handlePreview(study.pdfPath)}
                        className={`mt-4 px-4 py-2 rounded-full font-semibold border transition-all duration-200 hover:opacity-90 ${
                          study.color === "primary"
                            ? "border-primary/50 text-primary hover:bg-primary/10"
                            : study.color === "accent"
                            ? "border-accent/50 text-accent hover:bg-accent/10"
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
      </div>
    </section>
  );
};
