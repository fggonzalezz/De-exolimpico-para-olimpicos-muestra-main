# Olimpiada Matemática Uruguay - De Exolímpicos para Olímpicos

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)

Sitio web oficial de la **Com-Partida de Matemática del Uruguay**, dedicado a la difusión, organización y participación en competencias matemáticas nacionales e internacionales.

## 🎯 Descripción

Este proyecto es una plataforma educativa completa que proporciona:

- 📅 **Calendario de competencias** 2025 con cuenta regresiva en tiempo real
- 👥 **Información de equipos** uruguayos (IMO, Iberoamericana, Cono Sur, PAGMO)
- 📚 **Material de estudio** organizado por niveles y categorías
- 🎓 **Seminarios de ex-olímpicos** con videos y PDFs descargables
- 📊 **Resultados históricos** y estadísticas
- 🎨 **Diseño responsive** y accesible

## 🚀 Tecnologías

- **Framework:** Next.js 15.2 (App Router)
- **Lenguaje:** TypeScript 5.x
- **Estilos:** Tailwind CSS 3.4
- **UI Components:** Radix UI + shadcn/ui
- **Testing:** Vitest + Testing Library
- **Analytics:** Vercel Analytics + Speed Insights
- **Deployment:** Netlify
- **Code Quality:** Biome (linting & formatting)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/fggonzalezz/De-exolimpico-para-olimpicos-muestra-main.git

# Entrar al directorio
cd De-exolimpico-para-olimpicos-muestra-main

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

## 🛠️ Comandos Disponibles

```bash
# Desarrollo local
npm run dev           # Inicia servidor en http://localhost:3000

# Build de producción
npm run build         # Compila el proyecto

# Iniciar producción
npm start             # Sirve el build de producción

# Testing
npm test              # Ejecuta tests en modo watch
npm run test:ui       # Abre interfaz de Vitest
npm run test:coverage # Genera reporte de cobertura

# Linting
npm run lint          # Verifica código con Biome
```

## 📁 Estructura del Proyecto

```
.
├── src/
│   ├── app/                    # Páginas y rutas (App Router)
│   │   ├── page.tsx           # Página principal
│   │   ├── layout.tsx         # Layout principal
│   │   ├── error.tsx          # Página de error mejorada
│   │   ├── calendario-2025/   # Calendario de competencias
│   │   ├── equipos-2025/      # Equipos uruguayos
│   │   ├── nacional/          # Olimpiada Nacional
│   │   │   ├── [year]/        # Rutas dinámicas por año
│   │   │   ├── primera/       # Primera instancia
│   │   │   └── final/         # Final nacional
│   │   └── seminarios-exolimpicos/ # Seminarios y videos
│   │
│   ├── components/            # Componentes reutilizables
│   │   ├── layout/           # Header, Footer, MobileMenu
│   │   ├── competitions/     # Tabla de competencias
│   │   ├── ui/               # Componentes shadcn/ui
│   │   ├── ErrorBoundary.tsx # Manejo de errores React
│   │   └── GoogleDrivePDFViewer.tsx # Visor de PDFs
│   │
│   ├── data/                 # Datos estáticos
│   │   ├── competitions.ts   # Competencias 2025
│   │   └── menu.ts           # Estructura del menú
│   │
│   └── lib/                  # Utilidades
│       ├── seo.ts            # Sistema SEO centralizado
│       └── utils.ts          # Helpers generales
│
├── __tests__/                # Tests
│   ├── components/           # Tests de componentes
│   ├── lib/                  # Tests de utilidades
│   └── setup.ts              # Configuración de tests
│
├── public/                   # Archivos estáticos
│   └── images/               # Imágenes y logos
│
├── vitest.config.ts          # Configuración de Vitest
├── tailwind.config.ts        # Configuración de Tailwind
├── next.config.js            # Configuración de Next.js
└── tsconfig.json             # Configuración de TypeScript
```

## 🧪 Testing

El proyecto incluye tests unitarios para componentes y utilidades críticas:

```bash
# Ejecutar todos los tests
npm test

# Ver interfaz interactiva
npm run test:ui

# Generar reporte de cobertura
npm run test:coverage
```

Los tests cubren:
- ✅ Componentes UI (GoogleDrivePDFViewer)
- ✅ Utilidades SEO (canonicalUrl, buildPageMetadata)
- ✅ Validación de datos
- ✅ Error handling

## 🎨 Características de UI/UX

### Diseño Responsive
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menú hamburguesa en móvil
- Tablas optimizadas para pantallas pequeñas

### Accesibilidad
- Skip to main content
- ARIA labels en elementos interactivos
- Contraste de colores WCAG AA
- Navegación por teclado
- Semántica HTML correcta

### Performance
- Lazy loading de imágenes
- Prefetch de DNS para recursos externos
- Optimización de fuentes con `next/font`
- Code splitting automático
- Analytics no bloqueante

## 🔍 SEO

El proyecto implementa un sistema SEO avanzado:

- ✅ Metadata dinámica por página
- ✅ OpenGraph y Twitter Cards
- ✅ Sitemap.xml generado automáticamente
- ✅ Robots.txt configurado
- ✅ JSON-LD schemas (Organization, WebSite, FAQ, Events)
- ✅ URLs canónicas
- ✅ Keywords optimizadas
- ✅ Imágenes con alt text descriptivo

## 🌐 Deployment

### Netlify (Producción)

El proyecto está configurado para deploy en Netlify:

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"
```

### Variables de Entorno

Crear archivo `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://exolimpicos-lacompartida.com
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución

- Usar TypeScript para todo código nuevo
- Seguir las convenciones de Biome (ejecutar `npm run lint`)
- Escribir tests para nuevas funcionalidades
- Actualizar documentación cuando sea necesario
- Mantener accesibilidad en componentes UI

## 📄 Licencia

Copyright © 2025 Com-Partida de Matemática del Uruguay. Todos los derechos reservados.

## 👥 Equipo

Sitio web desarrollado por ex-olímpicos uruguayos con ♥

- **Organización:** Com-Partida de Matemática del Uruguay
- **Desde:** 1992
- **Contacto:** info@compartidauruguay.org

## 🔗 Enlaces

- [Sitio Oficial](https://com-partidauruguay.weebly.com/)
- [Instagram](https://www.instagram.com/olim_mat_uy/)
- [Facebook](https://www.facebook.com/olimpiadamatematicauy)
- [Twitter/X](https://x.com/olimpiadamat_uy)

---

**¡Juntos construimos el futuro de las matemáticas en Uruguay!** 🇺🇾🔢 
