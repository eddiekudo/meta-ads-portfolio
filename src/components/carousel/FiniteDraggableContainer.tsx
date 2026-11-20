import {
  animate,
  cubicBezier,
  motion,
  useMotionValue,
  useAnimationFrame,
  wrap,
} from "motion/react";
import {
  memo,
  useContext,
  useEffect,
  useRef,
  useState,
  createContext,
  useCallback,
} from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { VariantType } from "@/types/campaign";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Create Context
interface GridVariantContextType {
  variant: VariantType;
  onSelectCard?: (index: number) => void;
}

const GridVariantContext = createContext<GridVariantContextType>({
  variant: "default",
});

// Motion Variants for item entrance
const rowVariants = {
  initial: { opacity: 0, scale: 0.85, y: 20 },
  animate: (customDelay: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: customDelay || 0.15,
      duration: 0.6,
      ease: cubicBezier(0.18, 0.71, 0.11, 1),
    },
  }),
};

export const FiniteDraggableContainer = ({
  className,
  children,
  variant = "default",
  onProgressChange,
  onFinaleVisible,
}: {
  className?: string;
  children: React.ReactNode;
  variant?: VariantType;
  onProgressChange?: (progress: number) => void;
  onFinaleVisible?: () => void;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const set1Ref = useRef<HTMLDivElement | null>(null);
  const set2Ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [loopDistance, setLoopDistance] = useState(0);

  const updateBounds = useCallback(() => {
    if (set1Ref.current && set2Ref.current) {
      const dist = set2Ref.current.offsetLeft - set1Ref.current.offsetLeft;
      if (dist > 50) {
        setLoopDistance(dist);
        return;
      }
    }
    if (set1Ref.current) {
      const w = set1Ref.current.scrollWidth || set1Ref.current.offsetWidth;
      if (w > 50) {
        setLoopDistance(w + 32);
      }
    }
  }, []);

  useEffect(() => {
    updateBounds();
    const t1 = setTimeout(updateBounds, 100);
    const t2 = setTimeout(updateBounds, 400);
    const t3 = setTimeout(updateBounds, 1200);
    window.addEventListener("resize", updateBounds);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("resize", updateBounds);
    };
  }, [updateBounds]);

  const handleIsDragging = () => setIsDragging(true);
  const handleDragEnd = () => {
    setIsDragging(false);
    if (loopDistance > 50) {
      x.set(wrap(-loopDistance, 0, x.get()));
    }
  };

  // Continuous sliding animation in a loop (pauses on hover or drag)
  useAnimationFrame((_time, delta) => {
    if (isHovered || isDragging) return;
    if (loopDistance <= 50) return;

    // Smooth continuous sliding (approx 36px per second)
    const moveBy = (delta / 1000) * 36;
    const currentX = x.get();
    const nextX = wrap(-loopDistance, 0, currentX - moveBy);
    x.set(nextX);
  });

  useEffect(() => {
    const unsubscribeX = x.on("change", (latest) => {
      if (loopDistance > 50) {
        const normalized = ((latest % loopDistance) + loopDistance) % loopDistance;
        const progress = (normalized / loopDistance) * 100;
        onProgressChange?.(progress);
        if (progress >= 85) {
          onFinaleVisible?.();
        }
      }
    });

    return () => {
      unsubscribeX();
    };
  }, [x, loopDistance, onProgressChange, onFinaleVisible]);

  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey) {
        const delta = event.shiftKey ? event.deltaY : event.deltaX;
        const currentX = x.get();
        const targetX = currentX - delta * 1.5;
        if (loopDistance > 50) {
          x.set(wrap(-loopDistance, 0, targetX));
        } else {
          x.set(targetX);
        }
      }
    };

    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.addEventListener("wheel", handleWheelScroll, { passive: true });
    }

    return () => {
      if (containerEl) {
        containerEl.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, [x, loopDistance]);

  const scrollStep = (direction: "left" | "right") => {
    const stepSize = 340;
    const currentX = x.get();
    const targetX =
      direction === "left"
        ? currentX + stepSize
        : currentX - stepSize;

    animate(x, targetX, {
      type: "tween",
      duration: 0.5,
      ease: cubicBezier(0.18, 0.71, 0.11, 1),
      onComplete: () => {
        if (loopDistance > 50) {
          x.set(wrap(-loopDistance, 0, x.get()));
        }
      },
    });
  };

  return (
    <GridVariantContext.Provider value={{ variant }}>
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full overflow-hidden select-none py-6 group/carousel"
      >
        {/* Floating Left Arrow */}
        <button
          onClick={() => scrollStep("left")}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/90 dark:bg-notion-dark-card/90 hover:bg-white dark:hover:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline text-notion-charcoal dark:text-notion-dark-text shadow-notion backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          aria-label="Previous ad"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Floating Right Arrow */}
        <button
          onClick={() => scrollStep("right")}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/90 dark:bg-notion-dark-card/90 hover:bg-white dark:hover:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline text-notion-charcoal dark:text-notion-dark-text shadow-notion backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          aria-label="Next ad"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Continuous sliding track */}
        <motion.div
          ref={trackRef}
          className={cn(
            "flex gap-6 md:gap-8 items-center will-change-transform px-6 md:px-14 w-max",
            isDragging ? "cursor-grabbing" : "cursor-grab",
            className
          )}
          drag="x"
          dragMomentum={true}
          dragTransition={{
            timeConstant: 200,
            power: 0.25,
            bounceStiffness: 100,
          }}
          onMouseDown={handleIsDragging}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleIsDragging}
          onTouchEnd={handleDragEnd}
          style={{ x }}
        >
          <div ref={set1Ref} className="flex gap-6 md:gap-8 items-center shrink-0">
            {children}
          </div>
          <div ref={set2Ref} className="flex gap-6 md:gap-8 items-center shrink-0" aria-hidden="true">
            {children}
          </div>
          <div className="flex gap-6 md:gap-8 items-center shrink-0" aria-hidden="true">
            {children}
          </div>
        </motion.div>
      </div>
    </GridVariantContext.Provider>
  );
};

export const GridItem = ({
  children,
  className,
  customDelay = 0,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  customDelay?: number;
  onClick?: () => void;
}) => {
  const { variant } = useContext(GridVariantContext);

  const gridItemStyles = cva(
    "overflow-hidden hover:cursor-pointer will-change-transform transition-all duration-300 relative group",
    {
      variants: {
        variant: {
          default:
            "rounded-lg border border-notion-hairline dark:border-notion-dark-hairline bg-white dark:bg-notion-dark-card shadow-notion hover:border-notion-hairline-strong dark:hover:border-notion-steel hover:shadow-notion-mockup hover:-translate-y-1",
          masonry:
            "even:translate-y-6 odd:-translate-y-4 rounded-lg border border-notion-hairline dark:border-notion-dark-hairline bg-white dark:bg-notion-dark-card shadow-notion hover:translate-y-0 hover:scale-105",
          polaroid:
            "border-8 border-b-20 border-white dark:border-zinc-800 shadow-notion-mockup even:rotate-2 odd:-rotate-2 hover:rotate-0 hover:scale-105 transition-transform duration-300 rounded-sm bg-white dark:bg-notion-dark-card",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

  return (
    <motion.div
      className={cn(gridItemStyles({ variant, className }))}
      variants={rowVariants}
      initial="initial"
      animate="animate"
      custom={customDelay}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export const GridBody = memo(
  ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex gap-6 md:gap-8 items-center", className)}>
        {children}
      </div>
    );
  }
);

GridBody.displayName = "GridBody";
