import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  // Breathing-inspired transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.96,
      y: 20
    },
    in: {
      opacity: 1,
      scale: 1,
      y: 0
    },
    out: {
      opacity: 0,
      scale: 0.98,
      y: -10
    }
  };

  const pageTransition = {
    type: "tween",
    ease: [0.4, 0, 0.2, 1], // Smooth cubic-bezier
    duration: 0.6
  };

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (transitionStage === "fadeOut") {
          setDisplayLocation(location);
          setTransitionStage("fadeIn");
        }
      }}
    >
      <motion.div
        key={location}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{
          position: "relative",
          width: "100%",
          minHeight: "calc(100vh - 200px)" // Account for header/footer
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Enhanced breathing animation component for specific elements
interface BreathingElementProps {
  children: React.ReactNode;
  intensity?: "subtle" | "gentle" | "pronounced";
  duration?: number;
  className?: string;
}

export function BreathingElement({ 
  children, 
  intensity = "gentle", 
  duration = 6,
  className = ""
}: BreathingElementProps) {
  const scaleValues = {
    subtle: [1, 1.002, 1],
    gentle: [1, 1.005, 1],
    pronounced: [1, 1.01, 1]
  };

  const opacityValues = {
    subtle: [1, 0.99, 1],
    gentle: [1, 0.98, 1], 
    pronounced: [1, 0.95, 1]
  };

  return (
    <motion.div
      className={className}
      animate={{
        scale: scaleValues[intensity],
        opacity: opacityValues[intensity]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// Staggered fade-in animation for lists
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ 
  children, 
  className = "",
  staggerDelay = 0.1 
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { 
          opacity: 0, 
          y: 20,
          scale: 0.98
        },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}