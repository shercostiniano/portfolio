"use client";

import { FadeIn, SlideIn } from "./animations";
import { SkillBar } from "./SkillBar";

const skills = [
  { name: "Python", percentage: 90 },
  { name: "NLP", percentage: 85 },
  { name: "Data Analytics", percentage: 85 },
  { name: "Automation", percentage: 80 },
  { name: "Flask/API", percentage: 75 },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
            About <span className="text-teal">Me</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <SlideIn direction="left">
            <div className="relative group">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal/20 to-cyan/20 overflow-hidden">
                {/* Profile photo placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-navy/50 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-teal/20 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal to-cyan mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl font-heading font-bold text-navy">
                        SC
                      </span>
                    </div>
                    <p className="text-slate-light text-sm">Profile Photo</p>
                  </div>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-teal to-cyan rounded-2xl -z-10 opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
          </SlideIn>

          {/* Bio and Skills */}
          <div>
            <SlideIn direction="right" delay={0.1}>
              <div className="space-y-4 mb-8">
                <p className="text-slate-light leading-relaxed">
                  I&apos;m a passionate Data Scientist and Automation Engineer
                  based in the Philippines, specializing in transforming complex
                  data into actionable insights and building intelligent
                  automation solutions.
                </p>
                <p className="text-slate-light leading-relaxed">
                  With a strong foundation in Python and machine learning, I
                  focus on Natural Language Processing, data analytics, and
                  creating efficient automated workflows that help businesses
                  scale their operations.
                </p>
                <p className="text-slate-light leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new AI
                  research papers, contributing to open-source projects, or
                  sharing my knowledge through technical writing.
                </p>
              </div>
            </SlideIn>

            {/* Skills */}
            <SlideIn direction="right" delay={0.2}>
              <h3 className="text-xl font-heading font-semibold text-white mb-6">
                Core Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <FadeIn key={skill.name} delay={0.3 + index * 0.1}>
                    <SkillBar
                      name={skill.name}
                      percentage={skill.percentage}
                    />
                  </FadeIn>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
