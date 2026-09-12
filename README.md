# Elegant Invitation Reimagined

Recreate the home page of https://eng007-livedemo.invitationnation.in/#home as accurately as possible, using React.js only (no other framework), desktop screen size only. Evaluation is on accuracy of elements, overall theme, design, and animations.

Ground it in the real source (it's a public template bundle — fetch these and port them faithfully rather than improvising):
1. Component JS (contains JSX structure + GSAP ScrollTrigger animations with exact easings/durations): https://eng007-livedemo.invitationnation.in/assets/Eng007-BIvjybfi.js (includes all section CSS inline + default content data), plus eng007-HomePage-Dz6_o9-w.js, eng007-HeroSection-ChNMdMrB.js, eng007-Countdown-CsI6HQQ_.js, eng007-AboutCouple-DsswOPIZ.js, eng007-WishesSection-0PlDC0I-.js, eng007-SendWishes-DY36T_eF.js, eng007-Schedule-CPf2JpmL.js, eng007-Location-mEpebMKE.js (all under /assets/).
2. Image assets index (use these exact URLs): https://cdn-admin.invitationnation.in/media/eng007/index/index.json — keys topleft, topright, bottomleft, bottomright, herocouple, texture, countflowerleft, countflowerright, wishesleft/right/top/bottom, wishesflower, quotes, etc.
3. The attached screen recording shows the rendered page and its animations — match element placement and motion to it.

Home page section order (from eng007-HomePage): HeroSection → Countdown → AboutCouple → WishesSection → SendWishes → Schedule → Location, with the shared Navbar (Home/About/Gallery tabs; only Home content needed for the home page) and a floating music button.

Theme tokens from source CSS: html font-size 62.5%; max container 128rem; hero background linear-gradient(180deg,#fff 18.75%,#f3e4e4); accent text Lora serif #697358; names/headers Arizonia cursive #9e5a61; buttons #9e5a61 with white text, border-radius 20px; fonts Lora, Arizonia, Rage Italic (Google Fonts). Default content: invitation text "Together with their families, we cordially invite you to celebrate the engagement of our beloved children"; couple Ananya Sharma & Aarav Verma; event date 2026-09-14T10:00:00 with live countdown; venue Royal Orchid Convention Center; schedule: Ring Ceremony 10:30 AM, Champagne Toast 11:30 AM, Gala Lunch 01:00 PM, Live Music 02:30 PM.

Reproduce the GSAP-style animations (hero corner decorations scale in from corners, scroll-triggered fades/slides, countdown border-inset animation, blur-in titles) using GSAP + ScrollTrigger via npm so motion matches the original. Deliver a polished single-page React app faithful to the original on desktop.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://lovestruck-react-render.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8725f3f9-53b6-47c2-9ae9-518cae46b6e2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
