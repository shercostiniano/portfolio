"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { PortfolioCard } from "./PortfolioCard";
import { FadeIn } from "./animations";
import { Portfolio, Category } from "@/lib/sanity/types";

interface PortfolioGridProps {
  portfolios: Portfolio[];
  categories: Category[];
}

export function PortfolioGrid({ portfolios, categories }: PortfolioGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const category = searchParams.get("category");
    setActiveCategory(category);
  }, [searchParams]);

  const filteredPortfolios = activeCategory
    ? portfolios.filter(
        (p) => p.category?.slug?.current === activeCategory
      )
    : portfolios;

  const handleCategoryChange = (categorySlug: string | null) => {
    if (categorySlug) {
      router.push(`?category=${categorySlug}`, { scroll: false });
    } else {
      router.push("/", { scroll: false });
    }
    setActiveCategory(categorySlug);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-4">
            My <span className="text-teal">Projects</span>
          </h2>
          <p className="text-slate-light text-center max-w-2xl mx-auto mb-8">
            A collection of my work in data science, automation, and web development
          </p>
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !activeCategory
                  ? "bg-teal text-navy"
                  : "bg-navy/50 text-slate-light hover:text-white border border-slate/20 hover:border-teal/40"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => handleCategoryChange(category.slug.current)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.slug.current
                    ? "bg-teal text-navy"
                    : "bg-navy/50 text-slate-light hover:text-white border border-slate/20 hover:border-teal/40"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Portfolio Grid */}
        {filteredPortfolios.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPortfolios.map((portfolio, index) => (
              <motion.div
                key={portfolio._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                layout
              >
                <PortfolioCard portfolio={portfolio} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-light">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
