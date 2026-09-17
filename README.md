# Brookbury — Heritage Oak

The brookbury.org rebuild, in **Heritage Oak** — the design direction the board chose out of the
five that were reviewed.

Heritage Oak reads like a charter document: symmetry, a crest, hairline double rules and engraved
small caps. It signals a neighborhood with standards and a long memory, which is what makes
covenants enforcement feel legitimate rather than fussy.

## Live

**https://brookbury.github.io/**

Published from `main` (root) via GitHub Pages — pushing to `main` redeploys.

The repository is named `brookbury.github.io` to match the `brookbury` organisation that owns it,
which is what makes Pages serve it from the root rather than a `/repo-name/` subpath.

> **Not yet on the custom domain.** There is deliberately no `CNAME` file in this repo. Adding one
> makes GitHub Pages serve at brookbury.org and stop serving the github.io address, so it must not
> land until DNS for brookbury.org is live at Cloudflare and pointed here. Adding it early takes
> the site offline.

## Run it locally

No build step, no dependencies. Either open `index.html` directly in a browser, or serve it from
the project root:

```bash
python3 -m http.server 4173 --directory .
```

Then visit `http://localhost:4173/`.

## How it's put together

```
index.html            the whole site — one page, one stylesheet
assets/css/site.css   tokens, structure, the Heritage Oak treatment, responsive rules
assets/images/        hero and event photography
assets/docs/          the real governing documents, served from this repo
overview.html         redirect stub (see below)
```

`site.css` is deliberately ordered: design tokens, then layout structure, then the Heritage Oak
styling on top of it, then the responsive overrides last. The responsive block matches the
treatment above it at equal specificity and wins on source order, so **new rules belong before it,
not after**.

Colours, type, radii and rhythm are all CSS custom properties on `:root`. Retuning the palette or
the type scale should not require touching a single component rule.

## Real material now in place

- **The Covenants and By-Laws download.** Both PDFs were pulled off the current Hostway site and
  are served from `assets/docs/`. These are the real recorded documents, not placeholders.

## What still needs real material

- **The board roster is not published.** The section was removed rather than ship the nine names
  carried over from a page last updated in 2018. It goes back in once the secretary confirms the
  current roster — the `.board-grid` and `.member` styles are still in `site.css` waiting for it.
- **There is no contact email.** The old site published a personal Gmail belonging to someone not
  on the roster; that has not been carried over. The contact section currently points residents at
  the printed directory. It needs a real association-owned address.
- **No Architectural Review Request form.** The covenants require committee approval before
  exterior work, but no such form exists on the current site, so the download was removed rather
  than link to nothing. Restore it if a copy surfaces.
- **Photography is illustrative.** All four images are generated placeholders standing in for a
  commissioned shoot. They must be replaced before this is presented as a finished site.
- **Event copy is illustrative.** The three spring events are real (garage sale, egg hunt, grill
  and chill); the descriptive sentences under them were written to show how the layout handles
  detail. No dates or fees were invented.
- **The map is schematic.** The plat map is a drawn SVG, not the recorded plat, so the prototype
  still runs entirely offline. The covenants reference the real plat in Plat Book 1, Washington
  County records.

### overview.html

The five-direction contact sheet is gone. `overview.html` is now a one-line redirect to
`index.html`, kept only so links already circulated to the board still land somewhere useful.
Delete it once those have aged out:

```bash
git rm overview.html
```
