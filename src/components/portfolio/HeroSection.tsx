import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Professional Photo Placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl hover-lift">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-muted flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold text-muted-foreground">GS</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Gunjan Sengupta
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8">
            Product & Growth Leader
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Driving innovation, scaling AI-powered products, and building sustainable growth 
            strategies across global markets with 7+ years of proven experience.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://drive.google.com/file/d/1KxHFTB4px91GYXNMim-AVN3tnmbpDKkb/view?usp=drive_link" 
             target="_blank" 
             rel="noopener noreferrer">
            <Button size="lg" className="group">
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Resume
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$10M+</div>
              <div className="text-sm text-muted-foreground">Revenue Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Countries Expanded Into</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
