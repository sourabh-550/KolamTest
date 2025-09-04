import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KolamLoader from "./KolamLoader";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  showLoader?: boolean;
  loaderDuration?: number;
}

export default function PageTransition({
  children,
  className = "",
  showLoader = false,
  loaderDuration = 1500
}: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(showLoader);

  useEffect(() => {
    if (showLoader) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, loaderDuration);
      return () => clearTimeout(timer);
    }
  }, [showLoader, loaderDuration]);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  // Kolam-inspired transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      rotateY: -10,
    },
    in: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    out: {
      opacity: 0,
      scale: 1.05,
      rotateY: 10,
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  const kolamOverlayVariants = {
    initial: {
      pathLength: 0,
      opacity: 0,
    },
    animate: {
      pathLength: 1,
      opacity: [0, 0.8, 0],
    },
    exit: {
      pathLength: 0,
      opacity: 0,
    }
  };

  const spiralVariants = {
    initial: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    animate: {
      scale: [0, 1.2, 0],
      rotate: 180,
      opacity: [0, 0.6, 0],
    },
    exit: {
      scale: 0,
      rotate: 360,
      opacity: 0,
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Kolam Loading Animation */}
      {showLoader && <KolamLoader isLoading={isLoading} />}

      {/* Kolam Line Transition Overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
        exit="exit"
      >
        {/* Fading Kolam Loop Lines */}
        <svg
          width="100vw"
          height="100vh"
          viewBox="0 0 1000 1000"
          className="absolute inset-0"
          style={{ filter: "drop-shadow(0 0 20px rgba(255, 183, 77, 0.5))" }}
        >
          <motion.path
            d="M500 100 Q700 300 500 500 Q300 300 500 100 Q500 350 700 500 Q500 650 300 500 Q500 650 500 900 Q300 700 500 500 Q700 700 500 900 Q500 650 300 500 Q500 350 500 100"
            stroke="url(#kolamGradient)"
            strokeWidth="3"
            fill="none"
            variants={kolamOverlayVariants}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
          
          {/* Secondary Kolam Pattern */}
          <motion.path
            d="M200 200 Q400 100 600 200 Q700 400 600 600 Q400 700 200 600 Q100 400 200 200"
            stroke="url(#kolamGradient2)"
            strokeWidth="2"
            fill="none"
            variants={kolamOverlayVariants}
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: "easeInOut",
            }}
          />

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="kolamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ff9500", stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: "#ff6b35", stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.8 }} />
            </linearGradient>
            <linearGradient id="kolamGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.6 }} />
              <stop offset="50%" style={{ stopColor: "#a855f7", stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: "#ff9500", stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Spiral Reveal Effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={spiralVariants}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <div
            className="w-96 h-96 rounded-full border-4 border-orange-400 opacity-40"
            style={{
              background: "conic-gradient(from 0deg, transparent, rgba(255, 149, 0, 0.2), transparent, rgba(139, 92, 246, 0.2), transparent)",
              filter: "blur(1px)",
            }}
          />
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle at center, rgba(255, 149, 0, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Page Content */}
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}

// Higher-order component for easy page wrapping
export function withPageTransition<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WrappedComponent(props: P) {
    return (
      <PageTransition>
        <Component {...props} />
      </PageTransition>
    );
  };
}
