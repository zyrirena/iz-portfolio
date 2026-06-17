import Link from 'next/link';
import { asset, formatDate } from '@/lib/utils';
import type { BlogPost } from '@/lib/types';
import Tag from './Tag';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  if (variant === 'featured') {
    return (
      <Link
        href={`/blog/${post.slug}/`}
        className="group block card card-hover overflow-hidden lg:grid lg:grid-cols-2"
      >
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px] bg-gradient-to-br from-teal-100 via-white to-pink-100 overflow-hidden">
          {post.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset(post.cover)}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-ink-400 text-xs">
              Cover placeholder
            </div>
          )}
        </div>
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <span className="eyebrow mb-3">Featured Article</span>
          <Tag label={post.category} variant="teal" />
          <h3 className="mt-4 text-2xl sm:text-3xl font-display font-semibold tracking-tight text-ink-900 group-hover:text-teal-600 transition-colors">
            {post.title}
          </h3>
          <p className="mt-3 text-ink-600 leading-relaxed">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-ink-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href={`/blog/${post.slug}/`} className="group block py-5 border-b border-ink-200/70 hover:border-ink-300 transition-colors">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-base sm:text-lg font-medium text-ink-900 group-hover:text-teal-600 transition-colors">
            {post.title}
          </h3>
          <time className="text-xs text-ink-500 shrink-0" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>
        <p className="mt-1.5 text-sm text-ink-600 line-clamp-2">{post.excerpt}</p>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}/`} className="group block card card-hover overflow-hidden">
      <div className="relative aspect-[16/10] bg-gradient-to-br from-pink-100 via-white to-teal-100 overflow-hidden">
        {post.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(post.cover)}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-ink-400 text-xs">
            Cover placeholder
          </div>
        )}
      </div>
      <div className="p-6">
        <Tag label={post.category} variant="teal" />
        <h3 className="mt-3 text-lg sm:text-xl font-semibold tracking-tight text-ink-900 group-hover:text-teal-600 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-ink-600 line-clamp-2">{post.excerpt}</p>
        <div className="mt-5 flex items-center gap-3 text-xs text-ink-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTimeMinutes} min read</span>
        </div>
      </div>
    </Link>
  );
}
