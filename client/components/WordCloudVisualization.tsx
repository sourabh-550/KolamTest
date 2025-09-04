import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface WordCloudData {
  text: string;
  value: number;
}

interface WordCloudVisualizationProps {
  data: WordCloudData[];
  className?: string;
}

const colors = [
  'text-blue-600',
  'text-indigo-600', 
  'text-purple-600',
  'text-green-600',
  'text-teal-600',
  'text-cyan-600',
  'text-slate-600',
  'text-gray-600'
];

export default function WordCloudVisualization({ data, className }: WordCloudVisualizationProps) {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  const processedData = useMemo(() => {
    if (!data || data.length === 0) return [];

    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    
    return data.map((item, index) => {
      // Normalize size between 12px and 48px
      const normalizedSize = 12 + ((item.value - minValue) / (maxValue - minValue)) * 36;
      
      return {
        ...item,
        size: Math.max(12, normalizedSize),
        color: colors[index % colors.length],
        position: {
          x: Math.random() * 80 + 10, // 10-90% to avoid edge cutting
          y: Math.random() * 80 + 10, // 10-90% to avoid edge cutting
        }
      };
    });
  }, [data]);

  if (!data || data.length === 0) {
    return (
      <div className={cn("h-64 bg-slate-50 rounded-lg flex items-center justify-center", className)}>
        <div className="text-center">
          <div className="text-slate-400 mb-2">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-slate-500">Enter text above to generate word cloud</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative h-96 bg-white border rounded-lg overflow-hidden", className)}>
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#000" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Word cloud */}
      <div className="relative h-full p-4">
        {processedData.map((word, index) => (
          <div
            key={`${word.text}-${index}`}
            className="absolute cursor-pointer transition-all duration-200 transform hover:scale-110 select-none"
            style={{
              left: `${word.position.x}%`,
              top: `${word.position.y}%`,
              fontSize: `${word.size}px`,
              transform: `translate(-50%, -50%) ${hoveredWord === word.text ? 'scale(1.1)' : 'scale(1)'}`,
            }}
            onMouseEnter={() => setHoveredWord(word.text)}
            onMouseLeave={() => setHoveredWord(null)}
          >
            <span 
              className={cn(
                word.color,
                "font-semibold transition-all duration-200",
                hoveredWord === word.text && "text-blue-700 drop-shadow-sm"
              )}
              style={{
                textShadow: hoveredWord === word.text ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              {word.text}
            </span>
            
            {/* Tooltip */}
            {hoveredWord === word.text && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10 shadow-lg">
                <span className="font-medium">{word.text}</span>
                <span className="ml-2 text-slate-300">({word.value})</span>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-slate-900"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1 text-xs text-slate-600 border">
        <div className="flex items-center space-x-1">
          <span>Size = Frequency</span>
          <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
          <span>Hover for details</span>
        </div>
      </div>

      {/* Word count indicator */}
      <div className="absolute top-2 right-2 bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
        {data.length} terms displayed
      </div>
    </div>
  );
}
