# Usama Puward — Portfolio

Personal portfolio built with [Next.js](https://nextjs.org) (App Router), React 19 and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Create a `.env` file in the project root:

```
NEXT_PUBLIC_GEMINI_API_KEY=...
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Structure

- `src/app/` — routes (`/`, `/projects`, `/certifications`, `/experiences`, `/contact`) and the root layout
- `src/views/` — page components rendered by each route
- `src/components/` — shared layout and UI components
- `src/constants/portfolioData.js` — portfolio content
