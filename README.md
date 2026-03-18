# Shri Ganesh — Interiors & Carpentry

Premium React + Tailwind CSS website for Shri Ganesh Interiors & Carpentry, Mumbai.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Project Structure

```
shri-ganesh/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                   ← Global styles + Tailwind layers
    ├── hooks/
    │   └── useScrollReveal.js      ← Intersection Observer hook
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Services.jsx
    │   ├── Projects.jsx
    │   ├── Testimonials.jsx
    │   ├── ContactUs.jsx
    │   ├── Footer.jsx
    │   └── FloatingButtons.jsx
    └── assets/
        ├── images/                 ← Place your images here
        │   ├── background.jpg      (hero background / video poster)
        │   ├── about-image.png     (about section photo)
        │   ├── carpenter.jpg       (service 1)
        │   ├── interior-design.jpg (service 2)
        │   ├── consultation.jpg    (service 3)
        │   ├── pexels-heyho-7195545.jpg  (service 4)
        │   ├── renovation.jpg      (service 5 + projects tile 5)
        │   ├── pj-img.png          (projects hero tile)
        │   ├── bg-img.jpg          (contact section background)
        │   └── icon.png            (favicon)
        ├── video/
        │   └── 5384976-uhd_4096_2160_30fps.mp4  (hero video)
        ├── projects-image/
        │   ├── project1.jpg
        │   ├── project2.jpg
        │   └── project3.jpg
        └── social-medias-icons/
            ├── facebook.png
            ├── instagram.png
            └── youtube.png
```

---

## 🖼️ Adding Your Assets

Copy all your original asset files into `src/assets/` matching the paths above.
Every image has an `onError` fallback to Unsplash, so the site works even without local images.

---

## 📬 Contact Form

The form uses **Formspree** (ID: `mnnvybbn`) — your original form ID is preserved.
Submissions go directly to your email. No backend needed.

---

## 🎨 Design Tokens

All design tokens live in `tailwind.config.js`:

| Token        | Value     |
|------------- |-----------|
| `gold`       | `#C9A84C` |
| `gold-light` | `#E5C97E` |
| `gold-dark`  | `#9E7A28` |
| `dark`       | `#111111` |
| `dark2`      | `#1A1A1A` |
| `dark3`      | `#222222` |
| `cream`      | `#F8F6F1` |
| font-display | Cormorant Garamond |
| font-body    | DM Sans   |

---

## 🔧 Tech Stack

- **React 18** — Component architecture
- **Vite 5** — Lightning-fast dev/build
- **Tailwind CSS 3** — Utility-first styling
- **Formspree** — Contact form backend
- **Google Fonts** — Cormorant Garamond + DM Sans
