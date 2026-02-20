import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-xl overflow-hidden",
        hoverEffect && "hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:bg-white/70",
        className
      )}
    >
      {children}
    </div>
  );
};
