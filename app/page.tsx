import { Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Contact } from "@/components/Contact";
import { getAllPortfolios, getAllCategories } from "@/lib/sanity/fetch";

// Loading component for PortfolioGrid
function PortfolioGridLoading() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-4">
          My <span className="text-teal">Projects</span>
        </h2>
        <p className="text-slate-light text-center max-w-2xl mx-auto mb-12">
          Loading projects...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-navy/50 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Server component wrapper for PortfolioGrid
async function PortfolioSection() {
  const [portfolios, categories] = await Promise.all([
    getAllPortfolios(),
    getAllCategories(),
  ]);

  return <PortfolioGrid portfolios={portfolios} categories={categories} />;
}

// Footer component
function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate text-sm">
          &copy; {new Date().getFullYear()} Sherwyne Costiniano. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Stats />
        <Suspense fallback={<PortfolioGridLoading />}>
          <PortfolioSection />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
