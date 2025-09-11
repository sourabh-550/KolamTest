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

  // Parse input like "5-dot sikku", "7x7 weave", etc.
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

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setGeneratedImage(null);
    try {
      const { rows, cols, rule } = parseInput(prompt);
      const apiUrl = `http://localhost:8000/generate_kolam?rows=${rows}&cols=${cols}&rule=${rule}&show_dots=true`;
      setGeneratedImage(apiUrl);
    } catch (err) {
      setGeneratedImage(null);
    }
    setIsGenerating(false);
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
