import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image1 from "../../images/8.jpg";
import {
    Download,
    Shield,
    Zap,
    ExternalLink,
    Eye,
} from "lucide-react";

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
            tech: ["Python", "Vision Mamba", "FastAPI", "Docker", "Mixed Precision Training", "ICLAHE"],
            results: "High-performance retinal vessel segmentation with minimal computational requirements",
            color: "secondary",
            pdfPath: "/LFA-Net-Revisioned-Proposal.pdf",
            keyFeatures: [
                "LiteFusion-Attention module for efficient local/global context integration",
                "Region-Aware Attention in selective skip connections",
                "Lightweight encoder-decoder architecture",
                "Cloud and edge deployment capabilities",
            ],
            benefits: [
                "Early detection of retinal and systemic diseases",
                "Affordable AI solution for low-resource healthcare settings",
                "Real-time analysis capabilities for point-of-care diagnostics",
                "Secure and compliant with healthcare data regulations",
            ],
        },
    ];

    const handleDownload = (pdfPath, title) => {
        console.log("Download clicked:", pdfPath, title);
        alert(`Downloading ${title} case study...`);

        try {
            const link = document.createElement("a");
            link.href = pdfPath;
            link.download = `${title.replace(/\s+/g, "-").toLowerCase()}-case-study.pdf`;
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            console.log("Download initiated successfully");
        } catch (error) {
            console.error("Download failed:", error);
            window.open(pdfPath, "_blank");
        }
    };

    const handlePreview = (pdfPath) => {
        console.log("Preview clicked:", pdfPath);
        alert(`Opening ${pdfPath} in new tab...`);
        window.open(pdfPath, "_blank");
    };

    return (
        <section className="py-10 bg-gradient-to-b from-background to-muted/20">
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
                                    src={Image1}
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
                                    <div className="mb-4">
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
                                    </div>

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
        </section>
    );
};
