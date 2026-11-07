# Catálogo de recetas

Aplicación web para iniciar sesión, explorar recetas, consultar sus detalles y crear o eliminar recetas.

## Cómo empezar

```bash
npm install
npm run dev
```

La app abre en `http://localhost:5173`. La dirección de la API (`https://dummyjson.com`) está en `src/config.ts`.
Puede iniciar sesión con el usuario de prueba `emilys` y la contraseña `emilyspass`.

## Funcionalidades

- Autenticación con sesión persistente y renovación de tokens.
- Catálogo paginado y búsqueda sincronizados con la URL.
- Detalle de recetas y descarga de imagen y ficha.
- Creación con validación de campos y carga opcional de imágenes; eliminación con confirmación.
- Estados de error con mensajes en español y opción para reintentar.

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
