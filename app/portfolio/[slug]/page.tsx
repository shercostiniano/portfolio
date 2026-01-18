import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { getPortfolioBySlug, getAllPortfolios } from "@/lib/sanity/fetch";
import { PortfolioDetailClient } from "./PortfolioDetailClient";
import { PortfolioNavigation } from "@/components/PortfolioNavigation";

interface PortfolioPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const portfolios = await getAllPortfolios();
  return portfolios.map((portfolio) => ({
    slug: portfolio.slug.current,
  }));
}

export async function generateMetadata({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);

  if (!portfolio) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${portfolio.title} | Sherwyne Costiniano`,
    description:
      portfolio.description?.[0]?.children?.[0]?.text ||
      `${portfolio.title} - A project by Sherwyne Costiniano`,
  };
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const [portfolio, allPortfolios] = await Promise.all([
    getPortfolioBySlug(slug),
    getAllPortfolios(),
  ]);

  if (!portfolio) {
    notFound();
  }

  // Find previous and next portfolios
  const currentIndex = allPortfolios.findIndex(
    (p) => p.slug.current === slug
  );
  const previousPortfolio =
    currentIndex > 0
      ? allPortfolios[currentIndex - 1]
      : allPortfolios[allPortfolios.length - 1]; // Wrap to last
  const nextPortfolio =
    currentIndex < allPortfolios.length - 1
      ? allPortfolios[currentIndex + 1]
      : allPortfolios[0]; // Wrap to first

  const imageUrl = portfolio.mainImage?.asset?.url;

  return (
    <main className="min-h-screen bg-navy">
      {/* Hero Image with Parallax */}
      <PortfolioDetailClient imageUrl={imageUrl} title={portfolio.title} />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-10">
        <div className="bg-navy/90 backdrop-blur-sm rounded-2xl p-8 border border-slate/20">
          {/* Back Link */}
          <Link
            href="/#projects"
            className="inline-flex items-center text-teal hover:text-cyan transition-colors mb-6"
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

          {/* Category */}
          {portfolio.category && (
            <span className="text-xs text-teal font-medium uppercase tracking-wider">
              {portfolio.category.title}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mt-2 mb-6">
            {portfolio.title}
          </h1>

          {/* Technology Stack */}
          {portfolio.technologies && portfolio.technologies.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-medium text-slate-light mb-3">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {portfolio.technologies.map((tech) => (
                  <span
                    key={tech._id}
                    className="px-3 py-1 text-sm bg-teal/10 text-teal border border-teal/20 rounded-full"
                    style={
                      tech.color
                        ? { borderColor: tech.color, color: tech.color }
                        : undefined
                    }
                  >
                    {tech.icon && <span className="mr-1">{tech.icon}</span>}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          {portfolio.description && (
            <div className="prose prose-invert prose-teal max-w-none mb-8">
              <PortableText value={portfolio.description} />
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            {portfolio.liveUrl && (
              <a
                href={portfolio.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
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
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Live Demo
              </a>
            )}
            {portfolio.repoUrl && (
              <a
                href={portfolio.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-teal text-teal font-medium rounded-lg hover:bg-teal/10 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View Source
              </a>
            )}
          </div>

          {/* Gallery */}
          {portfolio.images && portfolio.images.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-heading font-semibold text-white mb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolio.images.map((image, index) => (
                  image.asset?.url && (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image.asset.url}
                        alt={image.alt || `${portfolio.title} screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Previous/Next Navigation */}
      <PortfolioNavigation
        previous={previousPortfolio !== portfolio ? previousPortfolio : null}
        next={nextPortfolio !== portfolio ? nextPortfolio : null}
      />
    </main>
  );
}
