# Comparación visual MIDNIGHT — HTML frente a Astro

**Referencia:** `C:\Users\Antonio\Downloads\MIDNIGHT — Manuel Antonio Garcia Juárez.html`  
**Salida probada:** `pnpm build`, Astro estático, `http://127.0.0.1:4321`  
**Capturas:** Chrome headless, viewport alto 950 px. Cada enlace abre el PNG de la referencia o la página Astro de esa sección.

## Resultado responsive

| Ancho | `/` | `/projects` | `/projects/novabank` | Texto recortado | Targets táctiles <44 px |
|---:|---|---|---|---:|---:|
| 320 | sin overflow | sin overflow | sin overflow | 0 | 0 |
| 375 | sin overflow | sin overflow | sin overflow | 0 | 0 |
| 390 | sin overflow | sin overflow | sin overflow | 0 | 0 |
| 768 | sin overflow | sin overflow | sin overflow | 0 | 0 |
| 1024 | sin overflow | sin overflow | sin overflow | 0 | N/A: mouse/hover |
| 1440 | sin overflow | sin overflow | sin overflow | 0 | N/A: mouse/hover |
| 1920 | sin overflow | sin overflow | sin overflow | 0 | N/A: mouse/hover |

`responsive-audit.json` guarda las mediciones de DOM para las 21 combinaciones. El ensayo de CLS inicial dio **0.000 en las 21 combinaciones** después de precargar Manrope 500/700/800 y DM Sans 400. Las imágenes Astro llevan dimensiones intrínsecas y CSS de proporción fija. Las miniaturas de proyectos se ven siempre en `hover:none`.

## Breakpoints y tokens extraídos

- Colores: `--mid #0B1426`, `--navy #172A46`, `--slate #52677E`, `--ice #DCE5EF`, `--blue #A9C9E8`, `--cu #C58B69`.
- Tipografía: Manrope (`--serif`, `--mono`) y DM Sans (`--sans`); se sirven localmente desde Fontsource.
- Media queries originales: `max-width:700px`, `max-width:800px`, `hover:none` y `prefers-reduced-motion:reduce`. Se mantienen los umbrales y no se añadieron breakpoints por ancho.
- No se usan tamaños fluidos nuevos: los `clamp()` corresponden a los de la referencia.

## Diferencias inevitables o necesarias frente al HTML

1. `/projects` y `/projects/[slug]` son páginas Astro reales, como aprobaste en Fase 1; el prototipo usa hash SPA.
2. El botón CV está oculto (`cv.available=false`), aunque aparece en el prototipo. El menú táctil deja solo «Más» mientras el CV siga deshabilitado.
3. El contenido real del repo prevalece: nombres/descripciones de proyectos, datos personales, educación y contacto sustituyen textos de muestra del prototipo. No se rellenaron campos pendientes.
4. Prácticas figura como **«Próximas prácticas · 1bot»**; no presenta responsabilidades ni fechas como hechos pasados.
5. En el detalle, el nombre «Sistema Bancario NovaBank», estado, rol, capturas y contenido vienen de la colección actual.
6. `astro:assets` añade atributos intrínsecos; para conservar los ratios visuales se declara `height:auto` junto con las proporciones del prototipo. El primer intento de resolver assets en la ruta dinámica no encontraba imágenes; ahora un mapa explícito por archivo hace visibles portada y galería.
7. El prototipo deja que el riel se cruce con títulos en tablet/escritorio. Para cumplir tu regla de no solapar, Astro oculta la etiqueta del riel hasta 800 px y, por encima, solo mientras intersecta texto o controles del contenido. El riel (línea y punto) permanece. **Esta es una diferencia intencional respecto al prototipo.**
8. Se añadió una regla táctil `hover:none` + `pointer:coarse` para los targets de «Más», filtros y enlaces del menú, con mínimo 44 px. Los estilos `:focus-visible` y `prefers-reduced-motion` se mantienen.

## Capturas por ancho

`I` = idéntico en composición, estilos e interacción visible; el contenido puede diferir como se detalla arriba. `D` = difiere en la etiqueta del riel (oculta durante colisión) además de las diferencias de contenido. Cada par enlaza primero el HTML y después Astro.

### 390 px

| Sección | Estado | HTML / Astro |
|---|---|---|
| Hero | D: texto de introducción del repo; CV oculto por bandera | [HTML](reference/hero-390.png) / [Astro](astro/hero-390.png) |
| Sobre mí | D: textos actuales y campos pendientes del repo | [HTML](reference/about-390.png) / [Astro](astro/about-390.png) |
| Tecnologías | I: categorías, niveles y filas | [HTML](reference/technologies-390.png) / [Astro](astro/technologies-390.png) |
| Proyectos destacados | D: nombres y descripciones actuales; captura visible en táctil | [HTML](reference/projects-featured-390.png) / [Astro](astro/projects-featured-390.png) |
| Índice de proyectos | D: nombre/descripción real de NovaBank y CV deshabilitado | [HTML](reference/projects-index-390.png) / [Astro](astro/projects-index-390.png) |
| Experiencia | D: 1bot se presenta como próxima práctica; campos sin confirmar quedan pendientes | [HTML](reference/experience-390.png) / [Astro](astro/experience-390.png) |
| Educación | D: instituciones y descripciones presentes en el repo | [HTML](reference/education-390.png) / [Astro](astro/education-390.png) |
| Contacto | D: datos de contacto actuales del repo | [HTML](reference/contact-390.png) / [Astro](astro/contact-390.png) |
| Página de proyecto | D: datos reales de NovaBank y ruta Astro; portada y galería cargan | [HTML](reference/project-detail-390.png) / [Astro](astro/project-detail-390.png) |

### 768 px

| Sección | Estado | HTML / Astro |
|---|---|---|
| Hero | D: texto del repo y CV deshabilitado; layout tablet coincide | [HTML](reference/hero-768.png) / [Astro](astro/hero-768.png) |
| Sobre mí | D: contenido actual; etiqueta del riel oculta para evitar el cruce del prototipo | [HTML](reference/about-768.png) / [Astro](astro/about-768.png) |
| Tecnologías | D: etiqueta del riel oculta; categorías y medidas iguales | [HTML](reference/technologies-768.png) / [Astro](astro/technologies-768.png) |
| Proyectos destacados | D: datos del repo; etiqueta del riel oculta y previews visibles en touch | [HTML](reference/projects-featured-768.png) / [Astro](astro/projects-featured-768.png) |
| Índice de proyectos | D: textos/nombre de NovaBank; etiqueta del riel oculta por el solape del HTML | [HTML](reference/projects-index-768.png) / [Astro](astro/projects-index-768.png) |
| Experiencia | D: texto futuro de 1bot y campos pendientes; sin solape de riel | [HTML](reference/experience-768.png) / [Astro](astro/experience-768.png) |
| Educación | D: contenido real; etiqueta del riel oculta | [HTML](reference/education-768.png) / [Astro](astro/education-768.png) |
| Contacto | D: datos actuales; etiqueta del riel oculta | [HTML](reference/contact-768.png) / [Astro](astro/contact-768.png) |
| Página de proyecto | D: campos actuales y ruta real; el HTML usa hash SPA | [HTML](reference/project-detail-768.png) / [Astro](astro/project-detail-768.png) |

### 1440 px

| Sección | Estado | HTML / Astro |
|---|---|---|
| Hero | D: introducción del repo y CV deshabilitado; composición de dial y nombre coincide | [HTML](reference/hero-1440.png) / [Astro](astro/hero-1440.png) |
| Sobre mí | D: textos del repo; etiqueta del riel se oculta si cruza el heading | [HTML](reference/about-1440.png) / [Astro](astro/about-1440.png) |
| Tecnologías | I: categorías, niveles y columnas | [HTML](reference/technologies-1440.png) / [Astro](astro/technologies-1440.png) |
| Proyectos destacados | D: nombres y resúmenes del repo; hover activa el preview de imagen | [HTML](reference/projects-featured-1440.png) / [Astro](astro/projects-featured-1440.png) |
| Índice de proyectos | D: título/descripción actuales; etiqueta del riel se oculta al cruzarse con el h1 | [HTML](reference/projects-index-1440.png) / [Astro](astro/projects-index-1440.png) |
| Experiencia | D: práctica próxima 1bot y datos académicos reales | [HTML](reference/experience-1440.png) / [Astro](astro/experience-1440.png) |
| Educación | D: contenido de las colecciones actuales | [HTML](reference/education-1440.png) / [Astro](astro/education-1440.png) |
| Contacto | D: enlaces y datos reales del repo; CV oculto | [HTML](reference/contact-1440.png) / [Astro](astro/contact-1440.png) |
| Página de proyecto | D: título, rol, estado y descripción del repo; estructura y proporciones replicadas | [HTML](reference/project-detail-1440.png) / [Astro](astro/project-detail-1440.png) |

## Interacciones portadas

- Dial y punto horario para `America/Guatemala`; avance del riel; desplazamiento de letras del hero; parallax del nombre; opacidad progresiva de palabras; preview que sigue el puntero en filas de proyectos.
- Efectos de puntero solo bajo `(hover:hover) and (pointer:fine)` y con movimiento reducido apagados. En táctil las capturas del índice se muestran permanentemente.
- «Más» usa `details/summary`; filtros del índice usan botones nativos con `aria-pressed`; rutas de detalle usan enlaces Astro normales.
- JavaScript entregado por build: `page.DTIbhfSr.js` = 2.18 kB sin gzip / 0.97 kB gzip. Los comportamientos de la referencia se portaron a JS nativo en lugar de React/Framer Motion. Los scripts inline de navegación/animación no aparecen como chunks adicionales.

## Límites de la verificación

Las capturas comparan estados sin interacción de puntero; el preview sigue el cursor en escritorio y se mantiene visible en dispositivos táctiles. Se comprobó el layout por capturas en 390/768/1440 px; las restantes anchuras tuvieron comprobaciones automatizadas de overflow, recorte de texto, targets táctiles y CLS inicial. No se ejecutaron Lighthouse ni pruebas de lectores de pantalla.

