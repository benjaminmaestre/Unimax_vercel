# Módulo privado: precios de concreto

Este módulo está desarrollado, pero no debe publicarse hasta que el cliente contrate la sección.

La carpeta empieza por `_`, por lo que Next.js no genera una ruta pública. Mientras permanezca aquí:

- no aparece en el build como página;
- no está enlazado desde navegación ni footer;
- no está activo en `app/sitemap.ts`;
- la calculadora puede mantenerse en `components/concrete-volume-calculator.tsx` sin exposición pública.

## Activación futura

1. Mover `app/_precios/concreto-premezclado-por-m3` a `app/precios/concreto-premezclado-por-m3`.
2. Descomentar la entrada correspondiente en `app/sitemap.ts`.
3. Agregar el enlace comercial a navegación, footer y páginas de servicio contratadas.
4. Ejecutar lint, TypeScript y build antes de desplegar.

