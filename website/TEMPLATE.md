# Directory design reference

This site adapts the directory layout of **Minted Directory Astro** by Mark Bruderer:

- Template: https://github.com/masterkram/minted-directory-astro
- Live template project: https://minteddirectory.com/
- License: https://github.com/masterkram/minted-directory-astro/blob/main/LICENSE
- Layout reference: `src/components/app/SidebarShell.astro`
- Card reference: `src/components/directory/cards/RectangleCard.astro`
- Search/filter reference: `src/components/directory/Grid.astro`

The upstream source and license were inspected on 2026-10-04. It is an actual
resource-directory template with topic navigation, search, tags, and illustrated
listing cards. Those patterns fit a paper/repository directory.

## Adaptation

This is a layout adaptation, not a full installation of the Astro template.
The existing Node static generator and small client-side search remain in use.
`views.mjs` and `style.css` implement the adapted interface without adding Astro,
Tailwind, a CMS, advertising, submission services, or a backend.

The interface uses a compact navigation header, research-area sidebar, search,
selected overview cards, and compact resource rows. All paper and repository
buttons navigate to original resources. Original figures are shown with
`object-fit: contain`; their source captions and full-size image links remain
visible. The site does not turn repository reading notes into articles.

Template licensing does not cover third-party research figures. Their provenance
is tracked separately in `content/selected.json` and `assets/overviews/README.md`.

## Upstream MIT notice

MIT License

Copyright (c) 2025 Mark Bruderer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
