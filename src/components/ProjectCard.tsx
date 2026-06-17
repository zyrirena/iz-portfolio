import Link from 'next/link';
import { asset } from '@/lib/utils';
import type { Project } from '@/lib/types';
import Tag, { StatusBadge } from './Tag';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured';
}

export default function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className={`group block card card-hover overflow-hidden ${
        isFeatured ? 'lg:grid lg:grid-cols-2 lg:gap-0' : ''
      }`}
    >
      {/* Cover / screenshot area */}
      <div
        className={`relative overflow-hidden ${
          isFeatured ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[420px]' : 'aspect-[16/10]'
        } bg-gradient-to-br from-pink-100 via-white to-teal-100`}
      >
        {project.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(project.cover)}
            alt={`${project.title} cover`}
            className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 shadow-soft mb-3">
                <svg
                  className="w-6 h-6 text-teal-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M3 15l4-4 4 4 6-6 4 4" />
                </svg>
              </div>
              <p className="text-xs font-medium text-ink-600">
                Screenshot placeholder
              </p>
            </div>
          </div>
        )}

        <div className="absolute top-4 left-4">
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 sm:p-8 ${isFeatured ? 'lg:p-12 flex flex-col justify-center' : ''}`}>
        {isFeatured && <span className="eyebrow mb-3">Featured Project</span>}

        <h3
          className={`font-display font-semibold tracking-tight text-ink-900 group-hover:text-teal-600 transition-colors ${
            isFeatured ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'
          }`}
        >
          {project.title}
        </h3>

        <p className={`text-ink-600 leading-relaxed ${isFeatured ? 'mt-4 text-base' : 'mt-3 text-sm'}`}>
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, isFeatured ? 8 : 5).map((t) => (
            <Tag key={t} label={t} variant="neutral" />
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 text-sm">
          <span className="inline-flex items-center gap-1.5 text-teal-600 font-medium group-hover:gap-2.5 transition-all duration-300">
            View case study
            <span aria-hidden="true">→</span>
          </span>
          {project.github && (
            <span className="text-ink-500 text-xs">· Source on GitHub</span>
          )}
        </div>
      </div>
    </Link>
  );
}
