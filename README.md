# DE GRID LLC — Single-page Site

A minimal, elegant single-page React site with Tailwind CSS.

## Local dev

```bash
npm i
npm run dev
```

## Deploy to GitHub Pages (automatic)

1. Create a **new public repo** on GitHub (e.g., `degridllc-site`).
2. Push this project to the repo's **main** branch.
3. In GitHub, go to **Settings → Pages** and set:
   - **Source**: GitHub Actions
4. On the next push to `main`, the site will build and deploy automatically at the Pages URL.
   - To use a **custom domain** (e.g., `degridllc.com`), add your domain in **Settings → Pages → Custom domain**, then set DNS `CNAME` to `<username>.github.io`.

## Manual build (optional)

```bash
npm run build
# output is in dist/
```

## Customize

- Replace `/public/logo-degrid.png` with your final logo (same filename to keep references).
- Update copy in `src/App.jsx`.
