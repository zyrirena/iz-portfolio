/** @type {import('next').NextConfig} */

// Set NEXT_PUBLIC_BASE_PATH in your GitHub repository secrets/variables if your
// repository is not the special `<username>.github.io` repo. For example, if you
// deploy to https://username.github.io/irena-portfolio set it to "/irena-portfolio".
// For a root-level user/organization site, leave it empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  // Trailing slashes make GitHub Pages routing predictable.
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    // GitHub Pages serves static files only — disable the optimizer.
    unoptimized: true,
  },
  // Surface the basePath to client components for absolute asset references.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
