# Hola, mundo

## Problema

Este proyecto es la primera prueba del espacio «Proyectos de programación»:
verificar que el flujo estándar de trabajo funciona de principio a fin —
crear el proyecto, escribir la primera función con pruebas, revisarlo y
publicarlo en GitHub — antes de usarlo con proyectos reales.

## Alcance (v0.1.0)

- Aplicación web mínima en TypeScript (Node.js, sin framework).
- La página principal saluda: muestra «¡Hola, mundo!» y, si escribes tu
  nombre en el formulario, «¡Hola, {nombre}!».
- El saludo vive en una función propia (`greet` en `src/greeting.ts`), no
  en el servidor.
- Pruebas unitarias con el runner de pruebas de Node.js.

## Qué queda fuera (por ahora)

- Cualquier función más allá del saludo (sin base de datos, sin cuentas,
  sin APIs externas).
- Despliegue público (GitHub Pages, hosting): la app corre en local.

## Estructura

```text
package.json            # Scripts dev / build / test / lint
tsconfig.json           # TypeScript en modo strict
src/
  greeting.ts           # La función del saludo
  server.ts             # Servidor HTTP y la página
  index.ts              # Punto de entrada
tests/
  greeting.test.ts      # Pruebas del saludo
```

## Requisitos

- [Node.js 24](https://nodejs.org/) (ver `.nvmrc`)
- npm (viene con Node)
- Git

## Cómo instalar y ejecutar

```bash
git clone https://github.com/jf-pp/hola_mundo.git
cd hola_mundo
npm install
npm run dev
```

Abre http://localhost:3000 (o el puerto de la variable `PORT`). Escribe tu
nombre en el formulario y pulsa «Saludar».

Para correr la versión compilada:

```bash
npm run build
npm start
```

## Cómo correr las pruebas y el linter

```bash
npm test    # Compila y corre las pruebas
npm run lint
npm run format   # Revisa el formato con Prettier
```
