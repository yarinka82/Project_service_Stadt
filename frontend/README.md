# StadtService - Frontend

Frontend of StadtService.de: a catalog of local service providers in Frankfurt am Main, München and Würzburg.

## Tech stack

- React 19, TypeScript
- Vite 8 (with React Compiler)
- Redux Toolkit, React Router 7
- CSS Modules
- axios

## Requirements

- Node.js 20.19+ or 22.13+
- npm

## Getting started

    cd frontend
    npm install
    npm run dev

The app runs at the address shown in the terminal (by default http://localhost:5173).

## Scripts

| Command           | Description                                     |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Start the development server                    |
| `npm run build`   | Type-check and build for production into `dist` |
| `npm run preview` | Serve the production build locally              |
| `npm run lint`    | Run ESLint                                      |

## Data source: mock data or backend

The app supports two modes, switched by the `USE_MOCK` flag in `src/api/api.ts`.

**Mock data (current stage, demo version)**

- `USE_MOCK = true`
- Cities, categories and providers come from `src/api/mockData.ts`; no backend is needed.
- All providers, addresses, phone numbers and photos are fictional (demo photos are in `src/assets/img/img_demo`).

**Backend**

- `USE_MOCK = false`
- Start the backend first (see the root README).
- In development, requests to `/aglomerations`, `/categories` and `/companies` are proxied to `http://localhost:3001` (see `vite.config.ts`).

When the app is connected to the backend for good, the `USE_MOCK` flag, all `if (USE_MOCK)` branches and `mockData.ts` are to be removed.

## Project structure

    src/
      api/          API requests and mock data
      assets/       Images, icons, fonts
      components/   Reusable UI components
      constants/    Labels, icon maps
      pages/        Pages (one folder per route)
      store/        Redux slices, selectors and async operations
      utils/        Helper functions

## Deployment (demo)

The demo is deployed on Netlify from the `dist` folder (`npm run build`).
`public/_redirects` sends all routes to `index.html`, so that reloading any page works.
