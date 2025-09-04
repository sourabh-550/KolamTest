import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Home, 
  Palette, 
  Heart, 
  Calculator, 
  ImageIcon,
  Menu,
  X,
  Sparkles,
  Grid3X3,
  Compass,
  BookOpen,
  Star
} from "lucide-react";
import KolamGenerator from "@/components/KolamGenerator";
import KolamBackground from "@/components/KolamBackground";

export default function Index() {
  const [currentSection, setCurrentSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navigation = [
    { id: "home", label: "Home", icon: Home },
    { id: "kolam", label: "Kolam", icon: Palette },
    { id: "culture", label: "Culture & Heritage", icon: Heart },
    { id: "mathematics", label: "Mathematical Significance", icon: Calculator },
    { id: "gallery", label: "Gallery", icon: ImageIcon },
  ];

  const kolamTypes = [
    {
      name: "Pulli Kolam",
      description: "Traditional dot-based patterns forming the foundation of Kolam art",
      dots: "Varied grid sizes",
      complexity: "Beginner to Advanced"
    },
    {
      name: "Sikku Kolam",
      description: "Continuous line patterns that never break, symbolizing life's eternal flow",
      dots: "5, 7, 9, or more",
      complexity: "Intermediate"
    },
    {
      name: "Kambi Kolam",
      description: "Free-hand designs without dots, expressing creative freedom",
      dots: "None",
      complexity: "Advanced"
    },
    {
      name: "Padi Kolam",
      description: "Rice-flour designs offering food to small creatures",
      dots: "Traditional grids",
      complexity: "Beginner"
    }
  ];

  const culturalAspects = [
    {
      title: "Daily Rituals",
      description: "Drawn every morning at dawn, Kolams mark the beginning of each day with positive energy and welcome prosperity into homes.",
      icon: "🌅"
    },
    {
      title: "Festival Celebrations",
      description: "Special elaborate Kolams during festivals like Pongal, Diwali, and Tamil New Year showcase community spirit and cultural pride.",
      icon: "🎉"
    },
    {
      title: "Spiritual Significance",
      description: "Kolams are believed to ward off evil spirits and invite divine blessings, serving as a bridge between earthly and spiritual realms.",
      icon: "🙏"
    },
    {
      title: "Community Bonding",
      description: "Women gather to create Kolams together, sharing techniques, stories, and strengthening neighborhood relationships.",
      icon: "👥"
    },
    {
      title: "Environmental Harmony",
      description: "Made with natural materials like rice flour, Kolams feed ants and birds, embodying the principle of sharing with all living beings.",
      icon: "🌱"
    },
    {
      title: "Artistic Expression",
      description: "Each Kolam reflects the creator's personality and artistic vision while maintaining traditional design principles.",
      icon: "🎨"
    }
  ];

  const mathematicalConcepts = [
    {
      title: "Symmetry & Balance",
      description: "Kolams demonstrate various types of symmetry including rotational, reflectional, and translational symmetry, creating visually balanced compositions.",
      examples: ["4-fold rotational symmetry", "Mirror symmetry", "Radial balance"]
    },
    {
      title: "Geometric Patterns",
      description: "Complex geometric relationships emerge from simple dot grids, showcasing principles of tessellation and fractal geometry.",
      examples: ["Regular tessellations", "Semi-regular patterns", "Fractal recursion"]
    },
    {
      title: "Graph Theory",
      description: "Sikku Kolams represent Eulerian paths where every point is visited exactly once, demonstrating principles of graph theory and topology.",
      examples: ["Eulerian circuits", "Vertex traversal", "Planar graphs"]
    },
    {
      title: "Algorithmic Thinking",
      description: "Creating Kolams follows systematic rules and procedures, making them excellent examples of algorithmic problem-solving.",
      examples: ["Step-by-step construction", "Pattern recognition", "Rule-based generation"]
    }
  ];

  const galleryImages = [
    { id: 1, title: "Traditional Pongal Kolam", type: "Festival", difficulty: "Intermediate" },
    { id: 2, title: "Lotus Sikku Kolam", type: "Floral", difficulty: "Advanced" },
    { id: 3, title: "Geometric Pulli Kolam", type: "Traditional", difficulty: "Beginner" },
    { id: 4, title: "Tamil New Year Special", type: "Festival", difficulty: "Advanced" },
    { id: 5, title: "AI-Generated Modern Kolam", type: "AI-Created", difficulty: "N/A" },
    { id: 6, title: "Wedding Ceremony Kolam", type: "Celebration", difficulty: "Expert" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <KolamBackground animated={false} />
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-primary rounded-lg p-2">
                <Grid3X3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Kolam Heritage</h1>
                <p className="text-sm text-muted-foreground">Traditional Art & Culture</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      currentSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-kolam-purple-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-kolam-purple-700">
              <nav className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center space-x-3 w-full px-3 py-2 text-left text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary text-primary-foreground px-4 py-2">
                <Grid3X3 className="h-4 w-4 mr-2" />
                Traditional Art Meets Technology
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                <span className="kolam-accent">Kolam</span> Heritage
                <br />
                <span className="text-muted-foreground font-light">
                  & Digital Preservation
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover the mathematical beauty and cultural significance of Kolam art.
                Explore traditional patterns and learn about this ancient geometric tradition.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("gallery")}
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Explore Gallery
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("kolam")}
                className="text-lg px-8 py-3"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Learn About Kolam
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kolam Section */}
      <section id="kolam" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              What is <span className="kolam-accent">Kolam</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Kolam (also known as Muggu, Rangoli, or Rangavalli) is a significant cultural tradition of India,
              blending art, ingenuity, and culture through intricate geometric patterns drawn with rice flour or colored powders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Origin & History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Dating back over 5,000 years, Kolam originated in Tamil Nadu and spread across South India. 
                  These sacred geometric patterns were traditionally drawn by women at dawn, marking the threshold 
                  between the home and the outside world.
                </p>
                <p>
                  The word "Kolam" comes from the Tamil word "kolam" meaning "form" or "beauty," reflecting 
                  the art's emphasis on creating harmonious, aesthetically pleasing designs that follow 
                  mathematical principles and cultural symbolism.
                </p>
              </CardContent>
            </Card>

            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Cultural Significance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Kolams serve multiple purposes beyond decoration: they welcome prosperity, protect the home 
                  from negative energies, and demonstrate the mathematical and artistic skills passed down 
                  through generations of women.
                </p>
                <p>
                  Each morning, the previous day's Kolam is swept away and a new one is created, symbolizing 
                  the cyclical nature of life, renewal, and the impermanence of material existence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Types of Kolam */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Types of <span className="kolam-accent">Kolam</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kolamTypes.map((type, index) => (
                <Card key={index} className="kolam-card hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">{type.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Dots:</span>
                        <span className="text-foreground">{type.dots}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Level:</span>
                        <Badge variant="outline" className="text-xs border-primary text-primary">
                          {type.complexity}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Heritage Section */}
      <section id="culture" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Culture & <span className="kolam-accent">Heritage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Kolam is deeply woven into the fabric of South Indian culture, representing traditions that span millennia
              and continue to thrive in modern times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalAspects.map((aspect, index) => (
              <Card key={index} className="kolam-card hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-3">
                    <span className="text-2xl">{aspect.icon}</span>
                    {aspect.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{aspect.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mathematical Significance Section */}
      <section id="mathematics" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Mathematical <span className="kolam-accent">Significance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Kolam art embodies sophisticated mathematical concepts, from basic geometry to advanced topics
              in topology and graph theory, making it a fascinating intersection of art and mathematics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mathematicalConcepts.map((concept, index) => (
              <Card key={index} className="kolam-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                    <Compass className="h-6 w-6 text-primary" />
                    {concept.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{concept.description}</p>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {concept.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Star className="h-3 w-3 text-primary" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section with Kolam Generator */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              <span className="kolam-accent">Gallery</span> & Digital Archive
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Explore traditional Kolam designs and learn about different patterns and their cultural significance.
            </p>
          </div>

          {/* AI Generator */}
          <div className="mb-16">
            <KolamGenerator />
          </div>

          <Separator className="bg-border mb-16" />

          {/* Traditional Gallery */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Traditional <span className="kolam-accent">Kolam</span> Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <Card key={image.id} className="kolam-card hover:shadow-md transition-shadow group">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-secondary/50 rounded-t-lg flex items-center justify-center kolam-grid">
                      <Grid3X3 className="h-16 w-16 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">{image.title}</h4>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="border-primary text-primary">
                          {image.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{image.difficulty}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-primary rounded-lg p-2">
              <Grid3X3 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold kolam-accent">Kolam Heritage Project</span>
          </div>
          <p className="text-muted-foreground">
            AICTE – Indian Knowledge Systems (IKS) | Preserving Cultural Heritage Through Technology
          </p>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Kolam Heritage Project. Bridging traditional art with modern technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
