import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Grid3X3 } from "lucide-react";
import KolamGenerator from "@/components/KolamGenerator";
import KolamBackground from "@/components/KolamBackground";
import KolamAnimationDemo from "@/components/KolamAnimationDemo";

export default function Gallery() {
  // State for search input and kolam image
  const [search, setSearch] = useState("");
  const [kolamUrl, setKolamUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Parse input like "5x5 sikku" or "7x7 weave"
  function parseInput(input: string) {
    let rows = 5, cols = 5, rule = "sikku_like";
    const gridMatch = input.match(/(\d+)[xX×](\d+)/);
    if (gridMatch) {
      rows = parseInt(gridMatch[1]);
      cols = parseInt(gridMatch[2]);
    } else {
      const singleMatch = input.match(/(\d+)/);
      if (singleMatch) rows = cols = parseInt(singleMatch[1]);
    }
    if (/sikku/i.test(input)) rule = "sikku_like";
    else if (/weave/i.test(input)) rule = "weave";
    else if (/loop|2x2/i.test(input)) rule = "2x2_loops";
    return { rows, cols, rule };
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setKolamUrl("");
    setLoading(true);
    try {
      const { rows, cols, rule } = parseInput(search);
      const apiUrl = `http://localhost:8000/generate_kolam?rows=${rows}&cols=${cols}&rule=${rule}&show_dots=true`;
      setKolamUrl(apiUrl);
    } catch (err) {
      setError("Failed to generate kolam.");
    }
    setLoading(false);
  };
  const galleryImages = [
    { id: 1, title: "Traditional Pongal Kolam", type: "Festival", difficulty: "Intermediate", description: "Elaborate harvest festival design with rice and sugarcane motifs" },
    { id: 2, title: "Lotus Sikku Kolam", type: "Floral", difficulty: "Advanced", description: "Continuous line pattern forming lotus petals with spiritual symbolism" },
    { id: 3, title: "Geometric Pulli Kolam", type: "Traditional", difficulty: "Beginner", description: "Classic dot-based pattern perfect for daily practice" },
    { id: 4, title: "Tamil New Year Special", type: "Festival", difficulty: "Advanced", description: "Auspicious design welcoming prosperity and new beginnings" },
    { id: 5, title: "Peacock Kambi Kolam", type: "Artistic", difficulty: "Expert", description: "Freehand creation featuring traditional peacock motifs" },
    { id: 6, title: "Wedding Ceremony Kolam", type: "Celebration", difficulty: "Expert", description: "Intricate bridal pattern symbolizing unity and harmony" },
    { id: 7, title: "Diwali Light Kolam", type: "Festival", difficulty: "Intermediate", description: "Festival of lights design with lamp and flame patterns" },
    { id: 8, title: "Simple Daily Kolam", type: "Traditional", difficulty: "Beginner", description: "Quick morning pattern for everyday spiritual practice" },
    { id: 9, title: "Navaratri Goddess Kolam", type: "Religious", difficulty: "Advanced", description: "Sacred geometry honoring the Divine Feminine" },
    { id: 10, title: "Harvest Moon Kolam", type: "Seasonal", difficulty: "Intermediate", description: "Circular patterns celebrating lunar cycles and agriculture" },
    { id: 11, title: "Temple Entrance Kolam", type: "Sacred", difficulty: "Expert", description: "Large ceremonial design for temple courtyard decoration" },
    { id: 12, title: "Children's Learning Kolam", type: "Educational", difficulty: "Beginner", description: "Simple pattern designed for teaching basic techniques" }
  ];

  const categories = [
    { name: "All", count: galleryImages.length },
    { name: "Traditional", count: galleryImages.filter(img => img.type === "Traditional").length },
    { name: "Festival", count: galleryImages.filter(img => img.type === "Festival").length },
    { name: "Religious", count: galleryImages.filter(img => img.type === "Religious").length },
    { name: "Artistic", count: galleryImages.filter(img => img.type === "Artistic").length }
  ];

  const difficultyColors = {
    "Beginner": "bg-green-100 text-green-800 border-green-200",
    "Intermediate": "bg-yellow-100 text-yellow-800 border-yellow-200", 
    "Advanced": "bg-orange-100 text-orange-800 border-orange-200",
    "Expert": "bg-red-100 text-red-800 border-red-200"
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <KolamBackground animated={false} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">


        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            <span className="kolam-accent">Kolam</span> Gallery & Digital Archive
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Explore our comprehensive collection of traditional Kolam patterns, learn about their cultural significance, 
            and discover the beauty of this ancient geometric art form.
          </p>
        </div>



        {/* Digital Archive Generator */}
        <section className="mb-20">
          <KolamGenerator />
        </section>

        <Separator className="bg-border mb-16" />

        {/* Kolam Drawing Animation */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              <span className="kolam-accent">Traditional</span> Drawing Animation
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Experience the meditative process of creating Kolam patterns with flowing white lines
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <KolamAnimationDemo />
          </div>
        </section>

        <Separator className="bg-border mb-16" />

        {/* Gallery Categories */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Traditional <span className="kolam-accent">Collection</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Browse patterns by category, difficulty level, and cultural context
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant="outline"
                className="px-4 py-2 cursor-pointer hover:bg-secondary border-primary text-primary text-sm"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </section>

        {/* Gallery Grid with Actual Kolam Visuals */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => {

              // Generate unique Kolam pattern for each gallery item
              const getGalleryKolam = (id: number, type: string, title: string) => {
                const baseHue = (id * 30) % 360;
                const isDigital = type === "Educational" || id > 8;

                if (title.includes("Pongal")) {
                  return (
                    <svg width="100%" height="100%" viewBox="0 0 200 200" className="w-full h-full">
                      <g stroke={`hsl(${baseHue}, 70%, 45%)`} strokeWidth="2" fill="none">
                        {/* Harvest celebration pattern */}
                        <rect x="20" y="80" width="160" height="40" fill={`hsl(${baseHue + 60}, 60%, 85%)`} opacity="0.5"/>
                        {/* Rice grains */}
                        {[...Array(15)].map((_, i) => (
                          <ellipse key={i} cx={25 + i * 10} cy={100} rx="2" ry="4" fill={`hsl(${baseHue + 30}, 80%, 60%)`}/>
                        ))}
                        {/* Sun symbol */}
                        <circle cx="100" cy="50" r="20" stroke={`hsl(${baseHue + 90}, 70%, 50%)`} fill={`hsl(${baseHue + 90}, 70%, 80%)`} opacity="0.7"/>
                        {[...Array(8)].map((_, i) => {
                          const angle = (i * 45) * Math.PI / 180;
                          const x1 = 100 + Math.cos(angle) * 25;
                          const y1 = 50 + Math.sin(angle) * 25;
                          const x2 = 100 + Math.cos(angle) * 35;
                          const y2 = 50 + Math.sin(angle) * 35;
                          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`hsl(${baseHue + 90}, 70%, 50%)`}/>;
                        })}
                        {/* Decorative border */}
                        <path d="M10 10 Q100 5 190 10 Q195 100 190 190 Q100 195 10 190 Q5 100 10 10" stroke={`hsl(${baseHue}, 70%, 45%)`} strokeWidth="2"/>
                      </g>
                    </svg>
                  );
                } else if (title.includes("Lotus")) {
                  return (
                    <svg width="100%" height="100%" viewBox="0 0 200 200" className="w-full h-full">
                      <g stroke={`hsl(${baseHue + 180}, 70%, 45%)`} strokeWidth="2" fill="none">
                        {/* Lotus Sikku pattern */}
                        <circle cx="100" cy="100" r="80" stroke={`hsl(${baseHue + 180}, 50%, 60%)`} fill={`hsl(${baseHue + 180}, 50%, 90%)`} opacity="0.3"/>
                        {[...Array(12)].map((_, i) => {
                          const angle = (i * 30) * Math.PI / 180;
                          const x = 100 + Math.cos(angle) * 60;
                          const y = 100 + Math.sin(angle) * 60;
                          return <ellipse key={i} cx={x} cy={y} rx="8" ry="20" fill={`hsl(${baseHue + 200}, 70%, 70%)`} opacity="0.8"
                                         transform={`rotate(${i * 30} ${x} ${y})`}/>;
                        })}
                        {/* Continuous Sikku line */}
                        <path d="M100 20 Q150 50 100 100 Q50 50 100 20 Q100 60 150 100 Q100 140 50 100 Q100 140 100 180 Q50 150 100 100 Q150 150 100 180 Q100 140 50 100 Q100 60 100 20"
                              stroke={`hsl(${baseHue + 240}, 80%, 50%)`} strokeWidth="3" opacity="0.9"/>
                        <circle cx="100" cy="100" r="12" fill={`hsl(${baseHue + 240}, 80%, 60%)`}/>
                      </g>
                    </svg>
                  );
                } else if (title.includes("Geometric")) {
                  return (
                    <svg width="100%" height="100%" viewBox="0 0 200 200" className="w-full h-full">
                      <g stroke={`hsl(${baseHue + 120}, 70%, 45%)`} strokeWidth="1.5" fill="none">
                        {/* Grid dots */}
                        {[...Array(7)].map((_, i) =>
                          [...Array(7)].map((_, j) => (
                            <circle key={`${i}-${j}`} cx={30 + j * 23} cy={30 + i * 23} r="3" fill={`hsl(${baseHue + 120}, 70%, 50%)`}/>
                          ))
                        )}
                        {/* Connecting geometric lines */}
                        <path d="M30 30 Q53 15 76 30 Q99 15 122 30 Q145 15 168 30" stroke={`hsl(${baseHue + 140}, 80%, 55%)`} strokeWidth="2"/>
                        <path d="M30 76 Q53 61 76 76 Q99 61 122 76 Q145 61 168 76" stroke={`hsl(${baseHue + 140}, 80%, 55%)`} strokeWidth="2"/>
                        <path d="M30 122 Q53 107 76 122 Q99 107 122 122 Q145 107 168 122" stroke={`hsl(${baseHue + 140}, 80%, 55%)`} strokeWidth="2"/>
                        <path d="M30 168 Q53 153 76 168 Q99 153 122 168 Q145 153 168 168" stroke={`hsl(${baseHue + 140}, 80%, 55%)`} strokeWidth="2"/>
                        {/* Vertical connections */}
                        <path d="M30 30 Q15 53 30 76 Q15 99 30 122 Q15 145 30 168" stroke={`hsl(${baseHue + 140}, 80%, 55%)`} strokeWidth="2"/>
                        <path d="M99 30 Q84 53 99 76 Q84 99 99 122 Q84 145 99 168" stroke={`hsl(${baseHue + 140}, 80%, 55%)`} strokeWidth="2"/>
                        <path d="M168 30 Q153 53 168 76 Q153 99 168 122 Q153 145 168 168" stroke={`hsl(${baseHue + 140}, 80%, 55%)`} strokeWidth="2"/>
                      </g>
                    </svg>
                  );
                } else if (title.includes("Wedding")) {
                  return (
                    <svg width="100%" height="100%" viewBox="0 0 200 200" className="w-full h-full">
                      <g stroke={`hsl(${baseHue + 300}, 70%, 45%)`} strokeWidth="2" fill="none">
                        {/* Wedding unity pattern */}
                        <circle cx="80" cy="100" r="35" stroke={`hsl(${baseHue + 320}, 80%, 60%)`} strokeWidth="3" fill="none"/>
                        <circle cx="120" cy="100" r="35" stroke={`hsl(${baseHue + 320}, 80%, 60%)`} strokeWidth="3" fill="none"/>
                        {/* Heart in the center */}
                        <path d="M100 80 Q90 70 80 80 Q80 90 100 110 Q120 90 120 80 Q110 70 100 80"
                              fill={`hsl(${baseHue + 340}, 80%, 70%)`} opacity="0.8"/>
                        {/* Blessing dots */}
                        {[...Array(16)].map((_, i) => {
                          const angle = (i * 22.5) * Math.PI / 180;
                          const x = 100 + Math.cos(angle) * 70;
                          const y = 100 + Math.sin(angle) * 70;
                          return <circle key={i} cx={x} cy={y} r="3" fill={`hsl(${baseHue + 300}, 80%, 60%)`}/>;
                        })}
                        {/* Decorative flourishes */}
                        <path d="M40 40 Q60 20 80 40" stroke={`hsl(${baseHue + 300}, 70%, 45%)`}/>
                        <path d="M120 40 Q140 20 160 40" stroke={`hsl(${baseHue + 300}, 70%, 45%)`}/>
                        <path d="M40 160 Q60 180 80 160" stroke={`hsl(${baseHue + 300}, 70%, 45%)`}/>
                        <path d="M120 160 Q140 180 160 160" stroke={`hsl(${baseHue + 300}, 70%, 45%)`}/>
                      </g>
                    </svg>
                  );
                } else if (title.includes("Peacock")) {
                  return (
                    <svg width="100%" height="100%" viewBox="0 0 200 200" className="w-full h-full">
                      <g stroke={`hsl(${baseHue + 240}, 70%, 45%)`} strokeWidth="2" fill="none">
                        {/* Peacock artistic pattern */}
                        <path d="M100 40 Q130 60 150 50 Q170 70 160 90 Q180 110 170 130 Q160 150 140 140 Q120 160 100 140 Q80 160 60 140 Q40 150 30 130 Q20 110 40 90 Q30 70 50 50 Q70 60 100 40"
                              stroke={`hsl(${baseHue + 240}, 80%, 50%)`} strokeWidth="3" fill={`hsl(${baseHue + 240}, 60%, 85%)`} opacity="0.5"/>
                        {/* Feather patterns */}
                        {[...Array(6)].map((_, i) => {
                          const angle = (i * 60) * Math.PI / 180;
                          const x = 100 + Math.cos(angle) * 40;
                          const y = 100 + Math.sin(angle) * 40;
                          return (
                            <g key={i}>
                              <ellipse cx={x} cy={y} rx="6" ry="15" fill={`hsl(${baseHue + 260 + i * 20}, 80%, 70%)`} opacity="0.8"
                                       transform={`rotate(${i * 60} ${x} ${y})`}/>
                              <circle cx={x} cy={y} r="3" fill={`hsl(${baseHue + 280}, 90%, 60%)`}/>
                            </g>
                          );
                        })}
                        <circle cx="100" cy="100" r="8" fill={`hsl(${baseHue + 240}, 80%, 60%)`}/>
                      </g>
                    </svg>
                  );
                } else if (isDigital || id > 8) {
                  // Digital/AI-generated patterns
                  return (
                    <svg width="100%" height="100%" viewBox="0 0 200 200" className="w-full h-full">
                      <g stroke={`hsl(${baseHue}, 80%, 50%)`} strokeWidth="1.5" fill="none">
                        {/* Digital grid pattern */}
                        <defs>
                          <pattern id={`digitalPattern${id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect width="20" height="20" fill={`hsl(${baseHue}, 30%, 95%)`}/>
                            <circle cx="10" cy="10" r="2" fill={`hsl(${baseHue}, 80%, 60%)`}/>
                          </pattern>
                        </defs>
                        <rect width="200" height="200" fill={`url(#digitalPattern${id})`} opacity="0.3"/>
                        {/* Algorithmic pattern */}
                        {[...Array(8)].map((_, i) => {
                          const angle = (i * 45) * Math.PI / 180;
                          const r1 = 30 + (i % 3) * 20;
                          const r2 = 50 + (i % 3) * 25;
                          const x1 = 100 + Math.cos(angle) * r1;
                          const y1 = 100 + Math.sin(angle) * r1;
                          const x2 = 100 + Math.cos(angle) * r2;
                          const y2 = 100 + Math.sin(angle) * r2;
                          return (
                            <g key={i}>
                              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={`hsl(${baseHue + i * 20}, 80%, 55%)`} strokeWidth="2"/>
                              <circle cx={x2} cy={y2} r="4" fill={`hsl(${baseHue + i * 20}, 80%, 65%)`}/>
                            </g>
                          );
                        })}
                        {/* Central digital core */}
                        <rect x="90" y="90" width="20" height="20" fill={`hsl(${baseHue}, 80%, 70%)`} opacity="0.8"/>
                        <circle cx="100" cy="100" r="5" fill={`hsl(${baseHue}, 90%, 50%)`}/>
                        {/* Digital noise effect */}
                        {[...Array(20)].map((_, i) => (
                          <rect key={i} x={Math.random() * 200} y={Math.random() * 200} width="2" height="2"
                                fill={`hsl(${baseHue + Math.random() * 60}, 70%, 60%)`} opacity="0.4"/>
                        ))}
                      </g>
                    </svg>
                  );
                } else {
                  // Traditional patterns
                  return (
                    <svg width="100%" height="100%" viewBox="0 0 200 200" className="w-full h-full">
                      <g stroke={`hsl(${baseHue}, 70%, 45%)`} strokeWidth="2" fill="none">
                        {/* Traditional dot pattern */}
                        {[...Array(5)].map((_, i) =>
                          [...Array(5)].map((_, j) => (
                            <circle key={`${i}-${j}`} cx={40 + j * 30} cy={40 + i * 30} r="3" fill={`hsl(${baseHue}, 70%, 50%)`}/>
                          ))
                        )}
                        {/* Traditional connecting curves */}
                        <path d="M40 40 Q55 25 70 40 Q85 25 100 40 Q115 25 130 40 Q145 25 160 40" stroke={`hsl(${baseHue + 40}, 80%, 55%)`} strokeWidth="2.5"/>
                        <path d="M40 70 Q55 55 70 70 Q85 55 100 70 Q115 55 130 70 Q145 55 160 70" stroke={`hsl(${baseHue + 40}, 80%, 55%)`} strokeWidth="2.5"/>
                        <path d="M40 100 Q55 85 70 100 Q85 85 100 100 Q115 85 130 100 Q145 85 160 100" stroke={`hsl(${baseHue + 40}, 80%, 55%)`} strokeWidth="2.5"/>
                        <path d="M40 130 Q55 115 70 130 Q85 115 100 130 Q115 115 130 130 Q145 115 160 130" stroke={`hsl(${baseHue + 40}, 80%, 55%)`} strokeWidth="2.5"/>
                        <path d="M40 160 Q55 145 70 160 Q85 145 100 160 Q115 145 130 160 Q145 145 160 160" stroke={`hsl(${baseHue + 40}, 80%, 55%)`} strokeWidth="2.5"/>
                        {/* Vertical curves */}
                        <path d="M40 40 Q25 55 40 70 Q25 85 40 100 Q25 115 40 130 Q25 145 40 160" stroke={`hsl(${baseHue + 40}, 80%, 55%)`} strokeWidth="2.5"/>
                        <path d="M70 40 Q55 55 70 70 Q55 85 70 100 Q55 115 70 130 Q55 145 70 160" stroke={`hsl(${baseHue + 40}, 80%, 55%)`} strokeWidth="2.5"/>
                        <path d="M100 40 Q85 55 100 70 Q85 85 100 100 Q85 115 100 130 Q85 145 100 160" stroke={`hsl(${baseHue + 40}, 80%, 55%)`} strokeWidth="2.5"/>
                        <path d="M130 40 Q115 55 130 70 Q115 85 130 100 Q115 115 130 130 Q115 145 130 160" stroke={`hsl(${baseHue + 40}, 80%, 55%)`} strokeWidth="2.5"/>
                        <path d="M160 40 Q145 55 160 70 Q145 85 160 100 Q145 115 160 130 Q145 145 160 160" stroke={`hsl(${baseHue + 40}, 80%, 55%)`} strokeWidth="2.5"/>
                      </g>
                    </svg>
                  );
                }
              };

              return (
                <Card key={image.id} className="kolam-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-0">
                    {/* Actual Kolam Visual */}
                    <div className="aspect-square bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-t-lg flex items-center justify-center kolam-grid relative overflow-hidden">
                      {getGalleryKolam(image.id, image.type, image.title)}
                      <div className="absolute top-3 right-3">
                        <Badge
                          className={`text-xs ${difficultyColors[image.difficulty as keyof typeof difficultyColors]}`}
                        >
                          {image.difficulty}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {image.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {image.description}
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="border-primary text-primary text-xs">
                          {image.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Pattern #{image.id.toString().padStart(3, '0')}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Educational Resources */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Educational <span className="kolam-accent">Resources</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="kolam-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Pattern Tutorials</h3>
                <p className="text-muted-foreground text-sm">
                  Step-by-step guides for creating traditional Kolam patterns, from basic dot grids to complex continuous designs.
                </p>
              </CardContent>
            </Card>

            <Card className="kolam-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎥</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Video Demonstrations</h3>
                <p className="text-muted-foreground text-sm">
                  Watch master artists create intricate Kolam patterns and learn traditional techniques passed down through generations.
                </p>
              </CardContent>
            </Card>

            <Card className="kolam-card">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📐</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Mathematical Analysis</h3>
                <p className="text-muted-foreground text-sm">
                  Explore the geometric principles, symmetry properties, and mathematical concepts embedded in each pattern.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pattern Statistics */}
        <section className="mb-20">
          <Card className="kolam-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
                Collection <span className="kolam-accent">Statistics</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">{galleryImages.length}</div>
                  <div className="text-sm text-muted-foreground">Total Patterns</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {categories.filter(c => c.name !== "All").length}
                  </div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Difficulty Levels</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Years of Heritage</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Difficulty Guide */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground">
              Difficulty <span className="kolam-accent">Guide</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(difficultyColors).map(([level, colorClass]) => {
              const count = galleryImages.filter(img => img.difficulty === level).length;
              return (
                <Card key={level} className="kolam-card">
                  <CardContent className="p-4 text-center">
                    <Badge className={`${colorClass} mb-3`}>
                      {level}
                    </Badge>
                    <div className="text-2xl font-bold text-foreground mb-1">{count}</div>
                    <div className="text-sm text-muted-foreground">patterns</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Cultural Context */}
        <section className="mb-20">
          <Card className="kolam-card max-w-4xl mx-auto">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center text-foreground">
                Preserving <span className="kolam-accent">Cultural Heritage</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Digital Preservation</h4>
                  <p className="text-muted-foreground">
                    This digital archive serves to preserve traditional Kolam patterns for future generations, 
                    ensuring that the mathematical knowledge and cultural wisdom embedded in these designs 
                    continues to inspire and educate.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Global Accessibility</h4>
                  <p className="text-muted-foreground">
                    By making these patterns available online, we enable people worldwide to learn about 
                    South Indian culture, practice traditional art forms, and appreciate the sophisticated 
                    mathematical thinking of ancient civilizations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Educational Value</h4>
                  <p className="text-muted-foreground">
                    Each pattern in our collection comes with detailed explanations of its cultural significance, 
                    mathematical properties, and traditional usage, making them valuable resources for educators 
                    and researchers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Community Contribution</h4>
                  <p className="text-muted-foreground">
                    We encourage contributions from traditional practitioners, cultural organizations, and 
                    academic institutions to help expand this collection and ensure its authenticity and 
                    cultural accuracy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
