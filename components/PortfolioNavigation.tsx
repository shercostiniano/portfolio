"use client";

import Link from "next/link";
import Image from "next/image";
import { Portfolio } from "@/lib/sanity/types";

interface PortfolioNavigationProps {
  previous: Portfolio | null;
  next: Portfolio | null;
}

export function PortfolioNavigation({
  previous,
  next,
}: PortfolioNavigationProps) {
  if (!previous && !next) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Previous */}
        {previous ? (
          <Link
            href={`/portfolio/${previous.slug.current}`}
            className="group flex items-center gap-4 bg-navy/50 rounded-xl p-4 border border-slate/20 hover:border-teal/40 transition-colors"
          >
            <svg
              className="w-6 h-6 text-slate-light group-hover:text-teal transition-colors flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <div className="flex-1 min-w-0">
              <span className="text-xs text-slate-light">Previous</span>
              <p className="text-white font-medium truncate group-hover:text-teal transition-colors">
                {previous.title}
              </p>
            </div>
            {previous.mainImage?.asset?.url && (
              <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={previous.mainImage.asset.url}
                  alt={previous.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </Link>
        ) : (
          <div />
        )}

        {/* Next */}
        {next ? (
          <Link
            href={`/portfolio/${next.slug.current}`}
            className="group flex items-center gap-4 bg-navy/50 rounded-xl p-4 border border-slate/20 hover:border-teal/40 transition-colors md:flex-row-reverse md:text-right"
          >
            <svg
              className="w-6 h-6 text-slate-light group-hover:text-teal transition-colors flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <div className="flex-1 min-w-0">
              <span className="text-xs text-slate-light">Next</span>
              <p className="text-white font-medium truncate group-hover:text-teal transition-colors">
                {next.title}
              </p>
            </div>
            {next.mainImage?.asset?.url && (
              <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={next.mainImage.asset.url}
                  alt={next.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
