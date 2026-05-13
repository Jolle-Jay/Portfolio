# Portfolio – Jonathan Lopez

Personal portfolio site for Jonathan Lopez, a software development student at NBI-Handelsakademin Malmö (AI track, 2025–2027).

## Stack

- **Framework:** React 19 + TypeScript, built with Vite 8
- **Styling:** Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, no tailwind.config file)
- **Deploy:** `npm run deploy` → gh-pages (builds to `dist/`, pushes to GitHub Pages)

## Commands

```bash
npm run dev       # local dev server
npm run build     # tsc + vite build
npm run deploy    # build + push to gh-pages
```

## Project structure

```
src/
  main.tsx                    # entry point
  App.tsx                     # root layout, section wrappers with IDs
  index.css                   # global styles + CSS vars (color palette)
  assets/
    me.jpg                    # profile photo used in Hero
  components/
    ScrollIndicator.tsx        # fixed right-side nav dots, tracks active section
  sections/
    Hero.tsx                  # name, photo, contact info, LinkedIn/GitHub links
    About.tsx                 # work experience + personal background text
    Projects.tsx              # school projects + personal projects with GitHub links
    Skills.tsx                # tech skills grouped by category
    Utbildningar.tsx          # education history
```

## Color palette (CSS vars in index.css)

| Var | Value | Usage |
|---|---|---|
| `--color-dominant` | `#093419` | page background (dark green) |
| `--color-secondary` | `#136d34` | card backgrounds |
| `--color-accent` | `#5af192` | bright green accent |
| `--color-text` | `#e8e4d9` | warm off-white |

Tailwind classes like `text-orange-300`, `text-orange-500`, `bg-[#136d34]` are used directly in components — the palette vars are defined but not yet wired into Tailwind's theme.

## Sections & IDs

App.tsx wraps each section in a `<div id="...">` used by ScrollIndicator for active detection:

| ID | Component | Content |
|---|---|---|
| `hero` | Hero.tsx | Name, photo, contact block |
| `about` | About.tsx | Experience, leadership/volunteering |
| `projects` | Projects.tsx | School + personal projects |
| `skills` | Skills.tsx | Backend, Frontend, DB, Testing, Tools, AI |
| `utbildningar` | Utbildningar.tsx | Education entries |

## ScrollIndicator

Fixed dots on the right edge of the screen. Tracks which section is nearest to 30% from the top of the viewport on scroll. Active section gets a wider dash (`w-8`), others get `w-4`.

## Content language

All visible text is in **Swedish**. Section headings, project descriptions, and personal bios are Swedish. Code and file/variable names are in English.

## Notable files

- `personligtBrev.md` — cover letter draft (Swedish), not rendered in the site
- `public/icons.svg` — SVG icon sprite
- `src/sections/Contact.tsx` — exists but is **not imported** in App.tsx (unused)
