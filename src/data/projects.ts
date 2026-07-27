export type Project = {
  slug: string;
  name: string;
  featured: boolean;
  shortDescription: string;
  description: string;
  role: string;
  learned: string;
  technologies: string[];
  features: string[];
  status: 'Finalizado';
  repository: string;
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: 'novabank',
    name: 'Sistema Bancario NovaBank',
    featured: true,
    shortDescription:
      'Plataforma bancaria con microservicios para administrar usuarios, cuentas, transacciones y cheques desde web y móvil.',
    description:
      'NovaBank es una plataforma bancaria desarrollada bajo una arquitectura de microservicios que permite administrar usuarios, cuentas bancarias, transacciones, cheques y configuraciones financieras desde una aplicación web y móvil. El sistema implementa autenticación centralizada con JWT, control de roles y comunicación entre servicios para garantizar la seguridad y escalabilidad de la aplicación.',
    role: 'Desarrollador Full Stack. Participé en el desarrollo de los servicios backend y frontend, la integración entre microservicios y la implementación del panel administrativo.',
    learned:
      'Trabajar en un sistema bancario me hizo comprender la importancia de mantener la integridad de los datos en cada operación, especialmente en procesos como transferencias y movimientos entre cuentas. También reforcé la importancia de coordinar el desarrollo entre varios microservicios y el trabajo en equipo.',
    technologies: [
      'ASP.NET Core 8',
      'Entity Framework Core',
      'Node.js',
      'Fastify',
      'React',
      'Vite',
      'Tailwind CSS',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'JWT Authentication',
      'Swagger/OpenAPI',
      'Git',
    ],
    features: [
      'Autenticación mediante JWT',
      'Registro e inicio de sesión',
      'Verificación y recuperación de correo electrónico',
      'Gestión de usuarios y roles',
      'Administración de cuentas bancarias',
      'Depósitos, retiros y transferencias',
      'Emisión y cobro de cheques',
      'Conversión entre monedas',
      'Dashboard administrativo',
      'Protección de rutas según permisos de usuario',
    ],
    status: 'Finalizado',
    repository: 'https://github.com/CCTEPT/Sistema_Bancario.git',
    cover: '/images/projects/novabank/Novabank.webp',
    gallery: [
      '/images/projects/novabank/Novabank1.webp',
      '/images/projects/novabank/Novabank7.webp',
      '/images/projects/novabank/Novabank9.webp',
      '/images/projects/novabank/Novabank13.webp',
      '/images/projects/novabank/Novabank14.webp',
      '/images/projects/novabank/Novabank15.webp',
      '/images/projects/novabank/Novabank18.webp',
    ],
  },
  {
    slug: 'kinal-reports',
    name: 'Kinal Reports',
    featured: true,
    shortDescription:
      'Plataforma de microservicios para digitalizar procesos académicos y administrativos en Fundación Kinal.',
    description:
      'Kinal Reports es una plataforma web desarrollada bajo una arquitectura de microservicios para digitalizar y optimizar procesos académicos y administrativos dentro de Fundación Kinal. El sistema permite gestionar solicitudes de documentos, horarios, eventos, notificaciones, comunicación entre estudiantes y profesores, así como el seguimiento del estado de los docentes, reduciendo procesos manuales y mejorando la eficiencia institucional.',
    role: 'Desarrollador Full Stack. Participé en el desarrollo de la arquitectura basada en microservicios, la implementación de servicios backend y frontend, la integración del sistema de autenticación y el desarrollo de funcionalidades orientadas a la gestión académica y administrativa.',
    learned:
      'Este proyecto me enseñó a diseñar funcionalidades pensando en usuarios con necesidades diferentes, como estudiantes, profesores y coordinadores. Además, trabajar en equipo fue clave para mantener la integración entre los distintos microservicios sin afectar el funcionamiento del sistema.',
    technologies: [
      'Node.js',
      'Fastify',
      'ASP.NET Core 8 (.NET)',
      'React',
      'Vite',
      'Tailwind CSS',
      'MongoDB',
      'PostgreSQL',
      'JWT Authentication',
      'Cloudinary',
      'Postman',
      'Git',
    ],
    features: [
      'Sistema basado en microservicios',
      'Autenticación y autorización mediante JWT',
      'Gestión de usuarios con roles (Administrador, Profesor y Estudiante)',
      'Solicitud y aprobación de documentos administrativos',
      'Consulta de horarios por profesor, sección y salón',
      'Gestión de eventos académicos',
      'Sistema de notificaciones',
      'Chat entre estudiantes y profesores',
      'Consulta del estado y ubicación de docentes',
      'Generación de reportes administrativos',
      'Seguridad mediante validación de roles, rate limiting y protección de endpoints',
    ],
    status: 'Finalizado',
    repository: 'https://github.com/dsebastian-2021010/Kinal-Reports.git',
    cover: '/images/projects/kinal-reports/KinalReports.webp',
    gallery: [
      '/images/projects/kinal-reports/KinalReports1.webp',
      '/images/projects/kinal-reports/KinalReports2.webp',
      '/images/projects/kinal-reports/KinalReports3.webp',
      '/images/projects/kinal-reports/KinalReports5.webp',
      '/images/projects/kinal-reports/KinalReports7.webp',
    ],
  },
  {
    slug: 'allelitegames',
    name: 'AllEliteGames',
    featured: true,
    shortDescription:
      'Sistema MVC para la gestión integral de una tienda de videojuegos: productos, ventas, clientes y más.',
    description:
      'AllEliteGames es un sistema web de gestión para una tienda de videojuegos que centraliza la administración de productos, clientes, empleados, ventas, proveedores y otros procesos operativos. La aplicación fue desarrollada bajo el patrón Modelo-Vista-Controlador (MVC), permitiendo optimizar la gestión diaria del negocio mediante un panel administrativo seguro y organizado.',
    role: 'Desarrollador Full Stack. Participé en el desarrollo del sistema utilizando Java EE, implementando módulos CRUD, la lógica de negocio, el acceso a la base de datos y la interfaz web del panel administrativo.',
    learned:
      'Desarrollar un sistema con múltiples módulos relacionados me ayudó a comprender la importancia de un buen diseño de la base de datos y de mantener la consistencia entre las relaciones de las entidades. También aprendí a coordinar cambios con el resto del equipo para evitar conflictos entre módulos.',
    technologies: [
      'Java 8',
      'Java EE (Servlets y JSP)',
      'JSTL',
      'MySQL',
      'JDBC',
      'GlassFish 5',
      'Apache Ant',
      'Bootstrap 4',
      'Font Awesome',
      'jQuery',
      'Git',
    ],
    features: [
      'Inicio de sesión para empleados',
      'Panel administrativo con navegación centralizada',
      'Gestión de clientes',
      'Gestión de empleados',
      'Administración de videojuegos y consolas',
      'Gestión de proveedores',
      'Administración de géneros',
      'Gestión de sucursales',
      'Administración de suscripciones y membresías',
      'Registro de ventas',
      'Gestión de métodos de pago',
      'Registro de devoluciones',
      'Validación de formularios del lado del servidor',
      'Arquitectura MVC con separación entre vistas, controladores y acceso a datos',
    ],
    status: 'Finalizado',
    repository: 'https://github.com/aecheverria-2021222/AllEliteGames.git',
    cover: '/images/projects/allelitegames/home.webp',
    gallery: [
      '/images/projects/allelitegames/01.webp',
      '/images/projects/allelitegames/02.webp',
    ],
  },
  {
    slug: 'scoph',
    name: 'Scoph',
    featured: true,
    shortDescription:
      'Sistema de microservicios para optimizar la gestión de jornadas médicas, medicamentos y usuarios.',
    description:
      'Scoph es un sistema web desarrollado para optimizar la gestión de jornadas médicas, facilitando la administración de medicamentos, usuarios y procesos operativos durante cada jornada. El proyecto busca reducir la desorganización y mejorar el control de los recursos médicos mediante una plataforma centralizada basada en microservicios.',
    role: 'Desarrollador Full Stack. Participé en el desarrollo del frontend y backend de una aplicación para un cliente del sector salud, colaborando en la implementación de nuevas funcionalidades, corrección de incidencias y despliegue de la aplicación como parte de un equipo de desarrollo.',
    learned:
      'Al tratarse de un proyecto para un cliente real, aprendí que cada cambio debía implementarse sin afectar el funcionamiento de las jornadas médicas ya existentes. Trabajar en equipo me permitió coordinar el desarrollo de nuevas funcionalidades, como la gestión y asignación de recursos médicos, manteniendo la estabilidad del sistema durante todo el proceso.',
    technologies: [
      'Node.js',
      'Fastify',
      'MongoDB',
      'JWT Authentication',
      'Git',
    ],
    features: [
      'Arquitectura basada en microservicios',
      'Gestión de jornadas médicas',
      'Administración de medicamentos',
      'Gestión de usuarios',
      'Sistema de autenticación',
      'Control de acceso mediante roles y permisos',
      'API REST para la comunicación entre servicios',
      'Desarrollo colaborativo bajo control de versiones',
    ],
    status: 'Finalizado',
    repository:
      'https://github.com/EmilioCali/Scoph-Gestor-Jornadas-Medicas.git',
    cover: '/images/projects/scoph/Scoph.webp',
    gallery: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
