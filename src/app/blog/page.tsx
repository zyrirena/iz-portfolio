import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import BlogFilter from '@/components/BlogFilter';
import FadeIn from '@/components/FadeIn';
import { getAllBlogPosts, getFeaturedBlogPost } from '@/lib/content';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Essays and notes on artificial intelligence, responsible AI, product development, and the craft of building useful software.',
};

export default async function BlogPage() {
  const [posts, featured] = await Promise.all([
    getAllBlogPosts(),
    getFeaturedBlogPost(),
  ]);

  // Exclude the featured post from the filterable grid to avoid duplication.
  const rest = featured ? posts.filter((p) => p.slug !== featured.slug) : posts;

  return (
    <>
      {/* Header */}
      <section className="container-content pt-24 pb-10 sm:pt-32 sm:pb-12">
        <FadeIn>
          <span className="eyebrow">Blog</span>
          <h1 className="mt-4 text-display-xl font-display text-ink-900 max-w-3xl">
            Essays on AI, product, and craft.
          </h1>
          <p className="mt-6 text-lg text-ink-600 max-w-2xl leading-relaxed">
            Notes on what I&apos;m learning, building, and thinking about — in
            the open.
          </p>
        </FadeIn>
      </section>

      {/* Featured */}
      {featured && (
        <section className="container-content pb-16">
          <FadeIn>
            <BlogCard post={featured} variant="featured" />
          </FadeIn>
        </section>
      )}

      {/* Filterable grid */}
      <section className="container-content pb-24">
        <FadeIn>
          {rest.length > 0 ? (
            <BlogFilter posts={rest} categories={siteConfig.blogCategories} />
          ) : (
            <div className="card p-12 text-center">
              <p className="text-ink-500">
                More articles coming soon. Add markdown files in{' '}
                <code className="font-mono text-sm bg-ink-100 px-1.5 py-0.5 rounded">
                  /content/blog
                </code>{' '}
                to populate this page.
              </p>
            </div>
          )}
        </FadeIn>
      </section>
    </>
  );
}
