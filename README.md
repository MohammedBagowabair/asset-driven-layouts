# Autumn Rise

A demonstration page for a yoga and wellbeing retreat in Mallorca. The site is a static TanStack Start build published with GitHub Pages at [https://mohammedbagowabair.github.io/asset-driven-layouts/](https://mohammedbagowabair.github.io/asset-driven-layouts/).

## Development

Requires [Bun](https://bun.sh) (the lockfile is `bun.lock`). Node.js 22 also works for the Vite build.

```sh
bun install
bun run dev
```

The dev server uses the GitHub Pages base path, so open `http://localhost:8080/asset-driven-layouts/`.

```sh
bun run build
bun run test
```

## GitHub Pages

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the site and deploys it with the official Pages actions. The same build is also published to the `gh-pages` branch.

In the repository settings, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
