import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { markdownToHtml } from './markdown';
import type {
  BlogFrontmatter,
  BlogPost,
  Project,
  ProjectFrontmatter,
} from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content');
const PROJECTS_DIR = path.join(CONTENT_DIR, 'projects');
const BLOG_DIR = path.join(CONTENT_DIR, 'blog');

function listMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.(md|mdx)$/i, '');
}

/* ----------------------------- Projects ----------------------------- */

export function getAllProjectSlugs(): string[] {
  return listMarkdownFiles(PROJECTS_DIR).map(slugFromFilename);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const filePath = path.join(PROJECTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const contentHtml = await markdownToHtml(content);

  const frontmatter = data as ProjectFrontmatter;
  return {
    ...frontmatter,
    slug,
    contentHtml,
  };
}

export async function getAllProjects(): Promise<Project[]> {
  const slugs = getAllProjectSlugs();
  const all = await Promise.all(slugs.map((s) => getProjectBySlug(s)));
  return all
    .filter((p): p is Project => p !== null)
    .sort((a, b) => {
      // Featured first, then explicit `order`, then most recent.
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

/* ------------------------------- Blog ------------------------------- */

export function getAllBlogSlugs(): string[] {
  return listMarkdownFiles(BLOG_DIR).map(slugFromFilename);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const contentHtml = await markdownToHtml(content);
  const stats = readingTime(content);

  const frontmatter = data as BlogFrontmatter;
  return {
    ...frontmatter,
    slug,
    contentHtml,
    readingTimeMinutes: Math.max(1, Math.round(stats.minutes)),
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = getAllBlogSlugs();
  const posts = await Promise.all(slugs.map((s) => getBlogPostBySlug(s)));
  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getFeaturedBlogPost(): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find((p) => p.featured) ?? posts[0] ?? null;
}
