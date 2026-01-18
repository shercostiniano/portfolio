"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface ModelData {
  name: string;
  downloads: number;
}

const FALLBACK_DATA: ModelData[] = [
  { name: "sentiment-analyzer", downloads: 1250 },
  { name: "text-classifier", downloads: 890 },
  { name: "ner-model", downloads: 650 },
  { name: "summarizer", downloads: 420 },
];

export function HuggingFaceChart() {
  const [data, setData] = useState<ModelData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/huggingface");
        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();
        setData(json.slice(0, 5)); // Top 5 models
      } catch {
        setError(true);
        setData(FALLBACK_DATA);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Trigger animation when in view
  useEffect(() => {
    if (isInView && !isAnimated && data.length > 0) {
      setIsAnimated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, data.length]);

  const chartData = isAnimated ? data : data.map((d) => ({ ...d, downloads: 0 }));

  return (
    <div
      ref={ref}
      className="bg-navy/50 rounded-2xl p-6 border border-cyan/20 hover:border-cyan/40 transition-colors"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <h3 className="text-xl font-heading font-semibold text-white">
          HuggingFace Models
        </h3>
        {isLoading && (
          <div className="ml-auto w-4 h-4 border-2 border-cyan/30 border-t-cyan rounded-full animate-spin" />
        )}
      </div>

      {/* Chart */}
      {isLoading ? (
        <div className="h-48 flex items-center justify-center">
          <p className="text-slate-light">Loading models...</p>
        </div>
      ) : (
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
            >
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                width={100}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Bar
                dataKey="downloads"
                radius={[0, 4, 4, 0]}
                animationDuration={1000}
                animationBegin={0}
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`url(#gradient-${index})`}
                  />
                ))}
              </Bar>
              <defs>
                {chartData.map((_, index) => (
                  <linearGradient
                    key={`gradient-${index}`}
                    id={`gradient-${index}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                ))}
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Error indicator (subtle) */}
      {error && (
        <p className="text-xs text-slate mt-4 text-center">
          Showing sample data
        </p>
      )}
    </div>
  );
}
