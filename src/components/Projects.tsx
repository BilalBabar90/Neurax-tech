// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Download,
//   MessageSquare,
//   Bot,
//   Database,
//   Shield,
//   Zap,
//   FileText,
//   Clock,
//   Users,
//   Mic,
//   ExternalLink,
//   ActivitySquare
// } from "lucide-react";

// import Image2 from "../images/2.jpg";
// import Image3 from "../images/3.jpg";
// import Image4 from "../images/4.jpg";

// export const Projects = () => {
//   const caseStudies = [
//     {
//       title: "Intellect Chat",
//       subtitle: "Enterprise RAG Platform for Intelligent Multi-Agent Conversations",
//       description: "A sophisticated, self-hosted Retrieval-Augmented Generation (RAG) platform engineered to power intelligent, context-aware, and secure conversational AI applications. Designed for enterprises requiring deep customization and data sovereignty.",
//       category: "RAG Platform",
//       industry: "Enterprise Technology",
//       icon: MessageSquare,
//       tech: ["Python", "gRPC", "Llama.cpp", "Qdrant", "MongoDB", "Docker", "FastAPI"],
//       results: "Significantly reduced response time and improved answer accuracy",
//       color: "primary",
//       pdfPath: "/intellect-chat-case-study.pdf",
//       keyFeatures: [
//         "Multi-agent architecture with supervisor agent",
//         "Vector processing pipeline for diverse data types",
//         "Dynamic agent selection framework",
//         "Advanced prompt engineering techniques"
//       ],
//       benefits: [
//         "Full data sovereignty and privacy",
//         "Unified platform for customer support and knowledge retrieval",
//         "Automated complex query resolution",
//         "Custom agent-based workflows"
//       ]
// //     },
//     {
//       title: "ZazuAI",
//       subtitle: "On-Premise AI Meeting Assistant for Automated Minutes",
//       description: "An advanced, self-hosted meeting intelligence platform that automatically records, transcribes, and summarizes discussions into actionable minutes. Designed for organizations that prioritize data security and meeting productivity.",
//       category: "Meeting Intelligence",
//       industry: "Enterprise Technology",
//       icon: Mic,
//       tech: ["Python", "Whisper.cpp", "WhisperX", "PyAnnote.audio", "DIART", "Llama.cpp", "Docker"],
//       results: "96% transcription accuracy and 80% diarization accuracy",
//       color: "accent",
//       pdfPath: "/zazu-ai-case-study.pdf",
//       keyFeatures: [
//         "Dual-pipeline architecture for real-time and post-processing",
//         "Live speaker identification during meetings",
//         "Automatic extraction of key decisions and action items",
//         "Word-level accurate transcripts with speaker segmentation"
//       ],
// benefits: [
//   "Eliminates manual note-taking",
//   "Ensures complete data privacy",
//   "Tracks every action item automatically",
//   "Significantly enhances meeting productivity"
// ]
//     },
//     {
//       title: "SandIQ",
//       subtitle: "AI-Powered Thermal Imaging for Proactive Sand Monitoring",
//       description: "An innovative AI-driven system designed to revolutionize sand management in oil and gas separators. By leveraging advanced thermal imaging and deep learning, SandPro provides accurate, real-time monitoring of sand accumulation, eliminating inefficiencies of manual methods or fixed dumping schedules.",
//       category: "Industrial AI",
//       industry: "Oil & Gas, Energy",
//       icon: ActivitySquare,
//       tech: [
//         "Python", "PyTorch", "TensorFlow",
//         "Vision Transformer (ViT)", "CNN", "ST-GNN",
//         "OpenCV", "FLIR Cameras",
//         "AWS", "Docker", "Kubernetes",
//         "React", "D3.js", "FastAPI",
//         "SCADA Integration"
//       ],
//       results: "Achieved 90–95% predictive accuracy, reduced unnecessary dump cycles, minimized equipment wear, lowered hauling/disposal costs, and reduced environmental footprint",
//       color: "success",
//       pdfPath: "/SandIQ.pdf",
//       keyFeatures: [
//         "Dual-model AI architecture combining ViT and CNN",
//         "Spatiotemporal Graph Neural Network (ST-GNN) for trend prediction",
//         "Robust training with contrastive learning for environmental variations",
//         "Edge deployment with low-latency real-time inference",
//         "Seamless SCADA integration"
//       ],
// benefits: [
//   "Shift from reactive to proactive dump scheduling",
//   "Reduced equipment wear and operational costs",
//   "Lower environmental footprint",
//   "Explainable AI with real-time analytics for operators",
//   "Enhanced flowback management and operational efficiency"
// ]
//     }
//   ];


//   const handleDownload = (pdfPath: string, title: string) => {
//     console.log('Download clicked:', pdfPath, title);
//     alert(`Downloading ${title} case study...`);

//     try {
//       const link = document.createElement('a');
//       link.href = pdfPath;
//       link.download = `${title.replace(/\s+/g, '-').toLowerCase()}-case-study.pdf`;
//       link.target = '_blank';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       console.log('Download initiated successfully');
//     } catch (error) {
//       console.error('Download failed:', error);
//       window.open(pdfPath, '_blank');
//     }
//   };

//   const handlePreview = (pdfPath: string) => {
//     console.log('Preview clicked:', pdfPath);
//     alert(`Opening ${pdfPath} in new tab...`);
//     window.open(pdfPath, '_blank');
//   };

//   return (
//     <section id="case_studies" className="pt-24 bg-gradient-to-b from-background to-muted/20">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="glow-text">Case Studies</span>
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             Real-world AI implementations that have transformed businesses and delivered measurable results
//           </p>
//         </div>

//         {/* Case Studies Grid */}
//         <div className="grid grid-cols-1 gap-8 mb-12">
//           {caseStudies.map((study, index) => (
//             <Card
//               key={index}
//               className="service-card group p-6 h-full max-w-3xl mx-auto"
//             >
//               <CardHeader>
//                 <div className="flex items-start justify-between mb-4">
//                   <div className={`p-3 rounded-xl ${study.color === 'primary'
//                     ? 'bg-primary/10 text-primary'
//                     : 'bg-accent/10 text-accent'
//                     } group-hover:${study.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} transition-all duration-300`}>
//                     <study.icon className="h-6 w-6" />
//                   </div>
//                   <Badge variant="secondary" className="text-xs">
//                     {study.category}
//                   </Badge>
//                 </div>

//                 <CardTitle className="text-2xl font-bold mb-2">{study.title}</CardTitle>
//                 <CardDescription className="text-lg font-medium text-muted-foreground mb-3">
//                   {study.subtitle}
//                 </CardDescription>
//                 <CardDescription className="text-muted-foreground mb-4">
//                   {study.description}
//                 </CardDescription>
//               </CardHeader>

//               <CardContent className="space-y-6">
//                 {/* Industry Badge */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm text-muted-foreground">Industry:</span>
//                   <Badge variant="outline" className={`${study.color === 'primary'
//                     ? 'border-primary/50 text-primary'
//                     : 'border-accent/50 text-accent'
//                     }`}>
//                     {study.industry}
//                   </Badge>
//                 </div>

//                 {/* Key Features */}
//                 {/* <div>
//                   <span className="text-sm font-medium text-foreground mb-3 block">Key Features:</span>
//                   <div className="grid gap-2">
//                     {study.keyFeatures.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
//                         <Zap className="h-3 w-3 text-primary flex-shrink-0" />
//                         <span>{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div> */}

//                 {/* Technologies */}
//                 <div>
//                   <span className="text-sm font-medium text-foreground mb-2 block">Technologies:</span>
//                   <div className="flex flex-wrap gap-2">
//                     {study.tech.map((tech, techIndex) => (
//                       <Badge key={techIndex} variant="secondary" className="text-xs">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

{/* Benefits */ }


//                 {/* Results */}
//                 {/* <div className={`p-4 rounded-lg ${study.color === 'primary' ? 'bg-primary/5' : 'bg-accent/5'
//                   } border-l-4 ${study.color === 'primary' ? 'border-primary' : 'border-accent'
//                   }`}>
//                   <div className="text-sm text-muted-foreground">Key Results:</div>
//                   <div className={`font-semibold ${study.color === 'primary' ? 'text-primary' : 'text-accent'
//                     }`}>
//                     {study.results}
//                   </div>
//                 </div> */}

//                 {/* Action Buttons - Simplified */}
//                 <div className="flex gap-3 pt-2">
//                   {/* <button
//                     onClick={() => handleDownload(study.pdfPath, study.title)}
//                     className={`flex-1 px-4 py-2 rounded-full font-semibold text-white transition-all duration-200 hover:opacity-90 ${study.color === 'primary'
//                       ? 'bg-gradient-to-r from-primary to-accent'
//                       : 'bg-gradient-to-r from-accent to-primary'
//                       }`}
//                     style={{ zIndex: 10, position: 'relative' }}
//                   >
//                     <Download className="inline mr-2 h-4 w-4" />
//                     Download Case Study
//                   </button> */}
//                   <button
//                     onClick={() => handlePreview(study.pdfPath)}
//                     className={`px-4 py-2 rounded-full font-semibold border transition-all duration-200 hover:opacity-90 ${study.color === 'primary'
//                       ? 'border-primary/50 text-primary hover:bg-primary/10'
//                       : 'border-accent/50 text-accent hover:bg-accent/10'
//                       }`}
//                     style={{ zIndex: 10, position: 'relative' }}
//                   >
//                     <ExternalLink className="inline mr-2 h-4 w-4" />
//                     Preview
//                   </button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call-to-Action */}
//         {/* <div className="text-center">
//           <Card className="service-card max-w-2xl mx-auto p-8">
//             <CardContent className="pt-6">
//               <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Project?</h3>
//               <p className="text-muted-foreground mb-6">
//                 Join hundreds of companies that have transformed their operations with our AI solutions.
//                 Let's discuss how we can help you achieve similar results.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button
//                   className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 rounded-full"
//                   onClick={() => alert('Start Your Project clicked!')}
//                 >
//                   Start Your Project
//                 </button>
//                 <button
//                   className="border-primary/50 hover:bg-primary/10 text-primary px-8 py-3 rounded-full border"
//                   onClick={() => {
//                     console.log('Download all clicked');
//                     handleDownload('/intellect-chat-case-study.pdf', 'Intellect Chat');
//                     setTimeout(() => handleDownload('/zazu-ai-case-study.pdf', 'ZazuAI'), 500);
//                   }}
//                 >
//                   <Download className="inline mr-2 h-4 w-4" />
//                   Download All Case Studies
//                 </button>
//               </div>
//             </CardContent>
//           </Card>
//         </div> */}
//       </div>
//     </section>
//   );
// };
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
        "Custom agent-based workflows"
      ]
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
        "Significantly enhances meeting productivity"
      ]
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
        "Enhanced flowback management and operational efficiency"
      ]
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
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="group overflow-hidden border hover:shadow-xl transition-all duration-300 rounded-2xl w-full max-w-6xl"
            >
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Image Section (Left Half) */}
                <div className="lg:w-1/2 w-full h-64 lg:h-auto relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Section (Right Half) */}
                <div className="lg:w-1/2 w-full flex flex-col justify-between p-6">
                  <CardHeader className="p-0">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {study.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`${study.color === "primary"
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
                    {/* Tech Stack */}
                    {/* <div className="mb-4">
                      <span className="text-sm font-semibold text-foreground mb-2 block">
                        Technologies:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {study.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div> */}

                    {/* Button */}
                    <button
                      onClick={() => handlePreview(study.pdfPath)}
                      className={`px-4 py-2 rounded-full font-semibold border transition-all duration-200 hover:opacity-90 ${study.color === "primary"
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
          ))}
        </div>
      </div>
    </section>
  );
};
