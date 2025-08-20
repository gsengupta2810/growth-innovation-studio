import { Button } from "@/components/ui/button";
import { ArrowUp, Heart, Linkedin, Mail, FileText } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Gunjan Sengupta</h3>
              <p className="text-background/80 leading-relaxed mb-6">
                Product & Growth Leader passionate about building AI-powered solutions 
                that scale globally and drive meaningful impact across industries.
              </p>
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-background hover:bg-background/10"
                  onClick={() => window.open('https://www.linkedin.com/in/gunjan-sengupta-354422ab/', '_blank')}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-background hover:bg-background/10"
                  onClick={() => window.open('mailto:gsengupta2810@gmail.com', '_blank')}
                >
                  <Mail className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-background hover:bg-background/10"
                >
                  <FileText className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById("about");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById("experience");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById("skills");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById("publications");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Publications
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-background/80">
                <li>Noida, India</li>
                <li>
                  <a 
                    href="mailto:gsengupta2810@gmail.com"
                    className="hover:text-background transition-colors"
                  >
                    gsengupta2810@mail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+919933990947"
                    className="hover:text-background transition-colors"
                  >
                    +91 99339 90947
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/20">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © {currentYear} Gunjan Sengupta. All rights reserved. Built with{" "}
              <Heart className="w-4 h-4 inline text-red-400" /> and cutting-edge tech.
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={scrollToTop}
              className="text-background hover:bg-background/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
