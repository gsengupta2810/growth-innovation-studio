import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Leadership",
      icon: "🎯",
      skills: [
        "Product Strategy",
        "Roadmapping",
        "Go-to-Market",
        "Cross-functional Management",
        "User Experience Design",
        "Product Analytics",
        "Feature Prioritization",
        "Stakeholder Management"
      ]
    },
    {
      title: "Growth & Strategy",
      icon: "📈",
      skills: [
        "International Expansion",
        "Funnel Optimization",
        "Market Research",
        "Growth Hacking",
        "Customer Acquisition",
        "Retention Strategies",
        "Pricing Strategy",
        "Market Entry"
      ]
    },
    {
      title: "Technical Tools",
      icon: "🛠️",
      skills: [
        "Jira",
        "Figma",
        "Mixpanel",
        "Tableau",
        "Amplitude",
        "SQL",
        "Python",
        "Google Analytics",
        "HubSpot",
        "Salesforce"
      ]
    },
    {
      title: "AI & Technology",
      icon: "🤖",
      skills: [
        "AI/ML Product Development",
        "LIDAR Technology",
        "Computer Vision",
        "IoT Solutions",
        "Data Science",
        "API Integration",
        "Cloud Platforms",
        "Mobile Technologies"
      ]
    },
    {
      title: "Business Skills",
      icon: "💼",
      skills: [
        "Strategic Planning",
        "Financial Modeling",
        "Team Leadership",
        "Project Management",
        "Vendor Management",
        "Partnership Development",
        "Risk Assessment",
        "Change Management"
      ]
    },
    {
      title: "Industry Expertise",
      icon: "🏭",
      skills: [
        "EdTech",
        "Manufacturing",
        "Mobility/Transportation",
        "B2B SaaS",
        "Consumer Products",
        "Enterprise Software",
        "AI/ML Applications",
        "Global Markets"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building and scaling world-class products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover-lift animate-slide-up bg-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-skill-tag text-skill-tag-fg text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Competencies Summary */}
          <div className="mt-16 bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">🌍</span>
                </div>
                <h4 className="font-semibold mb-2">Global Scale</h4>
                <p className="text-sm text-muted-foreground">
                  Proven ability to scale products across multiple international markets
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <h4 className="font-semibold mb-2">Product Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Deep expertise in AI-powered product development and deployment
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">📊</span>
                </div>
                <h4 className="font-semibold mb-2">Data-Driven</h4>
                <p className="text-sm text-muted-foreground">
                  Analytics-first approach to product decisions and growth strategies
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl">👥</span>
                </div>
                <h4 className="font-semibold mb-2">Team Leadership</h4>
                <p className="text-sm text-muted-foreground">
                  Experience managing large cross-functional teams across Product, Growth, and Customer Success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
