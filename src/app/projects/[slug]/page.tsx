import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/content';
import { asset, formatDate } from '@/lib/utils';
import Tag, { StatusBadge } from '@/components/Tag';
import VideoShowcase from '@/components/VideoShowcase';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import FadeIn from '@/components/FadeIn';
import { siteConfig } from '@/data/site';

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
      images: project.cover ? [project.cover] : [siteConfig.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article>
      {/* Header */}
      <section className="container-content pt-24 pb-12 sm:pt-32 sm:pb-16">
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors mb-8"
          >
            <span aria-hidden="true">←</span> All projects
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <StatusBadge status={project.status} />
            <time className="text-xs text-ink-500" dateTime={project.date}>
              {formatDate(project.date)}
            </time>
          </div>

          <h1 className="text-display-xl font-display text-ink-900 max-w-4xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-ink-600 max-w-3xl leading-relaxed">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Tag key={t} label={t} variant="neutral" size="md" />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live demo <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </FadeIn>
      </section>

      {/* Cover */}
      {project.cover ? (
        <section className="container-content pb-12">
          <FadeIn>
            <div className="relative aspect-[16/9] rounded-4xl overflow-hidden border border-ink-200 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(project.cover)}
                alt={`${project.title} cover`}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </section>
      ) : (
        <section className="container-content pb-12">
          <FadeIn>
            <div className="aspect-[16/9] rounded-4xl border border-ink-200 bg-gradient-to-br from-pink-100 via-white to-teal-100 flex items-center justify-center text-ink-500 text-sm">
              Hero image placeholder
            </div>
          </FadeIn>
        </section>
      )}

      {/* Demo video */}
      {project.video && (
        <section className="container-content">
          <FadeIn>
            <VideoShowcase src={project.video} caption="Product demo" />
          </FadeIn>
        </section>
      )}

      {/* Body */}
      <section className="container-content py-12">
        <FadeIn>
          <div
            className="prose-irena mx-auto"
            dangerouslySetInnerHTML={{ __html: project.contentHtml }}
          />
        </FadeIn>
      </section>

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="container-content pb-20">
          <FadeIn>
            <h2 className="text-display-md font-display text-ink-900 mb-6">
              Screenshots
            </h2>
            <ScreenshotGallery
              images={project.screenshots}
              alt={`${project.title} screenshot`}
            />
          </FadeIn>
        </section>
      )}

      {/* Footer CTA */}
      <section className="container-content pb-24">
        <FadeIn>
          <div className="card p-10 sm:p-14 text-center bg-gradient-to-br from-pink-100 via-white to-teal-100 border-ink-200">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight text-ink-900">
              Want to know more?
            </h2>
            <p className="mt-3 text-ink-600 max-w-xl mx-auto">
              I&apos;m happy to chat about the design choices, technical
              tradeoffs, or potential applications of this project.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Reach out on GitHub <span aria-hidden="true">→</span>
              </a>
              <Link href="/projects" className="btn-secondary">
                More projects
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </article>
  );
}
