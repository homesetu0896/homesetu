# HomeSetu — Phase 1 Changes

## What's in this folder

| File | Where to put it in your project |
|---|---|
| layout.js | app/layout.js (replace existing) |
| page.js | app/page.js (replace existing) |
| Navbar.js | components/Navbar.js (replace existing) |
| Hero.js | components/Hero.js (replace existing) |

---

## Step-by-step instructions

### 1. Replace layout.js
Open `D:\Business\HomeSetu\WebSite\homesetu\app\layout.js`
Replace the entire file with the contents of `layout.js` from this folder.

What changed:
- Title is now "HomeSetu — Trusted Home Services in Your City"
- Added description, keywords, author
- Added Open Graph tags (controls how your site looks when shared on WhatsApp, Facebook, etc.)
- Added Twitter card tags
- Added metadataBase — change "https://homesetu.in" to your actual domain once you have one

### 2. Replace page.js
Open `D:\Business\HomeSetu\WebSite\homesetu\app\page.js`
Replace with the contents of `page.js` from this folder.

What changed:
- Added per-page metadata (title + description)
- Content is identical — all your components are still there

### 3. Replace Navbar.js
Open `D:\Business\HomeSetu\WebSite\homesetu\components\Navbar.js`
Replace with the contents of `Navbar.js` from this folder.

What changed:
- Added "HS" logo mark in teal
- "HomeSetu" text with teal accent on "Setu"
- Working navigation links (scrolls to sections using #id)
- "Book a Service" CTA button
- Mobile hamburger menu that opens/closes
- Sticky top bar so navbar stays visible while scrolling

### 4. Replace Hero.js
Open `D:\Business\HomeSetu\WebSite\homesetu\components\Hero.js`
Replace with the contents of `Hero.js` from this folder.

What changed:
- Real headline: "Trusted home services, booked in minutes"
- Real description text for HomeSetu
- Stats row: 500+ customers, 50+ workers, 6 service types
- Two CTA buttons: "Book a Service" and "View Services"
- Service preview cards grid on the right side (desktop only)
- Location badge: "Serving Vadodara & nearby areas"

---

## After replacing files

Run your dev server:
```
cd D:\Business\HomeSetu\WebSite\homesetu
npm run dev
```

Open http://localhost:3000 and you should see:
- Browser tab now shows "HomeSetu — Trusted Home Services in Your City"
- New navbar with logo and mobile menu
- New hero section with real content

---

## Things to customise further

In Hero.js:
- Update the stats (500+, 50+) to your real numbers
- Change "Vadodara & nearby areas" to your actual service area

In layout.js:
- Change "https://homesetu.in" to your real domain (or leave it for now)
- Update keywords if you serve other cities

In Navbar.js:
- The "HS" logo — you can replace this with an actual <img> tag pointing to your logo file

---

## Do the section IDs exist?

For the navbar links to work (/#services, /#workers, etc.), your existing
components need matching id attributes on their outermost element. Example:

In Services.js:   <section id="services" ...>
In Workers.js:    <section id="workers" ...>
In Reviews.js:    <section id="reviews" ...>
In ContactForm.js: <section id="contact" ...>

If they don't have these yet, just add id="services" etc. to the top element
of each component. Ask Claude if you need help with this.