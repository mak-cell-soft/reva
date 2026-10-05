// NOTE: Centralized Brand Logo component for RÉVA Consulting.
// Supports both a high-fidelity vector representation and optimized image rendering.
import * as React from "react";
import Image from "next/image";
import { brandConfig } from "@/lib/brand.config";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  /** Sizing presets */
  size?: "sm" | "md" | "lg";
  /** Optional layout orientation */
  layout?: "horizontal" | "stacked" | "mark-only";
  /** Whether to render the high-res authentic 3D emblem */
  variant?: "vector" | "emblem";
  /** Additional CSS classes */
  className?: string;
  /** Whether to show the corporate signature */
  showTagline?: boolean;
}

/**
 * BrandLogo renders RÉVA Consulting's visual identity.
 * - Warm Champagne Gold: Expertise & Software Publishing
 * - Crisp Metallic Silver: Precision Engineering & Quality
 * - Electric Blue Accent: Digital Innovation & Systems
 */
export function BrandLogo({
  size = "md",
  layout = "horizontal",
  variant = "vector",
  className,
  showTagline = false,
}: BrandLogoProps) {
  // Sizing maps
  const emblemSizes = {
    sm: { width: 36, height: 36 },
    md: { width: 48, height: 48 },
    lg: { width: 72, height: 72 },
  };

  if (variant === "emblem") {
    return (
      <div className={cn("inline-flex items-center gap-3 select-none", className)}>
        <div className="relative rounded-[10px] overflow-hidden border border-[#C59B45]/40 shadow-[0_2px_12px_rgba(0,0,0,0.8)] shrink-0">
          <Image
            src="/images/logos/logo1.jpeg"
            alt={brandConfig.name}
            width={emblemSizes[size].width}
            height={emblemSizes[size].height}
            className="object-cover"
            priority
          />
        </div>
        {layout !== "mark-only" && (
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-[#F8FAFC] text-base sm:text-lg">
              R<span className="text-[#C59B45]">É</span>VA{" "}
              <span className="font-light text-[#CAD0DB]">Consulting</span>
            </span>
            {showTagline && (
              <span className="text-[10px] tracking-wider uppercase text-[#C59B45] font-medium">
                {brandConfig.tagline}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  // Vector lockup
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 select-none",
        {
          "flex-col items-start": layout === "stacked",
        },
        className
      )}
    >
      {/* Precision Vector Mark */}
      <svg
        className={cn("shrink-0", {
          "h-7 w-7": size === "sm",
          "h-9 w-9": size === "md",
          "h-12 w-12": size === "lg",
        })}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={brandConfig.name}
      >
        {/* Dark container badge with soft metallic gold border */}
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="10"
          fill="#111318"
          stroke="#C59B45"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />

        {/* Digital Pixel Matrix (Gold & Electric Blue) */}
        <rect x="7" y="14" width="3" height="3" rx="0.5" fill="#C59B45" fillOpacity="0.8" />
        <rect x="12" y="14" width="3" height="3" rx="0.5" fill="#1D68F2" />
        <rect x="7" y="19" width="3" height="3" rx="0.5" fill="#C59B45" fillOpacity="0.6" />
        <rect x="12" y="19" width="3" height="3" rx="0.5" fill="#1D68F2" />
        <rect x="12" y="24" width="3" height="3" rx="0.5" fill="#1D68F2" />
        <rect x="17" y="19" width="3" height="3" rx="0.5" fill="#1D68F2" />
        <rect x="17" y="24" width="3" height="3" rx="0.5" fill="#C59B45" fillOpacity="0.8" />

        {/* Sweeping Gold "R" & Arc */}
        <path
          d="M17 12H27C30.5 12 32.5 14 32.5 17C32.5 19.5 31 21.2 28.5 21.8C31 25 35 29 42 29"
          stroke="#C59B45"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12V24"
          stroke="#C59B45"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Electric Blue Neon Accent Curve */}
        <path
          d="M18 31C24 31 31 29 36 26"
          stroke="#1D68F2"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* "é" in Metallic Silver */}
        <circle cx="26" cy="22" r="3" stroke="#CAD0DB" strokeWidth="1.5" />
        <path d="M23 22H29" stroke="#CAD0DB" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M25 17L27 15" stroke="#CAD0DB" strokeWidth="1.5" strokeLinecap="round" />

        {/* "VA" in Gold & Silver */}
        <path
          d="M31 16L34.5 25L38 16"
          stroke="#C59B45"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37 25L40.5 16L44 25"
          stroke="#CAD0DB"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M38.5 22H42.5" stroke="#CAD0DB" strokeWidth="1.4" strokeLinecap="round" />

        {/* Subtitle baseline */}
        <line x1="12" y1="38" x2="16" y2="38" stroke="#C59B45" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="32" y1="38" x2="36" y2="38" stroke="#C59B45" strokeWidth="1" strokeOpacity="0.6" />
      </svg>

      {layout !== "mark-only" && (
        <div className="flex flex-col">
          <span className="font-display font-bold tracking-tight text-[#F8FAFC] text-base sm:text-lg leading-tight">
            R<span className="text-[#C59B45]">É</span>VA{" "}
            <span className="font-light text-[#CAD0DB]">Consulting</span>
          </span>
          {showTagline && (
            <span className="text-[10px] tracking-wider uppercase text-[#C59B45] font-medium mt-0.5">
              {brandConfig.tagline}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
