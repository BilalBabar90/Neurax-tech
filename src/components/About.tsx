import { Card, CardContent } from "@/components/ui/card";
import { ParticleBackground } from "./ParticleBackground";
import {
  Award,
  Users,
  Lightbulb,
  Target,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Filter,
  Map,
  Rocket
} from "lucide-react";
// import {WhyChooseUs} from "@/components/ui/WhyChooseUs"


export const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-muted/20 to-background"
    >
      <ParticleBackground className="opacity-20" density="low" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="glow-text">NeuraX</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We bridge the gap between cutting-edge AI research and real-world
            applications, delivering solutions that transform businesses and
            empower the next generation of AI professionals.
          </p>
        </div>
        <div className="container mx-auto px-6">
          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card className="service-card p-6 group">
              <CardContent className="flex items-start gap-4 pt-2">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">
                    PhD-level AI researchers and industry veterans delivering
                    world-class expertise in every project.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card p-6 group">
              <CardContent className="flex items-start gap-4 pt-2">
                <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0 group-hover:bg-accent/20 transition-all duration-300">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Over 500+ successful AI projects across 15+ industries with
                    measurable business impact.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card p-6 group">
              <CardContent className="flex items-start gap-4 pt-2">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Innovation Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Leveraging the latest AI breakthroughs to deliver
                    forward-thinking solutions tailored to your needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card p-6 group">
              <CardContent className="flex items-start gap-4 pt-2">
                <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0 group-hover:bg-accent/20 transition-all duration-300">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Custom Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Tailored AI strategies designed specifically around your
                    business goals and challenges.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div className="space-y-8">
            {/* Stats Card */}
            <Card className="service-card p-6">
              <CardContent className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <Award className="mx-auto h-8 w-8 text-primary mb-2" />
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <TrendingUp className="mx-auto h-8 w-8 text-accent mb-2" />
                  <div className="text-3xl font-bold text-accent mb-1">200%</div>
                  <div className="text-sm text-muted-foreground">
                    Avg ROI Increase
                  </div>
                </div>
                <div className="text-center">
                  <Clock className="mx-auto h-8 w-8 text-primary mb-2" />
                  <div className="text-3xl font-bold text-primary mb-1">48hrs</div>
                  <div className="text-sm text-muted-foreground">
                    Response Time
                  </div>
                </div>
                <div className="text-center">
                  <Users className="mx-auto h-8 w-8 text-accent mb-2" />
                  <div className="text-3xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Client Retention
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>





      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up pt-10">
        <h2 className="text-2xl md:text-5xl font-bold mb-6">
          Benefits of starting an AI project with consulting <span className="glow-text"></span>
        </h2>
        <p className="text-xl text-muted-foreground"></p>
      </div>

      <div className="container mx-auto px-6">
        {/* <!-- Benefits Grid --> */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* <!-- Targeted Investment Card --> */}
          <Card className="service-card p-6 group">
            <CardContent className="flex flex-col items-center text-center pt-2">
              <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300 mb-4">
                {/* <!-- Using Filter icon to represent targeted investment --> */}
                <Filter className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Targeted Investment</h3>
                <p className="text-sm text-muted-foreground">
                  Spend on what works, not what looks good in theory. Consulting filters out low-value ideas before they drain resources.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="service-card p-6 group">
            <CardContent className="flex flex-col items-center text-center pt-2">
              <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0 group-hover:bg-accent/20 transition-all duration-300 mb-4">
                <Map className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Optimized Project Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Get a roadmap shaped by clear technical and business priorities and real-world experience, not guesswork.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="service-card p-6 group">
            <CardContent className="flex flex-col items-center text-center pt-2">
              <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300 mb-4">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Faster Deployment</h3>
                <p className="text-sm text-muted-foreground">
                  Clear strategy and validated prototypes shorten the gap between idea and live AI solution.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>


      {/* <WhyChooseUs/> */}

    </section>
  );
};
