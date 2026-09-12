# Recreate the Eng007 invitation home page

## Goal
Build the desktop-only single-page engagement invitation at `/`, faithfully porting the public template’s structure, styling, artwork, content, and motion into the existing React app.

## What will be built
- Fixed translucent navigation with Home, About, and Gallery labels while keeping Home content on screen.
- Floating call and music controls matching the rose circular controls in the reference.
- Seven sections in the source order:
  1. Floral framed hero with illustrated couple, names, date, venue, and map button
  2. Live countdown with animated inset borders and corner flowers
  3. Alternating bride and groom profiles with exact source photos and botanical frames
  4. Framed wishes display with sample guest messages and previous/next controls
  5. Decorative “Send your wishes” form with name, message, sparkle, and submit controls
  6. Four-card engagement schedule carousel
  7. Location section with embedded map, date, venue details, and map button
- Exact source asset URLs from the published Eng007 image index.
- The source’s default Ananya Sharma / Aarav Verma content and 14 September 2026 event details.

## Visual fidelity
- Port the original desktop dimensions, spacing, cream-to-blush backgrounds, gold double borders, floral framing, rose and sage palette.
- Load Lora and Arizonia from Google Fonts and add a script fallback for the original Rage Italic treatment.
- Preserve the 1280px content width and 62.5% base type sizing used by the source.
- Keep the page desktop-focused as requested, with only basic overflow safety for narrower previews.

## Motion and interactions
- Add GSAP and ScrollTrigger.
- Reproduce source timings and easings for hero corner scale-ins, couple rise-in, countdown border reveal, blur-in headings, alternating profile slides, wishes frame assembly, form reveal, schedule stagger, and map/card fade-ins.
- Make countdown update live, wishes controls cycle messages, schedule cards draggable/clickable, music toggle visibly change state, and map buttons open the supplied venue link.
- Form submission will be a polished front-end confirmation only; no data will be stored.

## Technical details
- Replace the placeholder home route and add page-specific metadata.
- Define the Eng007 theme and exact layout rules in the global stylesheet using semantic tokens.
- Use React state/effects for countdown, wishes, form feedback, and controls.
- Use locally installed GSAP; no backend or persistence is needed.
- Verify the completed page at 1920×1008 against the supplied recording, including section visibility, animations, and browser console health.
