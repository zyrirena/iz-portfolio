export type ProjectStatus = 'In Development' | 'Live' | 'Prototype' | 'Research' | 'Archived';

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  summary: string;
  /** Optional longer paragraph shown under the summary on the project page */
  detail?: string;
  description?: string;
  status: ProjectStatus;
  tech: string[];
  github?: string;
  demo?: string;
  cover?: string;
  /** Optional looping .mp4 shown on the cover instead of the still image */
  coverVideo?: string;
  screenshots?: string[];
  video?: string;
  featured?: boolean;
  order?: number;
  date: string; // ISO
}

export interface Project extends ProjectFrontmatter {
  contentHtml: string;
}

export interface BlogFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags?: string[];
  cover?: string;
  date: string; // ISO
  featured?: boolean;
  author?: string;
}

export interface BlogPost extends BlogFrontmatter {
  contentHtml: string;
  readingTimeMinutes: number;
}
