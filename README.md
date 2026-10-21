# voltrace_web

Marketing site for Voltrace. It's a static site with no build step, deployed on Vercel.

## Pages

| Page | File | Status |
|---|---|---|
| Home | `index.html` | Hero done |
| About | `about.html` | To do |
| Services | `services.html` | To do |
| Plans | `plans.html` | To do |
| Partnerships | `partnerships.html` | To do |

`vercel.json` turns on `cleanUrls`, so `/about` serves `about.html`.

## Links to fill in

These are `#` placeholders in `index.html`:

- Discord (`aria-label="Voltrace on Discord"`)
- LinkedIn (`aria-label="Voltrace on LinkedIn"`)
- Facebook (`aria-label="Voltrace on Facebook"`)
- Calendar booking (`aria-label="Book a call with Voltrace"`)
- "Get in touch" points to `#contact` until the contact section exists

## Brand

Colors come from the Voltrace pitch deck and are defined in `styles.css` under `:root`:

| Name | Hex |
|---|---|
| ink | `#0B1220` |
| sun | `#FFD862` |
| orange | `#EF9655` |
| coral | `#E15F4B` |
| plum | `#733045` |
| cream | `#FFEAB1` |

Fonts (Google Fonts):

- **Unbounded** for headings, the tagline and buttons. It's a free stand-in for Monument Extended, the deck's headline font.
- **Inter** for body text and navigation.

## Images

`images/` holds web-ready copies. The originals in `assets/` stay untouched.

- `logo-mark.png`: `assets/Logo.png` with the white background removed
- `wordmark.png`: `assets/voltrace text.png`, trimmed
- `hero-1200.webp`, `hero-2400.webp`: `assets/image_files/assemble_3.HEIC` converted for browsers

The brand gradient over the hero photo is done in CSS (`.hero-photo::after`), so you can swap the photo without editing the image.

`.vercelignore` keeps `assets/`, `references/` and the pitch deck PDF out of deployments.

## Run locally

```sh
npx serve .
```

## Deploy

```sh
npx vercel        # preview
npx vercel --prod # production
```

Or push to GitHub and import the repo at https://vercel.com/new (Framework Preset: **Other**, no build command).
