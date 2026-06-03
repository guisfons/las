# LAS for Life — Case Study

> **Full-Stack Next.js 14 Application** · Internationalized SaaS Platform · TypeScript · Radix UI · TanStack Query · GSAP · JWT Auth

![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-Components-8B5CF6)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-v4-FF4154)
![Live](https://img.shields.io/badge/Live-lasforlife.com.br-brightgreen)

<!-- TODO: Add screenshot of the LAS platform dashboard here -->

---

## 1. Project Overview

LAS for Life is a full-stack web application built with Next.js 14 (App Router) and TypeScript for [lasforlife.com.br](https://www.lasforlife.com.br/) — a platform delivering specialized content, resources, and tooling to its user base. The application is a modern, production-grade SaaS frontend architected with a component-driven design system, server-side rendering, JWT-based authentication, internationalization (i18n), and a rich interactive layer powered by GSAP animations and Radix UI primitives.

<!-- TODO: Add screenshot of the main landing page / hero section here -->

---

## 2. The Problem

The client required a digital platform that would go far beyond a conventional marketing website. The key requirements were:

- **Multi-language support** from day one, targeting both Brazilian Portuguese and English-speaking audiences.
- **Role-gated content** — different user tiers accessing different sections of the platform, enforced at the application layer.
- **High-fidelity interactive UI** — animations, transitions, and micro-interactions that reflect the premium nature of the service.
- **Scalable data layer** — a client-server architecture capable of handling complex data queries with caching, pagination, and optimistic updates without blocking the UI.
- **Type safety end-to-end** — a codebase maintainable by a team, with TypeScript enforcing contracts between the API layer and the UI components.

---

## 3. The Solution & Architecture

The application is built on Next.js 14 App Router, leveraging React Server Components for data-fetching-heavy views and Client Components for interactive surfaces. State management is handled by a combination of TanStack Query (server state) and Zustand (client state), keeping concerns cleanly separated.

### Tech Stack Breakdown

| Layer | Technology | Purpose |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR, RSC, routing, API routes |
| Language | TypeScript 5 | Full type safety |
| Styling | TailwindCSS 3 + SASS | Utility-first with custom overrides |
| UI Primitives | Radix UI (10+ components) | Accessible, unstyled base components |
| Component Library | shadcn/ui | Pre-composed design system |
| Server State | TanStack Query v4 | Data fetching, caching, background sync |
| Client State | Zustand 5 | Global UI state management |
| Forms | React Hook Form + Zod | Schema-validated, type-safe forms |
| Animation | GSAP 3 + Motion | Page transitions and scroll-driven animations |
| Icons | Tabler Icons + Lucide React | Consistent iconography |
| i18n | next-intl | Multi-language routing and translations |
| Auth | JWT (jsonwebtoken) + jwt-decode | Stateless token-based authentication |
| HTTP Client | Axios | API request handling with interceptors |
| Data Tables | TanStack Table v8 | Sortable, filterable, paginated tables |

### Authentication Architecture

JWT tokens are issued by the backend API and stored securely. The Next.js middleware layer validates tokens on every protected route request server-side, redirecting unauthenticated users before any page component renders — preventing content flash and reducing unauthorized data exposure.

### Internationalization

`next-intl` handles locale-aware routing (`/en/...`, `/pt/...`), with translation namespaces organized by feature area. The `@internationalized/date` and `@react-aria/i18n` packages handle locale-correct date formatting across the UI.

### Form Validation

All user-facing forms use React Hook Form with Zod schema validation. Error messages are type-safe and derived directly from the schema — no manually maintained validation strings. `remask` handles Brazilian-specific input masks (CPF, phone, CEP).

---

## 4. Technologies Used

- **Framework:** Next.js 14, React 18, TypeScript 5
- **Styling:** TailwindCSS 3, tailwind-merge, class-variance-authority, SASS
- **UI:** Radix UI (Accordion, Dialog, Select, Toast, Checkbox, NavigationMenu, RadioGroup, DropdownMenu), shadcn/ui, Lucide React, Tabler Icons
- **State & Data:** TanStack Query v4, Zustand 5, Axios
- **Forms:** React Hook Form, Zod, remask
- **Animation:** GSAP 3 (@gsap/react), Motion 12, Swiper 11
- **Auth:** jsonwebtoken, jwt-decode
- **i18n:** next-intl 4, @internationalized/date, @react-aria/i18n
- **Tables:** TanStack Table v8
- **Code Quality:** ESLint, Prettier, eslint-config-next
- **Live Site:** [lasforlife.com.br](https://www.lasforlife.com.br/)

---

## 5. Design Process & UI/UX

The interface was designed as a premium digital product — clean, spacious, and purposefully animated. GSAP-driven scroll animations guide the user's attention through content sections without resorting to gratuitous motion. The component architecture follows atomic design principles: primitive Radix UI elements are composed into shadcn/ui patterns, which are then composed into feature-specific components — ensuring visual consistency across the entire application surface.

The responsive layout is mobile-first, with Tailwind breakpoints ensuring a consistent experience across all device sizes. Swiper-powered carousels and TanStack Table grids provide rich data interaction on both mobile and desktop without sacrificing performance.

<!-- TODO: Add screenshot of the authenticated dashboard view here -->
<!-- TODO: Add screenshot of a data table with filtering/sorting active here -->
<!-- TODO: Add screenshot of the mobile responsive layout here -->

---

## 6. Project Outcomes

- **Type safety:** 100% TypeScript across the frontend codebase eliminates a class of runtime errors and enables confident refactoring at scale.
- **Performance:** Next.js App Router with React Server Components reduces the client-side JS bundle by rendering data-fetching logic on the server, resulting in faster initial page loads and improved Core Web Vitals.
- **Internationalization:** The platform serves both Portuguese and English-speaking users from a single codebase, with zero duplication of routing or component logic.
- **Developer experience:** Zod schema validation shared between form validation and API response parsing ensures that data contracts are defined once and enforced everywhere.
- **Scalability:** TanStack Query's caching and background refetch strategy means the UI stays responsive and up-to-date without manual cache management, supporting growth in data volume and user concurrency.
