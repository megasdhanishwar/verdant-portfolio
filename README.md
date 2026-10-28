# Verdant Portfolio — React + Vite + Tailwind CSS

A responsive dark-emerald portfolio featuring a splash screen, animated hero, scroll reveals, skills, projects, and contact form UI.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite displays (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Customize

- `src/data/content.js`: update name, email, social links, skills, and project information.
- `src/sections/`: individual portfolio sections.
- `src/components/`: reusable UI components.
- `src/styles.css`: Tailwind import and custom design styling.

**Contact form:** This starter uses a validated `mailto:` workflow. It opens the visitor's email app with a prefilled message. To send email directly from the site, connect a backend or form provider (such as EmailJS, Formspree, or a serverless endpoint) and implement spam protection. Replace `hello@example.com` before deployment.

**Projects:** Project entries are sample portfolio descriptions. Add your own live demos, repository URLs and verified project details before publishing.

**Splash screen:** Displayed for approximately 1.4 seconds on each page load. Respect users' reduced-motion preferences when adding new animations.
