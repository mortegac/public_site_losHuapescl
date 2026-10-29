# DESIGN.md — Fundo Los Huapes

> Design system reference for `loshuapes.cl`. All tokens, components, and patterns defined here are the single source of truth for the public site. Update this file when any visual decision changes.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Design Principles](#2-design-principles)
3. [Color System](#3-color-system)
4. [Typography](#4-typography)
5. [Spacing System](#5-spacing-system)
6. [Component Patterns](#6-component-patterns)
7. [Layout & Grid](#7-layout--grid)
8. [Animation & Motion](#8-animation--motion)
9. [Imagery Guidelines](#9-imagery-guidelines)
10. [SEO / Metadata Tokens](#10-seo--metadata-tokens)
11. [Accessibility](#11-accessibility)
12. [Component Inventory](#12-component-inventory)

---

## 1. Project Overview

### Site

**Name:** Fundo Los Huapes  
**Domain:** loshuapes.cl  
**Tagline:** Río San Pedro · Bosque Nativo · Región de Los Ríos

### Purpose

Sell four rural tourism programs — horse-riding, whitewater rafting, and fire-cooked asado — to individual travelers and to travel agencies operating in southern Chile. The site functions as a brochure, a booking trigger, and a trust signal for B2B agency contacts.

### Audience

**Primary — Individual traveler:**
- Age 28–55, Santiago or Valdivia
- Seeking authentic, non-resort outdoor experiences
- Values quality, small groups, and memorable food
- Discovery channel: Instagram, word of mouth, Google ("cabalgatas sur de Chile")

**Secondary — Travel agency buyer:**
- Tour operators seeking differentiated day-programs near Valdivia
- Needs pricing transparency, logistics info, and a direct contact channel
- Entry point: `/para-agencias` or homepage CTA "Para agencias de turismo"

### Tone of Voice

**Refined rural. Editorial. First-person plural. Present tense.**

- Use "nosotros" and "nuestro" — the fundo speaks with one voice
- Write as though describing the experience to someone sitting across the table
- Short sentences. Active verbs. No marketing superlatives
- Words that belong: río, potrero, montura, fuego, bosque, campo, estero, al palo, usanza
- Words to avoid: "experiencia única", "inigualable", "de lujo", "premium", "aventura extrema"
- Numbers are precise: 15 km, 20 km, $80.000, 5 a 10 personas — never rounded or vague

**Voice examples:**

| Avoid | Prefer |
|-------|--------|
| "Vive una experiencia única e inigualable" | "Cuatro programas para vivir el sur de Chile a otro ritmo" |
| "Disfruta la naturaleza" | "Ciervos, liebres y copihues son parte del paisaje cotidiano" |
| "Gastronomía de primera" | "Cordero y estomaguillo al palo, hecho a la usanza de siempre" |

---

## 2. Design Principles

### 1. Organic before polished

The fundo is not a resort. Design decisions should feel like things that grew here naturally — aged wood, worn leather, river stone. Prefer textures over gradients, silence over decoration, weight over lightness. A `2px` border-radius is the maximum; sharp corners are acceptable and often preferred.

### 2. The photograph leads

Every composition defers to real photography from the fundo. No stock photography in hero or gallery positions. The design system exists to frame the images, not compete with them. When in doubt, give more space to the photograph and less to the surrounding chrome.

### 3. Editorial hierarchy

Information follows the rhythm of a magazine spread: eyebrow → headline → body. Eyebrows are small, spaced, uppercase. Headlines are large, serif, unhurried. Body copy is readable at arm's length. This hierarchy must hold at every breakpoint.

### 4. Fire, river, forest — the three material references

Every color, texture, and shadow decision can be validated against one of three natural materials:
- **Fire** — ember, rust, warm orange light, ash
- **River** — deep water shadow, reflected sky, wet stone
- **Forest** — dark canopy green, moss, damp earth, cream parchment

If a UI element doesn't evoke one of these three, it probably doesn't belong.

### 5. Restraint over decoration

The site serves four programs for groups of 5–10 people. It does not need ten font sizes, twelve accent colors, or animated illustrations. Every element added must earn its place. When two solutions work equally well, choose the simpler one.

---

## 3. Color System

### CSS Custom Properties

Add to `:root` in `globals.css`:

```css
:root {
  /* ── Core palette ── */
  --color-forest:     #1A3428;   /* Primary — deep canopy green */
  --color-moss:       #2D5A3D;   /* Primary hover / active state */
  --color-sage:       #4A7C59;   /* Tertiary green, used sparingly */

  --color-cream:      #F4EFE4;   /* Page background */
  --color-parchment:  #EAE3D2;   /* Alternate section background */

  --color-ember:      #C05C28;   /* Accent — CTAs, eyebrows, highlights */
  --color-rust:       #A04520;   /* Accent hover / pressed state */

  --color-dark:       #0D1207;   /* Hero overlays, footer */
  --color-text:       #1A1A17;   /* Body copy default */
  --color-text-muted: #6B6358;   /* Secondary text, captions, labels */
  --color-border:     #D6CEBB;   /* Hairlines, dividers */

  /* ── Semantic aliases ── */
  --color-bg:         var(--color-cream);
  --color-bg-alt:     var(--color-parchment);
  --color-bg-dark:    var(--color-forest);
  --color-bg-accent:  var(--color-ember);

  --color-cta:        var(--color-ember);
  --color-cta-hover:  var(--color-rust);

  --color-link:       var(--color-ember);
  --color-link-hover: var(--color-rust);

  /* ── WhatsApp ── */
  --color-whatsapp:       #25D366;
  --color-whatsapp-hover: #1db954;

  /* ── Overlay utilities ── */
  --overlay-hero:   rgba(10, 25, 16, 0.82);   /* Left-heavy hero gradient */
  --overlay-light:  rgba(26, 52, 40, 0.80);   /* Gallery caption background */
  --overlay-card:   rgba(26, 52, 40, 0.95);   /* Scrolled navbar background */
}
```

### Palette Reference

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-forest` | `#1A3428` | Primary brand color. Navbar (scrolled), Programs section bg, benefit icons, footer |
| `--color-moss` | `#2D5A3D` | Hover state of forest-bg elements (program cards) |
| `--color-sage` | `#4A7C59` | Eyebrow on parchment sections (El Entorno). Use sparingly |
| `--color-cream` | `#F4EFE4` | Default page background. Feature cards inside white sections |
| `--color-parchment` | `#EAE3D2` | Alternate section bg (El Entorno). Card backgrounds in PDF |
| `--color-ember` | `#C05C28` | Accent. All primary CTAs, eyebrow labels on dark/forest bg, left-border accents |
| `--color-rust` | `#A04520` | Ember hover. Destructive/pressed state |
| `--color-dark` | `#0D1207` | Hero and CTA-Final overlay tint source |
| `--color-text` | `#1A1A17` | Default body copy |
| `--color-text-muted` | `#6B6358` | Secondary text: captions, descriptions, helper copy |
| `--color-border` | `#D6CEBB` | Section dividers, table rules, form input borders |
| `--color-whatsapp` | `#25D366` | WhatsApp FAB and inline button only. Never repurposed |

### Dark section text colors

When text sits on `--color-forest` or a dark hero overlay:

```css
.on-dark {
  --text-primary:   #FFFFFF;
  --text-secondary: rgba(255, 255, 255, 0.65);
  --text-tertiary:  rgba(255, 255, 255, 0.40);
  --text-eyebrow:   var(--color-ember);
  --border-subtle:  rgba(255, 255, 255, 0.08);
}
```

When text sits on `--color-ember` (gastronomía strip):

```css
.on-ember {
  --text-primary:   #FFFFFF;
  --text-secondary: rgba(255, 255, 255, 0.85);
  --text-eyebrow:   rgba(255, 255, 255, 0.55);
  --border-subtle:  rgba(255, 255, 255, 0.25);
}
```

---

## 4. Typography

### Font Stack

```css
:root {
  --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
  --font-body:    'Source Serif 4', Georgia, 'Times New Roman', serif;
  --font-ui:      'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

**Google Fonts import:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

### Font Roles

| Font | Role | Where used |
|------|------|-----------|
| **Playfair Display** | Display / Headings | H1, H2, H3, program prices, large numerals (01 02 03 04), footer brand name |
| **Source Serif 4** | Body / Reading | All body copy, subtítulos, feature card text, menu items, FAQ answers |
| **DM Sans** | UI / Functional | Navbar links, eyebrow labels, buttons, badges/tags, form labels, footer column headers, captions |

**Rationale:** Playfair Display carries the editorial weight and feels like a quality magazine masthead. Source Serif 4 provides comfortable reading at body size while maintaining the serif warmth. DM Sans handles functional text where clarity at small sizes matters more than character.

### Type Scale

Base: `17px` body, `1.7` line-height on `font-body`.

```css
/* Display — Playfair Display */
--text-display-xl:   clamp(3.2rem, 6vw, 5.5rem);   /* H1 hero */
--text-display-lg:   clamp(2.4rem, 4vw, 3.8rem);   /* H1 interior pages */
--text-display-md:   clamp(2rem, 3.5vw, 3.2rem);   /* H2 section headings */
--text-display-sm:   clamp(1.5rem, 2.5vw, 2rem);   /* H3 program titles */

/* Body — Source Serif 4 */
--text-body-lg:      1.15rem;   /* Hero subtitle, lead paragraphs */
--text-body-md:      1.05rem;   /* Standard body copy */
--text-body-base:    1rem;      /* Default (17px equivalent) */
--text-body-sm:      0.9rem;    /* Program card descriptions */

/* UI — DM Sans */
--text-ui-label:     0.75rem;   /* Eyebrows — with letter-spacing 0.22em */
--text-ui-nav:       0.8rem;    /* Navbar links — with letter-spacing 0.12em */
--text-ui-btn:       0.85rem;   /* Buttons — with letter-spacing 0.08em */
--text-ui-caption:   0.75rem;   /* Gallery captions, footnotes */
--text-ui-xs:        0.7rem;    /* Footer column headers, scroll indicator */
```

### Heading Styles

```css
h1, h2, h3 {
  font-family: var(--font-display);
  line-height: 1.05;
  font-weight: 700;
}

h1 { font-size: var(--text-display-xl); }
h2 { font-size: var(--text-display-md); line-height: 1.15; }
h3 { font-size: var(--text-display-sm); line-height: 1.2; }

/* Italic variant — used for pull quotes and hero subtitles on dark */
.italic-display {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 400;
}
```

### Eyebrow

The eyebrow label is one of the most distinctive typographic patterns in the system. It appears above every section heading.

```css
.eyebrow {
  display: block;
  font-family: var(--font-ui);
  font-size: var(--text-ui-label);    /* 0.72–0.75rem */
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-ember);           /* on light bg */
  margin-bottom: 1.25rem;
}

/* On dark/forest background */
.on-dark .eyebrow { color: var(--color-ember); }

/* On ember/accent background */
.on-ember .eyebrow { color: rgba(255, 255, 255, 0.55); }

/* On parchment background (El Entorno) */
.on-parchment .eyebrow { color: var(--color-sage); }
```

### Program Number Numerals

The large ghost numerals (01, 02, 03, 04) used as decorative backdrop on program cards:

```css
.program-numeral {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  color: rgba(255, 255, 255, 0.08);   /* ghost on forest bg */
  user-select: none;
  aria-hidden: true;
}
```

---

## 5. Spacing System

Base unit: **4px** (`0.25rem`). All spacing values are multiples of this base.

```css
:root {
  --space-1:   0.25rem;   /*  4px */
  --space-2:   0.5rem;    /*  8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-28:  7rem;      /* 112px */
  --space-32:  8rem;      /* 128px */
}
```

### Spacing Usage Conventions

| Context | Token | Value |
|---------|-------|-------|
| Section vertical padding (desktop) | `--space-28` | 7rem |
| Section vertical padding (mobile) | `--space-20` | 5rem |
| Section horizontal padding (desktop) | `--space-12` | 3rem |
| Section horizontal padding (mobile) | `--space-6` | 1.5rem |
| Card internal padding | `--space-10` to `--space-8` | 2–2.5rem |
| Feature card compact padding | `--space-5` `--space-6` | 1.25–1.5rem |
| Eyebrow → H2 gap | `--space-5` | 1.25rem |
| H2 → body gap | `--space-6` | 1.5rem |
| Body → CTA gap | `--space-10` | 2.5rem |
| Grid column gap (desktop) | `--space-6` | 1.5rem |
| Grid column gap (large 2-col) | `--space-20` to `--space-24` | 5–6rem |
| Gallery gap | `6px` | fixed |
| Footer grid gap | `--space-12` | 3rem |

---

## 6. Component Patterns

### 6.1 Buttons

Three button variants. All buttons use `font-ui`, uppercase, tracked. No border-radius beyond the system `--radius: 2px`.

```css
:root { --radius: 2px; }

/* Primary — Ember fill */
.btn-primary {
  display: inline-block;
  background: var(--color-ember);
  color: #FFFFFF;
  padding: 0.9rem 2rem;
  font-family: var(--font-ui);
  font-size: var(--text-ui-btn);      /* 0.85rem */
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: var(--radius);
  transition: background 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.15s ease;
  cursor: pointer;
  border: none;
}
.btn-primary:hover {
  background: var(--color-rust);
  transform: translateY(-1px);
}
.btn-primary:active { transform: translateY(0); }
.btn-primary:focus-visible {
  outline: 2px solid var(--color-ember);
  outline-offset: 3px;
}

/* Primary Forest — for use on light backgrounds needing a forest-colored CTA */
.btn-primary-forest {
  background: var(--color-forest);
}
.btn-primary-forest:hover { background: var(--color-moss); }
.btn-primary-forest:focus-visible { outline-color: var(--color-forest); }

/* Outline — for secondary actions on dark backgrounds */
.btn-outline {
  display: inline-block;
  background: transparent;
  color: #FFFFFF;
  padding: 0.9rem 2rem;
  font-family: var(--font-ui);
  font-size: var(--text-ui-btn);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: var(--radius);
  transition: border-color 0.4s ease, background 0.4s ease;
  cursor: pointer;
}
.btn-outline:hover {
  border-color: #FFFFFF;
  background: rgba(255, 255, 255, 0.08);
}
.btn-outline:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.7);
  outline-offset: 3px;
}

/* WhatsApp */
.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--color-whatsapp);
  color: #FFFFFF;
  padding: 0.9rem 2rem;
  font-family: var(--font-ui);
  font-size: var(--text-ui-btn);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-decoration: none;
  border-radius: var(--radius);
  transition: background 0.2s ease;
}
.btn-whatsapp:hover { background: var(--color-whatsapp-hover); }
.btn-whatsapp:focus-visible {
  outline: 2px solid var(--color-whatsapp);
  outline-offset: 3px;
}
```

**Button sizing note:** The large CTA in the hero final section uses an overridden larger size (`font-size: 0.95rem; padding: 1.1rem 2.5rem`). This is the only size exception and must not proliferate.

---

### 6.2 Feature Cards

Used in the "La Experiencia" section. Cream background, ember left-border accent.

```css
.feature-card {
  background: var(--color-cream);
  padding: var(--space-5) var(--space-6);          /* 1.25rem 1.5rem */
  border-left: 3px solid var(--color-ember);
  border-radius: var(--radius);
}

.feature-card__title {
  display: block;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-forest);
  margin-bottom: 0.35rem;
}

.feature-card__description {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}
```

---

### 6.3 Program Cards

Full-bleed cards on the forest-green section. Hover reveals moss background. Ghost numeral backdrop.

```css
.program-card {
  background: var(--color-forest);
  padding: 2.5rem 2rem;
  position: relative;
  display: block;
  text-decoration: none;
  transition: background 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
}
.program-card:hover { background: var(--color-moss); }

.program-card__num {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.08);
  line-height: 1;
  margin-bottom: var(--space-6);
  user-select: none;
}

.program-card__tag {
  display: inline-block;
  font-family: var(--font-ui);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-ember);
  margin-bottom: 0.75rem;
}

.program-card h3 {
  font-size: 1.5rem;
  color: #FFFFFF;
  margin-bottom: var(--space-4);
}

.program-card__description {
  font-family: var(--font-body);
  font-size: var(--text-body-sm);
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin-bottom: var(--space-6);
}

.program-card__highlights {
  list-style: none;
  margin-bottom: var(--space-8);
  padding: 0;
}
.program-card__highlights li {
  font-family: var(--font-ui);
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.5);
  padding: 0.3rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.program-card__highlights li::before {
  content: '—';
  color: var(--color-ember);
  flex-shrink: 0;
}

.program-card__price {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: #FFFFFF;
}
.program-card__price span {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
}

.program-card__arrow {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  color: var(--color-ember);
  font-size: 1.5rem;
  transition: transform 0.2s ease;
}
.program-card:hover .program-card__arrow {
  transform: translate(3px, -3px);
}
```

---

### 6.4 Badges / Tags

Compact pill-shaped labels for program durations and attributes.

```css
/* Standard badge — parchment background (PDF / program detail pages) */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--color-parchment);
  color: var(--color-text);
  padding: 0.45rem 1rem;
  font-family: var(--font-ui);
  font-size: 0.82rem;
  font-weight: 500;
  border-radius: 999px;
  white-space: nowrap;
}

/* Badge with icon */
.badge--icon svg,
.badge--icon img {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Inverted badge — on forest background (program card tag already handled above) */
.badge--inverted {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.7);
}
```

---

### 6.5 Menu Items

Used in the gastronomía strip and picoteo section.

```css
/* Gastro strip — on ember background */
.menu-item {
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  padding-top: 0.75rem;
}
.menu-item__title {
  display: block;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  color: #FFFFFF;
  margin-bottom: 0.2rem;
}
.menu-item__description {
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

/* Gastro add-on callout box */
.gastro-addon {
  background: rgba(0, 0, 0, 0.2);
  padding: var(--space-6);
  margin-top: var(--space-8);
  border-left: 3px solid rgba(255, 255, 255, 0.5);
}
.gastro-addon__label {
  display: block;
  font-family: var(--font-ui);
  font-weight: 600;
  font-size: 0.9rem;
  color: #FFFFFF;
  margin-bottom: 0.25rem;
}
.gastro-addon__detail {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.75);
}
```

---

### 6.6 Gallery Captions

Overlay captions on mosaic gallery items.

```css
.gallery-caption {
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  background: var(--overlay-light);   /* rgba(26,52,40,0.80) */
  color: #FFFFFF;
  font-family: var(--font-ui);
  font-size: var(--text-ui-caption);  /* 0.75rem */
  letter-spacing: 0.05em;
  padding: 0.3rem 0.75rem;
}
```

---

### 6.7 Agency Benefit Block

Used in the "Para Agencias" section.

```css
.benefit {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.benefit__icon {
  width: 44px;
  height: 44px;
  background: var(--color-forest);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #FFFFFF;
  font-size: 1.2rem;
}

.benefit__title {
  display: block;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-forest);
  margin-bottom: 0.3rem;
}

.benefit__detail {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}
```

---

### 6.8 Eyebrow Decorator (section accent line)

```css
/* The ember accent square that floats behind certain images (La Experiencia) */
.image-accent::after {
  content: '';
  position: absolute;
  bottom: -1.5rem;
  right: -1.5rem;
  width: 120px;
  height: 120px;
  background: var(--color-ember);
  z-index: -1;
}
```

---

### 6.9 Navbar

```css
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem var(--space-12);           /* 1.25rem 3rem */
  background: transparent;
  transition: background 0.4s ease, backdrop-filter 0.4s ease;
}

/* After 60px scroll */
.navbar--scrolled {
  background: var(--overlay-card);            /* rgba(26,52,40,0.95) */
  backdrop-filter: blur(8px);
}

.navbar__logo {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 400;
  color: #FFFFFF;
  text-decoration: none;
  letter-spacing: 0.05em;
}
.navbar__logo span { color: var(--color-ember); }  /* The trailing dot */

.navbar__link {
  font-family: var(--font-ui);
  font-size: var(--text-ui-nav);              /* 0.8rem */
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: color 0.2s ease;
}
.navbar__link:hover { color: #FFFFFF; }

/* Reserve button in nav */
.navbar__cta {
  background: var(--color-ember);
  padding: 0.55rem 1.4rem;
  letter-spacing: 0.08em;
  transition: background 0.2s ease;
}
.navbar__cta:hover { background: var(--color-rust); color: #FFFFFF; }
```

---

### 6.10 WhatsApp FAB

```css
.fab-whatsapp {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  background: var(--color-whatsapp);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 1.6rem;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  z-index: 999;
}
.fab-whatsapp:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.3);
}
```

---

### 6.11 Timeline / Itinerary

Used on individual program pages. A vertical dot-connected list.

```css
.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}

.timeline__item {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
  padding-bottom: var(--space-4);
  position: relative;
}

/* Connecting vertical line */
.timeline__item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 14px;
  width: 1px;
  height: 100%;
  background: var(--color-ember);
  opacity: 0.3;
}

.timeline__dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--color-ember);
  flex-shrink: 0;
  margin-top: 4px;
}

.timeline__time {
  font-family: var(--font-ui);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-ember);
  min-width: 3rem;
  flex-shrink: 0;
}

.timeline__event {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text);
  line-height: 1.5;
}
```

---

### 6.12 Scroll Indicator

Vertical writing-mode indicator on the hero.

```css
.hero-scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  right: var(--space-12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: var(--font-ui);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  text-orientation: mixed;
}

.hero-scroll-indicator::before {
  content: '';
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
}
```

---

### 6.13 Partner / Aliado Block

```css
.partner-block {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--color-border);
}

.partner-block__logo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.partner-block__name {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-forest);
}

.partner-block__description {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}
```

---

### 6.14 Include Box (Itinerary Sidebar)

The dark forest sidebar used on program detail pages.

```css
.include-box {
  background: var(--color-forest);
  color: #FFFFFF;
  padding: var(--space-6) var(--space-8);
  border-radius: var(--radius);
}

.include-box__heading {
  font-family: var(--font-ui);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: var(--space-4);
}

.include-box__list {
  list-style: none;
  padding: 0;
}
.include-box__list li {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  padding: 0.4rem 0;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}
.include-box__list li::before {
  content: '•';
  color: var(--color-ember);
  flex-shrink: 0;
  font-size: 0.7rem;
  margin-top: 4px;
}

/* Optional add-on callout inside include box */
.include-box__addon {
  background: var(--color-ember);
  padding: var(--space-4) var(--space-5);
  margin-top: var(--space-4);
  border-radius: var(--radius);
  font-family: var(--font-ui);
  font-size: 0.85rem;
  font-weight: 600;
  color: #FFFFFF;
  text-align: center;
  line-height: 1.4;
}
```

---

## 7. Layout & Grid

### Max Width

```css
:root {
  --max-width: 1280px;
  --max-width-text: 720px;   /* Prose columns, never wider */
  --max-width-hero: 660px;   /* Hero text block */
}

.section-inner {
  max-width: var(--max-width);
  margin: 0 auto;
}
```

### Breakpoints

Mobile-first. All layouts start single-column.

```css
/* Mobile default: < 480px */

/* Small tablet */
@media (min-width: 480px) { ... }

/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Wide */
@media (min-width: 1280px) { ... }
```

### Section Padding

```css
section {
  padding: var(--space-28) var(--space-12);   /* 7rem 3rem — desktop */
}

@media (max-width: 768px) {
  section {
    padding: var(--space-20) var(--space-6);  /* 5rem 1.5rem — mobile */
  }
}
```

### Grid Patterns

**Programs — 4-column to 2-column to 1-column:**

```css
.programs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5px;
  background: rgba(255, 255, 255, 0.08);  /* thin grid lines between cards */
}

@media (max-width: 1024px) {
  .programs-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .programs-grid { grid-template-columns: 1fr; }
}
```

**Experience / Gastronomía — 2-column to 1-column:**

```css
.two-col-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-20);    /* 5rem */
  align-items: center;
}

@media (max-width: 768px) {
  .two-col-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
}
```

**Agency benefits — 2-column (stays 2-column down to tablet):**

```css
.benefits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
}

@media (max-width: 480px) {
  .benefits-grid { grid-template-columns: 1fr; }
}
```

**Gallery Mosaic:**

```css
.gallery-mosaic {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 280px 280px;
  gap: 6px;
}

/* First item spans both rows */
.gallery-mosaic__item:first-child { grid-row: 1 / 3; }

@media (max-width: 768px) {
  .gallery-mosaic {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  .gallery-mosaic__item:first-child {
    grid-row: auto;
    grid-column: 1 / -1;
    height: 280px;
  }
}
```

**Footer — 4-column to 2-column to 1-column:**

```css
.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: var(--space-12);
}

@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr; }
}
```

### Hero Layout

```css
.hero {
  position: relative;
  height: 100vh;
  min-height: 680px;
  display: flex;
  align-items: flex-end;
  padding: 0 var(--space-12) var(--space-20);
  overflow: hidden;
}

/* Background: left-heavy gradient + photograph */
.hero__bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to right, rgba(10, 25, 16, 0.85) 45%, rgba(10, 25, 16, 0.30) 100%),
    url('[PHOTO_URL]') center / cover no-repeat;
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: var(--max-width-hero);    /* 660px */
}
```

---

## 8. Animation & Motion

### Transition Easing

```css
:root {
  --ease-natural:  cubic-bezier(0.25, 0.46, 0.45, 0.94);  /* Standard transitions */
  --ease-snap:     cubic-bezier(0.34, 1.56, 0.64, 1);     /* Snappy: FAB hover */
  --ease-out:      cubic-bezier(0.0, 0.0, 0.2, 1);        /* Decelerate: reveals */
}
```

### Principles

1. **Motion is functional, not decorative.** Animate only when it communicates state change or draws attention to content entering the viewport.
2. **Subtle vertical reveals.** Elements entering the viewport travel 20px upward on a 0.7s ease-out curve. Not a bounce — just unhurried emergence.
3. **Image hover scales are slow.** Photo zoom-on-hover uses `0.6–0.8s` ease. Fast photo zoom feels cheap.
4. **Navbar fade is quick but not instant.** `0.4s` matches the natural-easing curve. Instant background change on scroll is jarring.
5. **Respect `prefers-reduced-motion`.**

### Scroll Reveal (IntersectionObserver pattern)

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.7s var(--ease-out),
    transform 0.7s var(--ease-out);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

```js
// Observe all .reveal elements
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
```

### Hero Entry Animation

```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero__content {
  animation: fadeUp 1s var(--ease-out) both;
}
```

### Image Hover Zoom

```css
.photo-hover {
  overflow: hidden;
}
.photo-hover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}
.photo-hover:hover img {
  transform: scale(1.04);
}

/* Gallery items use slightly more pronounced zoom */
.gallery-mosaic__item img {
  transition: transform 0.6s ease;
}
.gallery-mosaic__item:hover img {
  transform: scale(1.06);
}
```

### Summary of Transition Durations

| Element | Duration | Easing |
|---------|----------|--------|
| Button background | `0.2s` | `ease` |
| Button transform (lift) | `0.15s` | `ease` |
| Navbar background | `0.4s` | `--ease-natural` |
| Program card background | `0.4s` | `--ease-natural` |
| Program arrow nudge | `0.2s` | `ease` |
| Scroll reveal | `0.7s` | `--ease-out` |
| Hero entry | `1.0s` | `--ease-out` |
| Image hover zoom (gallery) | `0.6s` | `ease` |
| Image hover zoom (experience) | `0.8s` | `ease` |
| FAB hover scale | `0.2s` | `ease` |

---

## 9. Imagery Guidelines

### Style

Photography at Los Huapes is the primary brand asset. The site exists to show it, not interpret it.

**Shoot for:**
- Natural, diffused light — overcast southern Chilean sky is an asset, not a problem
- Foreground subjects (horses, water, food, people) with environmental context in background
- Earthy, muted tones that reinforce the color palette (greens, ochres, browns)
- Candid moments: a rider's hand on a rein, steam from a pot, a raft cresting a wave
- Wide establishing shots for heroes; close crops for details (food, fauna, hands)

**Avoid:**
- Heavy Instagram filters or high-saturation processing
- Generic stock photography in hero or gallery positions
- Posed group shots with forced smiles as primary imagery
- Drone shots as hero images (they feel impersonal at this scale)

### Required Photo Categories

| Category | Use | Min resolution |
|----------|-----|---------------|
| Hero — Potrero with horses | Homepage hero background | 2400 × 1600 px |
| Hero — River San Pedro | CTA Final background | 2400 × 1600 px |
| Portrait — Bosque nativo trail | La Experiencia left column | 800 × 1000 px |
| Gallery — Bosque nativo | El Entorno mosaic (large) | 1200 × 1600 px |
| Gallery — Ciervos | El Entorno mosaic | 800 × 600 px |
| Gallery — Liebres | El Entorno mosaic | 800 × 600 px |
| Gallery — Copihues | El Entorno mosaic | 800 × 600 px |
| Gallery — Gran Pirineo | El Entorno mosaic | 800 × 600 px |
| Gallery — Ovejas | El Entorno mosaic | 800 × 600 px |
| Gastro — Asado at fire | Gastronomía section right | 1400 × 960 px |
| Program — Riders in forest | Programa 01 card | 640 × 480 px |
| Program — Horses in potrero | Programa 02 card | 640 × 480 px |
| Program — Raft on river | Programa 03 card | 640 × 480 px |
| Program — Group with gear | Programa 04 card | 640 × 480 px |

### Aspect Ratios

| Context | Ratio | Notes |
|---------|-------|-------|
| Hero (full viewport) | `16:9` natural | `height: 100vh` overrides |
| Experience portrait | `4:5` | Portrait crop, left column |
| Program card images | `4:3` | Horizontal crop |
| Gallery mosaic — large | `2:3` | Portrait, spans two rows |
| Gallery mosaic — small | `4:3` | Horizontal fills |
| Gastronomía right column | `3:2` | Fixed `480px` height |
| OG / social preview | `1200 × 630` | `1.91:1` |

### Alt Text Convention

Format: `[Subject] [Context], [Location]`

Examples:
- `Caballos criollos pastando en los potreros del Fundo Los Huapes, Región de Los Ríos`
- `Bajada en balsa por el río San Pedro entre bosque nativo, sur de Chile`
- `Asado acampado con cordero al palo, Fundo Los Huapes`
- `Bosque valdiviano nativo en el Fundo Los Huapes, ribera del río San Pedro`

Rules:
- Never start with "Imagen de" or "Foto de"
- Always include geographical context (Fundo Los Huapes / Río San Pedro / Región de Los Ríos)
- Describe what is visually present, not what the image "represents"
- Maximum 120 characters

---

## 10. SEO / Metadata Tokens

### Title Template

```
[Page Title] | [Keyword phrase] | Fundo Los Huapes
```

Character budget: 50–60 characters target, 70 absolute max.

| Page | Title tag |
|------|-----------|
| Homepage | `Cabalgatas y Experiencias en Fundo Los Huapes \| Río San Pedro, Los Ríos` |
| El Entorno | `El Entorno Natural \| Río San Pedro y Bosque Nativo \| Fundo Los Huapes` |
| Gastronomía | `Gastronomía Campestre \| Picoteo y Asado Acampado \| Fundo Los Huapes` |
| Programas | `Cuatro Programas \| Cabalgatas y Balsa \| Fundo Los Huapes` |
| Para Agencias | `Para Agencias de Turismo \| Propuesta Comercial \| Fundo Los Huapes` |

### Meta Description

Character budget: 140–155 characters.

| Page | Meta description |
|------|-----------------|
| Homepage | `Cabalgatas por bosque nativo, bajadas en balsa por el Río San Pedro y asado acampado en el Fundo Los Huapes. 4 programas desde media jornada hasta 2 días. Grupos de 5 a 10 personas, Región de Los Ríos, Chile.` |
| El Entorno | `El Fundo Los Huapes está rodeado de bosque nativo valdiviano y bordeado por el Río San Pedro. Ciervos, copihues, liebres y Gran Pirineo habitan el paisaje de la Región de Los Ríos, Chile.` |
| Gastronomía | `Picoteo de campo con arrollado huaso, queso fresco y pan amasado en el estero Huillinco. Asado acampado con cordero y estomaguillo al palo, preparado por De la Hoguera. Fundo Los Huapes.` |

### OG / Social Metadata

```html
<meta property="og:type"              content="website">
<meta property="og:url"               content="https://loshuapes.cl[/path]">
<meta property="og:title"             content="[Page Title]">
<meta property="og:description"       content="[Meta description]">
<meta property="og:image"             content="https://loshuapes.cl/og/[page-slug].jpg">
<meta property="og:image:width"       content="1200">
<meta property="og:image:height"      content="630">
<meta property="og:locale"            content="es_CL">
<meta property="og:site_name"         content="Fundo Los Huapes">

<meta name="twitter:card"             content="summary_large_image">
<meta name="twitter:image"            content="https://loshuapes.cl/og/[page-slug].jpg">
```

OG image specs: `1200 × 630px`, JPEG, max `300KB`. Show fundo photography with site name overlaid at bottom-left in Playfair Display on a translucent forest-green strip.

### Canonical & hreflang

Site is Spanish-only. No hreflang needed at launch. Always set canonical to avoid duplicate query-param URLs:

```html
<link rel="canonical" href="https://loshuapes.cl/[path]">
```

### Structured Data (JSON-LD)

Homepage and program pages should implement `TouristAttraction` + `LocalBusiness`:

```json
{
  "@context": "https://schema.org",
  "@type": ["TouristAttraction", "LocalBusiness"],
  "name": "Fundo Los Huapes",
  "description": "Cabalgatas por bosque nativo, bajadas en balsa y asado acampado en la ribera del Río San Pedro.",
  "url": "https://loshuapes.cl",
  "image": "https://loshuapes.cl/og/homepage.jpg",
  "telephone": "[PHONE]",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Los Ríos",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[LAT]",
    "longitude": "[LNG]"
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "$$$",
  "touristType": "Outdoor / Rural Tourism"
}
```

Each program page should add `TouristTrip` with `offers` for its price.

### Robots

```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
```

---

## 11. Accessibility

### Contrast Ratios

All text must meet WCAG 2.1 AA minimum (4.5:1 normal text, 3:1 large text / UI components).

| Foreground | Background | Ratio | Status |
|------------|-----------|-------|--------|
| `#FFFFFF` on `--color-forest` `#1A3428` | — | ~10.2:1 | AAA |
| `#FFFFFF` on `--color-ember` `#C05C28` | — | ~4.6:1 | AA |
| `#FFFFFF` on `--color-moss` `#2D5A3D` | — | ~7.8:1 | AAA |
| `--color-text` `#1A1A17` on `--color-cream` `#F4EFE4` | — | ~14.2:1 | AAA |
| `--color-text-muted` `#6B6358` on `--color-cream` `#F4EFE4` | — | ~4.9:1 | AA |
| `--color-text-muted` `#6B6358` on white `#FFFFFF` | — | ~4.7:1 | AA |
| `--color-ember` `#C05C28` on white `#FFFFFF` | — | ~4.5:1 | AA (borderline — verify) |
| `rgba(255,255,255,0.65)` on `--color-forest` | — | ~6.5:1 approx | AA |

**Watch:** `rgba(255,255,255,0.5)` on forest (text-tertiary) may fall below 3:1 — use only for decorative/non-informational text (e.g., program highlights list). Never use for communicating state or required content.

### Focus States

Never remove `:focus-visible` outlines. The pattern across components:

```css
/* Global focus reset — start from a clean base */
*:focus { outline: none; }

/* Restore for keyboard users only */
*:focus-visible {
  outline: 2px solid var(--color-ember);
  outline-offset: 3px;
  border-radius: var(--radius);
}

/* On dark backgrounds — use white focus ring */
.on-dark *:focus-visible {
  outline-color: rgba(255, 255, 255, 0.8);
}
```

### Keyboard Navigation

- Navbar links must be reachable in DOM order (logo → nav items → CTA)
- Program cards are `<a>` elements — full keyboard-navigable without JS
- Gallery items with hover captions must also expose caption text to screen readers (not hidden with `aria-hidden`)
- WhatsApp FAB must have a descriptive `aria-label`: `aria-label="Contactar por WhatsApp"`
- Hero scroll indicator is decorative — add `aria-hidden="true"`
- Ghost program numerals (01, 02…) are decorative — add `aria-hidden="true"`

### Semantic HTML

```html
<!-- Eyebrow labels -->
<span class="eyebrow" aria-hidden="true">EL ENTORNO</span>
<!-- Not a heading — never use <h4>/<h5> for eyebrows -->

<!-- Program card — full card is the link -->
<a href="/programas/01" class="program-card">
  <span class="program-card__num" aria-hidden="true">01</span>
  <h3>Cabalgata y Picoteo</h3>
  ...
</a>

<!-- Gallery images -->
<figure class="gallery-item">
  <img src="bosque.jpg" alt="Bosque valdiviano nativo en el Fundo Los Huapes">
  <figcaption class="gallery-caption">Bosque nativo</figcaption>
</figure>
```

### Reduced Motion

All CSS animations must respect the `prefers-reduced-motion` media query (see Section 8). This includes: `fadeUp`, `.reveal` transitions, image hover zooms, and navbar backdrop transitions.

### Form Accessibility (Contact / Reservas)

```html
<label for="nombre">Nombre</label>
<input
  id="nombre"
  name="nombre"
  type="text"
  autocomplete="given-name"
  aria-required="true"
  aria-describedby="nombre-error"
>
<span id="nombre-error" role="alert" class="field-error"><!-- error text --></span>
```

- All inputs have associated `<label>` (not placeholder-only)
- Error messages use `role="alert"` for live announcement
- Required fields marked with `aria-required="true"`
- Form submit button is a `<button type="submit">`, never a styled `<div>`

---

## 12. Component Inventory

Complete list of UI components for the public site. Use this table as a build checklist and as a status tracker during development.

| # | Component | File (suggested) | Used on | Status |
|---|-----------|-----------------|---------|--------|
| 1 | **Navbar** — transparent, scrolled-dark variant, mobile hamburger | `components/Navbar.tsx` | All pages | — |
| 2 | **Hero** — full-viewport, left-aligned text, overlay gradient, scroll indicator | `components/Hero.tsx` | Homepage, interior page heroes | — |
| 3 | **EyebrowHeading** — eyebrow + H2 + optional lead text | `components/EyebrowHeading.tsx` | All sections | — |
| 4 | **FeatureCard** — ember border-left, title + description | `components/FeatureCard.tsx` | La Experiencia | — |
| 5 | **ProgramCard** — forest bg, ghost numeral, tag, price, arrow | `components/ProgramCard.tsx` | Homepage, /programas | — |
| 6 | **ProgramGrid** — 4-col → 2-col → 1-col layout | `components/ProgramGrid.tsx` | Homepage, /programas | — |
| 7 | **Badge** — pill label with optional icon | `components/Badge.tsx` | Program detail, program cards | — |
| 8 | **GalleryMosaic** — asymmetric grid with hover captions | `components/GalleryMosaic.tsx` | El Entorno section | — |
| 9 | **GastroStrip** — ember-bg full-width section, menu grid + image | `components/GastroStrip.tsx` | Homepage | — |
| 10 | **MenuItem** — title + description, border-top rule | `components/MenuItem.tsx` | GastroStrip, /gastronomia | — |
| 11 | **GastroAddon** — add-on callout box with left border | `components/GastroAddon.tsx` | GastroStrip, /gastronomia | — |
| 12 | **AgencyBenefit** — icon circle + title + text | `components/AgencyBenefit.tsx` | Para Agencias section | — |
| 13 | **PartnerBlock** — logo + partner name + description | `components/PartnerBlock.tsx` | Aliados section | — |
| 14 | **IncludeBox** — dark forest sidebar, bulleted list + addon pill | `components/IncludeBox.tsx` | Program detail pages | — |
| 15 | **Timeline** — dot-connected vertical itinerary list | `components/Timeline.tsx` | Program detail pages | — |
| 16 | **ItinerarySection** — split layout: itinerary + include box | `components/ItinerarySection.tsx` | Program detail pages | — |
| 17 | **CTAFinal** — dark overlay photo section with 2-col text + actions | `components/CTAFinal.tsx` | Homepage, interior page closers | — |
| 18 | **ButtonPrimary** — ember fill | `components/ui/Button.tsx` | Global | — |
| 19 | **ButtonOutline** — white border on dark bg | `components/ui/Button.tsx` | Hero, CTAFinal | — |
| 20 | **ButtonWhatsApp** — green with icon | `components/ui/Button.tsx` | CTAFinal, Para Agencias | — |
| 21 | **WhatsAppFAB** — fixed bottom-right floating button | `components/WhatsAppFAB.tsx` | All pages | — |
| 22 | **ScrollReveal** — IntersectionObserver wrapper | `components/ScrollReveal.tsx` | All animated sections | — |
| 23 | **ImageAccent** — photo wrapper with ember offset square | `components/ImageAccent.tsx` | La Experiencia | — |
| 24 | **ProgramPageHero** — large numeral background, split layout | `components/ProgramPageHero.tsx` | Individual program pages | — |
| 25 | **Footer** — 4-col grid, aliados line, legal | `components/Footer.tsx` | All pages | — |
| 26 | **NavbarMobileMenu** — off-canvas or dropdown mobile nav | `components/NavbarMobileMenu.tsx` | Mobile all pages | — |
| 27 | **SeasonNote** — small uppercase season/group-size note | `components/SeasonNote.tsx` | CTAFinal, footer | — |
| 28 | **QuoteBlock** — italic pull quote on parchment bg | `components/QuoteBlock.tsx` | El Entorno, Bajada en Balsa detail | — |
| 29 | **FloraTable** — species table with Especie / Tipo / Dato | `components/FloraTable.tsx` | /el-entorno | — |
| 30 | **FAQAccordion** — rich snippet FAQ section | `components/FAQAccordion.tsx` | /el-entorno, /gastronomia | — |
| 31 | **ContactForm** — name, email, message, program select | `components/ContactForm.tsx` | /reservas, /contacto | — |
| 32 | **AgencyContactForm** — agency-specific fields + inquiry type | `components/AgencyContactForm.tsx` | /para-agencias | — |
| 33 | **ProgramPriceTable** — program comparison table for agencies | `components/ProgramPriceTable.tsx` | /para-agencias | — |
| 34 | **BreadcrumbNav** — schema-marked breadcrumb | `components/BreadcrumbNav.tsx` | All interior pages | — |
| 35 | **ScrollIndicator** — vertical writing-mode hero indicator | `components/ScrollIndicator.tsx` | Homepage hero | — |

### Pages

| Page | Route | Key sections | Components |
|------|-------|-------------|-----------|
| Homepage | `/` | Hero, Experiencia, Programas, Entorno, Gastronomía, Aliados, Agencias, CTAFinal | 1, 3, 4, 6, 8, 9, 13, 12, 17 |
| Programas index | `/programas` | Hero, grid, brief descriptions | 2, 6, 5 |
| Programa 01 | `/programas/cabalgata-picoteo` | Hero, timeline (2 shifts), include box | 24, 16, 7 |
| Programa 02 | `/programas/potrero-al-rio` | Hero, timeline, include box | 24, 16, 7 |
| Programa 03 | `/programas/rio-al-potrero` | Hero, timeline, include box | 24, 16, 7 |
| Programa 04 | `/programas/travesia-san-pedro` | Hero, 2-day timeline, include box | 24, 16, 7 |
| El Entorno | `/el-entorno` | Hero, Fundo, Río, Flora, Fauna, FAQ | 2, 29, 30, 28 |
| Gastronomía | `/gastronomia` | Hero, Picoteo, Asado, De la Hoguera, Almuerzo, FAQ | 2, 10, 11, 30 |
| Para Agencias | `/para-agencias` | Hero, benefits, price table, contact form | 2, 12, 33, 32 |
| Contacto / Reservas | `/reservas` | Form, season note, WhatsApp | 31, 27, 20 |

---

*Last updated: 2026-10-27*  
*Design owner: Manuel — manuel@energica.city*  
*Site: loshuapes.cl · Fundo Los Huapes · Río San Pedro, Región de Los Ríos, Chile*
