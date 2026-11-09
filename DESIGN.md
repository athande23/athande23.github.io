---
name: A&D Development Portfolio
description: A studio pin-up wall for evidence-led app project studies.
colors:
  forest: "#14241e"
  forest-deep: "#101b17"
  lime: "#d9f36a"
  coral: "#ff694a"
  lavender: "#b6a1ff"
  paper: "#f2eee3"
  ink: "#17241d"
typography:
  display:
    fontFamily: '"Bricolage Grotesque", "Arial Narrow", sans-serif'
    fontSize: "clamp(3.45rem, 7.4vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Bricolage Grotesque", "Arial Narrow", sans-serif'
    fontSize: "clamp(4.2rem, 9.5vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  title:
    fontFamily: '"Bricolage Grotesque", "Arial Narrow", sans-serif'
    fontSize: "clamp(1.35rem, 2.2vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  body:
    fontFamily: '"Source Sans 3", "Helvetica Neue", sans-serif'
    fontSize: "1.06rem"
    lineHeight: 1.55
  label:
    fontFamily: '"Source Sans 3", "Helvetica Neue", sans-serif'
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.12em"
rounded:
  focus: "2px"
  chip: "2rem"
  circular: "50%"
spacing:
  page-gutter: "clamp(1.25rem, 5vw, 5.5rem)"
  header-height: "5.25rem"
components:
  project-nav-active:
    textColor: "{colors.lime}"
  project-nav-underline:
    backgroundColor: "{colors.lime}"
    height: "2px"
  project-sheet:
    padding: "clamp(3.5rem, 7vw, 7rem) {spacing.page-gutter}"
---

# Design System: A&D Development Portfolio

## Overview

**Creative North Star: "Studio Pin-up Wall"**

Each project reads as a full-width studio sheet: a distinct color field, a repeated two-column composition, and project evidence beside a concise explanation. The voice is confident and studio-like, using graphic structure and crisp annotation rather than ornamental framing. Six interface studies are composed from HTML and CSS and explicitly identified as illustrative.

Deep forest and warm paper anchor the system; lime, coral, and lavender distinguish project fields and interface details. Bricolage Grotesque gives project names and short statements a compact, expressive silhouette, while Source Sans 3 carries the explanatory and navigational text. Square panels and fine separators dominate; circles and pills recur as purposeful marks and controls. A broad soft shadow is reserved for the illustrative app panels.

**Key Characteristics:**
- Full-width project sheets share a centered two-column desktop grid.
- Forest and paper anchor vivid lime, coral, and lavender project fields.
- Evidence-led project copy sits beside clearly labeled illustrative studies.
- Project category labels directly follow project titles.
- A persistent project navigator pairs its active link with a live project count.

## Colors

Deep forest and warm paper form the base, with vivid lime, coral, and lavender used as sheet fields, active states, and clear interface accents.

### Primary
- **Deep Forest** (`{colors.forest}`): Main dark field for Haps, the navigator, and the contact close.

### Secondary
- **Signal Lime** (`{colors.lime}`): MealSort's sheet, selected navigation, wordmark detail, and interface highlights.

### Tertiary
- **Studio Coral** (`{colors.coral}`): InfoDash's field, title punctuation, focus outlines, and selected interface marks.
- **Soft Lavender** (`{colors.lavender}`): CareerGrid's field, the archive callout, and interface accents.

### Neutral
- **Forest Ink** (`{colors.forest-deep}`): Masthead, footer, and GroLocal's dark sheet.
- **Warm Paper** (`{colors.paper}`): Site canvas, Folio's sheet, light study panels, and text on dark fields.
- **Forest Text** (`{colors.ink}`): Default text on the paper canvas.

### Named Rules
**The Sheet-Color Rule.** Give each project one dominant field from the established palette; use readable contrasting text and reserve accents for clear marks and states.

## Typography

**Display Font:** Bricolage Grotesque (with Arial Narrow, sans-serif fallback)  
**Body Font:** Source Sans 3 (with Helvetica Neue, sans-serif fallback)  
**Label/Mono Font:** Source Sans 3; no separate mono face is used.

**Character:** Bricolage Grotesque is compact, expressive, and tightly tracked. Source Sans 3 keeps explanations, credits, navigation, categories, and interface annotations practical and legible. Both families are loaded from Google Fonts.

### Hierarchy
- **Display** (700, `clamp(3.45rem, 7.4vw, 6rem)`, 0.88): Project titles after the lead Haps title; large study headlines use the same family and tight tracking.
- **Headline** (700, `clamp(4.2rem, 9.5vw, 6rem)`, 0.88): Lead project title; the contact statement uses its own viewport-aware clamp in the same display style.
- **Title** (600, `clamp(1.35rem, 2.2vw, 2rem)`, 1.12): Short project summaries.
- **Body** (400, 1.06rem, 1.55): Project descriptions, capped at 38ch on desktop.
- **Label** (700, 0.78rem, 0.12em, uppercase): Project categories beneath titles; smaller tracked variants label studies and compact interface details.

### Named Rules
**The Tight-Title Rule.** Keep display headlines large, tightly tracked, and compact; use the body family for project explanations rather than extending display styling into paragraphs.

## Layout

Project sheets use a centered inner grid capped at 88rem, with a narrower copy column beside a wider illustrative study. The page gutter scales with the viewport (`clamp(1.25rem, 5vw, 5.5rem)`); project sheets use a viewport-aware minimum height and switch to a 52rem minimum at widths from 1500px. At 900px and below, the sticky six-project navigator moves its links to a horizontally scrollable second row and sheets stop enforcing a viewport-height minimum. At 640px and below, project content stacks copy before the study, the masthead note disappears, archive and contact layouts adapt to narrower columns, and the gutter becomes 1.2rem.

**The Shared-Sheet Rule.** Keep project copy and its illustrative study aligned within the same centered grid; change the background field by project, not the underlying composition.

## Elevation & Depth

Depth comes primarily from project color fields, contrast, and fine separators. Illustrative app windows use the single broad soft shadow to separate the study from its sheet; other page surfaces remain flat.

### Shadow Vocabulary
- **Interface-study lift** (`0 2rem 4rem rgb(0 0 0 / 18%)`): Separates illustrative app windows from their project fields.

### Named Rules
**The One-Lift Rule.** Keep the broad shadow scoped to illustrative interface panels; use color fields and fine borders elsewhere.

## Shapes

Project sheets and app-study panels are rectangular and square-cornered. Fine rules organize panel content; rounded forms are local and purposeful: filter chips use a full pill, while status marks, dots, and other small interface details use circles. Keyboard focus outlines have a subtle 2px radius.

## Components

### Navigation
- **Character:** A persistent, dark wayfinding strip that stays quiet until a project is active.
- **Style:** Deep forest surface, muted paper-toned labels, and lime for the selected project.
- **Active state:** `aria-current="location"` changes the link to lime and reveals a 2px underline that scales in from the left; the live counter follows the most visible project.
- **Responsive behavior:** At 900px and below, links occupy a second row and scroll horizontally; the project count remains visible beside the section label.
- **Keyboard:** Links retain a visible coral focus outline with offset.

### Text links
- **Character:** Underlined, typographic calls to the next project or contact section; no filled-button treatment.
- **Style:** Inherit the sheet's text color, use a fine bottom rule, and pair with a small inline SVG arrow.
- **Hover / focus:** The arrow shifts slightly; keyboard focus receives the shared coral outline.

### Project sheets
- **Character:** Six full-width, color-blocked studies using the same two-column grid.
- **Style:** A large title is followed by its tracked category, summary, description, maker credit, and next-step link; the illustrative study sits alongside.
- **Responsive behavior:** Preserve copy-first order when the columns collapse at the small breakpoint.

### Interface-study panels
- **Character:** Self-contained illustrative app views composed in HTML and CSS.
- **Style:** Rectangular light panels, compact Source Sans 3 annotations, display-family subheads, fine separators, and the interface-study lift shadow.
- **Content treatment:** Keep the illustrative label visible and make examples read as examples, not as captured live product screens.

### Filter chips
- **Style:** Small outlined pills inside the Haps study; the selected chip uses a forest fill and paper text.
- **Shape:** Fully rounded (`2rem`); keep the treatment local to this interface-study control.

### Contact
- **Character:** A direct, headline-led invitation paired with a ruled contact placeholder; it begins with the statement rather than a separate label.
- **Responsive behavior:** Copy and placeholder stack on small screens.

## Do's and Don'ts

### Do:
- **Do** use the forest, lime, coral, lavender, paper, and forest-text tokens for recurring system colors.
- **Do** keep sheets on the shared desktop grid and stack copy before study panels on mobile.
- **Do** place each project category directly beneath its title.
- **Do** show the active project in both the lime underline state and the live project counter.
- **Do** identify illustrative interface studies as illustrative.
- **Do** honor reduced-motion preferences and maintain a visible keyboard-focus treatment.

### Don't:
- **Don't** use the large interface-panel shadow as a generic elevation style.
- **Don't** extend pill-shaped chip geometry to project sheets or interface panels.
- **Don't** compress the mobile project list until labels collide; retain its horizontal scrolling behavior.
