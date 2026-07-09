# Design System & Documentation: Tripod Creative Digital Hub
This document provides a comprehensive blueprint of the visual identity, design tokens, layout architectures, components, page structures, responsive behaviors, and animation notes for the **Tripod Creative Agency** digital ecosystem.

---

## 1. Executive Summary & Design Philosophy
**Tripod Creative Agency** uses the **Cinematic Prism** design system. The visual theme is designed to evoke high-end, premium, and avant-garde cinematic aesthetics. The design combines structured geometric lines, deep dark backdrops, glowing orange and gold light traps, glassmorphism surfaces, and active 3D WebGL geometries to create a high-contrast, premium, and future-proof digital hub.

---

## 2. Design Tokens

### A. Color Palette
The color system utilizes a refined, warm-toned dark mode palette with glowing primary accents.

| Token Name | Hex Value | Semantic / Usage |
| :--- | :--- | :--- |
| `background` | `#111415` | Default dark backdrop across screens |
| `body-bg-dark` | `#000000` | Pure black background used on specific body wrappers for extreme contrast |
| `surface-dim` | `#111415` | Muted background surfaces |
| `surface-container` | `#1d2021` | Low-elevation cards and section grids |
| `surface-container-lowest` | `#0c0f10` | Darkest container backgrounds (e.g., footer, CTA segments) |
| `surface-container-low` | `#191c1d` | Moderate-elevation containers |
| `surface-container-high` | `#282a2b` | High-elevation overlays and interactive cards |
| `surface-container-highest`| `#323536` | Tooltips, tags, and accent overlays |
| `primary` | `#ffb688` | Warm peach/orange accent (primary brand color) |
| `primary-container` | `#ff7e00` | Deep saturated orange for gradients and active containers |
| `secondary-container` | `#fdd000` | Golden yellow used in gradients and primary buttons |
| `secondary` | `#fff0c8` | Soft cream-white for highlight texts and accents |
| `secondary-fixed` | `#ffe07c` | Pastel yellow accents |
| `on-surface` | `#e1e3e4` | High-contrast body text and active icons |
| `on-surface-variant` | `#dfc0af` | Peach-tinted warm gray for labels, descriptions, and secondary content |
| `outline` | `#a78b7b` | Border color for cards and input elements |
| `outline-variant` | `#584235` | Lower-contrast borders |

#### Brand Gradients
*   **Primary Button Gradient / Active Accent:**
    `linear-gradient(90deg, #ffb688 0%, #fdd000 100%)` (warm peach-orange to gold-yellow).
*   **Alternative / Deep Accent Gradient:**
    `linear-gradient(to right, #ffb688, #fdd000)` (used on contact forms and WhatsApp buttons).

---

### B. Typography
The typography system features three distinct font families designed to establish hierarchical contrast.

*   **Display & Headings:** `Montserrat` (Sans-serif) - bold, geometric, and impactful.
*   **Body Text:** `Inter` (Sans-serif) - highly readable and neutral.
*   **Labels & Small Metadata:** `Geist` (Monospace/Sans-serif hybrid) - technical, clean, and modern.

#### Typography Classes & Scales
| Font Scale Class | Family | Size (px) | Line Height | Weight | Letter Spacing | Responsive Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-lg` | Montserrat | `72px` | `80px` | `800` | `-0.04em` | Scales down to `32px` / `40px` on mobile |
| `headline-lg` | Montserrat | `48px` | `56px` | `700` | `-0.02em` | Scales to `32px` on mobile (`headline-lg-mobile`) |
| `headline-md` | Montserrat | `32px` | `40px` | `600` | `Normal` | Standard subheadings on desktop |
| `body-lg` | Inter | `18px` | `28px` | `400` | `Normal` | Intro paragraphs and lead text |
| `body-md` | Inter | `16px` | `24px` | `400` | `Normal` | Default body copy |
| `label-md` | Geist | `14px` | `20px` | `500` | `0.05em` | Buttons, navigation links, and small tags |
| `label-sm` | Geist | `12px` | `16px` | `600` | `0.1em` | Uppercase subtitles and overlines |

---

### C. Spacing System
A strict grid spacing framework based on an 8px base unit.

| Spacing Token | Value | Applied To |
| :--- | :--- | :--- |
| `unit` | `8px` | Smallest element paddings, gap between icons and text |
| `gutter` | `24px` | Grid column spacing, card gap on mobile |
| `margin-mobile` | `20px` | Horizontal screen margins on mobile viewports |
| `margin-desktop` | `64px` | Horizontal screen margins on desktop viewports |
| `section-gap` | `120px` | Vertical margins separating page sections |
| `container-max` | `1440px` | Maximum structural width of content boundaries |

---

### D. Shape & Borders (Shape System)
*   **Border Radius:**
    *   Default / Inputs / Small Buttons: `0.25rem` (`4px`) or `0.5rem` (`8px`)
    *   Card Outlines: `0.75rem` (`12px` - `rounded-xl`)
    *   Bento Grid Components / Sections: `1.5rem` (`24px` - `rounded-3xl`)
    *   Hero Glass Wrappers: `3rem` (`48px` - `rounded-[48px]`)
    *   Pills & CTA Buttons: `9999px` (`rounded-full`)

---

## 3. Structural Layout & Shell

### A. Navigation System (TopNavBar)
*   **Properties:** Translucent fixed-to-top layout.
*   **Visual Style:** `bg-white/5` with `backdrop-blur-[32px]` and `border-b border-white/10`.
*   **Layout:**
    *   **Left:** Brand Name: `Tripod Creative Agency` / `Tripod.` in Montserrat Bold.
    *   **Center (Desktop):** Links to pages (Services, Portfolio, About, Process) formatted in `label-md` with transition hover colors mapping to the primary tint.
    *   **Right:** Localization selector (`EN/SW` for Swahili) + WhatsApp CTAs styled with the orange-yellow gradient.
*   **Mobile Behavior:** Links collapse into a burger drawer menu (or standard mobile layout) with margins adapting to `20px`.

### B. Footer System
*   **Visual Style:** Deep background `bg-surface-container-lowest` with a thin top border `border-t border-white/5`.
*   **Layout:**
    *   Large branding typography centered (`Tripod.` / `Tripod Creative Agency`).
    *   Horizontal list of links (Privacy Policy, Terms of Service, Instagram: https://www.instagram.com/tripodcreative_/?hl=en, Contact).
    *   Copyright label: `© 2026 Tripod Creative Agency. All rights reserved.` (opacity 60%, `body-md` text size).

---

## 4. Custom Components & UI Systems

### A. Glassmorphism Cards (`glass-card`)
The structural base of all grids and interactive zones.
*   **CSS Definition:**
    ```css
    .glass-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
        backdrop-filter: blur(32px);
        border: 1px solid rgba(255, 255, 255, 0.12);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    ```
*   **Interactive State (Hover):**
    ```css
    .glass-card:hover {
        border-color: rgba(255, 182, 136, 0.4);
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }
    ```
*   **Light Trap Overlay:** A radial gradient used on cards to create a glowing flare effect reflecting on hover:
    `radial-gradient(circle at top left, rgba(255, 182, 136, 0.08) 0%, transparent 70%)` (also referred to as `.hot-spot`).

### B. Buttons & Interactive States
*   **Primary CTA Buttons:**
    *   Class: `primary-gradient` / `primary-button-gradient`
    *   Visual: Rich orange gradient text/background.
    *   Micro-interaction: Scale down on click (`scale-95`), slight translateY and glow on hover.
*   **Animated Underlines (`animated-underline`):**
    Applied to secondary textual links:
    ```css
    .animated-underline::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        width: 0;
        height: 1px;
        background: #ffb688;
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }
    .animated-underline:hover::after {
        width: 100%;
    }
    ```

### C. Bento Grids
*   **Values Bento Grid (About Us):**
    *   A 3-column setup on desktop where the central card is visually offset downwards using a CSS translation (`translate-y-12`) to break alignment grids and keep user focus dynamic.
*   **Ecosystem Bento Grid (Music Studio):**
    *   Uses a 12-column layout. Column 1 (Recording Studio) spans `md:col-span-8` with a backdrop image overlay. Column 2 (Sonic Architecture) spans `md:col-span-4` with structural tags.

### D. Infinite Text Loop / Marquee (`animate-infinite-scroll`)
*   Used on the Music Academy benefits section.
*   **CSS Keyframes:**
    ```css
    @keyframes infinite-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
    }
    .animate-infinite-scroll {
        animation: infinite-scroll 40s linear infinite;
    }
    ```
*   **Structure:** Dual identical container elements containing large italicized uppercase brand statements separated by colored circles.

---

## 5. Screen-by-Screen Breakdown

### 1. Home Page (`Home.html`)
*   **Hero Section:** Contains the primary 3D animated tripod logo. A text overlay in `display-lg` scale matches the rotation and movements of the floating geometries.
*   **Showreel Section:** Large cinematic thumbnail overlay with glass container, hover scale effects, and absolute centered play button.
*   **Services Ecosystem:** Grid displaying 6 key pillars (Branding, Production, Marketing, Photography, Drone, Music Studio). Each service card uses icons from Google Material Symbols.
*   **Why Choose Tripod:** Structured layout showing corporate strength (Precision, Speed, Global Scale, Modern Tech Stack).

### 2. About Us Page (`About_Us.html`)
*   **Hero Section:** Simple, minimalist structure focused on the tagline: `Visual Storytellers.` with a vertical scroll line.
*   **Mission & Vision:** Split layout (1/3 text, 2/3 imagery). Left column contains core text, right contains a glass-card wrapped image of an optical lens.
*   **Core Values Bento Grid:** Three cards: Cinematic Excellence, Strategic Audacity, Radical Synergy. Card 2 offset downward.
*   **Our Approach:** Standardized 4-step horizontal timeline (Discover, Strategy, Execution, Optimization) connected by a central horizontal gradient line.
*   **Team Culture Section:** Grid showing creative professionals. Grayscale filter on load, transitioning to full color and scale on hover.

### 3. Services Page (`Our_Services.html`)
*   **Hero Section:** Overline tag `Our Expertise` followed by the header `Where Vision Meets Cinematic Precision.`
*   **Services Pillars:** Grid containing cards for Brand Strategy, Creative Design, Printing & Production, Digital Marketing, Photography & Film, and Music & Audio.
*   **Featured Service:** Web & App Development spans all 3 columns (`lg:col-span-3`) at the bottom. Features technology pills (React Native, SaaS Architecture) and a direct call to action.
*   **Atmospheric Section:** Split screen: Left column displays standard bullet checklists; right column displays a floating glass card housing studio imagery.

### 4. Portfolio Page (`Portfolio.html`)
*   **Hero Section:** `Cinematic Visions Brought to Life` text with a green-to-orange pulsing active indicator.
*   **Sticky Filter Bar:** Sticky to top of page on scroll, containing categorizations (All, Branding, Graphics, Printing, Photography, Video, Events, Music, Digital Campaigns). Button styles transition to `active-filter` style upon click.
*   **Portfolio Masonry Grid:** Adaptive grid (`columns-1` on mobile, `md:columns-2`, `lg:columns-3`) containing masonry items of varying aspect ratios (`aspect-[4/5]`, `aspect-[1/1]`, `aspect-[16/9]`). Hover reveals gradient text overlays and view buttons.

### 5. Contact & Booking Page (`Contact_and_Booking.html`)
*   **Hero Section:** Symmetrical intro with floating blurred lights.
*   **Interactive Booking Grid (12 Columns):**
    *   **Left (7 Cols):** Start Your Journey interactive form. Elements include custom input fields (Name, Phone, Email, Service dropdown) and a budget selector (Tanzania-friendly/neutral options: Under TZS 5M, TZS 5M - 15M, TZS 15M - 50M, TZS 50M+ / or Neutral: Starter, Growth, Premium, Enterprise).
    *   **Right (5 Cols):** Houses the Instant WhatsApp consultation card (using `[WhatsApp Phone Number Placeholder]`), quick-contact email/phone grids (using `[Contact Email Placeholder]` and `[Contact Phone Placeholder]`), and a dark-map location card detailing `[Office Location Placeholder]`.
*   **FAQ Segment:** Accordion panels utilizing standard CSS height and opacity transitions linked to dynamic triggers.

### 6. Music Studio & Academy Page (`Music_Studio_and_Academy.html`)
*   **Hero Section:** Dark aesthetic containing a live audio waveform icon, heading "Sonic Innovation & Mastery", and a floating glowing studio microphone mesh.
*   **Studio Ecosystem Grid:** Bento card components detailing recording equipment, Dolby Atmos spaces, and analogue mixing tools.
*   **Music Academy Section:** Standard 2-column split. Left column details mentoring features. Right column has a staggered 2x2 grid containing training course cards (Piano, Guitar, Drums, Vocal) with structural height offsets.

---

## 6. Animation & Interaction Specifications

### A. WebGL / Three.js 3D Canvas Renders
The site integrates dynamic 3D elements utilizing Three.js inside absolute-positioned, transparent containers (`threejs-container`).

#### 1. Core Tripod Geometry (Primary Animation)
*   **Mesh Structure:**
    *   **Central Ring:** `THREE.TorusGeometry(1, 0.05, 16, 100)` using Phong materials colored `#ff7e00` with an emissive glow intensity of `0.5`.
    *   **Three Legs:** Symmetrical cylinders (`THREE.CylinderGeometry(0.05, 0.05, 2.5, 8)`) rotated at `PI/8` on the Z-axis and offset by 120-degree angles around the Y-axis.
*   **Floating Elements:** Around the central ring, abstract creative meshes (cubes for camera bodies, spheres for lenses, cylinders for microphones) rotate independently.
*   **WebGL Lighting Config:**
    *   Ambient Light: `0xffffff`, intensity `0.5`
    *   Orange Point Light: `0xff7e00`, intensity `2` (Position: `5, 5, 5`)
    *   Cyan Point Light: `0x00d2ff`, intensity `1` (Position: `-5, -5, 2`)
*   **Animation Loop:** The primary group rotates on the Y-axis (`+0.005` rad/frame) and X-axis (`+0.002` rad/frame) while floating elements bob on a sine-wave function based on frame time.

#### 2. Standalone 3D Spiral Logo
*   **Path Geometry:** Extruded triangular spiral path (`THREE.ExtrudeGeometry` with `THREE.Shape` lines) mapped to mimic the Tripod brand mark.
*   **Overlay:** Glowing wireframe lines (`THREE.WireframeGeometry`) mapped over the extrude geometry with a gold color (`0xffcc00`) and low opacity.
*   **Floating Particles:** 30 small icosahedrons rotating with random speeds and phase parameters.

---

### B. CSS Keyframe Animations
*   **Float Animation (`float-animation`):**
    Translates cards and decorative items along the Y-axis to give them a weightless feel.
    ```css
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); } /* Some sections use -20px for larger meshes */
        100% { transform: translateY(0px); }
    }
    ```
*   **Active Waveform Animation (`waveform-anim`):**
    Vocal waveform simulator utilizing vertical scale keyframes:
    ```css
    @keyframes bounce {
        0%, 100% { height: 10%; }
        50% { height: 100%; }
    }
    ```
    Applied to 4 independent structural bars inside the studio badge, each offset using custom animation delays (`0.1s`, `0.3s`, `0.5s`, `0.2s`).

---

## 7. Responsive Rules & Breakpoints

The design uses Tailwind CSS responsive classes to adapt fluidly from mobile displays to large widescreen monitors.

*   **Grid Collapse rules:**
    *   All multi-column bento grids and lists collapse to a single column (`grid-cols-1`) on mobile and small tablet screens (`<768px`).
    *   On medium viewports (`md` - `768px` to `1024px`), layouts adapt to 2 columns.
    *   On desktop viewports (`lg` - `>1024px`), columns expand to 3 or 12-column bento ratios.
*   **Margin Scale:**
    *   Horizontal padding is set to `20px` (`px-margin-mobile`) on screens `<768px`.
    *   Horizontal padding scales to `64px` (`px-margin-desktop`) on screens `>768px`.
*   **Vertical Padding:**
    *   Vertical spacing between primary blocks is managed by `py-section-gap` which provides a uniform `120px` spacing, collapsing slightly on mobile to maintain visual balance.
*   **Card Parallax / Perspective Tilt:**
    For desktop displays with pointer mice, cards respond to mouse cursor movements by computing client coordinates relative to the card center, translating the result into a 3D rotation (`rotateX` / `rotateY`) under a `perspective(1000px)` style. This behavior is disabled on mobile viewports to conserve processor efficiency.
