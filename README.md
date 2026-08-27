# Brookbury — Heritage Oak

A prototype of the brookbury.org redesign in **Heritage Oak**, the design direction the board
chose out of the five that were reviewed.

Heritage Oak reads like a charter document: symmetry, a crest, hairline double rules and
engraved small caps. It signals a neighborhood with standards and a long memory, which is what
makes covenants enforcement feel legitimate rather than fussy. Its known trade-off is that it
can read formal — worth watching as the community's demographics shift.

Content, board names, events and document titles come from the current brookbury.org, so the
prototype is judged against real material.

## Live

**https://cjones08.github.io/brookbury-design-preview/**

Published from `main` (root) via GitHub Pages — pushing to `main` redeploys.

## Run it locally

No build step, no dependencies. Either open `index.html` directly in a browser, or serve it
from the project root:

```bash
python3 -m http.server 4173 --directory .
```

Then visit `http://localhost:4173/`.

## How it's put together

```
index.html            the whole site — one page, one stylesheet
assets/css/site.css   tokens, structure, the Heritage Oak treatment, responsive rules
assets/images/        hero and event photography
overview.html         redirect stub (see below)
```

`site.css` is deliberately ordered: design tokens, then layout structure, then the Heritage Oak
styling on top of it, then the responsive overrides last. The responsive block matches the
treatment above it at equal specificity and wins on source order, so **new rules belong before
it, not after**.

Colours, type, radii and rhythm are all CSS custom properties on `:root`. Retuning the palette
or the type scale should not require touching a single component rule.

### overview.html

The five-direction contact sheet is gone. `overview.html` is now a one-line redirect to
`index.html`, kept only so links already circulated to the board still land somewhere useful.
Delete it once those have aged out:

```bash
git rm overview.html
```

## What still needs real material

- **Photography is illustrative.** The hero and event images are generated placeholders chosen
  to feel plausible for an established Fayetteville neighborhood. A real build should replace
  them with commissioned photography of Brookbury residents, streets and events. The plat map
  remains a schematic SVG so the prototype still runs entirely offline.
- **The contact email is a placeholder.** The current site publishes a personal Gmail address in
  the nav; this prototype uses a generic "Email the board" action instead. Worth deciding whether
  the real site should expose a personal address.
- **Event copy is illustrative.** The three spring events are real (garage sale, egg hunt, grill
  and chill); the descriptive sentences under them were written to show how the layout handles
  detail. No dates or fees were invented.
- **Documents do not download.** The covenants, by-laws and architectural review links are inert
  until the real PDFs are hosted.
- **The map is schematic.** The current site says maps are being updated — that status is shown
  honestly on the page.
