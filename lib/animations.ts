import { Variants } from "framer-motion";

// Fade in animation variants
export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        delay,
        duration: 0.3,
      },
    },
  };
};

// Staggered container for children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Card hover animation
export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -5,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 17 
    } 
  },
};

// Button hover animation
export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    } 
  },
  tap: { scale: 0.95 }
};

// Page transition variants
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
};

// Slide in from side animation
export const slideIn = (direction: "left" | "right", delay: number = 0): Variants => {
  return {
    hidden: {
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        delay,
      },
    },
  };
};

// Scale animation
export const scaleUp: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
};

// Rotate in animation
export const rotateIn: Variants = {
  hidden: { rotate: -10, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
};

// Bounce animation
export const bounce: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1.5,
    },
  },
};

// Pulse animation
export const pulse: Variants = {
  hidden: { scale: 1 },
  visible: {
    scale: [1, 1.05, 1],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 2,
    },
  },
};

// Shimmer effect for loading states
export const shimmer: Variants = {
  hidden: { backgroundPosition: "-200% 0" },
  visible: {
    backgroundPosition: "200% 0",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1.5,
      ease: "linear",
    },
  },
};

// Flip animation
export const flip: Variants = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  },
};

// Scroll-triggered reveal animation
export const revealOnScroll: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
};

// Text character animation
export const textCharacter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
};

// Staggered text animation for sentences
export const staggeredText = (delay: number = 0): Variants => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };
};

// Hover scale for icons
export const iconHover: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.2, 
    rotate: 5,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    } 
  },
};

// Path drawing animation for SVGs
export const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.2 },
    },
  },
};

// Scroll-triggered parallax effect
export const parallaxScroll = (speed: number = 0.5): Variants => {
  return {
    hidden: { y: 0 },
    visible: {
      y: `-${speed * 100}%`,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
  };
};
