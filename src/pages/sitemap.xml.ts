import { getCollection } from 'astro:content';

export const prerender = true;

export async function GET({ site }: { site: URL | undefined }) {
  const origin = (site ?? new URL('https://portafolio-roan-pi-79.vercel.app')).toString().replace(/\/$/, '');
  const projects = await getCollection('projects');
  const pages = [
    `${origin}/`,
    `${origin}/projects`,
    ...projects.map(({ slug }) => `${origin}/projects/${slug}`),
  ];
  const entries = pages.map((location) => `  <url><loc>${location}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
