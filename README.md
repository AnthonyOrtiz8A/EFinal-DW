# Examen Final · Desarrollo Web 036 · Variante A (productos)

Proyecto inicial de la **III Serie**. Compila y se ejecuta, pero las pantallas **no están conectadas a la API**:
su trabajo es completar la lógica marcada con comentarios `TODO` numerados.

## Cómo empezar

```bash
npm install
cp .env.example .env
npm run dev
```

La app abre en `http://localhost:5173`. La dirección de la API (`https://dummyjson.com`) ya está en `src/config.ts`.
Usuario de prueba de la API: `emilys` / `emilyspass`.

## Cómo encontrar lo que debe completar

En VS Code use **Buscar en archivos** (Ctrl+Mayús+F) con la palabra `TODO`. Cada comentario indica el número
del requisito del enunciado y qué debe hacer. Los archivos con TODO son:

| TODO | Archivo |
| --- | --- |
| 1.1 | `src/pages/LoginPage.tsx`, `src/services/authService.ts` |
| 1.2 | `src/store/authStore.ts` |
| 1.3 | `src/services/api.ts`, `src/services/authService.ts` |
| 1.4 | `src/components/ProtectedRoute.tsx`, `src/App.tsx` |
| 1.5, 2.3, 4.4, 5.2, 6.1 | `src/pages/ProductsPage.tsx` |
| 2.1, 3.1, 4.3, 4.4 | `src/services/productService.ts` |
| 2.2, 3.1, 4.3, 4.4 | `src/hooks/useProducts.ts` |
| 3.1, 3.2, 3.3 | `src/pages/ProductDetailPage.tsx` (`fichaText` ya viene hecha en `src/utils/ficha.ts`) |
| 4.1, 4.2, 4.3 | `src/components/ProductForm.tsx` |
| 5.1 | `src/utils/errorHandler.ts` |
| 5.3 | `src/App.tsx` |

Ya vienen hechos y no debe modificarlos: las tarjetas, la paginación, la página 404, el `ErrorBoundary`,
los tipos de la API (`src/types`), la dirección de la API (`src/config.ts`) y los componentes de shadcn/ui.

## Comandos

| Comando | Para qué |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compila TypeScript y genera `dist/` (debe terminar sin errores) |
| `npm run lint` | Revisa el código con ESLint |

## Al entregar

1. Suba su trabajo a **su propio repositorio** de GitHub. Solo se califican los commits hasta las **18:00 del 7 de noviembre de 2026 (hora de Guatemala)**.
2. Reemplace este README por el suyo: descripción, instalación, tecnologías y capturas de pantalla.
3. El despliegue es libre (Vercel, Netlify o similar). Ponga el enlace del sitio en su README y en la descripción del repositorio. El archivo `vercel.json` ya permite abrir rutas internas directamente.
4. Entregue en Canvas el enlace de su repositorio.
