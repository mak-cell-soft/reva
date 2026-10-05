// NOTE: High-contrast, accessible Input primitive adhering to RÉVA Consulting dark theme.
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional focus ring accent */
  accent?: "gold" | "blue";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, accent = "gold", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-[10px] bg-[#111318] px-4 py-2 text-sm text-[#F8FAFC] placeholder:text-[#545F72] border border-[#232935] shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
          {
            "focus-visible:outline-none focus-visible:border-[#C59B45] focus-visible:ring-2 focus-visible:ring-[#C59B45]/20":
              accent === "gold",
            "focus-visible:outline-none focus-visible:border-[#1D68F2] focus-visible:ring-2 focus-visible:ring-[#1D68F2]/20":
              accent === "blue",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
