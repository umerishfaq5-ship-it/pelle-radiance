# Pelle Radiance — Dr. Tasneem Shakir

Source for the clinic website at https://drtasneemshakir.com/.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui components
- React Router (pages: home, category, treatment)

## Project layout

- `src/pages/` — route pages (`Index`, `Category`, `Treatment`, `NotFound`)
- `src/components/site/` — site sections (Nav, Hero, Services, Doctor, BeforeAfter, Footer)
- `src/data/services.ts` — services and treatments content
- `src/assets/` — images

## Local development

```sh
npm install
npm run dev      # start dev server
npm run build    # production build
npm test         # run tests
```
