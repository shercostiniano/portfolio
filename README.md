# Portfolio - Sherwyne Costiniano

A modern, interactive portfolio website built with Next.js 14, featuring parallax scrolling, animated data visualizations, and Sanity CMS integration.

## Features

- **Parallax Hero Section** - Multi-layer parallax effect with typing animation
- **Animated Components** - Scroll-triggered animations using Framer Motion
- **Live Data Visualizations** - GitHub stats and HuggingFace model downloads
- **Sanity CMS** - Content management for portfolio projects
- **Contact Form** - With Resend email integration and rate limiting
- **Responsive Design** - Mobile-first with hamburger menu
- **SEO Optimized** - Open Graph, Twitter cards, sitemap, robots.txt
- **Docker Ready** - Multi-stage Dockerfile for production deployment

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **CMS:** Sanity
- **Charts:** Recharts
- **Forms:** React Hook Form + Zod
- **Email:** Resend
- **Deployment:** Docker

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account (for CMS)
- Resend account (for contact form)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shercostiniano/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Fill in your environment variables in `.env.local`:
```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Site URL (for SEO and sitemap)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# GitHub API (optional, for higher rate limits)
GITHUB_TOKEN=your_github_token

# Resend Email Configuration
RESEND_API_KEY=re_your_api_key
CONTACT_EMAIL=your_email@example.com
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Sanity Studio

Access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio) to manage portfolio content.

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── contact/      # Contact form API
│   │   ├── github/       # GitHub stats API
│   │   └── huggingface/  # HuggingFace stats API
│   ├── portfolio/[slug]/ # Portfolio detail pages
│   ├── studio/           # Sanity Studio
│   ├── layout.tsx        # Root layout with SEO
│   ├── page.tsx          # Home page
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── animations/       # FadeIn, SlideIn, ScaleIn
│   ├── About.tsx
│   ├── AnimatedCounter.tsx
│   ├── Contact.tsx
│   ├── GitHubStats.tsx
│   ├── Hero.tsx
│   ├── HuggingFaceChart.tsx
│   ├── Navigation.tsx
│   ├── PortfolioCard.tsx
│   ├── PortfolioGrid.tsx
│   ├── PortfolioNavigation.tsx
│   ├── SkillBar.tsx
│   └── Stats.tsx
├── lib/
│   └── sanity/           # Sanity client, queries, types
├── sanity/
│   └── schemas/          # Sanity document schemas
├── Dockerfile
├── docker-compose.yml
└── tailwind.config.ts
```

## Deployment

### Docker (Recommended)

1. Build and run with Docker Compose:
```bash
docker-compose up -d
```

2. The site will be available at `http://localhost:3000`

### Manual Build

```bash
npm run build
npm start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
```ts
colors: {
  navy: "#0f172a",
  teal: "#14b8a6",
  cyan: "#06b6d4",
  slate: "#64748b",
}
```

### Fonts

The project uses:
- **Inter** - Body text
- **Plus Jakarta Sans** - Headings

Configure in `app/layout.tsx`.

### Skills

Edit the skills array in `components/About.tsx`:
```ts
const skills = [
  { name: "Python", percentage: 90 },
  { name: "NLP", percentage: 85 },
  // ...
];
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/github` | GET | Fetch GitHub user stats |
| `/api/huggingface` | GET | Fetch HuggingFace model data |
| `/api/contact` | POST | Submit contact form |

## License

MIT License - feel free to use this project as a template for your own portfolio.

## Author

**Sherwyne Costiniano**
- GitHub: [@shercostiniano](https://github.com/shercostiniano)
- LinkedIn: [shercostiniano](https://linkedin.com/in/shercostiniano)
- HuggingFace: [scostiniano](https://huggingface.co/scostiniano)
