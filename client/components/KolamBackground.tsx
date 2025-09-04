import { useEffect, useRef } from "react";

interface KolamBackgroundProps {
  className?: string;
  animated?: boolean;
  variant?: 'dots' | 'sikku' | 'mixed';
}

export default function KolamBackground({
  className = "",
  animated = false,
  variant = 'mixed'
}: KolamBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!animated) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced kolam elements with multiple pattern types
    const dots: Array<{ x: number; y: number; opacity: number; size: number; pulsePhase: number }> = [];
    const connections: Array<{ from: number; to: number; opacity: number; curve: number }> = [];
    const sikkuPaths: Array<{
      path: Path2D;
      opacity: number;
      strokePhase: number;
      center: { x: number; y: number };
      radius: number;
    }> = [];
    const gridSpacing = 60;

    // Create traditional dot grid pattern
    if (variant === 'dots' || variant === 'mixed') {
      let dotIndex = 0;
      for (let x = gridSpacing; x < canvas.width; x += gridSpacing) {
        for (let y = gridSpacing; y < canvas.height; y += gridSpacing) {
          // Create more authentic Kolam dot patterns
          const offsetX = (y / gridSpacing) % 2 === 0 ? 0 : gridSpacing / 2; // Offset alternate rows
          dots.push({
            x: x + offsetX,
            y,
            opacity: 0.2 + Math.random() * 0.3,
            size: 1 + Math.random() * 1.5,
            pulsePhase: Math.random() * Math.PI * 2
          });
          dotIndex++;
        }
      }

      // Create Kolam-style connections (curved, flowing patterns)
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < Math.min(i + 12, dots.length); j++) {
          const dx = dots[j].x - dots[i].x;
          const dy = dots[j].y - dots[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < gridSpacing * 1.8 && Math.random() < 0.15) {
            connections.push({
              from: i,
              to: j,
              opacity: 0.08 + Math.random() * 0.15,
              curve: (Math.random() - 0.5) * 0.5 // Add curvature to lines
            });
          }
        }
      }
    }

    // Create Sikku Kolam patterns (continuous loops)
    if (variant === 'sikku' || variant === 'mixed') {
      const sikkuCenters = [];
      const sikkuSpacing = 200;

      for (let x = sikkuSpacing; x < canvas.width; x += sikkuSpacing) {
        for (let y = sikkuSpacing; y < canvas.height; y += sikkuSpacing) {
          sikkuCenters.push({ x, y });
        }
      }

      sikkuCenters.forEach((center, index) => {
        const radius = 30 + Math.random() * 40;
        const path = new Path2D();

        // Create a traditional Sikku pattern (figure-8 or lotus-like)
        const petalCount = 4 + Math.floor(Math.random() * 4);
        path.moveTo(center.x + radius, center.y);

        for (let i = 0; i <= petalCount * 2; i++) {
          const angle = (i / (petalCount * 2)) * Math.PI * 4;
          const r = radius * (0.7 + 0.3 * Math.sin(angle * petalCount / 2));
          const x = center.x + r * Math.cos(angle);
          const y = center.y + r * Math.sin(angle);

          if (i === 0) {
            path.moveTo(x, y);
          } else {
            // Create smooth curves between points
            const prevAngle = ((i - 1) / (petalCount * 2)) * Math.PI * 4;
            const prevR = radius * (0.7 + 0.3 * Math.sin(prevAngle * petalCount / 2));
            const prevX = center.x + prevR * Math.cos(prevAngle);
            const prevY = center.y + prevR * Math.sin(prevAngle);

            const cp1x = prevX + (Math.cos(prevAngle + Math.PI / 2) * radius * 0.2);
            const cp1y = prevY + (Math.sin(prevAngle + Math.PI / 2) * radius * 0.2);
            const cp2x = x - (Math.cos(angle + Math.PI / 2) * radius * 0.2);
            const cp2y = y - (Math.sin(angle + Math.PI / 2) * radius * 0.2);

            path.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
          }
        }

        sikkuPaths.push({
          path,
          opacity: 0.1 + Math.random() * 0.2,
          strokePhase: Math.random() * Math.PI * 2,
          center,
          radius
        });
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.008; // Slower, more meditative animation

      // Draw Sikku patterns first (background layer)
      sikkuPaths.forEach((sikku, index) => {
        const wave = Math.sin(time * 1.5 + sikku.strokePhase) * 0.4 + 0.6;
        const opacity = sikku.opacity * wave;

        // Create flowing gradient for Sikku paths
        const gradient = ctx.createRadialGradient(
          sikku.center.x, sikku.center.y, 0,
          sikku.center.x, sikku.center.y, sikku.radius * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(217, 119, 6, ${opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity * 0.4})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Animate stroke dash for drawing effect
        const dashPhase = time * 50 + index * 10;
        ctx.setLineDash([5, 10]);
        ctx.lineDashOffset = -dashPhase;

        ctx.stroke(sikku.path);
        ctx.setLineDash([]); // Reset dash
      });

      // Draw curved connecting lines (middle layer)
      connections.forEach((connection, index) => {
        const fromDot = dots[connection.from];
        const toDot = dots[connection.to];
        if (!fromDot || !toDot) return;

        const wave = Math.sin(time * 2 + index * 0.2) * 0.3 + 0.7;
        const opacity = connection.opacity * wave;

        const gradient = ctx.createLinearGradient(
          fromDot.x, fromDot.y, toDot.x, toDot.y
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.4})`);
        gradient.addColorStop(0.5, `rgba(217, 119, 6, ${opacity * 0.7})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity * 0.4})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.8;
        ctx.lineCap = 'round';

        // Create curved lines instead of straight ones
        ctx.beginPath();
        ctx.moveTo(fromDot.x, fromDot.y);

        const midX = (fromDot.x + toDot.x) / 2;
        const midY = (fromDot.y + toDot.y) / 2;
        const curveOffset = connection.curve * 30;
        const controlX = midX + curveOffset * Math.sin(time + index);
        const controlY = midY + curveOffset * Math.cos(time + index);

        ctx.quadraticCurveTo(controlX, controlY, toDot.x, toDot.y);
        ctx.stroke();
      });

      // Draw animated dots (top layer)
      dots.forEach((dot, index) => {
        const pulse = Math.sin(time * 1.2 + dot.pulsePhase) * 0.3 + 0.7;
        const opacity = dot.opacity * pulse;

        // Enhanced gradient for dots
        const gradient = ctx.createRadialGradient(
          dot.x, dot.y, 0,
          dot.x, dot.y, dot.size * pulse * 3
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.9})`);
        gradient.addColorStop(0.3, `rgba(217, 119, 6, ${opacity * 0.7})`);
        gradient.addColorStop(0.7, `rgba(139, 92, 246, ${opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(217, 119, 6, ${opacity * 0.3})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * pulse * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [animated]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {animated ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 opacity-25"
          style={{ zIndex: -1 }}
        />
      ) : (
        <div className="absolute inset-0" style={{ zIndex: -1 }}>
          {/* Static Kolam pattern with multiple layers */}
          <div
            className="absolute inset-0 kolam-pattern-sparse opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(217, 119, 6, 0.1) 2px, transparent 2px),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 2px, transparent 2px),
                radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.08) 2px, transparent 2px),
                radial-gradient(circle at 80% 80%, rgba(217, 119, 6, 0.1) 2px, transparent 2px),
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '120px 120px, 120px 120px, 120px 120px, 120px 120px, 60px 60px',
              backgroundPosition: '0 0, 0 0, 0 0, 0 0, 30px 30px'
            }}
          />

          {/* Subtle line patterns */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 30%, rgba(217, 119, 6, 0.1) 30%, rgba(217, 119, 6, 0.1) 70%, transparent 70%),
                linear-gradient(-45deg, transparent 30%, rgba(139, 92, 246, 0.08) 30%, rgba(139, 92, 246, 0.08) 70%, transparent 70%)
              `,
              backgroundSize: '200px 200px, 200px 200px'
            }}
          />
        </div>
      )}
    </div>
  );
}
