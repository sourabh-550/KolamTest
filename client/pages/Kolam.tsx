import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import KolamBackground from "@/components/KolamBackground";

export default function Kolam() {
  const kolamTypes = [
    {
      name: "Pulli Kolam",
      description: "Traditional dot-based patterns forming the foundation of Kolam art",
      dots: "Varied grid sizes",
      complexity: "Beginner to Advanced",
      method: "Dots are placed in a grid pattern, then connected with flowing lines that loop around each dot without breaking."
    },
    {
      name: "Sikku Kolam",
      description: "Continuous line patterns that never break, symbolizing life's eternal flow",
      dots: "5, 7, 9, or more",
      complexity: "Intermediate",
      method: "A single continuous line that enters and exits through the same point, creating intricate patterns without lifting the hand."
    },
    {
      name: "Kambi Kolam",
      description: "Free-hand designs without dots, expressing creative freedom",
      dots: "None",
      complexity: "Advanced",
      method: "Drawn freehand without any guiding dots, requiring mastery of traditional patterns and creative improvisation."
    },
    {
      name: "Padi Kolam",
      description: "Rice-flour designs offering food to small creatures",
      dots: "Traditional grids",
      complexity: "Beginner",
      method: "Created using rice flour instead of chalk powder, traditionally meant to feed ants and small insects."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <KolamBackground animated={false} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Understanding <span className="kolam-accent">Kolam</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Discover the origins, evolution, and intricate methods behind this ancient South Indian art form 
            that has been passed down through generations of women.
          </p>
        </div>

        {/* Origins & History */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Origins & <span className="kolam-accent">History</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Ancient Beginnings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Dating back over 5,000 years, Kolam originated in Tamil Nadu and spread across South India. 
                  Archaeological evidence suggests that geometric patterns similar to Kolam existed during the 
                  Indus Valley Civilization, indicating the deep antiquity of this tradition.
                </p>
                <p>
                  The word "Kolam" derives from the Tamil words "kol" (beauty) and "am" (it is), literally 
                  meaning "it is beautiful." This reflects the art's fundamental purpose: to create beauty 
                  and harmony at the threshold of homes and sacred spaces.
                </p>
              </CardContent>
            </Card>

            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Evolution Through Time</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Over millennia, Kolam evolved from simple ritualistic markings to sophisticated geometric 
                  art forms. Different regions developed unique styles: Tamil Nadu's intricate dot patterns, 
                  Karnataka's Rangavalli with bold strokes, and Telangana's Muggu with curved motifs.
                </p>
                <p>
                  The colonial period saw documentation efforts by British administrators fascinated by 
                  the mathematical precision. Today, Kolam continues to evolve, inspiring contemporary 
                  artists, mathematicians, and computer scientists worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cultural Significance */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Cultural <span className="kolam-accent">Significance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kolam serves multiple purposes beyond decoration, embodying philosophical and spiritual concepts 
              that are central to South Indian culture.
            </p>
          </div>

          <Card className="kolam-card max-w-4xl mx-auto">
            <CardContent className="space-y-6 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Spiritual Symbolism</h3>
                  <p className="text-muted-foreground">
                    Each morning, the previous day's Kolam is swept away and a new one created, symbolizing 
                    the cyclical nature of life, renewal, and the impermanence of material existence. 
                    The patterns often represent cosmic order and divine harmony.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Community Building</h3>
                  <p className="text-muted-foreground">
                    Women traditionally gather to create Kolam together, sharing techniques, stories, and 
                    strengthening neighborhood relationships. This practice fosters community bonds and 
                    ensures cultural knowledge transmission.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Environmental Harmony</h3>
                  <p className="text-muted-foreground">
                    Made with natural materials like rice flour, Kolam feeds ants and birds, embodying 
                    the principle of sharing with all living beings and maintaining ecological balance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Protective Function</h3>
                  <p className="text-muted-foreground">
                    Kolam is believed to ward off evil spirits and invite prosperity and divine blessings 
                    into homes, serving as a spiritual barrier and welcoming symbol.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Types of Kolam with Visual Examples */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Types of <span className="kolam-accent">Kolam</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Each type of Kolam requires different skills and serves unique purposes, from daily practice
              to elaborate festival celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {kolamTypes.map((type, index) => {
              // Define unique Kolam SVG for each type
              const getKolamSVG = (typeName: string) => {
                if (typeName === "Pulli Kolam") {
                  return (
                    <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="2" fill="none">
                        {/* Dot grid */}
                        {[...Array(5)].map((_, i) =>
                          [...Array(5)].map((_, j) => (
                            <circle key={`${i}-${j}`} cx={40 + j * 30} cy={40 + i * 30} r="3" fill="#8B4513" />
                          ))
                        )}
                        {/* Connecting curves */}
                        <path d="M40 40 Q55 25 70 40 Q85 25 100 40 Q115 25 130 40 Q145 25 160 40" stroke="#D2691E" strokeWidth="2.5"/>
                        <path d="M40 70 Q55 55 70 70 Q85 55 100 70 Q115 55 130 70 Q145 55 160 70" stroke="#D2691E" strokeWidth="2.5"/>
                        <path d="M40 100 Q55 85 70 100 Q85 85 100 100 Q115 85 130 100 Q145 85 160 100" stroke="#D2691E" strokeWidth="2.5"/>
                        <path d="M40 130 Q55 115 70 130 Q85 115 100 130 Q115 115 130 130 Q145 115 160 130" stroke="#D2691E" strokeWidth="2.5"/>
                        <path d="M40 160 Q55 145 70 160 Q85 145 100 160 Q115 145 130 160 Q145 145 160 160" stroke="#D2691E" strokeWidth="2.5"/>
                        {/* Vertical curves */}
                        <path d="M40 40 Q25 55 40 70 Q25 85 40 100 Q25 115 40 130 Q25 145 40 160" stroke="#D2691E" strokeWidth="2.5"/>
                        <path d="M70 40 Q55 55 70 70 Q55 85 70 100 Q55 115 70 130 Q55 145 70 160" stroke="#D2691E" strokeWidth="2.5"/>
                        <path d="M100 40 Q85 55 100 70 Q85 85 100 100 Q85 115 100 130 Q85 145 100 160" stroke="#D2691E" strokeWidth="2.5"/>
                        <path d="M130 40 Q115 55 130 70 Q115 85 130 100 Q115 115 130 130 Q115 145 130 160" stroke="#D2691E" strokeWidth="2.5"/>
                        <path d="M160 40 Q145 55 160 70 Q145 85 160 100 Q145 115 160 130 Q145 145 160 160" stroke="#D2691E" strokeWidth="2.5"/>
                      </g>
                    </svg>
                  );
                } else if (typeName === "Sikku Kolam") {
                  return (
                    <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="3" fill="none">
                        {/* Guide dots */}
                        <circle cx="60" cy="60" r="2" fill="#8B4513" opacity="0.6"/>
                        <circle cx="100" cy="60" r="2" fill="#8B4513" opacity="0.6"/>
                        <circle cx="140" cy="60" r="2" fill="#8B4513" opacity="0.6"/>
                        <circle cx="60" cy="100" r="2" fill="#8B4513" opacity="0.6"/>
                        <circle cx="100" cy="100" r="2" fill="#8B4513" opacity="0.6"/>
                        <circle cx="140" cy="100" r="2" fill="#8B4513" opacity="0.6"/>
                        <circle cx="60" cy="140" r="2" fill="#8B4513" opacity="0.6"/>
                        <circle cx="100" cy="140" r="2" fill="#8B4513" opacity="0.6"/>
                        <circle cx="140" cy="140" r="2" fill="#8B4513" opacity="0.6"/>
                        {/* Continuous Sikku line forming a lotus-like pattern */}
                        <path d="M100 30 Q140 60 100 100 Q60 60 100 30 Q100 70 140 100 Q100 140 60 100 Q100 130 100 170 Q60 140 100 100 Q140 140 100 170 Q100 130 60 100 Q100 70 100 30"
                              stroke="#FF6B35" strokeWidth="3" opacity="0.9"/>
                        {/* Inner decorative loops */}
                        <circle cx="100" cy="100" r="15" stroke="#FF6B35" strokeWidth="2" opacity="0.7"/>
                        <circle cx="100" cy="100" r="8" stroke="#FF6B35" strokeWidth="2" opacity="0.5"/>
                      </g>
                    </svg>
                  );
                } else if (typeName === "Kambi Kolam") {
                  return (
                    <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="2.5" fill="none">
                        {/* Freehand artistic peacock-inspired design */}
                        <path d="M100 40 Q120 60 140 50 Q160 70 150 90 Q170 110 160 130 Q150 150 130 140 Q110 160 100 140 Q90 160 70 140 Q50 150 40 130 Q30 110 50 90 Q40 70 60 50 Q80 60 100 40"
                              stroke="#4A90E2" strokeWidth="3"/>
                        {/* Peacock feather patterns */}
                        <path d="M100 60 Q110 70 120 60 Q130 70 120 80 Q110 70 100 80 Q90 70 80 80 Q70 70 80 60 Q90 70 100 60"
                              stroke="#4A90E2" strokeWidth="2" opacity="0.8"/>
                        <path d="M100 100 Q115 85 130 100 Q145 85 160 100 Q145 115 130 100 Q115 115 100 100"
                              stroke="#4A90E2" strokeWidth="2" opacity="0.8"/>
                        <path d="M100 140 Q85 125 70 140 Q55 125 40 140 Q55 155 70 140 Q85 155 100 140"
                              stroke="#4A90E2" strokeWidth="2" opacity="0.8"/>
                        {/* Artistic flourishes */}
                        <path d="M80 80 Q70 70 60 80 Q50 70 40 80" stroke="#4A90E2" strokeWidth="1.5" opacity="0.6"/>
                        <path d="M120 80 Q130 70 140 80 Q150 70 160 80" stroke="#4A90E2" strokeWidth="1.5" opacity="0.6"/>
                        <path d="M80 120 Q70 130 60 120 Q50 130 40 120" stroke="#4A90E2" strokeWidth="1.5" opacity="0.6"/>
                        <path d="M120 120 Q130 130 140 120 Q150 130 160 120" stroke="#4A90E2" strokeWidth="1.5" opacity="0.6"/>
                        {/* Central artistic element */}
                        <circle cx="100" cy="100" r="5" fill="#4A90E2" opacity="0.7"/>
                      </g>
                    </svg>
                  );
                } else {
                  // Padi Kolam
                  return (
                    <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="2" fill="none">
                        {/* Simple rice-flour pattern dots */}
                        {[...Array(7)].map((_, i) =>
                          [...Array(7)].map((_, j) => (
                            <circle key={`${i}-${j}`} cx={30 + j * 23} cy={30 + i * 23} r="2" fill="#F5DEB3" opacity="0.8" />
                          ))
                        )}
                        {/* Simple connecting lines for daily practice */}
                        <path d="M30 30 L53 30 L76 30 L99 30 L122 30 L145 30 L168 30" stroke="#DEB887" strokeWidth="1.5" opacity="0.9"/>
                        <path d="M30 53 L53 53 L76 53 L99 53 L122 53 L145 53 L168 53" stroke="#DEB887" strokeWidth="1.5" opacity="0.9"/>
                        <path d="M30 76 L53 76 L76 76 L99 76 L122 76 L145 76 L168 76" stroke="#DEB887" strokeWidth="1.5" opacity="0.9"/>
                        <path d="M30 99 L53 99 L76 99 L99 99 L122 99 L145 99 L168 99" stroke="#DEB887" strokeWidth="1.5" opacity="0.9"/>
                        <path d="M30 122 L53 122 L76 122 L99 122 L122 122 L145 122 L168 122" stroke="#DEB887" strokeWidth="1.5" opacity="0.9"/>
                        <path d="M30 145 L53 145 L76 145 L99 145 L122 145 L145 145 L168 145" stroke="#DEB887" strokeWidth="1.5" opacity="0.9"/>
                        <path d="M30 168 L53 168 L76 168 L99 168 L122 168 L145 168 L168 168" stroke="#DEB887" strokeWidth="1.5" opacity="0.9"/>
                        {/* Vertical lines */}
                        <path d="M30 30 L30 168" stroke="#DEB887" strokeWidth="1.5" opacity="0.7"/>
                        <path d="M53 30 L53 168" stroke="#DEB887" strokeWidth="1.5" opacity="0.7"/>
                        <path d="M76 30 L76 168" stroke="#DEB887" strokeWidth="1.5" opacity="0.7"/>
                        <path d="M99 30 L99 168" stroke="#DEB887" strokeWidth="1.5" opacity="0.7"/>
                        <path d="M122 30 L122 168" stroke="#DEB887" strokeWidth="1.5" opacity="0.7"/>
                        <path d="M145 30 L145 168" stroke="#DEB887" strokeWidth="1.5" opacity="0.7"/>
                        <path d="M168 30 L168 168" stroke="#DEB887" strokeWidth="1.5" opacity="0.7"/>
                      </g>
                    </svg>
                  );
                }
              };

              return (
                <Card key={index} className="kolam-card hover:shadow-lg transition-shadow">
                  {/* Visual Kolam Example */}
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-b">
                    {getKolamSVG(type.name)}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex justify-between items-start">
                      {type.name}
                      <Badge variant="outline" className="border-primary text-primary ml-4">
                        {type.complexity}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Dot Pattern:</span>
                        <p className="text-muted-foreground">{type.dots}</p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Complexity:</span>
                        <p className="text-muted-foreground">{type.complexity}</p>
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Method:</span>
                      <p className="text-muted-foreground mt-1">{type.method}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Creation Methods */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Traditional <span className="kolam-accent">Methods</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Materials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-medium text-foreground">Rice Flour:</span> <span className="text-muted-foreground">Traditional and eco-friendly</span></p>
                  <p className="text-sm"><span className="font-medium text-foreground">Chalk Powder:</span> <span className="text-muted-foreground">Modern alternative</span></p>
                  <p className="text-sm"><span className="font-medium text-foreground">Colored Powders:</span> <span className="text-muted-foreground">For festive occasions</span></p>
                  <p className="text-sm"><span className="font-medium text-foreground">Flowers:</span> <span className="text-muted-foreground">Natural decoration</span></p>
                </div>
              </CardContent>
            </Card>

            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-medium text-foreground">1. Preparation:</span> <span className="text-muted-foreground">Clean and prepare the surface</span></p>
                  <p className="text-sm"><span className="font-medium text-foreground">2. Grid Layout:</span> <span className="text-muted-foreground">Place dots in chosen pattern</span></p>
                  <p className="text-sm"><span className="font-medium text-foreground">3. Line Drawing:</span> <span className="text-muted-foreground">Connect dots with flowing lines</span></p>
                  <p className="text-sm"><span className="font-medium text-foreground">4. Finishing:</span> <span className="text-muted-foreground">Add details and decorations</span></p>
                </div>
              </CardContent>
            </Card>

            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Timing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-sm"><span className="font-medium text-foreground">Daily:</span> <span className="text-muted-foreground">Simple patterns at dawn</span></p>
                  <p className="text-sm"><span className="font-medium text-foreground">Weekly:</span> <span className="text-muted-foreground">More elaborate Friday designs</span></p>
                  <p className="text-sm"><span className="font-medium text-foreground">Festivals:</span> <span className="text-muted-foreground">Complex ceremonial patterns</span></p>
                  <p className="text-sm"><span className="font-medium text-foreground">Special Events:</span> <span className="text-muted-foreground">Unique celebratory designs</span></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
