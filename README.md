# LAZAREV. — Digital Product Design Agency Website

A modern, interactive single-page website for LAZAREV, an award-winning digital product design agency specializing in AI & ML product design, UX/UI design, and digital transformation.

## Overview

This is a fully responsive, animated website built with HTML, CSS, and JavaScript. It features smooth scrolling animations, interactive elements, and a modern dark-themed design showcasing the agency's services, case studies, and design process.

## Features

### Core Functionality
- **Smooth Scrolling**: Implemented using Locomotive Scroll for enhanced user experience
- **Advanced Animations**: GSAP (GreenSock Animation Platform) for complex animations and transitions
- **Interactive Navigation**: Dropdown menus with hover effects and smooth transitions
- **Video Integration**: Playable video showcase with interactive controls
- **Case Studies Section**: Featured projects with hover effects and video previews
- **Service Showcase**: Expandable sections for UI/UX Design and Product Design services
- **Design Process Visualization**: Interactive process breakdown with scroll-triggered animations

### Design Elements
- Dark theme with green accent color (#0BA34E)
- Fully responsive layout
- Animated logo badges (Forbes, Adweek, PMI, Webby, etc.)
- Hover effects and micro-interactions throughout
- Custom loading animations

## File Structure

```
LAZAREV/
│
├── index.html      # Main HTML structure (323 lines)
├── script.js       # JavaScript functionality (199 lines)
├── style.css       # CSS styles and animations (659 lines)
└── README.md       # Project documentation
```

## Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Advanced styling, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality and animations

### External Libraries
- **Locomotive Scroll** (v3.5.4): Smooth scrolling implementation
- **GSAP** (GreenSock Animation Platform v3.12.5): Animation library
  - ScrollTrigger plugin for scroll-based animations
- **Remix Icon** (v4.2.0): Icon library for UI elements

### CDN Resources
- Remix Icon fonts
- Locomotive Scroll CSS & JS
- GSAP and ScrollTrigger

## Page Sections

### 1. Navigation Bar (`nav`)
- Fixed navigation with agency logo
- Interactive dropdown menus:
  - Case Studies
  - Areas of Expertise (AI & ML, Fintech, Real Estate, E-commerce, Web 3)
  - UI/UX Design
  - Product Design
  - Design Process
  - About Agency
- "Let's Talk" CTA button
- Smooth hover animations revealing submenu items

### 2. Hero Section (`#page1`)
- Large animated title: "AI & ML PRODUCT DESIGN AGENCY"
- Descriptive subtitle about the agency's expertise
- Service tags (Brand design, User Experience, Digital product design)
- Infinite scrolling logo carousel featuring awards and recognitions:
  - Forbes
  - Adweek
  - PMI
  - Webby Awards
  - Red Dot Design
- Initial loading animation

### 3. Insights Section (`#page2`)
- Left side: Text about exclusive UI/UX and product design insights
- Right side: Interactive blog post cards with:
  - Article titles
  - Thumbnail images that appear on hover
  - Mouse tracking for dynamic image positioning

### 4. Video Showcase (`#page3`)
- Background video with play button overlay
- Click to play/pause functionality
- Smooth video scaling and transitions
- "Watch Showreel" button

### 5. Case Studies (`#page4`)
- Featured projects:
  - **Accern. Rhea**: Financial intelligence platform
  - **AfroTech**: Tech conference platform
- Each case study includes:
  - Project title and description
  - Static cover image
  - Video preview on hover
  - Side-by-side layout (text left, media right)

### 6. Services Section (`#page5`)
- Sticky "Become a Client" button
- Expandable service categories using HTML `<details>` element:
  
  **UI/UX Design** (expanded by default):
  - UX Research
  - UX Design
  - UI Design
  - UX Audit
  
  **Product Design** (collapsed by default):
  - Same services as UI/UX Design
- Interactive hover effects on service items
- Overlay animations on service cards

### 7. Design Process (`#page6`)
- Process overview heading
- "See all Case Studies" CTA button
- Process breakdown into phases:
  - **Product Strategy**: 6 steps (Strategy Workshop, Idea Validation, Market Research, etc.)
  - **UX Design**: 2 steps
  - **UI Design**: 3 steps
  - **Delivery**: Final phase
- Scroll-triggered animations for process items

### 8. Footer (`#page7`)
- Placeholder section (currently empty)

## Color Scheme

- **Background Dark**: `#111` (Primary dark background)
- **Background Light**: `#fff` (White sections)
- **Accent Green**: `#0BA34E` (Primary brand color)
- **Text White**: `#fff` (White text)
- **Text Black**: `#000` (Black text)
- **Borders**: `#333`, `#dadada` (Subtle dividers)
- **Overlay**: `#222` (Hover overlays)

## JavaScript Functions

### `locomotiveAnimation()`
- Initializes Locomotive Scroll for smooth scrolling
- Configures scroll proxy for ScrollTrigger integration
- Enables smooth scrolling on tablet and mobile devices

### `navAnimation()`
- Handles navigation dropdown animations
- GSAP timeline animations for:
  - Menu expansion on hover
  - Staggered submenu item reveals
  - Menu collapse on mouse leave

### `page2Animation()`
- Manages blog post card interactions
- Shows/hides thumbnail images on hover
- Mouse tracking for dynamic image positioning

### `page3VideoAnimation()`
- Video play/pause functionality
- Video scaling and opacity transitions
- Case study video preview on hover (plays on hover, resets on leave)

### `page6Animations()`
- Scroll-triggered animations for process items
- Uses ScrollTrigger with scrub for smooth scroll-based animation

### `loadingAnimation()`
- Initial page load animation
- GSAP timeline for:
  - Hero section fade-in and scale
  - Navigation fade-in
  - Staggered content reveals

## Responsive Design

- Viewport-based units (`vw`, `vh`) for scalable typography and spacing
- Responsive font sizes
- Flexible layouts using Flexbox
- Smooth scrolling enabled for tablet and mobile devices

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, but recommended for development)

### Installation

1. Clone or download the project files
2. Ensure all files are in the same directory:
   - `index.html`
   - `script.js`
   - `style.css`

3. Open `index.html` in a web browser

### Development

For local development, you can use a simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Customization

### Changing Colors
Edit the color values in `style.css`:
- Search for `#0BA34E` to change the accent green color
- Search for `#111` to change the dark background
- Search for `#fff` to change white elements

### Adding Case Studies
Add new sections in `#page4` following the existing structure:
```html
<div class="section">
    <div class="sec-left">
        <h2>Project Name</h2>
        <p>Project description...</p>
    </div>
    <div class="sec-right">
        <img src="cover-image.jpg">
        <video muted src="preview-video.mp4"></video>
    </div>
</div>
```

### Modifying Navigation Items
Edit the `.nav-part2` section in `index.html` to add or remove menu items.

## External Resources

The website loads several resources from CDNs:
- **Remix Icon**: Icon fonts
- **Locomotive Scroll**: Smooth scrolling library
- **GSAP**: Animation library
- **Images**: Some images loaded from external URLs (lazarev.kiev.ua, assets-global.website-files.com)

Note: For production, consider hosting all assets locally or through your own CDN.

## Notes

- Some video files reference local paths (e.g., `./accern-rhea-cover-big.mp4`) - ensure these files exist or update the paths
- The website uses external image URLs - these may need to be replaced with local assets for offline use
- The navigation dropdown functionality relies on JavaScript - ensure JavaScript is enabled
- GSAP ScrollTrigger requires proper initialization with Locomotive Scroll

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Smooth scrolling works best on desktop
- Mobile and tablet support included with Locomotive Scroll tablet/smartphone configuration

## License

This project appears to be a portfolio/agency website. Please ensure you have the appropriate rights to use and modify the code.

## Author

LAZAREV. — Digital Product Design Agency

---

**Last Updated**: 2024

