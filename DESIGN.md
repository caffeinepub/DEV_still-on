# Design Brief

**Minimal interactive landing page for "Still On." — resilient web presence indicator built on ICP.**

## Direction
Full-viewport, centered hero with bold "Still On." headline and clickable light bulb icon. Light theme: cream background with charcoal text; dark theme: near-black with off-white. Golden accent marks bulb state. No scroll, no clutter. Premium minimalist tech aesthetic with smooth 0.3s transitions.

## Tone
Intentional restraint, contemporary, sophisticated, quiet confidence.

## Color Palette
| Role | Light | Dark |
|------|-------|------|
| Background | `0.96 0.01 70` cream | `0.11 0.01 70` near-black |
| Foreground | `0.12 0.01 70` charcoal | `0.94 0.01 70` off-white |
| Accent | `0.65 0.14 54` golden | `0.68 0.14 54` golden |
| Muted | `0.85 0.01 70` light-grey | `0.62 0.01 70` dark-grey |

## Typography
- Display: DM Sans, 64px, weight 700 (headline)
- Body: General Sans, 14px, weight 400 (footer)

## Structural Zones
| Zone | Treatment |
|------|-----------|
| Hero (center) | bg-background, text-foreground, accent bulb state indicator |
| Footer (bottom-right) | text-muted-foreground, 12px, absolute pinned, no scroll |

## Motion
Bulb click triggers: (1) smooth 0.3s theme transition; (2) bulb icon state shift (outlined → filled); (3) all colors transition via CSS custom properties.

## Patterns
- Bulb on = light mode; bulb off = dark mode
- Footer links: "caffeine" → https://caffeine.ai (lowercase), "ICP" → https://internetcomputer.org/
- Single interaction point, high visual hierarchy

## Constraints
- No scroll surfaces, full-viewport layout, no overflow
- Single semantic color for accent usage
- All colors via OKLCH tokens, no hardcoded hex
- Font-face declarations in index.css
