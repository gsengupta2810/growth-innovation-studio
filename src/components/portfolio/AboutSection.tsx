const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a product and growth leader with <strong>7+ years of experience</strong> scaling 
                products across EdTech, AI, and mobility sectors. I have led international go-to-market 
                strategies, managed cross-functional teams, and built AI-powered products that drive 
                measurable business impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My passion lies in building products that solve real problems, scale globally, and 
                deliver long-term value. I thrive at the intersection of technology and business strategy, 
                turning complex challenges into growth opportunities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From launching products in international markets to redesigning user experiences that 
                drive engagement, I bring a data-driven approach to product development and 
                sustainable growth.
              </p>
            </div>

            {/* Professional Image Placeholder */}
            <div className="animate-slide-up">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center shadow-lg hover-lift">
                  <div className="text-center">
{/*                     <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">📊</span>
                    </div> */}
                    {/* Profile Photo */}
                    <img
                      src="/profile.jpg"   // place your photo inside the public/ folder
                      alt="Gunjan Sengupta"
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
                    />
                    <p className="text-muted-foreground">Professional Photo</p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold mb-2">Product Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Building AI-driven products with lasting user and market impact
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-sm hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold mb-2">Growth Leadership</h3>
              <p className="text-sm text-muted-foreground">
                Driving global expansion and scaling businesses across diverse markets
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-sm hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Data-Driven Results</h3>
              <p className="text-sm text-muted-foreground">
                Leveraging insights to deliver measurable growth and efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
