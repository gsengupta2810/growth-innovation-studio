import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Mic, Calendar } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Probabilistic Path Planning using Obstacle Trajectory Prediction",
      type: "Research Paper",
      venue: "CODS-COMAD ACM International Conference on Data Science and Management of Data",
      year: "2019",
      description: "A novel approach combining LSTM neural networks with RRT algorithms for enhanced robot navigation in dynamic environments.",
      tags: ["AI/ML", "Robotics", "Navigation", "ACM International"],
      icon: "📄",
      link: "#"
    }
  ];

  const speaking = [
    {
      title: "Computer Vision to control emissions in Steel manufacturing",
      event: "Roadmap & challenges for I&S - Towards Decarbonisation",
      location: "Delhi, India",
      date: "Oct 2024",
      description: "Panel discussion and keynote on deploying AI solutions across global steel manufacturing operations to enhance efficiency and reduce emmissions",
      audience: "100+ Govt officials, industry leaders and global ",
      icon: "🎤"
    },
    {
      title: "Vision AI for industries",
      event: "SynerLeap Up to Speed - AI Products for Industries",
      location: "Online Webinar",
      date: "Sep 2024",
      description: "Webinar on ",
      audience: "100+ Industry experts and IoT company representatives",
      icon: "🌍"
    }
  ];

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Publications & Speaking</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing insights and research across global conferences and publications
            </p>
          </div>

          {/* Publications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-primary" />
              Research Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="hover-lift animate-slide-up">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                          {pub.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                          <CardDescription className="text-base">
                            <span className="font-medium text-primary">{pub.venue}</span> • {pub.year}
                          </CardDescription>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex-shrink-0">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Paper
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {pub.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-skill-tag text-skill-tag-fg">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Speaking Engagements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Mic className="w-6 h-6 mr-3 text-primary" />
              Speaking Engagements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {speaking.map((talk, index) => (
                <Card key={index} className="hover-lift animate-slide-up">
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                        {talk.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight mb-2">{talk.title}</CardTitle>
                        <CardDescription className="text-sm">
                          <span className="font-medium text-primary">{talk.event}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {talk.date} • {talk.location}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {talk.description}
                      </p>
                      <div className="text-xs text-primary font-medium">
                        Audience: {talk.audience}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Speaking Opportunities</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in having me speak at your event? I share insights on product strategy, 
              AI implementation, international expansion, and growth optimization.
            </p>
            <Button size="lg" onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}>
              <Mic className="w-5 h-5 mr-2" />
              Book Speaking Engagement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
