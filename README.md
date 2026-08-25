<div align="center">

# 🚀 NIRVAN '26

### **"Where Ideas Become Innovation"**

[![React](https://img.shields.io/badge/REACT-18.2%2B-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/TAILWIND_CSS-3.4%2B-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/VITE-5.1%2B-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Lucide React](https://img.shields.io/badge/LUCIDE_ICONS-0.344%2B-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev)
[![Status](https://img.shields.io/badge/STATUS-PRODUCTION--READY-48BB78?style=for-the-badge)](https://github.com)

> **NIRVAN '26** is a modern, ultra-fast, cyber-glassmorphic web platform engineered for Graphic Era Hill University's flagship annual technical festival. Built with React and Tailwind CSS, it features real-time search filters, interactive event overlays, dynamic team registration forms, schedule timelines, speaker showcases, and media galleries.

---

</div>

## 📌 Table of Contents

- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [How to Run](#-how-to-run)
- [Pipeline Overview](#-pipeline-overview)
- [Interactive Features & Controls](#-interactive-features--controls)
- [File Generation Summary](#-file-generation-summary)

---

## 🧠 System Architecture

```text
┌─────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│  Navbar & Global│ ──> │ State Management    │ ──> │ Dynamic Page Views  │
│  Navigation     │     │ (App.jsx State)     │     │ (HomePage, Events,  │
└─────────────────┘     └─────────────────────┘     │  Schedule, etc.)    │
                                   │                └─────────────────────┘
                                   ▼                           │
                        ┌─────────────────────┐                │
                        │ Real-Time Filters   │                ▼
                        │ (Category, Search,  │     ┌─────────────────────┐
                        │  Team Sizes)        │     │ Interactive Modals  │
                        └─────────────────────┘     │ (Detail & Dynamic   │
                                   │                │  Registration)      │
                                   ▼                └─────────────────────┘
                        ┌─────────────────────┐                │
                        │ Filtered Events     │ ───────────────┘
                        │ Grid Render         │
                        └─────────────────────┘

##📁 Project Structure

nirvan-26-techfest/
├── public/                     ← Static brand assets & sponsor logos
│   ├── gehu-logo.png
│   ├── tech-geeks-logo.png
│   └── favicon.svg
├── src/
│   ├── components/             ← Reusable modular React UI components
│   │   ├── layout/             ← Navbar, Footer
│   │   ├── home/               ← HeroSection, CountdownTimer, AboutFest
│   │   ├── events/             ← EventCard, EventFilterBar, EventDetailModal
│   │   ├── schedule/           ← ScheduleTimeline, ScheduleFilter
│   │   ├── speakers/           ← SpeakerCard, SpeakerBioModal
│   │   ├── sponsors/           ← SponsorTierGrid, ProspectusDownload
│   │   ├── gallery/            ← GalleryCarousel, MasonryGrid
│   │   └── dynamic-forms/      ← GeneralRegisterModal, EventRegisterModal
│   ├── pages/                  ← Top-level router views
│   │   ├── HomePage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── SchedulePage.jsx
│   │   ├── SpeakersPage.jsx
│   │   ├── GalleryPage.jsx
│   │   └── SponsorsPage.jsx
│   ├── data/                   ← Data mock arrays
│   │   ├── eventsData.js
│   │   ├── scheduleData.js
│   │   ├── speakersData.js
│   │   └── sponsorsData.js
│   ├── App.jsx                 ← Main application root & state orchestration
│   ├── main.jsx                ← React DOM entrypoint
│   └── index.css               ← Tailwind CSS directives & cyber styles
├── index.html                  ← HTML5 entry structure
├── package.json                ← Project dependencies & scripts
├── postcss.config.js           ← PostCSS configuration for Tailwind
├── tailwind.config.js          ← Custom colors, glassmorphism, & animations
└── vite.config.js              ← Vite build engine configuration

## 🛠️ Tech Stack

| Technology | Role |
| :--- | :--- |
| **React 18** | Core UI component engine & state management |
| **Tailwind CSS** | Cyber-tech dark mode styling & glassmorphism |
| **Vite 5** | High-performance build tool & dev server |
| **Lucide React** | Modern high-contrast vector icon library |
| **PostCSS & Autoprefixer** | CSS processing & vendor prefixing |
| **JavaScript (ES6+)** | Dynamic filtering algorithms & state hooks |

---

##🔧 Installation

1. Clone the repository
git clone [https://github.com/DeepeshKafalatiya/Nirvan-TechFest-2026.git](https://github.com/DeepeshKafalatiya/Nirvan-TechFest-2026.git)
cd Nirvan-TechFest-2026

2. Install dependencies
npm install

##🚀 How to Run
Execute the steps in order to start your development environment or preview production builds.

Step 1 — Launch Development Server
npm run dev
Starts the local development server with Hot Module Replacement (HMR).

Default Local URL: http://localhost:3000

Step 2 — Build for Production
npm run build
Compiles optimized static bundle into the dist/ folder ready for Vercel/Netlify deployment.

Step 3 — Preview Production Build
npm run preview
Serves the locally built production bundle from dist/ to verify performance prior to deployment.

## 📊 Pipeline Overview

eventsData.js     ──> EventFilterBar  ──> Live Filtering Logic ──> EventCard Grid
scheduleData.js   ──> Day Switcher    ──> Timeline Filter      ──> Schedule Timeline
speakersData.js   ──> Profile Cards   ──> Bio Modal Overlay    ──> Speaker Modal
Registration Flow ──> Dynamic Inputs  ──> Form Validation      ──> Success Ticket Pass

## 🎮 Interactive Features & Controls

| Feature | Action / Control |
| :--- | :--- |
| **Real-time Event Search** | Instant filter by event title, tech stack, or tags |
| **Category Switcher** | Filter by Hackathons, CTFs, E-Sports, or Workshops |
| **Team Size Selector** | Switch between Solo (1), 2-4 Members, or 5 Members |
| **Event Detail Modal** | View full rules, schedule, eligibility, and prize pools |
| **Dynamic Team Form** | Dynamic input generator matching event maximum team sizes |
| **Timeline Schedule** | Tabbed Day 1 / Day 2 agenda navigation with category tags |
| **Interactive Gallery** | Lightbox viewer with full-screen photo zoom & carousel controls |

---

## 📁 File Generation Summary

| File | Primary Role | Output / Used By |
| :--- | :--- | :--- |
| `src/App.jsx` | Global state & page router | Main layout render |
| `eventsData.js` | Competition data store | `EventsPage.jsx`, `HomePage.jsx` |
| `scheduleData.js` | Timetable event structure | `ScheduleTimeline.jsx` |
| `speakersData.js` | Keynote presenter directory | `SpeakersPage.jsx` |
| `sponsorsData.js` | Sponsorship tier assets | `SponsorTierGrid.jsx` |
| `EventRegisterModal.jsx` | Handles multi-member team entry | `App.jsx` dynamic modal |


⭐ If you found this project helpful, give it a star! ⭐
