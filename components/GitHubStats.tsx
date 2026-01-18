"use client";

import { useEffect, useState } from "react";
import { AnimatedCounter } from "./AnimatedCounter";

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
}

const FALLBACK_DATA: GitHubData = {
  public_repos: 40,
  followers: 10,
  following: 16,
};

export function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();
        setData(json);
      } catch {
        setError(true);
        setData(FALLBACK_DATA);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const stats = data || FALLBACK_DATA;

  return (
    <div className="bg-navy/50 rounded-2xl p-6 border border-teal/20 hover:border-teal/40 transition-colors">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <h3 className="text-xl font-heading font-semibold text-white">
          GitHub Stats
        </h3>
        {isLoading && (
          <div className="ml-auto w-4 h-4 border-2 border-teal/30 border-t-teal rounded-full animate-spin" />
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-teal mb-1">
            {isLoading ? (
              <span className="text-slate-light">--</span>
            ) : (
              <AnimatedCounter value={stats.public_repos} />
            )}
          </div>
          <div className="text-sm text-slate-light">Repos</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-teal mb-1">
            {isLoading ? (
              <span className="text-slate-light">--</span>
            ) : (
              <AnimatedCounter value={stats.followers} />
            )}
          </div>
          <div className="text-sm text-slate-light">Followers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-teal mb-1">
            {isLoading ? (
              <span className="text-slate-light">--</span>
            ) : (
              <AnimatedCounter value={stats.following} />
            )}
          </div>
          <div className="text-sm text-slate-light">Following</div>
        </div>
      </div>

      {/* Error indicator (subtle) */}
      {error && (
        <p className="text-xs text-slate mt-4 text-center">
          Showing cached data
        </p>
      )}
    </div>
  );
}
