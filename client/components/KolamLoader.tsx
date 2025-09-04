import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface KolamLoaderProps {
  isLoading?: boolean;
  onComplete?: () => void;
  className?: string;
}

export default function KolamLoader({ 
  isLoading = true, 
  onComplete,
  className = "" 
}: KolamLoaderProps) {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      // Delay hiding to allow fade animation
      const timer = setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [isLoading, onComplete]);

  if (!isVisible) return null;

  // Sikku Kolam path - continuous looping pattern
  const sikkuPath = "M100 50 Q150 75 100 100 Q50 75 100 50 Q100 85 150 100 Q100 115 50 100 Q100 115 100 150 Q50 125 100 100 Q150 125 100 150 Q100 115 50 100 Q100 85 100 50";
  
  const pathVariants = {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: {
      pathLength: 1,
      opacity: 1
    },
    exit: {
      pathLength: 1,
      opacity: 0
    }
  };

  const containerVariants = {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.8
    }
  };

  const dotVariants = {
    initial: {
      scale: 0,
      opacity: 0
    },
    animate: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0.8]
    }
  };

  return (
    <motion.div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm ${className}`}
      variants={containerVariants}
      initial="initial"
      animate={isLoading ? "animate" : "exit"}
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative">
        {/* Main Sikku Kolam Pattern */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="drop-shadow-lg"
        >
          {/* Guide dots that appear first */}
          {[
            [50, 75], [100, 50], [150, 75],
            [50, 100], [100, 100], [150, 100],
            [50, 125], [100, 150], [150, 125]
          ].map(([x, y], index) => (
            <motion.circle
              key={index}
              cx={x}
              cy={y}
              r="2"
              fill="rgba(255, 255, 255, 0.6)"
              variants={dotVariants}
              initial="initial"
              animate="animate"
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Main Sikku path */}
          <motion.path
            d={sikkuPath}
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))"
            }}
            variants={pathVariants}
            initial="initial"
            animate="animate"
            transition={{
              pathLength: {
                duration: 3,
                ease: "easeInOut",
                repeat: isLoading ? Infinity : 0,
                repeatType: "loop"
              },
              opacity: {
                duration: 0.5,
                ease: "easeInOut"
              }
            }}
          />

          {/* Secondary decorative loops */}
          <motion.circle
            cx="100"
            cy="100"
            r="15"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="2"
            fill="none"
            variants={pathVariants}
            initial="initial"
            animate="animate"
            transition={{
              pathLength: {
                duration: 2,
                ease: "easeInOut",
                repeat: isLoading ? Infinity : 0,
                repeatType: "reverse",
                delay: 0.5
              },
              opacity: {
                duration: 0.5,
                ease: "easeInOut"
              }
            }}
          />

          {/* Inner decorative ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="8"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
            fill="none"
            variants={pathVariants}
            initial="initial"
            animate="animate"
            transition={{
              pathLength: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: isLoading ? Infinity : 0,
                repeatType: "reverse",
                delay: 1
              },
              opacity: {
                duration: 0.5,
                ease: "easeInOut"
              }
            }}
          />
        </svg>

        {/* Loading text */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-white/80 text-sm font-light tracking-wide">
            Drawing Kolam...
          </p>
          
          {/* Animated dots */}
          <motion.div
            className="flex justify-center mt-2 space-x-1"
            initial="initial"
            animate="animate"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-1 h-1 bg-white/60 rounded-full"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: isLoading ? Infinity : 0,
                  delay: index * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Hook for easy loading state management
export function useKolamLoader(initialLoading = true) {
  const [isLoading, setIsLoading] = useState(initialLoading);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading,
    KolamLoader: (props: Omit<KolamLoaderProps, 'isLoading'>) => (
      <KolamLoader {...props} isLoading={isLoading} />
    )
  };
}
