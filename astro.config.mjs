import { defineConfig } from 'astro/config';

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split('/') || [];
const isProjectPage = repository && !repository.endsWith('.github.io');

export default defineConfig({
  site: process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'http://localhost:4321'),
  base: process.env.GITHUB_ACTIONS && isProjectPage ? `/${repository}` : '/',
  output: 'static',
  build: { format: 'directory' }
});
