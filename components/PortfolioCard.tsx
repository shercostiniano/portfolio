"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Portfolio } from "@/lib/sanity/types";

interface PortfolioCardProps {
  portfolio: Portfolio;
}

export function PortfolioCard({ portfolio }: PortfolioCardProps) {
  const imageUrl = portfolio.mainImage?.asset?.url || "/placeholder-project.jpg";

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <Link href={`/portfolio/${portfolio.slug.current}`}>
        <div className="relative overflow-hidden rounded-xl bg-navy/50 border border-slate/20 hover:border-teal/40 transition-colors">
          {/* Featured Badge */}
          {portfolio.featured && (
            <div className="absolute top-3 left-3 z-20">
              <span className="px-3 py-1 text-xs font-medium bg-teal text-navy rounded-full">
                Featured
              </span>
            </div>
          )}

          {/* Image Container */}
          <div className="relative aspect-video overflow-hidden">
            {portfolio.mainImage?.asset?.url ? (
              <Image
                src={imageUrl}
                alt={portfolio.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-teal/20 to-cyan/20 flex items-center justify-center">
                <span className="text-4xl font-heading font-bold text-white/20">
                  {portfolio.title.charAt(0)}
                </span>
              </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="text-white text-sm text-center line-clamp-3">
                {portfolio.description?.[0]?.children?.[0]?.text ||
                  "View project details"}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Category */}
            {portfolio.category && (
              <span className="text-xs text-teal font-medium uppercase tracking-wider">
                {portfolio.category.title}
              </span>
            )}

            {/* Title */}
            <h3 className="text-lg font-heading font-semibold text-white mt-1 mb-2 group-hover:text-teal transition-colors">
              {portfolio.title}
            </h3>

            {/* Technology Tags */}
            {portfolio.technologies && portfolio.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {portfolio.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech._id}
                    className="px-2 py-1 text-xs bg-slate/20 text-slate-light rounded"
                    style={tech.color ? { borderColor: tech.color } : undefined}
                  >
                    {tech.name}
                  </span>
                ))}
                {portfolio.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs text-slate-light">
                    +{portfolio.technologies.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
