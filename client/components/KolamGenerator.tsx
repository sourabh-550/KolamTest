import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Upload, Sparkles, Grid3X3, Download } from "lucide-react";

export default function KolamGenerator() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      // For now, show a placeholder generated kolam
      setGeneratedImage("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJrbGFtIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAwIiB5Mj0iNDAwIj48c3RvcCBzdG9wLWNvbG9yPSIjYTg1NWY3Ii8+PHN0b3Agb2Zmc2V0PSIwLjUiIHN0b3AtY29sb3I9IiNlYzQ4OTkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmNTllMGIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzBmMTcyYSIvPjxnIGZpbGw9InVybCgja2xhbSkiIG9wYWNpdHk9IjAuOCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMyIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjUwIiByPSIzIi8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iNTAiIHI9IjMiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSI1MCIgcj0iMyIvPjxjaXJjbGUgY3g9IjI1MCIgY3k9IjUwIiByPSIzIi8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iNTAiIHI9IjMiLz48Y2lyY2xlIGN4PSIzNTAiIGN5PSI1MCIgcj0iMyIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMTAwIiByPSIzIi8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIzIi8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTAwIiByPSIzIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTAwIiByPSIzIi8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTAwIiByPSIzIi8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iMTAwIiByPSIzIi8+PGNpcmNsZSBjeD0iMzUwIiBjeT0iMTAwIiByPSIzIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSIxNTAiIHI9IjMiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxNTAiIHI9IjMiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxNTAiIHI9IjMiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNTAiIHI9IjMiLz48Y2lyY2xlIGN4PSIyNTAiIGN5PSIxNTAiIHI9IjMiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIxNTAiIHI9IjMiLz48Y2lyY2xlIGN4PSIzNTAiIGN5PSIxNTAiIHI9IjMiLz48cGF0aCBkPSJNNTAgMTAwUTEwMCA1MCAyMDAgMTAwUTMwMCAxNTAgMzUwIDEwMCIgc3Ryb2tlPSJ1cmwoI2tsYW0pIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTAwIDUwUTIwMCAxMDAgMzAwIDUwIiBzdHJva2U9InVybCgja2xhbSkiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNTAgMTAwUTIwMCAxNTAgMjUwIDEwMCIgc3Ryb2tlPSJ1cmwoI2tsYW0pIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9Im5vbmUiLz48L2c+PC9zdmc+");
      setIsGenerating(false);
    }, 3000);
  };

  const samplePrompts = [
    "Show 5-dot Sikku Kolam patterns",
    "Traditional Pulli Kolam with 7x7 grid",
    "Festival Kolam with lotus motifs",
    "Geometric Kolam with 16 dots",
    "Tamil New Year traditional designs"
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto kolam-card">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl flex items-center justify-center gap-2">
          <Grid3X3 className="h-6 w-6 text-primary" />
          <span className="kolam-accent">Digital Kolam Archive</span>
        </CardTitle>
        <CardDescription className="text-lg">
          Explore traditional Kolam patterns and learn about their construction methods and cultural significance.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Input Section */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Search traditional Kolam patterns:
            </label>
            <Textarea
              placeholder="e.g., 'Show me 5-dot Sikku Kolam patterns' or 'Festival Kolam designs'"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          {/* Sample Prompts */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Common searches:
            </label>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((sample, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-secondary"
                  onClick={() => setPrompt(sample)}
                >
                  {sample}
                </Badge>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            <Button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="bg-primary hover:bg-primary/90"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                  Searching...
                </>
              ) : (
                <>
                  <Grid3X3 className="h-4 w-4 mr-2" />
                  Search Patterns
                </>
              )}
            </Button>

            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Output Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Traditional Kolam Patterns</h3>
            {generatedImage && (
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                View Details
              </Button>
            )}
          </div>

          <div className="bg-secondary/30 rounded-lg p-8 min-h-[300px] flex items-center justify-center border border-border kolam-grid">
            {isGenerating ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-muted-foreground">Searching traditional patterns...</p>
              </div>
            ) : generatedImage ? (
              <div className="text-center space-y-4">
                <img
                  src={generatedImage}
                  alt="Traditional Kolam Pattern"
                  className="max-w-full max-h-[400px] mx-auto rounded-lg shadow-sm"
                />
                <p className="text-muted-foreground text-sm">
                  Traditional Kolam pattern for: "{prompt}"
                </p>
              </div>
            ) : (
              <div className="text-center space-y-4 text-muted-foreground">
                <Grid3X3 className="h-16 w-16 mx-auto opacity-50" />
                <p>Traditional Kolam patterns will appear here</p>
                <p className="text-sm opacity-75">Search above to explore different Kolam designs</p>
              </div>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-secondary/30 rounded-lg p-4 border border-border">
          <h4 className="font-medium text-foreground mb-2">🔍 Search tips:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Specify the number of dots (e.g., "5-dot", "7x7 grid")</li>
            <li>• Mention the type (e.g., "Sikku Kolam", "Pulli Kolam")</li>
            <li>• Include themes (e.g., "floral", "geometric", "festival")</li>
            <li>• Add cultural context (e.g., "Tamil New Year", "Diwali")</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
