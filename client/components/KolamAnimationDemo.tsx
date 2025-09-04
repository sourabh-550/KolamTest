import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import KolamLoader from "./KolamLoader";
import { Play, RefreshCw } from "lucide-react";

export default function KolamAnimationDemo() {
  const [showAnimation, setShowAnimation] = useState(false);

  const triggerAnimation = () => {
    setShowAnimation(true);
  };

  return (
    <Card className="kolam-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Play className="h-5 w-5 text-primary" />
          Kolam Drawing Animation
        </CardTitle>
        <CardDescription>
          Experience the traditional art of Kolam creation with white lines being drawn on a black background
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <Button 
              onClick={triggerAnimation}
              className="gap-2 bg-primary hover:bg-primary/90"
              disabled={showAnimation}
            >
              <RefreshCw className={`h-4 w-4 ${showAnimation ? 'animate-spin' : ''}`} />
              {showAnimation ? 'Drawing Kolam...' : 'Start Animation'}
            </Button>
          </div>
          
          <div className="p-4 bg-secondary/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Traditional Technique:</strong> Watch as the Sikku Kolam pattern is drawn using continuous lines, 
              just like how traditional artists create these sacred geometric patterns with rice flour or chalk.
            </p>
          </div>
        </div>
      </CardContent>

      {/* Kolam Animation Overlay */}
      <KolamLoader 
        isLoading={showAnimation} 
        onComplete={() => {
          setShowAnimation(false);
        }}
      />
    </Card>
  );
}
