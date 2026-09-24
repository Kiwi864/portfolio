# Portfolio — Samuel Tamaš

Personal portfolio with two worlds: **Design** and **Frontend**, joined by a splitter landing and a shared About page.

Built with **Vue 3 + Vite** and `vue-router`.

## Structure
- `/` — splitter landing (choose Design or Frontend)
- `/design` — design work, each project opens a case study at `/design/:slug`
- `/frontend` — frontend projects (live: medium, kocky, workspace @ oryks.org)
- `/about` — bio, experience, skills, contact

## Develop
```bash
npm install
npm run dev      # start Vite dev server
npm run build    # production build to dist/
npm run preview  # preview the build
```

## Assets
Project imagery lives in `src/assets/projects`; motion-graphics clips in `public/videos`.
