"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface PortfolioDetailClientProps {
  imageUrl?: string;
  title: string;
}

export function PortfolioDetailClient({
  imageUrl,
  title,
}: PortfolioDetailClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[60vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-teal/20 to-cyan/20 flex items-center justify-center">
            <span className="text-8xl font-heading font-bold text-white/10">
              {title.charAt(0)}
            </span>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-navy" />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity }}
      >
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white text-center px-4">
          {title}
        </h1>
      </motion.div>
    </div>
  );
}
