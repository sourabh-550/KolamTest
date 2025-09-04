import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Palette,
  Heart,
  Calculator,
  ImageIcon,
  Search,
  Menu,
  X,
  Grid3X3
} from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { 
      id: "home", 
      label: "Home", 
      icon: Home, 
      path: "/",
      preview: {
        title: "Kolam Heritage Portal",
        description: "Discover the living heritage of South Indian geometric art",
        image: "🏠"
      }
    },
    { 
      id: "kolam", 
      label: "Kolam", 
      icon: Palette, 
      path: "/kolam",
      preview: {
        title: "Origins & Variants of Kolam",
        description: "Learn about traditional types, methods, and cultural significance",
        image: "⚹"
      }
    },
    { 
      id: "culture", 
      label: "Culture & Heritage", 
      icon: Heart, 
      path: "/culture-heritage",
      preview: {
        title: "Kolam in Rituals & Festivals",
        description: "Explore cultural practices and ceremonial traditions",
        image: "🎨"
      }
    },
    {
      id: "math",
      label: "Mathematical Significance",
      icon: Calculator,
      path: "/math",
      preview: {
        title: "Sacred Geometry & Mathematics",
        description: "Discover mathematical concepts in traditional patterns",
        image: "📐"
      }
    },
    {
      id: "analyse",
      label: "Analyse Kolam",
      icon: Search,
      path: "/analyse",
      preview: {
        title: "AI-Powered Pattern Analysis",
        description: "Upload or draw Kolam patterns for detailed mathematical and cultural analysis",
        image: "🔍"
      }
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: ImageIcon,
      path: "/gallery",
      preview: {
        title: "Digital Archive & Collection",
        description: "Browse traditional patterns and explore our archive",
        image: "🖼️"
      }
    },
  ];

  const isCurrentPath = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-primary rounded-lg p-2 group-hover:scale-105 transition-transform">
              <Grid3X3 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Kolam Heritage</h1>
              <p className="text-sm text-muted-foreground">Traditional Art & Culture</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 relative">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = isCurrentPath(item.path);
              
              return (
                <div 
                  key={item.id} 
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link to={item.path}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`flex items-center space-x-2 px-4 py-2 transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Button>
                  </Link>

                  {/* Hover Preview */}
                  {hoveredItem === item.id && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50">
                      <Card className="kolam-card w-64 shadow-lg animate-fade-in">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="text-2xl">{item.preview.image}</div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground text-sm mb-1">
                                {item.preview.title}
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                {item.preview.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      {/* Arrow pointer */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-4 h-4 bg-card border-l border-t border-border rotate-45"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-down">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = isCurrentPath(item.path);
                
                return (
                  <Link 
                    key={item.id} 
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    }`}>
                      <div className="flex items-center space-x-3">
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <div className="text-lg">{item.preview.image}</div>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>

      {/* Overlay for hover previews */}
      {hoveredItem && (
        <div 
          className="fixed inset-0 z-40 pointer-events-none" 
          onMouseEnter={() => setHoveredItem(null)}
        />
      )}
    </header>
  );
}
