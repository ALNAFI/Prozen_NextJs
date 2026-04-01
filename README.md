# Prozen — Next.js App Router Template

Prozen is a modern **business / consulting** website template built with **Next.js (App Router)**. It includes multiple home variations, inner pages, reusable sections, and a data-driven structure for quick customization.

---

### Project overview
- **Framework**: Next.js App Router
- **Pages**: Home, Home Two, Home Three, About, Services, Service Details, Projects, Project Details, Blog, Blog Details, Blog List, Team, Team Details, Pricing, FAQ, Contact, Not Found
- **Components**: reusable sections in `app/components/`
- **Assets**: images/icons in `public/images/`

---

### Requirements
- **Node.js**: LTS recommended
- **Package manager**: npm (recommended)

---

### Installation
1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

---

### Development
Run the dev server (hot reload):

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

---

### Production build
Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

### Folder structure
High-level structure (actual repo layout):

```text
app/
  (pages)/                 # App Router route group for inner pages & extra home variants
    home-two/
    home-three/
    about-us/
    blog/
    blog-details/
    blog-list/
    contact/
    faq/
    pricing/
    project/
    project-details/
    service/
    service-details/
    team/
    team-details/
    not-found/
  components/
    common/                # Header/Footer/Offcanvas/Breadcrumb/etc.
    pages/                 # Page sections grouped by page type (home, homeTwo, homeThree, etc.)
    ui/                    # UI utilities (Search, Preloader, BackToTop, Cursor, etc.)
  contexts/                # App contexts (Lenis, Offcanvas)
  data/                    # Template data (menus, content, lists, etc.)
  hooks/                   # Reusable hooks
  style/                   # Template CSS (imported in app/layout.js)
  layout.js                # Root layout + global CSS + site metadata
  page.js                  # Main home entry

public/
  images/                  # All images, icons, shapes, logos used by the template
  favicon.svg

package.json
```

---

### Customization guide
Most template content is centralized in **data files** and **public assets**.

#### How to change the logo
- **Header/Offcanvas/Footer logos** use images from:
  - `public/images/logo/`
- Update the SVG/PNG files there (keep the same filename), or change the referenced path in:
  - `app/components/common/Header.jsx`
  - `app/components/common/Offcanvas.jsx`
  - `app/components/common/Footer.jsx`
  - Home variant headers/footers in `app/components/pages/homeTwo/` and `app/components/pages/homeThree/`

#### How to change the menu
Menus are data-driven. Update the menu arrays in:
- `app/data/headerMenuData.js` (main header)
- `app/data/HomeThreeData.js` (Home Three header/footer menu)

#### How to change content (text, lists, cards)
Edit the relevant data modules in:
- `app/data/`

Examples:
- Home content: `app/data/homeData.js`
- Home Two content: `app/data/homeTwoData.js`
- Home Three content: `app/data/HomeThreeData.js`
- About page content: `app/data/aboutUsData.js`
- Blog content: `app/data/blogData.js` and `app/data/blogListAndDetailsData.js`
- Projects: `app/data/projectData.js`, `app/data/projectDetailsData.js`
- Services: `app/data/serviceAndDetailsData.js`

#### How to change images
All images live in:
- `public/images/`

If a component uses `next/image`, **use leading slashes** for local images:
- ✅ `"/images/hero/1.png"`
- ❌ `"images/hero/1.png"`

If you add new images, place them under `public/images/` and update the relevant `app/data/*` entry or component prop.

#### How to change metadata (title/description)
Metadata is defined using Next.js App Router metadata:
- **Global site metadata**: `app/layout.js`
- **Per-route metadata**: route `page.jsx` / `layout.js` under `app/(pages)/...` and `app/page.js`

Update:
- `export const metadata = { ... }` blocks

#### How to set the production site URL (SEO)
This template reads the site URL from an environment variable for SEO metadata:
- `NEXT_PUBLIC_SITE_URL`

Example:

```bash
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

This value is used by `app/layout.js` for `metadataBase` and Open Graph URLs.

---

### Technologies used
- **Next.js** (App Router)
- **React**
- **Bootstrap 5**
- **Swiper** (sliders/carousels)
- **AOS** (scroll animations)
- **Lenis** (smooth scrolling)
- **Font Awesome** (icons)

---

### Credits
This template uses the following libraries:
- Next.js / React
- Bootstrap
- Swiper
- AOS
- Lenis
- Font Awesome Free

All third‑party libraries remain the property of their respective owners. See `package.json` for the full dependency list.

---

### Support note
If you need help with setup, customization, or build issues, please contact the author/support channel provided with your ThemeForest purchase and include:
- your OS + Node.js version
- the command you ran
- the full terminal error output
