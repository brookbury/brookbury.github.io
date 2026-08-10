# Brookbury — Design Direction Preview

A stakeholder-facing prototype for the brookbury.org redesign. One sample site, five
interchangeable design profiles, switchable live from a toolbar.

The point of this build is a **brand/aesthetic decision**, not a final site. Content, board
names, events and document titles are pulled from the current brookbury.org so the directions
are judged against real material.

## Live

**https://cjones08.github.io/brookbury-design-preview/overview.html**

Published from `main` (root) via GitHub Pages — pushing to `main` redeploys.

## Run it locally

No build step, no dependencies. Either open `index.html` directly in a browser, or serve it
from the project root:

```bash
python3 -m http.server 4173 --directory .
```

Then visit `http://localhost:4173/overview.html`.

## The two views

| File | What it's for |
| --- | --- |
| `overview.html` | Contact sheet — all five directions side by side, with positioning notes. Start here. |
| `index.html` | The full sample site with the profile switcher at the bottom. |

### Switcher controls

- Click a profile, or press `1`–`5`
- `←` / `→` step through directions
- `N` opens the notes panel (positioning, typography, trade-off)
- `H` hides the toolbar for clean screenshots
- `?profile=ozark` in the URL deep-links a direction; `&chrome=off` hides the toolbar

## The five profiles

| # | Profile | Direction |
| --- | --- | --- |
| 01 | **Heritage Oak** | Established and traditional — crest, symmetry, engraved small caps |
| 02 | **Ozark Modern** | Warm regional contemporary — clay and moss, heavy geometric type, soft radii |
| 03 | **Front Porch** | Friendly editorial — newsletter grid, featured events, warm serif |
| 04 | **Civic Clarity** | Functional and documents-first — dense nav, tables, high contrast |
| 05 | **Quiet Luxe** | Minimal and premium — oversized light serif, whitespace, hairline rules |

## How it's put together

```
index.html                  sample site markup — identical for all five profiles
overview.html               contact-sheet comparison
assets/css/base.css         structure + design tokens, no aesthetic commitments
assets/css/profiles/*.css   one file per direction, scoped to [data-profile="id"]
assets/css/switcher.css     the review toolbar (namespaced .dsw-*, never inherits a profile)
assets/js/profiles.js       profile metadata: names, swatches, positioning, trade-offs
assets/js/switcher.js       toolbar behaviour, URL params, keyboard shortcuts
```

All five profile stylesheets load at once and are scoped by the `data-profile` attribute on
`<html>`, so switching is instant and there is no flash.

### Changing or adding a profile

1. Copy a file in `assets/css/profiles/` and rename the `[data-profile="…"]` scope.
2. Add an entry to `window.BROOKBURY_PROFILES` in `assets/js/profiles.js`.
3. Link the new stylesheet in `index.html`.

The switcher and the overview page pick it up automatically.

## Notes for the stakeholder conversation

- **Photography is illustrative.** The hero and event images are generated placeholders chosen to
  feel plausible for an established Fayetteville neighborhood. A real build should replace them
  with commissioned photography of Brookbury residents, streets and events. The plat map remains
  a schematic SVG so the prototype still runs entirely offline.
- **The contact email is a placeholder.** The current site publishes a personal Gmail address in
  the nav; this prototype uses a generic "Email the board" action instead. Worth deciding whether
  the real site should expose a personal address.
- **Event copy is illustrative.** The three spring events are real (garage sale, egg hunt, grill
  and chill); the descriptive sentences under them were written to show how the layout handles
  detail. No dates or fees were invented.
- **The map is schematic.** The current site says maps are being updated — that status is shown
  honestly in every profile.
