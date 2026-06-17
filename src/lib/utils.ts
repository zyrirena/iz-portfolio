/**
 * Prefix a public asset path with the configured basePath so it resolves
 * correctly on GitHub Pages project sites.
 *
 * Use whenever you reference a file from /public in JSX, e.g.
 *   <img src={asset('/images/projects/wellness/cover.jpg')} />
 */
export function asset(p: string): string {
  if (!p) return p;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (p.startsWith('http://') || p.startsWith('https://')) return p;
  const normalized = p.startsWith('/') ? p : `/${p}`;
  return `${base}${normalized}`;
}

export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
}

export function formatShortDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  } catch {
    return iso;
  }
}
