// NOTE: Polymorphic Button component implementing RÉVA Consulting's core design tokens.
// Uses Radix Slot for `asChild` composition and CVA for strictly typed aesthetic variants.
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button variants orchestrate RÉVA Consulting's semantic color system:
 * - gold: Represents leadership, expertise, and flagship product actions (Élancé ERP).
 * - blue: Represents technology, innovation, and digital IT testing actions.
 * - outlineGold / outlineBlue / outlineSilver: High-precision bordered actions.
 * - ghost / secondary: Subtle contextual interactions against the dark foundation.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap text-xs font-medium uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none",
  {
    variants: {
      variant: {
        // Primary Gold: Warm champagne gold, authoritative presence
        gold: "bg-[#C59B45] text-[#08090C] font-semibold hover:bg-[#D4B066] active:bg-[#AA8132] focus-visible:ring-[#C59B45]/60 shadow-[0_2px_12px_rgba(197,155,69,0.22)]",

        // Primary Blue: Restrained electric blue, digital & technological precision
        blue: "bg-[#1D68F2] text-white font-semibold hover:bg-[#3B82F6] active:bg-[#1552C6] focus-visible:ring-[#1D68F2]/60 shadow-[0_2px_12px_rgba(29,104,242,0.25)]",

        // Outline Gold: Subtle dark charcoal base with champagne gold perimeter
        outlineGold:
          "border border-[#C59B45]/40 text-[#DFC489] bg-[#111318]/60 hover:bg-[#171A20] hover:border-[#C59B45] hover:text-[#F6F0DB] focus-visible:ring-[#C59B45]/50",

        // Outline Blue: Subtle dark charcoal base with electric blue perimeter
        outlineBlue:
          "border border-[#1D68F2]/40 text-[#60A5FA] bg-[#111318]/60 hover:bg-[#171A20] hover:border-[#1D68F2] hover:text-white focus-visible:ring-[#1D68F2]/50",

        // Outline Silver: Engineering precision, neutral border with high-contrast text
        outlineSilver:
          "border border-[#2A2F3D] text-[#CAD0DB] bg-[#111318]/40 hover:bg-[#171A20] hover:border-[#4B5569] hover:text-[#F8FAFC] focus-visible:ring-slate-400/40",

        // Secondary: Elevated dark surface for tertiary actions
        secondary:
          "bg-[#171A20] text-[#CAD0DB] border border-white/[0.06] hover:bg-[#1F232B] hover:text-[#F8FAFC] hover:border-white/[0.12] focus-visible:ring-slate-400/40",

        // Ghost: Zero surface fill, subtle hover background
        ghost:
          "text-[#CAD0DB] hover:bg-[#171A20] hover:text-[#F8FAFC] focus-visible:ring-slate-400/30",

        // Link: Simple inline text anchor with subtle gold or silver underline
        link: "text-[#DFC489] underline-offset-4 hover:underline p-0 h-auto normal-case tracking-normal",
      },
      size: {
        default: "h-11 px-6 py-2.5 rounded-[10px]",
        sm: "h-9 px-4 text-[11px] rounded-[8px]",
        lg: "h-13 px-8 text-sm rounded-[12px]",
        icon: "h-10 w-10 rounded-[10px]",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * Button component supporting standard HTML button props and Next.js Link composition via `asChild`.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // NOTE: When asChild is true, Slot renders child element directly with merged props
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
