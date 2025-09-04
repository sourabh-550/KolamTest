import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import KolamBackground from "@/components/KolamBackground";

export default function CultureHeritage() {
  const culturalAspects = [
    {
      title: "Daily Rituals",
      description: "Drawn every morning at dawn, Kolams mark the beginning of each day with positive energy and welcome prosperity into homes.",
      icon: "🌅",
      details: "The daily practice typically begins before sunrise, with women sweeping the area clean and creating fresh patterns. This ritual connects the household to cosmic rhythms and marks sacred time."
    },
    {
      title: "Festival Celebrations",
      description: "Special elaborate Kolams during festivals like Pongal, Diwali, and Tamil New Year showcase community spirit and cultural pride.",
      icon: "🎉",
      details: "Festival Kolams are often larger, more colorful, and incorporate specific motifs relevant to the celebration. Communities may organize competitions and collaborative creations."
    },
    {
      title: "Spiritual Significance",
      description: "Kolams are believed to ward off evil spirits and invite divine blessings, serving as a bridge between earthly and spiritual realms.",
      icon: "🙏",
      details: "The geometric patterns are thought to create positive vibrations and sacred geometry that attracts beneficial energies while protecting the household from negative influences."
    },
    {
      title: "Community Bonding",
      description: "Women gather to create Kolams together, sharing techniques, stories, and strengthening neighborhood relationships.",
      icon: "👥",
      details: "These gatherings serve as informal schools where elder women teach younger ones, preserving traditional knowledge and fostering intergenerational connections."
    },
    {
      title: "Environmental Harmony",
      description: "Made with natural materials like rice flour, Kolams feed ants and birds, embodying the principle of sharing with all living beings.",
      icon: "🌱",
      details: "This practice reflects the philosophy of 'Annadana' (food giving) and demonstrates how art can serve ecological purposes while maintaining spiritual significance."
    },
    {
      title: "Artistic Expression",
      description: "Each Kolam reflects the creator's personality and artistic vision while maintaining traditional design principles.",
      icon: "🎨",
      details: "Within traditional frameworks, individual creativity flourishes through personal variations, color choices, and innovative interpretations of classic patterns."
    }
  ];

  const festivals = [
    {
      name: "Tamil New Year (Puthandu)",
      period: "April",
      significance: "Marks the beginning of the Tamil calendar year",
      kolamStyle: "Elaborate patterns with mango leaves and flower motifs",
      traditions: "Families create the most beautiful Kolams of the year, often incorporating religious symbols and prosperity motifs"
    },
    {
      name: "Pongal",
      period: "January",
      significance: "Harvest festival celebrating agriculture and nature",
      kolamStyle: "Large Kolams with sugarcane, rice, and sun patterns",
      traditions: "Multi-day celebrations with different themed Kolams for each day - Bhogi, Thai, Mattu, and Kaanum Pongal"
    },
    {
      name: "Diwali",
      period: "October/November",
      significance: "Festival of lights celebrating the triumph of good over evil",
      kolamStyle: "Illuminated patterns with oil lamps and lotus designs",
      traditions: "Kolams are created with colored powders and decorated with oil lamps (diyas) to welcome Goddess Lakshmi"
    },
    {
      name: "Navaratri",
      period: "September/October",
      significance: "Nine nights celebrating the Divine Feminine",
      kolamStyle: "Sacred geometry with goddess symbols and floral patterns",
      traditions: "Special Kolams for each day featuring different aspects of the Divine Mother, often created collectively by women"
    },
    {
      name: "Karthikai Deepam",
      period: "November/December",
      significance: "Festival of lights honoring Lord Shiva",
      kolamStyle: "Circular patterns representing cosmic light and divine energy",
      traditions: "Kolams are designed to complement the rows of oil lamps lit throughout the celebration"
    }
  ];

  const lifeEvents = [
    {
      event: "Birth Ceremonies",
      description: "Special protective Kolams welcome newborns",
      patterns: "Circular designs symbolizing life cycles and protection",
      significance: "Creates a sacred space for the child's first days"
    },
    {
      event: "Coming of Age",
      description: "Transition rituals marked with meaningful patterns",
      patterns: "Spiral designs representing growth and transformation",
      significance: "Celebrates the passage into adulthood and new responsibilities"
    },
    {
      event: "Weddings",
      description: "Elaborate bridal Kolams bless new unions",
      patterns: "Interlocking designs symbolizing unity and harmony",
      significance: "Invokes blessings for the couple's journey together"
    },
    {
      event: "Housewarmings",
      description: "Blessing new homes with prosperity patterns",
      patterns: "Lotus and geometric designs for peace and abundance",
      significance: "Sanctifies the new living space and invites positive energy"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <KolamBackground animated={false} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Culture & <span className="kolam-accent">Heritage</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Explore how Kolam is deeply woven into the fabric of South Indian culture, 
            representing traditions that span millennia and continue to thrive in modern times.
          </p>
        </div>

        {/* Cultural Aspects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Cultural <span className="kolam-accent">Dimensions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalAspects.map((aspect, index) => (
              <Card key={index} className="kolam-card hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-3">
                    <span className="text-3xl">{aspect.icon}</span>
                    {aspect.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {aspect.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{aspect.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Festivals Section with Visual Examples */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Festivals & <span className="kolam-accent">Celebrations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Throughout the year, Kolam plays a central role in South Indian festivals,
              with each celebration featuring unique patterns and traditions.
            </p>
          </div>

          <div className="space-y-8">
            {festivals.map((festival, index) => {
              // Define festival-specific Kolam visuals
              const getFestivalKolam = (festivalName: string) => {
                if (festivalName.includes("Pongal")) {
                  return (
                    <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="2" fill="none">
                        {/* Sugarcane and rice motifs for Pongal */}
                        <rect x="20" y="80" width="260" height="40" stroke="#228B22" strokeWidth="3" fill="#90EE90" opacity="0.3"/>
                        {/* Rice grain pattern */}
                        {[...Array(20)].map((_, i) => (
                          <ellipse key={i} cx={30 + i * 12} cy={100} rx="3" ry="6" fill="#F5DEB3" stroke="#DEB887"/>
                        ))}
                        {/* Sugarcane stalks */}
                        <path d="M50 20 Q60 40 50 60 Q40 80 50 100 Q60 120 50 140 Q40 160 50 180" stroke="#228B22" strokeWidth="4"/>
                        <path d="M100 20 Q110 40 100 60 Q90 80 100 100 Q110 120 100 140 Q90 160 100 180" stroke="#228B22" strokeWidth="4"/>
                        <path d="M200 20 Q210 40 200 60 Q190 80 200 100 Q210 120 200 140 Q190 160 200 180" stroke="#228B22" strokeWidth="4"/>
                        <path d="M250 20 Q260 40 250 60 Q240 80 250 100 Q260 120 250 140 Q240 160 250 180" stroke="#228B22" strokeWidth="4"/>
                        {/* Sun symbol for harvest */}
                        <circle cx="150" cy="50" r="20" stroke="#FFD700" strokeWidth="3" fill="#FFFF99" opacity="0.7"/>
                        {[...Array(8)].map((_, i) => {
                          const angle = (i * 45) * Math.PI / 180;
                          const x1 = 150 + Math.cos(angle) * 25;
                          const y1 = 50 + Math.sin(angle) * 25;
                          const x2 = 150 + Math.cos(angle) * 35;
                          const y2 = 50 + Math.sin(angle) * 35;
                          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFD700" strokeWidth="2"/>;
                        })}
                        {/* Decorative border */}
                        <path d="M10 10 Q150 5 290 10 Q295 100 290 190 Q150 195 10 190 Q5 100 10 10"
                              stroke="#8B4513" strokeWidth="3" opacity="0.8"/>
                      </g>
                    </svg>
                  );
                } else if (festivalName.includes("New Year")) {
                  return (
                    <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="2" fill="none">
                        {/* Mango leaves and prosperity symbols */}
                        <path d="M50 50 Q70 40 90 50 Q80 70 60 80 Q40 70 50 50" fill="#32CD32" stroke="#228B22" strokeWidth="2"/>
                        <path d="M110 40 Q130 30 150 40 Q140 60 120 70 Q100 60 110 40" fill="#32CD32" stroke="#228B22" strokeWidth="2"/>
                        <path d="M170 50 Q190 40 210 50 Q200 70 180 80 Q160 70 170 50" fill="#32CD32" stroke="#228B22" strokeWidth="2"/>
                        <path d="M230 40 Q250 30 270 40 Q260 60 240 70 Q220 60 230 40" fill="#32CD32" stroke="#228B22" strokeWidth="2"/>
                        {/* Lotus for new beginnings */}
                        <g transform="translate(150,120)">
                          <circle r="30" stroke="#FF69B4" strokeWidth="3" fill="#FFB6C1" opacity="0.5"/>
                          {[...Array(8)].map((_, i) => {
                            const angle = (i * 45) * Math.PI / 180;
                            const x = Math.cos(angle) * 20;
                            const y = Math.sin(angle) * 20;
                            return <ellipse key={i} cx={x} cy={y} rx="8" ry="20" fill="#FF69B4" opacity="0.7"
                                           transform={`rotate(${i * 45} ${x} ${y})`}/>;
                          })}
                          <circle r="8" fill="#FFD700" stroke="#FF8C00" strokeWidth="1"/>
                        </g>
                        {/* Prosperity symbols */}
                        <text x="150" y="180" textAnchor="middle" fontSize="20" fill="#8B4513" fontFamily="serif">புத்தாண்டு வாழ்த்துக்கள்</text>
                      </g>
                    </svg>
                  );
                } else if (festivalName.includes("Diwali")) {
                  return (
                    <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="2" fill="none">
                        {/* Oil lamps (diyas) pattern */}
                        {[...Array(5)].map((_, i) => {
                          const x = 40 + i * 55;
                          return (
                            <g key={i}>
                              <ellipse cx={x} cy="150" rx="15" ry="8" fill="#CD853F" stroke="#8B4513" strokeWidth="2"/>
                              <ellipse cx={x} cy="145" rx="8" ry="4" fill="#FF4500" opacity="0.8"/>
                              {/* Flame */}
                              <path d={`M${x} 135 Q${x-5} 125 ${x} 120 Q${x+5} 125 ${x} 135`} fill="#FFD700" opacity="0.9"/>
                            </g>
                          );
                        })}
                        {/* Lotus pattern for Lakshmi */}
                        <g transform="translate(150,80)">
                          <circle r="35" stroke="#FF1493" strokeWidth="3" fill="#FFB6C1" opacity="0.3"/>
                          {[...Array(12)].map((_, i) => {
                            const angle = (i * 30) * Math.PI / 180;
                            const x = Math.cos(angle) * 25;
                            const y = Math.sin(angle) * 25;
                            return <ellipse key={i} cx={x} cy={y} rx="6" ry="15" fill="#FF1493" opacity="0.6"
                                           transform={`rotate(${i * 30} ${x} ${y})`}/>;
                          })}
                          <circle r="10" fill="#FFD700" stroke="#FF8C00" strokeWidth="2"/>
                        </g>
                        {/* Decorative border with light motifs */}
                        <rect x="10" y="10" width="280" height="180" stroke="#FFD700" strokeWidth="3" fill="none" opacity="0.7"/>
                        {/* Corner light decorations */}
                        <circle cx="25" cy="25" r="8" fill="#FFD700" opacity="0.8"/>
                        <circle cx="275" cy="25" r="8" fill="#FFD700" opacity="0.8"/>
                        <circle cx="25" cy="175" r="8" fill="#FFD700" opacity="0.8"/>
                        <circle cx="275" cy="175" r="8" fill="#FFD700" opacity="0.8"/>
                      </g>
                    </svg>
                  );
                } else if (festivalName.includes("Navaratri")) {
                  return (
                    <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="2" fill="none">
                        {/* Nine dots for nine days */}
                        {[...Array(9)].map((_, i) => {
                          const angle = (i * 40) * Math.PI / 180;
                          const x = 150 + Math.cos(angle) * 60;
                          const y = 100 + Math.sin(angle) * 60;
                          return <circle key={i} cx={x} cy={y} r="8" fill="#9370DB" stroke="#8B008B" strokeWidth="2"/>;
                        })}
                        {/* Central goddess symbol */}
                        <g transform="translate(150,100)">
                          <circle r="25" stroke="#9370DB" strokeWidth="3" fill="#DDA0DD" opacity="0.5"/>
                          <path d="M0 -20 Q-10 -10 0 0 Q10 -10 0 -20" fill="#9370DB" opacity="0.8"/>
                          <path d="M0 0 Q-15 5 -10 15 Q0 10 10 15 Q15 5 0 0" fill="#9370DB" opacity="0.8"/>
                          <circle r="5" fill="#FFD700"/>
                        </g>
                        {/* Sacred geometry connections */}
                        {[...Array(9)].map((_, i) => {
                          const angle1 = (i * 40) * Math.PI / 180;
                          const angle2 = ((i + 1) % 9 * 40) * Math.PI / 180;
                          const x1 = 150 + Math.cos(angle1) * 60;
                          const y1 = 100 + Math.sin(angle1) * 60;
                          const x2 = 150 + Math.cos(angle2) * 60;
                          const y2 = 100 + Math.sin(angle2) * 60;
                          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#9370DB" strokeWidth="1" opacity="0.6"/>;
                        })}
                      </g>
                    </svg>
                  );
                } else {
                  // Karthikai Deepam
                  return (
                    <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="2" fill="none">
                        {/* Cosmic light representation */}
                        <circle cx="150" cy="100" r="80" stroke="#FFD700" strokeWidth="3" fill="#FFFF99" opacity="0.2"/>
                        <circle cx="150" cy="100" r="60" stroke="#FFD700" strokeWidth="2" fill="#FFFF99" opacity="0.3"/>
                        <circle cx="150" cy="100" r="40" stroke="#FFD700" strokeWidth="2" fill="#FFFF99" opacity="0.4"/>
                        <circle cx="150" cy="100" r="20" stroke="#FFD700" strokeWidth="2" fill="#FFFF99" opacity="0.6"/>
                        {/* Radiating light rays */}
                        {[...Array(12)].map((_, i) => {
                          const angle = (i * 30) * Math.PI / 180;
                          const x1 = 150 + Math.cos(angle) * 85;
                          const y1 = 100 + Math.sin(angle) * 85;
                          const x2 = 150 + Math.cos(angle) * 100;
                          const y2 = 100 + Math.sin(angle) * 100;
                          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFD700" strokeWidth="3" opacity="0.8"/>;
                        })}
                        {/* Central divine flame */}
                        <path d="M150 80 Q140 70 150 60 Q160 70 150 80 Q145 85 150 90 Q155 85 150 80" fill="#FF4500" opacity="0.9"/>
                        <ellipse cx="150" cy="100" rx="10" ry="5" fill="#CD853F" stroke="#8B4513" strokeWidth="1"/>
                      </g>
                    </svg>
                  );
                }
              };

              return (
                <Card key={index} className="kolam-card">
                  {/* Festival Kolam Visual */}
                  <div className="p-6 bg-gradient-to-r from-orange-50 via-yellow-50 to-red-50 dark:from-orange-950/20 dark:via-yellow-950/20 dark:to-red-950/20 border-b">
                    {getFestivalKolam(festival.name)}
                  </div>

                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <CardTitle className="text-2xl text-foreground">{festival.name}</CardTitle>
                      <Badge className="bg-primary text-primary-foreground w-fit">
                        {festival.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg text-muted-foreground">
                      {festival.significance}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Kolam Style</h4>
                        <p className="text-muted-foreground text-sm">{festival.kolamStyle}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Traditions</h4>
                        <p className="text-muted-foreground text-sm">{festival.traditions}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Life Events Section with Wedding and Temple Threshold Visuals */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Life Events & <span className="kolam-accent">Rituals</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Kolam marks significant life transitions and milestones, creating sacred spaces
              for important ceremonies and personal celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lifeEvents.map((event, index) => {
              // Define event-specific Kolam visuals
              const getEventKolam = (eventName: string) => {
                if (eventName.includes("Wedding")) {
                  return (
                    <svg width="250" height="150" viewBox="0 0 250 150" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="2" fill="none">
                        {/* Interlocking wedding rings pattern */}
                        <circle cx="80" cy="75" r="30" stroke="#FFD700" strokeWidth="4" fill="none"/>
                        <circle cx="120" cy="75" r="30" stroke="#FFD700" strokeWidth="4" fill="none"/>
                        {/* Unity pattern - connected hearts */}
                        <path d="M100 50 Q85 35 70 50 Q70 65 100 90 Q130 65 130 50 Q115 35 100 50"
                              fill="#FF69B4" stroke="#FF1493" strokeWidth="2" opacity="0.7"/>
                        {/* Sacred dots for blessing */}
                        {[...Array(7)].map((_, i) =>
                          <circle key={i} cx={60 + i * 20} cy="25" r="3" fill="#8B4513"/>
                        )}
                        {[...Array(7)].map((_, i) =>
                          <circle key={i} cx={60 + i * 20} cy="125" r="3" fill="#8B4513"/>
                        )}
                        {/* Decorative lotus petals around */}
                        {[...Array(8)].map((_, i) => {
                          const angle = (i * 45) * Math.PI / 180;
                          const x = 100 + Math.cos(angle) * 50;
                          const y = 75 + Math.sin(angle) * 35;
                          return <ellipse key={i} cx={x} cy={y} rx="6" ry="12" fill="#FFB6C1" opacity="0.6"
                                         transform={`rotate(${i * 45} ${x} ${y})`}/>;
                        })}
                        {/* Central unity symbol */}
                        <circle cx="100" cy="75" r="8" fill="#FFD700" stroke="#FF8C00" strokeWidth="2"/>
                      </g>
                    </svg>
                  );
                } else if (eventName.includes("Birth")) {
                  return (
                    <svg width="250" height="150" viewBox="0 0 250 150" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="2" fill="none">
                        {/* Protective circular pattern */}
                        <circle cx="125" cy="75" r="60" stroke="#32CD32" strokeWidth="3" fill="#98FB98" opacity="0.2"/>
                        <circle cx="125" cy="75" r="40" stroke="#32CD32" strokeWidth="2" fill="#98FB98" opacity="0.3"/>
                        <circle cx="125" cy="75" r="20" stroke="#32CD32" strokeWidth="2" fill="#98FB98" opacity="0.4"/>
                        {/* Life cycle dots */}
                        {[...Array(12)].map((_, i) => {
                          const angle = (i * 30) * Math.PI / 180;
                          const x = 125 + Math.cos(angle) * 45;
                          const y = 75 + Math.sin(angle) * 45;
                          return <circle key={i} cx={x} cy={y} r="4" fill="#32CD32"/>;
                        })}
                        {/* Central protective symbol */}
                        <path d="M125 60 Q115 65 125 75 Q135 65 125 60 Q130 70 125 80 Q120 70 125 60"
                              fill="#FFD700" opacity="0.8"/>
                      </g>
                    </svg>
                  );
                } else if (eventName.includes("Coming of Age")) {
                  return (
                    <svg width="250" height="150" viewBox="0 0 250 150" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="2" fill="none">
                        {/* Spiral growth pattern */}
                        <path d="M125 75 Q140 60 160 75 Q145 100 115 85 Q130 55 165 75 Q140 110 105 90 Q135 45 175 75"
                              stroke="#9370DB" strokeWidth="3" fill="none"/>
                        {/* Transformation symbols */}
                        <circle cx="90" cy="75" r="8" fill="#87CEEB" opacity="0.7"/>
                        <polygon points="125,65 130,75 125,85 120,75" fill="#FFD700"/>
                        <circle cx="160" cy="75" r="8" fill="#FF69B4" opacity="0.7"/>
                        {/* Protective dots */}
                        {[...Array(5)].map((_, i) =>
                          <circle key={i} cx={70 + i * 30} cy="40" r="2" fill="#8B4513"/>
                        )}
                        {[...Array(5)].map((_, i) =>
                          <circle key={i} cx={70 + i * 30} cy="110" r="2" fill="#8B4513"/>
                        )}
                      </g>
                    </svg>
                  );
                } else {
                  // Housewarming
                  return (
                    <svg width="250" height="150" viewBox="0 0 250 150" className="mx-auto">
                      <g stroke="#8B4513" strokeWidth="2" fill="none">
                        {/* House foundation pattern */}
                        <rect x="75" y="60" width="100" height="60" stroke="#8B4513" strokeWidth="3" fill="#F5DEB3" opacity="0.3"/>
                        <polygon points="75,60 125,30 175,60" stroke="#8B4513" strokeWidth="3" fill="#CD853F" opacity="0.5"/>
                        {/* Threshold Kolam pattern */}
                        {[...Array(9)].map((_, i) =>
                          <circle key={i} cx={70 + i * 15} cy="130" r="3" fill="#8B4513"/>
                        )}
                        <path d="M70 130 Q85 120 100 130 Q115 120 130 130 Q145 120 160 130 Q175 120 190 130 Q205 120 220 130"
                              stroke="#D2691E" strokeWidth="2"/>
                        {/* Prosperity lotus */}
                        <g transform="translate(125,90)">
                          <circle r="15" stroke="#FF69B4" strokeWidth="2" fill="#FFB6C1" opacity="0.5"/>
                          {[...Array(6)].map((_, i) => {
                            const angle = (i * 60) * Math.PI / 180;
                            const x = Math.cos(angle) * 10;
                            const y = Math.sin(angle) * 10;
                            return <ellipse key={i} cx={x} cy={y} rx="4" ry="8" fill="#FF69B4" opacity="0.7"
                                           transform={`rotate(${i * 60} ${x} ${y})`}/>;
                          })}
                          <circle r="4" fill="#FFD700"/>
                        </g>
                        {/* Blessing corners */}
                        <circle cx="50" cy="50" r="5" fill="#32CD32" opacity="0.7"/>
                        <circle cx="200" cy="50" r="5" fill="#32CD32" opacity="0.7"/>
                      </g>
                    </svg>
                  );
                }
              };

              return (
                <Card key={index} className="kolam-card hover:shadow-md transition-shadow">
                  {/* Life Event Kolam Visual */}
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-b">
                    {getEventKolam(event.event)}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{event.event}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h5 className="font-medium text-foreground mb-1">Traditional Patterns</h5>
                      <p className="text-sm text-muted-foreground">{event.patterns}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-1">Cultural Significance</h5>
                      <p className="text-sm text-muted-foreground">{event.significance}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Regional Variations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Regional <span className="kolam-accent">Variations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Tamil Nadu</CardTitle>
                <CardDescription>Kolam</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Intricate dot-based patterns with flowing curves and geometric precision. 
                  Emphasis on mathematical symmetry and continuous lines.
                </p>
              </CardContent>
            </Card>

            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Karnataka</CardTitle>
                <CardDescription>Rangavalli</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Bold strokes and larger patterns often incorporating natural motifs. 
                  Greater use of colored powders and floral decorations.
                </p>
              </CardContent>
            </Card>

            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Telangana</CardTitle>
                <CardDescription>Muggu</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Curved motifs with emphasis on fluid, organic shapes. 
                  Integration of traditional symbols with artistic flourishes.
                </p>
              </CardContent>
            </Card>

            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Kerala</CardTitle>
                <CardDescription>Kolam</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Simplified patterns adapted to local customs, often created 
                  during festivals and special occasions rather than daily practice.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Modern Context */}
        <section className="mb-20">
          <Card className="kolam-card max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">
                <span className="kolam-accent">Kolam</span> in Modern Times
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Contemporary Practice</h3>
                  <p className="text-muted-foreground text-sm">
                    While urbanization has changed some traditions, Kolam continues to thrive in both 
                    rural and urban settings. Modern practitioners adapt the art to apartment living, 
                    using stencils and digital tools while maintaining traditional significance.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Global Recognition</h3>
                  <p className="text-muted-foreground text-sm">
                    International art galleries, museums, and cultural centers now showcase Kolam, 
                    recognizing its artistic and mathematical value. Educational institutions worldwide 
                    study its geometric principles and cultural significance.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Digital Preservation</h3>
                  <p className="text-muted-foreground text-sm">
                    Digital archives, online communities, and mobile apps help preserve and share 
                    traditional patterns. Virtual reality and augmented reality technologies create 
                    new ways to experience and learn Kolam art.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Future Generations</h3>
                  <p className="text-muted-foreground text-sm">
                    Cultural organizations work to ensure Kolam knowledge transfers to younger generations 
                    through workshops, competitions, and educational programs that blend traditional 
                    wisdom with contemporary relevance.
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
