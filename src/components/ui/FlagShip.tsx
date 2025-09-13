import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Download,
    Shield,
    Zap,
    ExternalLink,
    // ActivitySquare,
    Eye
} from "lucide-react";

export const FlagShip = () => {
    const caseStudies = [
        {
            title: "LFA-Net",
            subtitle: "A Lightweight Platform for Proactive Retinal Health Monitoring",
            description: "A lightweight, AI-powered platform for retinal vessel segmentation designed for resource-constrained clinical environments like mobile ophthalmology units and point-of-care diagnostics. It provides high-performance segmentation while maintaining minimal computational footprint.",
            category: "Medical Imaging AI",
            industry: "Healthcare Technology",
            icon: Eye, // This would reference an eye icon component
            tech: ["Python", "Vision Mamba", "FastAPI", "Docker", "Mixed Precision Training", "ICLAHE"],
            results: "High-performance retinal vessel segmentation with minimal computational requirements",
            color: "secondary",
            pdfPath: "/LFA-Net.pdf",
            keyFeatures: [
                "LiteFusion-Attention module for efficient local/global context integration",
                "Region-Aware Attention in selective skip connections",
                "Lightweight encoder-decoder architecture",
                "Cloud and edge deployment capabilities"
            ],
            benefits: [
                "Early detection of retinal and systemic diseases",
                "Affordable AI solution for low-resource healthcare settings",
                "Real-time analysis capabilities for point-of-care diagnostics",
                "Secure and compliant with healthcare data regulations"
            ]
        }
    ];


    const handleDownload = (pdfPath: string, title: string) => {
        console.log('Download clicked:', pdfPath, title);
        alert(`Downloading ${title} case study...`);

        try {
            const link = document.createElement('a');
            link.href = pdfPath;
            link.download = `${title.replace(/\s+/g, '-').toLowerCase()}-case-study.pdf`;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            console.log('Download initiated successfully');
        } catch (error) {
            console.error('Download failed:', error);
            window.open(pdfPath, '_blank');
        }
    };

    const handlePreview = (pdfPath: string) => {
        console.log('Preview clicked:', pdfPath);
        alert(`Opening ${pdfPath} in new tab...`);
        window.open(pdfPath, '_blank');
    };

    return (
        <section id="case_studies" className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 gap-8 mb-12">
                    {caseStudies.map((study, index) => (
                        <Card
                            key={index}
                            className="service-card group p-6 h-full max-w-2xl mx-auto"
                        >
                            <CardHeader>
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-xl ${study.color === 'primary'
                                        ? 'bg-primary/10 text-primary'
                                        : 'bg-accent/10 text-accent'
                                        } group-hover:${study.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} transition-all duration-300`}>
                                        <study.icon className="h-6 w-6" />
                                    </div>
                                    <Badge variant="secondary" className="text-xs">
                                        {study.category}
                                    </Badge>
                                </div>

                                <CardTitle className="text-2xl font-bold mb-2">{study.title}</CardTitle>
                                <CardDescription className="text-lg font-medium text-muted-foreground mb-3">
                                    {study.subtitle}
                                </CardDescription>
                                <CardDescription className="text-muted-foreground mb-4">
                                    {study.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-6">
                                {/* Industry Badge */}
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-muted-foreground">Industry:</span>
                                    <Badge variant="outline" className={`${study.color === 'primary'
                                        ? 'border-primary/50 text-primary'
                                        : 'border-accent/50 text-accent'
                                        }`}>
                                        {study.industry}
                                    </Badge>
                                </div>

                                {/* Key Features */}
                                <div>
                                    <span className="text-sm font-medium text-foreground mb-3 block">Key Features:</span>
                                    <div className="grid gap-2">
                                        {study.keyFeatures.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Zap className="h-3 w-3 text-primary flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <span className="text-sm font-medium text-foreground mb-2 block">Technologies:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {study.tech.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div>
                                    <span className="text-sm font-medium text-foreground mb-2 block">Key Benefits:</span>
                                    <div className="grid gap-1">
                                        {study.benefits.map((benefit, benefitIndex) => (
                                            <div key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Shield className="h-3 w-3 text-accent flex-shrink-0" />
                                                <span>{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Results */}
                                <div className={`p-4 rounded-lg ${study.color === 'primary' ? 'bg-primary/5' : 'bg-accent/5'
                                    } border-l-4 ${study.color === 'primary' ? 'border-primary' : 'border-accent'
                                    }`}>
                                    <div className="text-sm text-muted-foreground">Key Results:</div>
                                    <div className={`font-semibold ${study.color === 'primary' ? 'text-primary' : 'text-accent'
                                        }`}>
                                        {study.results}
                                    </div>
                                </div>

                                {/* Action Buttons - Simplified */}
                                <div className="flex gap-3 pt-2">
                                    <button
                                        onClick={() => handleDownload(study.pdfPath, study.title)}
                                        className={`flex-1 px-4 py-2 rounded-full font-semibold text-white transition-all duration-200 hover:opacity-90 ${study.color === 'primary'
                                            ? 'bg-gradient-to-r from-primary to-accent'
                                            : 'bg-gradient-to-r from-accent to-primary'
                                            }`}
                                        style={{ zIndex: 10, position: 'relative' }}
                                    >
                                        <Download className="inline mr-2 h-4 w-4" />
                                        Download Case Study
                                    </button>
                                    <button
                                        onClick={() => handlePreview(study.pdfPath)}
                                        className={`px-4 py-2 rounded-full font-semibold border transition-all duration-200 hover:opacity-90 ${study.color === 'primary'
                                            ? 'border-primary/50 text-primary hover:bg-primary/10'
                                            : 'border-accent/50 text-accent hover:bg-accent/10'
                                            }`}
                                        style={{ zIndex: 10, position: 'relative' }}
                                    >
                                        <ExternalLink className="inline mr-2 h-4 w-4" />
                                        Preview
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call-to-Action */}
                {/* <div className="text-center">
          <Card className="service-card max-w-2xl mx-auto p-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Project?</h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of companies that have transformed their operations with our AI solutions.
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 rounded-full"
                  onClick={() => alert('Start Your Project clicked!')}
                >
                  Start Your Project
                </button>
                <button
                  className="border-primary/50 hover:bg-primary/10 text-primary px-8 py-3 rounded-full border"
                  onClick={() => {
                    console.log('Download all clicked');
                    handleDownload('/intellect-chat-case-study.pdf', 'Intellect Chat');
                    setTimeout(() => handleDownload('/zazu-ai-case-study.pdf', 'ZazuAI'), 500);
                  }}
                >
                  <Download className="inline mr-2 h-4 w-4" />
                  Download All Case Studies
                </button>
              </div>
            </CardContent>
          </Card>
        </div> */}
            </div>
        </section>
    );
};
