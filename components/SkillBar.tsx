"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

export function SkillBar({
  name,
  percentage,
  color = "bg-gradient-to-r from-teal to-cyan",
}: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="w-full">
      {/* Label row */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm text-slate-light">{percentage}%</span>
      </div>

      {/* Progress bar background */}
      <div className="h-2 bg-navy/50 rounded-full overflow-hidden border border-slate/20">
        {/* Progress bar fill */}
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 1,
                  delay: 0.2,
                  ease: "easeOut",
                }
          }
        />
      </div>
    </div>
  );
}
