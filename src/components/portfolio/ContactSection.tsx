import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Send, MapPin, Download } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "gsengupta2810@gmail.com",
      href: "mailto:gsengupta2810@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/gunjan-sengupta-354422ab/",
      href: "https://www.linkedin.com/in/gunjan-sengupta-354422ab/"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9933990947",
      href: "tel:+91 9933990947"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Noida, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next product opportunity or collaboration? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Feel free to reach out for product consulting, speaking opportunities, 
                    or potential collaborations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="font-medium hover:text-primary transition-colors"
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Resume Download */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Resume</CardTitle>
                  <CardDescription>
                    Download my complete professional profile and experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="https://drive.google.com/uc?export=download&id=1KxHFTB4px91GYXNMim-AVN3tnmbpDKkb" 
                       target="_blank" 
                       rel="noopener noreferrer">
                  <Button className="w-full" size="lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume (PDF)
                  </Button>
                    </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription>
                    I typically respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What would you like to discuss?"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell me more about your project or opportunity..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Whether you're looking to scale internationally, implement AI solutions, 
              or optimize your product strategy, let's discuss how I can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.open('mailto:gunjan.sengupta@email.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me Directly
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => window.open('https://linkedin.com/in/gunjansengupta', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
