import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Compass, Star, Calculator, Grid3X3 } from "lucide-react";
import KolamBackground from "@/components/KolamBackground";

export default function MathPage() {
  const mathematicalConcepts = [
    {
      title: "Symmetry & Balance",
      description: "Kolams demonstrate various types of symmetry including rotational, reflectional, and translational symmetry, creating visually balanced compositions.",
      examples: ["4-fold rotational symmetry", "Mirror symmetry across axes", "Radial balance from center"],
      icon: Compass,
      details: "The mathematical precision in Kolam symmetry follows strict geometric rules. Most traditional patterns exhibit multiple symmetry types simultaneously, creating complex yet harmonious designs that satisfy both aesthetic and mathematical principles."
    },
    {
      title: "Geometric Patterns",
      description: "Complex geometric relationships emerge from simple dot grids, showcasing principles of tessellation and fractal geometry.",
      examples: ["Regular tessellations", "Semi-regular patterns", "Fractal recursion"],
      icon: Grid3X3,
      details: "Kolam patterns often demonstrate how simple rules applied recursively can generate complex geometric structures. The dot grid serves as a coordinate system that constrains and guides the creation of intricate tessellating patterns."
    },
    {
      title: "Graph Theory",
      description: "Sikku Kolams represent Eulerian paths where every point is visited exactly once, demonstrating principles of graph theory and topology.",
      examples: ["Eulerian circuits", "Vertex traversal", "Planar graphs"],
      icon: Star,
      details: "In graph theory terms, each dot represents a vertex, and the connecting lines are edges. Sikku Kolams must form Eulerian paths, where the drawing hand visits each vertex exactly once without lifting, creating mathematically valid graph structures."
    },
    {
      title: "Algorithmic Thinking",
      description: "Creating Kolams follows systematic rules and procedures, making them excellent examples of algorithmic problem-solving.",
      examples: ["Step-by-step construction", "Pattern recognition", "Rule-based generation"],
      icon: Calculator,
      details: "Traditional Kolam creation follows algorithmic processes that can be codified into computer programs. Each pattern type has specific rules for dot placement, line drawing, and pattern completion that mirror computational algorithms."
    }
  ];

  const topologicalConcepts = [
    {
      title: "Continuous Curves",
      description: "Many Kolam patterns are drawn as single continuous curves that return to their starting point",
      significance: "Demonstrates topological invariance and Jordan curve theorem applications"
    },
    {
      title: "Planar Graphs",
      description: "Kolam patterns can be analyzed as planar graphs with specific embedding properties",
      significance: "Relates to Kuratowski's theorem and graph planarity in discrete mathematics"
    },
    {
      title: "Euler Characteristic",
      description: "The relationship between vertices, edges, and faces in Kolam patterns follows Euler's formula",
      significance: "V - E + F = 2 for connected planar graphs, fundamental to topology"
    }
  ];

  const ethnomathConcepts = [
    {
      category: "Indigenous Knowledge Systems",
      description: "Mathematical concepts embedded in traditional practices",
      examples: [
        "Geometric proportion in dot spacing",
        "Counting systems in pattern repetition",
        "Spatial reasoning in design layout",
        "Algorithmic thinking in construction methods"
      ]
    },
    {
      category: "Cultural Mathematics",
      description: "How mathematical thinking manifests through cultural expression",
      examples: [
        "Sacred geometry in religious patterns",
        "Symmetry principles in aesthetic judgment",
        "Modular arithmetic in pattern cycles",
        "Combinatorial thinking in variation creation"
      ]
    },
    {
      category: "Practical Applications",
      description: "Real-world mathematical problem-solving through Kolam",
      examples: [
        "Area calculation for pattern scaling",
        "Resource optimization in material use",
        "Time management in creation process",
        "Quality control through symmetry checking"
      ]
    }
  ];

  const modernApplications = [
    {
      field: "Computer Science",
      applications: [
        "Pattern recognition algorithms",
        "Computer graphics and tessellation",
        "Computational geometry research",
        "Machine learning for pattern generation"
      ]
    },
    {
      field: "Mathematics Education",
      applications: [
        "Visual geometry learning tools",
        "Symmetry and transformation concepts",
        "Graph theory illustrations",
        "Algorithmic thinking development"
      ]
    },
    {
      field: "Design & Architecture",
      applications: [
        "Architectural pattern inspiration",
        "Textile and surface design",
        "Urban planning layouts",
        "Sustainable design principles"
      ]
    },
    {
      field: "Research Applications",
      applications: [
        "Topology and knot theory studies",
        "Crystallography pattern analysis",
        "Network theory research",
        "Complexity science investigations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <KolamBackground animated={false} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Mathematical <span className="kolam-accent">Significance</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Discover how Kolam art embodies sophisticated mathematical concepts, from basic geometry 
            to advanced topics in topology and graph theory, creating a fascinating intersection of art and mathematics.
          </p>
        </div>

        {/* Core Mathematical Concepts with Visual Infographics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Core Mathematical <span className="kolam-accent">Concepts</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mathematicalConcepts.map((concept, index) => {
              const IconComponent = concept.icon;

              // Define mathematical visualization for each concept
              const getMathVisualization = (title: string) => {
                if (title.includes("Symmetry")) {
                  return (
                    <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto mathematical-svg">
                      <g stroke="#4A90E2" strokeWidth="2" fill="none">
                        {/* Rotational symmetry demonstration */}
                        <g transform="translate(150,100)">
                          {/* 4-fold rotational symmetry */}
                          {[0, 90, 180, 270].map((angle, i) => (
                            <g key={i} transform={`rotate(${angle})`}>
                              <path d="M0 0 Q20 -10 40 0 Q20 10 0 0" fill="#4A90E2" opacity={0.7 - i * 0.1}/>
                              <circle cx="25" cy="0" r="3" fill="#FF6B35"/>
                            </g>
                          ))}
                          {/* Central point */}
                          <circle r="5" fill="#4A90E2"/>
                          {/* Symmetry axes */}
                          <line x1="-50" y1="0" x2="50" y2="0" stroke="#FF6B35" strokeWidth="1" strokeDasharray="3,3" opacity="0.6"/>
                          <line x1="0" y1="-50" x2="0" y2="50" stroke="#FF6B35" strokeWidth="1" strokeDasharray="3,3" opacity="0.6"/>
                          <line x1="-35" y1="-35" x2="35" y2="35" stroke="#FF6B35" strokeWidth="1" strokeDasharray="3,3" opacity="0.6"/>
                          <line x1="-35" y1="35" x2="35" y2="-35" stroke="#FF6B35" strokeWidth="1" strokeDasharray="3,3" opacity="0.6"/>
                        </g>
                        {/* Labels */}
                        <text x="150" y="25" textAnchor="middle" fontSize="16" fill="#4A90E2" fontWeight="bold" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">4-Fold Rotational Symmetry</text>
                        <text x="150" y="185" textAnchor="middle" fontSize="13" fill="#4A90E2" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">Pattern repeats every 90°</text>
                      </g>
                    </svg>
                  );
                } else if (title.includes("Geometric")) {
                  return (
                    <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto mathematical-svg">
                      <g stroke="#8B4513" strokeWidth="1.5" fill="none">
                        {/* Tessellation pattern */}
                        {[...Array(4)].map((_, i) =>
                          [...Array(6)].map((_, j) => {
                            const x = 40 + j * 35;
                            const y = 40 + i * 35;
                            const evenRow = i % 2 === 0;
                            const offsetX = evenRow ? 0 : 17.5;
                            return (
                              <g key={`${i}-${j}`} transform={`translate(${x + offsetX}, ${y})`}>
                                {/* Hexagonal tessellation */}
                                <polygon points="0,-15 13,-7.5 13,7.5 0,15 -13,7.5 -13,-7.5"
                                         stroke="#8B4513" strokeWidth="1.5" fill={`hsl(${(i + j) * 30}, 70%, 85%)`} opacity="0.7"/>
                                <circle r="2" fill="#8B4513"/>
                              </g>
                            );
                          })
                        )}
                        {/* Fractal elements - centered and stacked */}
                        <text x="150" y="175" textAnchor="middle" fontSize="12" fill="#8B4513" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">Hexagonal Tessellation</text>
                        <text x="150" y="190" textAnchor="middle" fontSize="12" fill="#8B4513" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">Self-Similar Patterns</text>
                      </g>
                    </svg>
                  );
                } else if (title.includes("Graph Theory")) {
                  return (
                    <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto mathematical-svg">
                      <g stroke="#9370DB" strokeWidth="2" fill="none">
                        {/* Graph vertices (dots) */}
                        {[
                          [60, 60], [120, 40], [180, 60], [240, 60],
                          [60, 100], [120, 100], [180, 100], [240, 100],
                          [60, 140], [120, 160], [180, 140], [240, 140]
                        ].map(([x, y], i) => (
                          <circle key={i} cx={x} cy={y} r="5" fill="#9370DB" stroke="#9370DB" strokeWidth="2"/>
                        ))}
                        {/* Eulerian path - continuous line visiting each vertex once */}
                        <path d="M60 60 Q90 50 120 40 Q150 30 180 60 Q210 45 240 60 Q265 80 240 100 Q210 120 180 100 Q150 110 120 100 Q90 110 60 100 Q30 120 60 140 Q90 150 120 160 Q150 150 180 140 Q210 130 240 140"
                              stroke="#FF6B35" strokeWidth="3" fill="none" opacity="0.8"/>
                        {/* Arrows to show direction */}
                        {[
                          [90, 45, 15], [150, 45, 45], [225, 80, 75], [210, 115, 135],
                          [150, 105, 195], [75, 105, 225], [45, 130, 255], [90, 155, 285],
                          [150, 145, 315], [225, 135, 345]
                        ].map(([x, y, angle], i) => (
                          <polygon key={i} points="0,-3 6,0 0,3" fill="#FF6B35"
                                   transform={`translate(${x}, ${y}) rotate(${angle})`}/>
                        ))}
                        {/* Labels */}
                        <text x="150" y="25" textAnchor="middle" fontSize="16" fill="#9370DB" fontWeight="bold" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">Eulerian Path in Sikku Kolam</text>
                        <text x="150" y="185" textAnchor="middle" fontSize="13" fill="#9370DB" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">Single continuous line visiting each dot exactly once</text>
                      </g>
                    </svg>
                  );
                } else {
                  // Algorithmic Thinking
                  return (
                    <svg width="300" height="200" viewBox="0 0 300 200" className="mx-auto mathematical-svg">
                      <g stroke="#2E8B57" strokeWidth="2" fill="none">
                        {/* Algorithm flowchart for Kolam creation */}
                        <rect x="20" y="20" width="80" height="30" stroke="#2E8B57" fill="#98FB98" opacity="0.3"/>
                        <text x="60" y="40" textAnchor="middle" fontSize="12" fill="#2E8B57" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">1. Place Dots</text>

                        <rect x="120" y="20" width="80" height="30" stroke="#2E8B57" fill="#98FB98" opacity="0.3"/>
                        <text x="160" y="40" textAnchor="middle" fontSize="12" fill="#2E8B57" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">2. Set Rules</text>

                        <rect x="220" y="20" width="60" height="30" stroke="#2E8B57" fill="#98FB98" opacity="0.3"/>
                        <text x="250" y="40" textAnchor="middle" fontSize="12" fill="#2E8B57" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">3. Draw Lines</text>

                        {/* Flow arrows */}
                        <path d="M100 35 L115 35" stroke="#2E8B57" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                        <path d="M200 35 L215 35" stroke="#2E8B57" strokeWidth="2" markerEnd="url(#arrowhead)"/>

                        {/* Decision diamond */}
                        <polygon points="150,70 180,85 150,100 120,85" stroke="#FF6B35" fill="#FFE4B5" opacity="0.7"/>
                        <text x="150" y="89" textAnchor="middle" fontSize="11" fill="#FF6B35" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">Complete?</text>

                        {/* Loop back */}
                        <path d="M250 50 Q270 65 270 85 Q270 110 150 110 Q30 110 30 85 Q30 65 60 55"
                              stroke="#FF6B35" strokeWidth="2" strokeDasharray="3,3" fill="none"/>

                        {/* Final result */}
                        <rect x="110" y="130" width="80" height="30" stroke="#4A90E2" fill="#E6F3FF" opacity="0.7"/>
                        <text x="150" y="150" textAnchor="middle" fontSize="12" fill="#4A90E2" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">Beautiful Kolam</text>

                        {/* Connecting lines */}
                        <line x1="250" y1="50" x2="250" y2="65" stroke="#2E8B57" strokeWidth="2"/>
                        <line x1="150" y1="100" x2="150" y2="130" stroke="#4A90E2" strokeWidth="2"/>

                        {/* Labels */}
                        <text x="150" y="15" textAnchor="middle" fontSize="16" fill="#2E8B57" fontWeight="bold" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">Kolam Creation Algorithm</text>
                        <text x="40" y="125" fontSize="11" fill="#FF6B35" fontWeight="600" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">Iterative Process</text>

                        {/* Arrow marker definition */}
                        <defs>
                          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#2E8B57"/>
                          </marker>
                        </defs>
                      </g>
                    </svg>
                  );
                }
              };

              return (
                <Card key={index} className="kolam-card hover:shadow-lg transition-shadow">
                  {/* Mathematical Visualization */}
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-b">
                    {getMathVisualization(concept.title)}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                      {concept.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {concept.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{concept.details}</p>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Mathematical Examples:</h4>
                      <ul className="space-y-1">
                        {concept.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <Star className="h-3 w-3 text-primary flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Topology and Graph Theory */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Topology & <span className="kolam-accent">Graph Theory</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Advanced mathematical concepts find elegant expression in traditional Kolam patterns, 
              bridging ancient wisdom with modern mathematical understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topologicalConcepts.map((concept, index) => (
              <Card key={index} className="kolam-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{concept.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{concept.description}</p>
                  <div className="pt-2 border-t border-border">
                    <h5 className="font-medium text-foreground text-xs mb-1">Mathematical Significance</h5>
                    <p className="text-xs text-muted-foreground">{concept.significance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ethnomathematics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              <span className="kolam-accent">Ethnomathematics</span> in Kolam
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Exploring how mathematical thinking manifests through cultural practices and 
              indigenous knowledge systems embedded in traditional Kolam creation.
            </p>
          </div>

          <div className="space-y-8">
            {ethnomathConcepts.map((concept, index) => (
              <Card key={index} className="kolam-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{concept.category}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {concept.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {concept.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">{example}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Modern Applications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Modern <span className="kolam-accent">Applications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              How ancient Kolam mathematics influences contemporary research, technology, and education 
              across diverse fields of study and application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modernApplications.map((field, index) => (
              <Card key={index} className="kolam-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-3">
                    <Calculator className="h-5 w-5 text-primary" />
                    {field.field}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {field.applications.map((app, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Badge variant="outline" className="text-xs border-primary text-primary mt-0.5">
                          {idx + 1}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{app}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mathematical Principles with Recursion and Fractal Visualization */}
        <section className="mb-20">
          <Card className="kolam-card max-w-5xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">
                Fundamental Mathematical <span className="kolam-accent">Principles</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Recursive Pattern Demonstration */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-center mb-4 text-foreground">Recursion in Kolam Patterns</h3>
                <svg width="100%" height="250" viewBox="0 0 600 250" className="mx-auto mathematical-svg">
                  <g stroke="#6366F1" strokeWidth="2" fill="none">
                    {/* Level 1 - Outermost */}
                    <g transform="translate(300,125)">
                      <circle r="100" stroke="#6366F1" strokeWidth="3" fill="#EEF2FF" opacity="0.3"/>
                      {[...Array(8)].map((_, i) => {
                        const angle = (i * 45) * Math.PI / 180;
                        const x = Math.cos(angle) * 80;
                        const y = Math.sin(angle) * 80;
                        return <circle key={i} cx={x} cy={y} r="5" fill="#6366F1"/>;
                      })}

                      {/* Level 2 - Middle */}
                      <circle r="60" stroke="#8B5CF6" strokeWidth="2" fill="#F3E8FF" opacity="0.4"/>
                      {[...Array(6)].map((_, i) => {
                        const angle = (i * 60) * Math.PI / 180;
                        const x = Math.cos(angle) * 50;
                        const y = Math.sin(angle) * 50;
                        return <circle key={i} cx={x} cy={y} r="4" fill="#8B5CF6"/>;
                      })}

                      {/* Level 3 - Inner */}
                      <circle r="30" stroke="#A855F7" strokeWidth="2" fill="#FAF5FF" opacity="0.5"/>
                      {[...Array(4)].map((_, i) => {
                        const angle = (i * 90) * Math.PI / 180;
                        const x = Math.cos(angle) * 25;
                        const y = Math.sin(angle) * 25;
                        return <circle key={i} cx={x} cy={y} r="3" fill="#A855F7"/>;
                      })}

                      {/* Center */}
                      <circle r="8" fill="#C084FC"/>
                    </g>

                    {/* Recursion arrows and labels */}
                    <text x="50" y="30" fontSize="16" fill="#6366F1" fontWeight="bold" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">Level 1: n=8 points</text>
                    <text x="50" y="125" fontSize="16" fill="#8B5CF6" fontWeight="bold" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">Level 2: n=6 points</text>
                    <text x="50" y="220" fontSize="16" fill="#A855F7" fontWeight="bold" fontFamily="Inter, system-ui, sans-serif" textRendering="optimizeLegibility">Level 3: n=4 points</text>

                    <path d="M180 30 Q220 50 260 70" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrow1)"/>
                    <path d="M180 125 Q220 115 260 105" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arrow2)"/>
                    <path d="M180 220 Q220 200 260 180" stroke="#A855F7" strokeWidth="2" markerEnd="url(#arrow3)"/>

                    <defs>
                      <marker id="arrow1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#6366F1"/>
                      </marker>
                      <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#8B5CF6"/>
                      </marker>
                      <marker id="arrow3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#A855F7"/>
                      </marker>
                    </defs>
                  </g>
                </svg>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Each level follows the same pattern with decreasing complexity: f(n) = pattern(n/2, scale*0.6)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">∞</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Infinity & Continuity</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuous line patterns represent infinite cycles and eternal flow,
                    connecting mathematical concepts of limits and continuity.
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚹</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Symmetry Groups</h3>
                  <p className="text-sm text-muted-foreground">
                    Kolam patterns demonstrate various symmetry groups, including cyclic,
                    dihedral, and crystallographic symmetries.
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🔢</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Number Theory</h3>
                  <p className="text-sm text-muted-foreground">
                    Dot arrangements often follow number patterns, prime sequences,
                    and modular arithmetic principles.
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📐</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Geometric Constructions</h3>
                  <p className="text-sm text-muted-foreground">
                    Traditional construction methods parallel compass-and-straightedge
                    geometry and Euclidean principles.
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🌀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Fractal Geometry</h3>
                  <p className="text-sm text-muted-foreground">
                    Self-similar patterns and recursive structures demonstrate
                    fractal properties and scaling relationships.
                  </p>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Combinatorics</h3>
                  <p className="text-sm text-muted-foreground">
                    Pattern variations and permutations showcase combinatorial
                    mathematics and counting principles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research Opportunities */}
        <section className="mb-20">
          <Card className="kolam-card max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">
                Research <span className="kolam-accent">Opportunities</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Open Mathematical Questions</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Classification of all possible Kolam symmetry groups</li>
                    <li>• Algorithmic generation of traditional pattern variations</li>
                    <li>• Optimization problems in dot placement and line drawing</li>
                    <li>• Topological invariants in continuous Kolam patterns</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Interdisciplinary Studies</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cognitive science of pattern recognition and creation</li>
                    <li>• Cultural transmission of mathematical knowledge</li>
                    <li>• Digital preservation and reconstruction methods</li>
                    <li>• AI-assisted pattern analysis and generation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
