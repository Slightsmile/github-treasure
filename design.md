You are an expert UI/UX designer and Senior Full Stack Next.js developer.

Build a modern, fast, minimalist website called **GitHub Treasures**.

# Overview

GitHub Treasures is a curated collection of hidden gems from GitHub—open source projects that are incredibly useful but relatively unknown.

The purpose is to help developers discover amazing repositories without digging through thousands of GitHub stars or Reddit threads.

The data source is a local JSON file.

The design philosophy should be inspired by:

- Vercel
- Linear
- shadcn/ui
- Raycast
- GitHub
- Apple Human Interface Guidelines

The website should feel premium, extremely clean, and fast.

No unnecessary animations.

Everything should feel intentional.

---

# Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- next/font
- Framer Motion (very subtle)
- Fuse.js (client-side search)
- JSON as data source

No database.

No authentication.

Static generation wherever possible.

---

# Theme

Support both:

- Dark Mode
- Light Mode

Dark mode should be the default.

Theme switcher in navbar.

Use next-themes.

---

# Design Language

Minimal.

Large spacing.

Rounded corners.

Excellent typography.

No gradients everywhere.

Mostly black/white with one accent color.

Use subtle borders.

Very small shadows.

Soft hover effects.

Cards should feel like GitHub + Linear.

No glassmorphism.

No flashy effects.

Focus on readability.

---

# Color Palette

Dark

Background:
#09090B

Card:
#111113

Border:
#27272A

Primary Text:
#FAFAFA

Secondary:
#A1A1AA

Accent:
#3B82F6

Light

Background:
#FFFFFF

Card:
#FAFAFA

Border:
#E5E7EB

Text:
#111827

Secondary:
#6B7280

Accent:
#2563EB

---

# Typography

Use Inter.

Large headings.

Comfortable spacing.

Readable paragraphs.

---

# Website Structure

Home

About

No login.

No dashboard.

---

# Navbar

Logo

GitHub Treasures

Links

Home

About

GitHub (optional external repository)

Theme Toggle

Sticky navbar

Subtle blur while scrolling.

---

# Hero Section

Large title

"Discover Hidden GitHub Goldmines"

Subtitle

"A curated collection of underrated open-source projects worth knowing."

Primary button

Browse Projects

Secondary button

GitHub

Below hero show:

- Total Projects
- Categories
- Last Updated

These should be calculated automatically from JSON.

---

# Search

Prominent search bar.

Search by

- Project Name
- Description
- Category
- Tags

Use Fuse.js.

Instant search.

Highlight matching results.

---

# Categories

Display categories as rounded pills.

Examples:

AI

Developer Tools

CLI

Productivity

Automation

Self Hosted

Learning

Security

DevOps

Frontend

Backend

React

Next.js

Python

Rust

Go

Mobile

APIs

Design

Open Source

When clicked

Filter instantly.

Support selecting multiple categories.

Also include

Clear Filters button.

---

# Sorting

Newest

Alphabetical

Random

---

# Project Grid

Responsive cards.

Desktop

3 columns

Tablet

2 columns

Mobile

1 column

Each card contains:

Repository Name

Short Description

Category

Tags

GitHub icon

External link

Copy Link button

Optional Star count field (if available in JSON)

Optional Language badge

Hover animation should be subtle.

---

# Card Example

────────────────────────────

Repo Name

A blazing fast terminal file manager.

CLI

Rust

⭐ 7.8k

Open Repository →

────────────────────────────

---

# Project Page

Optional dynamic route

/project/[slug]

Show

Repository name

Description

Category

Tags

Repository URL

Why it's interesting

Screenshots placeholder

Back button

---

#  Txt File Structure

Example

#1 | Page 1 | ArDRafi (rep: 1493)
ArDRafi on 2023-09-07 12:04 AM
https://www.torrentbd.net/forums.php?action=viewpost&postid=418326

After reading the forum post about Obtainium (App-store for Open Source Softs). And realising we really have very little knowledge about all the useful apps floating on the git-hub waiting to be found. As @Zodd vai mentioned finding them tends to be very tiresome. So why not share our hidden gem in this thread?

Share all the useful tools and tricks you found in GitHub along with what platform it uses and a brief description about its uses :
       
Example :

Tachiyomi - https://github.com/tachiyomiorg/tachiyomi  - (Android) - a free Manga reader. can fetch manga from pretty much all sources. 


Please refrain from spamming in this thread since many of us have bookmarked it to find useful software and tricks within GitHub. It would be much more helpful to send a direct message to the person instead.

------------------------------------------------------------

Stored inside source.txt

Create reusable TypeScript interfaces.

Dont take torrentbd link or user link. Take the github project link from here and the description. if Description isnt available find online.

---

# Search Logic

Searching

"terminal"

Should match

Project title

Description

Tags

Category

Language

Case insensitive.

---

# Empty State

Illustration/Icon

"No projects found."

Suggestion

Try another keyword.

---

# About Page

Title

About GitHub Treasures

Content

GitHub Treasures is a curated directory of underrated open-source GitHub projects that deserve more attention.

The goal is to help developers discover useful tools, libraries, frameworks, and utilities that often go unnoticed despite their quality.

This collection is community-driven and continuously evolving.

The initial collection has been compiled from discussions on the TorrentBD Forum, a community-driven forum where members frequently share valuable GitHub repositories, developer tools, and hidden open-source gems. The projects have been organized into a searchable and categorized directory to make discovery easier.

This website is intended for educational purposes and to promote the open-source ecosystem by making exceptional projects more discoverable.

Also include

Features

Fast search

Category filters

Minimal UI

Dark mode

Static and blazing fast

Footer

Made for developers ❤️

---

# Footer

GitHub Treasures

Discover underrated open source.

Links

Home

About

GitHub

Theme Toggle (optional)

Copyright

---

# SEO

Metadata

OpenGraph

Twitter Cards

Dynamic title

Dynamic description

robots.ts

sitemap.ts

Proper metadata API.

---

# Performance

Use Server Components wherever possible.

Avoid unnecessary client components.

Lazy load heavy components.

Optimize fonts.

Use static generation.

Lighthouse score target:

95+

---

# Accessibility

Semantic HTML

Keyboard navigation

Visible focus states

ARIA labels

Proper contrast

Screen reader friendly

---

# Responsive Design

Mobile first.

Perfect on

320px

768px

1024px

1440px

Ultra-wide.

---

# Code Quality

Use feature-based folder structure.

Components should be reusable.

Avoid duplicate code.

Proper TypeScript types.

Clean architecture.

Follow Next.js best practices.

---

# Suggested Folder Structure

app/
  layout.tsx
  page.tsx
  about/page.tsx
  project/[slug]/page.tsx

components/
  navbar.tsx
  footer.tsx
  hero.tsx
  project-card.tsx
  search-bar.tsx
  category-filter.tsx
  project-grid.tsx
  stats.tsx
  theme-toggle.tsx

data/
  projects.json

lib/
  search.ts
  utils.ts

types/
  project.ts

public/
  logo.svg

---

# Nice-to-Have Features

• Command palette (⌘K / Ctrl+K) for quick search
• URL query parameters for search and filters
• Shareable filtered URLs
• Copy repository URL with toast notification
• Recently added section
• Featured projects section
• Keyboard shortcuts
• Favorite projects (stored in localStorage)
• Random Treasure button
• View toggle (Grid/List)
• Smooth page transitions
• "Surprise Me" button that opens a random project
• Category counts beside each filter
• Scroll-to-top button
• Responsive sticky filter bar

---

# Overall Goal

The finished website should feel like a premium developer resource—simple, elegant, fast, and highly usable. Every interaction should prioritize speed, clarity, and discoverability. It should be a place developers enjoy browsing, making it easy to uncover underrated open-source "treasures" through powerful search, intuitive categorization, and a thoughtfully minimalist interface.