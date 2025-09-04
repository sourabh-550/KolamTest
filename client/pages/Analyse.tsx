import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Upload, 
  Paintbrush, 
  Search, 
  Grid3X3, 
  RotateCcw, 
  Triangle, 
  Circle,
  Zap,
  Eye,
  Download,
  FileImage,
  Camera
} from "lucide-react";
import KolamBackground from "@/components/KolamBackground";

interface AnalysisResult {
  symmetryType: string;
  confidence: number;
  dotGridSize: string;
  linePatterns: number;
  complexity: string;
  mathematicalProperties: string[];
  culturalSignificance: string;
}

export default function Analyse() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [activeTab, setActiveTab] = useState("upload");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mock analysis function
  const analyzeKolam = async () => {
    setIsAnalyzing(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock analysis results
    const mockResult: AnalysisResult = {
      symmetryType: "8-fold Rotational Symmetry",
      confidence: 92,
      dotGridSize: "7x7 Pulli Pattern",
      linePatterns: 16,
      complexity: "Intermediate",
      mathematicalProperties: [
        "Dihedral group D8",
        "Euler characteristic χ = 2",
        "Continuous path topology",
        "Sacred geometry ratios"
      ],
      culturalSignificance: "Traditional festival Kolam pattern commonly used during Pongal celebrations"
    };
    
    setAnalysisResult(mockResult);
    setIsAnalyzing(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setAnalysisResult(null);
    }
  };

  const handleCanvasClear = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw grid
        drawGrid(ctx, canvas.width, canvas.height);
      }
    }
  };

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    const gridSize = 20;
    
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    
    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw dots at grid intersections
    ctx.fillStyle = '#d97706';
    for (let x = 0; x <= width; x += gridSize) {
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  };

  // Initialize canvas
  const initializeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = 400;
        canvas.height = 400;
        drawGrid(ctx, canvas.width, canvas.height);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <KolamBackground animated={true} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            <span className="kolam-accent">Analyse</span> Kolam Patterns
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Upload or draw a Kolam pattern to discover its mathematical properties, cultural significance, 
            and geometric principles using advanced pattern recognition and analysis.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Search className="h-5 w-5 text-primary" />
                  Kolam Input Methods
                </CardTitle>
                <CardDescription>
                  Choose how you want to provide your Kolam pattern for analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="upload" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Image
                    </TabsTrigger>
                    <TabsTrigger value="draw" className="gap-2">
                      <Paintbrush className="h-4 w-4" />
                      Draw Pattern
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="upload" className="space-y-4">
                    <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      
                      {previewUrl ? (
                        <div className="space-y-4">
                          <img 
                            src={previewUrl} 
                            alt="Uploaded Kolam" 
                            className="max-w-full max-h-64 mx-auto rounded-lg shadow-md"
                          />
                          <div className="flex gap-2 justify-center">
                            <Button
                              onClick={() => fileInputRef.current?.click()}
                              variant="outline"
                              size="sm"
                            >
                              <FileImage className="h-4 w-4 mr-2" />
                              Change Image
                            </Button>
                            <Button
                              onClick={analyzeKolam}
                              disabled={isAnalyzing}
                              className="bg-primary hover:bg-primary/90"
                              size="sm"
                            >
                              <Zap className="h-4 w-4 mr-2" />
                              {isAnalyzing ? 'Analyzing...' : 'Analyze Pattern'}
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Camera className="h-16 w-16 text-muted-foreground mx-auto" />
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              Upload Kolam Image
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              Support for JPG, PNG, and other common image formats
                            </p>
                            <Button 
                              onClick={() => fileInputRef.current?.click()}
                              className="bg-primary hover:bg-primary/90"
                            >
                              <Upload className="h-4 w-4 mr-2" />
                              Choose File
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="draw" className="space-y-4">
                    <div className="text-center space-y-4">
                      <canvas
                        ref={canvasRef}
                        className="border border-border rounded-lg mx-auto bg-white"
                        onLoad={initializeCanvas}
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                      <div className="flex gap-2 justify-center">
                        <Button
                          onClick={handleCanvasClear}
                          variant="outline"
                          size="sm"
                        >
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Clear Canvas
                        </Button>
                        <Button
                          onClick={initializeCanvas}
                          variant="outline"
                          size="sm"
                        >
                          <Grid3X3 className="h-4 w-4 mr-2" />
                          Reset Grid
                        </Button>
                        <Button
                          onClick={analyzeKolam}
                          disabled={isAnalyzing}
                          className="bg-primary hover:bg-primary/90"
                          size="sm"
                        >
                          <Zap className="h-4 w-4 mr-2" />
                          Analyze Drawing
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <strong>Note:</strong> Canvas drawing functionality is a placeholder. 
                        Click "Analyze Drawing" to see mock analysis results.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Analysis Progress */}
            {isAnalyzing && (
              <Card className="kolam-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary animate-pulse" />
                      <h3 className="text-lg font-semibold text-foreground">Analyzing Kolam Pattern...</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Processing image...</span>
                        <span>Step 1/4</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>✓ Detecting geometric patterns</li>
                      <li>✓ Analyzing symmetry properties</li>
                      <li>⏳ Calculating mathematical ratios</li>
                      <li>⏳ Identifying cultural elements</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Eye className="h-5 w-5 text-primary" />
                  Analysis Results
                </CardTitle>
                <CardDescription>
                  Detailed insights about your Kolam pattern
                </CardDescription>
              </CardHeader>
              <CardContent>
                {analysisResult ? (
                  <div className="space-y-6">
                    {/* Symmetry Analysis */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Circle className="h-4 w-4 text-primary" />
                        Symmetry Type
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Type</span>
                          <Badge className="bg-primary text-primary-foreground">
                            {analysisResult.symmetryType}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Confidence</span>
                          <span className="text-sm font-medium text-foreground">
                            {analysisResult.confidence}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Structure Analysis */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Grid3X3 className="h-4 w-4 text-primary" />
                        Pattern Structure
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Dot Grid</span>
                          <span className="text-sm font-medium text-foreground">
                            {analysisResult.dotGridSize}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Line Patterns</span>
                          <span className="text-sm font-medium text-foreground">
                            {analysisResult.linePatterns}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Complexity</span>
                          <Badge variant="outline" className="border-primary text-primary">
                            {analysisResult.complexity}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Mathematical Properties */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Triangle className="h-4 w-4 text-primary" />
                        Mathematical Properties
                      </h4>
                      <ul className="space-y-1">
                        {analysisResult.mathematicalProperties.map((property, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {property}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    {/* Cultural Significance */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Cultural Context</h4>
                      <p className="text-sm text-muted-foreground">
                        {analysisResult.culturalSignificance}
                      </p>
                    </div>

                    <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
                      <Download className="h-4 w-4" />
                      Download Analysis Report
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground">
                      Upload an image or draw a pattern to see analysis results
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Analysis Features */}
            <Card className="kolam-card">
              <CardHeader>
                <CardTitle className="text-foreground">Analysis Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Circle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-sm font-medium text-foreground">Symmetry Detection</h5>
                      <p className="text-xs text-muted-foreground">
                        Identifies rotational, reflectional, and translational symmetries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Grid3X3 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-sm font-medium text-foreground">Pattern Analysis</h5>
                      <p className="text-xs text-muted-foreground">
                        Analyzes dot grids, line patterns, and geometric structures
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Triangle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-sm font-medium text-foreground">Mathematical Insights</h5>
                      <p className="text-xs text-muted-foreground">
                        Provides mathematical properties and topological information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="text-sm font-medium text-foreground">Cultural Context</h5>
                      <p className="text-xs text-muted-foreground">
                        Explains cultural significance and traditional usage
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <Card className="kolam-card max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">
                How Kolam <span className="kolam-accent">Analysis</span> Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">1. Input Pattern</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload an image or draw your Kolam pattern using our interactive canvas
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">2. AI Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced algorithms analyze geometric properties, symmetries, and cultural elements
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">3. Detailed Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Get comprehensive insights about mathematical properties and cultural significance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
