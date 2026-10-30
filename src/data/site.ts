export const site = {
  name: 'Manuel Antonio García Juárez',
  shortName: 'Antonio García',
  title: 'Desarrollador Full Stack',
  description:
    'Portafolio de Manuel Antonio García Juárez. Desarrollo de aplicaciones web y móviles de extremo a extremo.',
  locale: 'es-GT',
};

export const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Contacto', href: '/#contacto' },
] as const;

export const cv = {
  available: false,
  href: '/cv/CV.pdf',
} as const;
