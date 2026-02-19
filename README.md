# Syncor Documentation Site

The official documentation site for **Syncor**, a B2B procurement portal. Built with [Docusaurus](https://docusaurus.io/) for the static site and [Decap CMS](https://decapcms.org/) for a web-based content editor — so non-technical team members can create and update documentation without touching code.

---

## Local Development Setup

### Prerequisites
- Node.js 18 or later
- npm 8 or later
- A GitHub account with access to this repository

### 1. Clone and install

```bash
git clone https://github.com/jackie-codecraft/syncor-docs.git
cd syncor-docs
npm install
```

### 2. Start the dev server

```bash
npm start
```

The site will open at [http://localhost:3000](http://localhost:3000). Changes to Markdown files and config are hot-reloaded automatically.

### 3. Build for production

```bash
npm run build
```

The static output is placed in the `build/` directory and can be served from any static host.

---

## Using the CMS

The Decap CMS admin interface lives at `/admin` on your deployed site (e.g. `https://docs.syncor.io/admin`).

### Production (deployed site)

1. Navigate to `https://docs.syncor.io/admin` (or your actual deployment URL).
2. Click **Login with GitHub**. You must have write access to this repository.
3. Complete GitHub OAuth authentication.
4. You'll land on the CMS dashboard with two collections:
   - **Sections** — manage sidebar groups (maps to `_category_.json` files)
   - **Documentation Pages** — manage individual doc pages (maps to `.md` files)

### Creating content

#### Create a Section first
1. Go to **Sections → New Section**.
2. Enter the **Section Name** (e.g. *"Integrations"*) and a **Sidebar Position** (lower numbers appear first).
3. Save. This creates `docs/integrations/_category_.json` in the repository.

#### Then create Pages in that Section
1. Go to **Documentation Pages → New Page**.
2. Fill in the **Title**, and set the **Section Slug** to match the section folder name exactly (e.g. `integrations`).
3. Write content in the markdown editor.
4. Save. This creates `docs/integrations/your-page-slug.md` in the repository.

Docusaurus automatically picks up the new files on next build/deploy.

---

## Local CMS Development (without OAuth)

To run the CMS locally without needing GitHub OAuth:

### Terminal 1 — Decap proxy server
```bash
npx decap-server
```
This starts a local backend at `http://localhost:8081` that writes directly to your local filesystem.

### Terminal 2 — Docusaurus dev server
```bash
npm start
```

### Enable local backend
In `static/admin/config.yml`, uncomment:
```yaml
local_backend: true
```

Then navigate to [http://localhost:3000/admin](http://localhost:3000/admin). You can edit docs locally without any GitHub authentication. Files are written directly to your working directory.

> **Remember:** revert `local_backend: true` before committing/deploying.

---

## Deployment

### Netlify (Recommended)

Netlify is the easiest deployment option — it handles the GitHub OAuth flow for Decap CMS out of the box with zero configuration.

1. Push this repo to GitHub (done ✅).
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
3. Connect your GitHub account and select `jackie-codecraft/syncor-docs`.
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Deploy. Netlify assigns a `.netlify.app` subdomain automatically.
6. (Optional) Add your custom domain (`docs.syncor.io`) in **Site settings → Domain management**.
7. In Netlify dashboard → **Site settings → Identity**, enable **Identity** and set **Git Gateway** — this powers the CMS OAuth.

### GitHub Pages

1. In `docusaurus.config.js`, set `baseUrl` to `'/syncor-docs/'` and `deploymentBranch` to `'gh-pages'`.
2. Run `npm run deploy` (requires `GH_TOKEN` env var or SSH key).
3. For CMS OAuth on GitHub Pages, you'll need a separate OAuth proxy (e.g. [decap-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider) deployed on a small server or serverless function).

### Cloudflare Pages

1. Connect the repo in Cloudflare Pages.
2. Build command: `npm run build`, output directory: `build`.
3. For CMS OAuth, deploy Cloudflare Workers with the [decap-cms-cloudflare-pages](https://github.com/i40west/netlify-cms-cloudflare-pages) OAuth provider.

---

## Repository Structure

```
syncor-docs/
├── docs/                          # Documentation content
│   ├── getting-started/
│   │   ├── _category_.json        # Section definition
│   │   ├── intro.md
│   │   └── logging-in.md
│   ├── procurement/
│   ├── catalogue/
│   └── administration/
├── src/
│   └── css/custom.css             # Brand colours — update here
├── static/
│   └── admin/
│       ├── index.html             # Decap CMS entry point
│       └── config.yml             # CMS collections configuration
├── docusaurus.config.js           # Site-wide configuration
└── sidebars.js                    # Auto-generated sidebar config
```

---

## How Sections Work

Each folder under `docs/` is a **section**. The `_category_.json` file inside the folder defines how it appears in the sidebar:

```json
{ "label": "Getting Started", "position": 1 }
```

Via the CMS: creating a new **Section** entry with slug `my-section` generates `docs/my-section/_category_.json`.

## How Pages Work

Each `.md` file inside a section folder is a **page**. The frontmatter controls the sidebar:

```md
---
title: My Page Title
sidebar_position: 1
description: One-line description shown in search results
---
```

Via the CMS: creating a new **Documentation Page** and setting **Section Slug** to `my-section` generates `docs/my-section/page-slug.md`.

---

## Branding

The primary brand colour is currently set to a placeholder blue (`#1a56db`). Update the CSS variables in `src/css/custom.css` to match your final Syncor brand palette.

Use a tool like [Docusaurus color generator](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima) to calculate the full range of tints from your primary hex colour.

---

## Support

- Docusaurus docs: [docusaurus.io/docs](https://docusaurus.io/docs)
- Decap CMS docs: [decapcms.org/docs](https://decapcms.org/docs)
- Repository: [github.com/jackie-codecraft/syncor-docs](https://github.com/jackie-codecraft/syncor-docs)
