# Inquisitive Mind Academy — Course Pages Architecture & Guide

This document explains the architecture of the redesigned Course pages system, how to add new courses, how to reorder modular sections, and how to replace placeholder dummy content with real CMS or API data.

---

## 1. System Architecture Overview

The course system is decoupled into three clean layers:

```
┌──────────────────────────────────────────────┐
│                  DATA LAYER                  │
│       src/app/data/courses.js (10 Courses)    │
│  - Single source of truth                    │
│  - Marked with `isDummy: true` flags         │
│  - Independent `sections[]` order per course  │
└──────────────────────┬───────────────────────┘
                       │
┌──────────────────────▼───────────────────────┐
│               SECTION LIBRARY                │
│       src/components/course/sections/*       │
│  - 16+ Modular, prop-driven, responsive UI   │
│  - Empty-state safe (renders if data exists) │
│  - Server-rendered HTML accordions & tables  │
│  - Min 44px tap targets, mobile-first design │
└──────────────────────┬───────────────────────┘
                       │
┌──────────────────────▼───────────────────────┐
│               ROUTING & SEO                  │
│  - /courses (Hub with no-JS fallback links)  │
│  - /courses/[slug] (Dynamic course pages)    │
│  - /courses/[slug]/opengraph-image.js (1200x)│
│  - /book-free-trial (Conversion action)      │
│  - app/sitemap.js & app/robots.js            │
│  - JSON-LD (Org, Course, Breadcrumb, FAQ)   │
└──────────────────────────────────────────────┘
```

---

## 2. Course Data Schema (`src/app/data/courses.js`)

Every course object adheres to this data contract:

| Field | Type | Description |
|---|---|---|
| `isDummy` | `boolean` | Flag set to `true` on all sample/placeholder copy. |
| `slug` | `string` | Unique URL slug (e.g., `french-b2-advanced-course`). |
| `type` | `string` | `"program"` \| `"level"` \| `"exam"` \| `"school"`. |
| `title` | `string` | Full title of the course. |
| `shortTitle` | `string` | Concise title for breadcrumbs and cards. |
| `h1` | `string` | Unique, high-converting H1 heading (one per page). |
| `heroSubtitle` | `string` | Value proposition and target outcomes summary. |
| `level` | `string` | CEFR level (A1–C2) or school grade range (Class 1–12). |
| `durationWeeks` | `number` | Total duration in weeks. |
| `hoursPerWeek` | `number` | Recommended guided hours per week. |
| `classSize` | `string` | Batch size guarantee (e.g., `Small Group (6–8 Students)`). |
| `mode` | `string` | `"online"` \| `"home"` \| `"both"`. |
| `languageOfInstruction` | `string` | Teaching medium and bilingual support. |
| `seo` | `object` | `titleTemplate`, `description` (CTR-formula), `keywords` (internal only), `ogImageText`. |
| `price` | `object` | `{ from: number, currency: "INR", plans: [...] }`. Falls back to WhatsApp inquiry if empty. |
| `nextBatch` | `object` | `{ date: "...", timings: ["..."] }`. |
| `outcomes` | `string[]` | Can-do action statements. |
| `whoItsFor` | `string[]` | Self-qualification checklist. |
| `whoItsNotFor` | `string[]` | Bounce-lowering disqualifiers. |
| `curriculum` | `array` | `[ { week: 1, title: "...", lessons: [...] } ]`. |
| `examAlignment` | `object` | `{ exam: "DELF B2", mapping: [...] }` (wording says "prepares for"). |
| `method` | `array` | `[ { title: "...", description: "..." } ]`. |
| `instructor` | `object` | E-E-A-T credentials and bio. |
| `faqs` | `array` | At least 5 unique questions & answers. |
| `testimonials` | `array` | Empty-state safe (`[]` by default; renders only when populated). |
| `sections` | `string[]` | Ordered list of section keys for this specific page. |
| `cta` | `object` | `{ primary: { text, href }, whatsappMessage }`. |

---

## 3. How to Add a New Course

1. Open `src/app/data/courses.js`.
2. Add a new object to the `courses` array following the schema above.
3. Include your desired `sections` array specifying the display order:
   ```javascript
   sections: [
     "hero",
     "quick-facts",
     "outcomes",
     "who-its-for",
     "curriculum",
     "exam-alignment",
     "teaching-method",
     "schedule-pricing",
     "instructor",
     "sample-lesson",
     "level-path",
     "comparison",
     "testimonials",
     "faq",
     "related-courses",
     "final-cta",
   ]
   ```
4. Save the file.
5. Next.js will automatically:
   - Generate static params for the new slug at build time (`generateStaticParams`).
   - Create the dynamic 1200x630 OG image route (`/courses/[slug]/opengraph-image`).
   - Add the URL to `sitemap.xml` dynamically via `src/app/sitemap.js`.
   - Render the card in `/courses` hub with filter support.

---

## 4. How to Reorder, Add, or Disable Sections

Each course page is rendered by `SectionRenderer.js`, which reads the `sections[]` array defined on that course.

- **To reorder:** Simply change the order of keys in the `sections` array in `courses.js`.
- **To remove a section:** Delete the key from the `sections` array.
- **To add a unique section:**
  1. Create your component in `src/components/course/sections/UniqueSections.js` or as a standalone file.
  2. Register the component key in `src/components/course/SectionRenderer.js`.
  3. Add the key into the course's `sections` array.

Available Section Keys:
- `hero`
- `quick-facts`
- `outcomes`
- `who-its-for`
- `curriculum`
- `exam-alignment`
- `teaching-method`
- `schedule-pricing`
- `instructor`
- `sample-lesson`
- `level-path`
- `comparison`
- `testimonials` (empty-state safe)
- `faq`
- `related-courses`
- `final-cta`
- `free-level-test` (custom diagnostic CTA slot for level courses)
- Unique keys: `pronunciation-preview`, `past-tenses-mastery`, `argumentation-debates`, `clb7-express-entry-mapping`, `academic-synthesis-lab`, `literary-stylistics-seminar`, `tef-exam-simulator`, `pathway-overview`, `corporate-speech-lab`, `academic-board-split`.

---

## 5. How to Replace Dummy Data with CMS or API

All dummy data in `src/app/data/courses.js` is flagged with `isDummy: true`.

### Option A: Direct Replacement in `courses.js`
Search for `isDummy: true` and replace the placeholder text with your verified content, real instructor headshot URLs, and real batch dates. Remove or set `isDummy: false` once replaced.

### Option B: Headless CMS (Sanity, Strapi, Contentful)
1. In `src/app/data/courses.js`, replace the static array with an async fetch function:
   ```javascript
   export async function getAllCourses() {
     const res = await fetch("https://your-cms.com/api/courses", { next: { revalidate: 3600 } });
     return res.json();
   }
   ```
2. Shape your CMS schema to match the fields listed in Section 2 above.
3. No component code needs to be modified.

---

## 6. Technical SEO & Redirects

- **Canonical URL:** Automatically rendered on every course as `${NEXT_PUBLIC_SITE_URL}/courses/${slug}`.
- **Redirects:** Legacy `/course/*` URLs are permanently redirected (301) to `/courses/*` in `next.config.mjs`.
- **Dynamic OG Image:** Rendered at `/courses/[slug]/opengraph-image` with 1200x630 dimensions, brand palette, course title, and level pill.
- **JSON-LD:** Server-rendered `@graph` containing `EducationalOrganization` (service area only; no personal home address), `Course`, `BreadcrumbList`, and `FAQPage`.
- **Conversion:** All primary CTAs point to `/book-free-trial`, while WhatsApp alternatives pre-fill the course name via `wa.me/919878761488`.
