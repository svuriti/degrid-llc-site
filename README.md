# DE GRID LLC — Single-page Site

A minimal, elegant single-page React site with Tailwind CSS.

## Local dev

```bash
npm i
npm run dev
```

To test the contact form locally, either deploy a preview on Vercel or run `vercel dev` so that the `/api/send-inquiry` endpoint is available. A plain `npm run dev` session will serve the UI only and form submissions will respond with an error.

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

## Zoho email integration

The contact form posts to `/api/send-inquiry`, which relays the message through Zoho's SMTP service using Nodemailer. Configure these environment variables in Vercel (or your hosting platform) before deploying:

| Variable | Required | Example |
| --- | --- | --- |
| `ZOHO_SMTP_USER` | ✅ | `contact@degridllc.com` |
| `ZOHO_SMTP_PASS` | ✅ | *app-specific password from Zoho* |
| `CONTACT_RECIPIENT` | ➖ | Defaults to `ZOHO_SMTP_USER` |
| `CONTACT_FROM` | ➖ | Defaults to `ZOHO_SMTP_USER` |
| `ZOHO_SMTP_HOST` | ➖ | `smtp.zoho.com` |
| `ZOHO_SMTP_PORT` | ➖ | `465` |
| `ZOHO_SMTP_SECURE` | ➖ | `true` for port 465, `false` for 587 |

After setting the variables, redeploy the site. Successful submissions surface a green confirmation message; failures show an actionable error.
