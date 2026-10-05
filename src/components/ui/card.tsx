// NOTE: Card primitive designed for enterprise content density and architectural clarity.
// Provides structured containers for services, ERP feature modules, QA metrics, and case studies.
import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Accent hover border line */
  accent?: "none" | "gold" | "blue";
  /** Surface elevation level */
  elevation?: "charcoal" | "surface" | "elevated";
}

/**
 * Card root container.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, accent = "none", elevation = "charcoal", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[16px] border transition-all duration-200 text-[#CAD0DB]",
          // Elevation surfaces
          {
            "bg-[#111318] border-white/[0.06] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.7)]":
              elevation === "charcoal",
            "bg-[#171A20] border-white/[0.08] shadow-[0_6px_24px_-4px_rgba(0,0,0,0.75)]":
              elevation === "surface",
            "bg-[#1F232B] border-white/[0.12] shadow-[0_12px_36px_-6px_rgba(0,0,0,0.85)]":
              elevation === "elevated",
          },
          // Accent hover transitions
          {
            "hover:border-white/[0.16] hover:bg-[#151820]": accent === "none",
            "hover:border-[#C59B45]/50 hover:shadow-[0_0_24px_-6px_rgba(197,155,69,0.18)]":
              accent === "gold",
            "hover:border-[#1D68F2]/50 hover:shadow-[0_0_24px_-6px_rgba(29,104,242,0.22)]":
              accent === "blue",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 sm:p-7", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-display text-xl font-bold tracking-tight text-[#F8FAFC]",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[#8B95A5] leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 sm:p-7 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 sm:p-7 pt-0 border-t border-white/[0.04] mt-4", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
