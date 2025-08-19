import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Users, DollarSign } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Ripik.ai",
      role: "Director, International Business & Growth",
      period: "2023 - Present",
      location: "Global",
      logo: "🔬",
      achievements: [
        "Set up international business across 10 countries, acquiring 18 enterprise customers ($500K+ ARR)",
        "Deployed AI solutions (Computer Vision, Process optimisation) for global manufacturing leaders",
        "Built a team of 15 members encompassing Product, Marketing, Analytics and Sales for the international markets",
        "Formulated scalable go-to-market strategies for new emerging markets and successfully executed them"
      ],
      tags: ["AI Product", "International Expansion", "B2B Sales", "SaaS", "Growth"]
    },
    {
      company: "Miko",
      role: "Senior Product Manager",
      period: "2021 - 2023",
      location: "Mumbai, India",
      logo: "🤖",
      achievements: [
        "Redesigned Parent App → 2X session time, 70%+ trial-to-paid conversion",
        "Scaled subscriptions to $2M ARR (+150% YoY growth)",
        "Integrated premium content partnerships (Disney, Paramount, Lingokids)",
        "Led cross-functional team of 15+ PMs, Engineers and Designers"
      ],
      tags: ["Product Management", "EdTech", "Subscriptions", "Mobile Apps"]
    },
    {
      company: "Byju's",
      role: "Senior Program Manager - Growth",
      period: "2020 - 2021",
      location: "Mumbai, India",
      logo: "📚",
      achievements: [
        "Drove customer re-engagement and scaled 1:Many class models to $6M run rate",
        "Improved demo funnel conversion rates by 70% through data-driven process modifications",
        "Built analytics framework for analysis of 100k+ student-teacher interactions",
        "Optimised user outreach strategies across multiple product lines"
      ],
      tags: ["Analytics", "EdTech", "Growth", "Data Science"]
    },
    {
      company: "Ola",
      role: "Senior Business Analyst",
      period: "2018 - 2020",
      location: "Bangalore, India",
      logo: "🚗",
      achievements: [
        "Launched Ola Cabs in the UK, 5 cities including London",
        "Designed supply business plans across UK, AU and NZ",
        "Managed $3M weekly revenue operations",
        "Built demand and supply forecasting models for international markets"
      ],
      tags: ["Market Entry", "Mobility", "International", "Operations"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Experience</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A track record of scaling products and driving growth across global markets
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover-lift animate-slide-up bg-experience-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                        {exp.logo}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary"
                          className="bg-skill-tag text-skill-tag-fg"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Summary */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm hover-lift">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">$10M+</div>
              <div className="text-sm text-muted-foreground">Total Revenue Impact</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm hover-lift">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">150%</div>
              <div className="text-sm text-muted-foreground">Average Growth Rate</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm hover-lift">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">1M+</div>
              <div className="text-sm text-muted-foreground">Users Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
