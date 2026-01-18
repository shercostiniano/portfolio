# PRD: Data Analytics & Automation Portfolio

## Introduction

A modern, interactive portfolio website showcasing data analytics and automation projects. The site features engaging scroll-based animations (parallax + scroll-triggered), animated data visualizations, and delightful micro-interactions. Built with Next.js and Tailwind CSS, with content managed through a headless CMS for easy portfolio updates. The architecture prioritizes modularity, allowing new projects to be added without code changes.

## Goals

- Create a visually striking portfolio that demonstrates data analytics and automation expertise
- Implement smooth parallax scrolling combined with scroll-triggered animations
- Include animated data visualizations that bring projects to life
- Add micro-interactions (hover effects, transitions) for an engaging user experience
- Build a modular system where new portfolio items are added via CMS without touching code
- Ensure the site is performant, accessible, and SEO-friendly
- Deploy to a self-hosted VPS environment

## User Stories

### US-001: Initialize Next.js project with Tailwind CSS
**Description:** As a developer, I need a properly configured Next.js project with Tailwind CSS so I have a solid foundation to build upon.

**Acceptance Criteria:**
- [ ] Next.js 14+ project initialized with App Router
- [ ] Tailwind CSS configured with custom theme (colors, fonts, spacing)
- [ ] ESLint and Prettier configured
- [ ] Base layout component created with metadata
- [ ] Typecheck/lint passes

---

### US-002: Set up Sanity CMS integration
**Description:** As a content manager, I want to manage portfolio content through Sanity CMS so I can add/edit projects without deploying code.

**Acceptance Criteria:**
- [ ] Sanity CMS project initialized with studio
- [ ] Portfolio schema defined with fields: title, slug, description, category, technologies, images, liveUrl, repoUrl, featured, order
- [ ] CMS client configured in Next.js with typed queries
- [ ] Environment variables set up for CMS connection
- [ ] Sample portfolio item created in CMS
- [ ] Typecheck passes

---

### US-003: Create modular portfolio data structure
**Description:** As a developer, I want a well-defined data structure for portfolio items so new projects integrate seamlessly.

**Acceptance Criteria:**
- [ ] TypeScript interfaces defined for Portfolio, Category, Technology types
- [ ] Utility functions for fetching portfolios (all, by slug, by category, featured)
- [ ] Support for rich text descriptions
- [ ] Image optimization configured via Next.js Image
- [ ] Typecheck passes

---

### US-004: Build hero section with parallax effect
**Description:** As a visitor, I want an impressive hero section that immediately captures attention with parallax depth.

**Acceptance Criteria:**
- [ ] Full-viewport hero section with name, title, and tagline
- [ ] Multi-layer parallax effect (background, midground, foreground elements)
- [ ] Animated typing effect or text reveal for tagline
- [ ] Smooth scroll indicator/arrow
- [ ] Responsive design for mobile/tablet/desktop
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-005: Implement scroll-triggered animation system
**Description:** As a developer, I need a reusable animation system so elements animate consistently as they enter the viewport.

**Acceptance Criteria:**
- [ ] Framer Motion configured with scroll-triggered variants
- [ ] Reusable animation wrapper components (FadeIn, SlideIn, ScaleIn)
- [ ] Intersection Observer-based triggering
- [ ] Configurable delay, duration, and easing per element
- [ ] Respects user's reduced-motion preference
- [ ] Typecheck passes

---

### US-006: Create animated data visualization components
**Description:** As a visitor, I want to see animated charts/graphs that showcase data skills and real metrics in an engaging way.

**Acceptance Criteria:**
- [ ] GitHub stats visualization (repos, followers, contributions)
- [ ] HuggingFace model downloads chart (bar chart with model names)
- [ ] Animated counter components (count up on scroll)
- [ ] Skill progress bars with percentage animation
- [ ] API integration to fetch live GitHub stats via GitHub API
- [ ] API integration to fetch HuggingFace model download counts
- [ ] Fallback to cached/static data if API fails
- [ ] Charts animate from 0 to final value over 1-2 seconds
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-007: Build About section with micro-interactions
**Description:** As a visitor, I want to learn about the portfolio owner through an engaging About section.

**Acceptance Criteria:**
- [ ] Photo with subtle hover effect (scale, shadow, or tilt)
- [ ] Bio text with scroll-triggered reveal
- [ ] Skills grid with animated progress indicators
- [ ] Technology icons with tooltip on hover
- [ ] Smooth transitions between states
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-008: Create portfolio grid/showcase section
**Description:** As a visitor, I want to browse portfolio projects in an visually appealing grid layout.

**Acceptance Criteria:**
- [ ] Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- [ ] Portfolio cards with image, title, category, tech tags
- [ ] Hover effects: image zoom, overlay with quick info, subtle lift
- [ ] Filter by category with animated transitions
- [ ] "Featured" badge for highlighted projects
- [ ] Cards animate in on scroll (staggered)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-009: Build individual portfolio detail page
**Description:** As a visitor, I want to view detailed information about a project when I click on it.

**Acceptance Criteria:**
- [ ] Dynamic route `/portfolio/[slug]`
- [ ] Hero image with parallax effect
- [ ] Project title, description (rich text), and metadata
- [ ] Technology stack display with icons
- [ ] Image gallery with lightbox
- [ ] Links to live demo and source code
- [ ] "Next/Previous project" navigation
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-010: Create contact section with email functionality
**Description:** As a visitor, I want to easily contact the portfolio owner via email.

**Acceptance Criteria:**
- [ ] Contact form with name, email, message fields
- [ ] Form validation with animated error states
- [ ] Submit button with loading state animation
- [ ] Social links with hover micro-interactions
- [ ] Success/error toast notifications
- [ ] Resend API integration for sending emails
- [ ] Server action or API route to handle form submission securely
- [ ] Rate limiting to prevent spam
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-011: Implement navigation with scroll effects
**Description:** As a visitor, I want smooth navigation that responds to scroll position.

**Acceptance Criteria:**
- [ ] Fixed header that changes style on scroll (shrink, add background)
- [ ] Active section indicator in nav
- [ ] Smooth scroll to sections on nav click
- [ ] Mobile hamburger menu with animated open/close
- [ ] Logo/name links to top
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-012: Add cursor and hover micro-interactions
**Description:** As a visitor, I want delightful micro-interactions that make the site feel polished.

**Acceptance Criteria:**
- [ ] Custom cursor effect on desktop (optional, can be toggled)
- [ ] Button hover states with scale/color transitions
- [ ] Link underline animations
- [ ] Card tilt effect on hover (subtle 3D)
- [ ] Focus states for accessibility
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-013: Optimize performance and SEO
**Description:** As a site owner, I want my portfolio to load fast and rank well in search engines.

**Acceptance Criteria:**
- [ ] Next.js Image optimization for all images
- [ ] Lazy loading for below-fold content
- [ ] Metadata configured (title, description, OG tags)
- [ ] Sitemap generated
- [ ] Lighthouse score 90+ on Performance, Accessibility, SEO
- [ ] Typecheck passes

---

### US-014: Configure deployment for self-hosted VPS
**Description:** As a developer, I want to deploy the portfolio to my VPS with a reliable setup.

**Acceptance Criteria:**
- [ ] Dockerfile created for containerized deployment
- [ ] docker-compose.yml with Next.js and optional reverse proxy
- [ ] Environment variables documented
- [ ] Build and start scripts configured
- [ ] README with deployment instructions
- [ ] Successful deployment to VPS
- [ ] Typecheck passes

---

## Phase 2: Future Enhancements

### US-015: Configure custom domain with SSL (Phase 2)
**Description:** As a site owner, I want my portfolio accessible via a custom domain with HTTPS.

**Acceptance Criteria:**
- [ ] Nginx reverse proxy configured for custom domain
- [ ] Let's Encrypt SSL certificate via Certbot
- [ ] Auto-renewal configured for SSL certificate
- [ ] HTTP to HTTPS redirect
- [ ] DNS configuration documented
- [ ] Domain accessible and secure

---

## Functional Requirements

- **FR-1:** The system must render portfolio items dynamically from CMS data
- **FR-2:** New portfolio items added in CMS must appear on site after rebuild/revalidation
- **FR-3:** Parallax effects must have at least 2 layers moving at different scroll speeds
- **FR-4:** Scroll-triggered animations must fire when elements are 20% visible in viewport
- **FR-5:** Data visualizations must animate from 0 to final value over 1-2 seconds
- **FR-6:** All interactive elements must have visible focus states for keyboard navigation
- **FR-7:** The site must be fully responsive from 320px to 2560px viewport widths
- **FR-8:** Portfolio filter must update URL params for shareable filtered views
- **FR-9:** Contact form must validate email format and required fields before submission
- **FR-10:** Contact form submissions must send email via Resend API to configured address
- **FR-11:** Navigation must highlight current section based on scroll position
- **FR-12:** GitHub stats must be fetched via GitHub API and cached for 1 hour
- **FR-13:** HuggingFace model downloads must be fetched via HuggingFace API and cached for 1 hour
- **FR-14:** Data visualizations must gracefully fallback to static values if API requests fail

## Non-Goals

- No user authentication or login system
- No e-commerce or payment functionality
- No blog or article system (could be added later)
- No real-time features or WebSocket connections
- No multi-language support in initial version
- No dark/light theme toggle in initial version (can use system preference)

## Design Considerations

- **Color Palette (Suggested):**
  - Primary: Deep navy `#0f172a` (backgrounds, text)
  - Secondary: Electric teal `#14b8a6` (accents, CTAs)
  - Accent: Vibrant cyan `#06b6d4` (data viz, highlights)
  - Supporting: Slate grays `#64748b`, `#94a3b8` (secondary text)
  - Success: Emerald `#10b981` | Error: Rose `#f43f5e`
  - Background gradients: Navy to slate transitions
- **Typography:**
  - Headings: Plus Jakarta Sans (bold, modern)
  - Body: Inter (clean, readable)
- **Spacing:** Generous whitespace, sections clearly delineated
- **Animation Timing:** Smooth easing (ease-out for entrances), consistent 300-500ms durations
- **Data Viz Colors:** Teal/cyan gradient palette, accessible for colorblind users

## Technical Considerations

- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS with custom configuration
- **Animations:** Framer Motion for scroll and micro-interactions
- **Data Viz:** Recharts for charts, custom animated counters
- **APIs for Live Data:**
  - GitHub REST API (user stats, repo data)
  - HuggingFace API (model download counts)
- **CMS:** Sanity CMS with embedded studio at `/studio`
- **Forms:** React Hook Form with Zod validation
- **Email:** Resend API for contact form submissions
- **Deployment:** Docker container on VPS with Nginx reverse proxy
- **ISR/SSG:** Use Incremental Static Regeneration for portfolio pages
- **Caching:** Cache API responses with revalidation (1 hour for stats)

## Success Metrics

- Portfolio loads in under 3 seconds on 3G connection
- Lighthouse scores 90+ across all categories
- Adding a new portfolio item takes under 10 minutes via CMS
- Animations run at 60fps on modern devices
- Site is fully navigable via keyboard
- Zero layout shift during page load (CLS < 0.1)

## Decisions Made

- **CMS:** Sanity CMS
- **Branding:** New design with suggested teal/navy color palette
- **Contact Form:** Sends emails via Resend API
- **Social Links:** GitHub, LinkedIn, Twitter/X, HuggingFace, Medium
- **Custom Domain:** Deferred to Phase 2 (post-launch setup)
- **Data Visualizations:** GitHub stats + HuggingFace model downloads

---

## Initial Content (From Digital Footprint)

### Profile Information
- **Name:** Sherwyne Costiniano
- **Title:** Data Scientist & Automation Engineer
- **Location:** Philippines
- **Education:** Data Science, University of Makati
- **Tagline:** "Founder & Builder — Web3 Analytics, NLP Research, and Automation"

### Bio Summary
Data science graduate specializing in Natural Language Processing, Speech Recognition, and Virtual Reality localized to the Filipino language. Focused on Web3 on-chain/off-chain analytics and automation. Published researcher in NLP for low-resource languages.

### Core Expertise
| Skill | Category |
|-------|----------|
| Python | Programming |
| Natural Language Processing | AI/ML |
| Named Entity Recognition | AI/ML |
| Transformer Models (BERT, RoBERTa, ELECTRA) | AI/ML |
| Speech Recognition | AI/ML |
| Data Analytics | Analytics |
| Web3/Blockchain Analytics | Analytics |
| Automation & Bot Development | Automation |
| Flask/API Development | Backend |

### Publications
1. **"Custom Coarse Grained Named Entity Recognition for Filipino Storytelling Data Using Uncased Transformer Models"**
   - DOI: 10.2139/ssrn.4310555
   - Focus: NER for Filipino storytelling using uncased transformer models

2. **"TF-NERD: Tagalog Fine-grained Named Entity Recognition Dataset"**
   - Conference: NLPIR 2023 (7th International Conference on Natural Language Processing and Information Retrieval)
   - Co-authors: Rose Ann Mae Santos, Julius Simon Mendoza, Allen Jay Gale
   - [ACM Digital Library](https://dl.acm.org/doi/10.1145/3639233.3639341)

### Featured Projects (For Portfolio)

#### 1. Dyslexic Reading Assistant Tool
- **Category:** Accessibility / AI
- **Description:** Research implementation for Thesis 2 — an assistive reading tool for dyslexic users
- **Technologies:** Python, NLP, Speech Recognition
- **Repo:** github.com/shercostiniano/dyslexic-reading-assistant-tool

#### 2. Filipino Storytelling NER
- **Category:** NLP Research
- **Description:** Custom Named Entity Recognition models trained on Filipino storytelling data
- **Technologies:** Python, Transformers, BERT, Jupyter
- **Repo:** github.com/shercostiniano/filipino-stoytelling-ner
- **Stars:** 2

#### 3. Lotto Aggregator API
- **Category:** Data Aggregation / Automation
- **Description:** Flask API that aggregates global lottery data from multiple sources
- **Technologies:** Python, Flask, REST API
- **Repo:** github.com/shercostiniano/lotto-aggregator
- **Stars:** 1

#### 4. FastQuant (Fork)
- **Category:** Financial Analytics
- **Description:** Backtesting trading strategies with minimal code
- **Technologies:** Python, Jupyter, Data Analysis
- **Repo:** github.com/shercostiniano/fastquant
- **Stars:** 3

### HuggingFace Models
| Model | Architecture | Task |
|-------|-------------|------|
| roberta-tagalog-large-ner-v1 | RoBERTa | Token Classification / NER |
| electra-tagalog-base-uncased-discriminator-ner-v1 | ELECTRA | Token Classification / NER |
| bert-tagalog-base-uncased-WWM-ner-v1 | BERT (WWM) | Token Classification / NER |
| bert-tagalog-base-uncased-ner-v1 | BERT | Token Classification / NER |

### HuggingFace Datasets
1. **autotrain-data-custom-tagalog-story-ner** — Training data for Tagalog NER
2. **storytelling_books_filipino** — Filipino storytelling corpus

### Social Links
| Platform | URL |
|----------|-----|
| GitHub | github.com/shercostiniano |
| LinkedIn | linkedin.com/in/shercostiniano |
| Twitter/X | twitter.com/shercostiniano |
| HuggingFace | huggingface.co/scostiniano |
| Medium | shercostiniano.medium.com |

### Data Visualization Content

#### GitHub Stats
| Metric | Value |
|--------|-------|
| Repositories | 40 |
| Followers | 10 |
| Following | 16 |
| Achievements | Pair Extraordinaire, YOLO, Pull Shark (×2) |

#### HuggingFace Model Downloads
| Model | Downloads |
|-------|-----------|
| roberta-tagalog-large-ner-v1 | 4 |
| electra-tagalog-base-uncased-discriminator-ner-v1 | 6 |
| bert-tagalog-base-uncased-WWM-ner-v1 | 1 |
| bert-tagalog-base-uncased-ner-v1 | 2 |
| **Total Downloads** | **13** |

#### Visualization Components
1. **GitHub Overview Card** — Animated counters for repos, followers, stars
2. **Model Downloads Bar Chart** — Horizontal bars comparing model popularity
3. **Skills Radar/Progress** — Proficiency levels in key technologies
4. **Contribution Graph** — GitHub-style activity heatmap (optional)
