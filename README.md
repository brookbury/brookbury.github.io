# Brookbury — Heritage Oak

The brookbury.org rebuild, in **Heritage Oak** — the design direction the board chose out of the
five that were reviewed.

Heritage Oak reads like a charter document: symmetry, a crest, hairline double rules and engraved
small caps. It signals a neighborhood with standards and a long memory, which is what makes
covenants enforcement feel legitimate rather than fussy.

## Live

**https://brookbury.org**

Published from `main` (root) via GitHub Pages — pushing to `main` redeploys.

The custom domain went live on 24 September 2026. At Cloudflare, `brookbury.org` and `www` are
CNAME records pointing at `brookbury.github.io`, both **DNS only** — turning on Cloudflare's proxy
stops GitHub from renewing the certificate. `CNAME` in the repo root holds the domain; deleting it
sends the site back to the github.io address, which now redirects here. www redirects to the bare
domain, and HTTPS is enforced on a Let's Encrypt certificate GitHub renews itself.

The repository is named `brookbury.github.io` to match the `brookbury` organisation that owns it,
which is what makes Pages serve it from the root rather than a `/repo-name/` subpath.

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
- **Events.** Easter Egg Hunt (spring), End of School Party, and Halloween Party & Parade
  (October 31). Exact dates and times are posted in the neighborhood's private Facebook group,
  which the events intro links to, so the site gives timing only. The cards are text-only; the old event photos showed the previous events.
- **Map.** A live Google map of N Brookbury Crossing, plus an "Open in Google Maps" link. It replaces
  the drawn schematic, which did not match the real street layout.
- **Neighborhood map.** `assets/maps/brookbury-map.svg`: the map from the 2022 printed directory,
  redrawn with each home's house number. Every lot is a
  `<g class="lot" data-number="..." data-street="...">`, so a number is updated by editing the text
  inside that lot. A version carrying residents' names was published here first and then replaced by
  this one. That version now lives in the board's Google Drive, restricted the way the directory is,
  and the Maps section links to it.
- **Covenants.** The PDF downloads, served from `assets/docs/`. The By-Laws are no longer
  published on the site.
- **Directory.** The Directory section links to a PDF export of the board's Google Sheet, so it is
  always current and no copy lives in this repo. The sheet is restricted: the link opens only for
  Google accounts the board has approved, and "Request access" emails the board. Phone numbers and
  email addresses **must never be committed to this repository** — it is public, and so is every
  file in it.

## Still to come

- **Architectural Review Request form.** The board is creating one; it belongs in the documents list.
- **Dues.** The section is hidden for now; the board may move the dues details to one of its
  private Google Docs instead. The `.dues-*` styles are still in `site.css`, so the section can be
  restored from the git history if it comes back.
- **Photography.** The hero image is a generated stand-in, not Brookbury. The board is using it until
  their photographer can shoot the neighborhood.

### overview.html

The five-direction contact sheet is gone. `overview.html` is now a one-line redirect to
`index.html`, kept only so links already circulated to the board still land somewhere useful.
Delete it once those have aged out:

```bash
git rm overview.html
```
