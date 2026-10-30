# Despliegue

El destino final sigue pendiente. La URL Vercel que se proporcionó es `https://portafolio-roan-pi-79.vercel.app`, pero no se ha confirmado que Vercel sea el proveedor definitivo ni se configuró un flujo de despliegue.

`vercel.json` incluye únicamente los redirects permanentes solicitados para `/proyectos` y `/proyectos/:slug`. `astro.config.mjs` conserva redirects compatibles con los previews estáticos de Astro.

El sitio define su origen mediante `SITE_URL` y usa como fallback la URL Vercel comunicada, para generar canonical y sitemap. Antes de publicar en otro proveedor o dominio, define `SITE_URL` con el origen definitivo y confirma el comportamiento de redirects de ese host. No se añadieron credenciales, variables secretas ni configuración de CI.
