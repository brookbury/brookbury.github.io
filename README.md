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

Everything below was supplied or confirmed by the board.

- **Board roster.** Nine roles as the board listed them. Chris Deen holds two (Violations and
  Architectural); both are shown.
- **Contact.** `brookburyneighborhood@gmail.com`, linked from the board intro, the contact section
  and the "Email the board" button.
- **Dues.** $190 a year, invoiced each January, due by the last day of February, paid by Venmo to
  `@BrookburyWoods-Neighborhood`. The "Pay on Venmo" button opens that profile.
- **Events.** Easter Egg Hunt (spring), End of School Party, and Halloween Party & Parade
  (October 31). Exact dates and times are posted on the neighborhood's social page, so the site
  gives timing only. The cards are text-only; the old event photos showed the previous events.
- **Map.** A live Google map of N Brookbury Crossing, plus an "Open in Google Maps" link. It replaces
  the drawn schematic, which did not match the real street layout.
- **Covenants and By-Laws.** Both PDFs download, served from `assets/docs/`.

## Still to come

- **The social page link.** The events intro names the neighborhood's social page but cannot link
  to it until the board supplies the address.
- **Architectural Review Request form.** The board is creating one; it belongs in the documents list.
- **Residents' directory and the detailed neighborhood map.** These hold residents' personal
  details and **must never be committed to this repository** — it is public, and so is every
  file in it. They live in the association's Google Drive; the site only links to them.
- **Photography.** The hero image is a generated stand-in, not Brookbury. The board is using it until
  their photographer can shoot the neighborhood.

### overview.html

The five-direction contact sheet is gone. `overview.html` is now a one-line redirect to
`index.html`, kept only so links already circulated to the board still land somewhere useful.
Delete it once those have aged out:

```bash
git rm overview.html
```
