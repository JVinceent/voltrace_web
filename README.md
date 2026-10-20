# voltrace_web

A minimal static "Hello, world" site, ready to deploy on Vercel. It has no build step.

## Files

- `index.html`: the page
- `styles.css`: styles, with light and dark mode
- `favicon.svg`: site icon
- `vercel.json`: Vercel config (clean URLs, so `/about` serves `about.html`)

## Run locally

Open `index.html` in a browser, or serve the folder:

```sh
npx serve .
```

## Deploy

**With the CLI:**

```sh
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

**From Git:** push this folder to GitHub, GitLab or Bitbucket, then import the repo at https://vercel.com/new. Set the Framework Preset to **Other** and leave the build command and output directory empty.

## Using it as a template

On GitHub, open the repo's **Settings** and turn on **Template repository**. New projects can then start from **Use this template**.
