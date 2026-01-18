import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-heading font-bold text-teal mb-4">404</h1>
        <h2 className="text-2xl font-heading font-semibold text-white mb-4">
          Project Not Found
        </h2>
        <p className="text-slate-light mb-8">
          The project you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center px-6 py-3 bg-teal text-navy font-medium rounded-lg hover:bg-teal/90 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Projects
        </Link>
      </div>
    </main>
  );
}
