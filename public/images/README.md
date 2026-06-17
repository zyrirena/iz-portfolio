# Images

Drop your images into the appropriate subfolders. When a referenced image is missing, the site falls back to friendly placeholders, so the build never breaks.

## Expected paths

### Hero
- `/public/images/hero/main.jpg` — main hero visual (16:9 recommended)

### Open Graph
- `/public/images/og-default.png` — 1200×630, used for social link previews

### About
- `/public/images/about/portrait.jpg` — portrait photo (4:5 recommended)

### Projects
Each project's frontmatter references images by path. The default project (`wellness-coach-ai`) expects:
- `/public/images/projects/wellness-coach-ai/cover.jpg` (16:9)
- `/public/images/projects/wellness-coach-ai/screenshot-1.jpg` (4:3)
- `/public/images/projects/wellness-coach-ai/screenshot-2.jpg`
- `/public/images/projects/wellness-coach-ai/screenshot-3.jpg`

### Blog
- `/public/images/blog/{slug}/cover.jpg` (16:9) — per-article cover images

## Recommendations

- **Format**: JPG for photos, PNG for screenshots with UI, WebP if you optimize aggressively
- **Sizes**: 2000px wide max — larger files just slow the page down
- **Compression**: Run images through [Squoosh](https://squoosh.app/) or `sharp` before committing
