# Irena — Personal Portfolio

A premium, Apple-inspired personal website built with **Next.js**, **TypeScript**, and **Tailwind CSS**, statically exported and deployed to **GitHub Pages**.

It showcases AI projects, technical skills, research interests, and thought leadership — with a clean, fast, professional feel.

---

## ✨ Features

- ⚡ **Static export** — Lightning-fast, $0 hosting on GitHub Pages
- 🎨 **Apple-inspired design** — Soft Pink (#F9D6E5) + Teal (#4ECDC4) palette, generous whitespace, smooth motion
- 📱 **Responsive** — Mobile-first, looks great on every screen
- ♿ **Accessible** — Semantic HTML, focus styles, reduced-motion support
- 🔍 **SEO-ready** — Metadata, Open Graph, Twitter cards, sitemap, robots.txt
- 📝 **Markdown content** — Add projects and posts without touching code
- 🧩 **Reusable components** — Hero, ProjectCard, BlogCard, Timeline, Tags, VideoShowcase, ScreenshotGallery
- ✨ **Tasteful animations** — Fade-in on scroll, subtle hover effects, respects `prefers-reduced-motion`
- 🤖 **Auto-deploy** — GitHub Actions workflow ships every push to `main`

---

## 🚀 Quick start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

```bash
# Build for production (outputs static site to /out)
npm run build
```

> **Requires Node.js 18.18+ or 20+** (Next.js 14 requirement).

---

## 📁 Project structure

```
irena-portfolio/
├── .github/
│   └── workflows/deploy.yml      # GitHub Actions → GitHub Pages
├── content/
│   ├── projects/                 # Markdown: one .md file per project
│   └── blog/                     # Markdown: one .md file per article
├── public/
│   ├── images/                   # Hero, about, projects, blog, OG images
│   └── videos/                   # Self-hosted demo videos
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── layout.tsx            # Root layout + SEO metadata
│   │   ├── page.tsx              # Home
│   │   ├── about/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── projects/[slug]/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts            # Dynamic sitemap.xml
│   │   ├── robots.ts             # Dynamic robots.txt
│   │   └── globals.css
│   ├── components/               # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── BlogCard.tsx
│   │   ├── BlogFilter.tsx        # Search + category filter
│   │   ├── GitHubCard.tsx
│   │   ├── Timeline.tsx
│   │   ├── Tag.tsx               # Tag + StatusBadge
│   │   ├── VideoShowcase.tsx
│   │   ├── ScreenshotGallery.tsx
│   │   └── FadeIn.tsx            # Scroll-reveal wrapper
│   ├── data/
│   │   └── site.ts               # 👈 EDIT ME for personal info
│   └── lib/
│       ├── content.ts            # Markdown loader (projects/blog)
│       ├── markdown.ts           # md → html
│       ├── types.ts
│       └── utils.ts              # asset(), formatDate()
├── next.config.js                # Static export + basePath
├── tailwind.config.ts            # Design tokens
├── tsconfig.json
└── package.json
```

---

## 🎨 Personalizing your site

### 1. Update your personal info

All site-wide content lives in **`src/data/site.ts`**. Open it and update:

- `name`, `title`, `description` — Your name and tagline
- `url` — Your final GitHub Pages URL
- `social.github` / `social.linkedin` / `social.email` — Your links
- `hero.headline` / `hero.subheadline` — The text on your home page
- `about.intro` / `about.aiInterests` / `about.skills` — About page content
- `featuredRepos` — Repositories shown on the home page GitHub section
- `contact.heading` / `contact.body` — Contact page text

No code changes required.

### 2. Add a project

Create a new Markdown file in **`content/projects/`**:

```markdown
---
title: "My Cool Project"
slug: "my-cool-project"
summary: "One sentence pitch."
status: "Live"               # or: In Development | Prototype | Research | Archived
featured: false              # set true to feature on the homepage
order: 4                     # lower = appears earlier
date: "2025-03-01"
tech:
  - "TypeScript"
  - "Next.js"
github: "https://github.com/your-username/my-cool-project"
demo: "https://example.com"
cover: "/images/projects/my-cool-project/cover.jpg"
screenshots:
  - "/images/projects/my-cool-project/shot-1.jpg"
video: "/videos/my-cool-project.mp4"   # optional
---

## Markdown content goes here

Write your case study in regular markdown. Tables, code blocks, lists,
and images all work.
```

### 3. Publish a blog post

Create a new Markdown file in **`content/blog/`**:

```markdown
---
title: "An interesting thought"
slug: "an-interesting-thought"
excerpt: "One-paragraph teaser shown on cards and metadata."
category: "Artificial Intelligence"   # must match a category in site.ts
tags:
  - "llm"
  - "evals"
date: "2025-03-15"
featured: false
author: "Irena"
cover: "/images/blog/an-interesting-thought/cover.jpg"
---

Your article text here. Reading time is calculated automatically.
```

### 4. Add screenshots, videos, and other assets

Drop files into `public/`. Reference them from frontmatter with leading slashes:
- Images: `cover: "/images/projects/foo/cover.jpg"`
- Videos: `video: "/videos/demo.mp4"`

> 💡 Use the `asset()` helper from `@/lib/utils` in custom components — it prepends the GitHub Pages basePath for you.

---

## 🚢 Deploying to GitHub Pages

### One-time setup

1. **Create a new GitHub repo**, e.g. `irena-portfolio` (or `username.github.io` for a root-level user site).
2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/irena-portfolio.git
   git push -u origin main
   ```
3. In your repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open `src/data/site.ts` and set `url` to your final GitHub Pages URL.

### What happens next

Every push to `main` triggers `.github/workflows/deploy.yml`, which:

1. Installs dependencies
2. Runs `next build` with the correct `NEXT_PUBLIC_BASE_PATH` (auto-detected by `actions/configure-pages`)
3. Adds `.nojekyll` (so Pages doesn't ignore folders starting with `_`)
4. Publishes `/out` to GitHub Pages

After a successful run, your site is live at:
- **User/org site** (`username.github.io` repo): `https://username.github.io`
- **Project site** (any other repo name): `https://username.github.io/repo-name`

### Custom domain (optional)

1. In your repo: **Settings → Pages → Custom domain** → enter your domain
2. Add `public/CNAME` containing just your domain (e.g. `irena.dev`)
3. Update `siteConfig.url` in `src/data/site.ts`
4. Configure your DNS A/AAAA records to point at GitHub Pages

---

## 🧰 Maintenance guide

### Adding content

| What                | Where                                  |
| ------------------- | -------------------------------------- |
| New project         | `content/projects/your-slug.md`        |
| New blog post       | `content/blog/your-slug.md`            |
| New project image   | `public/images/projects/your-slug/`    |
| New blog cover      | `public/images/blog/your-slug/`        |
| Demo video          | `public/videos/`                       |
| Personal info       | `src/data/site.ts`                     |

### Changing visual identity

- **Colors / fonts / spacing** → `tailwind.config.ts`
- **Global styles, prose, animations** → `src/app/globals.css`
- **Navbar / footer links** → `src/components/Navbar.tsx`, `Footer.tsx`

### Updating dependencies

```bash
npm outdated         # see what's behind
npm update           # update within semver ranges
npm install next@latest react@latest react-dom@latest   # major bumps
```

### Common gotchas

- **Images don't load on GitHub Pages but do locally** → You forgot to use `asset()` or a leading `/`. The `basePath` only applies in production.
- **404 on refresh** → GitHub Pages routing uses static HTML. The `trailingSlash: true` in `next.config.js` handles this — keep it on.
- **Search doesn't work** → It's client-side (it has to be for static sites). Make sure your post frontmatter is valid YAML.

---

## 📈 Performance & SEO

The site is built to score 95+ on Lighthouse out of the box:

- ✅ Pre-rendered static HTML
- ✅ No runtime JavaScript for content pages
- ✅ Self-hosted fonts (system fonts — zero network requests)
- ✅ Optimized CSS via Tailwind's built-in JIT and purge
- ✅ Per-page metadata, Open Graph, Twitter cards
- ✅ Dynamic sitemap.xml and robots.txt
- ✅ Semantic HTML and accessible focus states

To verify locally:

```bash
npm run build
npx serve out
# Open http://localhost:3000 → DevTools → Lighthouse → Analyze
```

---

## 🗺️ Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned enhancements (AI chatbot, newsletter, analytics, speaking page, resume download, case study templates).

---

## 📄 License

MIT — feel free to use this as a starting point for your own portfolio.
