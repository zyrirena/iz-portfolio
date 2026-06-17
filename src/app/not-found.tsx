import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-content py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-display-xl font-display text-ink-900">
        Page not found.
      </h1>
      <p className="mt-6 text-lg text-ink-600 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back home
        </Link>
        <Link href="/projects" className="btn-secondary">
          View projects
        </Link>
      </div>
    </section>
  );
}
