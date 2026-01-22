# Product Requirements Document
## Terence Fox Portfolio Website

**Version:** 1.0  
**Date:** January 19, 2026  
**Author:** Terence Fox  
**Target Audience:** Claude Code (implementation)

---

## 1. Project Overview

### Purpose
Create a single-page professional portfolio website for Terence Fox, Technical Product Manager. The site serves as a compact, scannable showcase of professional experience, targeting hiring managers and recruiters in the tech industry.

### Goals
- Present professional credentials quickly and clearly
- Enable easy contact and resume download
- Load in under 2 seconds
- Maintain brand consistency with existing identity guidelines
- Provide expandable project details without cluttering initial view

### Success Metrics
- Load time: <2 seconds
- Mobile responsive across devices
- Accessible (WCAG AA compliance)
- No framework bloat (vanilla HTML/CSS/JS preferred)

---

## 2. Brand Guidelines

### Visual Identity
**Color Palette:**
- Ink Black: `#0B0B0B` (primary text)
- Paper White: `#F4F2ED` (background)
- Stone Gray: `#5A5F5B` (secondary text)
- Burnt Clay: `#D45500` (accent, use sparingly)

**Typography:**
- Headings: Trade Gothic Condensed or Compacta (ALL CAPS)
- Fallback: Arial Narrow, "Helvetica Neue Condensed", sans-serif
- Body: Inter or Franklin Gothic Book
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- Code/Metadata: JetBrains Mono or SF Mono
- Fallback: "Courier New", monospace

**Logo Usage:**
- Circular mark functions as personal seal
- Use in footer only
- Never as decorative pattern or primary header
- Image file: `/mnt/project/logo.png`

**Design Principles:**
- Single-column layouts
- Generous margins and whitespace
- Left-aligned text
- Minimal hierarchy
- Content carries the brand
- Restrained, no excessive formatting

### Voice & Tone
- Plainspoken and direct
- Short sentences
- No buzzwords or jargon
- Write as if explaining to a trusted teammate
- Grounded, precise, low-ego, outcome-focused

---

## 3. Site Structure

### Single-Page Layout (Sections in Order)

1. **Hero**
2. **About**
3. **Selected Work**
4. **Contact**

### Navigation
- Fixed/sticky navigation bar with anchor links
- Links: About | Work | Contact
- Smooth scroll behavior
- Mobile: hamburger menu optional (prefer visible links if space allows)

---

## 4. Section Specifications

### 4.1 Hero Section

**Content:**
- Name: "TERENCE FOX" (all caps, large heading)
- Title: "Technical Product Manager"
- Optional positioning statement (1 line, ~10-15 words)
  - Example: "Building products that bridge technical complexity and user needs"

**Design:**
- Full viewport height recommended
- Vertically centered content
- Minimal decoration
- Consider subtle logo watermark (very low opacity, non-distracting)

**Technical:**
- Semantic HTML: `<header>` with `<h1>` for name
- Accessible heading hierarchy
- No animation (or very subtle fade-in only)

---

### 4.2 About Section

**Content:**
Approximately 2-3 paragraphs (source from resume):

*Paragraph 1:* Technical Product Manager with over 9 years of experience driving innovative projects that elevate user experiences and streamline operations. Expertise in architectural strategy and implementation in complex broadcasting environments, bridging technical solutions and business objectives.

*Paragraph 2:* Proven track record leading cross-functional teams through design sprints and agile methodologies to deliver exceptional products. Passionate about creating intuitive platforms that fulfill client needs and enhance operational efficiency.

*Paragraph 3 (optional):* Currently at Peacock, previously at Avanade. Committed to fostering collaboration among diverse global stakeholders to achieve strategic goals.

**Design:**
- Standard text width (max-width: 680px recommended)
- Comfortable line height (1.6-1.8)
- Adequate spacing between paragraphs (1.5em)

**Technical:**
- Semantic HTML: `<section id="about">`
- Paragraph tags: `<p>`

---

### 4.3 Selected Work Section

**Structure:**
Display 3 project cards. Each card shows:

**Collapsed State:**
- Project title (heading)
- Role (subheading or metadata line)
- One-line outcome/impact statement
- Expand indicator (+ icon or chevron)

**Expanded State:**
- All collapsed content remains visible
- Additional 3-4 bullet points appear below
- Bullets cover: context, specific contributions, measurable impact
- Indicator changes to collapse icon (- or up chevron)

**Project 1: Peacock Live Streaming Platform**
- **Role:** Technical Product Manager
- **Outcome:** Developed unified live streaming platform for Comcast/NBCUniversal serving Africa, Europe, and North America
- **Expanded Details:**
  - Spearheaded greenfield project for global streaming services
  - Coordinated with stakeholders across three continents to establish consistent architecture
  - Led design sprint with external agency, creating interface that tripled event management capacity
  - Enhanced development processes for cross-functional team of 18 engineers

**Project 2: NFL Wildcard Broadcast**
- **Role:** Software Engineer â†’ Technical Product Manager
- **Outcome:** Contributed to streaming system that achieved record viewership for NFL wildcard game on Peacock
- **Expanded Details:**
  - Developed internal tools for live event streaming using TypeScript and Angular
  - Implemented features optimizing control and management of live broadcasts
  - Collaborated with cross-functional teams to prioritize features for high-stakes delivery
  - Ensured high-quality, testable code supporting complex broadcasting scenarios

**Project 3: Enterprise Architecture (Avanade)**
- **Role:** Senior Analyst, Software Engineering
- **Outcome:** Designed architectural solutions across finance, healthcare, and retail sectors for Fortune 500 clients
- **Expanded Details:**
  - Led projects from concept to successful 1.0 release through all phases
  - Aligned technical approaches with industry-specific needs
  - Developed and delivered comprehensive training programs (React/Angular) for 30+ team members
  - Contributed AR expertise to emergency Microsoft HoloLens project enabling ventilator production retooling during COVID-19

**Design:**
- Card-based layout
- Clear visual separation between cards
- Subtle border or background color for cards
- Adequate padding/spacing
- Hover state for interactivity indication
- Smooth expansion animation (CSS transition, ~300ms)

**Interaction Behavior:**
- **Option A (Recommended):** Accordion style - one card expanded at a time
- **Option B:** Independent - multiple cards can be expanded simultaneously
- **Decision:** Use Option A for cleaner experience

**Technical:**
- Semantic HTML: `<section id="work">`
- Each card: `<article>` or `<div class="project-card">`
- JavaScript for expand/collapse interaction
- CSS transitions for smooth animation
- Accessible: ARIA attributes for expandable regions
  - `aria-expanded="true|false"`
  - `aria-controls` linking button to content region
  - Keyboard navigation support (Enter/Space to toggle)

---

### 4.4 Contact Section

**Content:**
- Section heading: "CONTACT"
- Email: terence.fo@gmail.com (clickable mailto: link)
- LinkedIn: Link to profile with visible URL or button
- Resume: Download button/link for PDF
  - File: `/mnt/project/Terence_Fox__Technical_Product_Manager.pdf`
  - Button text: "Download Resume" or "Resume (PDF)"

**Optional Elements:**
- Brief CTA text: "Let's connect" or "Get in touch"
- Location: Brooklyn, NY (if desired)

**Design:**
- Centered or left-aligned (consistent with rest of site)
- Clear, large buttons/links
- Email and LinkedIn as prominent text links or subtle buttons
- Resume button slightly more prominent (accent color optional)
- Adequate spacing between elements

**Technical:**
- Semantic HTML: `<section id="contact">`
- Proper link types:
  - Email: `<a href="mailto:terence.fo@gmail.com">`
  - LinkedIn: `<a href="[URL]" target="_blank" rel="noopener noreferrer">`
  - Resume: `<a href="/path/to/resume.pdf" download>`

---

### 4.5 Footer

**Content:**
- Logo (circular mark)
- Copyright: "Â© 2026 Terence Fox"
- Optional: Small text "Built with care" or similar understated note

**Design:**
- Minimal, small text
- Logo at reduced size (40-60px)
- Centered or right-aligned
- Subtle top border or spacing to separate from contact section

**Technical:**
- Semantic HTML: `<footer>`
- Logo as `<img>` with proper alt text

---

## 5. Technical Requirements

### 5.1 Technology Stack

**Preferred Approach:**
- Pure HTML5, CSS3, vanilla JavaScript
- No frameworks (React, Vue, etc.) - unnecessary for this scope
- No CSS frameworks (Bootstrap, Tailwind) - custom CSS preferred for minimal footprint

**Rationale:**
- Faster load times
- No dependency management
- Full control over styling
- Easier maintenance
- Aligns with brand values (restrained, precise)

### 5.2 Performance Requirements

**Load Time:**
- Target: <2 seconds on 3G connection
- Lighthouse performance score: >90

**Optimization Strategies:**
- Inline critical CSS
- Defer non-critical JavaScript
- Optimize images (compress logo PNG)
- Minimize HTTP requests
- Use modern image formats (WebP with PNG fallback)
- No external font loading (use system font stack)

### 5.3 Responsive Design

**Breakpoints:**
- Mobile: <768px
- Tablet: 768px-1024px
- Desktop: >1024px

**Mobile Considerations:**
- Single column layout maintained
- Larger tap targets (min 44x44px)
- Readable font sizes (min 16px body text)
- Adequate spacing between interactive elements
- Hamburger menu if navigation needs collapse
- Test on iOS Safari and Android Chrome

### 5.4 Accessibility

**WCAG AA Compliance:**
- Color contrast: 4.5:1 for body text, 3:1 for large text
- Semantic HTML throughout
- Proper heading hierarchy (h1 â†’ h2 â†’ h3)
- Alt text for all images (logo: "Terence Fox logo")
- Keyboard navigation support
- Focus indicators for all interactive elements
- ARIA labels where appropriate
- Skip link for navigation

**Testing:**
- Run axe DevTools or Lighthouse accessibility audit
- Keyboard navigation test
- Screen reader test (NVDA/JAWS/VoiceOver)

### 5.5 Browser Support

**Target Browsers:**
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari iOS 14+
- Chrome Android (last 2 versions)

**Graceful Degradation:**
- Use feature detection, not browser detection
- Provide fallbacks for modern CSS (CSS Grid â†’ Flexbox â†’ Block)
- Test without JavaScript enabled (content must be accessible)

### 5.6 SEO Requirements

**Meta Tags:**
```html
<title>Terence Fox | Technical Product Manager</title>
<meta name="description" content="Technical Product Manager with 9+ years experience in live streaming, broadcasting, and enterprise architecture. Currently at Peacock.">
<meta name="keywords" content="technical product manager, software engineer, product management, live streaming, broadcasting">
<meta name="author" content="Terence Fox">

<!-- Open Graph -->
<meta property="og:title" content="Terence Fox | Technical Product Manager">
<meta property="og:description" content="Technical Product Manager with 9+ years experience">
<meta property="og:type" content="website">
<meta property="og:url" content="[SITE_URL]">
<meta property="og:image" content="[LOGO_URL]">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Terence Fox | Technical Product Manager">
<meta name="twitter:description" content="Technical Product Manager with 9+ years experience">
```

**Structured Data (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Terence Fox",
  "jobTitle": "Technical Product Manager",
  "url": "[SITE_URL]",
  "email": "terence.fo@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brooklyn",
    "addressRegion": "NY",
    "addressCountry": "USA"
  }
}
```

### 5.7 Hosting & Deployment

**Recommendations:**
- Static site hosting (Netlify, Vercel, GitHub Pages, or Cloudflare Pages)
- HTTPS required
- Custom domain support
- CDN for optimal delivery

**Files to Deploy:**
- index.html
- styles.css (or inline in HTML)
- script.js
- logo.png
- resume.pdf
- favicon.ico (derived from logo)

---

## 6. File Structure

```
portfolio/
â”œâ”€â”€ index.html          # Main HTML file
â”œâ”€â”€ css/
â”‚   â””â”€â”€ styles.css      # All styles (or inline in HTML)
â”œâ”€â”€ js/
â”‚   â””â”€â”€ script.js       # Interaction logic
â”œâ”€â”€ assets/
â”‚   â”œâ”€â”€ logo.png        # Logo image
â”‚   â””â”€â”€ favicon.ico     # Favicon
â””â”€â”€ files/
    â””â”€â”€ Terence_Fox_Resume.pdf
```

**Alternative (Single File):**
For maximum performance, inline all CSS and JS directly in index.html. This eliminates additional HTTP requests.

---

## 7. Interaction Specifications

### 7.1 Navigation

**Smooth Scrolling:**
```javascript
// Smooth scroll to sections on anchor link click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
```

**Active Link Highlighting:**
- Highlight navigation link for section currently in viewport
- Use Intersection Observer API for efficient scroll detection

### 7.2 Project Card Expansion

**Behavior:**
- Click anywhere on collapsed card to expand
- Click again to collapse
- Accordion style: expanding one card auto-collapses others
- Smooth height transition (CSS)
- Icon rotation (+ to Ã—, or â†“ to â†‘)

**Implementation Pattern:**
```javascript
// Toggle expanded state
function toggleCard(cardElement) {
  const isExpanded = cardElement.classList.contains('expanded');
  
  // Collapse all cards (accordion behavior)
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.remove('expanded');
    card.setAttribute('aria-expanded', 'false');
  });
  
  // Expand clicked card if it was collapsed
  if (!isExpanded) {
    cardElement.classList.add('expanded');
    cardElement.setAttribute('aria-expanded', 'true');
  }
}
```

**CSS:**
```css
.project-details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.project-card.expanded .project-details {
  max-height: 500px; /* Adjust based on content */
}
```

### 7.3 Keyboard Navigation

**Requirements:**
- Tab through all interactive elements in logical order
- Enter/Space to activate buttons and expand cards
- Escape to collapse expanded card (optional enhancement)
- Focus visible on all interactive elements

### 7.4 Hover States

**Interactive Elements:**
- Navigation links: subtle underline or color change
- Project cards: subtle border color change or shadow
- Email/LinkedIn links: color change to accent color
- Resume button: background color change or subtle lift

**Animation:**
- Use CSS transitions, ~200-300ms duration
- Respect `prefers-reduced-motion` media query

---

## 8. Content Guidelines

### 8.1 Writing Style

**Principles:**
- Direct, no fluff
- Active voice preferred
- Concrete over abstract
- Quantify when possible (numbers, percentages, scale)
- Past tense for completed projects
- Present tense for current role

**Examples:**
- Good: "Tripled event management capacity for operators"
- Bad: "Significantly improved the ability of operators to manage events"

- Good: "Led team of 18 engineers"
- Bad: "Managed a large engineering team"

### 8.2 Outcome Statements

**Formula:** [Action Verb] + [What] + [Measurable Impact]

**Examples:**
- "Developed platform serving three continents"
- "Achieved record viewership of [X] million concurrent viewers"
- "Reduced deployment time by 40%"
- "Trained 30+ team members in modern frameworks"

### 8.3 Tone Consistency

**This Brand:**
- "Built a unified platform"
- "Coordinated with stakeholders"
- "Led design sprint"

**NOT This Brand:**
- "Architected a cutting-edge, innovative solution"
- "Synergized cross-functional teams"
- "Spearheaded transformational initiatives"

---

## 9. Design System

### 9.1 Typography Scale

```css
/* Type scale (1.25 ratio) */
--font-size-xs: 0.64rem;   /* 10px */
--font-size-sm: 0.8rem;    /* 13px */
--font-size-base: 1rem;    /* 16px */
--font-size-lg: 1.25rem;   /* 20px */
--font-size-xl: 1.563rem;  /* 25px */
--font-size-2xl: 1.953rem; /* 31px */
--font-size-3xl: 2.441rem; /* 39px */
--font-size-4xl: 3.052rem; /* 49px */
--font-size-5xl: 3.815rem; /* 61px */
```

**Usage:**
- Hero name: `--font-size-5xl` (mobile: `--font-size-4xl`)
- Hero title: `--font-size-xl`
- Section headings: `--font-size-3xl` (mobile: `--font-size-2xl`)
- Project titles: `--font-size-xl`
- Body text: `--font-size-base`
- Metadata: `--font-size-sm`

### 9.2 Spacing Scale

```css
/* Spacing scale (8px base) */
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */
```

**Usage:**
- Section padding: `--space-3xl` (mobile: `--space-xl`)
- Element spacing: `--space-lg`
- Card padding: `--space-md`
- Paragraph spacing: `--space-sm`

### 9.3 Color Variables

```css
:root {
  --color-ink-black: #0B0B0B;
  --color-paper-white: #F4F2ED;
  --color-stone-gray: #5A5F5B;
  --color-burnt-clay: #D45500;
  
  /* Semantic colors */
  --color-text-primary: var(--color-ink-black);
  --color-text-secondary: var(--color-stone-gray);
  --color-background: var(--color-paper-white);
  --color-accent: var(--color-burnt-clay);
}
```

### 9.4 Shadows & Borders

```css
/* Subtle shadows */
--shadow-sm: 0 1px 2px rgba(11, 11, 11, 0.05);
--shadow-md: 0 4px 6px rgba(11, 11, 11, 0.07);
--shadow-lg: 0 10px 15px rgba(11, 11, 11, 0.1);

/* Borders */
--border-width: 1px;
--border-color: rgba(11, 11, 11, 0.1);
--border-radius: 2px; /* Minimal, almost sharp */
```

**Usage:**
- Project cards: `--shadow-sm`, hover: `--shadow-md`
- Borders: use sparingly, prefer spacing for separation

---

## 10. Testing Checklist

### 10.1 Functional Testing

- [ ] Navigation links scroll to correct sections
- [ ] Smooth scroll behavior works
- [ ] Active nav link highlights correctly
- [ ] Project cards expand/collapse correctly
- [ ] Only one card expanded at a time (accordion)
- [ ] Email link opens mail client
- [ ] LinkedIn link opens in new tab
- [ ] Resume downloads correctly
- [ ] All interactions work on touch devices

### 10.2 Visual Testing

- [ ] Layout matches design at all breakpoints
- [ ] Typography renders correctly
- [ ] Colors match brand guide exactly
- [ ] Logo displays correctly in footer
- [ ] Adequate whitespace throughout
- [ ] No layout shifts during page load
- [ ] Consistent spacing between elements

### 10.3 Performance Testing

- [ ] Lighthouse score >90 (performance)
- [ ] Load time <2 seconds (3G throttled)
- [ ] Images optimized and compressed
- [ ] No unnecessary JavaScript
- [ ] CSS is minified (production)
- [ ] No render-blocking resources

### 10.4 Accessibility Testing

- [ ] Lighthouse accessibility score 100
- [ ] Keyboard navigation works fully
- [ ] Focus indicators visible
- [ ] Screen reader announces content correctly
- [ ] Color contrast passes WCAG AA
- [ ] Alt text present on all images
- [ ] Semantic HTML throughout
- [ ] ARIA attributes correct

### 10.5 Cross-Browser Testing

- [ ] Chrome (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (desktop & iOS)
- [ ] Edge (desktop)
- [ ] Test on actual devices, not just dev tools

### 10.6 Mobile Testing

- [ ] Readable text (no zoom required)
- [ ] Touch targets adequate size
- [ ] No horizontal scrolling
- [ ] Comfortable thumb zones for primary actions
- [ ] Fast interaction response (no lag)

---

## 11. Content Assets

### 11.1 Text Content

All copy is sourced from:
- Resume: `/mnt/project/Terence_Fox__Technical_Product_Manager.pdf`
- Brand guide: `/mnt/project/Terence_Fox_Brand_Guide_v2.pdf`

### 11.2 Visual Assets

**Logo:**
- File: `/mnt/project/logo.png`
- Usage: Footer only
- Size: Display at 48px diameter
- Alt text: "Terence Fox logo"

**Favicon:**
- Derive from logo.png
- Sizes: 16x16, 32x32, 48x48 (at minimum)
- Format: ICO or PNG

**Resume:**
- File: `/mnt/project/Terence_Fox__Technical_Product_Manager.pdf`
- Ensure proper linking for download
- File size: Keep under 500KB if possible

### 11.3 External Links

**LinkedIn:**
- URL: [To be provided by Terence]
- Link text: "LinkedIn" or "View LinkedIn Profile"

**Email:**
- Address: terence.fo@gmail.com
- Format: mailto:terence.fo@gmail.com

---

## 12. Future Enhancements (Out of Scope for V1)

- Blog or writing section
- Case study deep-dives (separate pages)
- Testimonials or recommendations
- Skills or tools section
- Speaking engagements or publications
- Dark mode toggle
- Animations on scroll (subtle)
- Project images or screenshots
- Google Analytics or privacy-focused analytics

---

## 13. Implementation Notes for Claude Code

### 13.1 Development Approach

**Priority Order:**
1. HTML structure (semantic, accessible)
2. Content population (accurate, proofread)
3. CSS styling (brand-compliant)
4. JavaScript interactions (smooth, reliable)
5. Performance optimization
6. Testing & refinement

**Key Principles:**
- Write clean, readable code
- Comment sparingly but meaningfully
- Use consistent naming conventions (BEM or similar)
- Validate HTML and CSS
- Test in browser frequently

### 13.2 File Organization

**Option A: Single File (Recommended for V1)**
- Inline all CSS and JS in index.html
- Fewer HTTP requests
- Faster initial load
- Easier deployment

**Option B: Separate Files**
- Better code organization
- Easier future maintenance
- Only if project grows beyond initial scope

### 13.3 Code Style

**HTML:**
- Semantic elements over divs
- Proper nesting and indentation
- Self-closing tags for void elements
- Lowercase tag names and attributes

**CSS:**
- Use CSS custom properties (variables)
- Mobile-first media queries
- Group related styles
- Avoid !important (use specificity correctly)
- Use rem for sizes, px for borders

**JavaScript:**
- Modern ES6+ syntax
- Const/let over var
- Arrow functions where appropriate
- Descriptive variable names
- Error handling where needed

### 13.4 Common Pitfalls to Avoid

- Don't use a CSS framework (Bootstrap, etc.)
- Don't use a JS framework (React, Vue, etc.)
- Don't load external fonts (use system stack)
- Don't add unnecessary animations
- Don't over-complicate the design
- Don't deviate from brand colors
- Don't make logo prominent (footer only)
- Don't use buzzwords in copy

---

## 14. Success Criteria

**V1 is complete when:**

1. All four sections are present and accurate
2. Navigation works smoothly
3. Project cards expand/collapse correctly
4. Site loads in <2 seconds
5. Fully responsive on mobile
6. Passes accessibility audit (WCAG AA)
7. Tested in target browsers
8. Resume downloads correctly
9. All links work
10. Client (Terence) approves design and content

---

## 15. Approval & Sign-off

**Stakeholder:** Terence Fox

**Review Areas:**
- Content accuracy (proofread all text)
- Brand alignment (colors, typography, voice)
- Functionality (all interactions work)
- Performance (fast load, smooth scrolling)
- Mobile experience (test on actual device)

**Approval Process:**
1. Initial build review
2. Feedback incorporation
3. Final review
4. Deployment approval

---

## Appendix A: Design Reference

### Color Palette (Reminder)
- Ink Black: `#0B0B0B`
- Paper White: `#F4F2ED`
- Stone Gray: `#5A5F5B`
- Burnt Clay: `#D45500`

### Typography (Reminder)
- **Headings:** Trade Gothic Condensed / Compacta (ALL CAPS)
  - Fallback: Arial Narrow, "Helvetica Neue Condensed"
- **Body:** Inter or Franklin Gothic Book
  - Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI"
- **Code:** JetBrains Mono / SF Mono
  - Fallback: "Courier New", monospace

### Font Loading Strategy
Use system font stack (no web fonts) for optimal performance:

```css
:root {
  --font-heading: "Arial Narrow", "Helvetica Neue Condensed", Arial, sans-serif;
  --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "SF Mono", "Monaco", "Courier New", monospace;
}
```

---

## Appendix B: Sample HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Terence Fox | Technical Product Manager</title>
  <!-- Additional meta tags per SEO requirements -->
  <style>
    /* Inline CSS here or link to external stylesheet */
  </style>
</head>
<body>
  <!-- Skip link for accessibility -->
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <!-- Navigation -->
  <nav class="nav">
    <a href="#about">About</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
  </nav>
  
  <!-- Hero Section -->
  <header class="hero">
    <h1>TERENCE FOX</h1>
    <p class="subtitle">Technical Product Manager</p>
  </header>
  
  <!-- Main Content -->
  <main id="main-content">
    
    <!-- About Section -->
    <section id="about" class="section">
      <h2>ABOUT</h2>
      <p><!-- Paragraph 1 --></p>
      <p><!-- Paragraph 2 --></p>
    </section>
    
    <!-- Work Section -->
    <section id="work" class="section">
      <h2>SELECTED WORK</h2>
      
      <article class="project-card" aria-expanded="false">
        <div class="project-header">
          <h3><!-- Project Title --></h3>
          <p class="project-role"><!-- Role --></p>
          <p class="project-outcome"><!-- Outcome --></p>
          <button class="expand-toggle" aria-label="Expand project details">+</button>
        </div>
        <div class="project-details">
          <ul>
            <li><!-- Detail 1 --></li>
            <li><!-- Detail 2 --></li>
            <li><!-- Detail 3 --></li>
          </ul>
        </div>
      </article>
      
      <!-- Repeat for other projects -->
      
    </section>
    
    <!-- Contact Section -->
    <section id="contact" class="section">
      <h2>CONTACT</h2>
      <p>
        <a href="mailto:terence.fo@gmail.com">terence.fo@gmail.com</a>
      </p>
      <p>
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
      <p>
        <a href="/files/Terence_Fox_Resume.pdf" download>Download Resume</a>
      </p>
    </section>
    
  </main>
  
  <!-- Footer -->
  <footer class="footer">
    <img src="/assets/logo.png" alt="Terence Fox logo" class="footer-logo">
    <p>Â© 2026 Terence Fox</p>
  </footer>
  
  <script>
    /* Inline JavaScript here or link to external script */
  </script>
</body>
</html>
```

---

**End of PRD**

This document should provide all necessary information for Claude Code to implement the portfolio website. For questions or clarifications, contact Terence Fox.
