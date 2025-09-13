import { Button } from "@/components/ui/button";
// ...existing code...
import { Badge } from "@/components/ui/badge";
import { Sparkles, BookOpen, Grid3X3, Search, Wand2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import KolamBackground from "@/components/KolamBackground";
import KolamSlideshow from "@/components/KolamSlideshow";

export default function Home() {
  const navigate = useNavigate();
// ...existing code...

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <KolamBackground animated={true} />
      
  {/* Hero Section - Two Column Layout */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-fade-in order-1 lg:order-1">
              <div className="space-y-6">
                <Badge className="bg-primary text-primary-foreground px-6 py-3 text-lg">
                  <Grid3X3 className="h-5 w-5 mr-3" />
                  A Living Heritage of India
                </Badge>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="kolam-accent block">Kolam Heritage</span>
                    <span className="kolam-accent block">Project</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed">
                    <span className="kolam-accent">Symmetry</span>, <span className="kolam-accent">Culture</span>, and <span className="kolam-accent">Mathematics</span> Reimagined
                  </p>
                </div>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Discover the profound beauty of Kolam art — ancient geometric patterns that weave together
                  mathematics, spirituality, and cultural heritage into daily life across South India.
                </p>
              </div>

              {/* Quick Access Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  onClick={() => navigate("/analyse")}
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 via-primary to-orange-500 hover:from-purple-700 hover:via-primary/90 hover:to-orange-600 text-white font-bold text-lg px-8 py-4 h-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Search className="h-5 w-5 mr-3" />
                  🔎 Analyse a Kolam
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                <Button
                  onClick={() => navigate("/gallery")}
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-primary to-purple-600 hover:from-orange-600 hover:via-primary/90 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 h-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Wand2 className="h-5 w-5 mr-3" />
                  ✨ Generate a Kolam
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={() => navigate("/gallery")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 h-auto"
                >
                  <Sparkles className="h-5 w-5 mr-2" />
                  Explore Digital Archive
                </Button>
                <Button
                  onClick={() => navigate("/kolam")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 h-auto"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Learn About Kolam
                </Button>
              </div>
            </div>

            {/* Right Column - Kolam Slideshow */}
            <div className="order-2 lg:order-2 flex justify-center">
              <KolamSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* About This Project Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative">
        {/* Enhanced Decorative Kolam Pattern */}
        <div className="absolute top-8 right-8 opacity-30 hidden md:block">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-primary animate-pulse">
            <g stroke="currentColor" strokeWidth="1.5" fill="none">
              {/* Mathematical grid dots */}
              <circle cx="20" cy="20" r="2" fill="currentColor"/>
              <circle cx="40" cy="20" r="2" fill="currentColor"/>
              <circle cx="60" cy="20" r="2" fill="currentColor"/>
              <circle cx="80" cy="20" r="2" fill="currentColor"/>
              <circle cx="100" cy="20" r="2" fill="currentColor"/>
              <circle cx="20" cy="40" r="2" fill="currentColor"/>
              <circle cx="40" cy="40" r="2" fill="currentColor"/>
              <circle cx="60" cy="40" r="2" fill="currentColor"/>
              <circle cx="80" cy="40" r="2" fill="currentColor"/>
              <circle cx="100" cy="40" r="2" fill="currentColor"/>
              <circle cx="20" cy="60" r="2" fill="currentColor"/>
              <circle cx="40" cy="60" r="2" fill="currentColor"/>
              <circle cx="60" cy="60" r="2" fill="currentColor"/>
              <circle cx="80" cy="60" r="2" fill="currentColor"/>
              <circle cx="100" cy="60" r="2" fill="currentColor"/>
              <circle cx="20" cy="80" r="2" fill="currentColor"/>
              <circle cx="40" cy="80" r="2" fill="currentColor"/>
              <circle cx="60" cy="80" r="2" fill="currentColor"/>
              <circle cx="80" cy="80" r="2" fill="currentColor"/>
              <circle cx="100" cy="80" r="2" fill="currentColor"/>
              <circle cx="20" cy="100" r="2" fill="currentColor"/>
              <circle cx="40" cy="100" r="2" fill="currentColor"/>
              <circle cx="60" cy="100" r="2" fill="currentColor"/>
              <circle cx="80" cy="100" r="2" fill="currentColor"/>
              <circle cx="100" cy="100" r="2" fill="currentColor"/>

              {/* Traditional Kolam pattern */}
              <path d="M20 20 Q40 10 60 20 Q80 10 100 20 Q110 40 100 60 Q110 80 100 100 Q80 110 60 100 Q40 110 20 100 Q10 80 20 60 Q10 40 20 20Z"/>
              <path d="M40 40 Q60 30 80 40 Q90 60 80 80 Q60 90 40 80 Q30 60 40 40Z"/>
              <path d="M60 60 Q70 50 80 60 Q70 70 60 60Z"/>

              {/* Mathematical symmetry lines */}
              <line x1="60" y1="10" x2="60" y2="110" strokeDasharray="2,2" opacity="0.5"/>
              <line x1="10" y1="60" x2="110" y2="60" strokeDasharray="2,2" opacity="0.5"/>
            </g>
          </svg>
        </div>

        {/* Additional mathematical formula decoration */}
        <div className="absolute top-8 left-8 opacity-20 hidden lg:block">
          <svg width="100" height="60" viewBox="0 0 100 60" className="text-primary">
            <text x="10" y="20" fontSize="12" fill="currentColor" fontFamily="monospace">∑ f(x,y) = </text>
            <text x="10" y="35" fontSize="12" fill="currentColor" fontFamily="monospace">symmetry</text>
            <text x="10" y="50" fontSize="12" fill="currentColor" fontFamily="monospace">+ beauty</text>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              About This <span className="kolam-accent">Project</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                This project explores the traditional art of <span className="kolam-accent font-semibold">Kolam</span> — 
                a cultural practice of South India blending art, ingenuity, and <span className="kolam-accent font-semibold">mathematics</span>. 
                The goal is to study its design principles, recreate <span className="kolam-accent font-semibold">Kolam</span> using 
                computer programs, and preserve its heritage through modern <span className="kolam-accent font-semibold">technology</span>.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                <span className="kolam-accent font-semibold">Kolams</span> (also called Muggu, Rangoli, Rangavalli) are significant 
                <span className="kolam-accent font-semibold"> cultural</span> traditions of India, blending art, ingenuity, and 
                <span className="kolam-accent font-semibold"> culture</span>. The challenge is to capture their mathematical, 
                symmetrical, and cultural essence in a programmatic and visual way.
              </p>
            </div>

            {/* Project Highlights with Enhanced Kolam Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto relative group">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary group-hover:scale-110 transition-transform">
                    <g stroke="currentColor" strokeWidth="1.5" fill="none">
                      {/* Research microscope with kolam pattern */}
                      <circle cx="12" cy="12" r="8"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="12" cy="8" r="1" fill="currentColor"/>
                      <circle cx="12" cy="16" r="1" fill="currentColor"/>
                      <circle cx="8" cy="12" r="1" fill="currentColor"/>
                      <circle cx="16" cy="12" r="1" fill="currentColor"/>
                      <path d="M12 4 Q16 8 12 12 Q8 8 12 4"/>
                      <path d="M20 12 Q16 16 12 12 Q16 8 20 12"/>
                      <path d="M12 20 Q8 16 12 12 Q16 16 12 20"/>
                      <path d="M4 12 Q8 8 12 12 Q8 16 4 12"/>
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Research & Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Study traditional design principles and mathematical foundations of Kolam patterns
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto relative group">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary group-hover:scale-110 transition-transform">
                    <g stroke="currentColor" strokeWidth="1.5" fill="none">
                      {/* Computer screen with kolam code */}
                      <rect x="2" y="4" width="20" height="14" rx="2"/>
                      <rect x="2" y="18" width="20" height="2" rx="1"/>
                      {/* Code pattern resembling kolam */}
                      <circle cx="8" cy="10" r="1" fill="currentColor"/>
                      <circle cx="12" cy="10" r="1" fill="currentColor"/>
                      <circle cx="16" cy="10" r="1" fill="currentColor"/>
                      <path d="M8 10 Q12 6 16 10" strokeWidth="1"/>
                      <path d="M8 10 Q12 14 16 10" strokeWidth="1"/>
                      <line x1="6" y1="12" x2="18" y2="12" strokeWidth="0.5"/>
                      <line x1="6" y1="14" x2="14" y2="14" strokeWidth="0.5"/>
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Digital Recreation</h3>
                <p className="text-sm text-muted-foreground">
                  Develop computer programs to recreate and generate authentic Kolam designs
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto relative group">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary group-hover:scale-110 transition-transform">
                    <g stroke="currentColor" strokeWidth="1.5" fill="none">
                      {/* Temple/heritage building with kolam foundation */}
                      <path d="M3 21 L21 21"/>
                      <path d="M5 21 L5 10 L12 3 L19 10 L19 21"/>
                      <path d="M9 21 L9 15 L15 15 L15 21"/>
                      {/* Kolam pattern at the base */}
                      <circle cx="8" cy="19" r="0.5" fill="currentColor"/>
                      <circle cx="12" cy="19" r="0.5" fill="currentColor"/>
                      <circle cx="16" cy="19" r="0.5" fill="currentColor"/>
                      <path d="M8 19 Q12 17 16 19" strokeWidth="0.5"/>
                      {/* Temple pillars with mathematical proportions */}
                      <line x1="7" y1="21" x2="7" y2="10" strokeWidth="0.5"/>
                      <line x1="17" y1="21" x2="17" y2="10" strokeWidth="0.5"/>
                    </g>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Heritage Preservation</h3>
                <p className="text-sm text-muted-foreground">
                  Preserve cultural knowledge through modern technology and digital archives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore <span className="kolam-accent">Kolam</span> Dimensions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how this ancient art form connects mathematics, spirituality, and cultural heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 group cursor-pointer" onClick={() => navigate("/math")}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Grid3X3 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Sacred Geometry</h3>
              <p className="text-muted-foreground">
                Explore the mathematical precision and spiritual symbolism embedded in every Kolam pattern.
              </p>
            </div>
            
            <div className="text-center space-y-4 group cursor-pointer" onClick={() => navigate("/culture-heritage")}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary-foreground">
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    {/* Cultural lotus kolam pattern */}
                    <circle cx="16" cy="16" r="12"/>
                    <circle cx="16" cy="16" r="8"/>
                    <circle cx="16" cy="16" r="4"/>
                    <path d="M16 4 Q20 8 16 12 Q12 8 16 4"/>
                    <path d="M28 16 Q24 20 20 16 Q24 12 28 16"/>
                    <path d="M16 28 Q12 24 16 20 Q20 24 16 28"/>
                    <path d="M4 16 Q8 12 12 16 Q8 20 4 16"/>
                    <path d="M22.6 9.4 Q24 12 20 14 Q18 10 22.6 9.4"/>
                    <path d="M22.6 22.6 Q20 24 18 20 Q22 18 22.6 22.6"/>
                    <path d="M9.4 22.6 Q12 20 14 24 Q10 22 9.4 22.6"/>
                    <path d="M9.4 9.4 Q14 8 12 12 Q8 10 9.4 9.4"/>
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Cultural Heritage</h3>
              <p className="text-muted-foreground">
                Discover how Kolam connects generations through festivals, rituals, and daily traditions.
              </p>
            </div>
            
            <div className="text-center space-y-4 group cursor-pointer" onClick={() => navigate("/kolam")}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary-foreground">
                  <g stroke="currentColor" strokeWidth="1.5" fill="none">
                    {/* Algorithmic pattern representation */}
                    <circle cx="8" cy="8" r="2" fill="currentColor"/>
                    <circle cx="16" cy="8" r="2" fill="currentColor"/>
                    <circle cx="24" cy="8" r="2" fill="currentColor"/>
                    <circle cx="8" cy="16" r="2" fill="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                    <circle cx="24" cy="16" r="2" fill="currentColor"/>
                    <circle cx="8" cy="24" r="2" fill="currentColor"/>
                    <circle cx="16" cy="24" r="2" fill="currentColor"/>
                    <circle cx="24" cy="24" r="2" fill="currentColor"/>

                    {/* Traditional drawing method lines */}
                    <path d="M8 8 Q16 4 24 8 Q28 16 24 24 Q16 28 8 24 Q4 16 8 8Z"/>
                    <path d="M12 12 Q16 10 20 12 Q22 16 20 20 Q16 22 12 20 Q10 16 12 12Z"/>

                    {/* Mathematical arrows showing flow */}
                    <path d="M14 6 L16 8 L18 6" strokeLinecap="round"/>
                    <path d="M26 14 L24 16 L26 18" strokeLinecap="round"/>
                    <path d="M18 26 L16 24 L14 26" strokeLinecap="round"/>
                    <path d="M6 18 L8 16 L6 14" strokeLinecap="round"/>
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Traditional Methods</h3>
              <p className="text-muted-foreground">
                Uncover the algorithmic thinking and geometric principles that govern traditional patterns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
