# Roadmap

Planned enhancements for the Irena portfolio, ordered roughly by impact. Each item includes a sketch of the approach to make implementation later as cheap as possible.

---

## 🤖 1. AI chatbot about my projects

**Goal.** A floating chat bubble that visitors can use to ask questions about Irena's work — "What's Wellness Coach AI built with?", "Show me a project on responsible AI", etc.

**Approach.**
- Use a hosted LLM endpoint (Anthropic, OpenAI, or a local proxy).
- At build time, generate an embedding index from `content/projects/*.md` and `content/blog/*.md`. Store it as a JSON file in `/public`.
- At runtime, the client fetches the index, runs in-browser semantic search (e.g. with `@xenova/transformers`), and sends the top-k chunks to the LLM with a system prompt.
- Component: `src/components/ChatBubble.tsx` — slides up from the bottom-right, dismissible, accessible.

**Why this design.** No backend required for a static site — the LLM endpoint is the only external call.

---

## 📬 2. Newsletter

**Goal.** Let readers subscribe to new blog posts.

**Approach.**
- Use a hosted service: **Buttondown**, **ConvertKit**, **Substack**, or **Resend Audiences**.
- Drop their embed snippet into a new `src/components/NewsletterForm.tsx`.
- Place it at the bottom of `/blog/[slug]` and on the home page.
- Optional: store a `subscribers.json` count in the repo and feature it.

**Why static-friendly.** All subscription logic happens on the third-party side; no server code required.

---

## 📊 3. Project analytics

**Goal.** Privacy-respecting page-view and engagement stats.

**Approach.**
- Use **Plausible** (cloud or self-hosted), **Cabin**, or **Umami** — all of which work with one `<script>` tag.
- Add the snippet to `src/app/layout.tsx` behind an env flag (`NEXT_PUBLIC_ANALYTICS_DOMAIN`).
- Skip Google Analytics — it's overkill and a privacy concern for a personal site.
- Bonus: pull aggregate numbers into a `/dashboard` page (private) using their API at build time.

---

## 🎤 4. Speaking engagements page

**Goal.** A `/speaking` page that lists talks, panels, podcasts, and workshops.

**Approach.**
- Add `content/speaking/*.md` with frontmatter (`title`, `event`, `date`, `location`, `slidesUrl`, `videoUrl`, `recap`).
- Create `src/app/speaking/page.tsx` reusing `Timeline` and `BlogCard` patterns.
- Optional: a "Book me" CTA pointing to email or a calendar link (Cal.com, SavvyCal).

---

## 📄 5. Resume download section

**Goal.** A one-click way to grab a PDF resume.

**Approach.**
- Maintain `public/Irena-Resume.pdf` (single source of truth).
- Add a "Download Resume" button in the navbar and About page.
- Optional: render the same content as HTML at `/resume` so it's crawlable for SEO.
- Bonus: auto-generate the PDF from a markdown source using **Pandoc** in CI, so the HTML and PDF never drift.

---

## 📓 6. Case study templates

**Goal.** Make new project case studies look great by default.

**Approach.**
- Create `content/projects/_template.md` (leading underscore = ignored by the loader).
- Document a recommended structure: Problem → Approach → Architecture → Results → What's next.
- Build optional Markdown components: `<Stat />`, `<Quote />`, `<Comparison />` — wired through `rehype-react` so they can be authored inline.

---

## 🔮 Future ideas

- **Reading-progress indicator** on long blog posts (subtle bar at the top).
- **Table of contents** auto-generated from `h2`/`h3` for posts longer than ~1200 words.
- **Print stylesheet** for the resume page.
- **RSS feed** for the blog (`/feed.xml`) — easy with a small build script.
- **Dark mode**, but only if it earns its keep visually (Apple-inspired sites often work brilliantly without it).
- **i18n** if there's ever a non-English audience worth serving.
- **MDX** if blog posts ever need interactive components inline.

---

## 🧭 Guiding principles

When deciding what to add next:

1. **Does it help a real user?** Not a hypothetical one — the actual recruiter, collaborator, or reader you want to reach.
2. **Does it stay static?** If a feature requires a backend, it should be a hosted service or built at compile time.
3. **Does it match the design language?** Apple-inspired means restraint. New features should *feel like they belong*, not bolt-on.

Anything that fails all three goes in "future ideas" indefinitely. That's fine.
