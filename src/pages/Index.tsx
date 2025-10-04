import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Vision from "@/components/Vision";
import Web from "@/components/Web";
import Image from "@/components/Image"
import Case from "@/components/Case"


const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        <Hero />
        <Web />
        <Image />
        <Services />
        <About />
        <Vision />
        <Projects />
        <Case />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;