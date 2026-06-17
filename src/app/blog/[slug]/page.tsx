import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getAllBlogSlugs, getBlogPostBySlug } from '@/lib/content';
import { asset, formatDate } from '@/lib/utils';
import Tag from '@/components/Tag';
import BlogCard from '@/components/BlogCard';
import FadeIn from '@/components/FadeIn';
import { siteConfig } from '@/data/site';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: post.cover ? [post.cover] : [siteConfig.ogImage],
      authors: [post.author ?? siteConfig.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();

  // Find related posts (same category, excluding self)
  const allPosts = await getAllBlogPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <article>
      <section className="container-content pt-24 pb-12 sm:pt-32">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors mb-8"
          >
            <span aria-hidden="true">←</span> All articles
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Tag label={post.category} variant="teal" />
            <time className="text-xs text-ink-500" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span className="text-xs text-ink-500">·</span>
            <span className="text-xs text-ink-500">
              {post.readingTimeMinutes} min read
            </span>
          </div>

          <h1 className="text-display-xl font-display text-ink-900 max-w-4xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-ink-600 max-w-3xl leading-relaxed">
            {post.excerpt}
          </p>
        </FadeIn>
      </section>

      {/* Cover */}
      {post.cover && (
        <section className="container-content pb-10">
          <FadeIn>
            <div className="relative aspect-[16/9] rounded-4xl overflow-hidden border border-ink-200 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(post.cover)}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </section>
      )}

      {/* Body */}
      <section className="container-content py-8">
        <FadeIn>
          <div
            className="prose-irena mx-auto"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </FadeIn>
      </section>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <section className="container-content pb-12">
          <div className="max-w-prose mx-auto flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Tag key={t} label={`#${t}`} variant="neutral" />
            ))}
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="container-content pb-24">
          <div className="border-t border-ink-200 pt-12">
            <FadeIn>
              <h2 className="text-display-md font-display text-ink-900 mb-8">
                More from {post.category}
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, idx) => (
                <FadeIn key={p.slug} delay={idx * 80}>
                  <BlogCard post={p} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
