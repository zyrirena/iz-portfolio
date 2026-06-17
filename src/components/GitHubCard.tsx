import { siteConfig } from '@/data/site';

interface RepoCardProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
}

function RepoCard({ name, description, language, url }: RepoCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover p-6 flex flex-col gap-3 group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <svg
            className="w-4 h-4 text-ink-400 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
          </svg>
          <span className="font-mono text-sm font-medium text-ink-900 group-hover:text-teal-600 transition-colors truncate">
            {name}
          </span>
        </div>
        <span className="text-ink-400 text-sm shrink-0" aria-hidden="true">↗</span>
      </div>
      <p className="text-sm text-ink-600 leading-relaxed line-clamp-3">{description}</p>
      <div className="mt-auto pt-2 flex items-center gap-3 text-xs text-ink-500">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-teal-400" />
          {language}
        </span>
      </div>
    </a>
  );
}

interface GitHubCardProps {
  repos?: typeof siteConfig.featuredRepos;
}

export default function GitHubCard({ repos = siteConfig.featuredRepos }: GitHubCardProps) {
  return (
    <div className="card p-8 sm:p-10 bg-gradient-to-br from-ink-900 to-ink-800 text-white border-ink-800">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
        <div>
          <span className="eyebrow text-teal-300">GitHub</span>
          <h3 className="mt-3 text-3xl sm:text-4xl font-display font-semibold tracking-tight">
            Open source, in the open
          </h3>
          <p className="mt-3 text-ink-300 max-w-xl leading-relaxed">
            A selection of repositories I&apos;ve been working on. Stars, forks,
            and ideas welcome.
          </p>
        </div>
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent self-start"
        >
          Visit GitHub
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <RepoCard key={repo.name} {...repo} />
        ))}
      </div>
    </div>
  );
}
