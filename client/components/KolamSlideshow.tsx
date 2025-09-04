import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface KolamSlide {
  id: number;
  title: string;
  description: string;
  pattern: string; // SVG pattern or placeholder
}

export default function KolamSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample Kolam patterns - in a real app, these would be actual images
  const slides: KolamSlide[] = [
    {
      id: 1,
      title: "Traditional Pongal Kolam",
      description: "Harvest festival design with rice and prosperity motifs",
      pattern: `<svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#d97706;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#d97706;stop-opacity:0.3" />
          </radialGradient>
        </defs>
        <g fill="url(#grad1)">
          <circle cx="50" cy="50" r="3"/>
          <circle cx="100" cy="50" r="3"/>
          <circle cx="150" cy="50" r="3"/>
          <circle cx="50" cy="100" r="3"/>
          <circle cx="100" cy="100" r="3"/>
          <circle cx="150" cy="100" r="3"/>
          <circle cx="50" cy="150" r="3"/>
          <circle cx="100" cy="150" r="3"/>
          <circle cx="150" cy="150" r="3"/>
        </g>
        <g stroke="#d97706" strokeWidth="2" fill="none">
          <path d="M50 50 Q100 30 150 50 Q170 100 150 150 Q100 170 50 150 Q30 100 50 50Z"/>
          <path d="M100 50 Q120 75 100 100 Q80 75 100 50"/>
          <circle cx="100" cy="100" r="25"/>
        </g>
      </svg>`
    },
    {
      id: 2,
      title: "Lotus Sikku Kolam",
      description: "Continuous line pattern forming sacred lotus petals",
      pattern: `<svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#d97706;stop-opacity:0.9" />
            <stop offset="100%" style="stop-color:#d97706;stop-opacity:0.2" />
          </radialGradient>
        </defs>
        <g stroke="#d97706" strokeWidth="2" fill="none">
          <path d="M100 40 Q120 60 100 80 Q80 60 100 40"/>
          <path d="M140 70 Q160 90 140 110 Q120 90 140 70"/>
          <path d="M140 130 Q160 150 140 170 Q120 150 140 130"/>
          <path d="M100 160 Q120 180 100 200 Q80 180 100 160"/>
          <path d="M60 130 Q40 150 60 170 Q80 150 60 130"/>
          <path d="M60 70 Q40 90 60 110 Q80 90 60 70"/>
          <circle cx="100" cy="100" r="15" fill="url(#grad2)"/>
        </g>
      </svg>`
    },
    {
      id: 3,
      title: "Geometric Pulli Kolam",
      description: "Classic dot-based pattern with mathematical symmetry",
      pattern: `<svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="#d97706" opacity="0.6"/>
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots)"/>
        <g stroke="#d97706" strokeWidth="2" fill="none">
          <polygon points="100,20 160,60 160,140 100,180 40,140 40,60"/>
          <polygon points="100,40 140,70 140,130 100,160 60,130 60,70"/>
          <polygon points="100,60 120,80 120,120 100,140 80,120 80,80"/>
        </g>
      </svg>`
    },
    {
      id: 4,
      title: "Festival Diwali Kolam",
      description: "Illuminated pattern with lamp and flame motifs",
      pattern: `<svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="grad4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#d97706;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#d97706;stop-opacity:0.1" />
          </radialGradient>
        </defs>
        <g fill="url(#grad4)">
          <ellipse cx="60" cy="120" rx="8" ry="12"/>
          <ellipse cx="100" cy="120" rx="8" ry="12"/>
          <ellipse cx="140" cy="120" rx="8" ry="12"/>
        </g>
        <g stroke="#d97706" strokeWidth="2" fill="none">
          <path d="M100 20 Q80 40 60 80 Q80 100 100 120 Q120 100 140 80 Q120 40 100 20"/>
          <path d="M40 140 Q100 120 160 140"/>
          <path d="M50 160 Q100 140 150 160"/>
          <circle cx="100" cy="100" r="10"/>
        </g>
      </svg>`
    },
    {
      id: 5,
      title: "Peacock Kambi Kolam",
      description: "Freehand artistic pattern featuring traditional peacock",
      pattern: `<svg viewBox="0 0 200 200" className="w-full h-full">
        <g stroke="#d97706" strokeWidth="2" fill="none">
          <path d="M60 100 Q80 60 120 80 Q160 60 180 100 Q160 120 140 140 Q120 160 100 140 Q80 120 60 100"/>
          <path d="M100 140 Q100 160 100 180"/>
          <path d="M100 180 Q90 185 85 180 Q90 175 100 180 Q110 175 115 180 Q110 185 100 180"/>
          <circle cx="120" cy="80" r="3" fill="#d97706"/>
          <circle cx="140" cy="90" r="2" fill="#d97706"/>
          <circle cx="160" cy="100" r="2" fill="#d97706"/>
          <path d="M140 100 Q150 110 140 120"/>
        </g>
      </svg>`
    },
    {
      id: 6,
      title: "Wedding Unity Kolam",
      description: "Ceremonial pattern symbolizing harmony and togetherness",
      pattern: `<svg viewBox="0 0 200 200" className="w-full h-full">
        <g stroke="#d97706" strokeWidth="2" fill="none">
          <circle cx="80" cy="100" r="30"/>
          <circle cx="120" cy="100" r="30"/>
          <path d="M50 100 Q100 50 150 100 Q100 150 50 100"/>
          <circle cx="100" cy="100" r="10" fill="#d97706" opacity="0.5"/>
          <path d="M70 80 Q100 60 130 80"/>
          <path d="M70 120 Q100 140 130 120"/>
        </g>
      </svg>`
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main Slideshow Container */}
      <div className="relative aspect-square bg-secondary/30 rounded-lg overflow-hidden shadow-lg">
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-secondary/20 to-secondary/40">
                <div 
                  className="w-full h-full max-w-64 max-h-64" 
                  dangerouslySetInnerHTML={{ __html: slide.pattern }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          onClick={previousSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90 text-foreground shadow-md"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90 text-foreground shadow-md"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Slide Information Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
          <h3 className="text-sm font-semibold text-foreground mb-1">
            {slides[currentSlide].title}
          </h3>
          <p className="text-xs text-muted-foreground">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentSlide
                ? "bg-primary"
                : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Indicator */}
      <div className="flex justify-center mt-2">
        <div className="text-xs text-muted-foreground flex items-center space-x-1">
          <div className={`w-1 h-1 rounded-full ${isAutoPlaying ? "bg-primary animate-pulse" : "bg-muted-foreground/40"}`} />
          <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
        </div>
      </div>
    </div>
  );
}
