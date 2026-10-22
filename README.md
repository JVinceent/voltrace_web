# voltrace_web

Marketing site for Voltrace. It's a static site with no build step, deployed on Vercel.

## Structure

The whole site is one scrolling page, `index.html`. The menu bar stays at the top and its links scroll to each section:

| Section | Anchor |
|---|---|
| Home (hero and photo collage) | `#home` |
| About (mission, vision, story) | `#about` |
| Services (IoT, AI and SaaS) | `#services` |
| Plans | `#plans` |
| Partnerships (and validation) | `#partnerships` |
| Team | `#team` |
| Contact (footer) | `#contact` |

`about.html`, `services.html`, `plans.html` and `partnerships.html` only redirect to those anchors, so old links like `/about` still work. `vercel.json` turns on `cleanUrls`, which is what makes `/about` find `about.html`.

## Still to fill in

- Team roles for John Vincent, Mhalik and Sofhia (Team section)
- Logos for CTI, the DevOps office and ASTEC. Their tiles show the name for now. Add the files to `images/partners/` and swap each `logo-text` span for an `<img>`, as the BatStateU tile does.

Partner logo sources: BatStateU and DTC from steerhub.batstateu.edu.ph; NEA and ERC from Wikimedia Commons. Every partner tile is labeled "Target partner": none of these partnerships are formalized yet.

## Links to fill in

These are still `#` placeholders in `index.html`:

- Discord (`aria-label="Voltrace on Discord"`)
- Calendar booking (`aria-label="Book a call with Voltrace"`)

LinkedIn, Facebook and the "Get in touch" email (voltrace.jumpers@gmail.com) come from the pitch deck's contact slide.

## Brand

Colors are defined in `styles.css` under `:root`. They follow the logo: orange accents on navy text.

| Name | Hex | Use |
|---|---|---|
| ink | `#0B1220` | text, the unit plan |
| sun | `#FFD862` | start of the brand gradient |
| amber | `#F7A84A` | light orange |
| orange | `#E86A10` | accents, prices, icons |
| orange-deep | `#B85410` | buttons (white text passes contrast) |
| cream | `#FFEAB1` | active menu item |

Fonts (Google Fonts):

- **Inter** for headings, body text, navigation and buttons, matching the reference site.
- **Unbounded** for the "Know where the power goes" tagline only. It's a free stand-in for Monument Extended, the deck's headline font.

## Images

`images/` holds web-ready copies. The originals in `assets/` stay untouched.

- `logo-mark.png`: `assets/Logo.png` with the white background removed
- `wordmark.png`: `assets/voltrace text.png`, trimmed
- `c-*.webp`: the nine home page collage tiles, all from `assets/image_files/` (including the HEICs, converted for browsers) except the exploded view, which comes from the pitch deck.
- `c-testbench.webp`, `c-test-analyzers.webp`: the transformer test board from the BatStateU testing office (original in `assets/image_files/test_bench.jpg`)
- `card-*.webp`: faint photos behind the service cards
- `team-*.webp`: team portraits from the pitch deck, cropped

Photos get a light wash in CSS, not in the files: add `wash` to the box around an image. The photo keeps its own colors under the deck's red-leaning gradient (yellow, coral, plum) at 55% strength; change the `opacity` on `.wash::after` to adjust it. Team portraits are left untouched. You can swap any photo without editing it. Tile positions are set by `.tile-a` to `.tile-i` in `styles.css`.

Prices on the plans page come from the deck's "Hardware-enabled SaaS" slide. The Pay in full / Installment toggle swaps the `data-full` and `data-installment` text in `index.html` (see `main.js`).

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
