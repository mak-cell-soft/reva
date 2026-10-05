// NOTE: Precise, restrained Badge primitive for technical tagging, status indicators, and domain markers.
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] text-[11px] font-medium tracking-wide transition-colors select-none",
  {
    variants: {
      variant: {
        // Gold: Expertise, Leadership, Software Publisher & Élancé ERP markers
        gold: "bg-[#C59B45]/10 text-[#DFC489] border border-[#C59B45]/30",

        // Blue: Technology, Innovation, IT Testing & Digital Systems markers
        blue: "bg-[#1D68F2]/10 text-[#60A5FA] border border-[#1D68F2]/30",

        // Silver: Precision, Engineering, Metric telemetry & Specifications
        silver: "bg-[#171A20] text-[#CAD0DB] border border-[#2A2F3D]",

        // Subtle: Minimal neutral charcoal tag
        subtle: "bg-[#111318] text-[#8B95A5] border border-white/[0.06]",

        // Outline: High-contrast dark outline
        outline: "bg-transparent text-[#CAD0DB] border border-[#2E3545]",
      },
    },
    defaultVariants: {
      variant: "gold",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Optional dot indicator color */
  indicator?: "gold" | "blue" | "silver";
}

/**
 * Badge component for displaying domain tags, ERP module labels, and QA status markers.
 */
export function Badge({ className, variant, indicator, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {indicator && (
        <span
          className={cn("size-1.5 rounded-full shrink-0", {
            "bg-[#C59B45]": indicator === "gold",
            "bg-[#1D68F2]": indicator === "blue",
            "bg-[#CAD0DB]": indicator === "silver",
          })}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
