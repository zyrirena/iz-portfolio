import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import FadeIn from '@/components/FadeIn';
import { getAllProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'AI projects, prototypes, and product experiments — exploring practical applications of large language models, behavioral AI, and product design.',
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      {/* Header */}
      <section className="container-content pt-24 pb-10 sm:pt-32 sm:pb-12">
        <FadeIn>
          <span className="eyebrow">Projects</span>
          <h1 className="mt-4 text-display-xl font-display text-ink-900 max-w-3xl">
            Things I&apos;ve built.
          </h1>
          <p className="mt-6 text-lg text-ink-600 max-w-2xl leading-relaxed">
            A growing collection of AI-powered products, prototypes, and
            experiments — each one focused on a real problem worth solving.
          </p>
        </FadeIn>
      </section>

      {/* Featured */}
      {featured && (
        <section className="container-content pb-12">
          <FadeIn>
            <ProjectCard project={featured} variant="featured" />
          </FadeIn>
        </section>
      )}

      {/* Grid */}
      {rest.length > 0 ? (
        <section className="container-content pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((p, idx) => (
              <FadeIn key={p.slug} delay={idx * 100}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
        </section>
      ) : (
        <section className="container-content pb-24">
          <div className="card p-12 text-center">
            <p className="text-ink-500">
              More projects in the works. Add markdown files in{' '}
              <code className="font-mono text-sm bg-ink-100 px-1.5 py-0.5 rounded">
                /content/projects
              </code>{' '}
              to populate this page.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
