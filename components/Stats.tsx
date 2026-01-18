"use client";

import { FadeIn, SlideIn } from "./animations";
import { GitHubStats } from "./GitHubStats";
import { HuggingFaceChart } from "./HuggingFaceChart";

export function Stats() {
  return (
    <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-4">
            By the <span className="text-teal">Numbers</span>
          </h2>
          <p className="text-slate-light text-center max-w-2xl mx-auto mb-12">
            A glimpse into my work across different platforms
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <SlideIn direction="left" delay={0.1}>
            <GitHubStats />
          </SlideIn>
          <SlideIn direction="right" delay={0.2}>
            <HuggingFaceChart />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
