// NOTE: High-contrast, accessible Textarea primitive for client scoping and demo inquiries.
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Optional focus ring accent */
  accent?: "gold" | "blue";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, accent = "gold", ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-[10px] bg-[#111318] px-4 py-3 text-sm text-[#F8FAFC] placeholder:text-[#545F72] border border-[#232935] shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
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
Textarea.displayName = "Textarea";

export { Textarea };
