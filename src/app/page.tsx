import Link from 'next/link';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import GitHubCard from '@/components/GitHubCard';
import FadeIn from '@/components/FadeIn';
import { getAllProjects, getAllBlogPosts } from '@/lib/content';
import { siteConfig } from '@/data/site';

export default async function HomePage() {
  const [projects, posts] = await Promise.all([
    getAllProjects(),
    getAllBlogPosts(),
  ]);
  const featuredProject = projects.find((p) => p.featured) ?? projects[0];
  const otherProjects = projects.filter((p) => p.slug !== featuredProject?.slug).slice(0, 2);
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Featured project */}
      {featuredProject && (
        <section id="projects" className="section">
          <div className="container-content">
            <FadeIn>
              <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
                <div>
                  <span className="eyebrow">Projects</span>
                  <h2 className="mt-3 text-display-lg font-display text-ink-900">
                    Building things that matter.
                  </h2>
                </div>
                <Link
                  href="/projects"
                  className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                >
                  All projects →
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <ProjectCard project={featuredProject} variant="featured" />
            </FadeIn>

            {otherProjects.length > 0 && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherProjects.map((p, idx) => (
                  <FadeIn key={p.slug} delay={150 + idx * 100}>
                    <ProjectCard project={p} />
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Latest from blog */}
      {latestPosts.length > 0 && (
        <section className="section bg-ink-50/60">
          <div className="container-content">
            <FadeIn>
              <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
                <div>
                  <span className="eyebrow">Writing</span>
                  <h2 className="mt-3 text-display-lg font-display text-ink-900">
                    Latest from the blog.
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                >
                  All articles →
                </Link>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map((post, idx) => (
                <FadeIn key={post.slug} delay={100 + idx * 100}>
                  <BlogCard post={post} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GitHub */}
      <section className="section">
        <div className="container-content">
          <FadeIn>
            <GitHubCard />
          </FadeIn>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section pt-0">
        <div className="container-content">
          <FadeIn>
            <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-pink-100 via-white to-teal-100 border border-ink-200 p-10 sm:p-16 lg:p-20 text-center">
              <div className="relative">
                <span className="eyebrow">Contact</span>
                <h2 className="mt-3 text-display-lg font-display text-ink-900">
                  {siteConfig.contact.heading}
                </h2>
                <p className="mt-5 text-lg text-ink-600 max-w-2xl mx-auto leading-relaxed">
                  {siteConfig.contact.body}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Connect on GitHub
                    <span aria-hidden="true">→</span>
                  </a>
                  <Link href="/contact" className="btn-secondary">
                    More ways to connect
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
