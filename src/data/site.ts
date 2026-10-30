import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

export const site = {
  name: 'Manuel Antonio Garcia Juárez',
  shortName: 'Antonio Garcia',
  title: 'Desarrollador Full Stack',
  description: 'Portafolio de Manuel Antonio Garcia Juárez. Desarrollo de aplicaciones web y moviles de extremo a extremo.',
  locale: 'es-GT',
};

export const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Contacto', href: '/#contacto' },
] as const;

export const cv = {
  available: existsSync(resolve(process.cwd(), 'public/cv/CV_Manuel_Garcia.pdf')),
  href: '/cv/CV_Manuel_Garcia.pdf',
} as const;
