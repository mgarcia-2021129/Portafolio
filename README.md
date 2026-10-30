# Portafolio - Manuel Antonio Garcia Juárez

Sitio estático construido con Astro 4, TypeScript y Tailwind CSS. Las páginas y el contenido se generan desde Astro Content Collections con validación Zod.

## Requisitos

- Node.js compatible con Astro 4.
- pnpm 10.34.1 (versión declarada por el proyecto).

## Desarrollo local

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Build y vista previa

```bash
pnpm build
pnpm preview
```

El build produce páginas estáticas en `dist/`. Define `SITE_URL` si se requiere otro origen; por defecto se usa `https://portafolio-roan-pi-79.vercel.app` para canonical y sitemap.

## Contenido

Los proyectos, estudios, experiencia y reconocimientos viven en `src/content/`; sus colecciones y esquemas están en `src/content/config.ts`. Añade un archivo siguiendo el esquema de su colección y ejecuta `pnpm build` para validar los campos. Los valores todavía no confirmados se presentan como “Pendiente”. Las imágenes transformadas se guardan en `src/assets/` y se referencian desde cada registro de proyecto. Los iconos SVG públicos permanecen en `public/images/skills/`.

La foto del reconocimiento se espera en `src/assets/recognitions/becaunis.jpeg`. Mientras no exista, el build usa un espacio visual de reserva sin fallar.

## CV

El enlace se controla con `cv.available` en `src/data/site.ts`. Sigue en `false` hasta que se añada el PDF publicado.

## Rutas anteriores

Las rutas `/proyectos` y `/proyectos/:slug` se conservan con redirects de Astro y redirects permanentes en `vercel.json`.

Consulta `PENDIENTES.md` y `DEPLOY.md` para datos pendientes y estado de publicación.
