'use client';

import { useMemo, useState } from 'react';
import type { BlogPost } from '@/lib/types';
import BlogCard from './BlogCard';
import clsx from 'clsx';

interface BlogFilterProps {
  posts: BlogPost[];
  categories: readonly string[];
}

export default function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        (p.tags ?? []).some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [posts, query, category]);

  const allCategories = ['All', ...categories];

  return (
    <div>
      {/* Search input */}
      <div className="relative max-w-xl mb-6">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400 pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="search"
          placeholder="Search articles…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search articles"
          className="w-full pl-11 pr-4 py-3 rounded-full bg-ink-50 border border-ink-200 text-sm text-ink-900 placeholder:text-ink-400 focus:bg-white focus:border-teal-300 focus:outline-none transition-all duration-300"
        />
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter by category">
        {allCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={category === cat}
            onClick={() => setCategory(cat)}
            className={clsx(
              'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ease-apple',
              category === cat
                ? 'bg-ink-900 text-white shadow-soft'
                : 'bg-ink-100 text-ink-700 hover:bg-ink-200',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-ink-500">No articles match your filters.</p>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setCategory('All');
            }}
            className="mt-4 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
